import { cn } from '@/utilities/functions';
import { type ReactNode } from 'react';

/**
 * Title component.
 */

/**
 * Props for the Title component.
 */
export declare interface TitleProps {
	/** The main title text to render. */
	title?: string;

	/** Optional description text to display below the title. */
	description?: string;

	/** Icon element to display alongside the title. */
	icon?: ReactNode;

	/** Determines the position of the icon relative to the title. */
	iconPosition?: 'left' | 'right';

	/** HTML tag to use for the title (e.g., h1, h2, h3). */
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

	/** Size variant of the title (affects both title and description styles) - xs, sm, md, lg. */
	size?: 'xs' | 'sm' | 'md' | 'lg';

	/** Additional class names to apply to the root element. */
	className?: string;
}

export const Title = ( {
	title = '',
	description = '',
	icon = null,
	iconPosition = 'right', // left, right
	tag = 'h2', // h1, h2, h3, h4, h5, h6
	size = 'sm', // xs, sm, md, lg
	className = '',
}: TitleProps ) => {
	// Base classes. - Mandatory classes.
	const iconGap = {
		xs: 'gap-1 [&>svg]:size-3.5',
		sm: 'gap-1 [&>svg]:size-4',
		md: 'gap-1.5 [&>svg]:size-5',
		lg: 'gap-1.5 [&>svg]:size-5',
	};

	if ( ! title ) {
		return null;
	}

	const getTitle = () => {
		const Tag = tag;
		const titleCommonClasses = 'font-semibold p-0 m-0';
		// Size classes - Based on the size prop.
		const sizeClasses = {
			xs: 'text-base [&>*]:text-base gap-1',
			sm: 'text-lg [&>*]:text-lg gap-1',
			md: 'text-xl [&>*]:text-xl gap-1.5',
			lg: 'text-2xl [&>*]:text-2xl gap-1.5',
		};
		return (
			<Tag className={ cn( titleCommonClasses, sizeClasses[ size ] ) }>
				{ title }
			</Tag>
		);
	};

	const getDescription = () => {
		const descriptionClasses = {
			xs: 'text-sm',
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-base',
		};
		return (
			<p
				className={ cn(
					'text-text-secondary font-normal my-0',
					descriptionClasses[ size ]
				) }
			>
				{ description }
			</p>
		);
	};

	if ( description ) {
		return (
			<div className={ className }>
				<div>
					{ icon && iconPosition === 'left' && (
						<div className={ cn( 'flex items-center', iconGap[ size ] ) }>
							{ icon }
							{ getTitle() }
						</div>
					) }
					{ icon && iconPosition === 'right' && (
						<div className={ cn( 'flex items-center', iconGap[ size ] ) }>
							{ getTitle() }
							{ icon }
						</div>
					) }
					{ ! icon && getTitle() }
				</div>
				{ getDescription() }
			</div>
		);
	}

	return (
		<div className={ className }>
			{ icon && iconPosition === 'left' && (
				<div className={ cn( 'flex items-center', iconGap[ size ] ) }>
					{ icon }
					{ getTitle() }
				</div>
			) }
			{ icon && iconPosition === 'right' && (
				<div className={ cn( 'flex items-center', iconGap[ size ] ) }>
					{ getTitle() }
					{ icon }
				</div>
			) }
			{ ! icon && getTitle() }
		</div>
	);
};

export default Title;
