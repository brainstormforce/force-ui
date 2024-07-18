import { twMerge } from 'tailwind-merge';
import './tailwind.css';


const Button = (
	{
		variant = 'primary',
		isSmall = false,
		hasSuffixIcon = false,
		hasPrefixIcon = false,
		type = 'button',
		className,
		onClick,
		children,
		disabled = false,
		id = '',
		...props
	}
) => {
	const buttonSize = isSmall ? 'small' : 'base';
	const variantClassNames = {
		primary:
			'text-white bg-primary-900 hover:bg-blue-600 focus-visible:ring-blue-500 border border-solid border-blue-500',
		white: 'text-blue-500 bg-white border border-solid border-blue-500 focus-visible:ring-blue-500',
		dark: 'text-white border border-white bg-transparent border-solid',
		link: 'underline border-0 bg-transparent',
		blank: 'bg-transparent border-transparent',
		gray: 'bg-transparent border border-solid border-gray-500 hover:bg-gray-200 text-black/50',
		'gray-selected': 'bg-gray-500 text-white',
		other: '',
		'gradient-border':
			'bg-transparent text-zip-app-heading zw-base-bold gradient-border-cover gradient-border-cover-button',
		gradient:
			'bg-gradient-to-r from-gradient-color-1 via-46.88 via-gradient-color-2 to-gradient-color-3 text-white zw-base-bold',
		'border-secondary':
			'text-app-secondary bg-app-light-background border border-app-secondary shadow-sm',
	};
	const sizeClassNames = {
		base: {
			default: 'px-6 py-3',
			hasPrefixIcon: 'pl-4 pr-6 py-3',
			hasSuffixIcon: 'pl-6 pr-4 py-3',
		},
		medium: {
			default: 'px-4 py-3 h-11',
			hasPrefixIcon: 'pl-4 pr-6 py-3',
			hasSuffixIcon: 'pl-6 pr-4 py-3',
		},
		small: {
			default: 'px-5 py-2 h-[2.625rem]',
			hasPrefixIcon: 'pl-3 pr-5 py-2 h-[2.625rem]',
			hasSuffixIcon: 'pl-5 pr-3 py-2 h-[2.625rem]',
		},
	};
	const typographyClassNames = {
		base: 'text-base font-medium',
		small: 'text-sm font-medium',
	};
	const borderRadiusClassNames = {
		base: 'rounded-md',
		small: 'rounded',
	};

	const handleOnClick = ( event ) => {
		if ( !! onClick && typeof onClick === 'function' ) {
			onClick( event );
		}
	};

	return (
		<button
			type={ type }
			className={ twMerge(
				'group flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out cursor-pointer border-0',
				variantClassNames[ variant ],
				! hasPrefixIcon &&
					! hasSuffixIcon &&
					sizeClassNames[ buttonSize ].default,
				hasPrefixIcon && sizeClassNames[ buttonSize ].hasPrefixIcon,
				hasSuffixIcon && sizeClassNames[ buttonSize ].hasSuffixIcon,
				typographyClassNames[ buttonSize ],
				borderRadiusClassNames[ buttonSize ],
				disabled && 'cursor-not-allowed opacity-70',
				className
			) }
			onClick={ handleOnClick }
			disabled={ disabled }
			{ ...( id && { id } ) }
			{ ...props }
		>
			{ children }
		</button>
	);
};

export default Button;
