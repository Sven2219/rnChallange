module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: [
					{
						const: './const/',
						hooks: './hooks/',
						modules: './modules/',
						navigation: './navigation/',
						i18n: './i18n/',
						types: './types/',
						helpers: './helpers/',
						wrappers: './wrappers/',
					},
				],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
	],
};
