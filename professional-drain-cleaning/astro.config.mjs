// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? 'http://localhost:4321',
	base: process.env.BASE_PATH ?? '/',
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [sitemap(), icon()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.google(),
			name: 'Poppins',
			cssVariable: '--font-display',
			fallbacks: ['sans-serif'],
			weights: ['700', '800'],
		},
		{
			provider: fontProviders.google(),
			name: 'Oswald',
			cssVariable: '--font-label',
			fallbacks: ['sans-serif'],
			weights: ['500', '600'],
		},
	],
});
