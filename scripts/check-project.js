import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = ['index.html', 'src/main.js', 'src/styles.css', 'README.md'];
let errors = 0;

console.log('\nRevision rapida del proyecto Semana 14\n');

for (const file of files) {
  const full = path.join(root, file);
  if (fs.existsSync(full)) {
    console.log(`OK: existe ${file}`);
  } else {
    console.log(`FALTA: ${file}`);
    errors += 1;
  }
}

const html = fs.existsSync('index.html') ? fs.readFileSync('index.html', 'utf8') : '';
const css = fs.existsSync('src/styles.css') ? fs.readFileSync('src/styles.css', 'utf8') : '';
const js = fs.existsSync('src/main.js') ? fs.readFileSync('src/main.js', 'utf8') : '';

const checks = [
  { name: 'Usa etiqueta main', ok: /<main[\s>]/i.test(html) },
  { name: 'Usa etiqueta header', ok: /<header[\s>]/i.test(html) },
  { name: 'Usa etiqueta footer', ok: /<footer[\s>]/i.test(html) },
  { name: 'Tiene al menos una imagen con alt', ok: /<img[^>]+alt=/i.test(html) },
  { name: 'Tiene labels en formularios', ok: /<label[\s>]/i.test(html) },
  { name: 'Tiene aria-live o role="alert" para mensajes', ok: /aria-live=|role="alert"/i.test(html) },
  { name: 'Incluye media query o clases responsive', ok: /@media|col-md-|col-lg-|container/i.test(css + html) },
  { name: 'Usa Chart.js en JavaScript', ok: /new Chart|Chart\(/.test(js) },
  { name: 'Tiene validacion de formulario', ok: /addEventListener\(['"]submit|checkValidity|valid/i.test(js) }
];

console.log('\nLista de verificacion tecnica:\n');
for (const check of checks) {
  if (check.ok) console.log(`OK: ${check.name}`);
  else {
    console.log(`REVISAR: ${check.name}`);
    errors += 1;
  }
}

console.log('\nResultado:');
if (errors === 0) {
  console.log('Tu proyecto supera la revision automatica basica. Ahora toma capturas y completa el informe.');
  process.exit(0);
}

console.log(`Hay ${errors} punto(s) por revisar. Corrige y vuelve a ejecutar npm run check.`);
process.exit(1);
