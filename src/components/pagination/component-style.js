export const sizeClassNames = {
	xs: {
		general: 'px-2 py-1 text-xs',
		ellipse: 'px-1.5 py-1 text-xs',
		icon: 'p-1 text-xs',
	},
	sm: {
		general: 'px-3 py-2 text-xs',
		ellipse: 'px-2.5 py-2 text-xs',
		icon: 'p-2 text-xs',
	},
	md: {
		general: 'px-3.5 py-2 text-sm',
		ellipse: 'px-2.5 py-2 text-sm',
		icon: 'p-2 text-sm',
	},
	lg: {
		general: 'px-5 py-3 text-base',
		ellipse: 'px-[18px] py-3 text-base',
		icon: 'p-3 text-base',
	},
};

export const disabledClassNames = {
	general: 'group disabled:border-field-border-disabled opacity-50',
	icon: 'group-disabled:text-icon-disabled',
	text: 'group-disabled:text-field-color-disabled',
};
