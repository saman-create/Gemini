const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// The main sections in the HTML that are not the header or footer
// By looking at the previous changes, the sections are:
// id="about"
// id="precious-metals"
// id="start" (How do I start)
// id="why-us" (Why Choose OAKSORS)
// id="qualify" (Act Now)
// id="cta-section"

const extractSection = (id) => {
    const startPattern = `<section id="${id}"`;
    const startIdx = html.indexOf(startPattern);
    if (startIdx === -1) return null;
    let endIdx = html.indexOf('</section>', startIdx);
    if (endIdx === -1) return null;
    endIdx += '</section>'.length;
    return html.substring(startIdx, endIdx);
};

const sections = {
    start: extractSection('start'),
    qualify: extractSection('qualify'),
    whyUs: extractSection('why-us'),
    preciousMetals: extractSection('precious-metals'),
    about: extractSection('about'),
    cta: extractSection('cta-section')
};

// Check if all sections were found
for (const [key, val] of Object.entries(sections)) {
    if (!val) {
        console.error(`Section ${key} not found`);
        process.exit(1);
    }
}

// Find the start of the first section and end of the last section to replace the whole block
const sectionIds = ['about', 'precious-metals', 'start', 'why-us', 'qualify', 'cta-section'];
let firstStart = html.length;
let lastEnd = 0;

for (const id of sectionIds) {
    const startIdx = html.indexOf(`<section id="${id}"`);
    let endIdx = html.indexOf('</section>', startIdx);
    if (startIdx !== -1 && endIdx !== -1) {
        endIdx += '</section>'.length;
        if (startIdx < firstStart) firstStart = startIdx;
        if (endIdx > lastEnd) lastEnd = endIdx;
    }
}

const beforeSections = html.substring(0, firstStart);
const afterSections = html.substring(lastEnd);

// Reassemble in requested order
// - how do i start (start)
// - act now (qualify)
// - why choose (whyUs)
// - precious metals (preciousMetals)
// - about (about)
// - CTA (cta)

const newOrderHtml = 
    sections.start + '\n\n' + 
    sections.qualify + '\n\n' + 
    sections.whyUs + '\n\n' + 
    sections.preciousMetals + '\n\n' + 
    sections.about + '\n\n' + 
    sections.cta;

const finalHtml = beforeSections + newOrderHtml + afterSections;

fs.writeFileSync('index.html', finalHtml);
console.log('Successfully reordered sections!');
