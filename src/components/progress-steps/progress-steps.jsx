import React from 'react';
import { cn } from '@/utilities/functions';
import { Check } from 'lucide-react';
import { getVariantClasses, completedStepCommonClasses, stepWrapperClasses } from './utils';

/**
 * ProgressSteps Component
 *
 * @param {Object}                    props               - Component props.
 * @param {'dot' | 'number' | 'icon'} props.variant       - The type of step indicator.
 * @param {'sm' | 'md' | 'lg'}        props.size          - The size of the step indicator.
 * @param {'inline' | 'stack'}        props.type          - The layout type of the steps.
 * @param {number}                    props.currentStep   - The current active step.
 * @param {React.Element}             [props.variantIcon] - Custom icon for the 'icon' variant.
 * @param {React.ReactNode}           props.children      - The steps to be rendered.
 * @param {string}                    [props.className]   - Additional class names for the component.
 */
const ProgressSteps = ({
    variant = 'dot',
    size = 'sm',
    type = 'inline',
    currentStep = 1,
    variantIcon,
    children,
    className,
    ...props
}) => {
    const totalSteps = React.Children.count(children);

    const sizeClasses = {
        sm: {
            dot: 'w-2.5 h-2.5',
            ring: 'w-5 h-5',
            numberIcon: 'w-5 h-5 text-[10px]',
            line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
            icon: 'w-5 h-5',
        },
        md: {
            dot: 'w-3 h-3',
            ring: 'w-6 h-6',
            numberIcon: 'w-6 h-6 text-[12px]',
            line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-3',
            icon: 'w-6 h-6',
        },
        lg: {
            dot: 'w-3.5 h-3.5',
            ring: 'w-7 h-7',
            numberIcon: 'w-7 h-7 text-[14px]',
            line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
            icon: 'w-7 h-7',
        },
    };

    const steps = React.Children.toArray(children).map((child, index) => {
        const isCompleted = index + 1 < currentStep;
        const isCurrent = index + 1 === currentStep;

        const stepContent = createStepContent(variant, isCompleted, isCurrent, sizeClasses, size, index, variantIcon);

        const stepClasses = cn(
            'relative rounded-full flex items-center justify-center transition-colors duration-500',
            isCurrent ? 'ring-1 ring-brand-primary-600' : isCompleted ? '' : 'ring-1 ring-gray-400',
            sizeClasses[size].ring
        );

        return (
            <React.Fragment key={index}>
                {React.cloneElement(child, {
                    stepContent,
                    stepClasses,
                    isCurrent,
                    isCompleted,
                    totalSteps,
                    type,
                })}
                {index < totalSteps - 1 && (
                    <div
                        className={`flex-1 ${sizeClasses[size].line} transition-colors duration-500 ${
                            isCompleted ? 'bg-brand-primary-600' : 'bg-gray-300'
                        }`}
                    ></div>
                )}
            </React.Fragment>
        );
    });

    return (
        <div className={cn('flex flex-col items-center', className)} {...props}>
            <div className="flex w-full items-center justify-between mb-6">
                {steps}
            </div>
        </div>
    );
};

/**
 * ProgressStep Component
 *
 * @param {Object}             props             - Component props.
 * @param {string}             props.labelText   - The label text for the step.
 * @param {JSX.Element}        props.stepContent - The content for the step.
 * @param {string}             props.stepClasses - The CSS classes for the step.
 * @param {boolean}            props.isCurrent   - Whether the step is the current step.
 * @param {boolean}            props.isCompleted - Whether the step is completed.
 * @param {number}             props.totalSteps  - The total number of steps.
 * @param {string}             [props.className] - Additional class names for the step.
 * @param {'inline' | 'stack'} props.type        - The layout type of the step.
 * @param {number}             props.index       - The index of the step.
 */
const ProgressStep = ({
    labelText,
    stepContent,
    stepClasses,
    isCurrent,
    isCompleted,
    totalSteps,
    className,
    type,
    index,
    ...props
}) => {
    const wrapperClasses = ['flex items-center', className];
    const labelClasses = ['text-gray-400'];
    const labelStyle = {};

    if (isCurrent || isCompleted) {
        labelClasses.push('text-brand-primary-600');
    } else {
        labelClasses.push('text-gray-400');
    }

    if (type === 'stack') {
        labelClasses.push('mt-2', 'text-center', 'absolute', 'left-1/2', 'transform', '-translate-x-1/2', 'whitespace-nowrap');
        wrapperClasses.push('relative');
        labelStyle.top = 'calc(100% + 8px)';
    } else {
        labelClasses.push('ml-2');
    }

    return (
        <div className={cn(...wrapperClasses)} {...props}>
            <div className={cn('flex items-center', type === 'stack' && 'z-10')}>
                <div className={stepClasses}>{stepContent}</div>
            </div>

            {labelText && (
                <span className={cn(...labelClasses)} style={labelStyle}>
                    {labelText}
                </span>
            )}
        </div>
    );
};



/**
 * Helper function to create step content based on variant.
 *
 * @param {'dot' | 'number' | 'icon'} variant   - The type of step indicator.
 * @param {boolean}                   isCompleted - Whether the step is completed.
 * @param {boolean}                   isCurrent   - Whether the step is the current step.
 * @param {Object}                    sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'}        size        - The size of the step indicator.
 * @param {number}                    index       - The index of the step.
 * @param {React.Element}             variantIcon - Custom icon for the 'icon' variant.
 * @return {React.Element} The step content.
 * */

const createStepContent = (variant, isCompleted, isCurrent, sizeClasses, size, index, variantIcon) => {
    if (isCompleted) {
        return <Check className={completedStepCommonClasses()} />;
    }

    const commonClasses = stepWrapperClasses({isCurrent, sizeClasses, size});
    const variantClasses = getVariantClasses({variant, isCurrent, sizeClasses, size});

	let content = null;
	if (variant === 'number') {
		content = index + 1;
	}
	if (variant === 'icon' && variantIcon) {
		content = React.cloneElement(variantIcon, { className: 'w-full h-full' });
	}

    return (
        <span className={commonClasses}>
            <span className={variantClasses}>
                {content}
            </span>
        </span>
    );
};

export { ProgressSteps, ProgressStep };
