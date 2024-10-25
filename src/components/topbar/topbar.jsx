import React from 'react';
import { cn, getGapClass } from '@/utilities/functions';

const Topbar = ({ children, gap = 'lg', className, ...props }) => {
	return (
		<div
			className={cn(
				'w-full box-border flex items-center justify-between bg-background-primary p-5 min-h-16',
				getGapClass(gap),
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

Topbar.displayName = 'Topbar';

const Left = ({ gap = 'sm', children, className }) => {
	return (
		<div className={cn('flex items-center', getGapClass(gap), className)}>
			{children}
		</div>
	);
};

Left.displayName = 'Topbar.Left';

const Middle = ({ gap = 'md', children, align = 'center', className }) => {
	const alignmentClass = {
		left: 'justify-start',
		center: 'justify-center',
		right: 'justify-end',
	}?.[align];

	return (
		<div
			className={cn(
				'flex items-center grow',
				getGapClass(gap),
				alignmentClass,
				className
			)}
		>
			{children}
		</div>
	);
};

Middle.displayName = 'Topbar.Middle';

const Right = ({ gap = 'sm', children, className }) => {
	return (
		<div className={cn('flex items-center', getGapClass(gap), className)}>
			{children}
		</div>
	);
};

Right.displayName = 'Topbar.Right';

const Item = ({ children, className }) => {
	return (
		<div
			className={cn('flex items-center [&>svg]:block h-full', className)}
		>
			{children}
		</div>
	);
};

Item.displayName = 'Topbar.Item';

export default Object.assign(Topbar, {
	Left,
	Middle,
	Right,
	Item,
});
