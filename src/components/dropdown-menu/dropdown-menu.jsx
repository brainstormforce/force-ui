import React, { useState, useEffect } from 'react';
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	useClick,
	useDismiss,
	useRole,
	FloatingPortal,
	useInteractions,
	useTransitionStyles,
} from '@floating-ui/react';
import { cn } from '@/utilities/functions';

const DropdownMenu = ({
	placement = 'bottom',
	offset: offsetValue = 10,
	boundary = 'clippingAncestors',
	dropdownPortalRoot = null,
	dropdownPortalId = '',
	children,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		strategy: 'absolute',
		middleware: [
			offset(offsetValue),
			flip({ boundary }),
			shift({ boundary }),
		],
		whileElementsMounted: autoUpdate,
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'menu' });

	const { getReferenceProps, getFloatingProps } = useInteractions([
		click,
		dismiss,
		role,
	]);

	const { isMounted, styles } = useTransitionStyles(context, {
		duration: 150,
		initial: { opacity: 0, scale: 0.95 },
		open: { opacity: 1, scale: 1 },
		close: { opacity: 0, scale: 0.95 },
	});

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				refs.floating.current &&
				!refs.floating.current.contains(event.target) &&
				!refs.reference.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [refs]);

	const toggleMenu = () => setIsOpen((prev) => !prev);

	return (
		<div className={cn('relative inline-block', className)}>
			<div
				ref={refs.setReference}
				onClick={toggleMenu}
				role="button"
				tabIndex={0}
				{...getReferenceProps()}
				className="cursor-pointer"
			>
				{React.Children.map(children, (child) => {
					if (child.type === DropdownMenu.Trigger) {
						return React.cloneElement(child);
					}
					return null;
				})}
			</div>

			{isMounted && (
				<FloatingPortal id={dropdownPortalId} root={dropdownPortalRoot}>
					<div
						ref={refs.setFloating}
						style={{
							...floatingStyles,
							...styles,
						}}
						{...getFloatingProps()}
					>
						{React.Children.map(children, (child) => {
							if (child.type === DropdownMenu.Content) {
								return React.cloneElement(child);
							}
							return null;
						})}
					</div>
				</FloatingPortal>
			)}
		</div>
	);
};

DropdownMenu.displayName = 'DropdownMenu';

const DropdownMenuTrigger = React.forwardRef(({ children, className }, ref) => (
	<div ref={ref} className={className}>
		{children}
	</div>
));

DropdownMenuTrigger.displayName = 'DropdownMenu.Trigger';

const DropdownMenuContent = ({ children, className }) => {
	return (
		<div
			className={cn(
				'border border-solid border-border-subtle rounded-md shadow-lg overflow-hidden',
				className
			)}
		>
			{children}
		</div>
	);
};

DropdownMenuContent.displayName = 'DropdownMenu.Content';

export default Object.assign(DropdownMenu, {
	Trigger: DropdownMenuTrigger,
	Content: DropdownMenuContent,
});
