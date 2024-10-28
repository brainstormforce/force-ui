import React, { createContext, useContext } from 'react';
import { cn } from '@/utilities/functions';
import { ChevronRight, Ellipsis } from 'lucide-react';

export interface BreadcrumbCommonProps {
	/** Defines the children of the breadcrumb. */
	children: React.ReactNode;
}

export interface BreadcrumbProps extends BreadcrumbCommonProps {
	/** Defines the size of the breadcrumb. */
	size?: 'sm' | 'md';
}

export interface BreadcrumbLinkProps extends BreadcrumbCommonProps {
	/** Defines the href of the link. */
	href: string;
	/** Defines the class name of the link. */
	className?: string;
	/** Defines the element type of the link. */
	as?: React.ElementType;
}

export interface BreadcrumbSeparatorProps {
	/** 
	 * Defines the type of separator. 
	 * 
	 * Available options:
	 * - arrow
	 * - slash
	*/
	type: 'arrow' | 'slash';
}


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

const BreadcrumbContext = createContext({ sizes: sizeClasses.sm });

const Breadcrumb = ({ children, size = 'sm' }: BreadcrumbProps) => {
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

export const BreadcrumbList = ({ children }: BreadcrumbCommonProps) => {
	return <>{children}</>;
};
BreadcrumbList.displayName = 'Breadcrumb.List';

export const BreadcrumbItem = ({ children }: BreadcrumbCommonProps) => {
	return <li className="m-0 inline-flex items-center gap-2">{children}</li>;
};
BreadcrumbItem.displayName = 'Breadcrumb.Item';

export const BreadcrumbLink = ({
	href,
	children,
	className,
	as: AsElement = 'a',
	...props
}: BreadcrumbLinkProps) => {
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

export const BreadcrumbSeparator = ({ type } : BreadcrumbSeparatorProps) => {
	const { sizes } = useContext(BreadcrumbContext);
	const separatorIcons = {
		slash: <span className={cn('mx-1', sizes.separator)}>/</span>,
		arrow: <ChevronRight size={sizes.separatorIconSize} />,
	};

	return (
		<span className="flex items-center text-text-tertiary mx-2">
			{separatorIcons[type] || separatorIcons.arrow}
		</span>
	);
};
BreadcrumbSeparator.displayName = 'Breadcrumb.Separator';

export const BreadcrumbEllipsis = () => {
	const { sizes } = useContext(BreadcrumbContext);

	return (
		<Ellipsis
			className="mt-[2px] cursor-pointer text-text-tertiary hover:text-text-primary"
			size={sizes.separatorIconSize + 4}
		/>
	);
};
BreadcrumbEllipsis.displayName = 'Breadcrumb.Ellipsis';

export const BreadcrumbPage = ({ children }: BreadcrumbCommonProps) => {
	const { sizes } = useContext(BreadcrumbContext);

	return (
		<span className={cn(sizes.text, 'font-medium text-text-primary')}>
			{children}
		</span>
	);
};
BreadcrumbPage.displayName = 'Breadcrumb.Page';

Breadcrumb.List = BreadcrumbList;
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.Separator = BreadcrumbSeparator;
Breadcrumb.Ellipsis = BreadcrumbEllipsis;
Breadcrumb.Page = BreadcrumbPage;

export default Breadcrumb;
