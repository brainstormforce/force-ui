import DatePicker from './datepicker';

export default {
	title: 'Atoms/DatePicker',
	component: DatePicker,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		mode: {
			control: 'select',
			options: [ 'single', 'range', 'multiple' ],
			description:
				'Defines the selection mode of the date picker: single, range, or multiple dates.',
		},
		variant: {
			control: 'select',
			options: [ 'normal', 'dualdate', 'presets' ],
			description:
				'Defines the variant of the date picker: normal, dualdate, or presets.',
		},
		applyText: {
			control: 'text',
			description: 'Text displayed on the Apply button.',
		},
		cancelText: {
			control: 'text',
			description: 'Text displayed on the Cancel button.',
		},
	},
	decorators: [
		( Story ) => (
			<div style={ { width: '100%', margin: '0 auto' } }>
				<Story />
			</div>
		),
	],
};

const Template = ( args ) => <DatePicker { ...args } />;

export const Default = Template.bind( {} );
Default.args = {
	mode: 'single',
	variant: 'normal',
	applyText: 'Apply',
	cancelText: 'Cancel',
};

export const Range = Template.bind( {} );
Range.args = {
	mode: 'range',
	variant: 'normal',
	applyText: 'Apply',
	cancelText: 'Cancel',
};

export const Multiple = Template.bind( {} );
Multiple.args = {
	mode: 'multiple',
	variant: 'normal',
	applyText: 'Apply',
	cancelText: 'Cancel',
};

export const DualDate = Template.bind( {} );
DualDate.args = {
	mode: 'range',
	variant: 'dualdate',
	applyText: 'Apply',
	cancelText: 'Cancel',
};

export const WithPresets = Template.bind( {} );
WithPresets.args = {
	mode: 'range',
	variant: 'presets',
	applyText: 'Apply',
	cancelText: 'Cancel',
};
