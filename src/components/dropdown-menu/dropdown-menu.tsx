import React, {
	useState,
	createContext,
	useContext,
	cloneElement,
	Fragment,
	isValidElement,
	type ReactElement,
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
	type UseFloatingReturn,
	type UseInteractionsReturn,
} from '@floating-ui/react';
import { callAll, cn } from '@/utilities/functions';
import Menu from '../menu-item/menu-item';
import {
	AdditionalProps,
	DropdownCommonProps,
	DropdownMenuContentWrapperProps,
	DropdownMenuItemProps,
	DropdownMenuListProps,
	DropdownMenuProps,
	DropdownMenuSeparatorProps,
	DropdownPortalProps,
	HandleClose,
} from './dropdown-types';

const DropdownMenuContext = createContext<Record<string, unknown>>( {} );
const useDropdownMenuContext = () => useContext( DropdownMenuContext );

export const DropdownMenu = ( {
	placement = 'bottom',
	offset: offsetValue = 10,
	boundary = 'clippingAncestors',
	children,
	className,
}: DropdownMenuProps ) => {
	const [ isOpen, setIsOpen ] = useState( false );

	const { refs, floatingStyles, context } = useFloating( {
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		strategy: 'fixed',
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
		<DropdownMenuContext.Provider
			value={ {
				refs,
				handleClose,
				isMounted,
				styles,
				floatingStyles,
				getFloatingProps,
			} }
		>
			<div className={ cn( 'relative inline-block', className ) }>
				{ React.Children.map( children, ( child ) => {
					if (
						React.isValidElement( child ) &&
						(
							child as ReactElement & {
								type: { displayName: string };
							}
						)?.type?.displayName === 'DropdownMenu.Trigger'
					) {
						return cloneElement( child as ReactElement, {
							ref: refs.setReference,
							onClick: toggleMenu,
							...getReferenceProps(),
						} );
					}
					return null;
				} ) }

				{ React.Children.toArray( children )
					.filter(
						( child ): child is React.ReactElement =>
							React.isValidElement( child ) &&
							[
								'DropdownMenu.Portal',
								'DropdownMenu.ContentWrapper',
							].includes(
								( child.type as { displayName?: string } )
									.displayName || ''
							)
					)
					.map( ( child ) => child ) }
			</div>
		</DropdownMenuContext.Provider>
	);
};

DropdownMenu.displayName = 'DropdownMenu';

export const DropdownMenuContentWrapper = ( {
	children,
	className,
}: DropdownMenuContentWrapperProps ) => {
	const { refs, floatingStyles, getFloatingProps, isMounted, styles } =
		useDropdownMenuContext() as {
			refs: UseFloatingReturn['refs'];
			floatingStyles: UseFloatingReturn['floatingStyles'];
			getFloatingProps: UseInteractionsReturn['getFloatingProps'];
			isMounted: boolean;
		styles: React.CSSProperties;
	};

	return isMounted && (
		<div
			ref={ refs.setFloating }
			className={ className }
			style={ {
				...floatingStyles!,
				...styles!,
			} }
			{ ...getFloatingProps() }
		>
			{ React.Children.map( children, ( child ) => {
				if (
					(
					child as ReactElement & {
						type?: { displayName: string };
					}
					)?.type?.displayName === 'DropdownMenu.Content'
				) {
					return child;
				}
				return null;
			} ) }
		</div>
	);
};

DropdownMenuContentWrapper.displayName = 'DropdownMenu.ContentWrapper';

export const DropdownMenuPortal = ( {
	children,
	root,
	id,
}: DropdownPortalProps ) => {
	return (
		 (
			<FloatingPortal id={ id } root={ root }>
				{ children }
			</FloatingPortal>
		)
	);
};

DropdownMenuPortal.displayName = 'DropdownMenu.Portal';

export const DropdownMenuTrigger = React.forwardRef<
	HTMLDivElement,
	DropdownCommonProps
>( ( { children, className, ...props }: DropdownCommonProps, ref ) => {
	if ( isValidElement( children ) ) {
		return React.cloneElement( children as React.ReactElement, {
			className: cn( className, children.props.className ),
			ref,
			...props,
		} );
	}

	return (
		<div
			ref={ ref }
			className={ cn( 'cursor-pointer', className ) }
			role="button"
			tabIndex={ 0 }
			{ ...props }
		>
			{ children }
		</div>
	);
} );

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

export const DropdownMenuItem = ( {
	children,
	as: Tag = Menu.Item,
	...props
}: DropdownMenuItemProps ) => {
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
DropdownMenu.Portal = DropdownMenuPortal;
DropdownMenu.ContentWrapper = DropdownMenuContentWrapper;

export default DropdownMenu;
