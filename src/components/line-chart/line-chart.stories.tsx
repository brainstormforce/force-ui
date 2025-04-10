import type { Meta, StoryObj } from '@storybook/react';
import LineChart from './line-chart';

const chartData = [
	{ month: 'January', desktop: 186 },
	{ month: 'February', desktop: 305 },
	{ month: 'March', desktop: 237 },
	{ month: 'April', desktop: 73 },
	{ month: 'May', desktop: 209 },
	{ month: 'June', desktop: 214 },
];

const chartDataMultiple = [
	{ month: 'January', desktop: 186, mobile: 80 },
	{ month: 'February', desktop: 305, mobile: 200 },
	{ month: 'March', desktop: 237, mobile: 120 },
	{ month: 'April', desktop: 173, mobile: 160 },
	{ month: 'May', desktop: 209, mobile: 130 },
	{ month: 'June', desktop: 214, mobile: 140 },
];

// Data for biaxial chart with different scales
const biaxialChartData = [
	{ month: 'January', visits: 186, revenue: 5800 },
	{ month: 'February', visits: 305, revenue: 9200 },
	{ month: 'March', visits: 237, revenue: 7400 },
	{ month: 'April', visits: 173, revenue: 5100 },
	{ month: 'May', visits: 209, revenue: 6300 },
	{ month: 'June', visits: 214, revenue: 6800 },
];

const dataKeys = [ 'desktop', 'mobile' ];
const biaxialDataKeys = [ 'visits', 'revenue' ];

const colors = [ { stroke: '#2563EB' }, { stroke: '#38BDF8' } ];

const meta: Meta = {
	title: 'Atoms/LineChart',
	component: LineChart,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
} satisfies Meta<typeof LineChart>;

export default meta;

// Custom tick formatter function for months
const monthFormatter = ( value: string ) => value.slice( 0, 3 );

type Story = StoryObj<typeof LineChart>;

export const LineChartSimple: Story = {
	args: {
		data: chartData,
		dataKeys: [ 'desktop' ],
		colors: [ { stroke: '#3b82f6' } ],
		showXAxis: true,
		showYAxis: false,
		showTooltip: true,
		showCartesianGrid: true,
		tickFormatter: monthFormatter,
		xAxisDataKey: 'month',
		xAxisFontSize: 'sm',
		withDots: false,
		lineChartWrapperProps: {
			margin: { top: 5, right: 15, bottom: 5, left: 15 },
		},
	},
};

export const LineChartWithDots: Story = {
	args: {
		data: chartData,
		dataKeys: [ 'desktop' ],
		colors: [ { stroke: '#3b82f6' } ],
		showXAxis: true,
		showYAxis: false,
		showTooltip: true,
		showCartesianGrid: true,
		tickFormatter: monthFormatter,
		xAxisDataKey: 'month',
		xAxisFontSize: 'sm',
		withDots: true,
		lineChartWrapperProps: {
			margin: { top: 5, right: 15, bottom: 5, left: 15 },
		},
	},
};

export const LineChartMultiple: Story = {
	args: {
		data: chartDataMultiple,
		dataKeys,
		colors,
		showXAxis: true,
		showYAxis: false,
		showTooltip: true,
		showCartesianGrid: true,
		tickFormatter: monthFormatter,
		xAxisDataKey: 'month',
		xAxisFontSize: 'sm',
		withDots: false,
		lineChartWrapperProps: {
			margin: { top: 5, right: 15, bottom: 5, left: 15 },
		},
	},
};

export const BiaxialLineChart: Story = {
	args: {
		data: biaxialChartData,
		dataKeys: biaxialDataKeys,
		colors: [ { stroke: '#2563EB' }, { stroke: '#10B981' } ],
		showXAxis: true,
		showYAxis: true,
		showTooltip: true,
		showCartesianGrid: true,
		tickFormatter: monthFormatter,
		xAxisDataKey: 'month',
		xAxisFontSize: 'sm',
		withDots: true,
		biaxial: true,
		chartWidth: 500,
		chartHeight: 300,
		lineChartWrapperProps: {
			margin: { top: 5, right: 5, bottom: 5, left: 5 },
		},
		yAxisFontColor: [ '#3b82f6', '#10B981' ],
	},
};
