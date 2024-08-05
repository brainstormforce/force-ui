import React, { useState } from 'react';
import { cn } from '../../utility/utils';

const Tooltip = (props) => {
    const {
        variant = 'light', // light, dark
        placement = 'top', // top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end
        size = 'short', // short, long
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

    const tooltipClasses = 'absolute z-10 p-2 rounded shadow-lg';

    const variantClasses = {
        light: 'bg-white text-black',
        dark: 'bg-black text-white'
    }?.[variant];

    const sizeClasses = {
        short: 'w-40',
        long: 'w-60'
    }?.[size];

    const placementClasses = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        right: '',
        bottom: '',
        left: ''
    }?.[placement];

    return (
        <div
            className={ cn(baseClasses, className)}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
        >
            {children}
            {isVisible && (
                <div className={ cn(tooltipClasses, variantClasses, sizeClasses, placementClasses)}>
                    <div className="flex flex-col">
                        <span>{title}</span>
                        {description && <span className="text-sm mt-1">{description}</span>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;