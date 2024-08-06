import { AlertTriangle, Trash2 } from 'lucide-react';
import { cn } from '../../utility/utils';
import { getIcon, getAction, getContent, getTitle } from './utils';
import { get } from 'grunt';

/**
 * Badge component.
 */

const Toaster = ( {
	title = null,
    content = null,
    actionLabel = null,
    actionType = 'button', // button/link/none
    onAction,
    onClose,
    autoDismiss = true,
    dismissAfter = 5000,
    theme = 'light', // light/dark
	design = 'inline', // inline/stack
    icon = null,
	className = '',
	variant = 'neutral', // neutral/info/success/warning/danger
	...props
} ) => {
	// Base classes. - Mandatory classes.
	const baseClasses = 'text-sm shadow-lg';

	// Size classes - Based on the size prop.
	// const sizeClasses = {
	// 	xs: 'text-xs [&>*]:text-xs [&>svg]:h-3 [&>svg]:w-3',
	// 	sm: 'text-sm [&>*]:text-sm [&>svg]:h-4 [&>svg]:w-4',
	// 	md: 'text-base [&>*]:text-base [&>svg]:h-5 [&>svg]:w-5',
	// };

    

	// Variant classes - Based on the variant prop.
	const variantClasses = {
		neutral: 'text-field-label [&>*]:text-field-label',
		info: 'text-field-helper [&>*]:text-field-helper',
		success: 'text-support-error [&>*]:text-support-error',
		warning: 'text-field-color-disabled disabled cursor-not-allowed [&>*]:text-field-color-disabled',
        danger: 'text-field-color-disabled disabled cursor-not-allowed [&>*]:text-field-color-disabled',
	};

    if ( design === 'stack' ) {
        return (
            <div className='flex items-center justify-start'>
                <div>
                    { getIcon( props ) }
                </div>
                <div>
                    <div>{ getTitle( props ) }</div>
                    <div>{ getContent( props ) }</div>
                </div>
            </div>
        );
    }
    
    if ( design === 'inline' ) {
        return (
            <div className='flex items-center justify-start'>
                <div>
                    { getIcon( props ) }
                    <div>{ getTitle( props ) }</div>
                </div>
                <div>
                    <div>{ getContent( props ) }</div>
                </div>
            </div>
        );
    }

	return (
		<div
			htmlFor={ forId }
			className={
				cn(
					baseClasses,
					// sizeClasses[ size ],
					variantClasses[ variant ],
					className
				)
			}
			{ ...props }
		>
			<div>
                {/*icon*/}
            </div>
		</div>
	);
};

export default Toaster;
