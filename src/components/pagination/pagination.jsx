import { createContext, useContext, forwardRef } from "react";
import { cn } from '@/utilities/functions';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { sizeClassNames } from "./component-style";

const PageContext = createContext();
const usePageContext = () => useContext(PageContext);

const Pagination = ({ size = 'sm', children, className, ...props }) => (
	<PageContext.Provider value={{ size }}>
	<nav
		role="navigation"
		aria-label="pagination"
			className={cn("flex w-full justify-center m-0", className)}
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

const PaginationItem = forwardRef(({ isActive, className, ...props }, ref) => {
	const { size } = usePageContext();
	return (
		<li
			ref={ref}
			tabIndex={0}
			className={cn(
				sizeClassNames[size].general,
				sizeClassNames[size].hover,
				sizeClassNames[size].focus,
				sizeClassNames[size].text,
				isActive && 'text-brand-500 bg-brand-background-50',
				'cursor-pointer',
				className
			)} {...props} />
	)
})
PaginationItem.displayName = "PaginationItem"

const PaginationLink = ({
	className,
	href = "#",
	...props
}) => {
	return (
	<a
		className={cn(
			'no-underline outline-none focus:outline-none text-inherit flex justify-center items-center',
			className
		)}
		{...props}
	/>
	)
}
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({ className, ...props }) => {
	const { size } = usePageContext();

	return (
	<PaginationLink
		aria-label="Go to previous page"
		size="default"
			className={cn(
				sizeClassNames[size].icon,
				className)}
		{...props}
	>
			<ChevronLeft />
	</PaginationLink>
	)
}
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({ className, ...props }) => {
	const { size } = usePageContext();
	return (
	<PaginationLink
		aria-label="Go to next page"
		size="default"
			className={cn(
				sizeClassNames[size].icon,
				className)}
		{...props}
	>
			<ChevronRight />
	</PaginationLink>
	)
}
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({ className, ...props }) => {
	const { size } = usePageContext();

	return (
		<div className={cn(
			sizeClassNames[size].icon,
			className)} {...props}>
			...
		</div>
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