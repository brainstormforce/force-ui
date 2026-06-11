import {
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

// Find the enabled calendar button for a day of the currently displayed month.
const getDayButton = ( canvasElement: HTMLElement, day: number ) => {
	const dayString = `${ format( new Date(), 'yyyy-MM' ) }-${ String(
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

export const Default = Template.bind( {} );
Default.args = {
	selectionType: 'single',
	variant: 'normal',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: () => {
		//code
	},
	onCancel: () => {
		//code
	},
	onDateSelect: () => {
		//code
	},
};

export const Range = Template.bind( {} );
Range.args = {
	selectionType: 'range',
	variant: 'normal',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: () => {
		//code
	},
	onCancel: () => {
		//code
	},
	onDateSelect: () => {
		//code
	},
};

export const Multiple = Template.bind( {} );
Multiple.args = {
	selectionType: 'multiple',
	variant: 'normal',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	onApply: () => {
		//code
	},
	onCancel: () => {
		//code
	},
	onDateSelect: () => {
		//code
	},
};

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
	onApply: () => {
		//code
	},
	onCancel: () => {
		//code
	},
	onDateSelect: () => {
		//code
	},
};

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
	onApply: () => {
		//code
	},
	onCancel: () => {
		//code
	},
	onDateSelect: () => {
		//code
	},
};
