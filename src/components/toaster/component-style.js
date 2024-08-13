// Available positions: top-left, top-right, bottom-left, bottom-right
export const positionClassNames = {
	'top-left': 'top-0 bottom-0 left-0 justify-start',
	'top-right': 'top-0 bottom-0 right-0 justify-start',
	'bottom-left': 'top-0 bottom-0 left-0 justify-end',
	'bottom-right': 'top-0 bottom-0 right-0 justify-end',
};

export const containerVariantClassNames = {
	stack: 'w-[22.5rem]',
	inline: 'lg:w-[47.5rem] w-full',
};

// Variant classes - Based on the variant prop.
export const variantClassNames = {
	neutral:
		'text-field-label [&>*]:text-field-label border-alert-border-neutral bg-alert-background-neutral',
	info: 'text-field-helper [&>*]:text-field-helper border-alert-border-info bg-alert-background-info',
	success:
		'text-support-error [&>*]:text-support-error border-alert-border-green bg-alert-background-green',
	warning:
		'text-field-color-disabled disabled cursor-not-allowed [&>*]:text-field-color-disabled border-alert-border-warning bg-alert-background-warning',
	error: 'text-field-color-disabled disabled cursor-not-allowed [&>*]:text-field-color-disabled border-alert-border-danger bg-alert-background-danger',
};

// Close icon class names.
export const closeIconClassNames = {
    light: 'text-icon-secondary',
    dark: 'text-icon-inverse',
};