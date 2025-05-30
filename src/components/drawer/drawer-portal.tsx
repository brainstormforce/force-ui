import { FloatingPortal } from '@floating-ui/react';
import type { ReactNode } from 'react';

export interface DrawerPortalProps {
    /** Drawer content. */
    children: ReactNode;
    /** Id of the drawer portal where the element will be rendered. If not provided, the drawer will be rendered in the body. */
    id?: string;
    /** Root element of the drawer portal. If not provided, the drawer will be rendered in the body. */
    root?: HTMLElement;
}

export const DrawerPortal = ( { children, ...props }: DrawerPortalProps ) => {
	return <FloatingPortal { ...props }>{ children }</FloatingPortal>;
};

export default DrawerPortal;
