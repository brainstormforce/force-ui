import { cn } from '@/utilities/functions';
import { useDrawerState } from './drawer';

export interface DrawerFooterProps {
	/** Footer content. */
	children:
		| React.ReactNode
		| ( ( { close }: { close: () => void } ) => React.ReactNode );
	/** Additional class names. */
	className?: string;
}

// Drawer footer.
const DrawerFooter = ( { children, className }: DrawerFooterProps ) => {
	const { design, handleClose } = useDrawerState();

	const renderChildren = () => {
		if ( ! children ) {
			return null;
		}

		if ( typeof children === 'function' ) {
			return children( { close: handleClose! } );
		}

		return children;
	};

	return (
		<div
			className={ cn(
				'p-5 flex justify-end gap-3 mt-auto',
				{
					'bg-background-secondary': design === 'footer-divided',
				},
				className
			) }
		>
			{ renderChildren() }
		</div>
	);
};

DrawerFooter.displayName = 'Drawer.Footer';

export default DrawerFooter;
