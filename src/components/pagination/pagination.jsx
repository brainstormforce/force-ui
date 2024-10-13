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
	( { isActive = false, href = '', className, children, ...props }, ref ) => {
		const { disabled } = usePageContext();
		return (
			<li
				ref={ ref }
				tabIndex={ 0 }
				className={ cn( 'flex', disabled && disabledClassNames.general ) }
			>
				<PaginationButton
					isActive={ isActive }
					disabled={ disabled }
					className={ className }
					href={ href }
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
	icon = null,
	isActive = false,
	href = '',
	children,
	className,
	...props
} ) => {
	const { size, disabled } = usePageContext();

	return (
		<a
			href={ href }
			className="text-none no-underline bg-transparent p-0 m-0 border-none"
		>
			<Button
				size={ size }
				variant={ 'ghost' }
				className={ cn(
					'flex justify-center items-center rounded text-button-secondary',
					! disabled &&
						isActive &&
						'text-button-primary bg-brand-background-50',
					disabled && 'hover:bg-transparent cursor-not-allowed',
					'focus:border-border-subtle focus:bg-button-tertiary-hover',
					sizeClassNames[ size ].general,
					className
				) }
				disabled={ disabled }
				icon={ icon }
				{ ...props }
			>
				{ children }
			</Button>
		</a>
	);
};

const PaginationPrevious = ( { icon = <ChevronLeft />, props } ) => {
	const { size, disabled } = usePageContext();
	return (
		<li
			tabIndex={ 0 }
			className={ cn( 'flex', disabled && disabledClassNames.general ) }
		>
			<PaginationButton
				icon={ icon }
				aria-label="Go to previous page"
				className={ sizeClassNames[ size ].icon }
				{ ...props }
			/>
		</li>
	);
};
PaginationPrevious.displayName = 'Pagination.Previous';

const PaginationNext = ( { icon = <ChevronRight />, props } ) => {
	const { size, disabled } = usePageContext();
	return (
		<li
			tabIndex={ 0 }
			className={ cn( 'flex', disabled && disabledClassNames.general ) }
		>
			<PaginationButton
				icon={ icon }
				aria-label="Go to next page"
				className={ sizeClassNames[ size ].icon }
				{ ...props }
			/>
		</li>
	);
};

PaginationNext.displayName = 'Pagination.Next';

const PaginationEllipsis = ( props ) => {
	const { size, disabled } = usePageContext();
	return (
		<li
			tabIndex={ 0 }
			className={ cn( 'flex', disabled && disabledClassNames.general ) }
			{ ...props }
		>
			<span
				className={ cn(
					sizeClassNames[ size ].icon,
					disabled && disabledClassNames.general
				) }
			>
				...
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
