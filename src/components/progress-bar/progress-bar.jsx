import { cn } from '@/utilities/functions';

const ProgressBar = ({
	progress = 0, // 0-100
	speed = 200,
	className = '',
}) => {
	if (!progress) {
		return null;
	}
	let percent = progress;
	if (progress < 0) {
		percent = 0;
	}
	if (progress > 100) {
		percent = 100;
	}

	const translateProperty = `translateX(-${100 - percent}%)`;
	const innerClasses = `h-2 rounded-full bg-background-brand absolute left-0 top-0 w-full bottom-0 origin-left transition-transform duration-${speed} ease-linear`;

	return (
		<div
			className={cn(
				'h-2 rounded-full bg-misc-progress-background overflow-hidden relative',
				className
			)}
			role="progressbar"
			aria-valuenow={percent}
			aria-valuemin="0"
			aria-valuemax="100"
            aria-label="Progress Bar"
		>
			<div
				className={innerClasses}
				style={{
					transform: translateProperty,
				}}
			/>
		</div>
	);
};

export default ProgressBar;
