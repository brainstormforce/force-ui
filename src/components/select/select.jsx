import { useState, useCallback, useMemo, useReducer } from "react"

const Select = () => {
  return (
    <div className="flex items-center justify-between border border-solid border-field-border hover:border-border-strong focus:border-border-interactive">
        {/* Prefix Icon */}
        <div></div>
        {/* Input and selected item container */}
        <div className="flex-1 flex items-center justify-start">
            {/* Selected items */}

            {/* Input */}
            <div className="inline-grid grid-cols-[0px_min-content] after:content-[attr(data-value)_'']" data-value="">
                <input
                    type="text"
                    className="w-full min-w-0.5 h-full p-2 bg-transparent focus:outline-none [grid-area:1/2]"
                    placeholder="Select an option"
                />
            </div>
        </div>
        {/* Suffix Icon */}
        <div></div>
    </div>
  )
}

export default Select