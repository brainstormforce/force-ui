import { cn } from '@/utilities/functions';

export interface SkeletonProps {
	/** Defines the style variant of the skeleton. */
	variant?: 'rectangular' | 'circular';
	/** Allows you to pass custom classes to control the size and styles. */
	className?: string;
}

const Skeleton = ({
	variant = 'rectangular', // rectangular, circular
	className,
	...props
}: SkeletonProps): JSX.Element => {
	const variantClasses = {
		circular: 'rounded-full bg-gray-200 ',
		rectangular: 'rounded-md bg-gray-200',
	}?.[variant];

	const defaultWidth = {
		circular: 'size-10',
		rectangular: 'w-96 h-3',
	}?.[variant];

	return (
		<div
			className={cn(
				variantClasses,
				'animate-pulse',
				defaultWidth,
				className
			)}
			{...props}
		/>
	);
};

export default Skeleton;
