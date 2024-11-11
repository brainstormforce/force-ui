import React, { useState } from 'react';
import DatePickerComponent, { TDateRange } from './datepicker-component';
import Button from '../button';
import {
	startOfToday,
	startOfYesterday,
	startOfWeek,
	endOfWeek,
	startOfMonth,
	endOfMonth,
	subWeeks,
	subMonths,
} from 'date-fns';

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
	onDateSelect?: ( date:  Date | Date[] | TDateRange | null ) => void;
	/** Text displayed on the Apply button. */
	applyButtonText?: string;
	/** Text displayed on the Cancel button. */
	cancelButtonText?: string;
	/** Show or hide days outside of the current month. */
	showOutsideDays?: boolean;
	/** Show or hide the footer. */
	isFooter?: boolean;
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
	...props
}: DatePickerProps ) => {
	const [ selectedDates, setSelectedDates ] = useState<
		TDateRange | Date[] | null
	>( () => {
		if ( selectionType === 'multiple' ) {
			return [];
		} else if ( selectionType === 'range' ) {
			return { from: null, to: null };
		}
		return null;
	} );

	const handleSelect = (
		selectedDate: Date | Date[] | TDateRange | null
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
			label: 'Last Week',
			range: {
				from: startOfWeek( subWeeks( new Date(), 1 ), { weekStartsOn: 1 } ),
				to: endOfWeek( subWeeks( new Date(), 1 ), { weekStartsOn: 1 } ),
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
			label: 'Last Month',
			range: {
				from: startOfMonth( subMonths( new Date(), 1 ) ),
				to: endOfMonth( subMonths( new Date(), 1 ) ),
			},
		},
	];

	const presets = customPresets.length > 0 ? customPresets : defaultPresets;

	const handlePresetClick = ( range: { from: Date; to: Date } ) => {
		setSelectedDates( range );
	};

	const handleCancelClick = () => {
		setSelectedDates(
			selectionType === 'multiple' ? [] : { from: null, to: null }
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
						dates: Date | Date[] | TDateRange | null
					) => void
				}
				footer={
					isFooter && (
						<div className="flex justify-end p-2 gap-3 border border-solid border-border-subtle border-t-0 rounded-md rounded-tl-none rounded-tr-none">
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
						dates: Date | Date[] | TDateRange | null
					) => void
				}
				showOutsideDays={ showOutsideDays }
				variant={ variant }
				width="w-auto"
				footer={
					<div className="flex justify-end p-2 gap-3 border border-solid border-border-subtle border-t-0 rounded-md rounded-tl-none rounded-tr-none">
						<Button variant="outline" onClick={ handleCancelClick }>
							{ cancelButtonText }
						</Button>
						<Button onClick={ handleApplyClick }>
							{ applyButtonText }
						</Button>
					</div>
				}
				{ ...props }
			/>
		);
	}

	if ( variant === 'presets' ) {
		return (
			<div className="flex flex-row shadow-datepicker-wrapper">
				<div className="flex flex-col gap-1 p-3 items-start border border-solid border-border-subtle border-r-0 rounded-tl-md rounded-bl-md">
					{ presets.map( ( preset, index ) => (
						<Button
							key={ index }
							onClick={ () => handlePresetClick( preset.range ) }
							variant="ghost"
							className="font-medium text-sm"
						>
							{ preset.label }
						</Button>
					) ) }
				</div>
				<DatePickerComponent
					{ ...props }
					mode={ selectionType }
					selectedDates={ selectedDates }
					setSelectedDates={
						handleSelect as (
							dates: Date | Date[] | TDateRange | null
						) => void
					}
					variant={ variant }
					showOutsideDays={ showOutsideDays }
					width="w-auto"
					numberOfMonths={ 2 }
					footer={
						<div className="flex justify-end p-2 gap-3 border border-solid border-border-subtle border-t-0 rounded-md rounded-tl-none rounded-tr-none">
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
				/>
			</div>
		);
	}
};

export default DatePicker;
