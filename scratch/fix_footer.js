const fs = require('fs');

// Fix CSS for footer-links layout
let css = fs.readFileSync('index.css', 'utf8');
css = css.replace(
    /\.footer-links\s*{\s*display:\s*flex;\s*gap:\s*60px;\s*}/g,
    '.footer-links {\n    display: block;\n}'
);
fs.writeFileSync('index.css', css);

// Fix HTML for brighter text
let html = fs.readFileSync('index.html', 'utf8');

// The footer bottom text has `color: #aaa;` inside its style string, as do all the quick links.
// Let's replace `color: #aaa;` with `color: #ffffff;` for the entire footer section to make it brighter.
const footerStart = html.indexOf('<!-- FOOTER -->');
if (footerStart !== -1) {
    const footerHtml = html.substring(footerStart);
    const brightFooterHtml = footerHtml.replace(/color:\s*#aaa;?/g, 'color: #ffffff;');
    html = html.substring(0, footerStart) + brightFooterHtml;
    fs.writeFileSync('index.html', html);
    console.log("Updated footer layout and text brightness.");
} else {
    console.log("Could not find footer in HTML.");
}
