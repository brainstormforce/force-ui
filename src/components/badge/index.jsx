import { twMerge } from "tailwind-merge";
import { X } from 'lucide-react';

const Badge = (props) => {
    const {
        label = "",
        size = "sm", // xs, sm, md, lg
        className = "",
        type = "pill", // pill, rounded
        variant = "neutral", // neutral, red, yellow, green, blue, inverse
        icon = null,
        onClose = () => {},
    } = props;

    let baseClasses = 'bg-badge-background-gray hover:bg-badge-hover-gray text-badge-color-gray font-medium border border-badge-border-gray flex gap-x-0.5 items-center';
    const sizeClasses = {
        xs: 'py-0.5 px-1 text-xs',
        sm: 'py-1 px-1.5 text-xs',
        md: 'py-1 px-1.5 text-sm',
        lg: 'py-1 px-1.5 text-base',
    };

    const typeClasses = {
        sm: 'px-3 py-1.5 rounded text-xs',
        md: 'px-3 rounded-md text-sm',
        lg: 'px-4 rounded-lg text-base',
    };

    const variantClasses = {
        sm: 'px-3 rounded text-xs',
        md: 'px-3 rounded-md text-sm',
        lg: 'px-4 rounded-lg text-base',
    };

    const hoverClasses = 'hover:border-strong';
    const focusClasses = 'focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
    // const errorClasses = error ? 'focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error' : "";
    // const disabledClasses = disabled ? 'border-field-border-disabled bg-field-background-disabled cursor-not-allowed' : '';

    return (
        <span className={twMerge( baseClasses,  sizeClasses[size]) }>
            {/* <span className="group relative">
                <span className="sr-only">Remove</span>
                <svg viewBox="0 0 14 14" className="">
                    <path d="M4 4l6 6m0-6l-6 6" />
                </svg>
                <span className="absolute -inset-1" />
            </span> */}
            {label}
            <span className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20">
                <span className="sr-only">Remove</span>
                <X />
                <span className="absolute -inset-1" />
            </span>
        </span>
        // <div className={twMerge( baseClasses, disabledClasses, sizeClasses[size], focusClasses, hoverClasses, errorClasses, className )}>
        //     <span>

        //     </span>
        //     <span>{label}</span>
        // </div>
    );
};

export default Badge;