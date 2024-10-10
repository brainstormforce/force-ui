import { createContext, useContext, forwardRef } from 'react';
import { cn } from '@/utilities/functions';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { disabledClassNames, sizeClassNames } from './component-style';
import Button from '../button';

const PageContext = createContext();
const usePageContext = () => useContext( PageContext );

const Pagination = ( {
	size = 'sm',
	disabled = false,
	children,
	className,
	...props
} ) => (
	<PageContext.Provider value={ { size, disabled } }>
		<nav
			role="navigation"
			aria-label="pagination"
			className={ cn(
				'flex w-full justify-center m-0 box-border',
				className
			) }
			{ ...props }
		>
			{ children }
		</nav>
	</PageContext.Provider>
);
Pagination.displayName = 'Pagination';

const PaginationContent = forwardRef( ( { className, ...props }, ref ) => (
	<ul
		ref={ ref }
		className={ cn(
			'm-0 w-full flex justify-center flex-row items-center gap-1',
			className
		) }
		{ ...props }
	/>
) );
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = forwardRef( ( { className, ...props }, ref ) => {
	const { disabled } = usePageContext();
	return (
		<li
			ref={ ref }
			tabIndex={ 0 }
			className={cn(
				'flex',
				disabled && disabledClassNames.general,
				className
			) }
			{ ...props }
		/>
	);
} );
PaginationItem.displayName = 'PaginationItem';

const PaginationLink = ( {
	className,
	children,
	isActive,
	onClick = () => {},
	icon = null,
	...props
} ) => {
	const { size, disabled } = usePageContext();
	return (
		<Button
			size={ size }
			variant={ 'ghost' }
			className={ cn(
				sizeClassNames[size].general,
				!disabled &&
					isActive &&
					'text-button-primary bg-brand-background-50',
				disabled && 'hover:bg-transparent cursor-not-allowed',
				'focus:border-border-subtle'
			) }
			onClick={ onClick }
			disabled={ disabled }
			icon={ icon }
			{ ...props }
		>
			{ children }
		</Button>
	);
};
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({ onClick = () => { }, className, ...props }) => {

	return (
		<PaginationLink
			aria-label="Go to previous page"
			className={cn(
				className
			) }
			icon={ <ChevronLeft /> }
			onClick={ onClick }
			{ ...props }
		/>
	);
};
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({ onClick = () => { }, className, ...props }) => {

	return (
		<PaginationLink
			aria-label="Go to next page"
			className={cn(
				className
			) }
			icon={ <ChevronRight /> }
			onClick={ onClick }
			{ ...props }
		/>
	);
};
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ( { onClick = () => {}, className, ...props } ) => {
	return (
		<PaginationLink className={ cn( className ) } onClick={ onClick } { ...props }>
			...
		</PaginationLink>
	);
};
PaginationEllipsis.displayName = 'PaginationEllipsis';

Pagination.Content = PaginationContent;
Pagination.Link = PaginationLink;
Pagination.Item = PaginationItem;
Pagination.Previous = PaginationPrevious;
Pagination.Next = PaginationNext;
Pagination.Ellipsis = PaginationEllipsis;

export default Pagination;
