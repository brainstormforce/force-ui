import { cn } from '@/utilities/functions';

// Drawer description.
const DrawerDescription = ( {
	children,
	as: Tag = 'p',
	className,
	...props
} ) => {
	return (
		<Tag
			className={ cn(
				'text-sm font-normal text-text-secondary my-0 ml-0 mr-1 p-0',
				className
			) }
			{ ...props }
		>
			{ children }
		</Tag>
	);
};

export default Object.assign( DrawerDescription, {
	displayName: 'Drawer.Description',
} );
