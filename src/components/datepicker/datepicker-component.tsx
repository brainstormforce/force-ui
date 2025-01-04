import React, { useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
	DayPicker,
	useDayPicker,
	type CustomComponents,
	type PropsRangeRequired,
} from 'react-day-picker';
import { format, subMonths } from 'date-fns';
import { cn } from '@/utilities/functions';
import Button from '../button';
import { currentTimeDot, formatWeekdayName, generateYearRange } from './utils';
import { JSX } from 'react/jsx-runtime';

export type TDateRange = { from: Date | null; to: Date | null };

export interface DatePickerProps {
	/** The width of the date picker. */
	width?: string;
	/** Additional classes to be added to the date picker. */
	className?: string;
	/** Additional classes to be added to the date picker elements. */
	classNames?: {
		/** Additional classes to be added to the months element. */
		months?: string;
		/** Additional classes to be added to the month element. */
		month?: string;
		/** Additional classes to be added to the caption element. */
		caption?: string;
		/** Additional classes to be added to the table element. */
		table?: string;
		/** Additional classes to be added to the head row element. */
		head_row?: string;
		/** Additional classes to be added to the head cell element. */
		head_cell?: string;
		/** Additional classes to be added to the row element. */
		row?: string;
		/** Additional classes to be added to the cell element. */
		cell?: string;
		/** Additional classes to be added to the day element. */
		day?: string;
	};
	/** The selected dates. */
	selectedDates?: Date | Date[] | TDateRange | null;
	/** Sets the selected dates. */
	setSelectedDates: (dates: Date | Date[] | TDateRange | null) => void;
	/** Show or hide days outside of the current month. */
	showOutsideDays?: boolean;
	/** Defines the selection selectionType of the date picker: single, range, or multiple dates. */
	mode?: 'single' | 'range' | 'multiple';
	/** Defines the variant of the date picker: normal, dualdate, or presets. */
	variant?: 'normal' | 'dualdate' | 'presets';
	/** Defines the alignment of the date picker: horizontal or vertical. */
	alignment?: 'horizontal' | 'vertical';
	// /** Callback when the date picker loses focus. */
	// onBlur?: ( event: React.FocusEvent<HTMLDivElement> ) => void;
	// /** Callback when the selected date changes. */
	// onChange?: ( date: Date | Date[] | { from: Date; to: Date } | null ) => void;
	/** The number of months to display. */
	numberOfMonths?: number;
	/** Footer content to be displayed at the bottom of the date picker. */
	footer?: ReactNode;
}

interface CustomMonthsProps {
	monthGridProps: React.ComponentProps<'table'>;
	onSelect: (date: Date) => void;
}

interface CustomMonthCaptionProps {
	goToMonth: (date: Date) => void;
	nextMonth: Date;
	previousMonth: Date;
	calendarMonth: { date: Date };
}

interface CustomDayButtonProps {
	day: { date: Date; displayMonth: Date };
	modifiers: {
		selected: boolean;
		today: boolean;
		disabled: boolean;
		outside: boolean;
		range_middle: boolean;
		range_start: boolean;
		range_end: boolean;
	};
	onSelect: (date: Date) => void;
	onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
	children: ReactNode;
}

interface DayProps extends CustomDayButtonProps {
	className?: string;
}

const DatePickerComponent = ({
	width,
	className: outerClassName, // Renamed to avoid shadowing
	classNames,
	selectedDates,
	setSelectedDates,
	showOutsideDays = true,
	mode = 'single',
	variant = 'normal',
	alignment = 'horizontal',
	// onBlur,
	// onChange,
	numberOfMonths,
	...props
}: DatePickerProps) => {
	// check footer is a valide compoenent
	const isFooter =
		React.isValidElement(props.footer) ||
		typeof props.footer === 'function';
	const [showMonthSelect, setShowMonthSelect] = useState(false);
	const [showYearSelect, setShowYearSelect] = useState(false); // New state for year selection
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	const [yearRangeStart, setYearRangeStart] = useState(
		selectedYear - (selectedYear % 24)
	);

	if (selectedDates === null || selectedDates === undefined) {
		if (mode === 'multiple') {
			selectedDates = [];
		} else if (mode === 'range') {
			selectedDates = { from: null, to: null };
		} else {
			selectedDates = null;
		}
	}

	function CustomMonthCaption(customMonthProps: CustomMonthCaptionProps) {
		const { goToMonth, nextMonth, previousMonth } = useDayPicker();
		const yearFormatted = format(
			customMonthProps.calendarMonth.date,
			'yyyy'
		);
		const month = format(customMonthProps.calendarMonth.date, 'MMMM');

		const startOfWeek = new Date(customMonthProps.calendarMonth.date);
		startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

		const weekdays = Array.from({ length: 7 }, (_, i) => {
			const date = new Date(startOfWeek);
			date.setDate(startOfWeek.getDate() + i);
			return formatWeekdayName(date);
		});

		const handlePrevButtonClick = () => {
			if (showYearSelect) {
				setYearRangeStart(yearRangeStart - 24);
			} else if (showMonthSelect) {
				const prevYear = new Date(
					selectedYear - 1,
					customMonthProps.calendarMonth.date.getMonth()
				);
				setSelectedYear(prevYear.getFullYear());
				goToMonth(prevYear);
			} else {
				goToMonth(previousMonth!);
			}
		};

		const handleNextButtonClick = () => {
			if (showYearSelect) {
				setYearRangeStart(yearRangeStart + 24);
			} else if (showMonthSelect) {
				const nextYear = new Date(
					selectedYear + 1,
					customMonthProps.calendarMonth.date.getMonth()
				);
				setSelectedYear(nextYear.getFullYear());
				goToMonth(nextYear);
			} else {
				goToMonth(nextMonth!);
			}
		};

		const handleYearClick = (yearValue: number) => {
			setSelectedYear(yearValue);
			setShowYearSelect(false);
			setShowMonthSelect(true);
			goToMonth(
				new Date(
					yearValue,
					customMonthProps.calendarMonth.date.getMonth()
				)
			);
		};

		let displayText;
		if (showYearSelect) {
			displayText = `${yearRangeStart} - ${yearRangeStart + 23}`;
		} else if (showMonthSelect) {
			displayText = yearFormatted;
		} else {
			displayText = `${month} ${yearFormatted}`;
		}

		return (
			<>
				<div className="flex justify-between">
					<Button
						variant="ghost"
						onClick={handlePrevButtonClick}
						className="bg-background-primary border-none cursor-pointer"
						aria-label="Previous Button"
						icon={
							<ChevronLeft className="h-4 w-4 text-button-tertiary-color" />
						}
					/>

					<Button
						variant="ghost"
						onClick={() => {
							if (numberOfMonths! > 1) {
								return;
							}
							if (showMonthSelect) {
								setShowYearSelect(true);
								setShowMonthSelect(false);
							} else if (showYearSelect) {
								setShowYearSelect(false);
							} else {
								setShowMonthSelect(!showMonthSelect);
							}
						}}
					>
						{displayText}
					</Button>

					<Button
						variant="ghost"
						onClick={handleNextButtonClick}
						className="bg-background-primary border-none cursor-pointer"
						aria-label="Next Button"
						icon={
							<ChevronRight className="h-4 w-4 text-button-tertiary-color" />
						}
					/>
				</div>

				{showYearSelect && (
					<div className="grid grid-cols-4 w-full">
						{generateYearRange(yearRangeStart).map((yearValue) => (
							<Button
								key={yearValue}
								variant="ghost"
								onClick={() => handleYearClick(yearValue)}
								className={cn(
									'h-10 w-full text-center font-normal relative',
									yearValue === selectedYear &&
										yearValue !==
											new Date().getFullYear() &&
										'bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black',
									yearValue === new Date().getFullYear() &&
										'font-semibold'
								)}
							>
								{yearValue}
								{yearValue === new Date().getFullYear() &&
									currentTimeDot()}
							</Button>
						))}
					</div>
				)}

				{showMonthSelect && !showYearSelect && (
					<div className="grid grid-cols-4 gap-2 my-12">
						{Array.from({ length: 12 }, (_, monthIndex) => (
							<Button
								key={monthIndex}
								variant="ghost"
								onClick={() => {
									setShowMonthSelect(false);
									goToMonth(
										new Date(selectedYear, monthIndex)
									);
								}}
								className={cn(
									'px-1.5 py-2 h-10 w-[4.375rem] text-center font-normal relative',
									monthIndex ===
										customMonthProps.calendarMonth.date.getMonth() &&
										monthIndex !== new Date().getMonth() &&
										selectedYear ===
											customMonthProps.calendarMonth.date.getFullYear() &&
										customMonthProps.calendarMonth.date.getFullYear() !==
											new Date().getFullYear() &&
										'bg-background-brand text-text-on-color hover:bg-background-brand hover:text-black',
									monthIndex === new Date().getMonth() &&
										new Date().getFullYear() ===
											selectedYear &&
										'font-semibold'
								)}
							>
								{format(new Date(0, monthIndex), 'MMM')}
								{new Date().getMonth() === monthIndex &&
									new Date().getFullYear() === selectedYear &&
									currentTimeDot()}
							</Button>
						))}
					</div>
				)}

				{!showMonthSelect && !showYearSelect && (
					<MonthSelectors weekdays={weekdays} />
				)}
			</>
		);
	}

	const MonthSelectors = ({ weekdays }: { weekdays: string[] }) => {
		return (
			<div className="flex justify-between">
				{weekdays.map((weekday, weekdayIndex) => (
					<button
						key={weekdayIndex}
						className="h-10 w-10 px-1.5 py-2 text-center text-text-secondary text-sm font-normal content-center bg-transparent border-none shrink-0"
					>
						{weekday}
					</button>
				))}
			</div>
		);
	};

	const CustomDayButton = ({
		day,
		modifiers,
		...customDayProps
	}: CustomDayButtonProps) => {
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
		// const handleClick = () => ! isDisabled && onSelect( day.date );

		const today = new Date();
		const rangeEnd = (selectedDates as TDateRange)?.to;

		const isThisMonth =
			format(day.displayMonth, 'yyyy-MM') === format(today, 'yyyy-MM');
		const isRangeEndInCurrentMonth =
			rangeEnd &&
			format(rangeEnd, 'yyyy-MM') === format(day.date, 'yyyy-MM');
		const previousMonth = subMonths(today, 1);
		const isPreviousMonth =
			format(day.date, 'yyyy-MM') === format(previousMonth, 'yyyy-MM');

		const shouldShowDay =
			isThisMonth || isRangeEndInCurrentMonth || isPartOfRange;
		const showOutsideDates = !showOutsideDays && isOutside;

		// Common class for disabled outside days
		const disabledOutsideClass =
			'bg-transparent opacity-50 text-text-disabled cursor-auto';

		const buttonClasses = cn(
			'h-10 w-10 flex items-center justify-center transition text-text-secondary relative text-sm',
			'border-none rounded',
			(isSelected || isPartOfRange) && (!isOutside || isPreviousMonth)
				? 'bg-background-brand text-text-on-color'
				: 'bg-transparent hover:bg-button-tertiary-hover',
			isRangeMiddle && shouldShowDay && (!isOutside || isPartOfRange)
				? 'bg-brand-background-50 text-text-secondary rounded-none'
				: '',
			isDisabled
				? 'opacity-50 cursor-not-allowed text-text-disabled'
				: 'cursor-pointer',
			(isOutside && !isPartOfRange) ||
				(!shouldShowDay && isOutside) ||
				(isOutside && !isPreviousMonth)
				? disabledOutsideClass
				: ''
		);

		const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
			if (typeof customDayProps.onMouseEnter === 'function') {
				customDayProps.onMouseEnter(event);
			}
			event.currentTarget.setAttribute('data-hover', 'true');
		};
		const handleLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
			if (typeof customDayProps.onMouseLeave === 'function') {
				customDayProps.onMouseLeave(event);
			}
			event.currentTarget.setAttribute('data-hover', 'false');
		};
		const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
			if (typeof customDayProps.onClick === 'function') {
				customDayProps.onClick(event);
			}
		};

		console.log('isSelected', isSelected);

		return (
			<button
				// onClick={ handleClick }
				className={cn(
					buttonClasses,
					isToday && 'font-semibold',
					showOutsideDates && 'opacity-0',
					isRangeStart && 'fui-range-start',
					isRangeEnd && 'fui-range-end',
					isRangeMiddle && 'fui-range-middle',
					{
						'[&:is([data-hover=true])]:bg-brand-background-50 [&:is([data-hover=true])]:rounded-none':
							!isPartOfRange && !isSelected,
					}
				)}
				disabled={isDisabled || isOutside}
				onClick={handleClick}
				onMouseEnter={handleHover}
				onMouseLeave={handleLeave}
				aria-label={format(day.date, 'EEEE, MMMM do, yyyy')}
				aria-selected={isSelected}
			>
				{/* { ( ! showOutsideDates || ( isPartOfRange && shouldShowDay ) ) &&
					format( day.date, 'd' ) } */}
				{(!showOutsideDates || (isPartOfRange && shouldShowDay)) &&
					customDayProps.children}
				{/* { customDayProps.children } */}
				{isToday && shouldShowDay && (
					<span className="absolute h-1 w-1 bg-background-brand rounded-full bottom-1"></span>
				)}
			</button>
		);
	};

	// const Day = ( dayProps: DayProps ) => {
	// 	const { day, modifiers, className, onSelect } = dayProps;
	// 	return (
	// 		<td className={ className }>
	// 			<CustomDayButton
	// 				day={ day }
	// 				modifiers={ modifiers }
	// 				onSelect={ onSelect }
	// 			/>
	// 		</td>
	// 	);
	// };

	const CustomMonths = ({ monthGridProps, onSelect }: CustomMonthsProps) => {
		return (
			<div className="flex flex-col bsf-force-ui-month-weeks">
				{(
					monthGridProps as {
						children: React.ReactElement[];
					}
				).children[1].props.children.map(
					(month: React.ReactElement, index: number) => (
						<div
							key={index}
							className="flex flex-row justify-between"
						>
							{/* { (
								month as React.ReactElement
							).props.children[ 1 ].map(
								(
									week: {
										props: JSX.IntrinsicAttributes &
											CustomDayButtonProps;
									},
									weekIndex: React.Key | null | undefined
								) => (
									<div key={ weekIndex } className="flex gap-1">
										<CustomDayButton
											{ ...week.props }
											onSelect={ onSelect }
										/>
									</div>
								)
							) } */}
							{month}
						</div>
					)
				)}
			</div>
		);
	};

	const handleSelect = (
		selectedDate: Date | TDateRange | Date[],
		trigger: Date
	) => {
		if (mode === 'range') {
			const currentSelectedValue = selectedDates as TDateRange;
			if (
				(currentSelectedValue?.from && currentSelectedValue?.to) ||
				(!currentSelectedValue?.from && !currentSelectedValue?.to)
			) {
				setSelectedDates({ from: trigger, to: null });
				return;
			}
			setSelectedDates(selectedDate);
		} else if (mode === 'multiple') {
			if (
				(selectedDates as Date[])!.some(
					(date) =>
						format(date, 'yyyy-MM-dd') ===
						format(trigger, 'yyyy-MM-dd')
				)
			) {
				setSelectedDates(
					(selectedDates as Date[])!.filter(
						(date) =>
							format(date, 'yyyy-MM-dd') !==
							format(trigger, 'yyyy-MM-dd')
					)
				);
			} else {
				setSelectedDates([...(selectedDates as Date[]), trigger]);
			}
		} else if (mode === 'single') {
			setSelectedDates(selectedDate);
		}
	};

	const monthsClassName = cn(
		'relative bg-background-primary shadow-datepicker-wrapper',
		width,
		alignment === 'vertical' ? 'flex flex-col' : 'flex flex-row  gap-3',
		variant === 'normal'
			? 'rounded-tr-md rounded-tl-md border border-solid border-border-subtle'
			: '',
		variant === 'presets'
			? 'rounded-tr-md border border-solid border-border-subtle'
			: '',
		variant === 'dualdate'
			? 'rounded-tr-md rounded-tl-md border border-solid border-border-subtle'
			: '',
		isFooter ? 'rounded-b-none' : 'rounded-bl-md rounded-br-md'
	);

	console.log('selectedDates', selectedDates);

	return (
		<>
			<DayPicker
				mode={mode}
				selected={(() => {
					if (mode === 'range') {
						return selectedDates as PropsRangeRequired['selected'];
					}
					if (mode === 'multiple') {
						return selectedDates as Date[];
					}
					return selectedDates as Date;
				})()}
				onSelect={handleSelect}
				hideNavigation
				captionLayout="label"
				className={cn(outerClassName)} // Using renamed className
				formatters={{
					formatWeekdayName,
				}}
				// showHead={false}
				classNames={{
					months: monthsClassName,
					month: 'flex flex-col p-2 gap-1 text-center w-full',
					caption: 'relative flex justify-center items-center',
					table: 'w-full border-separate border-spacing-0',
					head_row: 'flex mb-1',
					head_cell:
						'text-muted-foreground rounded-md w-10 font-normal text-sm',
					row: 'flex w-full mt-2',
					cell: 'h-10 w-10 text-center text-sm p-0 relative',
					// day: 'h-10 w-10 p-0 font-normal bg-background-primary text-current',
					...classNames,
				}}
				// [&:has([data-hover=true])]:bg-brand-background-50 [&:has([data-hover=true])>button]:bg-brand-background-50 [&.rdp-range\\_start>button]:!bg-background-brand [&.rdp-range\\_end>button]:!bg-background-brand
				numberOfMonths={numberOfMonths}
				components={{
					MonthCaption:
						CustomMonthCaption as unknown as CustomComponents['MonthCaption'],
					DayButton:
						CustomDayButton as unknown as CustomComponents['DayButton'],
					Day: (singleDayProps) => {
						return (
							<div
								{...singleDayProps}
								className={cn(
									singleDayProps.className,
									'inline-flex'
								)}
							/>
						);
					},
					Weekdays: () => <></>,
					Week: (weekProps: any) => {
						return (
							<div
								className={cn(
									'bsf-force-ui-month-week flex flex-row',
									weekProps.className
								)}
							>
								{weekProps.children}
							</div>
						);
					},
					Months: (monthsProps) => (
						<>
							<div
								className={cn(
									'bsf-force-ui-date-picker-month',
									monthsClassName
								)}
							>
								{(
									monthsProps as {
										children: React.ReactElement[];
									}
								)?.children?.map((months, monthIndex) => {
									if (!months) {
										return null;
									}
									return (
										<React.Fragment key={monthIndex}>
											{(
												months as unknown as React.ReactElement[]
											).map((month, innerMonthIndex) => (
												<React.Fragment
													key={innerMonthIndex}
												>
													{innerMonthIndex > 0 && (
														<div className="border border-solid border-border-subtle border-l-0"></div>
													)}
													{month}
												</React.Fragment>
											))}
										</React.Fragment>
									);
								})}
							</div>
						</>
					),
					// Day(dayProps) {
					// 	console.log('Day', dayProps);
					// 	return (
					// 		<div { ...dayProps } className={cn('inline-block', dayProps.className)} />
					// 	)
					// },
					MonthGrid: (monthGridProps) =>
						!showMonthSelect && !showYearSelect ? (
							<CustomMonths
								monthGridProps={monthGridProps}
								// onSelect={handleSelect}
							/>
						) : (
							<></>
						),
				}}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				{...props}
				onDayMouseEnter={(_, __, event) => {
					if (mode !== 'range') {
						return;
					}
					// if more then 1 selected then no need of hover effect
					const selected = selectedDates as TDateRange;

					// Reset data-hover if more then 1 selected or if none are selected
					if (
						(selected?.from && selected?.to) ||
						(!selected?.from && !selected?.to)
					) {
						const resetButtons = Array.from(
							document.querySelectorAll('[data-hover]')
						);

						resetButtons.forEach((item: any) => {
							item.setAttribute('data-hover', 'false');
						});
						return;
					}

					// Get the current target button
					const currentButton = event.target as HTMLButtonElement;

					// Find the closest ancestor <tbody> element
					const tbody = currentButton.closest(
						'.bsf-force-ui-month-weeks'
					) as any;

					// Find all buttons within the <tbody> element
					const buttons = Array.from(
						tbody.querySelectorAll('button')
					);

					// Find the index of the current button in the buttons array
					const currentIndex = buttons.indexOf(currentButton);

					// Find the index of the button with aria-selected="true"
					const selectedIndex = buttons.findIndex(
						(button: any) =>
							button.getAttribute('aria-selected') === 'true'
					);

					// Create an array to store the selected buttons
					const selectedButtons = [] as any[];

					// Determine the range of buttons to select
					const start = Math.min(currentIndex, selectedIndex);
					const end = Math.max(currentIndex, selectedIndex);

					// Select the buttons between the current button and the button with aria-selected="true" (inclusive)
					// eslint-disable-next-line no-plusplus
					for (let i = start; i <= end; i++) {
						if (!buttons[i]?.disabled) {
							selectedButtons.push(buttons[i]);
						}
					}

					buttons.forEach((item: any) => {
						// run over all buttons and set data-hover true to those who in range
						item.setAttribute(
							'data-hover',
							selectedButtons.includes(item) ? 'true' : 'false'
						);
					});
				}}
			/>
		</>
	);
};

export default DatePickerComponent;
