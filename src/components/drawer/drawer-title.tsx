import React from 'react';
import { cn } from '@/utilities/functions';

export interface DrawerTitleProps {
	/** Title content. */
	children: React.ReactNode;
	/** HTML element to render. */
	as?: React.ElementType;
	/** Additional class names. */
	className?: string;
}

// Drawer title.
const DrawerTitle = ( {
	children,
	as: Tag = 'h3',
	className,
	...props
}: DrawerTitleProps ) => {
	return (
		<Tag
			className={ cn(
				'text-base font-semibold text-text-primary m-0 p-0',
				className
			) }
			{ ...props }
		>
			{ children }
		</Tag>
	);
};

DrawerTitle.displayName = 'Drawer.Title';

export default DrawerTitle;
