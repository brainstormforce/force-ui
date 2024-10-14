import { cloneElement, Fragment, isValidElement } from 'react';
import { useDrawerState } from './drawer';
import { cn } from '@/utilities/functions';
import { X } from 'lucide-react';

interface CommonProps {
	/** Additional class names. */
	className?: string;
	/** Additional props. */
	[key: string]: any;
}

export interface DrawerDefaultCloseButtonProps extends CommonProps {
	/** Click handler. */
	onClick: () => void;
}

export interface DrawerCloseButtonProps extends CommonProps {
	/** Button content. */
	children?: React.ReactNode | (( { close }: { close: () => void } ) => React.ReactNode);
	/** Button tag. */
	as?: React.ElementType;
}

// Default close button for the drawer.
const DefaultCloseButton = ( { className, ...props }: DrawerDefaultCloseButtonProps ) => {
	return (
		<button
			className={ cn(
				'bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none outline-none shadow-none',
				className
			) }
			aria-label="Close drawer"
			{ ...props }
		>
			<X className="size-4 text-text-primary shrink-0" />
		</button>
	);
};

// Close button for the drawer.
const DrawerCloseButton = ( { children, as: Tag = Fragment, ...props }: DrawerCloseButtonProps ) => {
	const { handleClose } = useDrawerState();

	if ( ! children ) {
		return <DefaultCloseButton onClick={ handleClose! } { ...props } />;
	}

	if ( Tag === Fragment ) {
		if ( typeof children === 'function' ) {
			return children( { close: handleClose! } );
		}

		if ( ! isValidElement( children ) ) {
			return <DefaultCloseButton onClick={ handleClose! } { ...props } />;
		}
		return cloneElement( children as React.ReactElement, {
			onClick: handleClose
		} );
	}

	return (
		<Tag { ...props } onClick={ handleClose }>
			{ children }
		</Tag>
	);
};

DrawerCloseButton.displayName = 'Drawer.CloseButton';

export default DrawerCloseButton
