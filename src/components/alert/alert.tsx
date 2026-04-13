import { cn } from '@/utilities/functions';
import { getIcon, getAction, getContent, getTitle } from '../toaster/utils';
import { Info, X } from 'lucide-react';

export interface AlertProps {
	/** Defines the style variant of the alert. */
	variant?: 'neutral' | 'info' | 'warning' | 'error' | 'danger' | 'success';
	/** Defines the theme of the alert. */
	theme?: 'light' | 'dark';
	/** Defines the design of the alert. */
	design?: 'inline' | 'inline-simple' | 'stack';
	/** Defines the title of the alert. */
	title?: React.ReactNode;
	/** Defines the content of the alert. */
	content?: React.ReactNode;
	/** Defines the extra classes. */
	className?: string;
	/** Callback function for close event. */
	onClose?: () => void;
	/** Custom Icon for the alert. */
	icon?: React.ReactElement | null;
	/** Defines the action of the alert. */
	action?: {
		label: string;
		onClick: ( close: () => void ) => void;
		type: 'link' | 'button';
	};
}

const Alert = ( {
	design = 'inline', // stack/inline
	theme = 'light', // light/dark
	variant = 'neutral',
	className = '',
	title = '',
	content = '',
	icon = null,
	onClose,
	action = {
		label: '',
		onClick: () => {},
		type: 'link',
	},
}: AlertProps ): JSX.Element => {
	const normalizedVariant = variant === 'danger' ? 'error' : variant;

	const closeAlert = () => {
		if ( typeof onClose !== 'function' ) {
			return;
		}
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
			danger: 'ring-alert-border-danger bg-alert-background-danger',
		},
		dark: 'bg-background-inverse ring-background-inverse',
	};

	// Close icon class names.
	const closeIconClassNames = {
		light: 'text-icon-secondary',
		dark: 'text-icon-inverse',
	};

	const handleAction = () => {
		action?.onClick?.( closeAlert );
	};

	const inlineSimpleIconClassNames = {
		neutral: 'text-icon-secondary',
		info: 'text-button-primary',
		success: 'text-support-success',
		warning: 'text-support-warning',
		error: 'text-support-error',
		danger: 'text-support-error',
	};

	const renderInlineSimpleIcon = () => {
		if ( icon ) {
			return getIcon( {
				variant: normalizedVariant,
				icon,
				theme: 'light',
			} );
		}

		return (
			<Info
				className={ cn(
					'size-7 shrink-0',
					inlineSimpleIconClassNames[
						variant as keyof typeof inlineSimpleIconClassNames
					] ?? inlineSimpleIconClassNames.neutral
				) }
				aria-hidden="true"
			/>
		);
	};

	if ( design === 'stack' ) {
		return (
			<div
				role="alert"
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
						{ getIcon( { variant: normalizedVariant, icon, theme } ) }
					</div>
					<div className="flex flex-col items-start justify-start gap-0.5 mr-7">
						{ getTitle( { title, theme } ) }
						{ getContent( { content, theme } ) }
						{ action?.label &&
							typeof action?.onClick === 'function' && (
							<div className="mt-2.5">
								{ getAction( {
									actionLabel: action?.label,
									actionType: action?.type ?? 'button',
									onAction: handleAction,
								theme,
								} ) }
							</div>
						) }
					</div>
					<div className="absolute right-4 top-4 [&_svg]:size-5">
						<button
							className={ cn(
								'bg-transparent m-0 p-0 border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-toggle-on focus-visible:ring-offset-2 active:outline-none cursor-pointer rounded',
								closeIconClassNames[ theme ] ??
									closeIconClassNames.light
							) }
							onClick={ () => closeAlert() }
							aria-label="Close alert"
						>
							<X aria-hidden="true" />
						</button>
					</div>
				</>
			</div>
		);
	}

	if ( design === 'inline-simple' ) {
		return (
			<div
				role="alert"
				className={ cn(
					'flex items-center justify-between gap-2 rounded-xl border border-solid border-border-subtle bg-background-primary px-3 py-3 shadow-soft-shadow-sm',
					className
				) }
			>
				<div className="flex min-w-0 flex-1 items-center gap-2">
					<div className="flex shrink-0 items-center justify-center">
						{ renderInlineSimpleIcon() }
					</div>
					<p className="my-0 min-w-0 flex-1 space-x-1">
						{ getTitle( { title, theme: 'light', inline: true } ) }
						{ getContent( {
							content,
							theme: 'light',
							inline: true,
						} ) }
					</p>
				</div>
				<div className="flex shrink-0 items-center gap-2 [&_svg]:size-5">
					{ action?.label && typeof action?.onClick === 'function' && (
						<div className="flex items-center">
							{ getAction( {
								actionLabel: action?.label,
								actionType: action?.type ?? 'link',
								onAction: handleAction,
								theme: 'light',
							} ) }
						</div>
					) }
					{ typeof onClose === 'function' && (
						<button
							className="flex size-5 cursor-pointer items-center justify-center rounded border-none bg-transparent p-0 text-icon-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-toggle-on focus-visible:ring-offset-2 active:outline-none"
							onClick={ () => closeAlert() }
							aria-label="Close alert"
						>
							<X aria-hidden="true" />
						</button>
					) }
				</div>
			</div>
		);
	}

	return (
		<div
			role="alert"
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
					{ getIcon( { variant: normalizedVariant, icon, theme } ) }
				</div>
				<p className="content-start space-x-1 my-0 mr-10 px-1">
					{ getTitle( { title, theme, inline: true } ) }
					{ getContent( { content, theme, inline: true } ) }
				</p>
			</div>
			<div className="flex h-full justify-start gap-4 [&_svg]:size-4">
				{ action?.label && typeof action?.onClick === 'function' && (
					<div className="self-center flex h-5">
						{ getAction( {
							actionLabel: action?.label,
							actionType: action?.type ?? 'button',
							onAction: handleAction,
							theme,
						} ) }
					</div>
				) }
				{ typeof onClose === 'function' && (
					<button
						className={ cn(
							'self-start bg-transparent m-0 border-none p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-toggle-on focus-visible:ring-offset-2 active:outline-none cursor-pointer size-5 rounded',
							closeIconClassNames[ theme ] ??
								closeIconClassNames.light
						) }
						onClick={ () => closeAlert() }
						aria-label="Close alert"
					>
						<X aria-hidden="true" />
					</button>
				) }
			</div>
		</div>
	);
};

export default Alert;
