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

// JSON-LD schemas injected as static HTML — never go through React/Helmet
// to avoid hydration mismatch (React error #418).
const SCHEMAS = {
  '/': JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://experience-authentik.com/#organization",
        "name": "AUTHENTIK",
        "url": "https://experience-authentik.com",
        "description": "AUTHENTIK accompagne les leaders qui ont tout réussi mais qui ont perdu leur élan vital. Coaching de vie pour dirigeants — Genève, Paris, Montréal.",
        "email": "contact@experience-authentik.com",
        "areaServed": ["Genève", "Paris", "Montréal"],
        "founder": [
          { "@type": "Person", "name": "Alain" },
          { "@type": "Person", "name": "Éric" }
        ],
        "sameAs": []
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "J'ai déjà tout essayé (coaching, retraites...), pourquoi ce serait différent ?",
            "acceptedAnswer": { "@type": "Answer", "text": "Parce qu'AUTHENTIK n'est pas une accumulation d'outils, mais une expérience de rupture. On ne rajoute rien, on enlève le bruit. Ce n'est pas 'comprendre' pourquoi ça bloque, c'est voir où vous vous auto-illusionnez." }
          },
          {
            "@type": "Question",
            "name": "Je ne veux pas tout foutre en l'air (famille, business...).",
            "acceptedAnswer": { "@type": "Answer", "text": "La transformation n'est pas une destruction. Il ne s'agit pas de brûler votre empire, mais d'y remettre du feu. Vous n'avez pas besoin de tout quitter pour vous retrouver, mais de changer le lieu depuis lequel vous agissez." }
          },
          {
            "@type": "Question",
            "name": "Je n'ai pas le temps, je suis sous l'eau.",
            "acceptedAnswer": { "@type": "Answer", "text": "Si vous n'avez pas le temps de vous arrêter, c'est que vous dérivez déjà. La pause est un acte de puissance. C'est un recalibrage essentiel pour celui qui veut continuer à diriger avec justesse." }
          },
          {
            "@type": "Question",
            "name": "Je ne suis pas très 'émotions' ou 'spirituel'.",
            "acceptedAnswer": { "@type": "Answer", "text": "C'est parfait. Nous non plus. AUTHENTIK est une expérience de lucidité et de clarté stratégique. On ne vous demande pas de vous épancher, mais d'avoir le courage de regarder la vérité en face." }
          },
          {
            "@type": "Question",
            "name": "C'est quoi ce duo Éric & Alain ?",
            "acceptedAnswer": { "@type": "Answer", "text": "C'est l'alchimie du Chaos et du Silence. Éric (le Feu) déstabilise pour libérer l'énergie, Alain (l'Eau) aide à intégrer et ancrer dans la cohérence. La friction entre les deux fait naître la clarté." }
          }
        ]
      }
    ]
  }),

  '/traversee': JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "La Traversée AUTHENTIK",
    "description": "3 rendez-vous gratuits de 75 minutes pour les dirigeants qui sentent qu'il manque quelque chose d'essentiel. Un cycle Voir · Sentir · Oser avec Alain et Éric.",
    "url": "https://experience-authentik.com/traversee",
    "provider": {
      "@type": "Organization",
      "@id": "https://experience-authentik.com/#organization",
      "name": "AUTHENTIK"
    },
    "serviceType": "Coaching de vie pour dirigeants",
    "areaServed": "Online",
    "availableChannel": { "@type": "ServiceChannel", "serviceUrl": "https://experience-authentik.com/traversee", "availableLanguage": "fr" },
    "offers": {
      "@type": "Offer",
      "name": "La Traversée — 3 séances de coaching gratuites",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "description": "3 rendez-vous de 75 min en ligne, sans engagement. Gratuit pour les dirigeants en quête de sens."
    }
  }),

  '/bilan': JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bilan Archétypal AUTHENTIK",
    "description": "Document personnalisé de 3 500 mots sur votre profil archétypal : forces, blocages, croyances limitantes et feuille de route 90 jours.",
    "url": "https://experience-authentik.com/bilan",
    "provider": {
      "@type": "Organization",
      "@id": "https://experience-authentik.com/#organization",
      "name": "AUTHENTIK"
    },
    "serviceType": "Bilan coaching personnalisé",
    "offers": [
      {
        "@type": "Offer",
        "name": "Bilan Archétypal Complet",
        "price": "79",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "description": "Document personnalisé de 3 500 à 4 000 mots livré sous 72h en PDF.",
        "url": "https://www.authentik-experience.com/authentikbilancomplet-bdc"
      },
      {
        "@type": "Offer",
        "name": "Pack Signature AUTHENTIK",
        "price": "249",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "description": "60 min en visio avec Éric et Alain + Bilan Complet enrichi livré sous 48h.",
        "url": "https://www.authentik-experience.com/authentikpacksignature"
      }
    ],
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Laurent, 46 ans" },
        "reviewBody": "Le Bilan m'a montré quelque chose que je n'avais jamais vu : les tensions entre mes forces. Les 'sortilèges'... voir mes croyances limitantes nommées avec cette précision, c'était troublant. Les contre-incantations sont devenues mes mantras.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sophie, 41 ans" },
        "reviewBody": "Le Pack Signature a été un déclic. La feuille de route 30/60/90 jours n'est pas un plan d'action générique. Ce sont des rituels d'observation. Ça change tout.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Marc, 48 ans" },
        "reviewBody": "'Le Courage de Trahir la Perfection', 'Le Sabotage du Script'... ce ne sont pas des métaphores. Ce sont des gestes à poser. Je l'ai imprimé, annoté. C'est devenu ma boussole.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3",
      "bestRating": "5"
    }
  }),
};

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

    // JSON-LD injecté comme HTML statique, hors du pipeline React/Helmet,
    // pour éviter l'erreur d'hydratation #418.
    const schema = SCHEMAS[url];
    const schemaTag = schema ? `  <script type="application/ld+json">${schema}</script>\n` : '';

    let page = template.replace('<!--app-html-->', bodyHtml);
    if (headTags) {
      page = page.replace('</head>', `  ${headTags}\n${schemaTag}  </head>`);
    } else if (schemaTag) {
      page = page.replace('</head>', `${schemaTag}  </head>`);
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
