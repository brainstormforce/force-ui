import { createContext, useContext, forwardRef } from 'react';
import { cn } from '@/utilities/functions';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { disabledClassNames, sizeToClass } from './component-style';
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
			'm-0 p-0 w-full flex justify-center flex-row items-center gap-1',
			className
		) }
		{ ...props }
	/>
) );
PaginationContent.displayName = 'Pagination.Content';

const PaginationItem = forwardRef(
	( { isActive = false, className, children, ...props }, ref ) => {
		const { disabled } = usePageContext();
		return (
			<li
				ref={ ref }
				tabIndex={ 0 }
				className={ cn( 'flex', disabled && disabledClassNames.general ) }
				{ ...props }
			>
				<PaginationButton
					isActive={ isActive }
					disabled={ disabled }
					className={ className }
				>
					{ children }
				</PaginationButton>
			</li>
		);
	}
);
PaginationItem.displayName = 'Pagination.Item';

const PaginationButton = ( {
	icon = null,
	isActive = false,
	onClick = () => {},
	className,
	...props
} ) => {
	const { size, disabled } = usePageContext();

	return (
		<Button
			variant={ 'ghost' }
			className={ cn(
				sizeToClass[ size ],
				'aspect-square p-0 flex justify-center items-center rounded text-button-secondary',
				! disabled &&
					isActive &&
					'text-button-primary bg-brand-background-50',
				disabled && 'hover:bg-transparent cursor-not-allowed',
				'focus:border-border-subtle',
				className
			) }
			onClick={ onClick }
			disabled={ disabled }
			icon={ icon }
			{ ...props }
		/>
	);
};

const PaginationPrevious = ( props ) => (
	<PaginationButton
		icon={ <ChevronLeft /> }
		ariaLabel="Go to previous page"
		{ ...props }
	/>
);
PaginationPrevious.displayName = 'Pagination.Previous';

const PaginationNext = ( props ) => (
	<PaginationButton
		icon={ <ChevronRight /> }
		ariaLabel="Go to next page"
		{ ...props }
	/>
);

PaginationNext.displayName = 'Pagination.Next';

const PaginationEllipsis = ( { onClick = () => {}, className, ...props } ) => {
	return (
		<PaginationButton
			className={ cn( className ) }
			onClick={ onClick }
			{ ...props }
		>
			...
		</PaginationButton>
	);
};
PaginationEllipsis.displayName = 'Pagination.Ellipsis';

Pagination.Content = PaginationContent;
Pagination.Item = PaginationItem;
Pagination.Previous = PaginationPrevious;
Pagination.Next = PaginationNext;
Pagination.Ellipsis = PaginationEllipsis;

export default Pagination;
