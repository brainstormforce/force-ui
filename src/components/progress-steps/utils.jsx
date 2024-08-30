import { cn } from '@/utilities/functions';


/**
 * Helper function to generate classes for different step variants.
 * 
 * @param {'dot' | 'number' | 'icon'} variant - The type of step indicator.
 * @param {boolean} isCurrent                 - Whether the step is the current step.
 * @param {Object} sizeClasses                - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'} size           - The size of the step indicator.
 * @return {string} The combined class names.
 * */

export const getVariantClasses = ({ variant, isCurrent, sizeClasses, size }) => {
    let baseClass = `absolute rounded-full transition-colors duration-500`;

    if (variant === 'dot') 
        return cn(baseClass, sizeClasses[size].dot, isCurrent ? 'bg-brand-primary-600' : 'bg-gray-400');
    
    if (variant === 'number') 
        return cn(baseClass, sizeClasses[size].dot, isCurrent ? 'text-brand-primary-600' : 'text-gray-400', 'flex items-center justify-center');

    if (variant === 'icon') 
        return cn(baseClass, isCurrent ? 'text-brand-primary-600' : 'text-gray-400', 'flex items-center justify-center');
    
    return '';
}

/**
 * Helper function to generate common classes for step indicators.
 *
 * @param {boolean}            isCurrent   - Whether the step is the current step.
 * @param {Object}             sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'} size        - The size of the step indicator.
 * @return {string} The combined class names.
 */

export const stepWrapperClasses = ({isCurrent, sizeClasses, size}) => {
    return cn(
        'relative flex items-center rounded-full justify-center transition-colors duration-500',
        isCurrent ? 'ring-1 ring-brand-primary-600' : 'ring-1 ring-gray-400',
        sizeClasses[size].ring
    );
};


/**
 * Helper function to generate common classes for completed steps.
 *
 * @return {string} The combined class names.
 */

export const completedStepCommonClasses = () => {  
    return cn('w-full h-full rounded-full text-brand-primary-600 transition-colors duration-300');
}