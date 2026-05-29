// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://nexus-group-lap.github.io',
  base: '/flores-nexus.github.io',
  integrations: [icon()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true, // don’t touch this!
  },
});