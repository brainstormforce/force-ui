import { cn } from '../../utilities/functions';
import { X, Info } from 'lucide-react';

/**
 * Badge component.
 */

const Badge = ( props ) => {
	const {
		label = '',
		size = 'sm', // xs, sm, md, lg
		className = '',
		type = 'pill', // pill, rounded
		variant = 'neutral', // neutral, red, yellow, green, blue, inverse
		icon = <Info />,
		disabled = false,
		onClose = () => {},
		closable = true,
	} = props;

	// Base classes. - Mandatory classes.
	const baseClasses = 'font-medium border border-badge-border-gray flex gap-1 items-center justify-center border border-solid';

	// Size classes - Based on the size prop.
	const sizeClasses = {
		xs: 'py-0.5 px-1 text-xs',
		sm: 'py-1 px-1.5 text-xs',
		md: 'py-1 px-1.5 text-sm',
		lg: 'py-1 px-1.5 text-base',
	};

	// Type classes - Based on the type prop.
	const typeClasses = {
		pill: 'rounded-full',
		rounded: 'rounded',
	};

	// Variant classes - Based on the variant prop.
	const variantClasses = {
		neutral: 'bg-badge-background-gray hover:bg-badge-hover-gray text-badge-color-gray border-badge-border-gray',
		red: 'bg-badge-background-red hover:bg-badge-hover-red text-badge-color-red border-badge-border-red',
		yellow: 'bg-badge-background-yellow hover:bg-badge-hover-yellow text-badge-color-yellow border-badge-border-yellow',
		green: 'bg-badge-background-green hover:bg-badge-hover-green text-badge-color-green border-badge-border-green',
		blue: 'bg-badge-background-sky hover:bg-badge-hover-sky text-badge-color-sky border-badge-border-sky',
		inverse: 'bg-background-inverse hover:bg-badge-hover-inverse text-text-inverse border-background-inverse',
		disabled: 'bg-badge-background-disabled hover:bg-badge-hover-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed',
	};

	let filteredClasses = '';
	let buttonClasses = 'group relative justify-center flex items-center [&>svg]:h-4 [&>svg]:w-4 cursor-pointer';

	if ( disabled ) {
		filteredClasses = variantClasses.disabled;
		buttonClasses += ' cursor-not-allowed disabled';
	} else {
		filteredClasses = variantClasses[ variant ];
	}

	if ( ! label ) {
		return null;
	}

	return (
		<span className={ cn( baseClasses, sizeClasses[ size ], typeClasses[ type ], filteredClasses, className ) }>
			{ icon ? <span className="justify-center flex items-center [&>svg]:h-4 [&>svg]:w-4">{ icon }</span> : null }
			{ label }
			{ closable && (
				<span className={ buttonClasses } onClick={ ! disabled ? onClose : null }>
					<span className="sr-only">{ `Remove ${ label }` }</span>
					<X />
					<span className="absolute -inset-1" />
				</span>
			) }
		</span>
	);
};

export default Badge;
