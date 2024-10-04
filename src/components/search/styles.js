export const textSizeClassNames = {
    sm: 'text-xs [&>svg]:size-4 rounded',
    md: 'text-sm [&>svg]:size-5 rounded-md',
    lg: 'text-base [&>svg]:size-6 rounded-md',
};

export const sizeClassNames = {
    sm: 'py-1.5 px-2 rounded',
    md: 'py-2.5 px-2.5 rounded-md',
    lg: 'py-3 px-3 rounded-md',
}
export const variantClassNames = {
    primary: 'border border-solid border-border-subtle bg-field-primary-background',
    secondary: 'border border-solid border-border-subtle bg-field-secondary-background',
    ghost: 'text-text-secondary bg-transparent border border-transparent',
};

export const IconClasses = 'z-20 pointer-events-none absolute inset-y-0 flex flex-1 items-center justify-center bg-field-secondary-background text-text-secondary group-hover:text-text-primary'

export const hoverClassNames = {
    enabled: 'hover:border-border-strong text-text-primary',
    disabled: 'hover:border-border-disabled',
};

export const focusClassNames =
    'focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';

export const disabledClassNames = 'border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled';

export const baseClassNames = 'font-normal placeholder-text-tertiary text-text-secondary w-full focus:outline-none';
