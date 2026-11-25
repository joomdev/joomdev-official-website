import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const indexable = process.env.SITE_INDEXABLE === 'true';

export default defineConfig({
  site: process.env.PAGES_ORIGIN || 'https://www.joomdev.com',
  base: process.env.PAGES_BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: indexable ? [sitemap()] : [],
});
