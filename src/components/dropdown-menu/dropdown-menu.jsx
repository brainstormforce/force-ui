import React, { cloneElement, useState } from 'react';
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	useClick,
	useDismiss,
	useRole,
	FloatingPortal,
	useInteractions,
	useTransitionStyles,
} from '@floating-ui/react';
import { callAll, cn } from '@/utilities/functions';

const isMenuItem = (child) => {
    return child.type?.displayName === 'Menu.Item';
}

const attachMenuItemClickHandler = (children, handleClose) => {
    return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return cloneElement(child, {
                children: React.Children.map(child.props.children, (child1) => {
                    if (React.isValidElement(child1)) {
                        return cloneElement(child1, {
                            children: React.Children.map(child.props.children.props.children, (child2) => {
                                if (React.isValidElement(child2)) {
                                    if (isMenuItem(child2)) {
                                        return cloneElement(child2, {
                                            onClick: callAll(handleClose, child2.props.onClick),
                                        })
                                    }
                                }
                                return child2;
                            })
                        }) 
                    }
                    return child1;
                })
            })
        }
        return child;
    });
}

const DropdownMenu = ( {
	placement = 'bottom',
	offset: offsetValue = 10,
	boundary = 'clippingAncestors',
	dropdownPortalRoot = null,
	dropdownPortalId = '',
	children,
	className,
} ) => {
	const [ isOpen, setIsOpen ] = useState( false );

	const { refs, floatingStyles, context } = useFloating( {
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		strategy: 'absolute',
		middleware: [
			offset( offsetValue ),
			flip( { boundary } ),
			shift( { boundary } ),
		],
		whileElementsMounted: autoUpdate,
	} );

	const click = useClick( context );
	const dismiss = useDismiss( context );
	const role = useRole( context, { role: 'menu' } );

	const { getReferenceProps, getFloatingProps } = useInteractions( [
		click,
		dismiss,
		role,
	] );

	const { isMounted, styles } = useTransitionStyles( context, {
		duration: 150,
		initial: { opacity: 0, scale: 0.95 },
		open: { opacity: 1, scale: 1 },
		close: { opacity: 0, scale: 0.95 },
	} );

	const toggleMenu = () => setIsOpen( ( prev ) => ! prev );

	const handleClose = () => setIsOpen( false );

	return (
		<div className={ cn( 'relative inline-block', className ) }>
			<div
				ref={ refs.setReference }
				onClick={ toggleMenu }
				role="button"
				tabIndex={ 0 }
				{ ...getReferenceProps() }
				className="cursor-pointer"
			>
				{ React.Children.map( children, ( child ) => {
                    if (child.type?.displayName === 'DropdownMenu.Trigger' ) {
						return child;
					}
					return null;
				} ) }
			</div>

			{ isMounted && (
				<FloatingPortal id={ dropdownPortalId } root={ dropdownPortalRoot }>
					<div
						ref={ refs.setFloating }
						style={ {
							...floatingStyles,
							...styles,
						} }
						{ ...getFloatingProps() }
					>
						{ React.Children.map( children, ( child ) => {
                            if (child.type?.displayName === 'DropdownMenu.Content' ) {
                                return React.cloneElement(child, {
                                    children: attachMenuItemClickHandler(child.props.children, handleClose)
                                });
							}
							return null;
						} ) }
					</div>
				</FloatingPortal>
			) }
		</div>
	);
};

DropdownMenu.displayName = 'DropdownMenu';

const DropdownMenuTrigger = React.forwardRef( ( { children, className }, ref ) => (
	<div ref={ ref } role="button" tabIndex={ 0 } className={ className }>
		{ children }
	</div>
) );

DropdownMenuTrigger.displayName = 'DropdownMenu.Trigger';

const DropdownMenuContent = ( { children, className } ) => {
	return (
		<div
			role="menu"
			tabIndex={ 0 }
			className={ cn(
				'border border-solid border-border-subtle rounded-md shadow-lg overflow-hidden',
				className
			) }
		>
			{ children }
		</div>
	);
};

DropdownMenuContent.displayName = 'DropdownMenu.Content';

export default Object.assign( DropdownMenu, {
	Trigger: DropdownMenuTrigger,
	Content: DropdownMenuContent,
} );
