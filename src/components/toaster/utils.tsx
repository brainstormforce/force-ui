import React, { cloneElement, isValidElement } from 'react';
import { Check, Info, AlertTriangle, Trash2 } from 'lucide-react';
import { cn } from '@/utilities/functions';
import Button from '../button';

const DEFAULT_THEME = 'light';
const DEFAULT_VARIANT = 'neutral';
const DEFAULT_ACTION_TYPE = 'button';

export const getIconColor = ( {
	theme = DEFAULT_THEME,
	variant = DEFAULT_VARIANT,
} ) => {
	let color = theme === 'light' ? 'text-icon-secondary' : 'text-icon-inverse';
	const variantClasses = {
		info:
			theme === 'light'
				? 'text-support-info'
				: 'text-support-info-inverse',
		success:
			theme === 'light'
				? 'text-support-success'
				: 'text-support-success-inverse',
		warning:
			theme === 'light'
				? 'text-support-warning'
				: 'text-support-warning-inverse',
		error:
			theme === 'light'
				? 'text-support-error'
				: 'text-support-error-inverse',
	};
	color = variantClasses[ variant as keyof typeof variantClasses ] || color;

	return color;
};

export const getIcon = ( {
	icon,
	theme = DEFAULT_THEME,
	variant = DEFAULT_VARIANT,
}: {
	icon?: React.ReactElement | null;
	theme?: string;
	variant?: string;
} ) => {
	const commonClasses = '[&>svg]:h-5 [&>svg]:w-5';
	const color = getIconColor( { theme, variant } );

	if ( icon && isValidElement( icon ) ) {
		const updatedIcon = cloneElement( icon as React.ReactElement, {
			className: cn(
				commonClasses,
				color,
				( icon as React.ReactElement )?.props?.className ?? ''
			),
		} );
		return updatedIcon;
	}

	const icons = {
		neutral: <Info className={ cn( commonClasses, color ) } />,
		info: <Info className={ cn( commonClasses, color ) } />,
		success: <Check className={ cn( commonClasses, color ) } />,
		warning: <AlertTriangle className={ cn( commonClasses, color ) } />,
		error: <Trash2 className={ cn( commonClasses, color ) } />,
	};

	return icons[ variant as keyof typeof icons ] || icons.neutral;
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

export const getTitle = ( {
	theme = DEFAULT_THEME,
	title = '',
}: {
	theme?: string;
	title?: string | React.ReactNode;
} ) => {
	if ( ! title && Number.isNaN( title ) ) {
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
				titleClasses[ theme as keyof typeof titleClasses ],
				'text-sm leading-5 font-semibold'
			) }
		>
			{ title }
		</span>
	);
};

export const getContent = ( {
	theme = DEFAULT_THEME,
	content = '',
}: {
	theme?: string;
	content?: string | React.ReactNode;
} ) => {
	if ( ! content && Number.isNaN( content ) ) {
		return null;
	}
	const contentClasses = {
		light: 'text-text-primary',
		dark: 'text-text-inverse',
	};
	return (
		<span
			className={ cn(
				contentClasses[ theme as keyof typeof contentClasses ],
				'block text-sm [&_*]:text-sm leading-5 [&_*]:leading-5 font-normal'
			) }
		>
			{ content }
		</span>
	);
};

/**
 * Merge all refs into a single function.
 * @param {...Function} refs
 *
 * @return {Function} A function that will call all refs with the node.
 */
interface MergeRefs {
	( node: HTMLElement | null ): void;
}

export const mergeRefs = (
	...refs: ( React.Ref<HTMLElement> | undefined )[]
): MergeRefs => {
	return ( node: HTMLElement | null ) => {
		refs.forEach( ( ref ) => {
			if ( typeof ref === 'function' ) {
				ref( node );
			} else if ( ref ) {
				( ref as React.MutableRefObject<HTMLElement | null> ).current =
					node;
			}
		} );
	};
};
