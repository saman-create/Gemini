const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');

// Replace the muddy gradient
css = css.replace(
    /background:\s*radial-gradient\(ellipse at bottom, rgba\(30,186,151, 0\.35\) 0%, rgba\(30,186,151, 0\.1\) 40%, transparent 80%\);/,
    'background: radial-gradient(100% 100% at bottom center, rgba(46,255,208, 0.6) 0%, rgba(30,186,151, 0.25) 30%, rgba(30,186,151, 0) 80%);\n    transform: translateY(1px); /* Prevent any weird 1px gap at the bottom */'
);

// Sometimes "transparent" resolves to black transparent. Let's be 100% sure we fixed it.
if (!css.includes('rgba(30,186,151, 0) 80%')) {
    console.log("Failed to replace gradient!");
}

fs.writeFileSync('index.css', css);

console.log("Updated CTA gradient.");
