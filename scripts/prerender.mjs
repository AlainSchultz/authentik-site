/**
 * Script de pré-rendu SSG.
 * Appelé après `vite build` — génère un HTML statique par route.
 *
 * Flow : vite build (client) → vite build --ssr (serveur) → ce script
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { build } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const routes = ['/', '/traversee', '/bilan'];

async function prerender() {
  // 1. Build du bundle SSR
  console.log('\n📦 Build SSR...');
  await build({
    root,
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: 'dist/server',
      emptyOutDir: true,
      rollupOptions: {
        output: { entryFileNames: '[name].js' },
      },
    },
  });

  // 2. Chargement du renderer SSR compilé (file:// obligatoire sur Windows)
  const serverEntry = pathToFileURL(resolve(root, 'dist/server/entry-server.js')).href;
  const { render } = await import(serverEntry);

  // 3. Template HTML produit par vite build (client)
  const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8');

  console.log('\n🖨️  Pré-rendu des routes...');

  for (const url of routes) {
    const { html: appHtml } = render(url);

    // react-helmet-async v3 SSR rend les balises head en tête du HTML du composant,
    // avant le premier <div. On les extrait pour les placer dans le vrai <head>.
    const firstDivIdx = appHtml.indexOf('<div');
    const headTags = firstDivIdx > 0 ? appHtml.slice(0, firstDivIdx).trim() : '';
    const bodyHtml  = firstDivIdx > 0 ? appHtml.slice(firstDivIdx) : appHtml;

    let page = template.replace('<!--app-html-->', bodyHtml);
    if (headTags) {
      page = page.replace('</head>', `  ${headTags}\n  </head>`);
    }

    const filePath =
      url === '/'
        ? resolve(root, 'dist/index.html')
        : resolve(root, `dist${url}/index.html`);

    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, page);
    console.log(`  ✓ ${url} → ${filePath.replace(root, '.')}`);
  }

  console.log('\n✅ Pré-rendu terminé.\n');
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
