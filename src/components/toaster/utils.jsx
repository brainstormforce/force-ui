import { cloneElement, isValidElement } from 'react';
import { Check, Info, AlertTriangle, Trash2 } from 'lucide-react';
import { cn } from '@/utilities/functions';
import Button from '@/components/button';

const DEFAULT_THEME = 'light';
const DEFAULT_VARIANT = 'neutral';
const DEFAULT_ACTION_TYPE = 'button';

export const getIcon = ( {
	icon = null,
	theme = DEFAULT_THEME,
	variant = DEFAULT_VARIANT,
} ) => {
	const commonClasses = '[&>svg]:h-5 [&>svg]:w-5';
	const nColor =
		theme === 'light' ? 'text-icon-secondary' : 'text-icon-inverse';
	if ( icon && isValidElement( icon ) ) {
		const updatedIcon = cloneElement( icon, {
			className: cn( commonClasses, nColor, icon.props.className ),
		} );
		return { updatedIcon };
	}

	switch ( variant ) {
		case 'neutral':
			return <Info className={ cn( commonClasses, nColor ) } />;
		case 'info':
			const iColor =
				theme === 'light'
					? 'text-support-info'
					: 'text-support-info-inverse';
			return <Info className={ cn( commonClasses, iColor ) } />;
		case 'success':
			const sColor =
				theme === 'light'
					? 'text-support-success'
					: 'text-support-success-inverse';
			return <Check className={ cn( commonClasses, sColor ) } />;
		case 'warning':
			const wColor =
				theme === 'light'
					? 'text-support-warning'
					: 'text-support-warning-inverse';
			return <AlertTriangle className={ cn( commonClasses, wColor ) } />;
		case 'error':
			const dColor =
				theme === 'light'
					? 'text-support-error'
					: 'text-support-error-inverse';
			return <Trash2 className={ cn( commonClasses, dColor ) } />;
		default:
			return null;
	}
};

export const getAction = ( {
	actionType = DEFAULT_ACTION_TYPE,
	onAction = () => {},
	actionLabel = '',
	theme = DEFAULT_THEME,
} ) => {
	const commonClassNames =
		'focus:ring-0 focus:ring-offset-0 ring-offset-0 focus:outline-none';
	let classNames =
		'text-button-primary border-button-primary hover:border-button-primary hover:text-button-primary-hover';
	if ( theme === 'dark' ) {
		classNames =
			'text-text-inverse border-text-inverse hover:border-text-inverse hover:text-text-inverse';
	}
	switch ( actionType ) {
		case 'button':
			return (
				<Button
					variant="outline"
					size="xs"
					onClick={ onAction }
					className={ cn(
						'rounded',
						commonClassNames,
						classNames,
						theme === 'dark'
							? 'bg-transparent hover:bg-transparent'
							: 'bg-white hover:bg-white'
					) }
				>
					{ actionLabel }
				</Button>
			);
		case 'link':
			return (
				<Button
					variant="link"
					size="xs"
					onClick={ onAction }
					className={ cn( commonClassNames, classNames ) }
				>
					{ actionLabel }
				</Button>
			);
		default:
			return null;
	}
};

export const getTitle = ( { theme = DEFAULT_THEME, title = '' } ) => {
	if ( ! title && isNaN( title ) ) {
		return null;
	}
	const titleClasses = {
		light: 'text-text-primary',
		dark: 'text-text-inverse',
	};
	return (
		<span
			className={ cn(
				'block',
				titleClasses[ theme ],
				'text-sm leading-5 font-semibold'
			) }
		>
			{ title }
		</span>
	);
};

export const getContent = ( { theme = DEFAULT_THEME, content = '' } ) => {
	if ( ! content && isNaN( content ) ) {
		return null;
	}
	const contentClasses = {
		light: 'text-text-primary',
		dark: 'text-text-inverse',
	};
	return (
		<span
			className={ cn(
				contentClasses[ theme ],
				'block text-sm [&_*]:text-sm leading-5 [&_*]:leading-5 font-normal'
			) }
		>
			{ content }
		</span>
	);
};

/**
 * Merge all refs into a single function.
 * @param  {...Function} refs
 * 
 * @returns {Function}
 */
export const mergeRefs = ( ...refs ) => {
	return ( node ) => {
		refs.forEach( ( ref ) => {
			if ( typeof ref === 'function' ) {
				ref( node );
			} else if ( ref ) {
				ref.current = node;
			}
		} );
	};
}