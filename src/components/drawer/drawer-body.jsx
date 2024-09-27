import { cn } from "@/utilities/functions";

// Drawer body.
const DrawerBody = ( { children, className, ...props } ) => {
	return (
		<div className={ cn( 'px-5 flex flex-col flex-1 overflow-y-auto overflow-x-hidden', className ) } { ...props }>
			{ children }
		</div>
	);
};

export default Object.assign(DrawerBody, {
    displayName: 'Drawer.Body',
});