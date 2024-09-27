import { cn } from '@/utilities/functions';

// Drawer header wrapper.
const DrawerHeader = ( { children, className, ...props } ) => {
	return <div className={ cn( 'space-y-2 px-5 pt-5 pb-1', className ) } { ...props }>{ children }</div>;
};

export default Object.assign( DrawerHeader, {
	displayName: 'Drawer.Header',
} );
