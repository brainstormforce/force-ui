import type {
	Boundary,
	OffsetOptions,
	FloatingPortalProps,
} from '@floating-ui/react';
import {
	type MenuListProps,
	type MenuSeparatorProps,
} from '../menu-item/menu-item';
import { type ElementType, type ReactNode } from 'react';

export type HandleClose = () => void;

export interface DropdownCommonProps {
	/** Children of the component */
	children: ReactNode;
	/** Additional class name */
	className?: string;
}

export interface AdditionalProps {
	/** Additional props */
	[key: string]: unknown;
}

export interface DropdownMenuProps extends DropdownCommonProps {
	/** Defines the position of the dropdown menu. */
	placement?:
		| 'top'
		| 'right'
		| 'bottom'
		| 'left'
		| 'top-start'
		| 'top-end'
		| 'right-start'
		| 'right-end'
		| 'bottom-start'
		| 'bottom-end'
		| 'left-start'
		| 'left-end';
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
	/** Content of the dropdown menu item. */
	children: ReactNode;
	/** Tag of the dropdown menu item. Use your custom component or HTML tag if needed instead of the default `li`. */
	as?: ElementType;
	/** Click handler. */
	onClick?: () => void;
	/** Additional class name. */
	className?: string;
}

export type DropdownMenuSeparatorProps = MenuSeparatorProps;

export type DropdownMenuListProps = MenuListProps;
