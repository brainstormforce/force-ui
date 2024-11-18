import React, { forwardRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/utilities/functions';
import { User } from 'lucide-react';

export type AvatarProps = {
	/** Defines the style variant of the avatar. */
	variant?: 'white' | 'gray' | 'primary' | 'primary-light' | 'dark';
	/** Defines the size of the avatar. */
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
	/** Defines the border of the avatar. */
	border?: 'none' | 'subtle' | 'ring';
	/** The URL of the Avatar image */
	url?: string;
	/** Defines the children of the avatar. */
	children?: ReactNode;
	/** Defines the extra classes */
	className?: string;
	/** The URL of the Avatar image. */
	src?: string;
	/** Alt text for the avatar image. */
	alt?: string;
} & Pick<React.HTMLAttributes<HTMLImageElement>, 'title'>;

type Ref = HTMLImageElement;

const Avatar = forwardRef<Ref, AvatarProps>(
	(
		{
			variant = 'primary',
			size = 'md',
			border = 'subtle',
			src: url,
			alt,
			children,
			className,
			...props
		},
		ref
	) => {
		const [ imageError, setImageError ] = useState<boolean>( false );

		const effectiveBorder = url && border === 'none' ? 'subtle' : border;
		const baseClassNames =
			'rounded-full overflow-hidden flex items-center justify-center';

		const variantClassNames = {
			white: 'text-text-primary bg-background-primary',
			gray: 'text-text-primary bg-background-secondary',
			primary: 'text-text-on-color bg-background-brand',
			'primary-light': 'text-text-primary bg-brand-background-50',
			dark: 'text-text-on-color bg-button-secondary',
		}?.[ variant ];

		const sizeClassNames = {
			xxs: 'size-5 [&>svg]:size-3 text-xs',
			xs: 'size-6 [&>svg]:size-4 text-sm',
			sm: 'size-8 [&>svg]:size-5 text-base',
			md: 'size-10 [&>svg]:size-6 text-lg',
			lg: 'size-12 [&>svg]:size-12 text-lg',
		}?.[ size ];

		const borderClassNames = {
			none: '',
			subtle: 'ring-1 ring-border-transparent-subtle',
			ring: 'ring ring-border-subtle',
		}?.[ effectiveBorder ];

		const contentClassNames = url ? 'object-cover object-center' : '';

		const getChildren = () => {
			// When image url is provided and image is not loaded, show children.
			if ( url && imageError ) {
				if ( alt && typeof alt === 'string' ) {
					return alt?.[ 0 ]?.toUpperCase();
				} else if ( children && typeof children === 'string' ) {
					return children?.[ 0 ]?.toUpperCase();
				} else if ( ! children && ! alt ) {
					return <User />;
				}
			}

			// For text avatars.
			if ( ! children ) {
				return null;
			}
			if ( typeof children === 'string' ) {
				return children?.[ 0 ]?.toUpperCase();
			}
			return children;
		};

		const handleImageError = () => {
			setImageError( true );
		};

		// Image or Text Avatar.
		const textAvatar = ! url || imageError;

		// If image url is not provided, show children.
		const Tag = textAvatar ? 'div' : 'img';

		useEffect( () => {
			setImageError( false );
		}, [ url ] );

		return (
			<Tag
				ref={ ref }
				className={ cn(
					baseClassNames,
					textAvatar && variantClassNames,
					sizeClassNames,
					borderClassNames,
					contentClassNames,
					className
				) }
				{ ...( textAvatar
					? { children: getChildren() }
					: { src: url, alt, onError: handleImageError } ) }
				{ ...props }
			/>
		);
	}
);

export default Avatar;
