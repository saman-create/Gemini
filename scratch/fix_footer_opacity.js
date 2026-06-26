const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');

css = css.replace(
    /\.footer-bottom\s*{\s*padding-top:\s*40px;\s*opacity:\s*0\.5;/g,
    '.footer-bottom {\n    padding-top: 40px;\n    opacity: 1;'
);

fs.writeFileSync('index.css', css);
console.log("Fixed footer-bottom opacity.");
