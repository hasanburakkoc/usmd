import { NextResponse } from "next/server";
import { sendConsultationEmail } from "@/lib/resend/send-consultation-email";

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

function parseToList(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  return raw
    .split(/[,;\n]+/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

const DEFAULT_RESEND_FROM = "USMD <onboarding@resend.dev>";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim() || DEFAULT_RESEND_FROM;
  const toRaw = process.env.RESEND_TO?.trim();

  if (!apiKey || !toRaw) {
    console.error("[consultations] Missing RESEND_API_KEY or RESEND_TO");
    return NextResponse.json(
      { error: "Form delivery is not configured." },
      { status: 503 }
    );
  }

  let to = parseToList(toRaw);
  if (to.length === 0 && process.env.NODE_ENV !== "production") {
    // Resend test inbox — API succeeds; swap RESEND_TO for a real address you read.
    to = ["delivered@resend.dev"];
    console.warn(
      "[consultations] RESEND_TO unset — using delivered@resend.dev (dev only). Set RESEND_TO in .env.local."
    );
  }
  if (to.length === 0) {
    return NextResponse.json(
      { error: "Form delivery is not configured." },
      { status: 503 }
    );
  }

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
    const { id } = await sendConsultationEmail({
      apiKey,
      from,
      to,
      fullName,
      email,
      phone,
      treatment,
      message,
      userAgent,
      acceptLanguage
    });

    return NextResponse.json({ ok: true, id }, { status: 201 });
  } catch (e) {
    console.error("[consultations POST]", e);
    return NextResponse.json(
      { error: "Could not submit. Please try again later." },
      { status: 500 }
    );
  }
}
