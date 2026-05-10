import { readFileSync } from "fs";
import path from "path";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import type { Firestore } from "firebase-admin/firestore";

/** Key file uses snake_case `project_id`; Admin `ServiceAccount` type uses camelCase. */
type ServiceAccountJson = admin.ServiceAccount & { project_id?: string };

function parseServiceAccountJson(raw: string): ServiceAccountJson {
  return JSON.parse(raw) as ServiceAccountJson;
}

function saProjectId(sa: ServiceAccountJson): string | undefined {
  return sa.project_id ?? sa.projectId;
}

function getCredential(): admin.credential.Credential {
  const rawJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim();
  if (rawJson) {
    return admin.credential.cert(parseServiceAccountJson(rawJson));
  }

  const filePath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH?.trim();
  if (filePath) {
    const abs = path.resolve(filePath);
    return admin.credential.cert(
      JSON.parse(readFileSync(abs, "utf8")) as admin.ServiceAccount
    );
  }

  return admin.credential.applicationDefault();
}

function getProjectIdFromEnv(): string | undefined {
  return (
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.GCLOUD_PROJECT ||
    process.env.FIREBASE_PROJECT_ID
  );
}

/** Firestore database id in console (usually `(default)` for the first DB). */
function getFirestoreDatabaseId(): string {
  const id = process.env.FIRESTORE_DATABASE_ID?.trim();
  return id && id.length > 0 ? id : "(default)";
}

export function initAdminApp(): admin.app.App {
  if (admin.apps.length > 0) return admin.app();

  const credential = getCredential();

  let projectId = getProjectIdFromEnv();
  const rawJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim();
  const rawPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH?.trim();

  if (rawJson) {
    const sa = parseServiceAccountJson(rawJson);
    const jsonPid = saProjectId(sa);
    if (projectId && jsonPid && projectId !== jsonPid) {
      throw new Error(
        `GOOGLE_CLOUD_PROJECT is "${projectId}" but the service account JSON is for "${jsonPid}". ` +
          `Use a JSON key from the same project, or set GOOGLE_CLOUD_PROJECT to "${jsonPid}".`
      );
    }
    if (!projectId) projectId = jsonPid;
  } else if (rawPath) {
    const abs = path.resolve(rawPath);
    const sa = JSON.parse(readFileSync(abs, "utf8")) as ServiceAccountJson;
    const jsonPid = saProjectId(sa);
    if (projectId && jsonPid && projectId !== jsonPid) {
      throw new Error(
        `GOOGLE_CLOUD_PROJECT is "${projectId}" but FIREBASE_SERVICE_ACCOUNT_PATH JSON is for "${jsonPid}".`
      );
    }
    if (!projectId) projectId = jsonPid;
  }

  admin.initializeApp({
    credential,
    ...(projectId ? { projectId } : {})
  });

  return admin.app();
}

export function getFirestoreDb(): Firestore {
  const app = initAdminApp();
  return getFirestore(app, getFirestoreDatabaseId());
}
