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
				'flex w-full justify-center box-border m-0',
				className
			) }
			{ ...props }
		>
			{ children }
		</nav>
	</PageContext.Provider>
);
Pagination.displayName = 'Pagination';

const PaginationContent = forwardRef( ( { className, ...props }, ref ) => {
	return (
		<ul
			ref={ ref }
			className={ cn(
				'm-0 p-0 w-full flex justify-center flex-row items-center gap-1',
				'list-none',
				className
			) }
			{ ...props }
		/>
	);
} );
PaginationContent.displayName = 'Pagination.Content';

const PaginationItem = forwardRef(
	( { isActive = false, className, children, ...props }, ref ) => {
		const { disabled } = usePageContext();
		return (
			<li
				ref={ ref }
				className={ cn( 'flex', disabled && disabledClassNames.general ) }
			>
				<PaginationButton
					isActive={ isActive }
					disabled={ disabled }
					className={ className }
					{ ...props }
				>
					{ children }
				</PaginationButton>
			</li>
		);
	}
);
PaginationItem.displayName = 'Pagination.Item';

const PaginationButton = ( {
	isActive = false,
	tag = 'a',
	children,
	className,
	...props
} ) => {
	const { size, disabled } = usePageContext();

	return (
		<Button
			tag={ tag }
			size={ size }
			variant={ 'ghost' }
			className={ cn(
				'no-underline bg-transparent p-0 m-0 border-none',
				'flex justify-center items-center rounded text-button-secondary',
				'focus:outline focus:outline-1 focus:outline-border-subtle focus:bg-button-tertiary-hover',
				sizeClassNames[ size ].general,
				! disabled &&
					isActive &&
					'text-button-primary active:text-button-primary bg-brand-background-50',
				disabled && [
					disabledClassNames.general,
					disabledClassNames.text,
					'focus:ring-transparent cursor-not-allowed',
				],
				className
			) }
			disabled={ disabled }
			{ ...props }
		>
			{ children }
		</Button>
	);
};

const PaginationPrevious = ( props ) => {
	const { size, disabled } = usePageContext();
	return (
		<li
			className={ cn( 'flex', disabled && disabledClassNames.general ) }
		>
			<PaginationButton
				aria-label="Go to previous page"
                className={cn("[&>span]:flex [&>span]:items-center") }
				{ ...props }
			>
                <ChevronLeft  className={cn(sizeClassNames[size].icon)} />
            </PaginationButton>
		</li>
	);
};
PaginationPrevious.displayName = 'Pagination.Previous';

const PaginationNext = ( props ) => {
	const { size, disabled } = usePageContext();
	return (
		<li
			className={ cn( 'flex', disabled && disabledClassNames.general ) }
		>
			<PaginationButton
				aria-label="Go to next page"
                className={cn("[&>span]:flex [&>span]:items-center") }
				{ ...props }
			>
                <ChevronRight className={cn(sizeClassNames[size].icon)} />
            </PaginationButton>
		</li>
	);
};

PaginationNext.displayName = 'Pagination.Next';

const PaginationEllipsis = ( props ) => {
	const { size, disabled } = usePageContext();
	return (
		<li
			className={ cn( 'flex', disabled && disabledClassNames.general ) }
		>
			<span
				className={ cn(
                    "flex justify-center",
					sizeClassNames[ size ].ellipse,
					disabled && disabledClassNames.general
				) }
				{ ...props }
			>
                •••
			</span>
		</li>
	);
};
PaginationEllipsis.displayName = 'Pagination.Ellipsis';

Pagination.Content = PaginationContent;
Pagination.Item = PaginationItem;
Pagination.Previous = PaginationPrevious;
Pagination.Next = PaginationNext;
Pagination.Ellipsis = PaginationEllipsis;

export default Pagination;
