const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log(match[0].trim());
}
