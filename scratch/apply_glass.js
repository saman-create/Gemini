const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Ensure container is above the glow
html = html.replace(
  /<div class="container">\s*<div class="section-header">/g,
  '<div class="container" style="position: relative; z-index: 10;">\n          <div class="section-header">'
);

// Replace card styles with glass-card class
html = html.replace(
  /style="\s*background:\s*rgba\(255,\s*255,\s*255,\s*0\.03\);\s*border:\s*1px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.1\);\s*padding:\s*24px;\s*color:\s*white;/g,
  'class="feature-card scroll-reveal glass-card" style="padding: 24px; color: white;'
);

html = html.replace(
  /style="\s*background:\s*rgba\(255,\s*255,\s*255,\s*0\.03\);\s*border:\s*1px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.1\);\s*padding:\s*24px;\s*color:\s*white;\s*transition-delay:\s*100ms;/g,
  'class="feature-card scroll-reveal glass-card" style="padding: 24px; color: white; transition-delay: 100ms;'
);

html = html.replace(
  /style="\s*background:\s*rgba\(255,\s*255,\s*255,\s*0\.03\);\s*border:\s*1px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.1\);\s*padding:\s*24px;\s*color:\s*white;\s*transition-delay:\s*200ms;/g,
  'class="feature-card scroll-reveal glass-card" style="padding: 24px; color: white; transition-delay: 200ms;'
);

html = html.replace(
  /style="\s*background:\s*rgba\(255,\s*255,\s*255,\s*0\.03\);\s*border:\s*1px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.1\);\s*padding:\s*24px;\s*color:\s*white;\s*transition-delay:\s*300ms;/g,
  'class="feature-card scroll-reveal glass-card" style="padding: 24px; color: white; transition-delay: 300ms;'
);

// We need to also clean up the old class="feature-card scroll-reveal" which might duplicate the class attribute
html = html.replace(
  /class="feature-card scroll-reveal"\s+class="feature-card scroll-reveal glass-card"/g,
  'class="feature-card scroll-reveal glass-card"'
);


fs.writeFileSync('index.html', html);

let css = fs.readFileSync('index.css', 'utf8');

const glassCardCss = `
/* Liquid Glass Cards */
.glass-card {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
`;

if (!css.includes('.glass-card')) {
    css += glassCardCss;
    fs.writeFileSync('index.css', css);
}

console.log("Applied liquid glass effect.");
