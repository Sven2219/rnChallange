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
					},
				],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
	],
};
