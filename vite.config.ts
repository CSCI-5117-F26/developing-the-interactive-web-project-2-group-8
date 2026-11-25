import tailwindcss from '@tailwindcss/vite';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';


import postcssNesting from 'postcss-nesting';
import postcssEach from 'postcss-each';
import postcssAtRulesVariables from 'postcss-at-rules-variables';
import postcssCustomProperties from 'postcss-custom-properties';


import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig( {
	build: {
		sourcemap: true
	},
	css: {
		postcss: {
			plugins: [
				postcssNesting,
				postcssEach( {
					afterEach: [
						postcssAtRulesVariables,

					],
					beforeEach: [
						postcssCustomProperties,

					]
				} ),
				tailwindcss
			],
		}
	},
	plugins: [
		// require( '@tailwindcss/postcss' ), require( 'postcss-each' ),
		tailwindcss(),
		sveltekit( {
			preprocess: vitePreprocess( {
				style: true, // default value
				script: true // default value
			} ),
			compilerOptions: {
				// customElement: true,


				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ( { filename } ) =>
					filename.split( /[/\\]/ ).includes( 'node_modules' ) ? undefined : true
			},

			// https://svelte.dev/docs/kit/adapter-vercel

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter()
		} )
	]
} );
