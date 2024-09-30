import React from 'react';
import { cn } from '@/utilities/functions';
import {
	gridColumnClassNames,
	gridColumnMediumClassNames,
	gridColumnLargeClassNames,
	alignClassNames,
	alignMediumClassNames,
	alignLargeClassNames,
	justifyClassNames,
	justifyMediumClassNames,
	justifyLargeClassNames,
	colSpanClassNames,
	colSpanMediumClassNames,
	colSpanLargeClassNames,
	colStartClassNames,
	colStartMediumClassNames,
	colStartLargeClassNames,
	gapClassNames,
	gapMediumClassNames,
	gapLargeClassNames,
	gapXClassNames,
	gapXMediumClassNames,
	gapXLargeClassNames,
	gapYClassNames,
	gapYMediumClassNames,
	gapYLargeClassNames,
    gridFlowClassNames,
    gridFlowLargeClassNames,
    gridFlowMediumClassNames,
} from './grid-container-styles.js';

const getClassNames = (valueKeys, classNames, defaultValueKeys, defaultScreenSize = 'sm') => {
	if (!valueKeys) {
		return;
	}
	const classNamesArray = [];

	switch (typeof valueKeys) {
		case 'object': {
			for (const [screenSize, valueKey] of Object.entries(valueKeys)) {
				if (classNames[screenSize]) {
					classNamesArray.push(
						classNames?.[screenSize]?.[valueKey] ??
							classNames?.[screenSize]?.[
								defaultValueKeys?.[screenSize]
							] ??
							''
					);
				}
			}
		}
        case 'string':
        case 'number': {
			const screenSize = defaultScreenSize;
			classNamesArray.push(
				classNames?.[screenSize]?.[valueKeys] ??
					classNames?.[screenSize]?.[
						defaultValueKeys?.[screenSize]
					] ??
					''
			);
		}
		default: {
            classNamesArray.push(
                classNames?.[defaultScreenSize]?.[valueKeys] ??
                classNames?.[defaultScreenSize]?.[
                    defaultValueKeys?.[defaultScreenSize]
                ] ??
                ''
            );
        }
	}

	return classNamesArray.join(' ');
};

const GridContainer = ({
	className,
	cols,
	gap,
	gapX,
	gapY,
	align,
	justify,
	colsSubGrid = false,
    rowsSubGrid = false,
    gridFlow = '',
	children,
	...props
}) => {
	const columnClassName = getClassNames(
		cols,
		{
			sm: gridColumnClassNames,
			md: gridColumnMediumClassNames,
			lg: gridColumnLargeClassNames,
		},
		{ sm: 1, md: 1, lg: 1 }
	);
	const gapClassName = getClassNames(
		gap,
		{ sm: gapClassNames, md: gapMediumClassNames, lg: gapLargeClassNames },
		'sm'
	);
	const gapXClassName = getClassNames(
		gapX,
		{
			sm: gapXClassNames,
			md: gapXMediumClassNames,
			lg: gapXLargeClassNames,
		},
		''
	);
	const gapYClassName = getClassNames(
		gapY,
		{
			sm: gapYClassNames,
			md: gapYMediumClassNames,
			lg: gapYLargeClassNames,
		},
		''
	);
	const alignClassName = getClassNames(
		align,
		{
			sm: alignClassNames,
			md: alignMediumClassNames,
			lg: alignLargeClassNames,
		},
		''
	);
	const justifyClassName = getClassNames(
		justify,
		{
			sm: justifyClassNames,
			md: justifyMediumClassNames,
			lg: justifyLargeClassNames,
		},
		''
	);
    const gridFlowClassName = getClassNames(
        gridFlow,
        {
            sm: gridFlowClassNames,
            md: gridFlowMediumClassNames,
            lg: gridFlowLargeClassNames,
        },
        ''
    );

	return (
		<div
			className={cn(
				'grid auto-rows-auto',
                { 'grid-cols-subgrid': colsSubGrid },
                { 'grid-rows-subgrid': rowsSubGrid },
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
	...props
}) => {
	const colSpanClassName = getClassNames(
		colSpan,
		{
			sm: colSpanClassNames,
			md: colSpanMediumClassNames,
			lg: colSpanLargeClassNames,
		},
		0
	);
	const colStartClassName = getClassNames(
		colStart,
		{
			sm: colStartClassNames,
			md: colStartMediumClassNames,
			lg: colStartLargeClassNames,
		},
		0
	);
	return (
		<div
			className={cn(colSpanClassName, colStartClassName, className)}
			{...props}
		>
			{children}
		</div>
	);
};

Object.assign(GridContainer, { Item: GridItem });

export default GridContainer;
