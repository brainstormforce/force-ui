import React, {
	useState,
	createContext,
	useContext,
	cloneElement,
	Fragment,
} from 'react';
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
import Menu from '../menu-item/menu-item';

const DropdownMenuContext = createContext();
const useDropdownMenuContext = () => useContext( DropdownMenuContext );

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
		<DropdownMenuContext.Provider value={ { handleClose } }>
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
						if (
							child.type?.displayName === 'DropdownMenu.Trigger'
						) {
							return child;
						}
						return null;
					} ) }
				</div>

				{ isMounted && (
					<FloatingPortal
						id={ dropdownPortalId }
						root={ dropdownPortalRoot }
					>
						<div
							ref={ refs.setFloating }
							style={ {
								...floatingStyles,
								...styles,
							} }
							{ ...getFloatingProps() }
						>
							{ React.Children.map( children, ( child ) => {
								if (
									child.type?.displayName ===
									'DropdownMenu.Content'
								) {
									return child;
								}
								return null;
							} ) }
						</div>
					</FloatingPortal>
				) }
			</div>
		</DropdownMenuContext.Provider>
	);
};

DropdownMenu.displayName = 'DropdownMenu';

const DropdownMenuTrigger = React.forwardRef( ( { children, className }, ref ) => (
	<div ref={ ref } role="button" tabIndex={ 0 } className={ className }>
		{ children }
	</div>
) );

DropdownMenuTrigger.displayName = 'DropdownMenu.Trigger';

const DropdownMenuContent = ( { children, className, ...props } ) => {
	return (
		<div
			className={ cn(
				'border border-solid border-border-subtle rounded-md shadow-lg overflow-hidden',
				className
			) }
		>
			<Menu { ...props }>{ children }</Menu>
		</div>
	);
};
DropdownMenuContent.displayName = 'DropdownMenu.Content';

const DropdownMenuList = ( { children, ...props } ) => {
	return <Menu.List { ...props }>{ children }</Menu.List>;
};

DropdownMenuList.displayName = 'DropdownMenu.List';

const DropdownMenuItem = ( { children, as: Tag = Menu.Item, ...props } ) => {
	const { handleClose } = useDropdownMenuContext();

	if ( ! children ) {
		return null;
	}

	if ( Tag === Fragment ) {
		return cloneElement( children, {
			onClick: callAll( children.props?.onClick, handleClose ),
		} );
	}

	return (
		<Tag { ...props } onClick={ callAll( props.onClick, handleClose ) }>
			{ children }
		</Tag>
	);
};

DropdownMenuItem.displayName = 'DropdownMenu.Item';

const DropdownMenuSeparator = ( { ...props } ) => {
	return <Menu.Separator { ...props } />;
};

DropdownMenuSeparator.displayName = 'DropdownMenu.Separator';

export default Object.assign( DropdownMenu, {
	Trigger: DropdownMenuTrigger,
	Content: DropdownMenuContent,
	List: DropdownMenuList,
	Item: DropdownMenuItem,
	Separator: DropdownMenuSeparator,
} );
