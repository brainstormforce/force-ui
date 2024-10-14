import { cn } from '@/utilities/functions';

export interface DrawerHeaderProps {
	/** Header content. */
	children: React.ReactNode;
	/** Additional class names. */
	className?: string;
	/** Additional props. */
	[key: string]: any;
}

// Drawer header wrapper.
const DrawerHeader = ( { children, className, ...props }: DrawerHeaderProps ) => {
	return (
		<div className={ cn( 'space-y-2 px-5 pt-5 pb-1', className ) } { ...props }>
			{ children }
		</div>
	);
};

DrawerHeader.displayName = 'Drawer.Header';

export default DrawerHeader;
