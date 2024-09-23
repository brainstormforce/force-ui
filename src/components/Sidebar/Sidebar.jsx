import React from 'react';
import { cn } from '@/utilities/functions';
import { PanelLeftClose } from 'lucide-react';

const Sidebar = ( { children, className, ...props } ) => {
	return (
		<div className={ cn( 'h-screen overflow-auto p-4 gap-4 flex flex-col bg-background-primary border-0 border-r border-solid border-gray-300', className ) } { ...props }>
			{ children }
		</div>
	);
};

const Header = ( { children } ) => {
	return <div className="space-y-2">{ children }</div>;
};

const Body = ( { children } ) => {
	return <div className={ cn( 'space-y-2 grow items-start' ) }>{ children }</div>;
};

const Footer = ( { children } ) => {
	return <div className="space-y-2">{ children }
	<span>
		<PanelLeftClose size="24" />
	</span>
	</div>;
};

const Item = ( { children, className } ) => {
	return <div className={ cn('w-full', className ) }>{ children }</div>;
};

Sidebar.Header = Header;
Sidebar.Body = Body;
Sidebar.Footer = Footer;
Sidebar.Item = Item;

export default Sidebar;