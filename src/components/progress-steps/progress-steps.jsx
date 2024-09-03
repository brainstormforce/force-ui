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
			numberIcon: 'size-5 text-tiny',
			line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
			icon: 'size-5',
			label: 'text-xs',
		},
		md: {
			dot: 'size-3',
			ring: 'size-6',
			numberIcon: 'size-6 text-sm',
			line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
			icon: 'size-6',
			label: 'text-sm',
		},
		lg: {
			dot: 'size-3.5',
			ring: 'size-7',
			numberIcon: 'size-7 text-md',
			line: type === 'stack' ? 'h-0.5' : 'h-0.5 mx-2',
			icon: 'size-7',
			label: 'text-sm',
		},
	};

	const steps = React.Children.map( children, ( child, index ) => {
		const isCompleted = index + 1 < currentStep;
		const isCurrent = index + 1 === currentStep;
		const isLast = index + 1 === totalSteps; // Check if this is the last step

		const stepProps = {
			isCompleted,
			isCurrent,
			sizeClasses,
			size,
			variant,
			type,
			isLast, // Pass the isLast prop
			index,
		};

		return (
			<React.Fragment key={ index }>
				{ React.cloneElement( child, stepProps ) }
			</React.Fragment>
		);
	} );

	return (
		<div className={ cn( 'flex w-full', className,
			type === 'inline' ? 'items-center justify-between' : ''
		) } { ...rest }>
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
	isLast,
	index,
	...rest
} ) => {
	const stepContent = createStepContent( variant, isCompleted, isCurrent, sizeClasses, size, icon, index );

	const stackSizeOffset = {
		lg: type === 'stack' ? 'left-[calc(50%+14px)] right-[calc(-50%+14px)] ' : 'left-1/2 right-3.5',
		md: type === 'stack' ? 'left-[calc(50%+12px)] right-[calc(-50%+12px)] ' : 'left-1/2 right-3 ',
		sm: type === 'stack' ? 'left-[calc(50%+10px)] right-[calc(-50%+10px)] ' : 'left-1/2 right-2.5 ',
	};

	const topClass = {
		lg: type === 'stack' ? 'top-3.5' : 'top-1/2',
		md: type === 'stack' ? 'top-3' : 'top-1/2',
		sm: type === 'stack' ? 'top-2.5' : 'top-1/2',
	};

	return (
		<div className="relative  flex-1 justify-center">
			<div className={ cn( 'flex items-center', type === 'stack' && 'flex-col', className ) } { ...rest }>
				{ stepContent }
				{ labelText && (
					<span
						className={ cn(
							sizeClasses[ size ].label,
							'text-gray-400',
							isCurrent ? 'text-brand-primary-600' : '',
							type === 'stack' ? 'mt-2 transform ' : 'ml-2 w-12'
						) }
					>
						{ labelText }
					</span>
				) }
			</div>

			{ ! isLast && (
				<div
					className={ cn(
						'relative',
						'flex',
						'border-solid',
						'border-y',
						'absolute',
						isCompleted ? 'border-brand-primary-600' : 'border-gray-300',
						topClass[ size ],
						stackSizeOffset[ size ],
					) }
				>
					<span className="block"></span>
				</div>
			) }
		</div>
	);
};

// Create step content
const createStepContent = ( variant, isCompleted, isCurrent, sizeClasses, size, icon, index ) => {
	if ( isCompleted ) {
		return <Check className={ completedStepCommonClasses( sizeClasses, size ) } />;
	}

	const commonClasses = stepWrapperClasses( isCurrent, sizeClasses, size );
	const variantClasses = getVariantClasses( variant, isCurrent, sizeClasses, size );

	let content = null;
	if ( variant === 'number' ) {
		content = index + 1;
	} else if ( variant === 'icon' && icon ) {
		content = React.cloneElement( icon, { className: 'w-full h-full' } );
	}

	return (
		<span className={ commonClasses }>
			<span className={ variantClasses }>{ content }</span>
		</span>
	);
};

ProgressSteps.Step = ProgressStep;

export default ProgressSteps;
