function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(fields: {
  fullName: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
  userAgent: string | null;
  acceptLanguage: string | null;
}): string {
  const rows = [
    ["Full name", fields.fullName],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["Treatment", fields.treatment],
    ["Message", fields.message],
    ["User-Agent", fields.userAgent ?? "—"],
    ["Accept-Language", fields.acceptLanguage ?? "—"]
  ] as const;

  const body = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;">${escapeHtml(k)}</td><td style="padding:8px;border:1px solid #e2e8f0;">${escapeHtml(v)}</td></tr>`
    )
    .join("");

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;font-size:14px;color:#334155;">
<p>New consultation request from the USMD website.</p>
<table style="border-collapse:collapse;width:100%;max-width:640px;">${body}</table>
</body></html>`;
}

export type SendConsultationParams = {
  fullName: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
  userAgent: string | null;
  acceptLanguage: string | null;
};

/**
 * Sends one notification email via Resend REST API.
 * @see https://resend.com/docs/api-reference/emails/send-email
 */
export async function sendConsultationEmail(
  params: SendConsultationParams & {
    apiKey: string;
    from: string;
    to: string[];
  }
): Promise<{ id: string }> {
  const html = buildHtml(params);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: params.from,
      to: params.to,
      reply_to: [params.email],
      subject: `USMD consultation: ${params.fullName}`,
      html
    })
  });

  const raw = await res.text();
  if (!res.ok) {
    throw new Error(`Resend HTTP ${res.status}: ${raw.slice(0, 500)}`);
  }

  let id = "sent";
  try {
    const j = JSON.parse(raw) as { id?: string };
    if (j.id) id = j.id;
  } catch {
    /* ignore */
  }

  return { id };
}
