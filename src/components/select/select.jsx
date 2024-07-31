import { useState, useCallback, useMemo, useReducer, useRef } from "react"
import { cn } from "../../utility/utils";
import { ChevronDown } from "lucide-react";

const Select = ({size = 'md'}) => {
    const inputWrapper = useRef(null);
    const mainContainer = useRef(null);

    const handleChange = useCallback((event) => {
        const value = event.target.value;
        inputWrapper.current.setAttribute('data-value', value);
    }, []);

    const handleClickMainContainer = useCallback((event) => {
        inputWrapper.current.querySelector('input').focus();
    }, []);

    const sizeClassNames = {
        sm: {
            icon: '[&>svg]:size-3',
            mainContainer: 'pl-1.5 pr-2 py-1.5 rounded text-xs font-medium leading-4',
            dropdown: 'p-1.5 rounded-md',
            dropdownItem: 'py-1.5 px-2 text-sm font-normal',
        },
        md: {
            icon: '[&>svg]:size-3',
            mainContainer: 'pl-2 pr-2.5 py-2 rounded-md text-xs font-medium leading-4',
            dropdown: 'p-2 rounded-lg',
            dropdownItem: 'p-2 text-base font-normal',
        },
        lg: {
            icon: '[&>svg]:size-4',
            mainContainer: 'pl-3 py-3 pr-3.5 rounded-lg text-sm font-medium leading-5',
            dropdown: 'p-2 rounded-lg',
            dropdownItem: 'p-2 text-base font-normal',
        },
    }

    const colorClassNames = {
        mainContainer: 'border border-solid border-field-border [&:hover:not(:focus-within)]:border-border-strong focus-within:border-focus-border focus-within:ring-2 focus-within:ring-offset-4 focus-within:ring-focus'
    }

  return (
    <div
        ref={mainContainer} 
        className={cn(
            "flex items-center justify-between border border-solid w-full box-border",
            sizeClassNames[size].mainContainer,
            colorClassNames.mainContainer,
        )}
        onClick={handleClickMainContainer} 
    >
        {/* Input and selected item container */}
        <div className={cn(
            "flex-1 grid items-center justify-start gap-1.5 ",
            // 'flex flex-wrap'
        )}>
            {/* Selected items */}
            <div className="h-full w-auto px-2 py-1.5 bg-background-secondary rounded-sm">
                Option 1
            </div>
            {/* Placeholder */}
            <div className="[grid-area:1/1/2/3] mx-0.5">Select...</div>
            {/* Input */}
            <div ref={inputWrapper} className="flex-auto [grid-area:1/1/2/3] inline-grid grid-cols-[0px_min-content] after:content-[attr(data-value)_'_'] after:[grid-area:1/2] after:invisible after:whitespace-pre after:text-inherit after:min-w-0.5" data-value="">
                <input
                    type="text"
                    className="w-full min-w-0.5 h-full bg-transparent focus:outline-none [grid-area:1/2] [font:inherit] m-0 p-0 border-0 focus:border-transparent focus:shadow-none"
                    onChange={handleChange}
                />
            </div>
        </div>
        {/* Suffix Icon */}
        <div className={cn(
            "flex items-center",
            sizeClassNames[size].icon
        )}>
            <ChevronDown className="text-field-placeholder" />
        </div>

        {/* Dropdown */}
        <div className={cn(sizeClassNames[size].dropdown)}>
            <div className={cn(sizeClassNames[size].dropdown)}>Item 1</div>
        </div>
    </div>
  )
}

export default Select