import React from 'react';
import { cn } from '@/utilities/functions';
import { Check } from 'lucide-react';
import { getVariantClasses, completedStepCommonClasses, stepWrapperClasses } from './utils';

/**
 * ProgressSteps Component
 *
 * @param {Object}                    props             - Component props.
 * @param {'dot' | 'number' | 'icon'} props.variant     - The type of step indicator.
 * @param {'sm' | 'md' | 'lg'}        props.size        - The size of the step indicator.
 * @param {'inline' | 'stack'}        props.type        - The layout type of the steps.
 * @param {number}                    props.currentStep - The current active step.
 * @param {React.ReactNode}           props.children    - The steps to be rendered.
 * @param {string}                    [props.className] - Additional class names for the component.
 */
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

/**
 * ProgressStep Component
 *
 * @param {Object}                    props             - Component props.
 * @param {string}                    props.labelText   - The label text for the step.
 * @param {JSX.Element}               props.icon        - The icon to display for the step.
 * @param {string}                    props.stepClasses - The CSS classes for the step.
 * @param {boolean}                   props.isCurrent   - Whether the step is the current step.
 * @param {boolean}                   props.isCompleted - Whether the step is completed.
 * @param {string}                    [props.className] - Additional class names for the step.
 * @param {'inline' | 'stack'}        props.type        - The layout type of the step.
 * @param {'dot' | 'number' | 'icon'} props.variant     - The type of step indicator.
 * @param {Object}                    props.sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'}        props.size        - The size of the step indicator.
 */
const ProgressStep = ( {
	labelText,
	icon,
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
					sizeClasses[ size ].label, // Apply the label size
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

/**
 * Helper function to create step content based on variant.
 *
 * @param {'dot' | 'number' | 'icon'} variant     - The type of step indicator.
 * @param {boolean}                   isCompleted - Whether the step is completed.
 * @param {boolean}                   isCurrent   - Whether the step is the current step.
 * @param {Object}                    sizeClasses - The size classes for different step sizes.
 * @param {'sm' | 'md' | 'lg'}        size        - The size of the step indicator.
 * @param {JSX.Element}               icon        - The icon to display for the step.
 * @return {JSX.Element} The JSX element representing the step content.
 */
const createStepContent = ( variant, isCompleted, isCurrent, sizeClasses, size, icon ) => {
	if ( isCompleted ) {
		return <Check className={ completedStepCommonClasses( sizeClasses, size ) } />;
	}

	const commonClasses = stepWrapperClasses( isCurrent, sizeClasses, size );
	const variantClasses = getVariantClasses( variant, isCurrent, sizeClasses, size );

	let content = null;
	if ( variant === 'number' ) {
		content = size;
	} else if ( variant === 'icon' && icon ) {
		content = React.cloneElement( icon, { className: 'w-full h-full' } );
	}

	return (
		<span className={ commonClasses }>
			<span className={ variantClasses }>{ content }</span>
		</span>
	);
};

export { ProgressSteps, ProgressStep };
