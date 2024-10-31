import React from 'react';
import { cn, getGapClass } from '@/utilities/functions';

export declare interface TopbarCommonProps {
	/** Children to be rendered inside the Topbar. */
	children?: React.ReactNode;
	/** Additional classes to be added to the Topbar. */
	className?: string;
}

export declare interface TopbarProps extends TopbarCommonProps {
	/** Defines the gap between items. */
	gap?: '0' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export declare interface TopbarMiddleProps extends TopbarProps {
	/** Defines how the content inside the Middle section is aligned. */
	align?: 'left' | 'center' | 'right';
}

const Topbar = ( { children, gap = 'lg', className, ...props }: TopbarProps ) => {
	return (
		<div
			className={ cn(
				'w-full box-border flex items-center justify-between bg-background-primary p-5 min-h-16',
				getGapClass( gap ),
				className
			) }
			{ ...props }
		>
			{ children }
		</div>
	);
};

Topbar.displayName = 'Topbar';

export const Left = ( { gap = 'sm', children, className }: TopbarProps ) => {
	return (
		<div className={ cn( 'flex items-center', getGapClass( gap ), className ) }>
			{ children }
		</div>
	);
};

Left.displayName = 'Topbar.Left';

export const Middle = ( {
	gap = 'md',
	children,
	align = 'center',
	className,
}: TopbarMiddleProps ) => {
	const alignmentClass = {
		left: 'justify-start',
		center: 'justify-center',
		right: 'justify-end',
	}?.[ align ];

	return (
		<div
			className={ cn(
				'flex items-center grow',
				getGapClass( gap ),
				alignmentClass,
				className
			) }
		>
			{ children }
		</div>
	);
};

Middle.displayName = 'Topbar.Middle';

export const Right = ( { gap = 'sm', children, className }: TopbarProps ) => {
	return (
		<div className={ cn( 'flex items-center', getGapClass( gap ), className ) }>
			{ children }
		</div>
	);
};

Right.displayName = 'Topbar.Right';

export const Item = ( { children, className }: TopbarCommonProps ) => {
	return (
		<div
			className={ cn( 'flex items-center [&>svg]:block h-full', className ) }
		>
			{ children }
		</div>
	);
};

Item.displayName = 'Topbar.Item';

Topbar.Left = Left;
Topbar.Middle = Middle;
Topbar.Right = Right;
Topbar.Item = Item;

export default Topbar;
