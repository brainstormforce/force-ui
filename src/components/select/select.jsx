import { useState, useCallback, useMemo, useReducer, useRef } from "react"
import { cn } from "../../utility/utils";
import { ChevronDown } from "lucide-react";
import {
    useFloating,
    useClick,
    useDismiss,
    useRole,
    useListNavigation,
    useInteractions,
    FloatingFocusManager,
    useTypeahead,
    offset,
    flip,
    size,
    autoUpdate,
    FloatingPortal,
  } from "@floating-ui/react";
import { createPortal } from "react-dom";

  const options = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Cyan",
    "Blue",
    "Purple",
    "Pink",
    "Maroon",
    "Black",
    "White",
  ];

const Select = ({size: sizeValue = 'md', dropdownPortalId = '', dropdownPortalRoot = null}) => {
    const inputWrapper = useRef(null);
    const mainContainer = useRef(null);

    // Dropdown position related code (Start)
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const { refs, floatingStyles, context } = useFloating({
        placement: "bottom-start",
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
          offset(5),
          flip({ padding: 10 }),
          size({
            apply({ rects, elements, availableHeight }) {
              Object.assign(elements.floating.style, {
                maxHeight: `${availableHeight}px`,
                minWidth: `${rects.reference.width}px`,
              });
            },
            padding: 10,
          }),
        ],
    });

    const listRef = useRef([]);
    const listContentRef = useRef(options);
    const isTypingRef = useRef(false);

    const click = useClick(context, { event: "mousedown" });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "listbox" });
    const listNav = useListNavigation(context, {
        listRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
        // This is a large list, allow looping.
        loop: true,
    });
    const typeahead = useTypeahead(context, {
        listRef: listContentRef,
        activeIndex,
        selectedIndex,
        onMatch: isOpen ? setActiveIndex : setSelectedIndex,
        onTypingChange(isTyping) {
            isTypingRef.current = isTyping;
        },
    });

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
        [dismiss, role, listNav, /* typeahead */, click]
    );

    const handleSelect = (index) => {
        setSelectedIndex(index);
        setIsOpen(false);
    };

    const selectedItemLabel =
        selectedIndex !== null ? options[selectedIndex] : undefined;

    // Dropdown position related code (End)

    const handleChange = useCallback((event) => {
        const value = event.target.value;
        inputWrapper.current.setAttribute('data-value', value);
    }, []);

    const handleClickMainContainer = useCallback((event) => {
        setIsOpen(true);
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
    <>
        <div
            ref={refs.setReference} 
            className={cn(
                "flex items-center justify-between border border-solid w-full box-border",
                sizeClassNames[sizeValue].mainContainer,
                colorClassNames.mainContainer,
            )}
            onClick={handleClickMainContainer} 
            aria-labelledby="select-label"
            aria-autocomplete="none"
            tabIndex={0}
            // {...getReferenceProps()}
        >
            {/* Input and selected item container */}
            <div className={cn(
                "flex-1 grid items-center justify-start gap-1.5 ",
                // 'flex flex-wrap'
            )}>
                {/* Selected items */}
                {/* Placeholder */}
                <div className="[grid-area:1/1/2/3]">Select...</div>
                {/* Input */}
                <div ref={inputWrapper} className="flex-auto text-inherit [grid-area:1/1/2/3] inline-grid grid-cols-[0px_min-content] after:content-[attr(data-value)_'_'] after:[grid-area:1/2] after:invisible after:whitespace-pre after:text-inherit after:min-w-0.5" data-value="">
                    <input
                        type="text"
                        className="text-inherit min-h-min w-full min-w-0.5 h-full bg-transparent focus:outline-none [grid-area:1/2] [font:inherit] m-0 p-0 border-0 focus:border-transparent focus:shadow-none"
                        onChange={handleChange}
                    />
                </div>
            </div>
            {/* Suffix Icon */}
            <div className={cn(
                "flex items-center [&>svg]:shrink-0",
                sizeClassNames[sizeValue].icon
            )}>
                <ChevronDown className="text-field-placeholder" />
            </div>
        </div>

        {/* Dropdown */}
        {isOpen && (
            <FloatingPortal id={dropdownPortalId} root={dropdownPortalRoot}>
                <FloatingFocusManager context={context} modal={false}>
                    <div
                        ref={refs.setFloating}
                        className={cn('box-border overflow-y-auto bg-white outline-none shadow-lg border border-solid border-border-subtle', sizeClassNames[sizeValue].dropdown)}
                        style={{
                            ...floatingStyles,
                        }}
                        {...getFloatingProps()}
                    >
                    <input type="search" name="keyword" placeholder="Search" />
                    {options.map((value, i) => (
                        <div
                            className={cn(sizeClassNames[sizeValue].dropdown)}
                            key={value}
                            ref={(node) => {
                                listRef.current[i] = node;
                            }}
                            role="option"
                            tabIndex={i === activeIndex ? 0 : -1}
                            aria-selected={i === selectedIndex && i === activeIndex}
                            style={{
                                padding: 10,
                                cursor: "default",
                                background: i === activeIndex ? "cyan" : "",
                            }}
                            {...getItemProps({
                                // Handle pointer select.
                                onClick() {
                                handleSelect(i);
                                },
                                // Handle keyboard select.
                                onKeyDown(event) {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    handleSelect(i);
                                }

                                if (event.key === " " && !isTypingRef.current) {
                                    event.preventDefault();
                                    handleSelect(i);
                                }
                                },
                            })}
                        >
                            {value}
                            <span
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    right: 10,
                                }}
                            >
                                {i === selectedIndex ? " ✓" : ""}
                            </span>
                        </div>
                    ))}
                    </div>
                </FloatingFocusManager>
            </FloatingPortal>
        )}
    </>
  )
}

export default Select