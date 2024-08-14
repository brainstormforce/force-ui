// Available positions: top-left, top-right, bottom-left, bottom-right
export const positionClassNames = {
	'top-left': 'top-0 bottom-0 left-0 justify-start items-start',
	'top-right': 'top-0 bottom-0 right-0 justify-start items-end',
	'bottom-left': 'top-0 bottom-0 left-0 justify-end items-start',
	'bottom-right': 'top-0 bottom-0 right-0 justify-end items-end',
};

export const containerVariantClassNames = {
	stack: 'w-[22.5rem]',
	inline: 'lg:w-[47.5rem] w-full',
};

// Variant classes - Based on the variant prop.
export const variantClassNames = {
	light: {
		neutral:
		'border-alert-border-neutral bg-alert-background-neutral',
		custom:
		'border-alert-border-neutral bg-alert-background-neutral',
		info: 'border-alert-border-info bg-alert-background-info',
		success:
			'border-alert-border-green bg-alert-background-green',
		warning:
			'border-alert-border-warning bg-alert-background-warning',
		error: 'border-alert-border-danger bg-alert-background-danger',
	},
	dark: "bg-background-inverse border-background-inverse",
};

// Close icon class names.
export const closeIconClassNames = {
    light: 'text-icon-secondary',
    dark: 'text-icon-inverse',
};