import { AnimatePresence, motion } from 'framer-motion';
import { useDrawerState } from './drawer';
import { createPortal } from 'react-dom';
import { cn } from '@/utilities/functions';
import { useEffect, useState } from 'react';

const backdropAnimationVariants = {
	open: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

export interface DrawerBackdropProps {
	/** Additional class names. */
	className?: string;
	/** Additional props. */
	[key: string]: unknown;
}

// Backdrop for the drawer.
const DrawerBackdrop = ( { className, ...props }: DrawerBackdropProps ) => {
	const { open, drawerContainerRef, transitionDuration } = useDrawerState();
	const [ container, setContainer ] = useState<HTMLElement | null>( null );

	useEffect( () => {
		if ( drawerContainerRef?.current ) {
			setContainer( drawerContainerRef.current );
		}
	}, [ open, drawerContainerRef ] );

	// Render directly if container not yet available
	const backdropContent = (
		<AnimatePresence mode="wait">
			{ open && (
				<motion.div
					className={ cn(
						'fixed inset-0 -z-10 bg-background-inverse/90',
						className
					) }
					{ ...props }
					initial="exit"
					animate="open"
					exit="exit"
					variants={ backdropAnimationVariants }
					transition={ transitionDuration }
					key="backdrop"
				/>
			) }
		</AnimatePresence>
	);

	// If container is available, use portal, otherwise render directly
	return container ? createPortal( backdropContent, container ) : backdropContent;
};
DrawerBackdrop.displayName = 'Drawer.Backdrop';

export default DrawerBackdrop;
