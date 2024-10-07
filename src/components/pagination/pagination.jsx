import * as React from "react"
import { cn } from '@/utilities/functions';
import { ChevronLeft, ChevronRight, DotSquareIcon, EllipsisIcon } from "lucide-react"
import { sizeClassNames } from "./component-style";

const Pagination = ({ size = 'sm', className, ...props }) => (
	<nav
		role="navigation"
		aria-label="pagination"
		className={cn("flex w-full justify-center", sizeClassNames[size].general, className)}
		{...props}
	/>
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		className={cn("w-full flex justify-center flex-row items-center gap-8", className)}
		{...props}
	/>
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef(({ isActive, className, ...props }, ref) => (
	<li ref={ref} className={cn("px-4 py-2 justify-center items-center rounded text-button-secondary hover:bg-button-tertiary-hover focus:bg-button-tertiary-hover focus:ring", isActive && 'text-button-primary bg-button', className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationLink = ({
	className,
	isActive,
	size = "",
	...props
}) => (
	<a
		className={cn(
			'no-underline text-inherit',
			className
		)}
		{...props}
	/>
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({ className, ...props }) => (
	<PaginationLink
		aria-label="Go to previous page"
		size="default"
		className={cn("", className)}
		{...props}
	>
		<ChevronLeft className="h-4 w-4" />
		{/* <span>Previous</span> */}
	</PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({ className, ...props }) => (
	<PaginationLink
		aria-label="Go to next page"
		size="default"
		className={cn("", className)}
		{...props}
	>
		{/* <span>Next</span> */}
		<ChevronRight className="h-4 w-4" />
	</PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({ className, ...props }) => (
	<EllipsisIcon className="h-4 w-4" />
)
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