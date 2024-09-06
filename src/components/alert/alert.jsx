import { cn } from '../../utilities/functions';
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
		label: 'Action',
		onClick: () => {},
		type: 'link',
	},
} ) => {
	const closeAlert = () => {
		onClose();
	};

	const containerVariantClassNames = {
		stack: 'w-[22.5rem]',
		inline: 'lg:w-[47.5rem] w-full',
	};

	// Variant classes - Based on the variant prop.
	const variantClassNames = {
		light: {
			neutral: 'border-alert-border-neutral bg-alert-background-neutral',
			custom: 'border-alert-border-neutral bg-alert-background-neutral',
			info: 'border-alert-border-info bg-alert-background-info',
			success: 'border-alert-border-green bg-alert-background-green',
			warning: 'border-alert-border-warning bg-alert-background-warning',
			error: 'border-alert-border-danger bg-alert-background-danger',
		},
		dark: 'bg-background-inverse border-background-inverse',
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
					'flex items-center justify-start p-4 gap-2 relative border border-solid rounded-md shadow-lg',
					theme === 'dark'
						? variantClassNames.dark
						: variantClassNames.light?.[ variant ],
					containerVariantClassNames.inline,
					className,
				) }
			>
				<>
					<div className="self-start flex items-center justify-center [&_svg]:size-5 shrink-0">
						{ getIcon( { variant, icon, theme } ) }
					</div>
					<div className="flex flex-col items-start justify-start gap-0.5">
						{ getTitle( { title, theme } ) }
						{ getContent( { content, theme } ) }
						{ action?.label &&
								typeof action?.onClick ===
									'function' && (
							/* eslint-disable */
									<div className="mt-2.5">
									{ getAction( {
										actionLabel:
												action?.label,
										actionType:
												action?.type ??
												'button',
										onAction: handleAction,
										theme,
									} ) }
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
				'flex items-center justify-between p-3 gap-2 relative border border-solid rounded-md shadow-lg',
				theme === 'dark'
					? variantClassNames.dark
					: variantClassNames.light?.[ variant ],
				containerVariantClassNames.inline,
				className,
			) }
		>
			<div className="flex items-center justify-start gap-2">
				<div className="self-start flex items-center justify-center [&_svg]:size-5 shrink-0">
					{ getIcon( { variant, icon, theme } ) }
				</div>
				<div className="flex items-start justify-start gap-1 mr-10 [&>span:first-child]:shrink-0">
					{ getTitle( { title, theme } ) }
					{ getContent( { content, theme } ) }
				</div>
			</div>
			<div className="flex items-center justify-start gap-4">
				{ action?.label &&
                    typeof action?.onClick ===
                        'function' && (
				/* eslint-disable */
                        <div>
                        { getAction( {
                            actionLabel:
                                    action?.label,
                            actionType:
                                    action?.type ??
                                    'button',
                            onAction: handleAction,
                            theme,
                        } ) }
                    </div>
                )
                /* eslint-enable */
				}
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
		</div>
	);
};

export default Alert;
