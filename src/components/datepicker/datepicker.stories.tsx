import {
	addMonths,
	format,
	startOfToday,
	startOfYesterday,
	startOfWeek,
	endOfWeek,
	startOfMonth,
	endOfMonth,
	subWeeks,
	subMonths,
} from 'date-fns';
import DatePicker from './datepicker';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { expect, fireEvent, fn, userEvent, within } from 'storybook/test';
import { PlayFunc } from '@/utilities/ts-helper';

const meta: Meta = {
	title: 'Atoms/DatePicker',
	component: DatePicker,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	decorators: [
		( Story ) => (
			<div style={ { width: '100%', margin: '0 auto' } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		selectionType: {
			control: { type: 'select' },
			options: [ 'single', 'range', 'multiple' ],
		},
		variant: {
			control: { type: 'select' },
			options: [ 'normal', 'dualdate', 'presets' ],
		},
		enableTimeSelection: {
			control: { type: 'boolean' },
		},
	},
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryFn<typeof DatePicker>;
type PlayFunction = PlayFunc<Story>;

const Template: Story = ( args ) => (
	<DatePicker key={ args.selectionType } { ...args } />
);

// Find the enabled calendar button for a day of the given month (defaults to the current month).
const getDayButton = (
	canvasElement: HTMLElement,
	day: number,
	monthDate: Date = new Date()
) => {
	const dayString = `${ format( monthDate, 'yyyy-MM' ) }-${ String(
		day
	).padStart( 2, '0' ) }`;
	return canvasElement.querySelector(
		`button[data-day="${ dayString }"]:not([disabled])`
	) as HTMLButtonElement;
};

const singleTimeSelectionTest: PlayFunction = async ( {
	canvasElement,
	args,
} ) => {
	const canvas = within( canvasElement );
	const timeInput = canvas.getByLabelText( 'Time' ) as HTMLInputElement;
	// No date selected yet — input is disabled and empty.
	await expect( timeInput ).toBeDisabled();
	await expect( timeInput ).toHaveValue( '' );

	// Selecting a date enables the input at midnight.
	await userEvent.click( getDayButton( canvasElement, 15 ) );
	await expect( timeInput ).toBeEnabled();
	await expect( timeInput ).toHaveValue( '00:00' );

	// Setting a time merges it into the selected date.
	await fireEvent.change( timeInput, { target: { value: '14:30' } } );
	await expect( timeInput ).toHaveValue( '14:30' );

	// Picking another date preserves the chosen time.
	await userEvent.click( getDayButton( canvasElement, 18 ) );
	await expect( timeInput ).toHaveValue( '14:30' );
	const onDateSelect = args.onDateSelect as ReturnType<typeof fn>;
	const lastSelected = onDateSelect.mock.calls.at( -1 )?.[ 0 ] as Date;
	await expect( lastSelected.getDate() ).toBe( 18 );
	await expect( lastSelected.getHours() ).toBe( 14 );
	await expect( lastSelected.getMinutes() ).toBe( 30 );

	// Clearing the native input is a no-op.
	await fireEvent.change( timeInput, { target: { value: '' } } );
	await expect( timeInput ).toHaveValue( '14:30' );

	// The Apply payload carries the chosen time.
	await userEvent.click( canvas.getByRole( 'button', { name: 'Apply' } ) );
	const onApply = args.onApply as ReturnType<typeof fn>;
	const applied = onApply.mock.calls.at( -1 )?.[ 0 ] as Date;
	await expect( applied.getHours() ).toBe( 14 );
	await expect( applied.getMinutes() ).toBe( 30 );

	// Deselecting the date disables and empties the input.
	await userEvent.click( getDayButton( canvasElement, 18 ) );
	await expect( timeInput ).toBeDisabled();
	await expect( timeInput ).toHaveValue( '' );
};

const rangeTimeSelectionTest: PlayFunction = async ( {
	canvasElement,
	args,
} ) => {
	const canvas = within( canvasElement );
	const startInput = canvas.getByLabelText(
		'Start time'
	) as HTMLInputElement;
	const endInput = canvas.getByLabelText( 'End time' ) as HTMLInputElement;
	// No range selected yet — both inputs are disabled.
	await expect( startInput ).toBeDisabled();
	await expect( endInput ).toBeDisabled();

	// Starting a range enables only the start input.
	await userEvent.click( getDayButton( canvasElement, 10 ) );
	await expect( startInput ).toBeEnabled();
	await expect( startInput ).toHaveValue( '00:00' );
	await expect( endInput ).toBeDisabled();

	await fireEvent.change( startInput, { target: { value: '09:15' } } );
	await expect( startInput ).toHaveValue( '09:15' );

	// Completing the range keeps the chosen start time.
	await userEvent.click( getDayButton( canvasElement, 20 ) );
	await expect( startInput ).toHaveValue( '09:15' );
	await expect( endInput ).toBeEnabled();
	await expect( endInput ).toHaveValue( '00:00' );

	await fireEvent.change( endInput, { target: { value: '18:45' } } );
	await expect( endInput ).toHaveValue( '18:45' );

	// The Apply payload carries both times.
	await userEvent.click( canvas.getByRole( 'button', { name: 'Apply' } ) );
	const onApply = args.onApply as ReturnType<typeof fn>;
	const appliedRange = onApply.mock.calls.at( -1 )?.[ 0 ] as {
		from: Date;
		to: Date;
	};
	await expect( appliedRange.from.getHours() ).toBe( 9 );
	await expect( appliedRange.from.getMinutes() ).toBe( 15 );
	await expect( appliedRange.to.getHours() ).toBe( 18 );
	await expect( appliedRange.to.getMinutes() ).toBe( 45 );

	// Starting a new range carries the previous start time.
	await userEvent.click( getDayButton( canvasElement, 5 ) );
	await expect( startInput ).toHaveValue( '09:15' );
	await expect( endInput ).toBeDisabled();

	// Same-day completion clamps the end so it never lands before the start.
	await userEvent.click( getDayButton( canvasElement, 5 ) );
	await expect( startInput ).toHaveValue( '09:15' );
	await expect( endInput ).toHaveValue( '09:15' );

	// Editing a time that would invert the range realigns the other endpoint.
	await fireEvent.change( endInput, { target: { value: '06:00' } } );
	await expect( endInput ).toHaveValue( '06:00' );
	await expect( startInput ).toHaveValue( '06:00' );

	// Clicking the selected day again deselects, even with a non-midnight time.
	await userEvent.click( getDayButton( canvasElement, 5 ) );
	await expect( startInput ).toBeDisabled();
	await expect( endInput ).toBeDisabled();

	// Clicking an earlier day swaps the range endpoints.
	await userEvent.click( getDayButton( canvasElement, 20 ) );
	await userEvent.click( getDayButton( canvasElement, 12 ) );
	const onDateSelect = args.onDateSelect as ReturnType<typeof fn>;
	const lastRange = onDateSelect.mock.calls.at( -1 )?.[ 0 ] as {
		from: Date;
		to: Date;
	};
	await expect( lastRange.from.getDate() ).toBe( 12 );
	await expect( lastRange.to.getDate() ).toBe( 20 );
};

const multipleTimeSelectionTest: PlayFunction = async ( {
	canvasElement,
	args,
} ) => {
	const canvas = within( canvasElement );
	// The flag is ignored for multiple — no time inputs are rendered.
	await expect( canvas.queryByLabelText( 'Time' ) ).toBeNull();
	await expect( canvas.queryByLabelText( 'Start time' ) ).toBeNull();
	await expect( canvas.queryByLabelText( 'End time' ) ).toBeNull();

	// Multiple selection still works as before.
	await userEvent.click( getDayButton( canvasElement, 15 ) );
	await userEvent.click( getDayButton( canvasElement, 18 ) );
	const onDateSelect = args.onDateSelect as ReturnType<typeof fn>;
	const lastSelected = onDateSelect.mock.calls.at( -1 )?.[ 0 ] as Date[];
	await expect( lastSelected ).toHaveLength( 2 );
};

// Regression tests: with enableTimeSelection off, the previous behavior
// must be unchanged and no time inputs may render.
const singleRegressionTest: PlayFunction = async ( {
	canvasElement,
	args,
} ) => {
	const canvas = within( canvasElement );
	await expect(
		canvasElement.querySelector( 'input[type="time"]' )
	).toBeNull();

	const onDateSelect = args.onDateSelect as ReturnType<typeof fn>;
	// Selecting a date reports it at midnight.
	await userEvent.click( getDayButton( canvasElement, 15 ) );
	const selected = onDateSelect.mock.calls.at( -1 )?.[ 0 ] as Date;
	await expect( selected.getDate() ).toBe( 15 );
	await expect( selected.getHours() ).toBe( 0 );
	await expect( selected.getMinutes() ).toBe( 0 );

	// Re-clicking the selected date deselects it.
	await userEvent.click( getDayButton( canvasElement, 15 ) );
	await expect( onDateSelect.mock.calls.at( -1 )?.[ 0 ] ).toBeUndefined();

	// Apply and Cancel callbacks still fire with the expected payloads.
	await userEvent.click( getDayButton( canvasElement, 18 ) );
	await userEvent.click( canvas.getByRole( 'button', { name: 'Apply' } ) );
	const onApply = args.onApply as ReturnType<typeof fn>;
	const applied = onApply.mock.calls.at( -1 )?.[ 0 ] as Date;
	await expect( applied.getDate() ).toBe( 18 );
	await userEvent.click( canvas.getByRole( 'button', { name: 'Cancel' } ) );
	await expect( args.onCancel ).toHaveBeenCalled();
};

const rangeRegressionTest: PlayFunction = async ( {
	canvasElement,
	args,
} ) => {
	const canvas = within( canvasElement );
	await expect(
		canvasElement.querySelector( 'input[type="time"]' )
	).toBeNull();

	const onDateSelect = args.onDateSelect as ReturnType<typeof fn>;
	const lastRange = () =>
		onDateSelect.mock.calls.at( -1 )?.[ 0 ] as {
			from: Date | undefined;
			to: Date | undefined;
		};

	// Starting a range sets only the start date.
	await userEvent.click( getDayButton( canvasElement, 10 ) );
	await expect( lastRange().from?.getDate() ).toBe( 10 );
	await expect( lastRange().to ).toBeUndefined();

	// A later click completes the range.
	await userEvent.click( getDayButton( canvasElement, 20 ) );
	await expect( lastRange().from?.getDate() ).toBe( 10 );
	await expect( lastRange().to?.getDate() ).toBe( 20 );

	// Clicking the start date of a complete range deselects it.
	await userEvent.click( getDayButton( canvasElement, 10 ) );
	await expect( lastRange().from ).toBeUndefined();
	await expect( lastRange().to ).toBeUndefined();

	// Clicking an earlier day than the start swaps the endpoints.
	await userEvent.click( getDayButton( canvasElement, 20 ) );
	await userEvent.click( getDayButton( canvasElement, 12 ) );
	await expect( lastRange().from?.getDate() ).toBe( 12 );
	await expect( lastRange().to?.getDate() ).toBe( 20 );

	// Clicking the end date of a complete range deselects it.
	await userEvent.click( getDayButton( canvasElement, 20 ) );
	await expect( lastRange().from ).toBeUndefined();

	// Clicking the same day twice creates a same-day range.
	await userEvent.click( getDayButton( canvasElement, 15 ) );
	await userEvent.click( getDayButton( canvasElement, 15 ) );
	await expect( lastRange().from?.getDate() ).toBe( 15 );
	await expect( lastRange().to?.getDate() ).toBe( 15 );

	// The Apply payload stays at midnight.
	await userEvent.click( canvas.getByRole( 'button', { name: 'Apply' } ) );
	const onApply = args.onApply as ReturnType<typeof fn>;
	const applied = onApply.mock.calls.at( -1 )?.[ 0 ] as {
		from: Date;
		to: Date;
	};
	await expect( applied.from.getHours() ).toBe( 0 );
	await expect( applied.to.getHours() ).toBe( 0 );

	await userEvent.click( canvas.getByRole( 'button', { name: 'Cancel' } ) );
	await expect( args.onCancel ).toHaveBeenCalled();
};

const multipleRegressionTest: PlayFunction = async ( {
	canvasElement,
	args,
} ) => {
	const canvas = within( canvasElement );
	await expect(
		canvasElement.querySelector( 'input[type="time"]' )
	).toBeNull();

	const onDateSelect = args.onDateSelect as ReturnType<typeof fn>;
	// Selecting dates accumulates them.
	await userEvent.click( getDayButton( canvasElement, 15 ) );
	await userEvent.click( getDayButton( canvasElement, 18 ) );
	await expect( onDateSelect.mock.calls.at( -1 )?.[ 0 ] ).toHaveLength( 2 );

	// Re-clicking a selected date removes it.
	await userEvent.click( getDayButton( canvasElement, 15 ) );
	const remaining = onDateSelect.mock.calls.at( -1 )?.[ 0 ] as Date[];
	await expect( remaining ).toHaveLength( 1 );
	await expect( remaining[ 0 ].getDate() ).toBe( 18 );

	// The Apply payload is the array of selected dates.
	await userEvent.click( canvas.getByRole( 'button', { name: 'Apply' } ) );
	const onApply = args.onApply as ReturnType<typeof fn>;
	await expect( onApply.mock.calls.at( -1 )?.[ 0 ] ).toHaveLength( 1 );
};

const dualDateRegressionTest: PlayFunction = async ( {
	canvasElement,
	args,
} ) => {
	await expect(
		canvasElement.querySelector( 'input[type="time"]' )
	).toBeNull();

	// A range can span the two displayed months.
	await userEvent.click( getDayButton( canvasElement, 25 ) );
	await userEvent.click(
		getDayButton( canvasElement, 5, addMonths( new Date(), 1 ) )
	);
	const onDateSelect = args.onDateSelect as ReturnType<typeof fn>;
	const lastRange = onDateSelect.mock.calls.at( -1 )?.[ 0 ] as {
		from: Date;
		to: Date;
	};
	await expect( lastRange.from.getDate() ).toBe( 25 );
	await expect( lastRange.to.getDate() ).toBe( 5 );
	await expect( lastRange.to.getMonth() ).toBe(
		addMonths( new Date(), 1 ).getMonth()
	);
};

const presetsRegressionTest: PlayFunction = async ( {
	canvasElement,
	args,
} ) => {
	const canvas = within( canvasElement );
	await expect(
		canvasElement.querySelector( 'input[type="time"]' )
	).toBeNull();

	const onApply = args.onApply as ReturnType<typeof fn>;
	// The initial `selected` value flows through to Apply.
	await userEvent.click( canvas.getByRole( 'button', { name: 'Apply' } ) );
	let applied = onApply.mock.calls.at( -1 )?.[ 0 ] as {
		from: Date;
		to: Date;
	};
	await expect( applied.from.getTime() ).toBe(
		startOfMonth( new Date() ).getTime()
	);

	// Clicking a preset updates the selection.
	await userEvent.click( canvas.getByRole( 'button', { name: 'Today' } ) );
	await userEvent.click( canvas.getByRole( 'button', { name: 'Apply' } ) );
	applied = onApply.mock.calls.at( -1 )?.[ 0 ] as { from: Date; to: Date };
	await expect( applied.from.getTime() ).toBe( startOfToday().getTime() );
	await expect( applied.to.getTime() ).toBe( startOfToday().getTime() );
};

export const Default = Template.bind( {} );
Default.args = {
	selectionType: 'single',
	variant: 'normal',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: fn(),
	onCancel: fn(),
	onDateSelect: fn(),
};
Default.play = singleRegressionTest;

export const Range = Template.bind( {} );
Range.args = {
	selectionType: 'range',
	variant: 'normal',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: fn(),
	onCancel: fn(),
	onDateSelect: fn(),
};
Range.play = rangeRegressionTest;

export const Multiple = Template.bind( {} );
Multiple.args = {
	selectionType: 'multiple',
	variant: 'normal',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: fn(),
	onCancel: fn(),
	onDateSelect: fn(),
};
Multiple.play = multipleRegressionTest;

export const SingleWithTimeSelection = Template.bind( {} );
SingleWithTimeSelection.args = {
	selectionType: 'single',
	variant: 'normal',
	enableTimeSelection: true,
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: fn(),
	onCancel: fn(),
	onDateSelect: fn(),
};
SingleWithTimeSelection.play = singleTimeSelectionTest;

export const RangeWithTimeSelection = Template.bind( {} );
RangeWithTimeSelection.args = {
	selectionType: 'range',
	variant: 'dualdate',
	enableTimeSelection: true,
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: fn(),
	onCancel: fn(),
	onDateSelect: fn(),
};
RangeWithTimeSelection.play = rangeTimeSelectionTest;

// enableTimeSelection is intentionally ignored for the multiple selection type.
export const MultipleWithTimeSelection = Template.bind( {} );
MultipleWithTimeSelection.args = {
	selectionType: 'multiple',
	variant: 'normal',
	enableTimeSelection: true,
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: fn(),
	onCancel: fn(),
	onDateSelect: fn(),
};
MultipleWithTimeSelection.play = multipleTimeSelectionTest;

export const DualDate = Template.bind( {} );
DualDate.args = {
	selectionType: 'range',
	variant: 'dualdate',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: fn(),
	onCancel: fn(),
	onDateSelect: fn(),
};
DualDate.play = dualDateRegressionTest;

export const WithPresets = Template.bind( {} );
WithPresets.args = {
	selectionType: 'range',
	variant: 'presets',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	presets: [
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
	],
	// set last_week selected for testing.
	selected: {
		from: startOfMonth( new Date() ),
		to: endOfMonth( new Date() ),
	},
	onApply: fn(),
	onCancel: fn(),
	onDateSelect: fn(),
};
WithPresets.play = presetsRegressionTest;
