const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Add id="cta-section" to the CTA section
html = html.replace(
    /<!-- CTA SECTION -->\s*<section class="content-section">/,
    '<!-- CTA SECTION -->\n      <section id="cta-section" class="content-section">'
);

fs.writeFileSync('index.html', html);

let css = fs.readFileSync('index.css', 'utf8');

const ctaCss = `
/* CTA Gradient and Grain */
#cta-section {
    position: relative;
    padding: 120px 0 240px 0; /* More spacing on the bottom */
    background: #fcfdfd; /* Very light base, almost white */
    overflow: hidden;
}

/* Radial Green Gradient Glow from the bottom */
#cta-section::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, rgba(30,186,151, 0.35) 0%, rgba(30,186,151, 0.1) 40%, transparent 80%);
    z-index: 0;
    pointer-events: none;
}

/* Subtle SVG Noise Grain */
#cta-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
    opacity: 0.05;
    mix-blend-mode: multiply;
    pointer-events: none;
    z-index: 1;
}

#cta-section .container {
    position: relative;
    z-index: 10;
}

/* Ensure text is dark and legible against the light background */
#cta-section .section-title {
    color: #0f172a;
}
#cta-section .section-subtitle {
    color: #475569;
}
`;

if (!css.includes('#cta-section')) {
    css += ctaCss;
    fs.writeFileSync('index.css', css);
}

console.log("Updated CTA styling.");
