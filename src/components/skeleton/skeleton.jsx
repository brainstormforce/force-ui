import React from 'react';
import { cn } from '@/utilities/functions';

const Skeleton = ( {
	variant = 'rectangular', // rectangular, circular
	className,
	...props
} ) => {
	const variantClasses = {
		circular: 'rounded-full bg-gray-200 ',
		rectangular: 'rounded-md bg-gray-200',
	}?.[ variant ];

	const defaultWidth = {
		circular: 'size-10',
		rectangular: 'w-96 h-3',
	}?.[ variant ];

	return (
		<div
			className={ cn(
				variantClasses,
				'animate-pulse',
				defaultWidth,
				className
			) }
			{ ...props }
		></div>
	);
};

export default Skeleton;
