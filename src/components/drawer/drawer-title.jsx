import { cn } from "@/utilities/functions";

// Drawer title.
const DrawerTitle = ( { children, as: Tag = 'h3', className, ...props } ) => {
	return (
		<Tag
			className={ cn(
				'text-base font-semibold text-text-primary m-0 p-0',
				className
			) }
			{ ...props }
		>
			{ children }
		</Tag>
	);
};
DrawerTitle.displayName = 'Drawer.Title';

export default DrawerTitle;