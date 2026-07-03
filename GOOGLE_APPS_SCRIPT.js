/**
 * METAMORPH — Google Apps Script Web App
 * ==========================================
 * SETUP INSTRUCTIONS:
 *
 * 1. Go to https://script.google.com → New Project
 * 2. Paste this entire file into the editor
 * 3. Update SHEET_ID below with your Google Sheet ID
 *    (from the sheet URL: .../spreadsheets/d/SHEET_ID/edit)
 * 4. Click "Deploy" → "New Deployment"
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click "Deploy" and copy the Web App URL
 * 6. In your Metamorph project, add to .env.local:
 *    GOOGLE_SHEET_WEBHOOK=<paste Web App URL here>
 * 7. Redeploy your app (Vercel/Render will pick it up automatically)
 */

// ──────────────────────────────────────────────
// CONFIGURATION — update your Sheet ID here
// ──────────────────────────────────────────────
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Contact Submissions"; // Name of the tab in your sheet

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create the sheet + header row if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Service",
        "Brief / Goals",
        "Budget Range",
      ]);

      // Style the header row
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setBackground("#ace539");
      headerRange.setFontWeight("bold");
      headerRange.setFontColor("#12130f");
    }

    // Append the new submission row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.service || "",
      data.brief || "",
      data.budget || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Allow GET requests to test the endpoint is live
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Metamorph Contact Sheet webhook is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}
