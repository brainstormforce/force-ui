import { cloneElement, Fragment, isValidElement } from 'react';
import { useDrawerState } from './drawer';
import { cn } from '@/utilities/functions';
import { X } from 'lucide-react';

// Default close button for the drawer.
const DefaultCloseButton = ( { className, ...props } ) => {
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
const DrawerCloseButton = ( { children, as: Tag = Fragment, ...props } ) => {
	const { handleClose } = useDrawerState();

	if ( ! isValidElement( children ) || ! children ) {
		return <DefaultCloseButton onClick={ handleClose } { ...props } />;
	}

	if ( Tag === Fragment ) {
		if ( typeof children === 'function' ) {
			return children( { close: handleClose } );
		}

		return cloneElement( children, {
			onClick: handleClose,
		} );
	}

	return (
		<Tag { ...props } onClick={ handleClose }>
			{ children }
		</Tag>
	);
};

export default Object.assign( DrawerCloseButton, {
	displayName: 'Drawer.CloseButton',
} );
