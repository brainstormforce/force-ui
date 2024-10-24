import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { ToastState } from './controller';
import { withSingleton } from '@/hoc';
import { cn } from '@/utilities/functions';
import { getIcon, getAction, getContent, getTitle } from './utils';
import {
	closeIconClassNames,
	containerVariantClassNames,
	positionClassNames,
	variantClassNames,
} from './component-style';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Toaster = ({
	position = 'top-right', // top-right/top-left/bottom-right/bottom-left
	design = 'stack', // stack/inline
	theme = 'light', // light/dark
	className = '',
	autoDismiss = true, // Auto dismiss the toast after a certain time.
	dismissAfter = 5000, // Time in milliseconds after which the toast will be dismissed.
}) => {
	const [toasts, setToasts] = useState([]);

	useEffect(() => {
		ToastState.subscribe((toastItem) => {
			if (toastItem?.dismiss) {
				setToasts((prevToasts) =>
					prevToasts.map((tItem) =>
						tItem.id === toastItem.id
							? { ...tItem, dismiss: true }
							: tItem
					)
				);
				return;
			}

			setTimeout(() => {
				flushSync(() =>
					setToasts((prevToasts) => {
						const itemExists = prevToasts.findIndex(
							(tItem) => tItem.id === toastItem.id
						);
						// Update the existing toast.
						if (itemExists !== -1) {
							return prevToasts.map((tItem) => {
								if (tItem.id === toastItem.id) {
									return { ...tItem, ...toastItem };
								}
								return tItem;
							});
						}
						return [...prevToasts, toastItem];
					})
				);
			});
		});
	}, []);

	const removeToast = (id) => {
		setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
	};

	return (
		<ul
			className={cn(
				'fixed flex flex-col list-none z-20 p-10 pointer-events-none [&>li]:pointer-events-auto gap-3',
				positionClassNames[position] ?? positionClassNames['top-right'],
				className
			)}
		>
			{/* Main container */}
			<AnimatePresence initial={false}>
				{toasts.map((toastItem) => (
					<motion.li
						key={toastItem.id}
						positionTransition
						initial={{ opacity: 0, y: 50, scale: 0.7 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{
							opacity: 0,
							scale: 0.6,
							transition: { duration: 0.15 },
						}}
						layoutId={`toast-${toastItem.id}`}
					>
						<Toast
							toastItem={toastItem}
							title={toastItem.title}
							content={toastItem?.description}
							icon={toastItem?.icon ?? null}
							design={toastItem?.design ?? design}
							autoDismiss={toastItem?.autoDismiss ?? autoDismiss}
							dismissAfter={
								toastItem?.dismissAfter ?? dismissAfter
							}
							removeToast={removeToast}
							variant={toastItem.type}
							theme={toastItem?.theme ?? theme}
						/>
					</motion.li>
				))}
			</AnimatePresence>
		</ul>
	);
};

export const Toast = ({
	toastItem,
	title = null,
	content = null,
	autoDismiss = true,
	dismissAfter = 5000,
	theme = 'light', // light/dark
	design = 'stack', // inline/stack
	icon = null,
	variant = 'neutral', // neutral/info/success/warning/danger
	removeToast, // Function to remove the toast.
}) => {
	const closeTimerStart = useRef(0);
	const lastCloseTimerStart = useRef(0);
	const timeoutId = useRef(0);

	const startTimer = (tItem, remainingTime = dismissAfter) => {
		// If auto dismiss is disabled, or the dismissAfter is less than 0, return.
		if (!autoDismiss || dismissAfter < 0) {
			return;
		}

		closeTimerStart.current = new Date().getTime();
		return setTimeout(() => {
			removeToast(tItem.id);
		}, remainingTime);
	};

	const pauseTimer = () => {
		clearTimeout(timeoutId.current);
		lastCloseTimerStart.current = new Date().getTime();
	};

	const continueTimer = () => {
		timeoutId.current = startTimer(
			toastItem,
			dismissAfter -
				(lastCloseTimerStart.current - closeTimerStart.current)
		);
	};

	// Start the timer when the component mounts.
	useEffect(() => {
		const remainingTime = dismissAfter;

		timeoutId.current = startTimer(toastItem, remainingTime);
		return () => {
			clearTimeout(timeoutId.current);
		};
	}, []);

	useEffect(() => {
		if (!toastItem?.dismiss) {
			return;
		}
		removeToast(toastItem.id);
	}, [toastItem]);

	const handleAction = () => {
		toastItem?.action?.onClick?.(() => removeToast(toastItem.id));
	};

	let render = null;
	if (design === 'stack') {
		render = (
			<div
				className={cn(
					'flex items-center justify-start p-4 gap-2 relative border border-solid rounded-md shadow-lg',
					theme === 'dark'
						? variantClassNames.dark
						: variantClassNames.light?.[variant],
					containerVariantClassNames.stack
				)}
				onMouseEnter={pauseTimer}
				onMouseLeave={continueTimer}
			>
				{toastItem.type !== 'custom' ? (
					<>
						<div className="self-start flex items-center justify-center [&_svg]:size-5 shrink-0">
							{getIcon({ variant, icon, theme })}
						</div>
						<div className="flex flex-col items-start justify-start gap-0.5">
							{getTitle({ title, theme })}
							{getContent({ content, theme })}
							{
								toastItem?.action?.label &&
									typeof toastItem?.action?.onClick ===
										'function' && (
										/* eslint-disable */
										<div className="mt-2.5">
											{getAction({
												actionLabel:
													toastItem?.action?.label,
												actionType:
													toastItem?.action?.type ??
													'button',
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
								className={cn(
									'bg-transparent m-0 p-0 border-none focus:outline-none active:outline-none cursor-pointer',
									closeIconClassNames[theme] ??
										closeIconClassNames.light
								)}
								onClick={() => removeToast(toastItem.id)}
							>
								<X />
							</button>
						</div>
					</>
				) : (
					toastItem?.jsx?.({
						close: () => removeToast(toastItem.id),
						action: toastItem?.action
							? { ...toastItem?.action, onClick: handleAction }
							: null,
					})
				)}
			</div>
		);
	}

	if (design === 'inline') {
		render = (
			<div
				className={cn(
					'flex items-center justify-start p-3 gap-2 relative border border-solid rounded-md shadow-lg',
					theme === 'dark'
						? variantClassNames.dark
						: variantClassNames.light?.[variant],
					containerVariantClassNames.inline
				)}
			>
				<div className="self-start flex items-center justify-center [&_svg]:size-5 shrink-0">
					{getIcon({ variant, icon, theme })}
				</div>
				<div className="flex items-start justify-start gap-1 mr-10 [&>span:first-child]:shrink-0">
					{getTitle({ title, theme })}
					{getContent({ content, theme })}
				</div>
				<div className="absolute right-3 top-3 [&_svg]:size-5">
					<button
						className={cn(
							'bg-transparent m-0 p-0 border-none focus:outline-none active:outline-none cursor-pointer',
							closeIconClassNames[theme] ??
								closeIconClassNames.light
						)}
						onClick={() => removeToast(toastItem.id)}
					>
						<X />
					</button>
				</div>
			</div>
		);
	}

	return render;
};

export default withSingleton(Toaster);
