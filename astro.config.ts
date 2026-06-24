// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://floresnexus.cards',
  integrations: [icon(), react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});