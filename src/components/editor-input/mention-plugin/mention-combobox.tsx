import { cn } from '@/utilities/functions';
import {
	comboboxDropdownClassNames,
	comboboxDropdownCommonClassNames,
	comboboxItemClassNames,
	comboboxItemCommonClassNames,
	comboboxSelectedItemClassNames,
} from '../editor-input-style';
import { forwardRef } from 'react';

interface EditorComboboxProps {
	/** The size of the combobox. */
	size: 'xs' | 'sm' | 'md' | 'lg';
	/** The class name of the combobox. */
	className?: string;
	/** The children of the combobox. */
	children: React.ReactNode;
}

const EditorCombobox = ( { size, className, children }: EditorComboboxProps ) => (
	<ul
		role="menu"
		className={ cn(
			comboboxDropdownCommonClassNames,
			comboboxDropdownClassNames[ size ],
			className
		) }
	>
		{ children }
	</ul>
);

EditorCombobox.displayName = 'EditorCombobox';

interface EditorComboboxItemProps extends React.HTMLAttributes<HTMLLIElement> {
	/** The size of the combobox item. */
	size: 'xs' | 'sm' | 'md' | 'lg';
	/** The class name of the combobox item. */
	className?: string;
	/** The children of the combobox item. */
	children: React.ReactNode;
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

EditorCombobox.Item = EditorComboboxItem;

export default EditorCombobox;
