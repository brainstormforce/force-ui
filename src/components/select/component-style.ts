export const sizeClassNames = {
	sm: {
		icon: '[&>svg]:size-4',
		searchIcon: '[&>svg]:size-4',
		selectButton:
			'px-2.5 py-2 rounded text-xs font-medium leading-4 min-h-[2rem]',
		multiSelect: 'pl-2 pr-2 py-1.5',
		displaySelected: 'text-xs font-normal',
		dropdown: 'rounded-md',
		dropdownItemsWrapper: 'p-1.5',
		searchbarWrapper: 'p-3 flex items-center gap-0.5',
		searchbar: 'font-medium text-sm',
		searchbarIcon: 'size-4',
		label: 'text-sm font-medium',
	},
	md: {
		icon: '[&>svg]:size-5',
		searchIcon: '[&>svg]:size-5',
		selectButton:
			'px-3.5 py-2.5 rounded-md text-sm font-medium leading-4 min-h-[2.5rem]',
		multiSelect: 'pl-2 pr-2.5 py-2',
		displaySelected: 'text-sm font-normal',
		dropdown: 'rounded-lg',
		dropdownItemsWrapper: 'p-2',
		searchbarWrapper: 'p-2.5 flex items-center gap-1',
		searchbar: 'font-medium text-sm',
		searchbarIcon: 'size-5',
		label: 'text-sm font-medium',
	},
	lg: {
		icon: '[&>svg]:size-6',
		searchIcon: '[&>svg]:size-5',
		selectButton:
			'px-4 py-3 rounded-lg text-sm font-medium leading-5 min-h-[3rem]',
		multiSelect: 'pl-2.5 pr-3 py-2.5',
		displaySelected: 'text-base font-normal',
		dropdown: 'rounded-lg',
		dropdownItemsWrapper: 'p-2',
		searchbarWrapper: 'p-2.5 flex items-center gap-1',
		searchbar: 'font-medium text-sm',
		searchbarIcon: 'size-5',
		label: 'text-base font-medium',
	},
};

export const disabledClassNames = {
	selectButton:
		'group disabled:outline-field-border-disabled [&:hover:has(:disabled)]:outline-field-border-disabled disabled:cursor-default',
	icon: 'group-disabled:text-icon-disabled',
	text: 'group-disabled:text-field-color-disabled',
};

export const optionGroupDividerClassNames =
	'h-px my-2 w-full border-border-subtle border-b border-t-0 border-solid';
export const optionGroupDividerSizeClassNames = {
	sm: 'w-[calc(100%+0.75rem)] translate-x-[-0.375rem]',
	md: 'w-[calc(100%+1rem)] translate-x-[-0.5rem]',
	lg: 'w-[calc(100%+1rem)] translate-x-[-0.5rem]',
};

export const selectItemClassNames = {
	sm: 'py-1.5 px-2 text-xs font-normal',
	md: 'p-2 text-sm font-normal',
	lg: 'p-2 text-base font-normal',
};
