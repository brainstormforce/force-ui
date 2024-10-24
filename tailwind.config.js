const withTW = require('./src/utilities/withTW');

module.exports = withTW({
	content: ['./src/**/*.{js,jsx}'],
	plugins: [require('@tailwindcss/container-queries')],
});
