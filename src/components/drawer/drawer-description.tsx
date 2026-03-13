import { cn } from '@/utilities/functions';
import { type ElementType, type ReactNode, useEffect } from 'react';
import { useDrawerState } from './drawer';

export interface DrawerDescriptionProps {
	/** Description tag. */
	as?: ElementType;
	/** Description content. */
	children: ReactNode;
	/** Additional class names. */
	className?: string;
	/** Additional props. */
	[key: string]: unknown;
}

// Drawer description.
const DrawerDescription = ( {
	children,
	as: Tag = 'p',
	className,
	...props
}: DrawerDescriptionProps ) => {
	const { descriptionId, hasDescriptionRef } = useDrawerState();

	useEffect( () => {
		if ( hasDescriptionRef ) {
			hasDescriptionRef.current = true;
		}
		return () => {
			if ( hasDescriptionRef ) {
				hasDescriptionRef.current = false;
			}
		};
	}, [ hasDescriptionRef ] );

	return (
		<Tag
			id={ descriptionId }
			className={ cn(
				'text-sm font-normal text-text-secondary my-0 ml-0 mr-1 p-0',
				className
			) }
			{ ...props }
		>
			{ children }
		</Tag>
	);
};
DrawerDescription.displayName = 'Drawer.Description';

export default DrawerDescription;
