import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker, useDayPicker } from 'react-day-picker';
import { format, subMonths } from 'date-fns';
import { cn } from '@/utilities/functions';
import Button from '../button';
import { currentTimeDot, formatWeekdayName, generateYearRange } from './utils';

const DatePickerComponent = ( {
	width,
	className: outerClassName, // Renamed to avoid shadowing
	classNames,
	selectedDates,
	setSelectedDates,
	showOutsideDays = true,
	mode = 'single',
	variant = 'normal',
	alignment = 'horizontal',
	onBlur,
	onChange,
	...props
} ) => {
	const { numberOfMonths } = props;
	const [ showMonthSelect, setShowMonthSelect ] = useState( false );
	const [ showYearSelect, setShowYearSelect ] = useState( false ); // New state for year selection
	const [ selectedYear, setSelectedYear ] = useState( new Date().getFullYear() );
	const [ yearRangeStart, setYearRangeStart ] = useState(
		selectedYear - ( selectedYear % 24 )
	);

	if ( selectedDates === null || selectedDates === undefined ) {
		if ( mode === 'multiple' ) {
			selectedDates = [];
		} else if ( mode === 'range' ) {
			selectedDates = { from: null, to: null };
		} else {
			selectedDates = null;
		}
	}

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
				setYearRangeStart( yearRangeStart - 24 );
			} else if ( showMonthSelect ) {
				const prevYear = new Date(
					selectedYear - 1,
					customMonthProps.calendarMonth.date.getMonth()
				);
				setSelectedYear( prevYear.getFullYear() );
				goToMonth( prevYear );
			} else {
				goToMonth( previousMonth );
			}
		};

		const handleNextButtonClick = () => {
			if ( showYearSelect ) {
				setYearRangeStart( yearRangeStart + 24 );
			} else if ( showMonthSelect ) {
				const nextYear = new Date(
					selectedYear + 1,
					customMonthProps.calendarMonth.date.getMonth()
				);
				setSelectedYear( nextYear.getFullYear() );
				goToMonth( nextYear );
			} else {
				goToMonth( nextMonth );
			}
		};

		const handleYearClick = ( yearValue ) => {
			setSelectedYear( yearValue );
			setShowYearSelect( false );
			setShowMonthSelect( true );
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
				<div className="flex justify-between">
					<Button
						variant="ghost"
						onClick={ handlePrevButtonClick }
						className="bg-background-primary border-none cursor-pointer"
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>

					<Button
						variant="ghost"
						onClick={ () => {
							if ( numberOfMonths > 1 ) {
								return;
							}
							if ( showMonthSelect ) {
								setShowYearSelect( true );
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
						onClick={ handleNextButtonClick }
						className="bg-background-primary border-none cursor-pointer"
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>

				{ showYearSelect && (
					<div className="grid grid-cols-4 w-full">
						{ generateYearRange( yearRangeStart ).map( ( yearValue ) => (
							<Button
								key={ yearValue }
								variant="ghost"
								onClick={ () => handleYearClick( yearValue ) }
								className={ cn(
									'h-10 w-full text-center font-normal relative',
									yearValue === selectedYear &&
										yearValue !==
											new Date().getFullYear() &&
										'bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black'
								) }
							>
								{ yearValue }
								{ yearValue === new Date().getFullYear() &&
									currentTimeDot() }
							</Button>
						) ) }
					</div>
				) }

				{ showMonthSelect && ! showYearSelect && (
					<div className="grid grid-cols-4 gap-2 my-12">
						{ Array.from( { length: 12 }, ( _, monthIndex ) => (
							<Button
								key={ monthIndex }
								variant="ghost"
								onClick={ () => {
									setShowMonthSelect( false );
									goToMonth(
										new Date( selectedYear, monthIndex )
									);
								} }
								className={ cn(
									'px-1.5 py-2 h-10 w-[4.375rem] text-center font-normal relative',
									monthIndex ===
										customMonthProps.calendarMonth.date.getMonth() &&
										monthIndex !== new Date().getMonth() &&
										selectedYear ===
											customMonthProps.calendarMonth.date.getFullYear() &&
										customMonthProps.calendarMonth.date.getFullYear() !==
											new Date().getFullYear() &&
										'bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black'
								) }
							>
								{ format( new Date( 0, monthIndex ), 'MMM' ) }
								{ new Date().getMonth() === monthIndex &&
									new Date().getFullYear() === selectedYear &&
									currentTimeDot() }
							</Button>
						) ) }
					</div>
				) }

				{ ! showMonthSelect && ! showYearSelect && (
					<MonthSelectors weekdays={ weekdays } />
				) }
			</>
		);
	}

	const MonthSelectors = ( { weekdays } ) => {
		return (
			<div className="flex justify-between">
				{ weekdays.map( ( weekday, weekdayIndex ) => (
					<button
						key={ weekdayIndex }
						className="h-10 w-10 px-1.5 py-2 text-center text-muted-foreground text-[0.8rem] font-normal content-center bg-transparent border-none"
					>
						{ weekday }
					</button>
				) ) }
			</div>
		);
	};

	const CustomDayButton = ( { day, modifiers, onSelect } ) => {
		const {
			selected: isSelected,
			today: isToday,
			disabled: isDisabled,
			outside: isOutside,
			range_middle: isRangeMiddle,
			range_start: isRangeStart,
			range_end: isRangeEnd,
		} = modifiers;

		const isPartOfRange = isRangeStart || isRangeEnd || isRangeMiddle;
		const handleClick = () => ! isDisabled && onSelect( day.date );

		const today = new Date();
		const rangeEnd = selectedDates?.to;

		const isThisMonth =
			format( day.displayMonth, 'yyyy-MM' ) === format( today, 'yyyy-MM' );
		const isRangeEndInCurrentMonth =
			rangeEnd &&
			format( rangeEnd, 'yyyy-MM' ) === format( day.date, 'yyyy-MM' );
		const previousMonth = subMonths( today, 1 );
		const isPreviousMonth =
			format( day.date, 'yyyy-MM' ) === format( previousMonth, 'yyyy-MM' );

		const shouldShowDay =
			isThisMonth || isRangeEndInCurrentMonth || isPartOfRange;
		const showOutsideDates = ! showOutsideDays && isOutside;

		// Common class for disabled outside days
		const disabledOutsideClass =
			'bg-transperant opacity-50 text-text-disabled cursor-auto';

		const buttonClasses = cn(
			'h-10 w-10 flex items-center justify-center transition text-text-secondary relative',
			'border-none rounded',
			( isSelected || isPartOfRange ) && ( ! isOutside || isPreviousMonth )
				? 'bg-background-brand text-text-on-color'
				: 'bg-transparent hover:bg-button-tertiary-hover',
			isRangeMiddle && shouldShowDay && ( ! isOutside || isPartOfRange )
				? 'bg-brand-50 text-text-secondary rounded-none'
				: '',
			isDisabled
				? 'opacity-50 cursor-not-allowed text-text-disabled'
				: 'cursor-pointer',
			( isOutside && ! isPartOfRange ) ||
				( ! shouldShowDay && isOutside ) ||
				( isOutside && ! isPreviousMonth )
				? disabledOutsideClass
				: ''
		);

		return (
			<button
				onClick={ handleClick }
				className={ buttonClasses }
				disabled={ isDisabled || isOutside }
				aria-label={ format( day.date, 'EEEE, MMMM do, yyyy' ) }
			>
				{ ( ! showOutsideDates || ( isPartOfRange && shouldShowDay ) ) &&
					format( day.date, 'd' ) }
				{ isToday && (
					<span className="absolute h-1 w-1 bg-background-brand rounded-full bottom-1"></span>
				) }
			</button>
		);
	};

	const Day = ( dayProps ) => {
		const { day, modifiers, className, onSelect } = dayProps;
		return (
			<td className={ className }>
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
		'relative bg-background-primary shadow-datepicker-wrapper',
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
				className={ cn( outerClassName ) } // Using renamed className
				formatters={ {
					formatWeekdayName,
				} }
				showHead={ false }
				classNames={ {
					months: monthsClassName,
					month: 'flex flex-col p-2 gap-1 text-center border border-border-subtle rounded-md w-full',
					caption: 'relative flex justify-center items-center',
					table: 'w-full border-separate border-spacing-[0_0.25rem] border-spacing-0',
					head_row: 'flex mb-1',
					head_cell:
						'text-muted-foreground rounded-md w-10 font-normal text-[0.8rem]',
					row: 'flex w-full mt-2',
					cell: 'h-10 w-10 text-center text-sm p-0 relative',
					day: 'h-10 w-10 p-0 font-normal bg-background-primary text-current',
					...classNames,
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
								{ monthsProps.children.map(
									( months, monthIndex ) => {
										if ( ! months ) {
											return null;
										}
										return (
											<React.Fragment key={ monthIndex }>
												{ months.map(
													(
														month,
														innerMonthIndex
													) => (
														<React.Fragment
															key={
																innerMonthIndex
															}
														>
															{ innerMonthIndex >
																0 && (
																<div className="border border-solid border-border-subtle border-l-0"></div>
															) }
															{ month }
														</React.Fragment>
													)
												) }
											</React.Fragment>
										);
									}
								) }
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
