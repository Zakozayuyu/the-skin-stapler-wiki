import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(projectRoot, 'out');
const localeLanguages = new Map([
  ['de', 'de-DE'],
  ['pt-br', 'pt-BR'],
  ['es', 'es']
]);

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(target);
    return entry.isFile() && entry.name.endsWith('.html') ? [target] : [];
  }));
  return nested.flat();
}

let updated = 0;
let verified = 0;
for (const file of await htmlFiles(outDir)) {
  const relativePath = path.relative(outDir, file);
  const firstSegment = relativePath.split(path.sep)[0];
  const locale = firstSegment.endsWith('.html') ? path.basename(firstSegment, '.html') : firstSegment;
  const language = localeLanguages.get(locale);
  if (!language) continue;

  const html = await readFile(file, 'utf8');
  const corrected = html.replace(/<html\b([^>]*?)\blang="[^"]+"/, `<html$1lang="${language}"`);
  if (corrected !== html) {
    await writeFile(file, corrected);
    updated += 1;
  }

  const staticLanguage = corrected.match(/<html\b[^>]*\blang="([^"]+)"/)?.[1];
  if (staticLanguage !== language) {
    throw new Error(`Invalid static lang for ${relativePath}: expected ${language}, found ${staticLanguage ?? 'missing'}`);
  }
  verified += 1;
}

console.log(`Corrected ${updated} and verified ${verified} localized static HTML lang attributes.`);
