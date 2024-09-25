import React from 'react';
import { cn } from '@/utilities/functions';

export const Breadcrumb = ({ children }) => {
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol className="inline-flex items-center space-x-1 md:space-x-3">
				{children}
			</ol>
		</nav>
	);
};

export const BreadcrumbList = ({ children }) => {
	return <>{children}</>;
};

export const BreadcrumbItem = ({ children }) => {
	return <li className="inline-flex items-center">{children}</li>;
};

export const BreadcrumbLink = ({ href, children }) => {
	return (
		<a
			href={href}
			className="text-sm font-medium text-gray-700 hover:text-blue-600"
		>
			{children}
		</a>
	);
};

export const BreadcrumbSeparator = () => {
	return (
		<li className="text-gray-500">
			<svg
				className="w-4 h-4"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path
					fillRule="evenodd"
					d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
					clipRule="evenodd"
				/>
			</svg>
		</li>
	);
};

Breadcrumb.List = BreadcrumbList;
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.Separator = BreadcrumbSeparator;

export default Breadcrumb;
