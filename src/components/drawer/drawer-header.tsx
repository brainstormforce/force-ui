import { cn } from '@/utilities/functions';
import { type ReactNode } from 'react';

export interface DrawerHeaderProps {
	/** Header content. */
	children: ReactNode;
	/** Additional class names. */
	className?: string;
	/** Additional props. */
	[key: string]: unknown;
}

// Drawer header wrapper.
const DrawerHeader = ( { children, className, ...props }: DrawerHeaderProps ) => {
	return (
		<div className={ cn( 'space-y-2 px-5 pt-5 pb-4', className ) } { ...props }>
			{ children }
		</div>
	);
};

DrawerHeader.displayName = 'Drawer.Header';

export default DrawerHeader;
