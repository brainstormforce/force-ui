import { twMerge } from 'tailwind-merge';
import './tailwind.css';


const Button = ( props ) => {

	const {
		variant = 'primary', // primary, secondary, outline, ghost, link
		size = 'medium', // extraSmall, small, medium, large
		iconPosition = 'left', // left, right
		type = 'button',
		className,
		onClick,
		children,
		disabled = false,
		destructive = false, // true, false
	} = props;

	console.log('Button props', props);

	// done things
	// primary - normal, hover
	// secondary - normal, hover

	// size - medium

	// todo
	// outline - normal, hover, focus, disabled
	// ghost - normal, hover, focus, disabled
	// link - normal, hover, focus, disabled
	// primary - focus, disabled
	// secondary - focus, disabled
	// sizes - extraSmall, small, large


	// colors: {
    //             primary: {
    //                 500: "#2563EB",
    //                 600: "#1D4ED8",
    //             },
    //             secondary: {
    //                 500: "#374151",
    //                 600: "#1F2937",
    //             },
    //         }

	// button with icon - icon position: left, right | gap between icon and text

	const commonClass = "text-white border border-solid cursor-pointer transition-colors duration-300 ease-in-out";

	const variantClassNames = {
		// primary: 'bg-primary-500 hover:bg-primary-600 focus-visible:primary-500 border-primary-500',
		// secondary: 'bg-secondary-600 hover:bg-secondary-500 focus-visible:secondary-600 border-secondary-600',
	};
	// box-shadow: 0px 0px 0px 4px #2563EB;

	// box-shadow: 0px 0px 0px 2px #FFFFFF;

	// const sizeClassNames = {
	// 	base: {
	// 		default: 'px-6 py-3',
	// 		hasPrefixIcon: 'pl-4 pr-6 py-3',
	// 		hasSuffixIcon: 'pl-6 pr-4 py-3',
	// 	},
	// 	extraSmall: {
	// 		default: 'px-5 py-2 h-[2.625rem]',
	// 		hasPrefixIcon: 'pl-3 pr-5 py-2 h-[2.625rem]',
	// 		hasSuffixIcon: 'pl-5 pr-3 py-2 h-[2.625rem]',
	// 	},
	// 	small: {
	// 		default: 'px-5 py-2 h-[2.625rem]',
	// 		hasPrefixIcon: 'pl-3 pr-5 py-2 h-[2.625rem]',
	// 		hasSuffixIcon: 'pl-5 pr-3 py-2 h-[2.625rem]',
	// 	},
	// 	medium: {
	// 		default: 'px-4 py-3 h-11',
	// 		hasPrefixIcon: 'pl-4 pr-6 py-3',
	// 		hasSuffixIcon: 'pl-6 pr-4 py-3',
	// 	},
	// 	large: {
	// 		default: 'px-4 py-3 h-11',
	// 		hasPrefixIcon: 'pl-4 pr-6 py-3',
	// 		hasSuffixIcon: 'pl-6 pr-4 py-3',
	// 	},
	// };
	const sizeClassNames = {
		medium: 'p-2.5 rounded-md',
	};


	const handleOnClick = (event) => {
		if (!!onClick && typeof onClick === 'function') {
			onClick(event);
		}
	};

	return (
		<button
			type={type}
			className={twMerge(
				commonClass,
				variantClassNames[variant],
				sizeClassNames[size],
				className
			)}
			onClick={handleOnClick}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
