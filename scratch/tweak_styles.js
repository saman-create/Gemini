const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Update CSS for shadow, blur, height, and brightness
css = css.replace(
    /box-shadow:\s*0\s*8px\s*32px\s*0\s*rgba\(0,\s*0,\s*0,\s*0\.3\);/,
    'box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);'
);

css = css.replace(/blur\(24px\)/g, 'blur(40px)');

css = css.replace(
    /height:\s*400px;/,
    'height: 360px;'
);

css = css.replace(
    /rgba\(30,186,151,\s*0\.5\)/,
    'rgba(30,186,151, 0.8)'
);

fs.writeFileSync('index.css', css);

// 2. Update HTML for "Live market pricing" and card subtexts

html = html.replace(
    /<p class="section-subtitle"\s*style="color:\s*var\(--c-pale-yellow\)">/,
    '<p class="section-subtitle" style="color: var(--c-pale-yellow); font-size: 18px; font-weight: 500; filter: brightness(1.2);">'
);

// Replace the subtext styles for all 4 cards
html = html.replace(
    /font-size:\s*12px;\s*color:\s*#888;/g,
    'font-size: 14px; color: rgba(255, 255, 255, 0.85);'
);

fs.writeFileSync('index.html', html);

console.log("Applied style tweaks to CSS and HTML.");
