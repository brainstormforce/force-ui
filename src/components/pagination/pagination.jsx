import { createContext, useContext, forwardRef } from "react";
import { cn } from '@/utilities/functions';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { disabledClassNames, sizeClassNames } from "./component-style";
import Button from "../button";

const PageContext = createContext();
const usePageContext = () => useContext(PageContext);

const Pagination = ({ size = 'sm', disabled = false, children, className, ...props }) => (
	<PageContext.Provider value={{ size, disabled }}>
	<nav
		role="navigation"
		aria-label="pagination"
			className={cn(
				"flex w-full justify-center m-0 box-border",
				className)}
		{...props}
		>
			{children}
		</nav>
	</PageContext.Provider>
)
Pagination.displayName = "Pagination"

const PaginationContent = forwardRef(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		className={cn("m-0 w-full flex justify-center flex-row items-center gap-1", className)}
		{...props}
	/>
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = forwardRef(({ className, ...props }, ref) => {
	const { size, disabled } = usePageContext();
	return (
		<li
			ref={ref}
			tabIndex={0}
			className={cn(
				// sizeClassNames[size].general,
				// sizeClassNames[size].text,
				'flex',
				disabled && [
					disabledClassNames.general,
					disabledClassNames.text,
				],
				// : [
				// 	'hover:bg-button-tertiary-hover hover:text-button-secondary',
				// 		'focus:bg-button-tertiary-hover focus:ring-2 focus:ring-offset-1 focus:border-solid focus:border-border-subtle focus:ring-focus',
				// 	'cursor-pointer',
				// ],
				className
			)} {...props} />
	)
})
PaginationItem.displayName = "PaginationItem"

const PaginationLink = ({
	className,
	href = "#",
	children,
	isActive,
	icon = null,
	...props
}) => {
	const { size, disabled } = usePageContext();
	return (
		// <a
		// 	aria-disabled={disabled}
		// 	tabIndex={disabled ? -1 : 0}
		// 	className={cn(
		// 		'no-underline outline-none focus:outline-none focus:ring-0 text-inherit flex justify-center items-center',
		// 		className
		// 	)}
		// 	{...props}
		// />
		<Button
			size={size}
			variant={'ghost'}
			className={cn(
				!disabled && isActive && 'text-button-primary bg-brand-background-50',
				disabled && 'hover:none'
			)}
			disabled={disabled}
			icon={icon}
		>
			{children}
		</Button>
	)
}
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({ className, ...props }) => {
	const { size, disabled } = usePageContext();

	return (
	<PaginationLink
			aria-label="Go to previous page"
			className={cn(
				// sizeClassNames[size].icon,
				// disabled && disabledClassNames.icon,
				className)}
			icon={<ChevronLeft />}
		{...props}
		/>
	)
}
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({ className, ...props }) => {
	const { size, disabled } = usePageContext();

	return (
	<PaginationLink
			aria-label="Go to next page"
			className={cn(
				// sizeClassNames[size].icon,
				// disabled && disabledClassNames.icon,
				className)}
			icon={<ChevronRight />}
		{...props}
		/>
	)
}
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({ className, ...props }) => {
	const { size } = usePageContext();

	return (
		<PaginationLink
			className={cn(className)}
			{...props}
		>
			...
		</PaginationLink>
	)
}
PaginationEllipsis.displayName = "PaginationEllipsis"

Pagination.Content = PaginationContent;
Pagination.Link = PaginationLink;
Pagination.Item = PaginationItem;
Pagination.Previous = PaginationPrevious;
Pagination.Next = PaginationNext;
Pagination.Ellipsis = PaginationEllipsis;

export default Pagination;