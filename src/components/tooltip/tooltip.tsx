import {
	useRef,
	ReactNode,
	useState,
	isValidElement,
	cloneElement,
	useMemo,
} from 'react';
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	useHover,
	useFocus,
	useDismiss,
	useClick,
	safePolygon,
	useRole,
	arrow as floatingArrow,
	FloatingPortal,
	FloatingArrow,
	useInteractions,
	useTransitionStyles,
} from '@floating-ui/react';
import { cn } from '@/utilities/functions';
import { mergeRefs } from '../toaster/utils';

export declare interface TooltipProps {
	/** Defines the visual variant of the tooltip. */
	variant?: 'light' | 'dark';

	/** Specifies the position of the tooltip relative to its target. */
	placement?:
		| 'top'
		| 'bottom'
		| 'left'
		| 'right'
		| 'top-start'
		| 'top-end'
		| 'bottom-start'
		| 'bottom-end'
		| 'left-start'
		| 'left-end'
		| 'right-start'
		| 'right-end';

	/** The title displayed at the top of the tooltip. */
	title?: string;

	/** The main content to be displayed within the tooltip. */
	content?: ReactNode;

	/** Indicates whether to show an arrow pointing to the target element. */
	arrow?: boolean;

	/** Controls the visibility of the tooltip in a controlled manner. */
	open?: boolean;

	/** Function to set the visibility state of the tooltip. */
	setOpen?: ( isOpen: boolean ) => void;

	/** The child element to which the tooltip is attached. */
	children: ReactNode;

	/** Additional CSS classes to apply to the tooltip for custom styling. */
	className?: string;

	/** The root element where the tooltip will be rendered. */
	tooltipPortalRoot?: HTMLElement | null;

	/** The ID of the tooltip portal. */
	tooltipPortalId?: string;

	/** Specifies the positioning strategy for the tooltip. */
	strategy?: 'fixed' | 'absolute';

	/** Offset distance (in pixels) from the target element to the tooltip. */
	offset?: number;

	/** Events that trigger the tooltip. */
	triggers?: ( 'click' | 'hover' | 'focus' )[];

	/** Indicates whether the tooltip is interactive. */
	interactive?: boolean;
	/** Defines the boundary for positioning the tooltip, accepting 'viewport', 'clippingAncestors', or an HTML element reference. */
	boundary?: 'viewport' | 'clippingAncestors' | HTMLElement | null;
}

export const Tooltip = ( {
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
	triggers = [ 'hover', 'focus' ], // 'click' | 'hover' | 'focus';
	interactive = false,
}: TooltipProps ) => {
	const isControlled = useMemo(
		() => typeof open === 'boolean' && typeof setOpen === 'function',
		[ open, setOpen ]
	);

	const [ isOpen, setIsOpen ] = useState( false );
	const arrowRef = useRef( null );

	const { refs, floatingStyles, context } = useFloating( {
		open: isControlled ? open : isOpen,
		onOpenChange: isControlled ? setOpen : setIsOpen,
		placement,
		strategy,
		middleware: [
			offset( offsetValue ),
			flip( { boundary: boundary as Element } ), // Ensure this is correctly cast
			shift( { boundary: boundary as Element } ), // Ensure this is correctly cast
			floatingArrow( { element: arrowRef } ),
		],
		whileElementsMounted: autoUpdate,
	} );

	const click = useClick( context, {
		enabled: ! isControlled && triggers.includes( 'click' ),
	} );
	const hover = useHover( context, {
		move: false,
		enabled: ! isControlled && triggers.includes( 'hover' ),
		...( interactive && { handleClose: safePolygon() } ),
	} );
	const focus = useFocus( context, {
		enabled: ! isControlled && triggers.includes( 'focus' ),
	} );
	const dismiss = useDismiss( context );
	const role = useRole( context, { role: 'tooltip' } );

	const { getReferenceProps, getFloatingProps } = useInteractions( [
		click,
		hover,
		focus,
		dismiss,
		role,
	] );

	// Fade-in and fade-out transition.
	const { isMounted, styles } = useTransitionStyles( context, {
		duration: 150,
		initial: { opacity: 0 },
		open: { opacity: 1 },
		close: { opacity: 0 },
	} );

	const tooltipClasses =
		'absolute z-20 py-2 px-3 rounded-md text-xs leading-4 shadow-soft-shadow-lg';

	const variantClasses = {
		light: 'bg-tooltip-background-light text-text-primary',
		dark: 'bg-tooltip-background-dark text-text-on-color',
	}?.[ variant ];

	const arrowClasses =
		variant === 'dark'
			? 'text-tooltip-background-dark'
			: 'text-tooltip-background-light';

	const widthClasses = 'max-w-80 w-fit';

	return (
		<>
			{ isValidElement( children ) &&
				cloneElement( children as React.ReactElement, {
					...children.props,
					ref: mergeRefs(
						(
							children as React.ReactElement & {
								ref?: React.Ref<HTMLElement>;
							}
						).ref,
						refs.setReference
					),
					className: cn( children.props.className ),
					...getReferenceProps(),
				} ) }
			<FloatingPortal id={ tooltipPortalId } root={ tooltipPortalRoot }>
				{ isMounted && (
					<div
						className={ cn(
							tooltipClasses,
							variantClasses,
							widthClasses,
							className
						) }
						ref={ refs.setFloating }
						style={ {
							...floatingStyles,
							...styles,
						} }
						{ ...getFloatingProps() }
					>
						<div>
							{ !! title && (
								<span className="font-semibold">{ title }</span>
							) }
							{ !! content && (
								<div className="font-normal">{ content }</div>
							) }
						</div>
						{ arrow && (
							<FloatingArrow
								ref={ arrowRef }
								context={ context }
								className={ cn( 'fill-current', arrowClasses ) }
							/>
						) }
					</div>
				) }
			</FloatingPortal>
		</>
	);
};

export default Tooltip;
