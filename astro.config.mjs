import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const defaultSite = owner ? `https://${owner}.github.io` : 'http://localhost:4321';
const defaultBase = repository && repository !== `${owner}.github.io` ? `/${repository}` : '/';

/*
  Publikační brána KRAAU Arcade: herní obsah čeká na odborné schválení.
  Mimo `astro dev` a bez PUBLIC_KRAAU_ARCADE_PREVIEW=true se komponenta herny
  nahradí prázdnou, takže se do buildu nedostane žádný herní kód ani data.
*/
const arcadeGate = {
  name: 'kraau-arcade-gate',
  hooks: {
    'astro:config:setup': ({ command, updateConfig }) => {
      if (command === 'dev' || process.env.PUBLIC_KRAAU_ARCADE_PREVIEW === 'true') return;
      const stub = fileURLToPath(new URL('./src/components/arcade/ArcadeDisabled.astro', import.meta.url));
      updateConfig({
        vite: {
          plugins: [{
            name: 'kraau-arcade-stub',
            enforce: 'pre',
            resolveId: (id) => (/components\/arcade\/Arcade\.astro$/.test(id.replaceAll('\\', '/')) ? stub : null),
          }],
        },
      });
    },
  },
};

export default defineConfig({
  site: process.env.SITE_URL ?? defaultSite,
  base: process.env.BASE_PATH ?? defaultBase,
  trailingSlash: 'always',
  integrations: [arcadeGate],
  vite: { plugins: [tailwindcss()], optimizeDeps: { exclude: ['minisearch'] } },
});
