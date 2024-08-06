import React, { useState } from 'react';
import { cn } from '../../utility/utils';

const Tooltip = (props) => {
    const {
        variant = 'light', // light, dark
        placement = 'top', // top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end
        // size = 'short', // short, long
        title = '', // Title of Tooltip
        description = '', // help text
        arrow = false,
        className,
        children // button, icons, links
    } = props;

    const [isVisible, setIsVisible] = useState(false);

    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);

    const baseClasses = 'relative inline-block';

    const tooltipClasses = 'absolute z-10 py-2 px-3 rounded-md soft-shadow-lg text-xs leading-4';

    const variantClasses = {
        light: 'bg-tooltip-background-light text-text-primary',
        dark: 'bg-tooltip-background-dark text-text-on-color'
    }?.[variant];

    const placementClasses = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-5',
        'top-start': 'bottom-full left-0 mb-5',
        'top-end': 'bottom-full right-0 mb-5',
        right: 'left-full top-1/2 transform -translate-y-1/2 ml-5',
        'right-start': 'left-full top-0 ml-5',
        'right-end': 'left-full bottom-0 ml-5',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-5',
        'bottom-start': 'top-full left-0 mt-5',
        'bottom-end': 'top-full right-0 mt-5',
        left: 'right-full top-1/2 transform -translate-y-1/2 mr-5',
        'left-start': 'right-full top-0 mr-5',
        'left-end': 'right-full bottom-0 mr-5'
    }?.[placement];

    const arrowPlacementClasses = {
        top: 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2',
        'top-start': 'bottom-0 left-4 translate-y-1/2',
        'top-end': 'bottom-0 right-4 translate-y-1/2',
        right: 'left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2',
        'right-start': 'left-0 top-4 -translate-x-1/2',
        'right-end': 'left-0 bottom-4 -translate-x-1/2',
        bottom: 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        'bottom-start': 'top-0 left-4 -translate-y-1/2',
        'bottom-end': 'top-0 right-4 -translate-y-1/2',
        left: 'right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2',
        'left-start': 'right-0 top-4 translate-x-1/2',
        'left-end': 'right-0 bottom-4 translate-x-1/2'
    }?.[placement];

    const arrowBorderClasses = {
        top: 'border-t-black',
        bottom: 'border-b-black',
        left: 'border-l-black',
        right: 'border-r-black'
    };

    return (
        <div
            className={cn(baseClasses, className)}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
            onBlur={hideTooltip}
        >
            {children}
            {isVisible && (
                <div className={cn(tooltipClasses, variantClasses, placementClasses)}>
                    <div className="flex flex-col">
                        <span>{title}</span>
                        {description && <span className="text-sm mt-1">{description}</span>}
                    </div>
                    {arrow && (
                        <div
                            className={cn(
                                'absolute w-3 h-3 transform rotate-45',
                                arrowPlacementClasses,
                                arrowBorderClasses[placement.split('-')[0]]
                            )}
                            style={{ backgroundColor: variant === 'light' ? 'white' : 'black' }}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Tooltip;