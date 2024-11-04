import { createContext, useContext, ReactNode } from 'react';
import { cn } from '@/utilities/functions';
import GridContainer from './grid-container';
import { getClassNames } from './container-utils';
import {
	alignClassNames,
	alignSelfClassNames,
	flexColumnClassNames,
	flexDirectionClassNames,
	flexGrowClassNames,
	flexOrderClassNames,
	flexShrinkClassNames,
	flexWrapClassNames,
	gapClassNames,
	gapXClassNames,
	gapYClassNames,
	justifyClassNames,
	justifySelfClassNames,
	gridColumnClassNames,
} from './container-styles';

const ContainerContext = createContext<{
	containerType: 'flex' | 'grid';
	cols: string;
}>( { containerType: 'flex', cols: '' } );
const useContainerState = () => useContext( ContainerContext );

/** Base interface for container props. */
export interface BaseContainerProps {
	/** Defines the type of the container (default: 'flex'). */
	containerType?: 'flex' | 'grid';
	/** Defines the gap between child elements. */
	gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	/** Defines the horizontal gap between child elements. */
	gapX?: string;
	/** Defines the vertical gap between child elements. */
	gapY?: string;
	/** Defines the flex direction of the container. */
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	/** Defines how child elements are justified along the main axis. */
	justify?:
		| 'start'
		| 'center'
		| 'end'
		| 'between'
		| 'around'
		| 'evenly'
		| 'stretch';
	/** Defines how child elements are aligned along the cross axis. */
	align?: 'start' | 'center' | 'end' | 'stretch';
	/** Defines the wrapping behavior of child elements. */
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	/** Defines the number of columns (if using a grid container). */
	cols?: keyof ( typeof gridColumnClassNames )['sm'];
	/** Defines any additional CSS classes for the container. */
	className?: string;
	/** Defines the children of the container. */
	children?: ReactNode;
	/** Additional CSS styles. */
	style?: React.CSSProperties;
}

export const Container = ( {
	containerType = 'flex', // flex, (grid - functionality not implemented)
	gap = 'sm', // xs, sm, md, lg, xl, 2xl
	gapX = '',
	gapY = '',
	direction, // row, row-reverse, column, column-reverse
	justify = 'start', // justify-content (normal, start, end, center, between, around, evenly, stretch)
	align = 'start', // align-items (start, end, center, baseline, stretch)
	wrap, // nowrap, wrap, wrap-reverse
	cols = 1,
	className,
	children,
	...props
}: BaseContainerProps ) => {
	if ( containerType === 'grid' ) {
		const { containerType: type = 'flex', ...rest } =
			props as BaseContainerProps;
		return (
			<ContainerContext.Provider
				value={ {
					containerType: type,
					cols: '',
				} }
			>
				<GridContainer { ...rest } />
			</ContainerContext.Provider>
		);
	}

	const wrapClassName = getClassNames( wrap || '', flexWrapClassNames, {} );
	const gapClassName = getClassNames( gap || 'sm', gapClassNames, {
		sm: 'sm',
	} );
	const gapXClassName = getClassNames( gapX || '', gapXClassNames, {} );
	const gapYClassName = getClassNames( gapY || '', gapYClassNames, {} );
	const directionClassName = getClassNames(
		direction || '',
		flexDirectionClassNames,
		{}
	);
	const justifyContentClassName = getClassNames(
		justify || '',
		justifyClassNames,
		{}
	);
	const alignItemsClassName = getClassNames( align || '', alignClassNames, {} );

	const combinedClasses = cn(
		'flex',
		wrapClassName,
		gapClassName,
		gapXClassName,
		gapYClassName,
		directionClassName,
		justifyContentClassName,
		alignItemsClassName,
		className
	);

	const renderContainerBasedOnType = () => {
		if ( containerType === ( 'grid' as 'flex' | 'grid' ) ) {
			return <GridContainer { ...( props as any ) } />;
		}

		return (
			<div className={ combinedClasses } { ...props }>
				{ children }
			</div>
		);
	};

	return (
		<ContainerContext.Provider
			value={ {
				containerType,
				cols: String( cols ),
			} }
		>
			{ renderContainerBasedOnType() }
		</ContainerContext.Provider>
	);
};

export interface ItemProps {
	/** Defines how much the item will grow relative to others. */
	grow?: number;
	/** Defines how much the item will shrink relative to others. */
	shrink?: number;
	/** Defines the order of the item in the container. */
	order?: number;
	/** Defines the alignment of the item along the cross axis. */
	alignSelf?: string;
	/** Defines the justification of the item along the main axis. */
	justifySelf?: string;
	/** Defines any additional CSS classes for the item. */
	className?: string;
	/** Defines the children of the item. */
	children?: ReactNode;
	/** Additional CSS styles. */
	style?: React.CSSProperties;
}

export const Item = ( {
	grow,
	shrink,
	order,
	alignSelf,
	justifySelf,
	className,
	children,
	...props
}: ItemProps ) => {
	const { containerType, cols } = useContainerState();

	if ( containerType === 'grid' ) {
		return <GridContainer.Item { ...( props as any ) } />;
	}

	const alignSelfClassName = getClassNames(
		alignSelf || '',
		alignSelfClassNames,
		{}
	);
	const justifySelfClassName = getClassNames(
		justifySelf || '',
		justifySelfClassNames,
		{}
	);
	const growClassName = getClassNames( grow || 0, flexGrowClassNames, {
		0: 0,
	} );
	const shrinkClassName = getClassNames( shrink || 1, flexShrinkClassNames, {
		0: 0,
	} );
	const orderClassName = getClassNames( order || 0, flexOrderClassNames, {
		0: 0,
	} );
	const columnClassName = getClassNames( cols || 1, flexColumnClassNames, {
		1: 1,
	} );

	return (
		<div
			className={ cn(
				'box-border',
				growClassName,
				shrinkClassName,
				orderClassName,
				alignSelfClassName,
				justifySelfClassName,
				columnClassName,
				className
			) }
			{ ...props }
		>
			{ children }
		</div>
	);
};

Container.Item = Item;

Container.displayName = 'Container';
( Item as any ).displayName = 'Container.Item';

export default Container;
