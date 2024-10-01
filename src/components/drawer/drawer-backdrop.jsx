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

// Backdrop for the drawer.
const DrawerBackdrop = ({ className, ...props }) => {
	const { open, drawerContainerRef, transitionDuration } = useDrawerState();

	return (
		drawerContainerRef.current &&
		createPortal(
			<AnimatePresence>
				{open && (
					<motion.div
						className={cn(
							'fixed inset-0 -z-10 bg-background-inverse/90 backdrop-blur-sm',
							className
						)}
						{...props}
						initial="exit"
						animate="open"
						exit="exit"
						variants={backdropAnimationVariants}
						transition={transitionDuration}
					/>
				)}
			</AnimatePresence>,
			drawerContainerRef.current
		)
	);
};

export default Object.assign(DrawerBackdrop, {
	displayName: 'Drawer.Backdrop',
});
