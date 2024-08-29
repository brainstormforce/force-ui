import React from 'react';
import { cn } from '@/utilities/functions';

const Skeleton = ({
    variant = 'text', // 'text', 'circular', 'rectengular'
    width,
    height,
    fontSize = 'sm', // 'xs', 'sm', 'md', 'lg'
    children,
    className,
    ...props
 }) => {

    const variantClasses = {
        text: 'h-4 rounded bg-gray-300', // check how to set class for text
        circular: 'w-10 h-10 rounded-full bg-gray-300',
        rectangular: 'flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700',
    }?.[variant];

    const fontSizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    }?.[fontSize];

    return (
        <div className={cn(variantClasses, fontSizeClasses, 'animate-pulse', className)} { ...props }>
            {children}
        </div>
    )
}

export default Skeleton;