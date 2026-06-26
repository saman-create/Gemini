const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the inline styled How Do I Start heading
const targetH2 = /<h2\s+style="[^"]*font-size:\s*clamp\(30px,\s*4vw,\s*48px\)[^>]*>\s*How Do I Start\?\s*<\/h2>/i;

html = html.replace(targetH2, '<h2 class="section-title" style="color: #111827; text-align: center;">How Do I Start?</h2>');

fs.writeFileSync('index.html', html);

let css = fs.readFileSync('index.css', 'utf8');

// Add .section-title class if it doesn't exist
if (!css.includes('.section-title')) {
    css += `
/* Global Section Heading Style */
.section-title {
    font-size: clamp(36px, 5vw, 56px);
    letter-spacing: -1.9px;
    font-weight: 600;
    text-transform: none;
    line-height: 1.2;
}
`;
    fs.writeFileSync('index.css', css);
}

console.log("Updated HTML and CSS");
