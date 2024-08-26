import React from 'react';
import { cn } from '../../utilities/functions';

// Helper function to convert Tailwind gap classes to rem values
const tailwindGapToRem = ( gapClass ) => {
	const gapMap = {
		'gap-2': '0.5rem',
		'gap-4': '1rem',
		'gap-5': '1.25rem',
		'gap-6': '1.5rem',
		'gap-8': '2rem',
	};
	return gapMap[ gapClass ] || '1rem'; // Default to 1rem if not found
};

const Container = ( props ) => {
	const {
		containerType = 'flex', // flex, (grid - functionality not implemented)
		gap = 'sm', // xs, sm, md, lg, xl, 2xl
		direction = '', // row, row-reverse, column, column reverse
		justify = '', // justify-content (normal, start, end, center, between, around, evenly, stretch)
		align = '', // align-items (start, end, center, baseline, stretch)
		wrap, // nowrap, wrap, wrap-reverse
		cols = '',
		tabCols = '',
		mCols = '',
		className,
		children,
		...extraProps
	} = props;

	// const wrapClass = wrap !== undefined ? wrap : ( cols || tabCols || mCols ? 'wrap' : '' );
	let wrapClass = '';
	if ( wrap !== undefined ) {
		wrapClass = wrap;
	} else if ( cols || tabCols || mCols ) {
		wrapClass = 'wrap';
	}

	const containerTypeClass = {
		flex: 'flex',
		grid: 'grid',
	}?.[ containerType ];

	const gapClasses = {
		xs: 'gap-2',
		sm: 'gap-4',
		md: 'gap-5',
		lg: 'gap-6',
		xl: 'gap-6',
		'2xl': 'gap-8',
	}?.[ gap ];

	const directionClasses = {
		row: 'flex-row',
		'row-reverse': 'flex-row-reverse',
		column: 'flex-col',
		'column-reverse': 'flex-col-reverse',
	}?.[ direction ];

	const justifyContentClasses = {
		normal: 'justify-normal',
		start: 'justify-start',
		end: 'justify-end',
		center: 'justify-center',
		between: 'justify-between',
		around: 'justify-around',
		evenly: 'justify-evenly',
		stretch: 'justify-stretch',
	}?.[ justify ];

	const alignItemsClasses = {
		start: 'items-start',
		end: 'items-end',
		center: 'items-center',
		baseline: 'items-baseline',
		stretch: 'items-stretch',
	}?.[ align ];

	const wrapClasses = {
		wrap: 'flex-wrap',
		'wrap-reverse': 'flex-wrap-reverse',
		nowrap: 'flex-nowrap',
	}?.[ wrapClass ];

	const combinedClasses = cn( containerTypeClass, gapClasses, directionClasses, justifyContentClasses, alignItemsClasses, wrapClasses, className );

	const calculateFlex = ( columns ) => {
		if ( ! columns ) {
			return;
		}
		const gapSize = tailwindGapToRem( gapClasses );
		return `calc(${ 100 / columns }% - (${ gapSize } - (${ gapSize } / ${ columns })))`;
	};

	return (
		<div className={ combinedClasses } { ...extraProps }>
			{ React.Children.map( children, ( child ) =>
				React.cloneElement( child, {
					className: cn(
						'flex-item',
						child.props.className
					),
				} )
			) }
			{ /* Conditionally render media queries if cols is set */ }
			<style>{ `
                ${ mCols &&
                    `@media only screen and (max-width: 640px) {
                        .flex-item {
                            flex: 0 0 ${ calculateFlex( mCols ) };
                            max-width: ${ calculateFlex( mCols ) };
                        }
                    }`
		}
                ${ tabCols &&
                    `@media only screen and (min-width: 641px) and (max-width: 1023px) {
                        .flex-item {
                            flex: 0 0 ${ calculateFlex( tabCols ) };
                            max-width: ${ calculateFlex( tabCols ) };
                        }
                    }`
		}
                ${ cols &&
                    `@media only screen and (min-width: 1024px) {
                        .flex-item {
                            flex: 0 0 ${ calculateFlex( cols ) };
                            max-width: ${ calculateFlex( cols ) };
                        }
                    }`
		}
            ` }</style>
		</div>
	);
};

const Item = ( props ) => {
	const {
		grow,
		shrink,
		order,
		alignSelf,
		className,
		children,
		...extraProps
	} = props;

	const growClasses = {
		0: 'grow-0',
		1: 'grow',
	}?.[ grow ];

	const shrinkClasses = {
		0: 'shrink-0',
		1: 'shrink',
	}?.[ shrink ];

	const alignSelfClasses = {
		auto: 'self-auto',
		start: 'self-start',
		end: 'self-end',
		center: 'self-center',
		stretch: 'self-stretch',
		baseline: 'self-baseline',
	}?.[ alignSelf ];

	const orderClasses = {
		1: 'order-1',
		2: 'order-2',
		3: 'order-3',
		4: 'order-4',
		5: 'order-5',
		6: 'order-6',
		7: 'order-7',
		8: 'order-8',
		9: 'order-9',
		10: 'order-10',
		11: 'order-11',
		12: 'order-12',
		first: 'order-first',
		last: 'order-last',
		none: 'order-none',
	}?.[ order ];

	return (
		<div className={ cn( growClasses, shrinkClasses, alignSelfClasses, orderClasses, 'box-border', className ) } { ...extraProps }>
			{ children }
		</div>
	);
};

Container.Item = Item;

export default Container;
