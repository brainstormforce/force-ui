import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { X } from 'lucide-react';
import { toast, ToastState } from './controller'
import { cn } from '@/utilities/functions';
import { getIcon, getAction, getContent, getTitle } from './utils';
import { closeIconClassNames, containerVariantClassNames, positionClassNames, variantClassNames } from './component-style';
import { flushSync } from 'react-dom';

const Toaster = ({
    position = 'top-right', // top-right/top-left/bottom-right/bottom-left
    design = 'stack', // stack/inline
    className = '',
    autoDismiss = false,
    dismissAfter = 5000,
}) => {
    const [toasts, setToasts] = useState([]);

    console.table(toasts);

    useEffect(() => {
        ToastState.subscribe((toastItem) => {
            if (toastItem?.dismiss) {
                setToasts((prevToasts) => prevToasts.map(tItem => tItem.id === toastItem.id ? { ...tItem, dismiss: true } : tItem));
                console.log('Toast dismissed');
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

    const removeToast = (id) => {
        console.log('Removing toast', id);
        // toast.dismiss(id);
        setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    }

    return (
        <ul
            className={cn(
                'fixed flex flex-col list-none z-20 p-10 pointer-events-none [&>li]:pointer-events-auto',
                positionClassNames[position] ?? positionClassNames['top-right'],
                containerVariantClassNames[design] ?? containerVariantClassNames.stack,
                className
            )}
        >
            {/* Main container */}
            {toasts.map((toastItem) => (
                <li key={nanoid()}>
                    <Toast
                        toastItem={toastItem}
                        title={toastItem.title}
                        content={toastItem?.description}
                        design={design}
                        autoDismiss={autoDismiss}
                        dismissAfter={dismissAfter}
                        removeToast={removeToast}
                        variant={toastItem.type}
                    />
                </li>
            ))}
        </ul>
    )
};

export const Toast = ( {
    toastItem,
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
    removeToast, // Function to remove the toast.
	...props
} ) => {
	// Base classes. - Mandatory classes.
	const baseClasses = 'text-sm shadow-lg';
    const closeTimerStart = useRef(0);
    const lastCloseTimerStart = useRef(0);

	// Size classes - Based on the size prop.
	// const sizeClasses = {
	// 	xs: 'text-xs [&>*]:text-xs [&>svg]:h-3 [&>svg]:w-3',
	// 	sm: 'text-sm [&>*]:text-sm [&>svg]:h-4 [&>svg]:w-4',
	// 	md: 'text-base [&>*]:text-base [&>svg]:h-5 [&>svg]:w-5',
	// };


    const startTimer = (toastItem, remainingTime = dismissAfter) => {
        // If auto dismiss is disabled, or the dismissAfter is less than 0, return.
        if (!autoDismiss || dismissAfter < 0) {
            return;
        }

        closeTimerStart.current = new Date().getTime();
        return setTimeout(() => {
            removeToast(toastItem.id);
        }, remainingTime);
    }

    useEffect(() => {
        let timeoutId = 0;
        let remainingTime = dismissAfter;

        timeoutId = startTimer(toastItem, remainingTime);

        // pause timer on mouse enter
        // pauseTimer();
        return () => {
            clearTimeout(timeoutId);
        }
    }, []);

    useEffect(() => {
        if (! toastItem?.dismiss) {
            return;   
        }
        removeToast(toastItem.id);
    }, [toastItem]);

    if ( design === 'stack' ) {
        return (
            <div className={cn(
                'flex items-center justify-start p-4 gap-2 relative border border-solid rounded-md',
                variantClassNames[variant],
            )}>
                <div className='self-start flex items-center justify-center [&_svg]:size-5 shrink-0'>
                    { getIcon( {variant, icon, theme} ) }
                </div>
                <div className='flex flex-col items-start justify-start gap-0.5'>
                    { getTitle( {title, theme} ) }
                    { getContent( {content, theme} ) }
                </div>
                {/* <div>
                    { getAction( {actionLabel, actionType, onAction, theme} ) }
                </div> */}
                <div className='absolute right-4 top-4 [&_svg]:size-5'>
                    <button className={cn(
                        'bg-transparent m-0 p-0 border-none focus:outline-none active:outline-none cursor-pointer',
                        closeIconClassNames[theme] ?? closeIconClassNames.light
                    )} onClick={() => removeToast(toastItem.id)}>
                        <X />
                    </button>
                </div>
            </div>
        );
    }
    
    if ( design === 'inline' ) {
        return (
            <div className='flex items-center justify-start'>
                <div>
                    { getIcon( {variant, icon, theme} ) }
                    <div>{ getTitle( {title, theme} ) }</div>
                </div>
                <div>
                    <div>{ getContent( {content, theme} ) }</div>
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
					variantClassNames[ variant ],
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
