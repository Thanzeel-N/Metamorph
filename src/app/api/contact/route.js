import { NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────────
//  Google Sheets Integration via Apps Script Web App
//
//  SETUP INSTRUCTIONS (one-time):
//  1. Open https://script.google.com and create a new project.
//  2. Paste the contents of /GOOGLE_APPS_SCRIPT.js into the editor.
//  3. Click "Deploy" → "New Deployment" → Type: Web App
//     - Execute as: Me
//     - Who has access: Anyone
//  4. Copy the Web App URL and paste it into GOOGLE_SHEET_WEBHOOK below
//     (or set GOOGLE_SHEET_WEBHOOK in your .env.local / hosting env vars).
// ─────────────────────────────────────────────────────────────────

const GOOGLE_SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK || "";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, brief, budget } = body;

    // Validate required fields
    if (!name || !email || !brief) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, brief" },
        { status: 400 }
      );
    }

    // Forward to Google Apps Script Web App (which writes to Google Sheets)
    if (GOOGLE_SHEET_WEBHOOK) {
      const sheetResponse = await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name,
          email,
          phone: phone || "—",
          service,
          brief,
          budget,
        }),
      });

      if (!sheetResponse.ok) {
        console.error("Google Sheets webhook error:", await sheetResponse.text());
        // Don't fail the user-facing response — log the error and continue
      }
    } else {
      // Fallback: log locally when webhook is not configured
      console.log("⚠️  GOOGLE_SHEET_WEBHOOK not set. Form submission logged locally:");
      console.log({ name, email, phone, service, brief, budget });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
