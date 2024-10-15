export const editableContentAreaCommonClassNames =
	'w-full min-h-[1.625rem] [&>p]:w-full [&>p]:m-0';

export const editorCommonClassNames =
	'border border-solid focus-within:ring-2 focus-within:ring-offset-2 border-field-border hover:border-border-strong focus-within:!border-focus-border focus-within:ring-focus transition duration-150 ease-in-out';

export const editorDisabledClassNames =
	'bg-field-secondary-background border-field-border-disabled hover:border-field-border-disabled [&_p]:text-badge-color-disabled cursor-not-allowed';

export const editorInputClassNames = {
	xs: 'py-1 px-2 pr-2 rounded [&_.editor-content>p]:text-xs [&_.editor-content>p]:font-normal [&_.editor-content>p]:leading-[1.5rem]  [&_.pointer-events-none]:text-xs [&_.pointer-events-none]:font-normal [&_.pointer-events-none]:leading-[1.5rem]',
	sm: 'px-3 py-2 rounded [&_.editor-content>p]:text-xs [&_.editor-content>p]:font-medium [&_.editor-content>p]:leading-[1.625rem] [&_.pointer-events-none]:text-xs [&_.pointer-events-none]:font-medium [&_.pointer-events-none]:leading-[1.625rem]',
	md: 'px-3.5 py-2.5 rounded-md [&_.editor-content>p]:text-sm [&_.editor-content>p]:font-medium [&_.editor-content>p]:leading-[1.625rem] [&_.pointer-events-none]:text-sm [&_.pointer-events-none]:font-medium [&_.pointer-events-none]:leading-[1.625rem]',
	lg: 'px-4 py-3 rounded-md [&_.editor-content>p]:text-base [&_.editor-content>p]:font-medium [&_.editor-content>p]:leading-[1.6875rem] [&_.pointer-events-none]:text-base [&_.pointer-events-none]:font-medium [&_.pointer-events-none]:leading-[1.6875rem]',
};

export const comboboxDropdownCommonClassNames =
	'absolute inset-x-0 top-full mt-2 mx-0 mb-0 w-full h-auto overflow-y-auto overflow-x-hidden z-10 bg-background-primary border border-solid border-border-subtle shadow-lg';

export const comboboxDropdownClassNames = {
	xs: 'p-1 rounded-md max-h-[8.75rem]',
	sm: 'p-1.5 rounded-md max-h-[10.75rem]',
	md: 'p-2 rounded-lg max-h-[13.5rem]',
	lg: 'p-2 rounded-lg max-h-[13.5rem]',
};

export const comboboxItemCommonClassNames =
	'm-0 text-text-primary cursor-pointer';

export const comboboxItemClassNames = {
	xs: 'p-1 rounded text-xs leading-4 font-normal',
	sm: 'p-1.5 rounded text-xs leading-5 font-normal',
	md: 'p-2 rounded-md text-sm leading-6 font-normal',
	lg: 'p-2 rounded-md text-base leading-6 font-normal',
};

export const comboboxSelectedItemClassNames = 'bg-button-tertiary-hover';
