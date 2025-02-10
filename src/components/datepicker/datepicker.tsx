import { useState } from 'react';
import DatePickerComponent, { TDateRange } from './datepicker-component';
import Button from '../button';
import {
	startOfToday,
	startOfYesterday,
	startOfWeek,
	endOfWeek,
	startOfMonth,
	endOfMonth,
	subDays,
	startOfDay,
} from 'date-fns';
import { getDefaultSelectedValue } from './utils';
import { type PropsBase } from 'react-day-picker';
import { cn } from '@/utilities/functions';

export interface DatePickerProps {
	/** Defines the selection selectionType of the date picker: single, range, or multiple dates. */
	selectionType?: 'single' | 'range' | 'multiple';
	/** Defines the variant of the date picker: normal, dualdate, or presets. */
	variant?: 'normal' | 'dualdate' | 'presets';
	/** An array of custom presets. */
	presets?: { label: string; range: { from: Date; to: Date } }[];
	/** Callback function to be executed when the cancel button is clicked. */
	onCancel?: () => void;
	/** Callback function to be executed when the apply button is clicked. */
	onApply?: ( selectedDates: Date | { from: Date; to: Date } | Date[] ) => void;
	/** Callback function to be executed when a date is selected. */
	onDateSelect?: ( date: Date | Date[] | TDateRange | undefined ) => void;
	/** Text displayed on the Apply button. */
	applyButtonText?: string;
	/** Text displayed on the Cancel button. */
	cancelButtonText?: string;
	/** Show or hide days outside of the current month. */
	showOutsideDays?: boolean;
	/** Show or hide the footer. */
	isFooter?: boolean;
	/** Selected date value. */
	selected?: Date | Date[] | TDateRange | undefined;
	/**
	 * Disable the date picker based on the condition.
	 * Example:
	 * To disable future dates, set the condition as:
	 * ```jsx
	 * disabled={{ after: new Date(), before:"" }}
	 * ```
	 * @default undefined
	 */
	disabled?: PropsBase['disabled'];
}

const DatePicker = ( {
	selectionType = 'single',
	variant = 'normal',
	presets: customPresets = [],
	onCancel,
	onApply,
	onDateSelect,
	applyButtonText = 'Apply',
	cancelButtonText = 'Cancel',
	showOutsideDays = true,
	isFooter = true,
	selected,
	disabled,
	...props
}: DatePickerProps ) => {
	const [ selectedDates, setSelectedDates ] = useState<
		TDateRange | Date | Date[] | undefined
	>( () => {
		if ( ! selected ) {
			return getDefaultSelectedValue( selectionType );
		}

		// Type guards for different selection types
		const isValidMultiple =
			selectionType === 'multiple' && Array.isArray( selected );
		const isValidRange =
			selectionType === 'range' && 'from' in selected && 'to' in selected;
		const isValidSingle =
			selectionType === 'single' && selected instanceof Date;

		// Return selected if valid, otherwise return default value
		if ( isValidMultiple || isValidRange || isValidSingle ) {
			return selected;
		}

		return getDefaultSelectedValue( selectionType );
	} );

	const handleSelect = (
		selectedDate: Date | Date[] | TDateRange | undefined
	) => {
		setSelectedDates( selectedDate );
		if ( onDateSelect ) {
			onDateSelect( selectedDate );
		}
	};

	const defaultPresets = [
		{
			label: 'Today',
			range: { from: startOfToday(), to: startOfToday() },
		},
		{
			label: 'Yesterday',
			range: { from: startOfYesterday(), to: startOfYesterday() },
		},
		{
			label: 'This Week',
			range: {
				from: startOfWeek( new Date(), { weekStartsOn: 1 } ),
				to: endOfWeek( new Date(), { weekStartsOn: 1 } ),
			},
		},
		{
			label: 'Last 7 Days',
			range: {
				from: startOfDay( subDays( new Date(), 6 ) ),
				to: startOfDay( new Date() ),
			},
		},
		{
			label: 'This Month',
			range: {
				from: startOfMonth( new Date() ),
				to: endOfMonth( new Date() ),
			},
		},
		{
			label: 'Last 30 Days',
			range: {
				from: startOfDay( subDays( new Date(), 29 ) ),
				to: startOfDay( new Date() ),
			},
		},
	];

	const presets = customPresets.length > 0 ? customPresets : defaultPresets;

	const handlePresetClick = ( range: { from: Date; to: Date } ) => {
		setSelectedDates( range );
	};

	const handleCancelClick = () => {
		setSelectedDates(
			selectionType === 'multiple'
				? []
				: { from: undefined, to: undefined }
		);
		if ( onCancel ) {
			onCancel();
		}
	};

	const handleApplyClick = () => {
		if ( onApply ) {
			onApply( selectedDates as Date | { from: Date; to: Date } | Date[] );
		}
	};

	if ( variant === 'normal' ) {
		return (
			<DatePickerComponent
				{ ...props }
				mode={ selectionType }
				variant={ variant }
				width="w-[18.5rem]"
				selectedDates={ selectedDates }
				showOutsideDays={ showOutsideDays }
				setSelectedDates={
					handleSelect as (
						dates: Date | Date[] | TDateRange | undefined
					) => void
				}
				footer={
					isFooter && (
						<div className="flex bg-background-primary justify-end p-2 gap-3 border border-solid border-border-subtle border-t-0 rounded-md rounded-tl-none rounded-tr-none">
							<Button
								variant="outline"
								onClick={ handleCancelClick }
							>
								{ cancelButtonText }
							</Button>
							<Button onClick={ handleApplyClick }>
								{ applyButtonText }
							</Button>
						</div>
					)
				}
				disabled={ disabled }
			/>
		);
	}

	if ( variant === 'dualdate' ) {
		return (
			<DatePickerComponent
				mode={ selectionType }
				numberOfMonths={ 2 }
				alignment="horizontal"
				selectedDates={ selectedDates }
				setSelectedDates={
					handleSelect as (
						dates: Date | Date[] | TDateRange | undefined
					) => void
				}
				showOutsideDays={ showOutsideDays }
				variant={ variant }
				width="w-auto"
				footer={
					<div className="flex bg-background-primary justify-end p-2 gap-3 border border-solid border-border-subtle border-t-0 rounded-md rounded-tl-none rounded-tr-none">
						<Button variant="outline" onClick={ handleCancelClick }>
							{ cancelButtonText }
						</Button>
						<Button onClick={ handleApplyClick }>
							{ applyButtonText }
						</Button>
					</div>
				}
				disabled={ disabled }
				{ ...props }
			/>
		);
	}

	if ( variant === 'presets' ) {
		return (
			<div className="flex flex-row shadow-datepicker-wrapper">
				<div className="flex flex-col gap-1 p-3 items-start border border-solid border-border-subtle border-r-0 rounded-tl-md rounded-bl-md bg-background-primary">
					{ presets.map( ( preset, index ) => {
						const isSelected =
							selectedDates &&
							'from' in selectedDates &&
							'to' in selectedDates &&
							selectedDates.from?.getTime() ===
								preset.range.from.getTime() &&
							selectedDates.to?.getTime() ===
								preset.range.to.getTime();

						return (
							<Button
								key={ index }
								onClick={ () => handlePresetClick( preset.range ) }
								variant="ghost"
								className={ cn(
									'text-left font-medium text-sm text-nowrap w-full',
									isSelected && 'bg-brand-background-50'
								) }
							>
								{ preset.label }
							</Button>
						);
					} ) }
				</div>
				<DatePickerComponent
					{ ...props }
					mode={ selectionType }
					selectedDates={ selectedDates }
					setSelectedDates={
						handleSelect as (
							dates: Date | Date[] | TDateRange | undefined
						) => void
					}
					variant={ variant }
					showOutsideDays={ showOutsideDays }
					width="w-auto"
					numberOfMonths={ 2 }
					footer={
						<div className="flex justify-end p-2 gap-3 border-l border-r border-t-0 border-b border-solid border-border-subtle bg-background-primary rounded-br-md">
							<Button
								variant="outline"
								onClick={ handleCancelClick }
							>
								{ cancelButtonText }
							</Button>
							<Button onClick={ handleApplyClick }>
								{ applyButtonText }
							</Button>
						</div>
					}
					disabled={ disabled }
				/>
			</div>
		);
	}
};

export default DatePicker;
