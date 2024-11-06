import { createContext, useContext } from 'react';
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
} from './container-styles';
import {
	type TCols,
	type TContainerType,
	type FlexContainerProps,
	type GridContainerProps,
	type FlexItemProps,
	type GridItemProps,
} from './container-types';

const ContainerContext = createContext<
	Partial<{
		containerType: TContainerType;
		cols: TCols;
	}>
>( {} );
const useContainerState = () => useContext( ContainerContext );

export const Container = ( {
	containerType = 'flex', // flex, (grid - functionality not implemented)
	gap = 'sm', // xs, sm, md, lg, xl, 2xl
	gapX,
	gapY,
	direction, // row, row-reverse, column, column reverse
	justify, // justify-content (normal, start, end, center, between, around, evenly, stretch)
	align, // align-items (start, end, center, baseline, stretch)
	wrap, // nowrap, wrap, wrap-reverse
	cols,
	className,
	children,
	...extraProps
}: FlexContainerProps & GridContainerProps ) => {
	if ( containerType === 'grid' ) {
		return (
			<ContainerContext.Provider
				value={ {
					containerType,
				} }
			>
				<GridContainer
					className={ className }
					gap={ gap }
					gapX={ gapX }
					gapY={ gapY }
					cols={ cols }
					children={ children }
					align={ align }
					justify={ justify }
					{ ...extraProps }
				/>
			</ContainerContext.Provider>
		);
	}

	const wrapClassName = getClassNames( wrap!, flexWrapClassNames, '' );
	const gapClassName = getClassNames( gap, gapClassNames, 'sm' );
	const gapXClassName = getClassNames( gapX!, gapXClassNames, '' );
	const gapYClassName = getClassNames( gapY!, gapYClassNames, '' );
	const directionClassName = getClassNames(
		direction!,
		flexDirectionClassNames,
		''
	);
	const justifyContentClassName = getClassNames(
		justify!,
		justifyClassNames,
		''
	);
	const alignItemsClassName = getClassNames( align!, alignClassNames, '' );

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
		if ( 'flex' === containerType ) {
			return <div className={ combinedClasses }>{ children }</div>;
		}

		return (
			<GridContainer
				className={ className }
				gap={ gap }
				gapX={ gapX }
				gapY={ gapY }
				cols={ cols }
				children={ children }
				align={ align }
				justify={ justify }
				{ ...extraProps }
			/>
		);
	};

	return (
		<ContainerContext.Provider
			value={ {
				containerType,
				cols,
			} }
		>
			{ renderContainerBasedOnType() }
		</ContainerContext.Provider>
	);
};

export const Item = ( {
	grow,
	shrink,
	order,
	alignSelf,
	justifySelf,
	className,
	children,
	...props
}: FlexItemProps & GridItemProps ) => {
	const { containerType, cols } = useContainerState();

	if ( containerType === 'grid' ) {
		return (
			<GridContainer.Item
				className={ className }
				alignSelf={ alignSelf }
				justifySelf={ justifySelf }
				children={ children }
				{ ...props }
			/>
		);
	}

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
	const growClassName = getClassNames( grow!, flexGrowClassNames, 0 );
	const shrinkClassName = getClassNames( shrink!, flexShrinkClassNames, 0 );
	const orderClassName = getClassNames( order!, flexOrderClassNames, 0 );
	const columnClassName = getClassNames( cols!, flexColumnClassNames, 1 );

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
		>
			{ children }
		</div>
	);
};

Container.Item = Item;

Container.displayName = 'Container';
Item.displayName = 'Container.Item';

export default Container;
