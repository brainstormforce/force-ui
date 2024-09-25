import React, { createContext, useContext } from 'react';
import { cn } from '@/utilities/functions';
import { ChevronRight, Ellipsis } from 'lucide-react';

const BreadcrumbContext = createContext();

const sizeClasses = {
	sm: {
		text: 'text-sm',
		separator: 'text-sm',
		separatorIconSize: 16,
	},
	md: {
		text: 'text-base',
		separator: 'text-base',
		separatorIconSize: 18,
	},
};

export const Breadcrumb = ({ children, size = 'sm' }) => {
	const sizes = sizeClasses[size] || sizeClasses['sm'];

	return (
		<BreadcrumbContext.Provider value={{ sizes }}>
			<nav className="flex m-0" aria-label="Breadcrumb">
				<ul className="m-0 inline-flex items-center space-x-1 md:space-x-1">
					{children}
				</ul>
			</nav>
		</BreadcrumbContext.Provider>
	);
};

export const BreadcrumbList = ({ children }) => {
	return <>{children}</>;
};

export const BreadcrumbItem = ({ children }) => {
	return <li className="m-0 inline-flex items-center gap-2">{children}</li>;
};

export const BreadcrumbLink = ({ href, children, className }) => {
	const { sizes } = useContext(BreadcrumbContext);
	return (
		<a
			href={href}
			className={cn(
				sizes.text,
				'px-1 font-medium no-underline text-text-tertiary hover:text-text-primary hover:underline',
				'focus:outline-none focus:ring-1 focus:ring-border-interactive focus:border-border-interactive focus:rounded-sm',
				'transition-all duration-200',
				className
			)}
		>
			{children}
		</a>
	);
};

export const BreadcrumbSeparator = ({ type }) => {
	const { sizes } = useContext(BreadcrumbContext);
	const separatorIcons = {
		slash: <span className={cn('mx-1', sizes.separator)}>/</span>,
		arrow: <ChevronRight size={sizes.separatorIconSize} />,
	};

	return (
		<span className="flex items-center text-text-tertiary mx-2">
			{separatorIcons[type] || separatorIcons['arrow']}
		</span>
	);
};

export const BreadcrumbEllipsis = () => {
	const { sizes } = useContext(BreadcrumbContext);

	return (
		<Ellipsis
			className="mt-[2px] cursor-pointer text-text-tertiary hover:text-text-primary"
			size={sizes.separatorIconSize + 4}
		/>
	);
};

export const BreadcrumbPage = ({ children }) => {
	const { sizes } = useContext(BreadcrumbContext);

	return (
		<span className={cn(sizes.text, 'font-medium text-text-primary')}>
			{children}
		</span>
	);
};

Breadcrumb.List = BreadcrumbList;
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.Separator = BreadcrumbSeparator;
Breadcrumb.Ellipsis = BreadcrumbEllipsis;
Breadcrumb.Page = BreadcrumbPage;

export default Breadcrumb;
