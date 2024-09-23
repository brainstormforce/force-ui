import React from 'react';
import { cn } from '@/utilities/functions';

const gapClasses = {
	0: 'gap-0',
	xxs: 'gap-1',
	xs: 'gap-2',
	sm: 'gap-3',
	md: 'gap-4',
	lg: 'gap-5',
	xl: 'gap-6',
	'2xl': 'gap-8',
};

const Topbar = ( { children, gap = 'lg', className, ...props } ) => {
	return (
		<div className={ cn( 'w-full flex items-center justify-between bg-background-primary p-5', gapClasses[ gap ], className ) } { ...props }>
			{ children }
		</div>
	);
};

const Left = ( { gap = 'sm', children } ) => {
	return <div className={ cn( 'flex items-center', gapClasses[ gap ] ) }>{ children }</div>;
};

const Middle = ( { gap = 'md', children, align = 'center' } ) => {
	const alignmentClass = {
		left: 'justify-start',
		center: 'justify-center',
		right: 'justify-end',
	}?.[ align ];

	return <div className={ cn( 'flex items-center grow', gapClasses[ gap ], alignmentClass ) }>{ children }</div>;
};

const Right = ( { gap = 'sm', children } ) => {
	return <div className={ cn( 'flex items-center', gapClasses[ gap ] ) }>{ children }</div>;
};

const Item = ( { children, className } ) => {
	return <div className={ cn( 'flex items-center [&>svg]:block h-full', className ) }>{ children }</div>;
};

Topbar.Left = Left;
Topbar.Middle = Middle;
Topbar.Right = Right;
Topbar.Item = Item;

export default Topbar;
