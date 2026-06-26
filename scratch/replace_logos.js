const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace desktop header logo
html = html.replace(
  /<a[^>]*href="#top"[^>]*class="logo-link"[^>]*>[\s\S]*?OAKSORS[\s\S]*?<\/a>/,
  '<a href="#top" class="logo-link" style="display: flex; align-items: center;"><img src="assets/images/light-logo.png" style="height: 40px; width: auto;" alt="OAKSORS Logo"></a>'
);

// Replace mobile header logo
html = html.replace(
  /<a[^>]*href="#top"[^>]*class="logo-link"[^>]*>[\s\S]*?OAKSORS[\s\S]*?<\/a>/,
  '<a href="#top" class="logo-link" style="display: flex; align-items: center;"><img src="assets/images/light-logo.png" style="height: 32px; width: auto;" alt="OAKSORS Logo"></a>'
);

// Replace footer logo
html = html.replace(
  /<div[^>]*style="[^"]*font-size:\s*28px[^>]*>\s*OAKSORS\s*<\/div>/,
  '<div style="margin-bottom: 20px; display: flex; align-items: center;"><img src="assets/images/light-logo.png" style="height: 48px; width: auto;" alt="OAKSORS Logo"></div>'
);

fs.writeFileSync('index.html', html);

console.log("Logos replaced!");
