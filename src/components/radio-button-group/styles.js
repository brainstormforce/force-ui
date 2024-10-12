export const colorClassNames = {
	primary: {
		checkbox:
			'border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus',
		icon: 'text-white',
	},
};
export const disabledClassNames = {
	checkbox:
		'disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled cursor-not-allowed',
	icon: 'peer-disabled:text-border-disabled cursor-not-allowed',
};
export const textSizeClassNames = {
	sm: 'text-sm leading-5',
	md: 'text-base leading-6',
}

export const sizeClassNames = {
	sm: {
		checkbox: 'size-4',
		icon: 'size-1.5',
	},
	md: {
		checkbox: 'size-5',
		icon: 'size-2',
	},
};

export const sizes = {
	xs: 'py-1 px-1 text-sm gap-0.5 [&>svg]:h-4 [&>svg]:w-4',
	sm: 'py-1 px-1.5 text-base gap-1 [&>svg]:h-4 [&>svg]:w-4',
	md: 'py-2 px-2.5 text-base gap-1 [&>svg]:h-5 [&>svg]:w-5',
	lg: 'py-2.5 px-3 text-base gap-1 [&>svg]:h-6 [&>svg]:w-6',
};

export const borderClasses =
	'border-0 border-r border-border-subtle border-solid';

export const baseClasses =
	'bg-background-primary text-primary cursor-pointer flex items-center justify-center';
export const hoverClasses = 'hover:bg-button-tertiary-hover';
export const focusClasses = 'focus:outline-none';
