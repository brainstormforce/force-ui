import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export function prefix() {
	return 'force-ui-';
}

export const cn = (...classNames) => twMerge(clsx(...classNames));
