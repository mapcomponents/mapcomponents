import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { defineConfig } from 'rollup';

import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import externals from 'rollup-plugin-node-externals';

import css from 'rollup-plugin-import-css';
import del from 'rollup-plugin-delete';
import svgr from '@svgr/rollup';

import pkg from './package.json';

const externalsConfig = {
	deps: true,
	devDeps: true,
	exclude:['react', 'react-dom']
};

const config = defineConfig([
	// CJS config
	//{
	//	input: ['src/index.ts'],
	//	output: {
	//		file: 'dist/index.js',
	//		format: 'cjs',
	//		sourcemap: true,
	//	},
	//	plugins: [
	//		svgr({
	//			svgo: false,
	//		}),
	//		url(),
	//		babel(),
	//		externals(externalsConfig),
	//		typescript({ declarationDir: 'dist/types', sourceMap: true }),
	//		css(),
	//		del({ targets: ['dist/*'] }),
	//	],
	//},
	// ESM config
	{
		input: ['src/index.ts'],
		output: {
			file: 'dist/index.esm.js',
			format: 'cjs',
			sourcemap: true,
		},
		plugins: [
			svgr({
				svgo: false,
			}),
			url(),
			babel({
				presets: ['@babel/preset-react'],
			}),
			externals(externalsConfig),
			commonjs(),
			typescript({ declarationDir: 'dist/types', sourceMap: true }),
			css(),
			del({ targets: ['dist/*'] }),
		],
		external: [
			'react',
			'react-dom',
			'd3',
			...Object.keys(pkg.dependencies),
			...Object.keys(pkg.peerDependencies),
			...Object.keys(pkg.devDependencies),
		],
	},
]);
export default config;
