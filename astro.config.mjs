import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.bradn.dev',
	base: "/",
	integrations: [mdx(), sitemap({
		
	})],
});
