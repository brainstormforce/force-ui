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

const Breadcrumb = ({ children, size = 'sm' }) => {
	const sizes = sizeClasses[size] || sizeClasses.sm;

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
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = ({ children }) => {
	return <>{children}</>;
};
BreadcrumbList.displayName = 'Breadcrumb.List';

const BreadcrumbItem = ({ children }) => {
	return <li className="m-0 inline-flex items-center gap-2">{children}</li>;
};
BreadcrumbItem.displayName = 'Breadcrumb.Item';

const BreadcrumbLink = ({
	href,
	children,
	className,
	as: AsElement = 'a',
	...props
}) => {
	const { sizes } = useContext(BreadcrumbContext);
	return (
		<AsElement
			href={href}
			className={cn(
				sizes.text,
				'px-1 font-medium no-underline text-text-tertiary hover:text-text-primary hover:underline',
				'focus:outline-none focus:ring-1 focus:ring-border-interactive focus:border-border-interactive focus:rounded-sm',
				'transition-all duration-200',
				className
			)}
			{...props}
		>
			{children}
		</AsElement>
	);
};
BreadcrumbLink.displayName = 'Breadcrumb.Link';

const BreadcrumbSeparator = ({ type }) => {
	const { sizes } = useContext(BreadcrumbContext);
	const separatorIcons = {
		slash: <span className={cn('mx-1', sizes.separator)}>/</span>,
		arrow: <ChevronRight size={sizes.separatorIconSize} />,
	};

	return (
		<li className="flex items-center text-text-tertiary mx-2">
			{separatorIcons[type] || separatorIcons.arrow}
		</li>
	);
};
BreadcrumbSeparator.displayName = 'Breadcrumb.Separator';

const BreadcrumbEllipsis = () => {
	const { sizes } = useContext(BreadcrumbContext);

	return (
		<Ellipsis
			className="mt-[2px] cursor-pointer text-text-tertiary hover:text-text-primary"
			size={sizes.separatorIconSize + 4}
		/>
	);
};
BreadcrumbEllipsis.displayName = 'Breadcrumb.Ellipsis';

const BreadcrumbPage = ({ children }) => {
	const { sizes } = useContext(BreadcrumbContext);

	return (
		<span className={cn(sizes.text, 'font-medium text-text-primary')}>
			{children}
		</span>
	);
};
BreadcrumbPage.displayName = 'Breadcrumb.Page';

export default Object.assign(Breadcrumb, {
	List: BreadcrumbList,
	Item: BreadcrumbItem,
	Link: BreadcrumbLink,
	Separator: BreadcrumbSeparator,
	Ellipsis: BreadcrumbEllipsis,
	Page: BreadcrumbPage,
});
