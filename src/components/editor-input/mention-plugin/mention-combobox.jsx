import { cn } from '@/utilities/functions';
import {
	comboboxDropdownClassNames,
	comboboxDropdownCommonClassNames,
	comboboxItemClassNames,
	comboboxItemCommonClassNames,
	comboboxSelectedItemClassNames,
} from '../editor-input-style';
import { forwardRef } from 'react';

const EditorComboboxWrapper = ( { size, className, children } ) => (
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

const EditorComboboxItem = forwardRef(
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
EditorComboboxItem.displayName = 'Item';

const EditorCombobox = Object.assign( EditorComboboxWrapper, {
	Item: EditorComboboxItem,
} );

export default EditorCombobox;
