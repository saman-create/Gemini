const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Left border colors & opacity
html = html.replace(
    /border-left:\s*3px\s*solid\s*#2563eb;/g,
    'border-left: 3px solid #0a5442;'
);

// We have two tabs with #e2e8f0. We replace the first one with #13876a and the second with var(--c-pale-yellow).
// Since String.prototype.replace only replaces the first occurrence, we can just call it twice.
html = html.replace(
    /border-left:\s*3px\s*solid\s*#e2e8f0;\s*position:\s*relative;\s*opacity:\s*0\.7;/,
    'border-left: 3px solid #13876a; position: relative;'
);

html = html.replace(
    /border-left:\s*3px\s*solid\s*#e2e8f0;\s*position:\s*relative;\s*opacity:\s*0\.7;/,
    'border-left: 3px solid var(--c-pale-yellow); position: relative;'
);

// 2. About OAKSORS green text
html = html.replace(
    /<h2 class="section-title">About OAKSORS<\/h2>/,
    '<h2 class="section-title">About <span style="color: var(--c-pale-yellow)">OAKSORS</span></h2>'
);

// 3. Image Background & Fit
html = html.replace(
    /<div style="background-color: #f8fafc; border-radius: 24px; padding: 24px; padding-bottom: 0; padding-right: 0; overflow: hidden; display: flex; align-items: flex-end; justify-content: flex-end; box-shadow: 0 4px 6px -1px rgba\(0, 0, 0, 0\.05\);">/,
    '<div style="background-color: rgba(30, 186, 151, 0.1); border-radius: 24px; padding: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">'
);

// Image style update
html = html.replace(
    /border-top-left-radius: 16px;\s*box-shadow: -10px -10px 30px rgba\(0, 0, 0, 0\.08\);\s*border: 1px solid #e2e8f0;\s*border-bottom: none;\s*border-right: none;/,
    'border-radius: 16px;\n                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n                    border: 1px solid rgba(30, 186, 151, 0.2);'
);

fs.writeFileSync('index.html', html);
console.log("Updated About OAKSORS styling.");
