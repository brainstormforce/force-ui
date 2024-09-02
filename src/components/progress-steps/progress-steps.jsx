import React from 'react';
import { cn } from '@/utilities/functions';
import { Plus, Check } from 'lucide-react';
import { getVariantClasses, completedStepCommonClasses, stepWrapperClasses } from './utils';

const ProgressSteps = ( {
	variant = 'dot',
	size = 'sm',
	type = 'inline',
	currentStep = 1,
	children,
	className,
	...rest
} ) => {
	const totalSteps = React.Children.count( children );

	const sizeClasses = {
		sm: {
			dot: 'size-2.5',
			ring: 'size-5',
			numberIcon: 'size-5 text-[10px]',
			line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
			icon: 'size-5',
			label: 'text-xs',
		},
		md: {
			dot: 'size-3',
			ring: 'size-6',
			numberIcon: 'size-6 text-[12px]',
			line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
			icon: 'size-6',
			label: 'text-sm',
		},
		lg: {
			dot: 'size-3.5',
			ring: 'size-7',
			numberIcon: 'size-7 text-[14px]',
			line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
			icon: 'size-7',
			label: 'text-sm',
		},
	};

	const steps = React.Children.map( children, ( child, index ) => {
		const isCompleted = index + 1 < currentStep;
		const isCurrent = index + 1 === currentStep;

		const stepProps = {
			isCompleted,
			isCurrent,
			sizeClasses,
			size,
			variant,
			type,
		};

		return (
			<>
				{ React.cloneElement( child, stepProps ) }
				{ index < totalSteps - 1 && (
					<div
						className={ cn(
							'flex-1 transition-colors duration-500',
							sizeClasses[ size ].line,
							isCompleted ? 'bg-brand-primary-600' : 'bg-gray-300'
						) }
					></div>
				) }
			</>
		);
	} );

	return (
		<div className={ cn( 'flex w-full items-center mb-16 justify-between', className ) } { ...rest }>
			{ steps }
		</div>
	);
};

// ProgressStep component as {ProgressSteps.Step}
const ProgressStep = ( {
	labelText,
	icon = <Plus />,
	stepClasses,
	isCurrent,
	isCompleted,
	className,
	type,
	variant,
	sizeClasses,
	size,
	...rest
} ) => {
	const stepContent = createStepContent( variant, isCompleted, isCurrent, sizeClasses, size, icon );

	return (
		<div className={ cn( 'flex items-center', type === 'stack' && 'relative', className ) } { ...rest }>
			{ stepContent }
			{ labelText && (
				<span
					className={ cn(
						sizeClasses[ size ].label, 
						'text-gray-400',
						isCurrent || isCompleted ? 'text-brand-primary-600' : '',
						type === 'stack' ? 'mt-2 absolute transform w-24 top-full break-words' : 'ml-2'
					) }
				>
					{ labelText }
				</span>
			) }
		</div>

	);
};

//create step content
const createStepContent = (variant, isCompleted, isCurrent, sizeClasses, size, icon) => {
    if (isCompleted) {
        return <Check className={completedStepCommonClasses(sizeClasses, size)} />;
    }

    const commonClasses = stepWrapperClasses(isCurrent, sizeClasses, size);
    const variantClasses = getVariantClasses(variant, isCurrent, sizeClasses, size);

    let content = null;
    if (variant === 'number') {
        content = icon ? React.cloneElement(icon, { className: 'w-full h-full' }) : size;  // Check for icon first
    } else if (variant === 'icon' && icon) {
        content = React.cloneElement(icon, { className: 'w-full h-full' });
    }

    return (
        <span className={commonClasses}>
            <span className={variantClasses}>{content}</span>
        </span>
    );
};

ProgressSteps.Step = ProgressStep;

export default ProgressSteps;

