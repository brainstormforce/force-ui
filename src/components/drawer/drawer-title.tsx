import { type ReactNode, type ElementType, useEffect } from 'react';
import { cn } from '@/utilities/functions';
import { useDrawerState } from './drawer';

export interface DrawerTitleProps {
	/** Title content. */
	children: ReactNode;
	/** HTML element to render. */
	as?: ElementType;
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
	const { titleId, hasTitleRef } = useDrawerState();

	useEffect( () => {
		if ( hasTitleRef ) {
			hasTitleRef.current = true;
		}
		return () => {
			if ( hasTitleRef ) {
				hasTitleRef.current = false;
			}
		};
	}, [ hasTitleRef ] );

	return (
		<Tag
			id={ titleId }
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
