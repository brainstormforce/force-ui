import React, { createContext, useContext } from 'react';
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

const ContainerContext = createContext();
const useContainerState = () => useContext(ContainerContext);

const Container = (props) => {
	const {
		containerType = 'flex', // flex, (grid - functionality not implemented)
		gap = 'sm', // xs, sm, md, lg, xl, 2xl
		gapX = '',
		gapY = '',
		direction = '', // row, row-reverse, column, column reverse
		justify = '', // justify-content (normal, start, end, center, between, around, evenly, stretch)
		align = '', // align-items (start, end, center, baseline, stretch)
		wrap, // nowrap, wrap, wrap-reverse
		cols = '',
		className,
		children,
		...extraProps
	} = props;

	if (containerType === 'grid') {
		const { containerType: type, ...rest } = props;
		return (
			<ContainerContext.Provider
				value={{
					containerType: type,
				}}
			>
				<GridContainer {...rest} />
			</ContainerContext.Provider>
		);
	}

	const wrapClassName = getClassNames(wrap, flexWrapClassNames, '');
	const gapClassName = getClassNames(gap, gapClassNames, 'sm');
	const gapXClassName = getClassNames(gapX, gapXClassNames, '');
	const gapYClassName = getClassNames(gapY, gapYClassNames, '');
	const directionClassName = getClassNames(
		direction,
		flexDirectionClassNames,
		''
	);
	const justifyContentClassName = getClassNames(
		justify,
		justifyClassNames,
		''
	);
	const alignItemsClassName = getClassNames(align, alignClassNames, '');

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
		if (containerType === 'grid') {
			return <GridContainer {...props} />;
		}

		return (
			<div className={combinedClasses} {...extraProps}>
				{children}
			</div>
		);
	};

	return (
		<ContainerContext.Provider
			value={{
				containerType,
				cols,
			}}
		>
			{renderContainerBasedOnType()}
		</ContainerContext.Provider>
	);
};

const Item = (props) => {
	const {
		grow,
		shrink,
		order,
		alignSelf,
		justifySelf,
		className,
		children,
		...extraProps
	} = props;
	const { containerType, cols } = useContainerState();

	if (containerType === 'grid') {
		const { ...rest } = props;
		return <GridContainer.Item {...rest} />;
	}

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
	const growClassName = getClassNames(grow, flexGrowClassNames, 0);
	const shrinkClassName = getClassNames(shrink, flexShrinkClassNames, 0);
	const orderClassName = getClassNames(order, flexOrderClassNames, 0);
	const columnClassName = getClassNames(cols, flexColumnClassNames, 1);

	return (
		<div
			className={cn(
				'box-border',
				growClassName,
				shrinkClassName,
				orderClassName,
				alignSelfClassName,
				justifySelfClassName,
				columnClassName,
				className
			)}
			{...extraProps}
		>
			{children}
		</div>
	);
};

Container.Item = Item;

Container.displayName = 'Container';
Container.Item.displayName = 'Container.Item';

export default Container;
