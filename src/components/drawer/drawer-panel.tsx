import { type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDrawerState } from './drawer';
import { cn } from '@/utilities/functions';
import {
	FloatingOverlay,
	FloatingFocusManager,
	type FloatingContext as FloatingContextType,
} from '@floating-ui/react';

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
	children: ReactNode | ( ( props: { close: () => void } ) => ReactNode );
	/** Additional class names. */
	className?: string;
}

const DrawerPanel = ( { children, className }: DrawerPanelProps ) => {
	const {
		open,
		position,
		handleClose,
		transitionDuration,
		getFloatingProps,
		drawerContainerRef,
		scrollLock,
		context,
		className: rootClassName,
		refs,
	} = useDrawerState();

	// Early return if any required props are missing
	if ( ! context || ! getFloatingProps ) {
		return null;
	}

	return (
		<AnimatePresence>
			{ open && (
				<FloatingOverlay
					ref={ drawerContainerRef }
					lockScroll={ scrollLock }
					className={ cn( 'z-50', rootClassName ) }
				>
					<FloatingFocusManager
						context={ context as FloatingContextType }
						modal={ true }
						{ ...( refs?.reference && { returnFocus: refs.reference as React.MutableRefObject<HTMLElement> } ) }
					>
						<div
							className="fixed inset-0 overflow-hidden"
						>
							<div className="relative inset-0 h-full flex items-center">
								<div
									className={ cn(
										'flex items-center justify-center h-full w-full',
										{
											'justify-start': position === 'left',
											'justify-end': position === 'right',
										}
									) }
								>
									<motion.div
										className={ cn(
											'flex flex-col w-120 h-full bg-background-primary shadow-2xl overflow-hidden z-20',
											className
										) }
										initial="exit"
										animate="open"
										exit="exit"
										variants={ animationVariants[ position! ] }
										transition={ transitionDuration }
										ref={ ( node ) => {
											setTimeout( () => {
												refs?.setFloating( node );
											}, ( ( transitionDuration?.duration || 0.3 ) + 0.1 ) * 1000 );
										} }
										aria-label="drawer"
										role="dialog"
										aria-modal="true"
										{ ...getFloatingProps?.() }
									>
										{ typeof children === 'function'
											? children( { close: handleClose! } )
											: children }
									</motion.div>
								</div>
							</div>
						</div>
					</FloatingFocusManager>
				</FloatingOverlay>
			) }
		</AnimatePresence>
	);
};

DrawerPanel.displayName = 'Drawer.Panel';

export default DrawerPanel;
