const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Hide Trusted Partners
html = html.replace('<section class="logo-wall-section">', '<section class="logo-wall-section" style="display: none;">');

// 2. Reorder
const logoWallEnd = html.indexOf('        <!-- HOW DO I START? -->');
const howDoIStartEnd = html.indexOf('        <!-- LEAD CAPTURE FORM SECTION -->');
const leadCaptureEnd = html.indexOf('        <!-- LIVE CHARTS SECTION -->');

if (logoWallEnd !== -1 && howDoIStartEnd !== -1 && leadCaptureEnd !== -1) {
    const beforeHowDoIStart = html.substring(0, logoWallEnd);
    const howDoIStart = html.substring(logoWallEnd, howDoIStartEnd);
    const leadCapture = html.substring(howDoIStartEnd, leadCaptureEnd);
    const afterLeadCapture = html.substring(leadCaptureEnd);

    // New order: beforeHowDoIStart + leadCapture + howDoIStart + afterLeadCapture
    fs.writeFileSync(filePath, beforeHowDoIStart + leadCapture + howDoIStart + afterLeadCapture);
    console.log("Success");
} else {
    console.log("Could not find sections");
}
