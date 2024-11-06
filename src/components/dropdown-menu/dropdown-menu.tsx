import React, {
	useState,
	createContext,
	useContext,
	cloneElement,
	Fragment,
	isValidElement,
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
import {
	AdditionalProps,
	DropdownCommonProps,
	DropdownMenuItemProps,
	DropdownMenuListProps,
	DropdownMenuProps,
	DropdownMenuSeparatorProps,
	HandleClose,
} from './dropdown-types';

const DropdownMenuContext = createContext<Record<string, unknown>>( {} );
const useDropdownMenuContext = () => useContext( DropdownMenuContext );

const DropdownMenu = ( {
	placement = 'bottom',
	offset: offsetValue = 10,
	boundary = 'clippingAncestors',
	dropdownPortalRoot = null,
	dropdownPortalId = '',
	children,
	className,
}: DropdownMenuProps ) => {
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
							(
								child as React.ReactNode & {
									type: { displayName: string };
								}
							)?.type?.displayName === 'DropdownMenu.Trigger'
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
									(
										child as React.ReactNode & {
											type?: { displayName: string };
										}
									)?.type?.displayName ===
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

export const DropdownMenuTrigger = React.forwardRef<
	HTMLDivElement,
	DropdownCommonProps
>( ( { children, className }, ref ) => (
	<div ref={ ref } role="button" tabIndex={ 0 } className={ className }>
		{ children }
	</div>
) );

DropdownMenuTrigger.displayName = 'DropdownMenu.Trigger';

export const DropdownMenuContent = ( {
	children,
	className,
	...props
}: DropdownCommonProps & AdditionalProps ) => {
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

export const DropdownMenuList = ( props: DropdownMenuListProps ) => {
	return <Menu.List { ...props } />;
};

DropdownMenuList.displayName = 'DropdownMenu.List';

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ( {
	children,
	as: Tag = Menu.Item,
	...props
} ) => {
	const { handleClose } = useDropdownMenuContext();

	if ( ! children ) {
		return null;
	}

	if ( Tag === Fragment && isValidElement( children ) ) {
		return cloneElement( children as React.ReactElement, {
			onClick: callAll(
				( children as React.ReactElement ).props?.onClick,
				handleClose as HandleClose
			),
		} );
	}

	return (
		<Tag
			{ ...props }
			className={ cn( 'px-2', props.className ) }
			onClick={ callAll( props.onClick!, handleClose as HandleClose ) }
		>
			{ children }
		</Tag>
	);
};

DropdownMenuItem.displayName = 'DropdownMenu.Item';

export const DropdownMenuSeparator = ( props: DropdownMenuSeparatorProps ) => {
	return <Menu.Separator { ...props } />;
};

DropdownMenuSeparator.displayName = 'DropdownMenu.Separator';

DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.List = DropdownMenuList;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Separator = DropdownMenuSeparator;

export default DropdownMenu;
