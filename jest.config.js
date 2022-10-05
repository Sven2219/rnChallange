module.exports = {
	preset: 'react-native',
	setupFilesAfterEnv: ['<rootDir>/setupFilesAfterEnv.js'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
	setupFiles: ['./jest-setup.js'],

	testEnvironment: 'jest-environment-jsdom', // Solution for ReferenceError: You are trying to 'import' a file after the Jest environment has been torn down
};
