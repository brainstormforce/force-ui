import React from 'react';
import { cn } from '../../utilities/functions';

function generateTailwindGridClass(baseClassName, value) {
    return `${baseClassName}${value}`;
}

const Container = ( props ) => {
	const {
		containerType = 'flex', // flex, grid
		gap = 'sm', // xs, sm, md, lg, xl, 2xl
		direction = '', // row, row-reverse, column, column reverse
		justify = '', // justify-content (normal, start, end, center, between, around, evenly, stretch)
		align = '', // align-items (start, end, center, baseline, stretch)
		wrap = '', // nowrap, wrap, wrap-reverse
        templateColumns = '', 
        templateRows = '', 
        gridFlow = '',
		className,
		children,
		...extraProps
	} = props;

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
	}?.[ wrap ];

    const templateColumnsClasses = typeof templateColumns === 'number' ? generateTailwindGridClass('grid-cols-', templateColumns) : '';
    const templateRowsClasses = typeof templateRows === 'number' ? generateTailwindGridClass('grid-rows-', templateRows) : '';

    const gridFlowClasses = {
        row: 'grid-flow-row',
        column: 'grid-flow-col',
        dense: 'grid-flow-dense',
        'row-dense': 'grid-flow-row-dense',
        'column-dense': 'grid-flow-col-dense',
    }?.[gridFlow];

    const combinedClasses = cn(containerTypeClass, gapClasses, directionClasses, justifyContentClasses, alignItemsClasses, wrapClasses, templateColumnsClasses, templateRowsClasses, gridFlowClasses, className );

	return (
		<div className={ combinedClasses } { ...extraProps }>
			{ children }
		</div>
	);
};

const Item = ( props ) => {
	const {
		grow,
		shrink,
		order,
		alignSelf,
        gridColumnStart,
        gridColumnEnd,
        colSpan,
        gridRowStart,
        gridRowEnd,
        rowSpan,
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

    const gridColumnStartClasses = typeof gridColumnStart === 'number' ? generateTailwindGridClass('col-start-', gridColumnStart) : '';
    const gridColumnSpanClasses = typeof colSpan === 'number' ? generateTailwindGridClass('col-span-', colSpan) : '';
    const gridColumnEndClasses = typeof gridColumnEnd === 'number' ? generateTailwindGridClass('col-end-', gridColumnEnd) : '';
    const gridRowStartClasses = typeof gridRowStart === 'number' ? generateTailwindGridClass('row-start-', gridRowStart) : '';
    const gridRowSpanClasses = typeof rowSpan === 'number' ? generateTailwindGridClass('row-span-', rowSpan) : '';
    const gridRowEndClasses = typeof gridRowEnd === 'number' ? generateTailwindGridClass('row-end-', gridRowEnd) : '';


	return (
        <div className={cn(growClasses, shrinkClasses, alignSelfClasses, orderClasses, gridColumnStartClasses, gridColumnSpanClasses, gridColumnEndClasses, gridRowStartClasses, gridRowSpanClasses, gridRowEndClasses, className ) } { ...extraProps }>
			{ children }
		</div>
	);
};

Container.Item = Item;

export default Container;
