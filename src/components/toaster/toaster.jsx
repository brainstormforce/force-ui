import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { AlertTriangle, Trash2 } from 'lucide-react';
import { toast, ToastState } from './controller'
import { cn } from '@/utilities/functions';
import { getIcon, getAction, getContent, getTitle } from './utils';
import { containerVariantClassNames, positionClassNames } from './component-style';
import { flushSync } from 'react-dom';

const Toaster = ({
    position = 'top-right', // top-right/top-left/bottom-right/bottom-left
    design = 'stack', // stack/inline
    className = '',
}) => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        ToastState.subscribe((toastItem) => {
            if (toastItem?.dismiss) {
                setToasts((prevToasts) => prevToasts.map(tItem => tItem.id === toastItem.id ? { ...tItem, dismiss: true } : tItem));
                return;
            }

            setTimeout(() => {
                flushSync(() => setToasts((prevToasts) => {
                    const itemExists = prevToasts.findIndex((tItem) => tItem.id === toastItem.id);
                    // Update the existing toast.
                    if (itemExists !== -1) {
                        return prevToasts.map((tItem) => {
                            if (tItem.id === toastItem.id) {
                                return { ...tItem, ...toastItem };
                            }
                            return tItem;
                        });
                    }
                    return [...prevToasts, toastItem];
                }));
            });
        } );
    }, []);

    return (
        <ul
            className={cn(
                'fixed flex flex-col list-none z-20 p-10',
                positionClassNames[position] ?? positionClassNames['top-right'],
                containerVariantClassNames[design] ?? containerVariantClassNames.stack,
                className
            )}
        >
            {/* Main container */}
            {toasts.map((toastItem) => (
                <li key={nanoid()}>
                    <Toast
                        title={toastItem.title}
                        content={toastItem?.description}
                        design={design}
                        onClose={() => {
                            setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toastItem.id));
                        }}
                    />
                </li>
            ))}
        </ul>
    )
};

export const Toast = ( {
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
                    { getIcon( {variant, icon, theme} ) }
                </div>
                <div>
                    <div>{ getTitle( {title, theme} ) }</div>
                    <div>{ getContent( {content, theme} ) }</div>
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
