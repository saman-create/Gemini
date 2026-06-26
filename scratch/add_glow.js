const fs = require('fs');
let css = fs.readFileSync('index.css', 'utf8');

const newStyles = `
/* Precious Metals Bottom Glow */
#precious-metals {
    position: relative;
    overflow: hidden;
}

#precious-metals::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 400px;
    background: radial-gradient(ellipse at bottom center, rgba(30,186,151, 0.5) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
}
`;

css += newStyles;

fs.writeFileSync('index.css', css);
console.log("Added glow to precious metals section.");
