const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');

const newSectionTitle = `.section-title {
    font-size: clamp(36px, 5vw, 56px);
    letter-spacing: -1.9px;
    font-weight: 600;
    color: #111827;
    text-transform: none;
    line-height: 1.2;
    margin-bottom: 16px;
}`;

css = css.replace(/\.section-title\s*\{[^}]+\}/, newSectionTitle);

fs.writeFileSync('index.css', css);

console.log("Updated index.css");
