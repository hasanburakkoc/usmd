import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getFirestoreDb } from "@/lib/firebase/admin";
import type { ConsultationFormStatus } from "@/lib/firestore/consultation-form";
import { COLLECTION_FORM_SUBMISSIONS } from "@/lib/firestore/collections";

export const runtime = "nodejs";

const LIMITS = {
  fullName: 200,
  email: 254,
  phone: 50,
  treatment: 200,
  message: 8000,
  userAgent: 512,
  acceptLanguage: 80
} as const;

function trimStr(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim().slice(0, max);
  return t.length ? t : null;
}

function headerTrim(req: Request, name: string, max: number): string | null {
  const raw = req.headers.get(name);
  if (!raw) return null;
  const t = raw.trim().slice(0, max);
  return t.length ? t : null;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  const o = body as Record<string, unknown>;

  const fullName = trimStr(o.fullName, LIMITS.fullName);
  const email = trimStr(o.email, LIMITS.email)?.toLowerCase() ?? null;
  const phone = trimStr(o.phone, LIMITS.phone);
  const treatment = trimStr(o.treatment, LIMITS.treatment);
  const message = trimStr(o.message, LIMITS.message);

  if (!fullName || !email || !phone || !treatment || !message) {
    return NextResponse.json(
      { error: "Missing or invalid fields." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const userAgent = headerTrim(req, "user-agent", LIMITS.userAgent);
  const acceptLanguage = headerTrim(
    req,
    "accept-language",
    LIMITS.acceptLanguage
  );

  try {
    const db = getFirestoreDb();
    const payload = {
      fullName,
      email,
      phone,
      treatment,
      message,
      source: "web" as const,
      status: "new" as ConsultationFormStatus,
      userAgent,
      acceptLanguage,
      createdAt: FieldValue.serverTimestamp()
    };

    const ref = await db.collection(COLLECTION_FORM_SUBMISSIONS).add(payload);

    return NextResponse.json({ ok: true, id: ref.id }, { status: 201 });
  } catch (e) {
    console.error("[consultations POST]", e);
    return NextResponse.json(
      { error: "Could not submit. Please try again later." },
      { status: 500 }
    );
  }
}
