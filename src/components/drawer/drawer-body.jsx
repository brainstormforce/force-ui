import { cn } from "@/utilities/functions";

// Drawer body.
const DrawerBody = ( { children, className, ...props } ) => {
	return (
		<div className={ cn( 'px-5 flex flex-col flex-1 overflow-y-auto', className ) } { ...props }>
			{ children }
		</div>
	);
};
DrawerBody.displayName = 'Drawer.Body';

export default DrawerBody;