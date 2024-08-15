import { cn } from '../../utilities/functions';

/**
 * Title component.
 */

const Title = ( {
	title = null,
	description = null,
	icon = null,
	iconPosition = 'right', // left, right
	tag = 'h2', // h1, h2, h3, h4, h5, h6
	size = 'sm', // xs, sm, md, lg
	className = '',
} ) => {
	// Base classes. - Mandatory classes.
	const iconGap = {
		xs: 'flex items-center gap-1',
		sm: 'flex items-center gap-1',
		md: 'flex items-center gap-1.5',
		lg: 'flex items-center gap-1.5',
	};

	if ( ! title ) {
		return null;
	}

	const getTitle = () => {
		const Tag = tag;
		const titleCommonClasses = 'font-semibold';
		// Size classes - Based on the size prop.
		const sizeClasses = {
			xs: 'text-base [&>*]:text-base [&>svg]:h-3.5 [&>svg]:w-3.5 gap-1 p-0 m-0',
			sm: 'text-lg [&>*]:text-lg [&>svg]:h-4 [&>svg]:w-4 gap-1 p-0 m-0',
			md: 'text-xl [&>*]:text-xl [&>svg]:h-5 [&>svg]:w-5 gap-1.5 p-0 m-0',
			lg: 'text-2xl [&>*]:text-2xl [&>svg]:h-5 [&>svg]:w-5 gap-1.5 p-0 m-0',
		};
		return ( <Tag className={ cn( titleCommonClasses, sizeClasses[ size ] ) }>{ title }</Tag> );
	};

	const getDescription = () => {
		const descriptionClasses = {
			xs: 'text-base',
			sm: 'text-lg',
			md: 'text-xl',
			lg: 'text-2xl',
		};
		return ( <span className={ cn( 'text-text-secondary font-normal', descriptionClasses[ size ] ) }>{ description }</span> );
	};

	if ( description ) {
		return (
			<div className={ className }>
				<div>
					{ icon && iconPosition === 'left' && (
						<div className={ iconGap[ size ] }>
							{ icon }
							{ getTitle() }
						</div>
					) }
					{ icon && iconPosition === 'right' && (
						<div className={ iconGap[ size ] }>
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
				<div className={ iconGap[ size ] }>
					{ icon }
					{ getTitle() }
				</div>
			) }
			{ icon && iconPosition === 'right' && (
				<div className={ iconGap[ size ] }>
					{ getTitle() }
					{ icon }
				</div>
			) }
			{ ! icon && getTitle() }
		</div>
	);
};

export default Title;
