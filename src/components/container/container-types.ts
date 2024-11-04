import { type ReactNode } from 'react';

export interface ContainerCommonProps {
	/** Defines any additional CSS classes for the container. */
	className?: string;
	/** Defines the children of the container. */
	children?: ReactNode;
	/** Additional CSS styles. */
	style?: React.CSSProperties;
}
