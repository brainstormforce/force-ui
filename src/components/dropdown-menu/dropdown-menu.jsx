import React, { useState, useRef, useEffect } from 'react';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenu = ( {
	placement = 'bottom',
	offset: offsetValue = 10,
	boundary = 'clippingAncestors',
	children,
} ) => {
	const [ isOpen, setIsOpen ] = useState( false );
	const { x, y, strategy, refs } = useFloating( {
		placement,
		middleware: [
			offset( offsetValue ),
			flip( {
				boundary,
			} ),
			shift( {
				boundary,
			} ),
		],
		whileElementsMounted: autoUpdate,
	} );

	const menuRef = useRef( null );
	const triggerRef = useRef( null );

	useEffect( () => {
		const handleClickOutside = ( event ) => {
			if (
				menuRef.current &&
                ! menuRef.current.contains( event.target ) &&
                triggerRef.current &&
                ! triggerRef.current.contains( event.target )
			) {
				setIsOpen( false );
			}
		};

		document.addEventListener( 'mousedown', handleClickOutside );
		return () => {
			document.removeEventListener( 'mousedown', handleClickOutside );
		};
	}, [] );

	const handleKeyDown = ( event ) => {
		if ( event.key === 'Escape' ) {
			setIsOpen( false );
		}
	};

	const toggleMenu = () => setIsOpen( ( prev ) => ! prev );

	return (
		<div className="relative inline-block">
			<div
				ref={ ( el ) => {
					refs.setReference( el );
					triggerRef.current = el;
				} }
				onClick={ toggleMenu }
				onKeyDown={ handleKeyDown }
				role="button"
				tabIndex={ 0 }
				className="cursor-pointer"
			>
				{ React.Children.map( children, ( child ) => {
					if ( child.type === DropdownMenu.Trigger ) {
						return React.cloneElement( child );
					}
					return null;
				} ) }
			</div>

			<AnimatePresence>
				{ isOpen && (
					<motion.div
						ref={ ( node ) => {
							menuRef.current = node;
							refs.setFloating( node );
						} }
						style={ {
							position: strategy,
							top: y ?? 0,
							left: x ?? 0,
						} }
						initial={ { opacity: 0, scale: 0.95 } }
						animate={ { opacity: 1, scale: 1 } }
						exit={ { opacity: 0, scale: 0.95 } }
						transition={ { duration: 0.2 } }
					>
						{ React.Children.map( children, ( child ) => {
							if ( child.type === DropdownMenu.Content ) {
								return React.cloneElement( child );
							}
							return null;
						} ) }
					</motion.div>
				) }
			</AnimatePresence>
		</div>
	);
};

const DropdownMenuTrigger = React.forwardRef( ( { children }, ref ) => (
	<div ref={ ref }>
		{ children }
	</div>
) );

const DropdownMenuContent = ( { children } ) => {
	return (
		<div className="relative z-10 border border-solid border-border-subtle rounded-lg shadow-lg overflow-hidden">
			{ children }
		</div>
	);
};

DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;

export default DropdownMenu;

