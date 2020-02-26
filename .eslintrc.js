module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ['standard', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		use: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'no-unused-vars': 'warn',
	},
};
