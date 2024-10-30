import type {
	UseFloatingReturn,
	UseInteractionsReturn,
} from '@floating-ui/react';

export type SelectOptionValue = string | number | Record<string, unknown>;

export type SelectFunctionChildren = ( {
	value,
	onClose,
}: {
	value: SelectOptionValue;
	onClose?: (
		optionValue: SelectOptionValue
	) => ( event: React.MouseEvent<HTMLElement> ) => void;
} ) => React.JSX.Element;

export type MultiTypeChildren =
	| React.ReactElement
	| React.ReactNode
	| SelectFunctionChildren;

export type OnClick = ( index: number, value: SelectOptionValue ) => void;

export type OnKeyDown = (
	event: React.KeyboardEvent<unknown>,
	index: number,
	value: SelectOptionValue
) => void;

export type SelectSizes = 'sm' | 'md' | 'lg';

export type SelectContextValueTypes = {
	selected: unknown;
	setSelected: ( selected: unknown ) => void;
	multiple: boolean;
	combobox: boolean;
	disabled: boolean;
	size: SelectSizes;
	by: string;
	displayBy: string;
};

type ConditionalProps = {
	/** Multi select mode. */
	multiple?: boolean;
	/** Defines the width of the Select Component. */
	value: SelectOptionValue | SelectOptionValue[];
	/** onChange event to be triggered when the value of the Select Component changes. */
	onChange: ( value: SelectOptionValue | SelectOptionValue[] ) => void;
	/** Defines the default value of the Select Component. */
	defaultValue?: SelectOptionValue | SelectOptionValue[];
};

export type SelectGetValues = () => SelectOptionValue | SelectOptionValue[];

export type SelectProps = {
	/** Select Component unique ID. */
	id?: string;
	/** Defines the size of the Select Component. */
	size?: SelectSizes;
	/** When the value is an object, a key is required to compare the selected value. The default value is `id`. */
	by?: string;
	/** Expects the `Select.Portal`/`Select.Options` and `Select.Button` children of the Select Component. */
	children?: React.ReactNode;
	/** Combobox mode. */
	combobox?: boolean;
	/** Disables the Select Component. */
	disabled?: boolean;
} & ConditionalProps;

export interface SelectPortalProps {
	/** Expects the `Select.Options` children of the Select.Portal Component. */
	children?: React.ReactNode;
	/**
	 * Root element where the `Select.Options` will be rendered.  If not provided Select.Options will be rendered in the body.
	 */
	root?: HTMLElement;
	/**
	 * Root element ID where the `Select.Options` will be rendered. If not provided Select.Options will be rendered in the body.
	 */
	id?: string;
}

export interface SelectButtonProps {
	/** Expects the `Select.Button` children of the Select Component. */
	children?: MultiTypeChildren;
	/** Option Icon to show at the right of the option trigger/button. By default it will show chevron down icon. */
	icon?: React.ReactNode | null;
	/** Placeholder text when no option is selected. */
	placeholder?: string;
	/** Icon to show in the selected option badge (Multi-select mode only). By default it won't show unknown icon. */
	optionIcon?: React.ReactNode | null;
	/** Key to display selected item when the selected value is an object. Default value is `name`. */
	displayBy?: string;
	/** Label for the Select component. */
	label?: string;
	/** Additional class name for the Select Button. */
	className?: string;
}

export interface SelectOptionsProps {
	/** Expects the `Select.Option` children of the Select.Options Component. */
	children?: React.ReactNode;
	/** Key used to identify searched value using the key. Default is 'id'. */
	searchBy?: string;
	/** Placeholder text for search box. */
	searchPlaceholder?: string;
	/** Additional class name for the Select Options wrapper. */
	className?: string;
}

export interface SelectOptionProps {
	/** Value of the option. */
	value: SelectOptionValue;
	/** Selected state of the option. */
	selected?: boolean;
	/** Expects the `Select.Option` children of the Select Component. */
	children?: React.ReactNode;
	/** Additional class name for the Select Option. */
	className?: string;
	/** Additional Props */
	[key: string]: unknown;
}

export type SelectContextValue = {
	selectedIndex: number | null;
	setSelectedIndex: ( index: number ) => void;
	activeIndex: number | null;
	setActiveIndex: ( index: number ) => void;
	selected: SelectOptionValue | SelectOptionValue[];
	setSelected: ( selected: SelectOptionValue ) => void;
	handleSelect: OnClick;
	combobox: boolean;
	sizeValue: SelectSizes;
	multiple: boolean;
	// onChange?: ( value: SelectOptionValue ) => void;
	isTypingRef: React.MutableRefObject<boolean>;
	onClickItem: OnClick;
	onKeyDownItem: OnKeyDown;
	getValues: SelectGetValues;
	selectId: string;
	isOpen: boolean;
	updateListRef: ( index: number, node: HTMLElement ) => void;
	refs: UseFloatingReturn['refs'];
	listContentRef: React.MutableRefObject<unknown[]>;
	by: string;
	setSearchKeyword: ( keyword: string ) => void;
	disabled: boolean;
	isControlled: boolean;
	// value?: SelectOptionValue;
	getItemProps: UseInteractionsReturn['getItemProps'];
	getReferenceProps: UseInteractionsReturn['getReferenceProps'];
	getFloatingProps: UseInteractionsReturn['getFloatingProps'];
	floatingStyles: UseFloatingReturn['floatingStyles'];
	context: UseFloatingReturn['context'];
	searchKeyword: string;
} & ConditionalProps;
