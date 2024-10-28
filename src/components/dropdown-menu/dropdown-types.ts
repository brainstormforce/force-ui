import Menu from '../menu-item';
import type {
	Placement,
	Boundary,
	OffsetOptions,
	FloatingPortalProps,
} from '@floating-ui/react';

export type HandleClose = () => void;

export interface DropdownCommonProps {
	/** Children of the component */
	children: React.ReactNode;
	/** Additional class name */
	className?: string;
}

export interface AdditionalProps {
	/** Additional props */
	[key: string]: unknown;
}

export interface DropdownMenuProps extends DropdownCommonProps {
	/** Defines the position of the dropdown menu. */
	placement?: Placement;
	/** Defines the offset of the dropdown menu. */
	offset?: OffsetOptions;
	/** Defines the boundary of the dropdown menu. */
	boundary?: Boundary;
	/** Defines the trigger element of the dropdown menu. */
	dropdownPortalRoot?: FloatingPortalProps['root'];
	/** Defines the trigger element of the dropdown menu. */
	dropdownPortalId?: FloatingPortalProps['id'];
	/** Additional class name */
	className?: string;
}

export interface DropdownMenuItemProps {
	children: React.ReactNode;
	as?: React.ElementType;
    onClick?: () => void;
}

export type DropdownMenuSeparatorProps = React.ComponentProps<typeof Menu.Separator>

export type DropdownMenuListProps = React.ComponentProps<typeof Menu.List>
