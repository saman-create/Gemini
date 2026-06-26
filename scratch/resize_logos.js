const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Navbar logo (from 32px to 44px)
html = html.replace(
    '<img src="assets/images/dark-logo.png" style="height: 32px; width: auto;" alt="OAKSORS Logo">',
    '<img src="assets/images/dark-logo.png" style="height: 44px; width: auto;" alt="OAKSORS Logo">'
);

// Footer logo (from 48px to 96px)
html = html.replace(
    '<img src="assets/images/dark-logo.png" style="height: 48px; width: auto;" alt="OAKSORS Logo">',
    '<img src="assets/images/dark-logo.png" style="height: 96px; width: auto;" alt="OAKSORS Logo">'
);

fs.writeFileSync('index.html', html);
console.log("Logo sizes updated!");
