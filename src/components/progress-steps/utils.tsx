import { cn } from '@/utilities/functions';

/**
 * Helper function to generate classes for different step variants.
 *
 * @param {'dot' | 'number' | 'icon'} variant     - The type of step indicator.
 * @param {boolean}                   isCurrent   - Whether the step is the current step.
 * @param {Object}                    sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'}        size        - The size of the step indicator.
 * @return {string} The combined class names.
 */
export const getVariantClasses = (
	variant: 'dot' | 'number' | 'icon',
	isCurrent: boolean,
	sizeClasses: { [key: string]: { dot: string; ring: string } },
	size: 'sm' | 'md' | 'lg'
): string => {
	const baseClass = `absolute rounded-full transition-colors duration-500 ${ sizeClasses[ size ].dot }`;

	if ( variant === 'dot' ) {
		return cn(
			baseClass,
			sizeClasses[ size ].dot,
			isCurrent ? 'bg-brand-primary-600' : 'bg-text-tertiary'
		);
	}

	if ( variant === 'number' ) {
		return cn(
			baseClass,
			sizeClasses[ size ].dot,
			isCurrent ? 'text-brand-primary-600' : 'text-text-tertiary',
			'flex items-center justify-center'
		);
	}

	if ( variant === 'icon' ) {
		return cn(
			baseClass,
			isCurrent ? 'text-brand-primary-600' : 'text-text-tertiary',
			'flex items-center justify-center'
		);
	}

	return '';
};

/**
 * Helper function to generate common classes for step indicators.
 *
 * @param {boolean}            isCurrent   - Whether the step is the current step.
 * @param {Object}             sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'} size        - The size of the step indicator.
 * @return {string} The combined class names.
 */
export const stepWrapperClasses = (
	isCurrent: boolean,
	sizeClasses: { [key: string]: { dot: string; ring: string } },
	size: 'sm' | 'md' | 'lg'
): string => {
	return cn(
		'relative flex items-center rounded-full justify-center transition-colors z-10 duration-500 ring-1',
		isCurrent ? 'ring-brand-primary-600' : 'ring-border-subtle',
		sizeClasses[ size ].ring
	);
};

/**
 * Helper function to generate common classes for completed steps.
 *
 * @param {Object}             sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'} size        - The size of the step indicator.
 * @return {string} The combined class names.
 */
export const completedStepCommonClasses = (
	sizeClasses: { [key: string]: { dot: string; ring: string } },
	size: 'sm' | 'md' | 'lg'
) => {
	return cn(
		'rounded-full text-brand-primary-600 transition-colors duration-300',
		sizeClasses[ size ].dot,
		sizeClasses[ size ].ring
	);
};
