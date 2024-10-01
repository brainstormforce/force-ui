import React from 'react';
import { cn } from '@/utilities/functions';
import {
	gridColumnClassNames,
	gridColSpanClassNames,
	gridColStartClassNames,
	gapClassNames,
	gapXClassNames,
	gapYClassNames,
	gridFlowClassNames,
	alignClassNames,
	justifyClassNames,
	alignSelfClassNames,
	justifySelfClassNames,
} from './container-styles.js';
import { getClassNames } from './container-utils.js'

const GridContainer = ({
	className,
	cols,
	gap,
	gapX,
	gapY,
	align,
	justify,
    gridFlow = '',
	colsSubGrid = false,
    rowsSubGrid = false,
    autoRows = false,
    autoCols = false,
	children,
	...props
}) => {
	const columnClassName = getClassNames(
		cols,
		gridColumnClassNames,
		{ sm: 1, md: 1, lg: 1 }
	);
	const gapClassName = getClassNames(
		gap,
		gapClassNames,
		'sm'
	);
	const gapXClassName = getClassNames(
		gapX,
		gapXClassNames,
		''
	);
	const gapYClassName = getClassNames(
		gapY,
		gapYClassNames,
		''
	);
	const alignClassName = getClassNames(
		align,
		alignClassNames,
		''
	);
	const justifyClassName = getClassNames(
		justify,
		justifyClassNames,
		''
	);
    const gridFlowClassName = getClassNames(
        gridFlow,
		gridFlowClassNames,
        ''
    );

	return (
		<div
			className={cn(
				'grid',
				{
					'grid-cols-subgrid': colsSubGrid,
					'grid-rows-subgrid': rowsSubGrid,
					'auto-cols-auto': autoCols,
					'auto-rows-auto': autoRows,
				},
				columnClassName,
				gapClassName,
				gapXClassName,
				gapYClassName,
				alignClassName,
				justifyClassName,
				gridFlowClassName,
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export const GridItem = ({
	className,
	children,
	colSpan,
	colStart,
    alignSelf,
    justifySelf,
	...props
}) => {
	const colSpanClassName = getClassNames(
		colSpan,
		gridColSpanClassNames,
		0
	);
	const colStartClassName = getClassNames(
		colStart,
		gridColStartClassNames,
		0
	);
    const alignSelfClassName = getClassNames(
        alignSelf,
        alignSelfClassNames,
        ''
    );
    const justifySelfClassName = getClassNames(
		justifySelf,
		justifySelfClassNames,
		''
	);

	return (
		<div
			className={cn(
				colSpanClassName,
				colStartClassName,
				alignSelfClassName,
				justifySelfClassName,
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

Object.assign(GridContainer, { Item: GridItem });

export default GridContainer;
