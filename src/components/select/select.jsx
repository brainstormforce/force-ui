import { useState, useCallback, useMemo, useReducer, useRef } from "react"

const Select = ({}) => {
    const inputWrapper = useRef(null);

    const handleChange = useCallback((event) => {
        const value = event.target.value;
        inputWrapper.current.setAttribute('data-value', value);
    }, []);

    const sizeClassNames = {
        sm: {
            icon: 'size-4 pl-1.5 pr-2 py-1.5',

        },
        md: {},
        lg: {},
    }

  return (
    <div className="flex items-center justify-between border border-solid border-field-border hover:border-border-strong focus:border-border-interactive">
        {/* Prefix Icon */}
        <div></div>
        {/* Input and selected item container */}
        <div className="flex-1 flex items-center justify-start">
            {/* Selected items */}
            <div className="h-full w-auto px-2 py-1.5 bg-background-secondary rounded-sm">
                Option 1
            </div>
            {/* Input */}
            <div ref={inputWrapper} className="inline-grid grid-cols-[0px_min-content] after:content-[attr(data-value)_'_'] after:[grid-area:1/2] after:invisible after:whitespace-pre after:text-inherit after:min-w-0.5" data-value="">
                <input
                    type="text"
                    className="w-full min-w-0.5 h-full bg-transparent focus:outline-none [grid-area:1/2] [font:inherit] m-0 p-0 border-0 focus:border-transparent focus:shadow-none"
                    onChange={handleChange}
                />
            </div>
        </div>
        {/* Suffix Icon */}
        <div></div>
    </div>
  )
}

export default Select