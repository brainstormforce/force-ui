import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingList,
    FloatingNode,
    FloatingPortal,
    FloatingTree,
    offset,
    safePolygon,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useFloatingNodeId,
    useFloatingParentNodeId,
    useFloatingTree,
    useHover,
    useInteractions,
    useListItem,
    useListNavigation,
    useMergeRefs,
    useRole,
    useTypeahead
} from "@floating-ui/react";
import React from "react";
import { cn } from '@/utilities/functions';

const MenuContext = React.createContext({
    getItemProps: () => ({}),
    activeIndex: null,
    setActiveIndex: () => { },
    clickedIndex: null,  // New state for clicked item
    setClickedIndex: () => { },
    setHasFocusInside: () => { },
    isOpen: false
});

const MenuComponent = React.forwardRef((props, forwardedRef) => {
    const { 
        children, 
        label, 
        dropdownPortalRoot, 
        dropdownPortalId, 
        beforeIcon, 
        afterIcon,
        placement = "bottom-start",
        className,
        ...restProps 
    } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const [hasFocusInside, setHasFocusInside] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [clickedIndex, setClickedIndex] = React.useState(null);

    const elementsRef = React.useRef([]);
    const labelsRef = React.useRef([]);
    const parent = React.useContext(MenuContext);

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const item = useListItem();

    const isNested = parentId != null;

    const { floatingStyles, refs, context } = useFloating({
        nodeId,
        open: isOpen,
        onOpenChange: setIsOpen,
        // placement: isNested ? "right-start" : "bottom-start",
        placement: isNested ? placement : placement,
        middleware: [
            offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
            flip(),
            shift()
        ],
        whileElementsMounted: autoUpdate
    });

    // const hover = useHover(context, {
    //     enabled: isNested,
    //     delay: { open: 75 },
    //     handleClose: safePolygon({ blockPointerEvents: true })
    // });

    // const click = useClick(context, {
    //     event: "mousedown",
    //     toggle: !isNested,
    //     ignoreMouse: isNested
    // });

    const click = useClick(context, {
        event: "mousedown",
        toggle: true,
        ignoreMouse: false
    });

    const role = useRole(context, { role: "menu" });
    const dismiss = useDismiss(context, { bubbles: true });
    const listNavigation = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex,
        nested: isNested,
        onNavigate: setActiveIndex
    });

    const typeahead = useTypeahead(context, {
        listRef: labelsRef,
        onMatch: isOpen ? setActiveIndex : undefined,
        activeIndex
    });

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
        // hover,
        click,
        role,
        dismiss,
        listNavigation,
        typeahead
    ]);

    React.useEffect(() => {
        if (!tree) return;

        function handleTreeClick() {
            setIsOpen(false);
        }

        function onSubMenuOpen(event) {
            if (event.nodeId !== nodeId && event.parentId === parentId) {
                setIsOpen(false);
            }
        }

        tree.events.on("click", handleTreeClick);
        tree.events.on("menuopen", onSubMenuOpen);

        return () => {
            tree.events.off("click", handleTreeClick);
            tree.events.off("menuopen", onSubMenuOpen);
        };
    }, [tree, nodeId, parentId]);

    React.useEffect(() => {
        if (isOpen && tree) {
            tree.events.emit("menuopen", { parentId, nodeId });
        }
    }, [tree, isOpen, nodeId, parentId]);

    return (
        <FloatingNode id={nodeId}>
            <button
                ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
                tabIndex={!isNested ? undefined : parent.activeIndex === item.index ? 0 : -1}
                role={isNested ? "menuitem" : undefined}
                data-open={isOpen ? "" : undefined}
                data-nested={isNested ? "" : undefined}
                data-focus-inside={hasFocusInside ? "" : undefined}
                className={isNested ? cn("flex justify-between items-center bg-white w-full border-none rounded-md shadow-md text-base text-left leading-loose min-w-[110px] m-0 outline-none", className) : ""}
                {...getReferenceProps(
                    parent.getItemProps({
                        ...restProps,
                        onFocus(event) {
                            restProps.onFocus?.(event);
                            setHasFocusInside(false);
                            parent.setHasFocusInside(true);
                        }
                    })
                )}
            >
                {isNested && beforeIcon && (
                    <span aria-hidden style={{ marginRight: 10, fontSize: 10 }}>
                        {beforeIcon}
                    </span>
                )}
                {label}
                {isNested && afterIcon && (
                    <span aria-hidden style={{ marginLeft: 10, fontSize: 10 }}>
                        {afterIcon}
                    </span>
                )}
            </button>
            <MenuContext.Provider
                value={{
                    activeIndex,
                    setActiveIndex,
                    clickedIndex,        
                    setClickedIndex,      
                    getItemProps,
                    setHasFocusInside,
                    isOpen
                }}
            >
                <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                    {isOpen && (
                        <FloatingPortal id={dropdownPortalId} root={dropdownPortalRoot}>
                            <FloatingFocusManager
                                context={context}
                                modal={false}
                                initialFocus={isNested ? -1 : 0}
                                returnFocus={!isNested}
                            >
                                <div
                                    ref={refs.setFloating}
                                    className="p-1.5 rounded-md border border-solid border-border-subtle bg-background-primary shadow-soft-shadow-lg"
                                    style={floatingStyles}
                                    {...getFloatingProps()}
                                >
                                    {children}
                                </div>
                            </FloatingFocusManager>
                        </FloatingPortal>
                    )}
                </FloatingList>
            </MenuContext.Provider>
        </FloatingNode>
    );
});

const MenuItem = React.forwardRef((props, forwardedRef) => {
    const { 
        label, 
        disabled, 
        size = "md", // sm, md
        iconBefore, 
        iconAfter, 
        children, 
        className,
        ...restProps 
    } = props;
    const menu = React.useContext(MenuContext);
    const item = useListItem({ label: disabled ? null : label });
    const tree = useFloatingTree();
    const isActive = item.index === menu.activeIndex;

    const isMenuItemClicked = item.index === menu.clickedIndex; // Handle the active item by click

    const sizeClasses = {
        sm: '[&>svg]:size-4 text-sm',
        md: '[&>svg]:size-5 text-base',
    }?.[size];

    const hoverClasses = 'hover:bg-background-secondary hover:text-text-primary hover:border-none';
    const disabledClasses = disabled
        ? 'text-text-disabled cursor-not-allowed hover:bg-transparent [&>svg]:text-icon-on-color-disabled'
        : '';
    const activeClasses = isMenuItemClicked ? 'bg-red-500 flex p-1 gap-1 items-center w-full border-none rounded' : '';

    console.log(`isMenuItemClicked, ${isActive}`);

    return (
        <button
            {...restProps}
            ref={useMergeRefs([item.ref, forwardedRef])}
            type="button"
            role="menuitem"
            // className={isActive ? 'bg-red-500 flex p-1 gap-1 items-center w-full border-none rounded' : "flex p-1 gap-1 items-center bg-transparent w-full border-none rounded text-text-secondary"}
            className={cn(sizeClasses, hoverClasses, disabledClasses, activeClasses, "flex p-1 gap-1 items-center bg-transparent w-full border-none rounded text-text-secondary", className)}
            tabIndex={isActive ? 0 : -1}
            disabled={disabled}
            {...menu.getItemProps({
                onClick(event) {
                    menu.setClickedIndex(item.index);
                    restProps.onClick?.(event);
                    // menu.setActiveIndex(item.index); // ovo ne radi
                    // tree?.events.emit("click"); // ovo sluzi za kada se klikne na item da se ne zatvori, tj ovo znaci da se zatvori pa sam ga zato komentirala
                },
                onFocus(event) {
                    restProps.onFocus?.(event);
                    menu.setHasFocusInside(true);
                }
            })}
        >
            {/* icon before the label */}
            {iconBefore && <span className="iconBefore">{iconBefore}</span>}

            {/* Render the label */}
            {label && <span className="label">{label}</span>}

            {/* Render any children */}
            {children}

            {/* icon after the label */}
            {iconAfter && <span className="iconAfter">{iconAfter}</span>}
        </button>
    );
});

const Menu = React.forwardRef((props, ref) => {
    const parentId = useFloatingParentNodeId();

    if (parentId === null) {
        return (
            <FloatingTree>
                <MenuComponent {...props} ref={ref} />
            </FloatingTree>
        );
    }

    return <MenuComponent {...props} ref={ref} />;
});

// Attach MenuItem to Menu
Menu.Item = MenuItem;

// Export the Menu component
export default Menu;