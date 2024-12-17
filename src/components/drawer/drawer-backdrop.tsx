import { AnimatePresence, motion } from 'framer-motion';
import { useDrawerState } from './drawer';
import { createPortal } from 'react-dom';
import { cn } from '@/utilities/functions';

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

	if ( ! drawerContainerRef?.current ) {
		return null;
	}

	return (
		!! drawerContainerRef.current &&
		createPortal(
			<AnimatePresence>
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
					/>
				) }
			</AnimatePresence>,
			drawerContainerRef.current
		)
	);
};
DrawerBackdrop.displayName = 'Drawer.Backdrop';

export default DrawerBackdrop;
