const { getStoryContext } = require('@storybook/test-runner');
const { injectAxe, checkA11y, configureAxe } = require('axe-playwright');

module.exports = {
	async preVisit(page) {
		await injectAxe(page);
	},
	async postVisit(page, context) {
		// Get the entire context of a story, including parameters, args, argTypes, etc.
		const storyContext = await getStoryContext(page, context);
		// Apply story-level a11y rules
		await configureAxe(page, {
			rules: storyContext.parameters?.a11y?.config?.rules,
		});

		// Do not run a11y tests on disabled stories.
		if (storyContext.parameters?.a11y?.disable) {
			return;
		}

		const element =
			storyContext.parameters?.a11y?.element ?? '#storybook-root';
		await checkA11y(page, element, {
			detailedReport: true,
			detailedReportOptions: {
				html: true,
			},
		});
	},
};
