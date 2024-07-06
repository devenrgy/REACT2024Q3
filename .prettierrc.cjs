/** @type {import("prettier").Config} */
const config = {
	semi: true,
	endOfLine: 'lf',
	trailingComma: 'all',
	arrowParens: 'always',
	singleQuote: true,
	useTabs: true,
	jsxSingleQuote: true,
	printWidth: 120,
	tabWidth: 2,
	plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
