import * as React from "react"
import { cn } from '@/utilities/functions';
import { ChevronLeft, ChevronRight, DotSquareIcon, EllipsisIcon } from "lucide-react"
import { sizeClassNames } from "./component-style";
import { createContext } from "react";
import { useContext } from "react";

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

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		className={cn("m-0 w-full flex justify-center flex-row items-center gap-1", className)}
		{...props}
	/>
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef(({ isActive, className, ...props }, ref) => {
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
	const { size } = usePageContext();

	return (
	<a
		className={cn(
			'no-underline outline-none focus:outline-none text-inherit flex justify-center items-center',
			// sizeClassNames[size].dimension,
			'aspect-square',
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
				// sizeClassNames[size].dimension,
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
				// sizeClassNames[size].dimension,
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
			// sizeClassNames[size].dimension,
			'aspect-square',

			"flex justify-center items-end",
			className)} {...props}>
			<EllipsisIcon className="justify-center self-end" />
		</div>
	)
}
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
	Pagination,
	PaginationContent,
	PaginationLink,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationEllipsis,
}