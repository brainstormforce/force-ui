export const sizeClassNames = {
	sm: {
		icon: '[&>svg]:size-4',
		general: 'px-2 py-1 flex items-center rounded text-button-secondary',
		hover: 'hover:bg-button-tertiary-hover hover:text-button-secondary',
		focus: 'focus:bg-button-tertiary-hover focus:ring',
		text: 'text-xs font-semibold',
	},
	md: {
		icon: '[&>svg]:size-5',
		general: 'px-3 py-1 flex items-center rounded text-button-secondary',
		hover: 'hover:bg-button-tertiary-hover hover:text-button-secondary',
		focus: 'focus:bg-button-tertiary-hover focus:ring',
		text: 'text-base font-semibold',
	},
	lg: {
		icon: '[&>svg]:size-6',
		general: 'px-4 py-1.5 flex items-center rounded text-button-secondary',
		hover: 'hover:bg-button-tertiary-hover hover:text-button-secondary',
		focus: 'focus:bg-button-tertiary-hover focus:ring',
		text: 'text-lg font-semibold',
	},
};

export const disabledClassNames = {
	general:
		'group disabled:border-field-border-disabled [&:hover:has(:disabled)]:border-field-border-disabled',
	icon: 'group-disabled:text-icon-disabled',
	text: 'group-disabled:text-field-color-disabled',
};
