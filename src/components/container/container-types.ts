import { type ReactNode } from 'react';

export interface ContainerCoreCommonProps {
	/** Defines any additional CSS classes for the container. */
	className?: string;
	/** Defines the children of the container. */
	children?: ReactNode;
}

export interface ContainerCommonProps extends ContainerCoreCommonProps {
	/**
	 * Defines the number of columns (if using a grid container). 
	 * 
	 * For responsive columns, use an object with screen sizes as keys and column values as values.
	 * Example: `{ sm: 1, md: 2, lg: 3 }`
	*/
	cols?: TCols;
	/** Gap between container items. */
	gap?: TGap;
	/** Horizontal gap between container items. */
	gapX?: TGap;
	/** Vertical gap between container items. */
	gapY?: TGap;
	/** Alignment of container items along the cross axis. */
	align?: TAlign;
	/** Justification of container items along the main axis. */
	justify?: TJustify;
}

export type TRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type TContainerType = 'grid' | 'flex';
export type TCols = TRange;
export type TGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TJustify =
	| 'start'
	| 'center'
	| 'end'
	| 'between'
	| 'around'
	| 'evenly'
	| 'stretch';
export type TAlign = 'start' | 'center' | 'end' | 'stretch';
export type TWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type TDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type TFlow = 'row' | 'column' | 'row-dense' | 'column-dense';
export type TAlignSelf = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type TJustifySelf = 'auto' | 'start' | 'center' | 'end' | 'baseline' | 'stretch';

export type StringOrNumber = string | number;
export type ObjectOfStringOrNumber = Record<string, string | number>;
export type StringOrNumberOrObject = StringOrNumber | ObjectOfStringOrNumber;

export interface FlexContainerProps extends ContainerCommonProps {
	/** Defines the type of the container (default: 'flex'). */
	containerType?: TContainerType;
	/** Defines the flex direction of the container. */
	direction?: TDirection;
	/** Defines the wrapping behavior of child elements. */
	wrap?: TWrap;
}

export interface GridContainerProps extends ContainerCommonProps {
	/** CSS grid-flow property. */
	gridFlow?: TFlow;
	/** Enables subgrid columns. */
	colsSubGrid?: boolean;
	/** Enables subgrid rows. */
	rowsSubGrid?: boolean;
	/** Enables auto rows. */
	autoRows?: boolean;
	/** Enables auto columns. */
	autoCols?: boolean;
}

export interface FlexItemProps extends ContainerCoreCommonProps {
	/** Defines how much the item will grow relative to others. `(For Flex container only.)` */
	grow?: 0 | 1;
	/** Defines how much the item will shrink relative to others. `(For Flex container only.)` */
	shrink?: 0 | 1;
	/** Defines the order of the item in the container. `(For Flex container only.)` */
	order?: TRange | 'first' | 'last' | 'none';
	/** Defines the alignment of the item along the cross axis. `(For Flex container only.)` */
	alignSelf?: TAlignSelf;
	/** Defines the justification of the item along the main axis. `(For Flex container only.)` */
	justifySelf?: TJustifySelf;
	/** Defines any additional CSS classes for the item. `(For Flex container only.)` */
}

export interface GridItemProps extends ContainerCoreCommonProps {
	/** Column span for the item. `(For Grid container only.)` */
	colSpan?: TRange;
	/** Starting column for the item. `(For Grid container only.)` */
	colStart?: TRange;
	/** Alignment along the cross axis. `(For Grid container only.)` */
	alignSelf?: TAlignSelf;
	/** Justification along the main axis. `(For Grid container only.)` */
	justifySelf?: TJustifySelf;
}