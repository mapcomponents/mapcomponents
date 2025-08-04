import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';


function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
	addons: [],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {
			builder: {
				viteConfigPath: 'vite.config.ts',
			},
		},
	},
	refs: (config, { configType }) => {
		if (configType === 'DEVELOPMENT') {
			return {
				'deck-gl': {
					title: 'Deck.gl',
					url: 'http://localhost:4401',
				},
				'ra-geospatial': {
					title: 'Ra Geospatial',
					url: 'http://localhost:4402',
				},
				'storybook-website-storybook': {
					title: 'The Storybook of the Storybook website',
					url: 'https://master--5ccbc373887ca40020446347.chromatic.com/',
				},
				'mapcomponents': {
					title: 'The Storybook of the Storybook website',
					url: 'https://mapcomponents.github.io/react-map-components-maplibre/?path=/docs/core-maplibremap--docs',
				},
			};
		}
		return {
			react: {
				title: 'Deck.gl',
				url: 'https://your-production-react-storybook-url', //todo: Replace after init
			},
			'ra-geospatial': {
				title: 'Ra Geospatial',
				url: 'https://your-production-angular-storybook-url', //todo: Replace after init
			},
		};
	},
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
