const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split(/\r?\n/);

// "How Do I Start?" section: lines 419-701 (0-indexed: 418-700)
// "Lead Capture Form" section: lines 703-1019 (0-indexed: 702-1018)
const before = lines.slice(0, 418);           // everything before "How Do I Start?"
const howDoIStart = lines.slice(418, 701);     // "How Do I Start?" section
const gap = lines.slice(701, 702);             // the blank line between sections
const formSection = lines.slice(702, 1019);    // "Lead Capture Form" section
const after = lines.slice(1019);               // everything after

// Swap: form comes first, then how do i start
const newLines = [
    ...before,
    ...formSection,
    '',
    ...howDoIStart,
    ...after
];

fs.writeFileSync(filePath, newLines.join('\r\n'), 'utf-8');
console.log('Sections swapped successfully!');
