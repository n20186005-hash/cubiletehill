import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const DEFAULT_SITE_URL = 'https://cubiletehill.com';
const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const site = configuredSite || DEFAULT_SITE_URL;

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: page => !/\/404\/?$/.test(page) })],
  vite: {
    plugins: [tailwindcss()],
  },
});
