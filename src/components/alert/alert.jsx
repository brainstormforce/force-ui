import { cn } from '@/utilities/functions';
import { getIcon, getAction, getContent, getTitle } from '../toaster/utils';
import { X } from 'lucide-react';

const Alert = ( {
	design = 'inline', // stack/inline
	theme = 'light', // light/dark
	variant = 'neutral',
	className = '',
	title = 'Title',
	content = 'Description',
	icon = null,
	onClose = () => {},
	action = {
		label: '',
		onClick: () => {},
		type: 'link',
	},
} ) => {
	const closeAlert = () => {
		onClose();
	};

	// Variant classes - Based on the variant prop.
	const variantClassNames = {
		light: {
			neutral: 'ring-alert-border-neutral bg-alert-background-neutral',
			custom: 'ring-alert-border-neutral bg-alert-background-neutral',
			info: 'ring-alert-border-info bg-alert-background-info',
			success: 'ring-alert-border-green bg-alert-background-green',
			warning: 'ring-alert-border-warning bg-alert-background-warning',
			error: 'ring-alert-border-danger bg-alert-background-danger',
		},
		dark: 'bg-background-inverse ring-background-inverse',
	};

	// Close icon class names.
	const closeIconClassNames = {
		light: 'text-icon-secondary',
		dark: 'text-icon-inverse',
	};

	const handleAction = () => {
		action?.onClick?.( () => closeAlert() );
	};

	if ( design === 'stack' ) {
		return (
			<div
				className={ cn(
					'flex items-center justify-start p-4 gap-2 relative ring-1 rounded-md shadow-lg',
					theme === 'dark'
						? variantClassNames.dark
						: variantClassNames.light?.[ variant ],
					className
				) }
			>
				<>
					<div className="self-start flex items-center justify-center [&_svg]:size-5 shrink-0">
						{ getIcon( { variant, icon, theme } ) }
					</div>
					<div className="flex flex-col items-start justify-start gap-0.5">
						{ getTitle( { title, theme } ) }
						{ getContent( { content, theme } ) }
						{
							action?.label &&
								typeof action?.onClick === 'function' && (
							/* eslint-disable */
									<div className="mt-2.5">
										{getAction({
											actionLabel: action?.label,
											actionType:
												action?.type ?? 'button',
											onAction: handleAction,
											theme,
										})}
									</div>
								)
							/* eslint-enable */
						}
					</div>
					<div className="absolute right-4 top-4 [&_svg]:size-5">
						<button
							className={ cn(
								'bg-transparent m-0 p-0 border-none focus:outline-none active:outline-none cursor-pointer',
								closeIconClassNames[ theme ] ??
									closeIconClassNames.light
							) }
							onClick={ () => closeAlert() }
						>
							<X />
						</button>
					</div>
				</>
			</div>
		);
	}

	return (
		<div
			className={ cn(
				'flex items-center justify-between p-3 gap-2 relative ring-1 rounded-lg shadow-lg',
				theme === 'dark'
					? variantClassNames.dark
					: variantClassNames.light?.[ variant ],
				className
			) }
		>
			<div className="flex items-center justify-start gap-2">
				<div className="self-start flex items-center justify-center [&_svg]:size-5 shrink-0">
					{ getIcon( { variant, icon, theme } ) }
				</div>
				<div className="flex items-start justify-start gap-1 mr-10 [&>span:first-child]:shrink-0 px-1">
					{ getTitle( { title, theme } ) }
					{ getContent( { content, theme } ) }
				</div>
			</div>
			<div className="flex items-center justify-start gap-4 [&_svg]:size-4">
				{
					action?.label && typeof action?.onClick === 'function' && (
						/* eslint-disable */
						<div className="flex h-5">
							{getAction({
								actionLabel: action?.label,
								actionType: action?.type ?? 'button',
								onAction: handleAction,
								theme,
							})}
						</div>
					)
					/* eslint-enable */
				}
				<button
					className={ cn(
						'bg-transparent m-0 border-none p-0.5 focus:outline-none active:outline-none cursor-pointer size-5',
						closeIconClassNames[ theme ] ?? closeIconClassNames.light
					) }
					onClick={ () => closeAlert() }
				>
					<X />
				</button>
			</div>
		</div>
	);
};

export default Alert;
