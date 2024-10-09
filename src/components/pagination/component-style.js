export const sizeClassNames = {
	sm: {
		icon: '[&>svg]:size-4',
		general: 'px-2 py-1 flex items-center rounded text-button-secondary',
		text: 'text-xs font-semibold',
	},
	md: {
		icon: '[&>svg]:size-5',
		general: 'px-3 py-1 flex items-center rounded text-button-secondary',
		text: 'text-base font-semibold',
	},
	lg: {
		icon: '[&>svg]:size-6',
		general: 'px-4 py-1.5 flex items-center rounded text-button-secondary',
		text: 'text-lg font-semibold',
	},
};

export const disabledClassNames = {
	general: 'group disabled:border-field-border-disabled opacity-50',
	icon: 'group-disabled:text-icon-disabled',
	text: 'group-disabled:text-field-color-disabled',
};
