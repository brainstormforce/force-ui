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
	/**
	 * Gap between container items. This will apply gap in both horizontal and vertical directions.
	 *
	 * For responsive gap, use an object with screen sizes as keys and gap values as values.
	 * Example: `{ sm: 'sm', md: 'md', lg: 'lg' }`
	 */
	gap?: TGap;
	/**
	 * Horizontal gap between container items.  Use when need to apply gap only in horizontal direction.
	 *
	 * For responsive horizontal gap, use an object with screen sizes as keys and gap values as values.
	 * Example: `{ sm: 'sm', md: 'md', lg: 'lg' }`
	 */
	gapX?: TGap;
	/**
	 * Vertical gap between container items. Use when need to apply gap only in vertical direction.
	 *
	 * For responsive vertical gap, use an object with screen sizes as keys and gap values as values.
	 * Example: `{ sm: 'sm', md: 'md', lg: 'lg' }`
	 */
	gapY?: TGap;
	/**
	 * Alignment of container items along the cross axis.
	 *
	 * For responsive alignment, use an object with screen sizes as keys and alignment values as values.
	 * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
	 */
	align?: TAlign;
	/**
	 * Justification of container items along the main axis.
	 *
	 * For responsive justification, use an object with screen sizes as keys and justification values as values.
	 * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
	 */
	justify?: TJustify;
}

export type TRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type TContainerType = 'grid' | 'flex';
export type TCols = TRange;
export type TGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
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
export type TJustifySelf =
	| 'auto'
	| 'start'
	| 'center'
	| 'end'
	| 'baseline'
	| 'stretch';

export type StringOrNumber = string | number;
export type ObjectOfStringOrNumber = Record<string, string | number>;
export type StringOrNumberOrObject = StringOrNumber | ObjectOfStringOrNumber;

export interface FlexContainerProps extends ContainerCommonProps {
	/** Defines the type of the container (default: 'flex'). */
	containerType?: TContainerType;
	/**
	 * Defines the flex direction of the container.
	 *
	 * For responsive direction, use an object with screen sizes as keys and direction values as values.
	 * Example: `{ sm: 'row', md: 'column', lg: 'row-reverse' }`
	 */
	direction?: TDirection;
	/**
	 * Defines the wrapping behavior of child elements.
	 *
	 * For responsive wrap, use an object with screen sizes as keys and wrap values as values.
	 * Example: `{ sm: 'nowrap', md: 'wrap', lg: 'wrap-reverse' }`
	 */
	wrap?: TWrap;
}

export interface GridContainerProps extends ContainerCommonProps {
	/**
	 * CSS grid-flow property.
	 *
	 * For responsive grid flow, use an object with screen sizes as keys and flow values as values.
	 * Example: `{ sm: 'row', md: 'column', lg: 'row-dense' }`
	 */
	gridFlow?: TFlow;
	/**
	 * Enables subgrid columns.
	 *
	 * For responsive subgrid columns, use an object with screen sizes as keys and boolean values as values.
	 * Example: `{ sm: true, md: false, lg: true }`
	 */
	colsSubGrid?: boolean;
	/**
	 * Enables subgrid rows.
	 *
	 * For responsive subgrid rows, use an object with screen sizes as keys and boolean values as values.
	 * Example: `{ sm: true, md: false, lg: true }`
	 */
	rowsSubGrid?: boolean;
	/**
	 * Enables auto rows.
	 *
	 * For responsive auto rows, use an object with screen sizes as keys and boolean values as values.
	 * Example: `{ sm: true, md: false, lg: true }`
	 */
	autoRows?: boolean;
	/**
	 * Enables auto columns.
	 *
	 * For responsive auto columns, use an object with screen sizes as keys and boolean values as values.
	 * Example: `{ sm: true, md: false, lg: true }`
	 */
	autoCols?: boolean;
}

export interface FlexItemProps extends ContainerCoreCommonProps {
	/**
	 * Defines how much the item will grow relative to others. `(For Flex container only.)`
	 *
	 * For responsive grow, use an object with screen sizes as keys and grow values as values.
	 * Example: `{ sm: 1, md: 2, lg: 3 }`
	 */
	grow?: 0 | 1;
	/**
	 * Defines how much the item will shrink relative to others. `(For Flex container only.)`
	 *
	 * For responsive shrink, use an object with screen sizes as keys and shrink values as values.
	 * Example: `{ sm: 1, md: 2, lg: 3 }`
	 */
	shrink?: 0 | 1;
	/**
	 * Defines the order of the item in the container. `(For Flex container only.)`
	 *
	 * For responsive order, use an object with screen sizes as keys and order values as values.
	 * Example: `{ sm: 1, md: 2, lg: 3 }`
	 */
	order?: TRange | 'first' | 'last' | 'none';
	/**
	 * Defines the alignment of the item along the cross axis. `(For Flex container only.)`
	 *
	 * For responsive alignment, use an object with screen sizes as keys and alignment values as values.
	 * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
	 */
	alignSelf?: TAlignSelf;
	/**
	 * Defines the justification of the item along the main axis. `(For Flex container only.)`
	 *
	 * For responsive justification, use an object with screen sizes as keys and justification values as values.
	 * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
	 */
	justifySelf?: TJustifySelf;
}

export interface GridItemProps extends ContainerCoreCommonProps {
	/**
	 * Column span for the item. `(For Grid container only.)`
	 *
	 * For responsive column span, use an object with screen sizes as keys and column span values as values.
	 * Example: `{ sm: 1, md: 2, lg: 3 }`
	 */
	colSpan?: TRange;
	/**
	 * Starting column for the item. `(For Grid container only.)`
	 *
	 * For responsive column start, use an object with screen sizes as keys and column start values as values.
	 * Example: `{ sm: 1, md: 2, lg: 3 }`
	 */
	colStart?: TRange;
	/**
	 * Alignment along the cross axis. `(For Grid container only.)`
	 *
	 * For responsive alignment, use an object with screen sizes as keys and alignment values as values.
	 * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
	 */
	alignSelf?: TAlignSelf;
	/**
	 * Justification along the main axis. `(For Grid container only.)`
	 *
	 * For responsive justification, use an object with screen sizes as keys and justification values as values.
	 * Example: `{ sm: 'start', md: 'center', lg: 'end' }`
	 */
	justifySelf?: TJustifySelf;
}
