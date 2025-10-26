const fs = require('fs');

function minifyCSS(content) {
  return content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*,\s*/g, ',')
    .replace(/\s*>\s*/g, '>')
    .replace(/\s*\+\s*/g, '+')
    .replace(/\s*~\s*/g, '~')
    .replace(/;\s*}/g, '}')
    .replace(/\s+$/, '')
    .trim();
}

function minifyHTML(content) {
  return content
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\s+>/g, '>')
    .replace(/>\s+/g, '>')
    .replace(/\s+</g, '<')
    .replace(/\s+/g, ' ')
    .replace(/\s+$/gm, '')
    .trim();
}

const css = fs.readFileSync('css/style.css', 'utf8');
const minifiedCSS = minifyCSS(css);
fs.writeFileSync('css/style.min.css', minifiedCSS);

const html = fs.readFileSync('index.html', 'utf8');
const minifiedHTML = minifyHTML(html);
fs.writeFileSync('index.min.html', minifiedHTML);

console.log('✓ Minification complete!');
console.log('✓ Created: css/style.min.css');
console.log('✓ Created: index.min.html');
