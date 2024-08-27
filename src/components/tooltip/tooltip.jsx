import React, { useRef, useState, isValidElement, cloneElement, useMemo } from 'react';
import { useFloating, autoUpdate, offset, flip, shift, useHover, useFocus, useDismiss, useRole, arrow as floatingArrow, FloatingPortal, FloatingArrow, useInteractions } from '@floating-ui/react';
import { cn } from '@/utilities/functions';
import { mergeRefs } from '../toaster/utils';

const Tooltip = ({
    variant = 'dark', // 'light' | 'dark';
    placement = 'bottom', //  | 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
    title = '',
    content,
    arrow = false,
    open,
    setOpen,
    children,
    className,
    tooltipPortalRoot = null, // Root element where the dropdown will be rendered.
    tooltipPortalId = '', // Id of the dropdown portal where the dropdown will be rendered.
    boundary = 'clippingAncestors',
    strategy = 'fixed', // 'fixed' | 'absolute';
    offset: offsetValue = 8, // Offset option or number value. Default is 8.
}) => {
    const isControlled = useMemo( () => typeof open === 'boolean' && typeof setOpen === 'function', [open, setOpen]);

    const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);

    const { refs, floatingStyles, context } = useFloating({
		open: isControlled ? open : isOpen,
		onOpenChange: isControlled ? setOpen : setIsOpen,
		placement,
		strategy,
		middleware: [
			offset(offsetValue),
			flip({
				boundary,
			}),
			shift({ 
                boundary 
            }),
			floatingArrow({ element: arrowRef }),
		],
		whileElementsMounted: autoUpdate,
	});

    const hover = useHover(context, { move: false });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'tooltip' });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
        role,
    ]);

    const tooltipClasses = 'absolute z-20 py-2 px-3 rounded-md text-xs leading-4 shadow-soft-shadow-lg';

    const variantClasses = {
        light: 'bg-tooltip-background-light text-text-primary',
        dark: 'bg-tooltip-background-dark text-text-on-color',
    }?.[variant];

    const arrowClasses = variant === 'dark' ? 'text-tooltip-background-dark' : 'text-tooltip-background-light';

    const widthClasses = 'max-w-80 w-fit';

    const openStatus = useMemo(() => isControlled ? open : isOpen, [isControlled, open, isOpen]);

    return (
		<>
			{isValidElement(children) &&
				cloneElement(children, {
					...children.props,
					ref: mergeRefs(children.ref, refs.setReference),
					className: cn(children.props.className),
					...getReferenceProps(),
				})}
			<FloatingPortal id={tooltipPortalId} root={tooltipPortalRoot}>
				{ openStatus && (
					<div
						className={cn(
							tooltipClasses,
							variantClasses,
							widthClasses,
                            className,
						)}
						ref={refs.setFloating}
						style={floatingStyles}
						{...getFloatingProps()}
					>
						<div>
							{!! title && (<span className="font-semibold">{title}</span>)}
							{!! content && (
								<div className="font-normal">{content}</div>
							)}
						</div>
						{arrow && (
							<FloatingArrow
								ref={arrowRef}
								context={context}
								placement={placement}
								className={cn('fill-current', arrowClasses)}
							/>
						)}
					</div>
				)}
			</FloatingPortal>
		</>
	);
};

export default Tooltip;