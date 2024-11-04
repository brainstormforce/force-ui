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
import { type ContainerCommonProps } from './container-types';

export interface GridContainerProps extends ContainerCommonProps {
	/** Number of columns in the grid. */
	cols?: keyof ( typeof gridColumnClassNames )['sm'];
	/** Gap between grid items. */
	gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	/** Horizontal gap between grid items. */
	gapX?: string;
	/** Vertical gap between grid items. */
	gapY?: string;
	/** Alignment of grid items along the cross axis. */
	align?: 'start' | 'center' | 'end' | 'stretch';
	/** Justification of grid items along the main axis. */
	justify?:
		| 'start'
		| 'center'
		| 'end'
		| 'between'
		| 'around'
		| 'evenly'
		| 'stretch';
	/** CSS grid-flow property (default: ''). */
	gridFlow?: string;
	/** Enables subgrid columns. */
	colsSubGrid?: boolean;
	/** Enables subgrid rows. */
	rowsSubGrid?: boolean;
	/** Enables auto rows. */
	autoRows?: boolean;
	/** Enables auto columns. */
	autoCols?: boolean;
}

export const GridContainer = ( {
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
}: GridContainerProps ) => {
	const columnClassName = getClassNames( cols || 1, gridColumnClassNames, {
		1: 1,
	} );
	const gapClassName = getClassNames( gap || 'sm', gapClassNames, {
		sm: 'sm',
	} );
	const gapXClassName = getClassNames( gapX || '', gapXClassNames, { '': '' } );
	const gapYClassName = getClassNames( gapY || '', gapYClassNames, { '': '' } );
	const alignClassName = getClassNames( align || '', alignClassNames, {
		'': '',
	} );
	const justifyClassName = getClassNames( justify || '', justifyClassNames, {
		'': '',
	} );
	const gridFlowClassName = getClassNames(
		gridFlow || '',
		gridFlowClassNames,
		{ '': '' }
	);

	return (
		<div
			className={ cn(
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
			) }
			{ ...props }
		>
			{ children }
		</div>
	);
};

/** Props for GridItem component. */
export interface GridItemProps extends ContainerCommonProps {
	/** Column span for the item. */
	colSpan?: number | string;
	/** Starting column for the item. */
	colStart?: number | string;
	/** Alignment along the cross axis. */
	alignSelf?: string;
	/** Justification along the main axis. */
	justifySelf?: string;
}

export const GridItem = ( {
	className,
	children,
	colSpan = 0,
	colStart = 0,
	alignSelf = '',
	justifySelf = '',
	...props
}: GridItemProps ) => {
	const colSpanClassName = getClassNames(
		colSpan || 0,
		gridColSpanClassNames,
		{ 0: 0 }
	);
	const colStartClassName = getClassNames( colStart, gridColStartClassNames, {
		0: 0,
	} );
	const alignSelfClassName = getClassNames(
		alignSelf,
		alignSelfClassNames,
		{}
	);
	const justifySelfClassName = getClassNames(
		justifySelf,
		justifySelfClassNames,
		{}
	);

	return (
		<div
			className={ cn(
				colSpanClassName,
				colStartClassName,
				alignSelfClassName,
				justifySelfClassName,
				className
			) }
			{ ...props }
		>
			{ children }
		</div>
	);
};

/** Attach GridItem to GridContainer */
GridContainer.Item = GridItem;

export default GridContainer;
