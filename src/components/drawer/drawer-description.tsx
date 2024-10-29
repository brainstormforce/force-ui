import { cn } from '@/utilities/functions';

export interface DrawerDescriptionProps {
	/** Description tag. */
	as?: React.ElementType;
	/** Description content. */
	children: React.ReactNode;
	/** Additional class names. */
	className?: string;
	/** Additional props. */
	[key: string]: unknown;
}

// Drawer description.
const DrawerDescription = ( {
	children,
	as: Tag = 'p',
	className,
	...props
}: DrawerDescriptionProps ) => {
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
DrawerDescription.displayName = 'Drawer.Description';

export default DrawerDescription;
