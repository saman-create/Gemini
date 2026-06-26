const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Glow 20% less tall (from 360px to ~280px)
css = css.replace(
    /height:\s*360px;/,
    'height: 280px;'
);

// 3. Increase brightness of glow
// Instead of rgba(30,186,151, 0.8), use full opacity at center, and maybe a brighter inner core
css = css.replace(
    /rgba\(30,186,151,\s*0\.8\)\s*0%/,
    'rgba(46,255,208, 1) 0%, rgba(30,186,151, 0.8) 30%'
);

fs.writeFileSync('index.css', css);

// 2. Subtexts completely white
html = html.replace(
    /color:\s*rgba\(255,\s*255,\s*255,\s*0\.85\);/g,
    'color: #ffffff;'
);

fs.writeFileSync('index.html', html);

console.log("Applied style tweaks to CSS and HTML.");
