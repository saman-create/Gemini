const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const sections = html.split('</section>');

// indices:
// 0: hero
// 1: partners
// 2: act now
// 3: how do i start
// 4: precious metals
// 5: why choose
// 6: about
// 7: CTA
// 8: footer (remainder)

if (sections.length < 9) {
    console.error("Expected 8 sections + remainder");
    process.exit(1);
}

// Reorder 2 through 7
const newOrder = [
    sections[0],
    sections[1],
    sections[3], // how do i start
    sections[2], // act now
    sections[5], // why choose
    sections[4], // precious metals
    sections[6], // about
    sections[7], // cta
    sections[8]  // remainder
];

fs.writeFileSync('index.html', newOrder.join('</section>'));
console.log("Successfully reordered sections!");
