export default {
	displayName: 'deck-gl',
	preset: '../../jest.preset.js',
	transform: {
		'^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
		'^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../coverage/libs/deck-gl',
};
