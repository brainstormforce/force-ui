import React from 'react';
import { cn } from '../../utilities/functions';
import { Check } from 'lucide-react';

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
const ProgressSteps = ( {
	variant = 'dot', // dot, number, icon
	size = 'sm', // sm, md, lg
	type = 'inline', // inline, stack
	currentStep = 1,
	variantIcon,
	children,
	className,
	...props
} ) => {
	const totalSteps = React.Children.count( children );

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

	const steps = React.Children.toArray( children ).map( ( child, index ) => {
		const isCompleted = index + 1 < currentStep;
		const isCurrent = index + 1 === currentStep;

		let stepContent;

		if ( variant === 'dot' ) {
			if ( isCompleted ) {
				stepContent = (
					<Check className={ `w-full h-full rounded-full text-brand-primary-600 transition-colors duration-300` } />
				);
			} else if ( isCurrent ) {
				stepContent = (
					<span className={ `relative flex items-center rounded-full justify-center ring-1 ring-brand-primary-600 ${ sizeClasses[ size ].ring } transition-colors duration-500` }>
						<span className={ `absolute ${ sizeClasses[ size ].dot } bg-brand-primary-600 rounded-full transition-colors duration-500` }></span>
					</span>
				);
			} else {
				stepContent = (
					<span className={ `relative flex items-center rounded-full ring-1 ring-gray-400 justify-center ${ sizeClasses[ size ].ring } transition-colors duration-300` }>
						<span className={ `absolute ${ sizeClasses[ size ].dot } bg-gray-400 rounded-full` }></span>
					</span>
				);
			}
		} else if ( variant === 'number' ) {
			if ( isCompleted ) {
				stepContent = (
					<Check className={ `w-full h-full text-brand-primary-600 ${ sizeClasses[ size ].numberIcon } transition-colors duration-300` } />
				);
			} else if ( isCurrent ) {
				stepContent = (
					<span className={ `relative flex items-center rounded-full justify-center ring-1 ring-brand-primary-600 ${ sizeClasses[ size ].ring } transition-colors duration-500` }>
						<span className={ `absolute ${ sizeClasses[ size ].dot } text-brand-primary-600 rounded-full flex items-center justify-center transition-colors duration-500` }>
							{ index + 1 }
						</span>
					</span>
				);
			} else {
				stepContent = (
					<span className={ `relative flex items-center rounded-full justify-center ring-1 ring-gray-400 ${ sizeClasses[ size ].ring } transition-colors duration-300` }>
						<span className={ `absolute ${ sizeClasses[ size ].dot } text-gray-400 rounded-full flex items-center justify-center` }>
							{ index + 1 }
						</span>
					</span>
				);
			}
		} else if ( variant === 'icon' && variantIcon ) {
			if ( isCompleted ) {
				stepContent = (
					<span className={ `flex items-center rounded-full justify-center text-brand-primary-600 ${ sizeClasses[ size ].icon } transition-colors duration-300` }>
						<Check className="w-full h-full" />
					</span>
				);
			} else if ( isCurrent ) {
				stepContent = (
					<span className={ `relative flex rounded-full items-center justify-center ring-1 ring-brand-primary-600 ${ sizeClasses[ size ].ring } transition-colors duration-500` }>
						<span className={ `absolute text-brand-primary-600 flex items-center justify-center transition-colors duration-500` }>
							{ React.cloneElement( variantIcon, { className: 'w-full h-full' } ) }
						</span>
					</span>
				);
			} else {
				stepContent = (
					<span className={ `relative flex rounded-full items-center justify-center ring-1 ring-gray-400 ${ sizeClasses[ size ].ring } transition-colors duration-300` }>
						<span className={ `absolute text-gray-400 flex items-center justify-center` }>
							{ React.cloneElement( variantIcon, { className: 'w-full h-full' } ) }
						</span>
					</span>
				);
			}
		}

		const stepClasses = cn(
			'relative rounded-full flex items-center justify-center',
			sizeClasses[ size ].ring,
			'transition-colors duration-500',
			isCurrent ? 'ring-brand-primary-600' : 'ring-gray-400'
		);

		return (
			<React.Fragment key={ index }>
				{ React.cloneElement( child, {
					stepContent,
					stepClasses,
					isCurrent,
					isCompleted,
					totalSteps,
					type,
				} ) }
				{ index < totalSteps - 1 && (
					<div
						className={ `flex-1 ${ sizeClasses[ size ].line } transition-colors duration-500 ${
							isCompleted ? 'bg-brand-primary-600' : 'bg-gray-300'
						}` }
					></div>
				) }
			</React.Fragment>
		);
	} );

	return (
		<div className={ cn( 'flex flex-col items-center', className ) } { ...props }>
			<div className="flex w-full items-center justify-between mb-6">
				{ steps }
			</div>
		</div>
	);
};

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

const ProgressStep = ( {
	labelText,
	stepContent,
	stepClasses,
	isCurrent,
	isCompleted,
	totalSteps,
	className,
	type, // Inline or stack
	index,
	...props
} ) => {
	const labelClasses = cn(
		type === 'stack' ? 'mt-2 text-center' : 'ml-2',
		isCurrent || isCompleted ? 'text-brand-primary-600' : 'text-gray-400'
	);

	return (
		<div className={ cn( 'flex items-center', className, type === 'stack' && 'relative' ) } { ...props }>
			<div className={ cn( 'flex items-center', type === 'stack' ? 'z-10' : '' ) }>
				<div className={ stepClasses }>{ stepContent }</div>
			</div>

			{ labelText && (
				<span
					className={ cn( labelClasses, type === 'stack' && 'absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap' ) }
					style={ type === 'stack' ? { top: 'calc(100% + 8px)' } : {} }
				>
					{ labelText }
				</span>
			) }
		</div>
	);
};

export { ProgressSteps, ProgressStep };
