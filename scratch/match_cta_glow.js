const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');

const startIdx = css.indexOf('/* CTA Gradient and Grain */');
if (startIdx !== -1) {
    const newCss = `/* CTA Gradient Glow */
#cta-section {
    position: relative;
    padding: 120px 0 240px 0; /* More spacing on the bottom */
    background: #ffffff; /* Match About section exactly to avoid cutoff line */
    overflow: hidden;
}

/* Radial Green Gradient Glow from the bottom */
#cta-section::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 280px; /* Exact same height as precious metals */
    background: radial-gradient(ellipse at bottom center, rgba(46,255,208, 1) 0%, rgba(30,186,151, 0.8) 30%, rgba(30,186,151, 0) 70%);
    transform: translateY(1px); /* Prevent any weird 1px gap at the bottom */
    z-index: 0;
    pointer-events: none;
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

    css = css.substring(0, startIdx) + newCss;
    fs.writeFileSync('index.css', css);
    console.log("Updated CTA CSS.");
} else {
    console.log("Couldn't find CTA CSS block.");
}
