import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { normalizeSite } from './src/lib/site.ts';
const env=loadEnv(process.env.NODE_ENV || 'production',process.cwd(),'PUBLIC_');
const site = normalizeSite(env.PUBLIC_SITE_URL);
export default defineConfig({
  site,
  output: 'static',
  devToolbar: { enabled: false },
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
});
