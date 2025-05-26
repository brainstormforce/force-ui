export const editableContentAreaCommonClassNames =
	'w-full [&>p]:w-full [&>p]:m-0';

export const editorCommonClassNames =
	'focus-within:ring-2 focus-within:ring-offset-2 hover:outline-border-strong hover:focus-within:outline-focus-border focus-within:outline-focus-border focus-within:ring-focus transition-[color,outline,box-shadow] duration-150 ease-in-out outline outline-1 outline-field-border';

export const editorDisabledClassNames =
	'bg-field-secondary-background outline-field-border-disabled hover:outline-field-border-disabled [&_p]:text-badge-color-disabled cursor-not-allowed';

export const editorInputClassNames = {
	sm: 'px-3 py-1.5 rounded [&_.editor-content>p]:text-xs [&_.editor-content>p]:font-normal [&_.pointer-events-none]:text-xs [&_.pointer-events-none]:font-normal [&_.editor-content>p]:content-center [&_.editor-content>p]:min-h-5',
	md: 'px-3.5 py-2 rounded-md [&_.editor-content>p]:text-sm [&_.editor-content>p]:font-normal [&_.pointer-events-none]:text-sm [&_.pointer-events-none]:font-normal [&_.editor-content>p]:content-center [&_.editor-content>p]:min-h-6',
	lg: 'px-4 py-2.5 rounded-md [&_.editor-content>p]:text-base [&_.editor-content>p]:font-normal [&_.pointer-events-none]:text-base [&_.pointer-events-none]:font-normal [&_.editor-content>p]:content-center [&_.editor-content>p]:min-h-7',
};

export const comboboxDropdownCommonClassNames =
	'absolute inset-x-0 top-full m-0 w-full h-auto overflow-y-auto overflow-x-hidden z-10 bg-background-primary border border-solid border-border-subtle shadow-lg list-none';

export const comboboxDropdownClassNames = {
	sm: 'p-1.5 rounded-md max-h-[10.75rem]',
	md: 'p-2 rounded-lg max-h-[13.5rem]',
	lg: 'p-2 rounded-lg max-h-[13.5rem]',
};

export const comboboxItemCommonClassNames =
	'm-0 text-text-primary cursor-pointer';

export const comboboxItemClassNames = {
	sm: 'p-1.5 rounded text-xs leading-5 font-normal',
	md: 'p-2 rounded-md text-sm leading-6 font-normal',
	lg: 'p-2 rounded-md text-base leading-6 font-normal',
};

export const comboboxSelectedItemClassNames = 'bg-button-tertiary-hover';
