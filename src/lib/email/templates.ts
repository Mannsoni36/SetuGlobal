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
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>We received your message</title>
</head>
<body style="margin:0;padding:40px 16px;background:#ECE9E1;font-family:Georgia,'Times New Roman',serif;color:#33324F;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
<tr><td align="center">

<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;border-collapse:collapse;background:#FBFAF7;border-radius:16px;overflow:hidden;box-shadow:0 18px 50px rgba(38,33,92,0.16);">

  <!-- HEADER -->
  <tr>
  <td style="background:#26215C;background:linear-gradient(135deg,#2E2769 0%,#211C52 60%,#1A1640 100%);padding:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:5px;background:#E87722;font-size:0;line-height:0;">&nbsp;</td></tr></table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding:28px 14px 26px 32px;vertical-align:middle;width:78px;">
          <img src="https://i.imgur.com/a2KLhUh.png" alt="SETU" width="64" height="64" style="display:block;width:64px;height:64px;border:0;border-radius:11px;">
        </td>
        <td style="padding:28px 32px 26px 4px;vertical-align:middle;">
          <p style="margin:0 0 3px;font-family:Georgia,serif;font-size:22px;color:#ffffff;letter-spacing:2.5px;line-height:1;">SETU<span style="color:#E87722;">.</span></p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:9px;font-weight:bold;color:#9D97D6;letter-spacing:0.3em;">GLOBAL SOLUTION</p>
        </td>
      </tr>
    </table>
  </td>
  </tr>

  <!-- CONFIRMATION BANNER -->
  <tr>
  <td style="background:#FBFAF7;padding:34px 36px 0;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="background:#EAF7EE;border:1px solid #CBEBD5;border-radius:22px;padding:6px 16px;">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;color:#1E7C46;letter-spacing:0.04em;">&#10003;&nbsp;&nbsp;Message received</span>
      </td></tr>
    </table>
    <p style="margin:18px 0 0;font-family:Georgia,serif;font-size:26px;color:#26215C;line-height:1.3;">Thanks, <span style="color:#534AB7;">${escapeHtml(name)}</span> —<br>your journey starts here.</p>
  </td>
  </tr>

  <!-- BODY -->
  <tr>
  <td style="background:#FBFAF7;padding:20px 36px 8px;">
    <p style="margin:0 0 15px;font-family:Georgia,serif;font-size:14px;color:#54534F;line-height:1.85;">
      We've received your message and a counsellor will personally get back to you within <strong style="color:#33324F;">one business day</strong>. No bots, no call centre — one dedicated person who'll know your case from the first reply.
    </p>
    <p style="margin:0 0 22px;font-family:Georgia,serif;font-size:14px;color:#54534F;line-height:1.85;">
      Need something sooner? Message us on WhatsApp and we usually reply within minutes.
    </p>
    <!-- WhatsApp button -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="background:#25D366;border-radius:8px;">
        <a href="https://wa.me/918140881823" style="display:inline-block;padding:13px 26px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;">Chat on WhatsApp &rarr;</a>
      </td>
    </tr></table>
  </td>
  </tr>

  <!-- WHAT HAPPENS NEXT -->
  <tr>
  <td style="background:#FBFAF7;padding:28px 36px 6px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
      <td style="width:34px;vertical-align:middle;"><div style="height:2px;background:#E87722;width:28px;font-size:0;line-height:0;">&nbsp;</div></td>
      <td style="vertical-align:middle;"><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:10.5px;font-weight:bold;color:#A07338;letter-spacing:0.2em;text-transform:uppercase;">What happens next</p></td>
    </tr></table>
  </td>
  </tr>
  <tr>
  <td style="background:#FBFAF7;padding:14px 36px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F3F1FB;border:1px solid #E4E0F4;border-radius:14px;">
      <tr><td style="padding:20px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="vertical-align:top;width:30px;padding-bottom:14px;"><span style="font-family:Georgia,serif;font-size:15px;font-weight:bold;color:#E87722;">1</span></td>
            <td style="vertical-align:top;padding-bottom:14px;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;color:#5E5D6E;line-height:1.5;"><strong style="color:#332C6E;">A counsellor reaches out</strong> on your preferred channel, usually the same day.</td>
          </tr>
          <tr>
            <td style="vertical-align:top;padding-bottom:14px;"><span style="font-family:Georgia,serif;font-size:15px;font-weight:bold;color:#E87722;">2</span></td>
            <td style="vertical-align:top;padding-bottom:14px;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;color:#5E5D6E;line-height:1.5;"><strong style="color:#332C6E;">A 30-minute profile review</strong> and a realistic university shortlist for Germany.</td>
          </tr>
          <tr>
            <td style="vertical-align:top;"><span style="font-family:Georgia,serif;font-size:15px;font-weight:bold;color:#E87722;">3</span></td>
            <td style="vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;color:#5E5D6E;line-height:1.5;"><strong style="color:#332C6E;">A clear written plan</strong> with timelines and fixed milestones.</td>
          </tr>
        </table>
      </td></tr>
    </table>
  </td>
  </tr>

  <!-- SOCIAL -->
  <tr>
  <td style="background:#FBFAF7;padding:28px 36px 4px;">
    <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#8A8980;letter-spacing:0.04em;text-align:center;">While you wait, follow along for student stories &amp; Germany tips</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      <td style="padding:0 6px;"><a href="https://www.instagram.com/setuglobal.solution/" style="display:inline-block;background:#26215C;border-radius:8px;padding:9px 16px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;color:#ffffff;text-decoration:none;">Instagram</a></td>
      <td style="padding:0 6px;"><a href="https://www.youtube.com/@SetuGlobalSolution" style="display:inline-block;background:#26215C;border-radius:8px;padding:9px 16px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;color:#ffffff;text-decoration:none;">YouTube</a></td>
      <td style="padding:0 6px;"><a href="https://www.setuglobalsolution.com" style="display:inline-block;background:#26215C;border-radius:8px;padding:9px 16px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;color:#ffffff;text-decoration:none;">Website</a></td>
    </tr></table>
  </td>
  </tr>

  <!-- FOOTER -->
  <tr>
  <td style="background:#FBFAF7;padding:26px 36px 8px;">
    <div style="border-top:1px solid #E6E2D8;padding-top:18px;">
      <p style="margin:0 0 5px;font-family:Georgia,serif;font-size:15px;color:#28253F;">Setu Global Solution</p>
      <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11.5px;color:#8A8980;line-height:1.6;">Your bridge to Germany — study, settle &amp; succeed.</p>
      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11.5px;color:#5E5D6E;line-height:1.7;">
        <span style="color:#E87722;">&#9737;</span>&nbsp;<a href="https://www.setuglobalsolution.com" style="color:#534AB7;text-decoration:none;">www.setuglobalsolution.com</a>&nbsp;&nbsp;·&nbsp;&nbsp;
        <span style="color:#E87722;">&#9742;</span>&nbsp;<a href="tel:+918140881823" style="color:#534AB7;text-decoration:none;">+91 81408 81823</a><br>
        <span style="color:#E87722;">&#9737;</span>&nbsp;Ahmedabad, India&nbsp;&nbsp;·&nbsp;&nbsp;Berlin, Germany
      </p>
    </div>
  </td>
  </tr>

  <!-- BOTTOM STRIP -->
  <tr>
  <td style="background:#26215C;padding:12px 36px;">
    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#9D97D6;letter-spacing:0.06em;text-align:center;">You're receiving this because you contacted Setu Global Solution.</p>
  </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
