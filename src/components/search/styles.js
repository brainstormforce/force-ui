export const textSizeClassNames = {
	sm: 'text-xs [&>svg]:size-4 rounded',
	md: 'text-sm [&>svg]:size-5 rounded-md',
	lg: 'text-base [&>svg]:size-6 rounded-md',
};

export const sizeClassNames = {
	input: {
		sm: 'py-1.5 px-2 rounded',
		md: 'p-2.5 rounded-md',
		lg: 'p-3 rounded-md',
	},
	content: {
		sm: 'p-1.5',
		md: 'p-1.5',
		lg: 'p-2',
	},
	title: {
		sm: 'p-2 text-xs',
		md: 'p-2 text-sm',
		lg: 'p-2 text-sm',
	},
	item: {
		sm: 'text-sm text-text-secondary rounded',
		md: 'text-base text-text-secondary rounded-md',
		lg: 'text-base text-text-secondary rounded-md',
	},
	icon: {
		sm: 'p-1 text-sm [&>svg]:size-4 text-icon-secondary',
		md: 'p-2 text-base [&>svg]:size-5 text-icon-secondary',
		lg: 'p-2 text-base [&>svg]:size-5 text-icon-secondary',
	},
	dialog: {
		sm: 'mt-1 rounded-md',
		md: 'mt-1.5 rounded-lg',
		lg: 'mt-1.5 rounded-lg',
	},
	slashIcon: {
		sm: 'px-2 py-0.5',
		md: 'px-3 py-1',
		lg: 'px-3.5 py-1',
	},
};
export const variantClassNames = {
	primary:
		'bg-field-primary-background border border-solid border-field-border hover:border-border-strong',
	secondary:
		'bg-field-secondary-background border border-solid border-field-border hover:border-border-strong',
	ghost: 'bg-field-secondary-background border border-solid border-transparent',
};

export const iconClasses =
	'text-icon-secondary group-hover:text-icon-primary group-focus-within:text-icon-primary';

export const disabledClassNames = {
	ghost: 'cursor-not-allowed text-text-disabled placeholder:text-text-disabled',
	primary:
		'border-border-disabled hover:border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled placeholder:text-text-disabled',
	secondary:
		'border-border-disabled hover:border-border-disabled cursor-not-allowed text-text-disabled placeholder:text-text-disabled',
};
