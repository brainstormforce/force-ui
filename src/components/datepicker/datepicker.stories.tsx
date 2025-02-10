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
import DatePicker from './datepicker';
import { Meta, StoryFn } from '@storybook/react';

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
	},
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryFn<typeof DatePicker>;

const Template: Story = ( args ) => (
	<DatePicker key={ args.selectionType } { ...args } />
);

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
