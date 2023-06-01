import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.bradn.dev',
	base: "/",
	integrations: [mdx(), sitemap({
		
	})],
	vite: {
		plugins: [
			VitePWA({
				registerType: 'autoUpdate',

				manifest: {
					name: "bradn docs 🌸",
					short_name: "bradn docs 🌸",
					description: "Documentation & Guides for all my projects & more.",
					theme_color: "#ffffff",
					background_color: "#000000",
					display: 'minimal-ui',
					start_url: "/",
					icons: [
						{
							src: "/favicons/favicon-16x16.png",
							sizes: "16x16",
							type: "image/png"
						},
						{
							src: "/favicons/favicon-32x32.png",
							sizes: "32x32",
							type: "image/png"
						},
						{
							src: "/favicons/android-chrome-192x192.png",
							sizes: "192x192",
							type: "image/png"
						},
						{
							src: "/favicons/android-chrome-256x256.png",
							sizes: "256x256",
							type: "image/png"
						},
						{
							src: "/favicons/favicon-512x512.png",
							sizes: "512x512",
							type: "image/png"
						},
						{
							src: "/favicons/android-chrome-192x192.png",
							sizes: "192x192",
							type: "image/png",
							purpose: "any maskable"
						}
					]
				},
				workbox: {
					globDirectory: 'dist',
					globPatterns: [
				    '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
					],
					navigateFallback: null,
				}
			})
		]
	}
});
