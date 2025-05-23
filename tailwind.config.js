const withTW = require('./src/utilities/withTW');

module.exports = withTW({
	content: ['./src/**/*.{ts,tsx,js,jsx}'],
	plugins: [require('@tailwindcss/container-queries')],
});
