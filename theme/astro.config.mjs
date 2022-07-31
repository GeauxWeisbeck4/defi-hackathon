import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import sitemap from "@astrojs/sitemap";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://defiours.com',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [lit(), sitemap()],
  // Add renderers to the config
  adapter: netlify()
});