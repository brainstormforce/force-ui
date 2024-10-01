let toastCounter = 1;

class ToastController {
	#toasts;
	#subscribers;

	constructor() {
		this.#toasts = [];
		this.#subscribers = [];
	}

	// Subscriber pattern.
	subscribe(callback) {
		this.#subscribers.push(callback);

		// Return a callback for unsubscribe.
		return () => {
			this.#subscribers = this.#subscribers.filter(
				(subscriber) => subscriber !== callback
			);
		};
	}

	// Notify subscribers.
	notify() {
		this.#subscribers.forEach((subscriber) => subscriber(this.#toasts));
	}

	// Publish a new toast.
	publish(toast) {
		this.#subscribers.forEach((subscriber) => subscriber(toast));
	}

	// Add a new toast.
	add(toast) {
		this.#toasts.push(toast);

		// Publish the new toast.
		this.publish(toast);
	}

	// Remove a toast.
	remove(id) {
		this.#toasts = this.#toasts.filter((toast) => toast.id !== id);

		return id;
	}

	// Create a new toast.
	create(data) {
		const {
			id = undefined,
			message = '',
			jsx = undefined,
			...restData
		} = data;

		if (!message && typeof jsx !== 'function') {
			return;
		}

		const toastId = typeof id === 'number' ? id : toastCounter++;
		const toastExists = this.#toasts.find((toast) => toast.id === toastId);

		if (toastExists) {
			// Update the existing toast.
			this.#toasts = this.#toasts.map((toast) => {
				if (toast.id === toastId) {
					this.publish({
						...toast,
						title: message,
						jsx,
						...restData,
					});
					return { ...toast, title: message, jsx, ...restData };
				}
				return toast;
			});
		}

		// Create a new toast.
		this.add({ id: toastId, title: message, jsx, ...restData });

		return toastId;
	}

	// Update a toast.
	update(id, data) {
		const { render = undefined } = data;
		let updatedData = data;
		switch (typeof render) {
			case 'function':
				updatedData = {
					jsx: render,
					...data,
				};
				break;
			case 'string':
				updatedData = {
					title: render,
					...data,
				};
				break;
			default:
				break;
		}

		this.#toasts = this.#toasts.map((toast) => {
			if (toast.id === id) {
				this.publish({ ...toast, ...updatedData });
				return { ...toast, ...updatedData };
			}
			return toast;
		});
	}

	// Dismiss toast.
	dismiss(id) {
		if (!id) {
			this.#toasts.forEach((toast) =>
				this.#subscribers.forEach((subscriber) =>
					subscriber({ id: toast.id, dismiss: true })
				)
			);
		}

		this.#subscribers.forEach((subscriber) =>
			subscriber({ id, dismiss: true })
		);
		return id;
	}

	// History of toasts.
	history() {
		return this.#toasts;
	}

	// Types of toasts.

	// Default toast.
	default(message = '', options = {}) {
		return this.create({ message, type: 'neutral', ...options });
	}

	// Success toast.
	success(message = '', options = {}) {
		return this.create({ message, type: 'success', ...options });
	}

	// Error toast.
	error(message = '', options = {}) {
		return this.create({ message, type: 'error', ...options });
	}

	// Warning toast.
	warning(message = '', options = {}) {
		return this.create({ message, type: 'warning', ...options });
	}

	// Info toast
	info(message = '', options = {}) {
		return this.create({ message, type: 'info', ...options });
	}

	// Custom toast.
	custom(jsx = () => {}, options = {}) {
		return this.create({
			jsx,
			type: 'custom',
			...options,
		});
	}
}

export const ToastState = new ToastController();

const defaultToast = (message, options) => ToastState.default(message, options);

export const toast = Object.seal(
	Object.assign(
		defaultToast,
		{
			success: ToastState.success.bind(ToastState),
			error: ToastState.error.bind(ToastState),
			warning: ToastState.warning.bind(ToastState),
			info: ToastState.info.bind(ToastState),
			custom: ToastState.custom.bind(ToastState),
			dismiss: ToastState.dismiss.bind(ToastState),
			update: ToastState.update.bind(ToastState),
		},
		{
			getHistory: ToastState.history.bind(ToastState),
		}
	)
);
