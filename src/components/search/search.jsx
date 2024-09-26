import { cn } from '@/utilities/functions';
import { File, Folder, Search, Slash, SquareSlash, X } from 'lucide-react';
import Input from '../input';
import { useState } from 'react';
import { Button, Label } from '..';

const SearchBox = ({
	onChange = () => { },
	placeholder = "Search",
	variant = 'primary', // primary, secondary, ghost
	disabled = false,
	size = "sm", // sm, md, lg
	loading = false,
	loadingIcon = {}, // Icon shown during loading
	searchResult = ['searchResult 1', 'searchResult 2', 'searchResult 3'],
	additionalResult = ['Category 1', 'Category 2', 'Category 3'],
	searchResultIcon = < File size={16} strokeWidth={2} />,
	additionalResultIcon = <Folder size={16} strokeWidth={2} />,
	className
}) => {
	const [isOpen, setIsOpen] = useState(false);


	return (
		<div className={cn('relative flex flex-col focus-within:z-10', className)}>
			<Input
				prefix={<Search />}
				placeholder="Search"
				suffix={<Button variant="outline" icon={<Slash size={1} />} size="sm" className="p-1" />}
				size="sm"
				className=""
				onChange={() => { setIsOpen(true) }}
			/>

			{isOpen &&
				(
					<div className="absolute top-10 z-50 p-2 w-full bg-white border-[#E5E7EB] border-solid rounded-md shadow-lg max-h-60 overflow-y-auto">
						<Label className="p-1" size="sm" >Results</Label>
						{searchResult.length > 0 ? (
							searchResult.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-1 p-1 text-gray-500 hover:bg-gray-200 cursor-pointer"
									onClick={() => alert(`You clicked ${item}`)}
								>
									{searchResultIcon}
									<Label className="p-1">{item}</Label>
								</div>
							))
						) : (
							<div className="p-2 text-center text-base font-medium text-gray-500">
								No items found
							</div>
						)}

						<hr />

						<Label className="p-1" size="sm" >Category</Label>
						{additionalResult.length > 0 ? (
							additionalResult.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-1 p-1 hover:bg-gray-200 cursor-pointer"
									onClick={() => alert(`You clicked ${item}`)}
								>
									{additionalResultIcon}
									<Label className="p-1">{item}</Label>
								</div>
							))
						) : (
							<div className="p-2 text-center text-base font-medium text-gray-500">
								No items found
							</div>
						)}
					</div>

				)}

		</div>
	);
};

export default SearchBox;
