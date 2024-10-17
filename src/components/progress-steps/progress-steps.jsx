import React from 'react';
import { cn } from '@/utilities/functions';
import { Plus, Check } from 'lucide-react';
import {
	getVariantClasses,
	completedStepCommonClasses,
	stepWrapperClasses,
} from './utils';

const ProgressSteps = ( {
	variant = 'dot',
	size = 'sm',
	type = 'inline',
	currentStep = 1,
	children,
	className,
	lineProps = 'min-w-10',
	...rest
} ) => {
	const totalSteps = React.Children.count( children );

	const sizeClasses = {
		sm: {
			dot: 'size-2.5',
			ring: 'size-5',
			numberIcon: 'size-5 text-tiny',
			icon: 'size-5',
			label: 'text-xs',
		},
		md: {
			dot: 'size-3',
			ring: 'size-6',
			numberIcon: 'size-6 text-sm',
			icon: 'size-6',
			label: 'text-sm',
		},
		lg: {
			dot: 'size-3.5',
			ring: 'size-7',
			numberIcon: 'size-7 text-md',
			icon: 'size-7',
			label: 'text-sm',
		},
	};

	const steps = React.Children.map( children, ( child, index ) => {
		const isCompleted = index + 1 < currentStep;
		const isCurrent = index + 1 === currentStep;
		const isLast = index + 1 === totalSteps;

		const stepProps = {
			isCompleted,
			isCurrent,
			sizeClasses,
			size,
			variant,
			type,
			isLast,
			index,
			lineProps,
		};

		return (
			<React.Fragment key={ index }>
				{ React.cloneElement( child, stepProps ) }
			</React.Fragment>
		);
	} );

	return (
		<div
			className={ cn(
				'flex w-full',
				className,
				type === 'inline' ? 'items-center justify-between' : ''
			) }
			{ ...rest }
		>
			{ steps }
		</div>
	);
};

// ProgressStep component as {ProgressSteps.Step}
const ProgressStep = ( {
	labelText = '',
	icon = <Plus />,
	isCurrent,
	isCompleted,
	className,
	type,
	variant,
	sizeClasses,
	size,
	isLast,
	index,
	lineProps,
	...rest
} ) => {
	const stepContent = createStepContent(
		variant,
		isCompleted,
		isCurrent,
		sizeClasses,
		size,
		icon,
		index
	);

	const stackSizeOffset = {
		lg: 'left-[calc(50%+14px)] right-[calc(-50%+14px)]',
		md: 'left-[calc(50%+12px)] right-[calc(-50%+12px)]',
		sm: 'left-[calc(50%+10px)] right-[calc(-50%+10px)]',
	};

	const topClass = {
		lg: 'top-3.5',
		md: 'top-3',
		sm: 'top-2.5',
	};

	const renderLabel = () => {
		if ( labelText ) {
			const labelClasses = cn(
				sizeClasses[ size ].label,
				'text-text-tertiary',
				isCurrent ? 'text-brand-primary-600' : '',
				'break-word', // max width for inline and stack
				type === 'stack' ? 'mt-2 transform max-w-xs' : 'mx-2 max-w-32'
			);
			return <span className={ labelClasses }>{ labelText }</span>;
		}
		return null;
	};

	const renderConnectingLine = () => {
		if ( ! isLast ) {
			const lineClasses = cn(
				'block',
				isCompleted
					? 'border-brand-primary-600'
					: 'border-border-subtle',
				lineProps
			);

			if ( type === 'stack' ) {
				return (
					<div
						className={ cn(
							'relative',
							'flex',
							'border-solid',
							'border-y',
							'absolute',
							isCompleted
								? 'border-brand-primary-600'
								: 'border-border-subtle',
							topClass[ size ],
							stackSizeOffset[ size ]
						) }
					>
						<span className="block"></span>
					</div>
				);
			}
			return (
				<div className="flex-1">
					<span
						className={ cn(
							lineClasses,
							'mr-2 border-y border-solid',
							! labelText && 'ml-2'
						) }
					></span>
				</div>
			);
		}
		return null;
	};

	// Main return logic based on type
	if ( type === 'stack' ) {
		return (
			<div className="relative flex-1 justify-center">
				<div
					className={ cn( 'flex items-center flex-col', className ) }
					{ ...rest }
				>
					{ stepContent }
					{ renderLabel() }
				</div>
				{ renderConnectingLine() }
			</div>
		);
	}
	return (
		<>
			<div className={ cn( 'flex items-center', className ) } { ...rest }>
				{ stepContent }
				{ renderLabel() }
			</div>
			{ renderConnectingLine() }
		</>
	);
};
ProgressStep.displayName = 'ProgressSteps.Step';

// Create step content
const createStepContent = (
	variant,
	isCompleted,
	isCurrent,
	sizeClasses,
	size,
	icon,
	index
) => {
	if ( isCompleted ) {
		return (
			<Check className={ completedStepCommonClasses( sizeClasses, size ) } />
		);
	}

	const commonClasses = stepWrapperClasses( isCurrent, sizeClasses, size );
	const variantClasses = getVariantClasses(
		variant,
		isCurrent,
		sizeClasses,
		size
	);

	let content = null;
	if ( variant === 'number' ) {
		content = index + 1;
	} else if ( variant === 'icon' && icon ) {
		content = icon;
	}

	return (
		<span className={ commonClasses }>
			<span className={ variantClasses }>{ content }</span>
		</span>
	);
};

ProgressSteps.Step = ProgressStep;

export default ProgressSteps;
