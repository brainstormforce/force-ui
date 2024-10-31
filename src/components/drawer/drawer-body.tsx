import { cn } from '@/utilities/functions';

export interface DrawerBodyProps {
	/** Body content. */
	children: React.ReactNode;
	/** Additional class names. */
	className?: string;
	/** Additional props. */
	[key: string]: unknown;
}

// Drawer body.
const DrawerBody = ( { children, className, ...props }: DrawerBodyProps ) => {
	return (
		<div
			className={ cn(
				'px-5 flex flex-col flex-1 overflow-y-auto overflow-x-hidden',
				className
			) }
			{ ...props }
		>
			{ children }
		</div>
	);
};
DrawerBody.displayName = 'Drawer.Body';

export default DrawerBody;
