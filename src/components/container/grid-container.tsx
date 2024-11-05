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
} from './container-styles';
import { getClassNames } from './container-utils';
import { type GridContainerProps, type GridItemProps } from './container-types';

const GridContainer = ({
	className,
	cols,
	gap,
	gapX,
	gapY,
	align,
	justify,
	gridFlow,
	colsSubGrid = false,
	rowsSubGrid = false,
	autoRows = false,
	autoCols = false,
	children,
	...props
}: GridContainerProps) => {
	const columnClassName = getClassNames(cols!, gridColumnClassNames, 1);
	const gapClassName = getClassNames(gap!, gapClassNames, 'sm');
	const gapXClassName = getClassNames(gapX!, gapXClassNames, '');
	const gapYClassName = getClassNames(gapY!, gapYClassNames, '');
	const alignClassName = getClassNames(align!, alignClassNames, '');
	const justifyClassName = getClassNames(justify!, justifyClassNames, '');
	const gridFlowClassName = getClassNames(gridFlow!, gridFlowClassNames, '');

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
}: GridItemProps) => {
	const colSpanClassName = getClassNames(colSpan!, gridColSpanClassNames, 0);
	const colStartClassName = getClassNames(
		colStart!,
		gridColStartClassNames,
		0
	);
	const alignSelfClassName = getClassNames(
		alignSelf!,
		alignSelfClassNames,
		''
	);
	const justifySelfClassName = getClassNames(
		justifySelf!,
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

GridContainer.Item = GridItem;

export default GridContainer;
