export type ToastTheme = 'light' | 'dark';
export type ToastVariant =
	| 'neutral'
	| 'success'
	| 'error'
	| 'warning'
	| 'info'
	| 'custom';
export type ToastDesign = 'stack' | 'inline';

export type ToastAction = {
	label: string;
	onClick: ( callback?: ( toast: ToastType ) => void ) => void;
	type?: 'button' | 'link';
};

export interface ToastType {
	id?: number;
	title?: string | React.ReactElement;
	description?: string | React.ReactElement;
	type?: ToastVariant;
	jsx?: ( {
		close,
		action,
	}: {
		close: () => void;
		action?: ToastAction | null;
	} ) => JSX.Element;
	render?: string | ( () => JSX.Element );
	autoDismiss?: boolean;
	dismissAfter?: number;
	theme?: ToastTheme;
	design?: ToastDesign;
	dismiss?: boolean;
	icon?: React.ReactElement;
	action?: ToastAction;
}

export type ToastOrArray =
	| ToastType[]
	| Partial<ToastType>
	| Partial<ToastType>[]
	| ( ToastType | Partial<ToastType> )[];

export type Subscriber = ( toast: ToastType ) => void;

export interface ToasterProps {
	/** Defines the position of the toaster. */
	position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
	/** Defines the design of the toaster. */
	design?: 'stack' | 'inline';
	/** Defines the theme of the toaster. */
	theme?: 'light' | 'dark';
	/** Additional classes to be added to the toaster. */
	className?: string;
	/** Defines if the toast should be auto dismissed or not. */
	autoDismiss?: boolean;
	/** Time in milliseconds after which the toast will be dismissed. */
	dismissAfter?: number;
}

export interface ToastProps {
	/** The toast item. */
	toastItem: ToastType;
	/** The title of the toast. */
	title?: string | React.ReactElement;
	/** The content of the toast. */
	content?: string | React.ReactElement;
	/** Defines if the toast should be auto dismissed or not. */
	autoDismiss?: boolean;
	/** Time in milliseconds after which the toast will be dismissed. */
	dismissAfter?: number;
	/** Defines the theme of the toast. */
	theme?: 'light' | 'dark';
	/** Defines the design of the toast. */
	design?: 'stack' | 'inline';
	/** The icon for the toast. */
	icon?: React.ReactElement;
	/** The variant of the toast. */
	variant?: ToastType['type'];
	/** Function to remove the toast. */
	removeToast?: ( id: number ) => void;
}
