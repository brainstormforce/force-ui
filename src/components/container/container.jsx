import React from 'react';
import { cn } from '../../utilities/functions';

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

	const mColumnClassName = {
		1: 'w-full',
		2: 'w-1/2',
		3: 'w-1/3',
		4: 'w-1/4',
		5: 'w-1/5',
		6: 'w-1/6',
		7: 'w-1/7',
		8: 'w-1/8',
		9: 'w-1/9',
		10: 'w-1/10',
		11: 'w-1/11',
		12: 'w-1/12',
	}?.[ mCols ] ?? 'w-full';

	const tabColumnClassName = {
		1: 'md:w-full',
		2: 'md:w-1/2',
		3: 'md:w-1/3',
		4: 'md:w-1/4',
		5: 'md:w-1/5',
		6: 'md:w-1/6',
		7: 'md:w-1/7',
		8: 'md:w-1/8',
		9: 'md:w-1/9',
		10: 'md:w-1/10',
		11: 'md:w-1/11',
		12: 'md:w-1/12',
	}?.[ tabCols ] ?? 'w-1/2';

	const columnClassName = {
		1: 'lg:w-full',
		2: 'lg:w-1/2',
		3: 'lg:w-1/3',
		4: 'lg:w-1/4',
		5: 'lg:w-1/5',
		6: 'lg:w-1/6',
		7: 'lg:w-1/7',
		8: 'lg:w-1/8',
		9: 'lg:w-1/9',
		10: 'lg:w-1/10',
		11: 'lg:w-1/11',
		12: 'lg:w-1/12',
	}?.[ cols ] ?? 'w-1/4';

	return (
		<div className={ combinedClasses } { ...extraProps }>
			{ React.Children.map( children, ( child ) =>
				React.cloneElement( child, {
					className: cn(
						mColumnClassName, tabColumnClassName, columnClassName,
						child.props.className
					),
				} )
			) }
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
