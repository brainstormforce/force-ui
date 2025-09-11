/**
 * Force UI Select Component - JSX Options Example
 * 
 * This example demonstrates the enhanced Select component that now supports
 * complex JSX components in options while maintaining search functionality.
 */

import React from 'react';
import Select from '../select';
import Tooltip from '../../tooltip';
import { InfoIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';

interface SiteOption {
	url: string;
	isVerified: boolean;
	status: 'verified' | 'unverified' | 'pending';
}

const sites: SiteOption[] = [
	{ url: 'example.com', isVerified: true, status: 'verified' },
	{ url: 'mysite.org', isVerified: false, status: 'unverified' },
	{ url: 'newsite.net', isVerified: false, status: 'pending' },
];

const SiteSelectExample: React.FC = () => {
	const [selectedSite, setSelectedSite] = React.useState<string>('');

	return (
		<div className="w-full max-w-md">
			<Select
				value={selectedSite}
				onChange={(value) => setSelectedSite(value as string)}
				combobox
			>
				<Select.Button placeholder="Choose a site..." />
				<Select.Options>
					{sites.map((site) => (
						<Select.Option
							key={site.url}
							value={site.url}
							// NEW: searchValue prop for reliable search with JSX
							searchValue={site.url}
						>
							{/* Complex JSX component with tooltips and icons */}
							<div className="flex items-center justify-between w-full">
								<span className="truncate">{site.url}</span>
								<div className="flex items-center gap-1 ml-2">
									{site.status === 'verified' && (
										<Tooltip content="Site is verified">
											<CheckCircleIcon className="size-4 text-green-600" />
										</Tooltip>
									)}
									{site.status === 'unverified' && (
										<Tooltip content="Site verification failed">
											<XCircleIcon className="size-4 text-red-600" />
										</Tooltip>
									)}
									{site.status === 'pending' && (
										<Tooltip content="Verification pending">
											<InfoIcon className="size-4 text-yellow-600" />
										</Tooltip>
									)}
								</div>
							</div>
						</Select.Option>
					))}
				</Select.Options>
			</Select>

			{/* Backward Compatibility Example */}
			<div className="mt-8">
				<h3 className="text-lg font-semibold mb-4">Backward Compatibility</h3>
				<Select
					value={selectedSite}
					onChange={(value) => setSelectedSite(value as string)}
					combobox
				>
					<Select.Button placeholder="Simple text options..." />
					<Select.Options>
						{/* These simple options still work perfectly */}
						<Select.Option value="legacy-site1.com">
							legacy-site1.com ✓
						</Select.Option>
						<Select.Option value="legacy-site2.com" title="Not verified">
							legacy-site2.com ❌
						</Select.Option>
					</Select.Options>
				</Select>
			</div>
		</div>
	);
};

export default SiteSelectExample;
