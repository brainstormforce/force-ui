import { cn } from '@/utilities/functions';
import {
	comboboxDropdownClassNames,
	comboboxDropdownCommonClassNames,
	comboboxItemClassNames,
	comboboxItemCommonClassNames,
	comboboxSelectedItemClassNames,
} from '../editor-input-style';
import { ForwardedRef, forwardRef, type ReactNode } from 'react';

type ComboboxSize = 'sm' | 'md' | 'lg';

interface EditorComboboxProps {
	/** The size of the combobox. */
	size?: ComboboxSize;
	/** The class name of the combobox. */
	className?: string;
	/** The children of the combobox. */
	children?: ReactNode;
	/** Additional props to be passed to the combobox. */
	[key: string]: unknown;
}

const EditorComboboxWithoutRef = (
	{ size, className, children, ...props }: EditorComboboxProps,
	ref?: ForwardedRef<HTMLUListElement>
) => (
	<ul
		role="menu"
		ref={ ref }
		className={ cn(
			comboboxDropdownCommonClassNames,
			comboboxDropdownClassNames[ size as ComboboxSize ],
			className
		) }
		{ ...props }
	>
		{ children }
	</ul>
);
const EditorCombobox = forwardRef<HTMLUListElement, EditorComboboxProps>(
	EditorComboboxWithoutRef
);

EditorCombobox.displayName = 'EditorCombobox';

interface EditorComboboxItemProps extends React.HTMLAttributes<HTMLLIElement> {
	/** The size of the combobox item. */
	size: 'sm' | 'md' | 'lg';
	/** The class name of the combobox item. */
	className?: string;
	/** The children of the combobox item. */
	children: ReactNode;
	/** Whether the combobox item is selected. */
	selected?: boolean;
}

type Ref = HTMLLIElement;

const EditorComboboxItem = forwardRef<Ref, EditorComboboxItemProps>(
	( { size, children, selected = false, className, ...props }, ref ) => (
		<li
			role="option"
			ref={ ref }
			className={ cn(
				comboboxItemCommonClassNames,
				comboboxItemClassNames[ size ],
				selected && comboboxSelectedItemClassNames,
				className
			) }
			{ ...props }
		>
			{ children }
		</li>
	)
);
EditorComboboxItem.displayName = 'EditorCombobox.Item';

const WithItem = Object.assign( EditorCombobox, {
	Item: EditorComboboxItem,
} );

export { WithItem as default };
