import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import PieChart from './pie-chart';
import Button from '../button';
import Label from '../label';
import Container from '../container';
import { ArrowUpRight } from 'lucide-react';

const chartData = [
	{ name: 'chrome', visitors: 345, fill: '#1E3A8A' },
	{ name: 'safari', visitors: 210, fill: '#2563EB' },
	{ name: 'firefox', visitors: 287, fill: '#497ef2' },
	{ name: 'edge', visitors: 153, fill: '#7DD3FC' },
];

const totalVisitors = () => {
	return chartData.reduce( ( acc, curr ) => acc + curr.visitors, 0 );
};

const meta: Meta = {
	title: 'Atoms/PieChart',
	component: PieChart,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
} satisfies Meta<typeof PieChart>;

export default meta;

type Story = StoryObj<typeof PieChart>;

export const PieChartSimple: Story = {
	args: {
		data: chartData,
		dataKey: 'visitors',
		showTooltip: true,
		tooltipIndicator: 'dot',
		showLegend: false,
	},
};

export const PieChartDonut: Story = {
	args: {
		type: 'donut',
		data: chartData,
		dataKey: 'visitors',
		showTooltip: true,
		tooltipIndicator: 'dot',
		label: true,
		labelName: 'Visitors',
		labelValue: totalVisitors(),
		showLegend: false,
	},
};

type Story1 = StoryFn<typeof PieChart>;

export const PieChartCard1: Story1 = ( args ) => (
	<Container
		containerType="grid"
		gap="xs"
		className="p-4 bg-background-primary rounded-lg shadow-sm"
		{ ...args }
	>
		<Container.Item className="p-1 space-y-2">
			<Container containerType="flex" justify="between" align="center">
				<Label size="sm" className="text-text-tertiary font-medium">
					Staging Sites
				</Label>
				<Button className="p-0" variant="ghost">
					<ArrowUpRight className="text-icon-secondary size-4" />
					<span className='sr-only'>View Details</span>
				</Button>
			</Container>
			<Container containerType="flex" align="center" gap="xs">
				<span className="text-4xl text-text-primary font-semibold">
					16{ ' ' }
				</span>
				<span className="text-xl text-text-tertiary font-semibold">
					/ 20
				</span>
			</Container>
		</Container.Item>
		<Container.Item>
			<PieChart
				data={ chartData }
				dataKey="visitors"
				showTooltip={ true }
				tooltipIndicator="dot"
				showLegend={ true }
			/>
		</Container.Item>
	</Container>
);

PieChartCard1.storyName = 'Clone Sites Card with Pie Chart';

export const PieChartCard2: Story1 = ( args ) => (
	<Container
		containerType="grid"
		gap="xs"
		className="p-4 bg-background-primary rounded-lg shadow-sm"
		{ ...args }
	>
		<Container.Item className="p-1 space-y-2">
			<Container containerType="flex" justify="between" align="center">
				<Label size="sm" className="text-text-tertiary font-medium">
					Staging Sites
				</Label>
				<Button className="p-0" variant="ghost">
					<ArrowUpRight className="text-icon-secondary size-4" />
					<span className='sr-only'>View Details</span>
				</Button>
			</Container>
		</Container.Item>
		<Container.Item>
			<PieChart
				data={ chartData }
				type="donut"
				dataKey="visitors"
				showTooltip={ true }
				tooltipIndicator="dot"
				showLegend={ true }
				label={ true }
				labelName="Visitors"
				labelValue={ totalVisitors() }
			/>
		</Container.Item>
	</Container>
);

PieChartCard2.storyName = 'Blueprint Sites Card with Pie Chart';
