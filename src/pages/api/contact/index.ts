export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";
import { buildBusinessEmail, buildUserEmail } from "@/lib/email/templates";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const FROM = "Setu Global Solution <info@setuglobalsolution.com>";
const BUSINESS_EMAIL = "info@setuglobalsolution.com";

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, string>;

  try {
    data = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid request body." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const name = data["Full Name"]?.trim();
  const email = data["Email Address"]?.trim();

  if (!name || !email) {
    return new Response(
      JSON.stringify({ success: false, message: "Name and email are required." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || import.meta.env.GOOGLE_SHEETS_WEBHOOK_URL;

  const saveToSheets = sheetsUrl
    ? fetch(sheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(async (res) => {
          if (!res.ok) console.error("Google Sheets error:", res.status, await res.text());
        })
        .catch((err) => console.error("Google Sheets fetch failed:", err))
    : (console.warn("GOOGLE_SHEETS_WEBHOOK_URL not set"), Promise.resolve());

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: BUSINESS_EMAIL,
        replyTo: email,
        subject: `New consultation: ${name}${data["Subject"] ? ` — ${data["Subject"]}` : ""}`,
        html: buildBusinessEmail(data),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "We received your message — Setu Global Solution",
        html: buildUserEmail(name),
      }),
      saveToSheets,
    ]);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
