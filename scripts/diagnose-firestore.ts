/**
 * Finds which Firestore databaseId accepts writes for this service account.
 * Does not print secrets.
 */
import { Firestore } from "@google-cloud/firestore";
import { config } from "dotenv";
import { GoogleAuth } from "google-auth-library";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

type SaJson = {
  project_id?: string;
  client_email?: string;
  [key: string]: unknown;
};

async function listDatabaseIds(
  projectId: string,
  credentials: SaJson
): Promise<string[]> {
  const auth = new GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    projectId
  });
  const client = await auth.getClient();
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases`;
  try {
    const res = await client.request<{ databases?: Array<{ name: string }> }>({
      url
    });
    const rows = res.data.databases ?? [];
    return rows.map((row) => {
      const segs = row.name.split("/");
      return segs[segs.length - 1] ?? "";
    }).filter(Boolean);
  } catch (e) {
    console.warn(
      "listDatabases API failed:",
      e instanceof Error ? e.message : e
    );
    return [];
  }
}

async function tryWrite(
  projectId: string,
  credentials: SaJson,
  databaseId: string
): Promise<boolean> {
  const db = new Firestore({
    projectId,
    credentials,
    databaseId
  });
  const ref = db.collection("_connectivity_probe").doc("ping");
  await ref.set({ ok: true, at: new Date().toISOString() });
  const snap = await ref.get();
  const ok = snap.exists;
  await ref.delete();
  return ok;
}

async function main() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim();
  if (!raw) {
    console.error("Set FIREBASE_SERVICE_ACCOUNT_JSON first.");
    process.exitCode = 1;
    return;
  }

  let credentials: SaJson;
  try {
    credentials = JSON.parse(raw) as SaJson;
  } catch {
    console.error("FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON.");
    process.exitCode = 1;
    return;
  }

  const projectId =
    process.env.GOOGLE_CLOUD_PROJECT?.trim() ||
    credentials.project_id?.trim();
  if (!projectId) {
    console.error("No project id (set GOOGLE_CLOUD_PROJECT or JSON project_id).");
    process.exitCode = 1;
    return;
  }

  console.log("--- env (no secrets) ---");
  console.log("GOOGLE_CLOUD_PROJECT =", process.env.GOOGLE_CLOUD_PROJECT ?? "(unset)");
  console.log("json.project_id      =", credentials.project_id ?? "(missing)");
  console.log("json.client_email    =", credentials.client_email ?? "(missing)");

  console.log("\n--- list databases (API) ---");
  const fromApi = await listDatabaseIds(projectId, credentials);
  console.log("from API:", fromApi.length ? fromApi.join(", ") : "(none)");

  const fromEnv = process.env.FIRESTORE_DATABASE_ID?.trim();
  const candidates = [
    ...(fromEnv ? [fromEnv] : []),
    ...fromApi,
    "(default)",
    "default"
  ];
  const unique = [...new Set(candidates.filter(Boolean))];

  console.log("\n--- try write on each databaseId ---");
  for (const databaseId of unique) {
    process.stdout.write(`  ${databaseId} … `);
    try {
      const ok = await tryWrite(projectId, credentials, databaseId);
      console.log(ok ? "OK" : "READ failed");
      if (ok) {
        console.log("\n→ Use this before seed / dev:");
        console.log(`$env:FIRESTORE_DATABASE_ID = "${databaseId}"`);
        return;
      }
    } catch (e) {
      console.log("FAIL", e instanceof Error ? e.message : e);
    }
  }

  console.error(
    "\nNo databaseId worked. Check IAM on this service account (Cloud Datastore User / Owner on project)."
  );
  process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
