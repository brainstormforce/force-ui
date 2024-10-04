import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker, useDayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { cn } from '@/utilities/functions';
import 'react-day-picker/style.css';
import Button from '../button';

const DatePickerComponent = ( {
	width,
	className: outerClassName, // Renamed to avoid shadowing
	classNames,
	selectedDates,
	setSelectedDates,
	showOutsideDays = false,
	mode = 'single',
	variant = 'normal',
	alignment = 'horizontal',
	onBlur,
	onChange,
	...props
} ) => {
	const [ showMonthSelect, setShowMonthSelect ] = useState( false );
	const [ showYearSelect, setShowYearSelect ] = useState( false ); // New state for year selection
	const [ selectedYear, setSelectedYear ] = useState( new Date().getFullYear() );
	const [ yearRangeStart, setYearRangeStart ] = useState(
		selectedYear - ( selectedYear % 24 )
	);
	const numberOfMonths = props.numberOfMonths;

	const formatWeekdayName = ( date ) => {
		return format( date, 'E' ).slice( 0, 1 ); // Returns only the first letter
	};

	const generateYearRange = ( start, count = 24 ) => {
		return Array.from( { length: count }, ( _, i ) => start + i );
	};

	function CustomMonthCaption( customMonthProps ) {
		const { goToMonth, nextMonth, previousMonth } = useDayPicker();
		const yearFormatted = format(
			customMonthProps.calendarMonth.date,
			'yyyy'
		);
		const month = format( customMonthProps.calendarMonth.date, 'MMMM' );

		const startOfWeek = new Date( customMonthProps.calendarMonth.date );
		startOfWeek.setDate( startOfWeek.getDate() - startOfWeek.getDay() );

		const weekdays = Array.from( { length: 7 }, ( _, i ) => {
			const date = new Date( startOfWeek );
			date.setDate( startOfWeek.getDate() + i );
			return formatWeekdayName( date );
		} );

		const handlePrevButtonClick = () => {
			if ( showYearSelect ) {
				// Navigate to the previous year range (24 years)
				setYearRangeStart( yearRangeStart - 24 );
			} else if ( showMonthSelect ) {
				// Navigate to the previous year
				const prevYear = new Date(
					selectedYear - 1,
					customMonthProps.calendarMonth.date.getMonth()
				);
				setSelectedYear( prevYear.getFullYear() );
				goToMonth( prevYear );
			} else {
				// Navigate to the previous month
				goToMonth( previousMonth );
			}
		};

		const handleNextButtonClick = () => {
			if ( showYearSelect ) {
				// Navigate to the next year range (24 years)
				setYearRangeStart( yearRangeStart + 24 );
			} else if ( showMonthSelect ) {
				// Navigate to the next year
				const nextYear = new Date(
					selectedYear + 1,
					customMonthProps.calendarMonth.date.getMonth()
				);
				setSelectedYear( nextYear.getFullYear() );
				goToMonth( nextYear );
			} else {
				// Navigate to the next month
				goToMonth( nextMonth );
			}
		};

		const handleYearClick = ( yearValue ) => {
			setSelectedYear( yearValue );
			setShowYearSelect( false );
			setShowMonthSelect( true ); // Show month select after year is chosen
			goToMonth(
				new Date(
					yearValue,
					customMonthProps.calendarMonth.date.getMonth()
				)
			);
		};

		let displayText;
		if ( showYearSelect ) {
			displayText = `${ yearRangeStart } - ${ yearRangeStart + 23 }`;
		} else if ( showMonthSelect ) {
			displayText = yearFormatted;
		} else {
			displayText = `${ month } ${ yearFormatted }`;
		}
		return (
			<>
				<div
					style={ { display: 'flex', justifyContent: 'space-between' } }
				>
					<Button
						variant="ghost"
						style={ { cursor: 'pointer' } }
						onClick={ handlePrevButtonClick }
						className="bg-white border-none"
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>

					{ /* Toggle between month, year, and year range */ }
					<Button
						variant="ghost"
						onClick={ () => {
							if ( numberOfMonths > 1 ) {
								return;
							}
							if ( showMonthSelect ) {
								setShowYearSelect( true ); // Show year select when month is clicked
								setShowMonthSelect( false );
							} else if ( showYearSelect ) {
								setShowYearSelect( false );
							} else {
								setShowMonthSelect( ! showMonthSelect );
							}
						} }
					>
						{ displayText }
					</Button>

					<Button
						variant="ghost"
						style={ { cursor: 'pointer' } }
						onClick={ handleNextButtonClick }
						className="bg-white border-none"
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>

				{ /* Render year grid when showYearSelect is true */ }
				{ showYearSelect && (
					<div className="grid grid-cols-4 w-full">
						{ generateYearRange( yearRangeStart ).map( ( yearValue ) => (
							<Button
								key={ yearValue }
								variant="ghost"
								onClick={ () => handleYearClick( yearValue ) }
								className="h-9 w-full text-center font-normal relative"
							>
								{ yearValue }
								{ yearValue === selectedYear && (
									<span className="bg-blue-500 h-1 w-1 absolute rounded-full inline-block bottom-0 left-1/2 right-1/2"></span>
								) }
							</Button>
						) ) }
					</div>
				) }

				{ /* Render month grid when showMonthSelect is true */ }
				{ showMonthSelect && ! showYearSelect && (
					<div className="grid grid-cols-4 gap-2 my-auto">
						{ Array.from( { length: 12 }, ( _, i ) => (
							<Button
								key={ i }
								variant="ghost"
								onClick={ () => {
									setShowMonthSelect( false );
									goToMonth( new Date( selectedYear, i ) );
								} }
								className="px-1.5 py-2 h-9 w-[70px] text-center font-normal relative"
							>
								{ format( new Date( 0, i ), 'MMM' ) }
								{ new Date().getMonth() === i &&
									new Date().getFullYear() ===
										selectedYear && (
										<span className="bg-blue-500 h-1 w-1 absolute rounded-full inline-block bottom-0 left-1/2 right-1/2"></span>
								) }
							</Button>
						) ) }
					</div>
				) }

				{ /* Hide weekdays if month/year selection is showing */ }
				{ ! showMonthSelect && ! showYearSelect && (
					<MonthSelectors weekdays={ weekdays } />
				) }
			</>
		);
	}

	const MonthSelectors = ( { weekdays } ) => {
		return (
			<div className="flex gap-1 justify-between">
				{ weekdays.map( ( weekday, weekdayIndex ) => (
					<button
						key={ weekdayIndex }
						className="h-9 w-9 px-1.5 py-2 text-center text-muted-foreground text-[0.8rem] font-normal content-center bg-transparent border-none"
					>
						{ weekday }
					</button>
				) ) }
			</div>
		);
	};

	const CustomDayButton = ( { day, modifiers, onSelect } ) => {
		const isSelected = modifiers.selected;
		const isToday = modifiers.today;
		const isDisabled = modifiers.disabled;
		const isOutside = modifiers.outside;
		const isRangeMiddle = modifiers.range_middle;
		const handleClick = () => {
			if ( ! isDisabled ) {
				onSelect( day.date );
			}
		};

		return (
			<button
				onClick={ handleClick }
				onBlur={ onBlur }
				onChange={ onChange }
				className={ cn(
					'h-9 w-9 flex items-center justify-center transition text-text-secondary relative',
					isSelected
						? 'bg-background-brand text-white'
						: 'bg-transparent hover:bg-gray-200',
					isRangeMiddle ? 'bg-blue-50 text-text-secondary' : '',
					isToday ? 'border border-blue-500' : '',
					isDisabled
						? 'opacity-50 cursor-not-allowed text-text-disabled'
						: 'cursor-pointer',
					isOutside ? 'opacity-50 text-text-disabled' : '',
					'border-none rounded'
				) }
				disabled={ isDisabled }
				aria-label={ format( day.date, 'EEEE, MMMM do, yyyy' ) }
			>
				{ format( day.date, 'd' ) }
				{ isToday && (
					<span className="absolute h-1 w-1 bg-blue-500 rounded-full bottom-1"></span>
				) }
			</button>
		);
	};

	const Day = ( dayProps ) => {
		const { day, modifiers, className, style, onSelect } = dayProps;

		return (
			<td className={ className } style={ style }>
				<CustomDayButton
					day={ day }
					modifiers={ modifiers }
					onSelect={ onSelect }
				/>
			</td>
		);
	};

	const CustomMonths = ( { monthGridProps, onSelect } ) => {
		return (
			<div className="flex flex-col">
				{ monthGridProps.children[ 1 ].props.children.map(
					( month, index ) => (
						<div
							key={ index }
							className="flex flex-row justify-between"
						>
							{ month.props.children[ 1 ].map( ( week, weekIndex ) => (
								<div key={ weekIndex } className="flex gap-1">
									<CustomDayButton
										{ ...week.props }
										onSelect={ onSelect }
									/>
								</div>
							) ) }
						</div>
					)
				) }
			</div>
		);
	};

	const handleSelect = ( selectedDate ) => {
		if ( mode === 'range' ) {
			if (
				! selectedDates.from ||
				( selectedDates.from && selectedDates.to )
			) {
				setSelectedDates( { from: selectedDate, to: null } );
			} else {
				setSelectedDates( {
					from: selectedDates.from,
					to: selectedDate,
				} );
			}
		} else if ( mode === 'multiple' ) {
			if (
				selectedDates.some(
					( date ) =>
						format( date, 'yyyy-MM-dd' ) ===
						format( selectedDate, 'yyyy-MM-dd' )
				)
			) {
				setSelectedDates(
					selectedDates.filter(
						( date ) =>
							format( date, 'yyyy-MM-dd' ) !==
							format( selectedDate, 'yyyy-MM-dd' )
					)
				);
			} else {
				setSelectedDates( [ ...selectedDates, selectedDate ] );
			}
		} else if ( mode === 'single' ) {
			setSelectedDates( [ selectedDate ] );
		}
	};

	const monthsClassName = cn(
		'relative bg-white shadow-datepicker-wrapper',
		width,
		alignment === 'vertical' ? 'flex flex-col' : 'flex flex-row  gap-3',
		variant === 'normal'
			? 'rounded-md border border-solid border-border-subtle'
			: '',
		variant === 'presets'
			? 'rounded-tr-md border border-solid border-border-subtle'
			: '',
		variant === 'dualdate'
			? 'rounded-tr-md rounded-tl-md border border-solid border-border-subtle'
			: ''
	);

	return (
		<>
			<DayPicker
				mode={ mode }
				selected={ mode === 'single' ? selectedDates : selectedDates }
				onSelect={ handleSelect }
				hideNavigation
				captionLayout="label"
				showOutsideDays={ showOutsideDays }
				className={ cn( outerClassName ) } // Using renamed className
				formatters={ {
					formatWeekdayName,
				} }
				showHead={ false }
				classNames={ {
					months: monthsClassName,
					month: 'flex flex-col p-2 gap-1 text-center border border-gray-300 rounded-md w-full', // Added border for each month
					caption: 'relative flex justify-center items-center',
					table: 'w-full border-separate border-spacing-[0_0.25rem] border-spacing-0',
					head_row: 'flex mb-1',
					head_cell:
						'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
					row: 'flex w-full mt-2',
					cell: 'h-9 w-9 text-center text-sm p-0 relative',
					day: 'h-9 w-9 p-0 font-normal bg-white text-current',
					day_selected: 'bg-red-500 text-white',
					day_today: 'border-2 border-blue-500 rounded-full',
					day_outside: 'text-muted-foreground opacity-50',
					day_disabled: 'text-muted-foreground opacity-50',
					day_hidden: 'invisible',
					...classNames,
					weekday:
						'h-9 p-0 text-muted-foreground text-[0.8rem] font-normal',
				} }
				components={ {
					MonthCaption: CustomMonthCaption,
					Day: ( singleDayProps ) => (
						<Day { ...singleDayProps } onSelect={ handleSelect } />
					),
					Weekdays: () => null,
					Months: ( monthsProps ) => (
						<>
							<div className={ monthsClassName }>
								{ monthsProps.children.map( ( months ) => {
									if ( ! months ) {
										return null;
									}
									return (
										<>
											{ months.map( ( month, monthIndex ) => (
												<>
													{ monthIndex > 0 && (
														//single line border
														<div className="border border-solid border-border-subtle border-l-0"></div>
													) }
													{ month }
												</>
											) ) }
										</>
									);
								} ) }
							</div>
						</>
					),
					MonthGrid: ( monthGridProps ) =>
						! showMonthSelect &&
						! showYearSelect && (
							<CustomMonths
								monthGridProps={ monthGridProps }
								onSelect={ handleSelect }
							/>
						),
				} }
				{ ...props }
			/>
		</>
	);
};

export default DatePickerComponent;
