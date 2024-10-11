export const sizeToClass = {
	xs: 'w-6 text-xs', // 24px (6 * 4px)
	sm: 'w-8 text-xs', // 32px (8 * 4px)
	md: 'w-10 text-sm', // 40px (10 * 4px)
	lg: 'w-12 text-base', // 48px (12 * 4px)
};

export const disabledClassNames = {
	general: 'group disabled:border-field-border-disabled opacity-50',
	icon: 'group-disabled:text-icon-disabled',
	text: 'group-disabled:text-field-color-disabled',
};
