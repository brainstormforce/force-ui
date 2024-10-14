import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDrawerState } from './drawer';
import { cn } from '@/utilities/functions';

const animationVariants = {
	left: {
		open: {
			x: 0,
		},
		exit: {
			x: '-100%',
		},
	},
	right: {
		open: {
			x: 0,
		},
		exit: {
			x: '100%',
		},
	},
};

export interface DrawerPanelProps {
	/** Drawer content. */
	children: React.ReactNode | ((props: { close: () => void }) => React.ReactNode);
	/** Additional class names. */
	className?: string;
}

const DrawerPanel = ( { children, className }: DrawerPanelProps ) => {
	const { open, position, handleClose, drawerRef, transitionDuration } =
		useDrawerState();

	return (
		<AnimatePresence>
			{ open && (
				<div className="fixed inset-0">
					<div
						className={ cn(
							'flex items-center justify-center h-full',
							{
								'justify-start': position === 'left',
								'justify-end': position === 'right',
							}
						) }
					>
						<motion.div
							ref={ drawerRef }
							className={ cn(
								'flex flex-col gap-5 w-120 h-full bg-background-primary shadow-2xl my-5 overflow-hidden',
								className
							) }
							initial="exit"
							animate="open"
							exit="exit"
							variants={ animationVariants[ position! ] }
							transition={ transitionDuration }
						>
							{ typeof children === 'function'
								? children( { close: handleClose! } )
								: children }
						</motion.div>
					</div>
				</div>
			) }
		</AnimatePresence>
	);
};

DrawerPanel.displayName = 'Drawer.Panel';

export default DrawerPanel;
