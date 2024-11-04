import AreaChart from './area-chart';
import Label from '../label';
import Button from '../button';
import Badge from '../badge';
import Container from '../container';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

const areaChartData = [
	{ month: 'January', sales: 186, expenses: 80 },
	{ month: 'February', sales: 305, expenses: 200 },
	{ month: 'March', sales: 237, expenses: 120 },
	{ month: 'April', sales: 73, expenses: 190 },
	{ month: 'May', sales: 209, expenses: 130 },
	{ month: 'June', sales: 214, expenses: 140 },
];

const dataKeys = ['sales', 'expenses'];

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

const dataKeysInteractive = ['desktop', 'mobile'];

const colors = [
	{ stroke: '#2563EB', fill: '#BFDBFE' },
	{ stroke: '#38BDF8', fill: '#BAE6FD' },
];

// Custom tick formatter function for months
const monthFormatter = (value) => value.slice(0, 3);

const monthFormatterInteractive = (value) => {
	const date = new Date(value);
	return date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
	});
};

export default {
	title: 'Atoms/AreaChart',
	component: AreaChart,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		data: {
			description:
				'An array of objects representing the source data for the chart.',
			control: { type: 'object' },
		},
		dataKeys: {
			description:
				'An array of strings representing the keys to access data in each data object. Used for identifying different data series.',
			control: { type: 'array' },
		},
		colors: {
			description:
				'An array of color strings that determine the colors for each data series in the chart.',
			control: { type: 'array' },
		},
		variant: {
			description: 'Defines the variant of Area Chart.',
			control: { type: 'select' },
			options: ['solid', 'gradient'],
			table: {
				type: { summary: 'string' },
			},
		},
		tickFormatter: {
			description:
				'A function used to format the ticks on the axes, e.g., for formatting dates or numbers.',
			control: { type: 'function' },
		},
		chartWidth: {
			description: 'Width of the chart container in pixels.',
			control: { type: 'number' },
			table: {
				type: { summary: 'number' },
			},
		},
		chartHeight: {
			description: 'Height of the chart container in pixels.',
			control: { type: 'number' },
			table: {
				type: { summary: 'number' },
			},
		},
		xAxisDataKey: {
			description:
				'The key in the data objects representing values for the x-axis. This is used to access the x-axis values from each data entry.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		xAxisFontSize: {
			description: 'Font size for the labels on the x-axis.',
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'sm' },
			},
		},
		xAxisFontColor: {
			description: 'Font color for the labels on the x-axis.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		showXAxis: {
			description:
				'Whether to render the `<XAxis />` component for the x-axis.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
			},
		},

		showYAxis: {
			description:
				'Render the `<YAxis />` component which present y axis',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
			},
		},
		showTooltip: {
			description:
				'Toggle the visibility of the tooltip on hover, displaying detailed information for each data point.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
			},
		},
		tooltipIndicator: {
			description:
				'The tooltip indicator. It can be `dot`, `line` or `dashed`',
			control: { type: 'select' },
			options: ['dot', 'line', 'dashed'],
			table: {
				type: { summary: 'string' },
			},
		},
		showLegend: {
			description:
				'Whether to render the `<Legend />` component to identify data series.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
			},
		},
		showCartesianGrid: {
			description:
				'Whether to display the `<CartesianGrid />`, adding horizontal and vertical grid lines.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
			},
		},
	},
};

const Template = (args) => <AreaChart {...args} />;

export const AreaChartSimple = Template.bind({});
AreaChartSimple.args = {
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
};

export const AreaChartGradient = Template.bind({});
AreaChartGradient.args = {
	data: areaChartData,
	dataKeys,
	colors,
	variant: 'gradient', // solid, gradient
	tickFormatter: monthFormatter,
	showXAxis: true,
	xAxisDataKey: 'month',
	showYAxis: false,
	showLegend: false,
};

export const AreaChartInteractive = Template.bind({});
AreaChartInteractive.args = {
	chartWidth: 1000,
	chartHeight: 250,
	data: chartDataIteractive,
	dataKeys: dataKeysInteractive,
	colors,
	variant: 'gradient', // solid, gradient
	showXAxis: true,
	xAxisDataKey: 'date',
	showYAxis: false,
	tickFormatter: monthFormatterInteractive,
};

AreaChartInteractive.storyName = 'Area Chart Gradient with Legend';

export const AreaChartCard1 = () => (
	<Container
		containerType="grid"
		gap="xs"
		className="p-4 bg-background-primary rounded-lg shadow-sm"
	>
		<Container.Item className="p-1 space-y-2">
			<Container containerType="flex" justify="between" align="center">
				<Label size="sm" className="text-text-tertiary font-medium">
					Cloned Sites
				</Label>
				<Button className="p-0" variant="ghost">
					<ArrowUpRight className="text-icon-secondary size-4" />
				</Button>
			</Container>
			<Container containerType="flex" align="center" gap="xs">
				<div className="text-4xl text-text-primary font-semibold">
					316
				</div>
				<Badge
					label={'12%'}
					size="sm"
					type="pill"
					variant="green"
					icon={<ArrowUp />}
				/>
			</Container>
			<Container
				containerType="flex"
				align="center"
				gap="0"
				className="space-x-1"
			>
				<span className="text-field-helper text-xs">Compare to</span>
				<Badge
					label={'298'}
					size="sm"
					type="pill"
					variant="neutral"
					icon={null}
				/>
				<span className="text-field-helper text-xs">previous week</span>
			</Container>
		</Container.Item>
		<Container.Item>
			<AreaChart
				data={areaChartData}
				dataKeys={dataKeys}
				colors={colors}
				variant="solid"
				tickFormatter={monthFormatter}
				showXAxis={true}
				xAxisDataKey="month"
				showYAxis={false}
				showLegend={false}
			/>
		</Container.Item>
	</Container>
);

AreaChartCard1.storyName = 'Clone Sites Card With Area Chart';

export const AreaChartCard2 = () => (
	<Container
		containerType="grid"
		gap="xs"
		className="p-4 bg-background-primary rounded-lg shadow-sm"
	>
		<Container.Item className="p-1 space-y-2">
			<Container containerType="flex" justify="between" align="center">
				<Label size="sm" className="text-text-tertiary font-medium">
					Revenue
				</Label>
				<Button className="p-0" variant="ghost">
					<ArrowUpRight className="text-icon-secondary size-4" />
				</Button>
			</Container>
			<Container containerType="flex" align="center" gap="xs">
				<div className="text-4xl text-text-primary font-semibold">
					$3,169
				</div>
				<Badge
					label={'12%'}
					size="sm"
					type="pill"
					variant="green"
					icon={<ArrowUp />}
				/>
			</Container>
			<Container
				containerType="flex"
				align="center"
				gap="0"
				className="space-x-1"
			>
				<span className="text-field-helper text-xs">Compared to</span>
				<Badge
					label={'$2,984'}
					size="sm"
					type="pill"
					variant="neutral"
					icon={null}
				/>
				<span className="text-field-helper text-xs">previous week</span>
			</Container>
		</Container.Item>
		<Container.Item>
			<AreaChart
				chartWidth={1000}
				chartHeight={250}
				data={chartDataIteractive}
				dataKeys={dataKeysInteractive}
				colors={colors}
				variant="gradient"
				tickFormatter={monthFormatterInteractive}
				showXAxis={true}
				xAxisDataKey="date"
				showYAxis={false}
				showLegend={true}
			/>
		</Container.Item>
	</Container>
);

AreaChartCard2.storyName = 'Revenue Card With Area Chart';
