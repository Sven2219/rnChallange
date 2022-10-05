module.exports = {
	root: true,
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
			},
		},
	],
	parserOptions: {
		project: './tsconfig.json',
		createDefaultProgram: true,
	},
	rules: {
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
		'import/extensions': 0,
		'import/no-extraneous-dependencies': 0,
		'no-return-await': 'off',
		'no-empty-function': 0,
		radix: 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'jsx-a11y/label-has-associated-control': 'off',
		'import/prefer-default-export': 'off',
		'import/no-absolute-path': 'off',
		'react/destructuring-assignment': 'off',
		'import/no-mutable-exports': 'off',
		camelcase: 'off',
		'no-return-assign': 'off',
		'no-param-reassign': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/require-default-props': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		curly: ['error', 'all'],
		'no-void': 'off',
		'@typescript-eslint/no-use-before-define': ['off'],
		'@typescript-eslint/no-explicit-any': ['error'],
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

		'no-async-promise-executor': 'off',
		'class-methods-use-this': 'off',
		'react/prop-types': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'func-names': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.native.js'],
			},
		},
		react: {
			version: 'detect',
		},
	},
};
