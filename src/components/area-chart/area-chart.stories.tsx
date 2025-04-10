import { Meta, StoryObj, StoryFn } from '@storybook/react';
import AreaChart from './area-chart';
import Label from '../label';
import Button from '../button';
import Badge from '../badge';
import Container from '../container';
import { ArrowUpRight, ArrowUp, AlertCircle } from 'lucide-react';

const areaChartData = [
	{ month: 'January', sales: 186, expenses: 80 },
	{ month: 'February', sales: 305, expenses: 200 },
	{ month: 'March', sales: 237, expenses: 120 },
	{ month: 'April', sales: 73, expenses: 190 },
	{ month: 'May', sales: 209, expenses: 130 },
	{ month: 'June', sales: 214, expenses: 140 },
];

// Data with large values to demonstrate Y-axis formatting
const largeValuesData = [
	{ month: 'January', pageviews: 1200, sessions: 800 },
	{ month: 'February', pageviews: 2800, sessions: 1500 },
	{ month: 'March', pageviews: 5500, sessions: 2900 },
	{ month: 'April', pageviews: 8200, sessions: 4100 },
	{ month: 'May', pageviews: 14000, sessions: 6200 },
	{ month: 'June', pageviews: 18500, sessions: 8800 },
];

// Empty data for demonstrating custom no data component
const emptyData: { month: string; sales: number; expenses: number }[] = [];

const dataKeys = [ 'sales', 'expenses' ];
const largeDataKeys = [ 'pageviews', 'sessions' ];

const chartDataIteractive = [
	{ date: '2024-04-01', desktop: 222, mobile: 150 },
	{ date: '2024-04-02', desktop: 97, mobile: 180 },
	{ date: '2024-04-03', desktop: 167, mobile: 120 },
	{ date: '2024-04-04', desktop: 242, mobile: 260 },
	{ date: '2024-04-05', desktop: 373, mobile: 290 },
	{ date: '2024-04-06', desktop: 301, mobile: 340 },
	{ date: '2024-04-07', desktop: 245, mobile: 180 },
	{ date: '2024-04-08', desktop: 409, mobile: 320 },
	{ date: '2024-04-09', desktop: 59, mobile: 110 },
	{ date: '2024-04-10', desktop: 261, mobile: 190 },
	{ date: '2024-04-11', desktop: 327, mobile: 350 },
	{ date: '2024-04-12', desktop: 292, mobile: 210 },
	{ date: '2024-04-13', desktop: 342, mobile: 380 },
	{ date: '2024-04-14', desktop: 137, mobile: 220 },
	{ date: '2024-04-15', desktop: 120, mobile: 170 },
	{ date: '2024-04-16', desktop: 138, mobile: 190 },
	{ date: '2024-04-17', desktop: 446, mobile: 360 },
	{ date: '2024-04-18', desktop: 364, mobile: 410 },
	{ date: '2024-04-19', desktop: 243, mobile: 180 },
	{ date: '2024-04-20', desktop: 89, mobile: 150 },
	{ date: '2024-04-21', desktop: 137, mobile: 200 },
	{ date: '2024-04-22', desktop: 224, mobile: 170 },
	{ date: '2024-04-23', desktop: 138, mobile: 230 },
	{ date: '2024-04-24', desktop: 387, mobile: 290 },
	{ date: '2024-04-25', desktop: 215, mobile: 250 },
	{ date: '2024-04-26', desktop: 75, mobile: 130 },
	{ date: '2024-04-27', desktop: 383, mobile: 420 },
	{ date: '2024-04-28', desktop: 122, mobile: 180 },
	{ date: '2024-04-29', desktop: 315, mobile: 240 },
	{ date: '2024-04-30', desktop: 454, mobile: 380 },
	{ date: '2024-05-01', desktop: 165, mobile: 220 },
	{ date: '2024-05-02', desktop: 293, mobile: 310 },
	{ date: '2024-05-03', desktop: 247, mobile: 190 },
	{ date: '2024-05-04', desktop: 385, mobile: 420 },
	{ date: '2024-05-05', desktop: 481, mobile: 390 },
	{ date: '2024-05-06', desktop: 498, mobile: 520 },
	{ date: '2024-05-07', desktop: 388, mobile: 300 },
	{ date: '2024-05-08', desktop: 149, mobile: 210 },
	{ date: '2024-05-09', desktop: 227, mobile: 180 },
	{ date: '2024-05-10', desktop: 293, mobile: 330 },
	{ date: '2024-05-11', desktop: 335, mobile: 270 },
	{ date: '2024-05-12', desktop: 197, mobile: 240 },
	{ date: '2024-05-13', desktop: 197, mobile: 160 },
	{ date: '2024-05-14', desktop: 448, mobile: 490 },
	{ date: '2024-05-15', desktop: 473, mobile: 380 },
	{ date: '2024-05-16', desktop: 338, mobile: 400 },
	{ date: '2024-05-17', desktop: 499, mobile: 420 },
	{ date: '2024-05-18', desktop: 315, mobile: 350 },
	{ date: '2024-05-19', desktop: 235, mobile: 180 },
	{ date: '2024-05-20', desktop: 177, mobile: 230 },
	{ date: '2024-05-21', desktop: 82, mobile: 140 },
	{ date: '2024-05-22', desktop: 81, mobile: 120 },
	{ date: '2024-05-23', desktop: 252, mobile: 290 },
	{ date: '2024-05-24', desktop: 294, mobile: 220 },
	{ date: '2024-05-25', desktop: 201, mobile: 250 },
	{ date: '2024-05-26', desktop: 213, mobile: 170 },
	{ date: '2024-05-27', desktop: 420, mobile: 460 },
	{ date: '2024-05-28', desktop: 233, mobile: 190 },
	{ date: '2024-05-29', desktop: 78, mobile: 130 },
	{ date: '2024-05-30', desktop: 340, mobile: 280 },
	{ date: '2024-05-31', desktop: 178, mobile: 230 },
	{ date: '2024-06-01', desktop: 178, mobile: 200 },
	{ date: '2024-06-02', desktop: 470, mobile: 410 },
	{ date: '2024-06-03', desktop: 103, mobile: 160 },
	{ date: '2024-06-04', desktop: 439, mobile: 380 },
	{ date: '2024-06-05', desktop: 88, mobile: 140 },
	{ date: '2024-06-06', desktop: 294, mobile: 250 },
	{ date: '2024-06-07', desktop: 323, mobile: 370 },
	{ date: '2024-06-08', desktop: 385, mobile: 320 },
	{ date: '2024-06-09', desktop: 438, mobile: 480 },
	{ date: '2024-06-10', desktop: 155, mobile: 200 },
	{ date: '2024-06-11', desktop: 92, mobile: 150 },
	{ date: '2024-06-12', desktop: 492, mobile: 420 },
	{ date: '2024-06-13', desktop: 81, mobile: 130 },
	{ date: '2024-06-14', desktop: 426, mobile: 380 },
	{ date: '2024-06-15', desktop: 307, mobile: 350 },
	{ date: '2024-06-16', desktop: 371, mobile: 310 },
	{ date: '2024-06-17', desktop: 475, mobile: 520 },
	{ date: '2024-06-18', desktop: 107, mobile: 170 },
	{ date: '2024-06-19', desktop: 341, mobile: 290 },
	{ date: '2024-06-20', desktop: 408, mobile: 450 },
	{ date: '2024-06-21', desktop: 169, mobile: 210 },
	{ date: '2024-06-22', desktop: 317, mobile: 270 },
	{ date: '2024-06-23', desktop: 480, mobile: 530 },
	{ date: '2024-06-24', desktop: 132, mobile: 180 },
	{ date: '2024-06-25', desktop: 141, mobile: 190 },
	{ date: '2024-06-26', desktop: 434, mobile: 380 },
	{ date: '2024-06-27', desktop: 448, mobile: 490 },
	{ date: '2024-06-28', desktop: 149, mobile: 200 },
	{ date: '2024-06-29', desktop: 103, mobile: 160 },
	{ date: '2024-06-30', desktop: 446, mobile: 400 },
];

const dataKeysInteractive = [ 'desktop', 'mobile' ];

const colors = [
	{ stroke: '#2563EB', fill: '#BFDBFE' },
	{ stroke: '#38BDF8', fill: '#BAE6FD' },
];

// Custom tick formatter function for months
const monthFormatter = ( value: string ) => value.slice( 0, 3 );

// Custom Y-axis formatter function to display values in K/M format
const yAxisFormatter = ( value: number ) => {
	if ( value >= 1000000 ) {
		return `${ ( value / 1000000 ).toFixed( 1 ) }M`;
	}
	if ( value >= 1000 ) {
		return `${ ( value / 1000 ).toFixed( 1 ) }K`;
	}
	return value.toString();
};

// Custom No Data Component
const CustomNoDataComponent = () => (
	<div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-50 text-gray-600">
		<AlertCircle className="mb-3 text-amber-500" size={ 50 } />
		<div className="text-base font-medium">No data found</div>
		<p className="text-sm text-center text-gray-500 mt-1 max-w-xs">
			There is no data available for this chart at the moment. Try
			adjusting your filters or check back later.
		</p>
	</div>
);

const monthFormatterInteractive = ( value: string ) => {
	const date = new Date( value );
	return date.toLocaleDateString( 'en-US', {
		month: 'short',
		day: 'numeric',
	} );
};

const meta: Meta = {
	title: 'Atoms/AreaChart',
	component: AreaChart,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
} satisfies Meta<typeof AreaChart>;

export default meta;

type Story = StoryObj<typeof AreaChart>;

export const AreaChartSimple: Story = {
	args: {
		data: areaChartData,
		dataKeys,
		colors,
		variant: 'solid', // solid, gradient
		tickFormatter: monthFormatter,
		showXAxis: true,
		xAxisDataKey: 'month',
		showYAxis: false,
		showLegend: false,
		showTooltip: true,
		tooltipIndicator: 'dot',
	},
};

export const AreaChartGradient: Story = {
	args: {
		data: areaChartData,
		dataKeys,
		colors,
		variant: 'gradient', // solid, gradient
		tickFormatter: monthFormatter,
		showXAxis: true,
		xAxisDataKey: 'month',
		showYAxis: false,
		showLegend: false,
	},
};

export const AreaChartInteractive: Story = {
	args: {
		chartWidth: 900,
		chartHeight: 250,
		data: chartDataIteractive,
		dataKeys: dataKeysInteractive,
		colors,
		variant: 'gradient', // solid, gradient
		showXAxis: true,
		xAxisDataKey: 'date',
		showYAxis: false,
		tickFormatter: monthFormatterInteractive,
	},
};

export const AreaChartWithFormattedYAxis: Story = {
	args: {
		chartWidth: 600,
		chartHeight: 300,
		data: largeValuesData,
		dataKeys: largeDataKeys,
		colors: [
			{ stroke: '#3b82f6', fill: '#BFDBFE' },
			{ stroke: '#f97316', fill: '#FFEDD5' },
		],
		variant: 'solid',
		showXAxis: true,
		xAxisDataKey: 'month',
		showYAxis: true,
		tickFormatter: monthFormatter,
		yAxisTickFormatter: yAxisFormatter,
		showLegend: true,
		areaChartWrapperProps: {
			margin: {
				left: 35,
				right: 14,
				top: 6,
				bottom: 6,
			},
		},
	},
};

export const AreaChartGradientWithFormattedYAxis: Story = {
	args: {
		chartWidth: 600,
		chartHeight: 300,
		data: largeValuesData,
		dataKeys: largeDataKeys,
		colors: [
			{ stroke: '#3b82f6', fill: '#BFDBFE' },
			{ stroke: '#f97316', fill: '#FFEDD5' },
		],
		variant: 'gradient',
		showXAxis: true,
		xAxisDataKey: 'month',
		showYAxis: true,
		tickFormatter: monthFormatter,
		yAxisTickFormatter: yAxisFormatter,
		showLegend: true,
		areaChartWrapperProps: {
			margin: {
				left: 35,
				right: 14,
				top: 6,
				bottom: 6,
			},
		},
	},
};

export const AreaChartWithCustomNoDataComponent: Story = {
	args: {
		chartWidth: 600,
		chartHeight: 300,
		data: emptyData,
		dataKeys,
		colors,
		variant: 'solid',
		showXAxis: true,
		xAxisDataKey: 'month',
		showYAxis: true,
		noDataComponent: <CustomNoDataComponent />,
	},
};

AreaChartInteractive.storyName = 'Area Chart Gradient with Legend';
AreaChartWithFormattedYAxis.storyName = 'Area Chart with Formatted Y-Axis';
AreaChartGradientWithFormattedYAxis.storyName =
	'Area Chart Gradient with Formatted Y-Axis';
AreaChartWithCustomNoDataComponent.storyName =
	'Area Chart with Custom No Data Component';

type Story1 = StoryFn<typeof AreaChart>;

export const AreaChartCard1: Story1 = ( args ) => (
	<Container
		containerType="grid"
		gap="xs"
		className="p-4 bg-background-primary rounded-lg shadow-sm"
		{ ...args }
	>
		<Container.Item className="p-1 space-y-2">
			<Container containerType="flex" justify="between" align="center">
				<Label size="sm" className="text-text-tertiary font-medium">
					Cloned Sites
				</Label>
				<Button className="p-0" variant="ghost">
					<ArrowUpRight className="text-icon-secondary size-4" />
					<span className="sr-only">View Details</span>
				</Button>
			</Container>
			<Container containerType="flex" align="center" gap="xs">
				<div className="text-4xl text-text-primary font-semibold">
					316
				</div>
				<Badge
					label={ '12%' }
					size="sm"
					type="pill"
					variant="green"
					icon={ <ArrowUp /> }
				/>
			</Container>
			<Container
				containerType="flex"
				align="center"
				className="gap-0 space-x-1"
			>
				<span className="text-field-helper text-xs">Compare to</span>
				<Badge
					label={ '298' }
					size="sm"
					type="pill"
					variant="neutral"
					icon={ null }
				/>
				<span className="text-field-helper text-xs">previous week</span>
			</Container>
		</Container.Item>
		<Container.Item>
			<AreaChart
				data={ areaChartData }
				dataKeys={ dataKeys }
				colors={ colors }
				variant="solid"
				tickFormatter={ monthFormatter }
				showXAxis={ true }
				xAxisDataKey="month"
				showYAxis={ false }
				showLegend={ false }
			/>
		</Container.Item>
	</Container>
);

AreaChartCard1.storyName = 'Clone Sites Card With Area Chart';

export const AreaChartCard2: Story1 = ( args ) => (
	<Container
		containerType="grid"
		gap="xs"
		className="p-4 bg-background-primary rounded-lg shadow-sm"
		{ ...args }
	>
		<Container.Item className="p-1 space-y-2">
			<Container containerType="flex" justify="between" align="center">
				<Label size="sm" className="text-text-tertiary font-medium">
					Revenue
				</Label>
				<Button className="p-0" variant="ghost">
					<ArrowUpRight className="text-icon-secondary size-4" />
					<span className="sr-only">View Details</span>
				</Button>
			</Container>
			<Container containerType="flex" align="center" gap="xs">
				<div className="text-4xl text-text-primary font-semibold">
					$3,169
				</div>
				<Badge
					label={ '12%' }
					size="sm"
					type="pill"
					variant="green"
					icon={ <ArrowUp /> }
				/>
			</Container>
			<Container
				containerType="flex"
				align="center"
				className="gap-0 space-x-1"
			>
				<span className="text-field-helper text-xs">Compared to</span>
				<Badge
					label={ '$2,984' }
					size="sm"
					type="pill"
					variant="neutral"
					icon={ null }
				/>
				<span className="text-field-helper text-xs">previous week</span>
			</Container>
		</Container.Item>
		<Container.Item>
			<AreaChart
				chartWidth={ 900 }
				chartHeight={ 250 }
				data={ chartDataIteractive }
				dataKeys={ dataKeysInteractive }
				colors={ colors }
				variant="gradient"
				tickFormatter={ monthFormatterInteractive }
				showXAxis={ true }
				xAxisDataKey="date"
				showYAxis={ false }
				showLegend={ true }
			/>
		</Container.Item>
	</Container>
);

AreaChartCard2.storyName = 'Revenue Card With Area Chart';
