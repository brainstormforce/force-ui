export const editableContentAreaCommonClassNames = 'w-full min-h-[1.625rem] [&>p]:w-full [&>p]:m-0';

export const editorCommonClassNames = 'border border-solid focus-within:ring-2 focus-within:ring-offset-2 border-field-border hover:border-border-strong focus-within:!border-focus-border focus-within:ring-focus transition duration-150 ease-in-out';

export const editorDisabledClassNames = 'bg-field-secondary-background border-field-border-disabled hover:border-field-border-disabled [&_p]:text-badge-color-disabled cursor-not-allowed';

export const editorInputClassNames = {
	sm: 'py-1.5 px-2 rounded [&_.editor-content>p]:text-sm [&_.editor-content>p]:font-medium [&_.editor-content>p]:leading-[1.625rem]',
	md: 'py-2 px-2.5 rounded-md [&_.editor-content>p]:text-sm [&_.editor-content>p]:font-medium [&_.editor-content>p]:leading-[1.625rem]',
	lg: 'py-2.5 px-3 rounded-md [&_.editor-content>p]:text-sm [&_.editor-content>p]:font-medium [&_.editor-content>p]:leading-[1.6875rem]',
};

export const comboboxDropdownCommonClassNames = 'absolute inset-x-0 top-full mt-2 mx-0 mb-0 w-full h-auto overflow-y-auto overflow-x-hidden z-10 bg-background-primary border border-solid border-border-subtle shadow-lg';

export const comboboxDropdownClassNames = {
	sm: 'p-1.5 rounded-md max-h-[10.75rem]',
	md: 'p-2 rounded-lg max-h-[13.5rem]',
	lg: 'p-2 rounded-lg max-h-[13.5rem]',
};

export const comboboxItemCommonClassNames = 'm-0 text-text-primary cursor-pointer';

export const comboboxItemClassNames = {
	sm: 'p-1.5 rounded text-sm leading-5 font-normal',
	md: 'p-2 rounded-md text-base leading-6 font-normal',
	lg: 'p-2 rounded-md text-base leading-6 font-normal',
};

export const comboboxSelectedItemClassNames = 'bg-button-tertiary-hover';
