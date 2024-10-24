import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utilities/functions';

const Accordion = ( props ) => {
	const {
		type = 'simple',
		defaultValue = [],
		autoClose = false,
		disabled = false,
		children,
		className,
	} = props;
	const [ activeItems, setActiveItems ] = useState(
		Array.isArray( defaultValue ) ? defaultValue : [ defaultValue ]
	);

	const handleToggle = ( value ) => {
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
			{ React.Children.map( children, ( child ) =>
				React.cloneElement( child, {
					isOpen: activeItems.includes( child.props.value ),
					onToggle: () => handleToggle( child.props.value ),
					type,
					disabled: disabled || child.props.disabled,
				} )
			) }
		</div>
	);
};

Accordion.displayName = 'Accordion';

const AccordionItem = ( props ) => {
	const {
		isOpen,
		onToggle,
		type,
		disabled = false,
		children,
		className,
	} = props;

	const typeClasses = {
		simple: 'border-0',
		separator: 'border-0 border-b border-solid border-border-subtle',
		boxed: 'border border-solid border-border-subtle rounded-md',
	}?.[ type ];

	return (
		<div className={ cn( typeClasses, className ) }>
			{ React.Children.map( children, ( child ) =>
				React.cloneElement( child, { isOpen, onToggle, type, disabled } )
			) }
		</div>
	);
};

AccordionItem.displayName = 'Accordion.Item';

const AccordionTrigger = ( props ) => {
	const {
		onToggle,
		isOpen,
		iconType = 'arrow', // arrow, plus-minus
		disabled = false,
		tag = 'h3',
		type,
		children,
		className,
	} = props;

	const paddingClasses = {
		simple: 'px-2 py-3',
		separator: 'px-2 py-4',
		boxed: 'px-3 py-4',
	}?.[ type ];

	const renderIcon = () => {
		if ( iconType === 'arrow' ) {
			return (
				<ChevronDown
					className={ cn(
						'flex-shrink-0 text-icon-secondary transition-transform duration-300 ease-in-out',
						isOpen ? 'rotate-180' : 'rotate-0'
					) }
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
				>
					{ isOpen ? <Minus /> : <Plus /> }
				</motion.span>
			);
		}
		return null;
	};

	const Tag = tag;
	return (
		<Tag className="flex m-0 hover:bg-background-secondary">
			<button
				className={ cn(
					'flex w-full items-center justify-between text-sm font-medium transition-all appearance-none bg-transparent border-0 cursor-pointer gap-3',
					paddingClasses,
					disabled && 'cursor-not-allowed opacity-40',
					className
				) }
				onClick={ ! disabled ? onToggle : () => {} }
				aria-expanded={ isOpen }
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

const AccordionContent = ( props ) => {
	const { isOpen, disabled = false, type, children, className } = props;

	const contentVariants = {
		open: { height: 'auto', opacity: 1 },
		closed: { height: 0, opacity: 0 },
	};

	const contentPaddingClasses = {
		simple: 'px-2 pb-3',
		separator: 'px-2 pb-4',
		boxed: 'px-3 pb-4',
	}?.[ type ];

	return (
		<AnimatePresence initial={ false }>
			{ isOpen && (
				<motion.div
					key="content"
					variants={ contentVariants }
					initial="closed"
					animate="open"
					exit="closed"
					transition={ { duration: 0.3, ease: 'easeInOut' } }
					className={ cn(
						'overflow-hidden text-text-secondary w-full text-sm transition-[height, opacity, transform] ease-in box-border',
						disabled && 'opacity-40',
						className
					) }
					aria-hidden={ ! isOpen }
				>
					<div className={ cn( contentPaddingClasses ) }>{ children }</div>
				</motion.div>
			) }
		</AnimatePresence>
	);
};

AccordionContent.displayName = 'Accordion.Content';

export default Object.assign( Accordion, {
	Item: AccordionItem,
	Trigger: AccordionTrigger,
	Content: AccordionContent,
} );
