import { cn } from '@/utilities/functions';

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
