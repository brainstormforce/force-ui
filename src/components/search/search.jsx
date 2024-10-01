import { cn } from '@/utilities/functions';
import { File, Folder, Search, SquareSlash } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Label } from '..';
import Loader from '../loader';

const SearchBox = ( props ) => {
	const {
		onChange = () => { },
		handleResultClick = () => { },
		placeholder = 'Search',
		variant = 'primary', // primary, secondary, ghost
		disabled = false,
		size = 'sm', // sm, md, lg
		loading = false,
		loadingIcon = <Loader />, // Default loading icon
		searchResult = [],
		additionalResult = [],
		searchResultIcon = <File />,
		additionalResultLabel = 'Category',
		additionalResultIcon = <Folder />,
		className,
		children,
	} = props;

	const [ isOpen, setIsOpen ] = useState( false );

	// Close dropdown on click outside
	useEffect( () => {
		const handleClickOutside = ( event ) => {
			if ( ! event.target.closest( '.searchbox-wrapper' ) ) {
				setIsOpen( false );
			}
		};
		document.addEventListener( 'mousedown', handleClickOutside );
		return () => {
			document.removeEventListener( 'mousedown', handleClickOutside );
		};
	}, [] );

	const commonClass = 'relative w-full focus-within:z-10';
	const baseClasses = 'font-normal placeholder-text-tertiary text-text-secondary w-full focus:outline-none';

	const sizeClasses = {
		sm: 'p-1 rounded-md text-xs [&>svg]:h-4 [&>svg]:w-4',
		md: 'p-1.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5',
		lg: 'p-2 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6',
	}[ size ];

	const inputPaddingClasses = {
		xs: 'pl-8',
		sm: 'pl-8',
		md: 'pl-10',
		lg: 'pl-12',
	}[ size ];

	const variantClasses = {
		primary: 'border border-solid border-border-subtle bg-field-primary-background',
		secondary: 'border border-solid border-border-subtle bg-field-secondary-background',
		ghost: 'text-text-secondary bg-transparent border border-transparent',
	}[ variant ];

	const hoverClasses = disabled
		? 'hover:border-border-disabled'
		: 'hover:border-border-strong text-text-primary';
	const focusClasses = 'focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
	const iconClasses = 'pointer-events-none absolute inset-y-0 flex flex-1 items-center';

	const disabledClasses = disabled
		? 'border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled'
		: '';

	const handleSearchChange = ( e ) => {
		setIsOpen( true );
		onChange( e.target.value );
	};

	return (
		<div
			className={ cn(
				'searchbox-wrapper', // Unique class for outside click detection
				commonClass,
				sizeClasses,
				className
			) }
		>
			<div className={ cn( 'w-full no-clear-button group relative flex focus-within:z-10' ) }>
				<span className={ cn( iconClasses, sizeClasses, 'left-0 z-20 text-gray-500 group-hover:text-text-primary' ) }>
					<Search />
				</span>
				<input
					type="search"
					placeholder={ placeholder }
					className={ cn(
						baseClasses,
						variantClasses,
						disabledClasses,
						sizeClasses,
						inputPaddingClasses,
						focusClasses,
						hoverClasses,
						variant === 'ghost' && 'hover:border-transparent',
						'no-clear-button' // Custom tailwind to remove default clear icon in search input
					) }
					disabled={ disabled }
					onChange={ handleSearchChange }
				/>
				<span className={ cn( iconClasses, sizeClasses, 'bg-field-secondary-background right-0 m-0.5 z-20 text-gray-500 group-hover:text-text-primary' ) }>
					<SquareSlash />
				</span>
			</div>
			{ isOpen && (
				<div
					className={ cn(
						'absolute bg-background-primary rounded-md p-2 mt-2 w-full left-0 z-50 border-border-strong shadow-lg max-h-60 overflow-y-auto',
						sizeClasses
					) }
				>
					{ loading ? (
						<div className="justify-center p-4">
							{ loadingIcon }
						</div>
					) : (
						<>
							{ /* Search results */ }
							<Label className={ cn( sizeClasses ) }>Results</Label>
							{ searchResult.length > 0 ? (
								searchResult.map( ( item, index ) => (
									<div
										key={ index }
										className={ cn( 'flex items-center gap-1 p-1 text-gray-500 hover:bg-gray-200 cursor-pointer', sizeClasses ) }
										onClick={ handleResultClick }
									>
										{ searchResultIcon }
										<Label className={ cn( sizeClasses, 'w-full' ) }>{ item }</Label>
									</div>
								) )
							) : (
								<div className={ cn( sizeClasses, 'text-text-secondary text-center' ) }>
									No Results found
								</div>
							) }
							{ /* Additional categories */ }
							{ ( additionalResultLabel ) && (
								<>
									<hr className="w-full text-text-tertiary" />
									<Label className={ cn( sizeClasses ) }>{ additionalResultLabel }</Label>
									{ ( additionalResult.length > 0 ) ? ( additionalResult.map( ( item, index ) => (
										<div
											key={ index }
											className={ cn( 'flex items-center gap-1 p-1 hover:bg-gray-200 cursor-pointer', sizeClasses ) }
											onClick={ handleResultClick }
										>
											{ additionalResultIcon }
											<Label className={ cn( sizeClasses ) }>{ item }</Label>
										</div>
									) ) )
										: ( <div className={ cn( sizeClasses, 'text-text-secondary text-center' ) }>
											No { additionalResultLabel } found
										</div> ) }
								</>
							) }
						</>
					) }
				</div>
			) }
			{ children }
		</div>
	);
};

export default SearchBox;
