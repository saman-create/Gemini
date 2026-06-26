const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('Why Choose OAKSORS', 'Why Choose <span style="color: var(--c-pale-yellow)">OAKSORS</span>');
fs.writeFileSync('index.html', html);
console.log('Replaced');
