import React from 'react';
import { cn, getGapClass } from '@/utilities/functions';

const Topbar = ( { children, gap = 'lg', className, ...props } ) => {
	return (
		<div className={ cn( 'w-full flex items-center justify-between bg-background-primary p-5 min-h-16', getGapClass( gap ), className ) } { ...props }>
			{ children }
		</div>
	);
};

const Left = ( { gap = 'sm', children } ) => {
	return <div className={ cn( 'flex items-center', getGapClass( gap ) ) }>{ children }</div>;
};

const Middle = ( { gap = 'md', children, align = 'center' } ) => {
	const alignmentClass = {
		left: 'justify-start',
		center: 'justify-center',
		right: 'justify-end',
	}?.[ align ];

	return <div className={ cn( 'flex items-center grow', getGapClass( gap ), alignmentClass ) }>{ children }</div>;
};

const Right = ( { gap = 'sm', children } ) => {
	return <div className={ cn( 'flex items-center', getGapClass( gap ) ) }>{ children }</div>;
};

const Item = ( { children, className } ) => {
	return <div className={ cn( 'flex items-center [&>svg]:block h-full', className ) }>{ children }</div>;
};

Topbar.Left = Left;
Topbar.Middle = Middle;
Topbar.Right = Right;
Topbar.Item = Item;

export default Topbar;
