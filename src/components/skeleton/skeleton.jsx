import React from 'react';
import { cn } from '@/utilities/functions';

const Skeleton = ( {
	variant = 'rectengular', // rectengular, circular
	className,
	...props
} ) => {
	const variantClasses = {
		circular: 'rounded-full bg-gray-200 ',
		rectangular: 'rounded-md bg-gray-200',
	}?.[ variant ];

	return (
		<div className={ cn( variantClasses, 'animate-pulse', className ) } { ...props }></div>
	);
};

export default Skeleton;
