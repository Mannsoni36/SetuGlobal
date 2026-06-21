// ─── Shared helpers ──────────────────────────────────────────────────────────

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Business notification ────────────────────────────────────────────────────
// Sent to info@setuglobalsolution.com when someone submits the contact form.
// Shows every form field in a simple table. Reply-To is set to the user's
// email so hitting Reply goes straight to them.

export function buildBusinessEmail(fields: Record<string, string>): string {
  const rows = Object.entries(fields)
    .filter(([key]) => !key.startsWith("_"))
    .map(
      ([key, value]) => `
      <tr>
        <td style="
          padding: 10px 16px;
          border: 1px solid #e2e8f0;
          font-weight: 600;
          background: #f8fafc;
          white-space: nowrap;
          width: 160px;
        ">${escapeHtml(key)}</td>
        <td style="
          padding: 10px 16px;
          border: 1px solid #e2e8f0;
          line-height: 1.5;
        ">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Consultation Request</title>
  </head>
  <body style="
    margin: 0;
    padding: 0;
    background: #f1f5f9;
    font-family: Arial, Helvetica, sans-serif;
    color: #1e293b;
  ">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 16px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          ">

            <!-- Header -->
            <tr>
              <td style="
                background: #1e293b;
                padding: 24px 32px;
              ">
                <p style="margin:0;font-size:13px;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;">Setu Global Solution</p>
                <h1 style="margin:4px 0 0;font-size:20px;color:#ffffff;">New Consultation Request</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 32px;">
                <p style="margin:0 0 20px;color:#64748b;font-size:14px;">
                  Submitted via <a href="https://www.setuglobalsolution.com" style="color:#2563eb;">setuglobalsolution.com</a>
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${rows}
                </table>

                <p style="margin:24px 0 0;font-size:13px;color:#94a3b8;">
                  Hit <strong>Reply</strong> to respond directly to this enquiry.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="
                background: #f8fafc;
                border-top: 1px solid #e2e8f0;
                padding: 16px 32px;
                font-size: 12px;
                color: #94a3b8;
              ">
                Setu Global Solution &mdash; 205 Avani Icon, Naroda, Ahmedabad &mdash; +91 8140881823
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

// ─── User confirmation ────────────────────────────────────────────────────────
// Sent to the person who filled the form.
// Reassures them that their message was received and sets expectations.

export function buildUserEmail(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>We received your message</title>
  </head>
  <body style="
    margin: 0;
    padding: 0;
    background: #f1f5f9;
    font-family: Arial, Helvetica, sans-serif;
    color: #1e293b;
  ">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 16px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          ">

            <!-- Header -->
            <tr>
              <td style="
                background: #1e293b;
                padding: 24px 32px;
              ">
                <p style="margin:0;font-size:13px;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;">Setu Global Solution</p>
                <h1 style="margin:4px 0 0;font-size:20px;color:#ffffff;">We've got your message!</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 32px;">
                <p style="margin:0 0 16px;font-size:16px;">
                  Hi <strong>${escapeHtml(name)}</strong>,
                </p>
                <p style="margin:0 0 16px;line-height:1.6;color:#334155;">
                  Thank you for reaching out to <strong>Setu Global Solution</strong>. We've received
                  your message and one of our counsellors will get back to you within
                  <strong>one business day</strong>.
                </p>
                <p style="margin:0 0 24px;line-height:1.6;color:#334155;">
                  In the meantime, feel free to WhatsApp us if you have an urgent query.
                </p>

                <!-- WhatsApp button -->
                <a
                  href="https://wa.me/918140881823"
                  style="
                    display: inline-block;
                    background: #25d366;
                    color: #ffffff;
                    text-decoration: none;
                    padding: 12px 24px;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 14px;
                  "
                >
                  WhatsApp Us &rarr;
                </a>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding: 0 32px;">
                <hr style="border:none;border-top:1px solid #e2e8f0;" />
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 20px 32px;font-size:12px;color:#94a3b8;line-height:1.6;">
                <strong style="color:#475569;">Setu Global Solution</strong><br/>
                Ahmedabad's trusted Germany education consultancy<br/>
                <a href="https://www.setuglobalsolution.com" style="color:#2563eb;">www.setuglobalsolution.com</a>
                &nbsp;&bull;&nbsp;
                <a href="tel:+918140881823" style="color:#2563eb;">+91 8140881823</a>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
