import Drawer from './drawer';
import DrawerPanel from './drawer-panel';
import DrawerHeader from './drawer-header';
import DrawerTitle from './drawer-title';
import DrawerDescription from './drawer-description';
import DrawerBody from './drawer-body';
import DrawerFooter from './drawer-footer';
import DrawerCloseButton from './drawer-close-button';
import DrawerBackdrop from './drawer-backdrop';

export default Object.assign( Drawer, {
	Panel: DrawerPanel,
	Header: DrawerHeader,
	Title: DrawerTitle,
	Description: DrawerDescription,
	Body: DrawerBody,
	CloseButton: DrawerCloseButton,
	Footer: DrawerFooter,
	Backdrop: DrawerBackdrop,
} );
