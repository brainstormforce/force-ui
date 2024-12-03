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

export interface DropdownPortalProps extends DropdownCommonProps {
	/**
	 * The ID of the portal where the dropdown will be rendered.
	 * @default undefined
	 */
	id?: FloatingPortalProps['id'];

	/**
	 * The root element where the dropdown will be rendered.
	 * @default undefined
	 */
	root?: FloatingPortalProps['root'];
}

export type DropdownMenuSeparatorProps = MenuSeparatorProps;

export type DropdownMenuListProps = MenuListProps;
