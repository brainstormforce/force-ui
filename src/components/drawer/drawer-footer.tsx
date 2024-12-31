import { cn } from '@/utilities/functions';
import { useDrawerState } from './drawer';
import { type ReactNode } from 'react';

export interface DrawerFooterProps {
	/** Footer content. */
	children: ReactNode | ( ( { close }: { close: () => void } ) => ReactNode );
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
				'px-5 py-4 flex justify-end gap-3 mt-auto',
				{
					'bg-background-secondary': design === 'footer-divided',
					'border-t border-b-0 border-x-0 border-solid border-border-subtle':
						design === 'footer-bordered',
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
