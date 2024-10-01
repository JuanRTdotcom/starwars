import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// pages: 'build',
			// assets: 'build',
			// fallback: undefined,
			// precompress: true,
			// strict: false
			out: 'build',
			precompress: true
		}),
		alias: {
			'@controllers': resolve('./src/controllers'),
			'@models': resolve('./src/models'),
			'@views': resolve('./src/views'),
			'@routes': resolve('./src/routes'),
			'@server': resolve('./src/server'),
			'@assets': resolve('./src/assets'),
			'@/*': './path/to/lib/*'
		},
	},
	preprocess: [vitePreprocess({})]
};

export default config;
