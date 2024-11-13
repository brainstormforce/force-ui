import {
	createContext,
	useContext,
	forwardRef,
	type ReactNode,
	type ElementType,
} from 'react';
import { cn, callAll } from '@/utilities/functions';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { disabledClassNames, sizeClassNames } from './component-style';
import Button from '../button';

const PageContext = createContext<{
	size: 'xs' | 'sm' | 'md' | 'lg';
	disabled: boolean;
}>( {
	size: 'sm',
	disabled: false,
} );
const usePageContext = () => useContext( PageContext );

export declare interface PaginationCommonProps {
	/** Defines the children of the pagination component. */
	children?: ReactNode;
	/** Additional CSS classes. */
	className?: string;
}

export interface PaginationProps extends PaginationCommonProps {
	/** Defines the size of pagination items. */
	size?: 'xs' | 'sm' | 'md' | 'lg';
	/** Disables all pagination controls. */
	disabled?: boolean;
}

export interface PaginationItemProps extends PaginationCommonProps {
	/** Marks the pagination item as active. */
	isActive?: boolean;
}

export interface PaginationButtonProps extends PaginationCommonProps {
	/** The element type of the pagination button. */
	as?: ElementType;
	/** Marks the button as active. */
	isActive?: boolean;
	/** Disables the button. */
	disabled?: boolean;
	/** Optional click handler for the button. */
	onClick?: React.MouseEventHandler;
	/** The HTML tag to be rendered for the pagination button. */
	tag?: 'a' | 'button';
}

export const Pagination = ( {
	size = 'sm',
	disabled = false,
	children,
	className,
	...props
}: PaginationProps ) => (
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

export const PaginationContent = forwardRef<
	HTMLUListElement,
	PaginationCommonProps
>( ( { className, ...props }, ref ) => {
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

export const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
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

export const PaginationButton = ( {
	isActive = false,
	tag = 'a',
	children,
	className,
	...props
}: PaginationButtonProps ) => {
	const { size, disabled } = usePageContext();

	const handleClick = ( event: React.MouseEvent ) => event.preventDefault();

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
			onClick={ ( event ) =>
				callAll(
					props.onClick || ( () => {} ),
					disabled ? handleClick : () => {}
				)( event )
			}
		>
			<span className="px-1 flex">{ children }</span>
		</Button>
	);
};

export const PaginationPrevious = ( props: PaginationButtonProps ) => {
	const { size, disabled } = usePageContext();
	return (
		<li className={ cn( 'flex', disabled && disabledClassNames.general ) } aria-label="Go to previous page">
			<PaginationButton
				className={ cn( '[&>span]:flex [&>span]:items-center' ) }
				{ ...props }
			>
				<ChevronLeft className={ cn( sizeClassNames[ size ].icon ) } />
			</PaginationButton>
		</li>
	);
};
PaginationPrevious.displayName = 'Pagination.Previous';

export const PaginationNext = ( props: PaginationButtonProps ) => {
	const { size, disabled } = usePageContext();
	return (
		<li className={ cn( 'flex', disabled && disabledClassNames.general ) } aria-label="Go to next page">
			<PaginationButton
				className={ cn( '[&>span]:flex [&>span]:items-center' ) }
				{ ...props }
			>
				<ChevronRight className={ cn( sizeClassNames[ size ].icon ) } />
			</PaginationButton>
		</li>
	);
};

PaginationNext.displayName = 'Pagination.Next';

export const PaginationEllipsis = ( props: PaginationCommonProps ) => {
	const { size, disabled } = usePageContext();
	return (
		<li className={ cn( 'flex', disabled && disabledClassNames.general ) }>
			<span
				className={ cn(
					'flex justify-center',
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
