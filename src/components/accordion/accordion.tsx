import React, {
	type ReactNode,
	type ElementType,
	type MouseEventHandler,
	useMemo,
	useState,
} from 'react';
import { nanoid } from 'nanoid';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { callAll, cn } from '@/utilities/functions';

// Define common props to be shared by all components
export interface CommonProps {
	/** Custom class names for additional styling */
	className?: string;
	/** Disables the component */
	disabled?: boolean;
	/** Children components */
	children: ReactNode;
}

// Define Accordion-specific props
export interface AccordionProps extends CommonProps {
	/** Type of accordion: 'simple', 'separator', or 'boxed' */
	type?: 'simple' | 'separator' | 'boxed';
	/** Initial active item(s) */
	defaultValue?: string | string[];
	/** Automatically close other items when one is opened */
	autoClose?: boolean;
}

export const Accordion = ( {
	type = 'simple',
	defaultValue = [],
	autoClose = false,
	disabled = false,
	children,
	className,
}: AccordionProps ) => {
	const [ activeItems, setActiveItems ] = useState(
		Array.isArray( defaultValue ) ? defaultValue : [ defaultValue ]
	);

	const handleToggle = ( value: string ) => {
		setActiveItems( ( prev ) => {
			if ( autoClose ) {
				return prev.includes( value ) ? [] : [ value ];
			}
			return prev.includes( value )
				? prev.filter( ( item ) => item !== value )
				: [ ...prev, value ];
		} );
	};

	const typeClasses = type === 'boxed' ? 'space-y-3' : '';

	return (
		<div className={ cn( typeClasses, className ) }>
			{ React.Children.map( children, ( child ) => {
				if ( React.isValidElement( child ) && 'value' in child.props ) {
					const isCollapsible = child.props.collapsible !== false; // default true
					const open = isCollapsible
						? activeItems.includes( child.props.value )
						: true;

					return React.cloneElement(
						child as React.ReactElement<AccordionItemProps>,
						{
							isOpen: open,
							onToggle: isCollapsible
								? () => handleToggle( child.props.value )
								: undefined,
							type,
							disabled: disabled || child.props.disabled,
						}
					);
				}
				return child;
			} ) }
		</div>
	);
};

Accordion.displayName = 'Accordion';

// Define AccordionItem-specific props
/**
 * Props for an AccordionItem component.
 */
export interface AccordionItemProps extends CommonProps {
	/** Determines if the item is open */
	isOpen?: boolean;
	/** Callback to toggle the item's state */
	onToggle?: () => void;
	/** Accordion type (same as parent) */
	type?: 'simple' | 'separator' | 'boxed';
	/** The value associated with the accordion item */
	value?: string;
	/** Internal ID linking trigger to content for aria-controls */
	contentId?: string;
	/** Internal ID for the trigger button, used by content region's aria-labelledby */
	triggerId?: string;
}

export const AccordionItem = ( {
	isOpen,
	onToggle,
	type = 'simple',
	disabled = false,
	children,
	className,
}: AccordionItemProps ) => {
	const contentId = useMemo( () => `accordion-content-${ nanoid() }`, [] );
	const triggerId = useMemo( () => `accordion-trigger-${ nanoid() }`, [] );

	const typeClasses = {
		simple: 'border-0',
		separator: 'border-0 border-b border-solid border-border-subtle',
		boxed: 'border border-solid border-border-subtle rounded-md',
	}?.[ type ];

	return (
		<div className={ cn( typeClasses, className ) }>
			{ React.Children.map( children, ( child ) =>
				React.isValidElement<AccordionItemProps>( child )
					? React.cloneElement( child, {
						isOpen,
						onToggle,
						type,
						disabled,
						contentId,
						triggerId,
					} )
					: child
			) }
		</div>
	);
};

AccordionItem.displayName = 'Accordion.Item';

// Define AccordionTrigger-specific props
export interface AccordionTriggerProps extends CommonProps {
	/** OnClick handler for the accordion trigger. This works only when collapsible is set to `false`. */
	onClick?: () => void;
	/** Callback for toggling item state */
	onToggle?: () => void;
	/** Indicates if the item is open */
	isOpen?: boolean;
	/** Type of icon to display */
	iconType?: 'arrow' | 'plus-minus' | 'none';
	/** Element to render trigger as */
	tag?: ElementType;
	/** Accordion type (same as parent) */
	type?: 'simple' | 'separator' | 'boxed';
	/** Specifies whether the accordion item can be collapsed. */
	collapsible?: boolean;
	/** Internal ID for aria-controls linking to content panel */
	contentId?: string;
	/** Internal ID for this trigger button, used by content region's aria-labelledby */
	triggerId?: string;
}

export const AccordionTrigger = ( {
	onClick,
	onToggle,
	isOpen,
	iconType = 'arrow',
	collapsible = true,
	disabled = false,
	tag = 'h3',
	type = 'simple',
	children,
	className,
	contentId,
	triggerId,
	...props
}: AccordionTriggerProps ) => {
	const paddingClasses = {
		simple: 'px-2 py-3',
		separator: 'px-2 py-4',
		boxed: 'px-3 py-4',
	}?.[ type ];

	const renderIcon = () => {
		if ( ! collapsible ) {
			return null;
		}

		if ( iconType === 'arrow' ) {
			return (
				<ChevronDown
					className={ cn(
						'flex-shrink-0 text-icon-secondary size-5 transition-transform duration-300 ease-in-out',
						isOpen ? 'rotate-180' : 'rotate-0'
					) }
					aria-hidden="true"
				/>
			);
		}
		if ( iconType === 'plus-minus' ) {
			return (
				<motion.span
					key={ isOpen ? 'minus' : 'plus' }
					initial={ { opacity: 0, rotate: isOpen ? -180 : 0 } }
					animate={ { opacity: 1, rotate: isOpen ? 0 : 180 } }
					exit={ { opacity: 0 } }
					transition={ { duration: 0.3, ease: 'easeInOut' } }
					className="flex items-center flex-shrink-0 text-icon-secondary"
					aria-hidden="true"
				>
					{ isOpen ? <Minus /> : <Plus /> }
				</motion.span>
			);
		}
		return null;
	};

	const Tag = tag;
	return (
		<Tag className="flex m-0 hover:bg-background-secondary transition duration-150 ease-in-out">
			<button
				id={ triggerId }
				className={ cn(
					'flex w-full items-center justify-between text-sm font-medium transition-all appearance-none bg-transparent border-0 cursor-pointer gap-3',
					paddingClasses,
					disabled && 'cursor-not-allowed opacity-40',
					className
				) }
				onClick={ callAll(
					onClick,
					! disabled && collapsible ? onToggle : undefined
				) as MouseEventHandler<HTMLButtonElement> }
				aria-expanded={ isOpen }
				aria-controls={ contentId }
				aria-disabled={ disabled }
				disabled={ disabled }
				{ ...props }
			>
				<div className="flex items-center gap-2 text-text-primary font-semibold text-left">
					{ children }
				</div>
				{ renderIcon() }
			</button>
		</Tag>
	);
};

AccordionTrigger.displayName = 'Accordion.Trigger';

// Define AccordionContent-specific props
export interface AccordionContentProps extends CommonProps {
	/** Determines if the content is open */
	isOpen?: boolean;
	/** Accordion type (same as parent) */
	type?: 'simple' | 'separator' | 'boxed';
	/** Internal ID for this content region (linked from AccordionTrigger aria-controls) */
	contentId?: string;
	/** Internal ID of the trigger button, used for aria-labelledby on this region */
	triggerId?: string;
}

export const AccordionContent = ( {
	isOpen,
	disabled = false,
	type = 'simple',
	children,
	className,
	contentId,
	triggerId,
}: AccordionContentProps ) => {
	const contentVariants = {
		open: {
			height: 'auto',
			opacity: 1,
			overflow: 'unset',
			transition: {
				overflow: {
					delay: 1,
				},
			},
		},
		closed: {
			height: 0,
			opacity: 0,
			overflow: 'hidden',
		},
	};

	const contentPaddingClasses = {
		simple: 'px-2 pb-3',
		separator: 'px-2 pb-4',
		boxed: 'px-3 pb-4',
	}?.[ type ];

	return (
		<motion.div
			variants={ contentVariants }
			initial={ false }
			animate={ isOpen ? 'open' : 'closed' }
			transition={ { duration: 0.3, ease: 'easeInOut' } }
			className={ cn(
				'text-text-secondary w-full text-sm box-border',
				disabled && 'opacity-40',
				className
			) }
			role="region"
			id={ contentId }
			aria-labelledby={ triggerId }
			aria-hidden={ ! isOpen }
		>
			<div className={ cn( contentPaddingClasses ) }>{ children }</div>
		</motion.div>
	);
};

AccordionContent.displayName = 'Accordion.Content';

export default Object.assign( Accordion, {
	Item: AccordionItem,
	Trigger: AccordionTrigger,
	Content: AccordionContent,
} );
