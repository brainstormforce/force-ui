import {
	useState,
	useCallback,
	useMemo,
	forwardRef,
	isValidElement,
} from 'react';
import { nanoid } from 'nanoid';
import { cn } from '../../utility/utils';

const Checkbox = ({
	id,
	name,
	label,
	defaultChecked = false,
	checked,
	onChange,
	value,
	indeterminate,
	disabled,
	...props
}) => {
	const checkboxId = useMemo(() => id || `checkbox-${nanoid()}`, [id]);
	const isControlled = useMemo(
		() => typeof checked !== 'undefined',
		[checked]
	);
	const [isChecked, setIsChecked] = useState(defaultChecked || false);

	const getValue = useCallback(
		() => (isControlled ? checked : isChecked),
		[isControlled, checked, isChecked]
	);

	const handleChange = (event) => {
		if (disabled) return;

		const newValue = event.target.checked;
		if (!isControlled) setIsChecked(newValue);

		if (typeof onChange !== 'function') return;
		onChange(newValue);
	};

	const renderLabel = useCallback(() => {
		if (isValidElement(label)) {
			return label;
		}

		if (!label.heading || !label.description) {
			return null;
		}
		return (
			<div className="space-y-1.5">
				<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased m-0">
					{label.heading}
				</p>
				<p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased m-0">
					{label.description}
				</p>
			</div>
		);
	}, [label]);

	return (
		<div
			className={cn('inline-flex items-center', !!label && 'items-start')}
		>
			<label
				className={cn(
					'relative flex items-center rounded-full mt-1',
					!disabled && 'cursor-pointer'
				)}
				htmlFor={checkboxId}
			>
				<input
					id={checkboxId}
					type="checkbox"
					className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-solid border-blue-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900 m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden focus:ring-2 focus:ring-offset-4 focus:ring-focus"
					checked={getValue()}
					onChange={handleChange}
					disabled={disabled}
					name={name}
					{...props}
				/>
				<span className="pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3.5 w-3.5"
						viewBox="0 0 20 20"
						fill="currentColor"
						stroke="currentColor"
						strokeWidth="1"
					>
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						></path>
					</svg>
				</span>
			</label>
			{!!label && (
				<label className="cursor-pointer ml-3" htmlFor={checkboxId}>
					{renderLabel()}
				</label>
			)}
		</div>
	);
};

export default forwardRef(Checkbox);
