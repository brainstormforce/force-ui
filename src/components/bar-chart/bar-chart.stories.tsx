import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import BarChart from './bar-chart';
import Label from '../label';
import Button from '../button';
import Badge from '../badge';
import Container from '../container';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

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
	{ month: 'April', desktop: 73, mobile: 190 },
	{ month: 'May', desktop: 209, mobile: 130 },
	{ month: 'June', desktop: 214, mobile: 140 },
];

const chartDataIteractive = [
	{ date: '2024-04-01', desktop: 222 },
	{ date: '2024-04-02', desktop: 97 },
	{ date: '2024-04-03', desktop: 167 },
	{ date: '2024-04-04', desktop: 242 },
	{ date: '2024-04-05', desktop: 373 },
	{ date: '2024-04-06', desktop: 301 },
	{ date: '2024-04-07', desktop: 245 },
	{ date: '2024-04-08', desktop: 409 },
	{ date: '2024-04-09', desktop: 59 },
	{ date: '2024-04-10', desktop: 261 },
	{ date: '2024-04-11', desktop: 327 },
	{ date: '2024-04-12', desktop: 292 },
	{ date: '2024-04-13', desktop: 342 },
	{ date: '2024-04-14', desktop: 137 },
	{ date: '2024-04-15', desktop: 120 },
	{ date: '2024-04-16', desktop: 138 },
	{ date: '2024-04-17', desktop: 446 },
	{ date: '2024-04-18', desktop: 364 },
	{ date: '2024-04-19', desktop: 243 },
	{ date: '2024-04-20', desktop: 89 },
	{ date: '2024-04-21', desktop: 137 },
	{ date: '2024-04-22', desktop: 224 },
	{ date: '2024-04-23', desktop: 138 },
	{ date: '2024-04-24', desktop: 387 },
	{ date: '2024-04-25', desktop: 215 },
	{ date: '2024-04-26', desktop: 75 },
	{ date: '2024-04-27', desktop: 383 },
	{ date: '2024-04-28', desktop: 122 },
	{ date: '2024-04-29', desktop: 315 },
	{ date: '2024-04-30', desktop: 454 },
	{ date: '2024-05-01', desktop: 165 },
	{ date: '2024-05-02', desktop: 293 },
	{ date: '2024-05-03', desktop: 247 },
	{ date: '2024-05-04', desktop: 385 },
	{ date: '2024-05-05', desktop: 481 },
	{ date: '2024-05-06', desktop: 498 },
	{ date: '2024-05-07', desktop: 388 },
	{ date: '2024-05-08', desktop: 149 },
	{ date: '2024-05-09', desktop: 227 },
	{ date: '2024-05-10', desktop: 293 },
	{ date: '2024-05-11', desktop: 335 },
	{ date: '2024-05-12', desktop: 197 },
	{ date: '2024-05-13', desktop: 197 },
	{ date: '2024-05-14', desktop: 448 },
	{ date: '2024-05-15', desktop: 473 },
	{ date: '2024-05-16', desktop: 338 },
	{ date: '2024-05-17', desktop: 499 },
	{ date: '2024-05-18', desktop: 315 },
	{ date: '2024-05-19', desktop: 235 },
	{ date: '2024-05-20', desktop: 177 },
	{ date: '2024-05-21', desktop: 82 },
	{ date: '2024-05-22', desktop: 81 },
	{ date: '2024-05-23', desktop: 252 },
	{ date: '2024-05-24', desktop: 294 },
	{ date: '2024-05-25', desktop: 201 },
	{ date: '2024-05-26', desktop: 213 },
	{ date: '2024-05-27', desktop: 420 },
	{ date: '2024-05-28', desktop: 233 },
	{ date: '2024-05-29', desktop: 78 },
	{ date: '2024-05-30', desktop: 340 },
	{ date: '2024-05-31', desktop: 178 },
	{ date: '2024-06-01', desktop: 178 },
	{ date: '2024-06-02', desktop: 470 },
	{ date: '2024-06-03', desktop: 103 },
	{ date: '2024-06-04', desktop: 439 },
	{ date: '2024-06-05', desktop: 88 },
	{ date: '2024-06-06', desktop: 294 },
	{ date: '2024-06-07', desktop: 323 },
	{ date: '2024-06-08', desktop: 385 },
	{ date: '2024-06-09', desktop: 438 },
	{ date: '2024-06-10', desktop: 155 },
	{ date: '2024-06-11', desktop: 92 },
	{ date: '2024-06-12', desktop: 492 },
	{ date: '2024-06-13', desktop: 81 },
	{ date: '2024-06-14', desktop: 426 },
	{ date: '2024-06-15', desktop: 307 },
	{ date: '2024-06-16', desktop: 371 },
	{ date: '2024-06-17', desktop: 475 },
	{ date: '2024-06-18', desktop: 107 },
	{ date: '2024-06-19', desktop: 341 },
	{ date: '2024-06-20', desktop: 408 },
	{ date: '2024-06-21', desktop: 169 },
	{ date: '2024-06-22', desktop: 317 },
	{ date: '2024-06-23', desktop: 480 },
	{ date: '2024-06-24', desktop: 132 },
	{ date: '2024-06-25', desktop: 141 },
	{ date: '2024-06-26', desktop: 434 },
	{ date: '2024-06-27', desktop: 448 },
	{ date: '2024-06-28', desktop: 149 },
	{ date: '2024-06-29', desktop: 103 },
	{ date: '2024-06-30', desktop: 446 },
];

const dataKeys = [ 'desktop', 'mobile' ];

const colors = [ { fill: '#7DD3FC' }, { fill: '#2563EB' } ];

// Custom tick formatter function for months
const monthFormatter = ( value: string ) => value.slice( 0, 3 );

const monthFormatterInteractive = ( value: string ) => {
	const date = new Date( value );
	return date.toLocaleDateString( 'en-US', {
		month: 'short',
		day: 'numeric',
	} );
};

const meta: Meta = {
	title: 'Atoms/BarChart',
	component: BarChart,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
} satisfies Meta<typeof BarChart>;

export default meta;

type Story = StoryObj<typeof BarChart>;

export const BarChartSimple: Story = {
	args: {
		data: chartData,
		dataKeys: [ 'desktop' ],
		layout: 'horizontal',
		showXAxis: true,
		showYAxis: false,
		showTooltip: true,
		tooltipIndicator: 'dot',
		showCartesianGrid: true,
		tickFormatter: monthFormatter,
		yAxisDataKey: 'month',
	},
    render: (args) => (
        <BarChart
            {...args}
            xAxisDataKey={args.layout === 'vertical' ? '' : 'month'}
            showCartesianGrid={args.layout === 'vertical' ? false : true}
        />
    ),
};

export const BarChartHorizontal: Story = {
	args: {
		data: chartData,
		dataKeys: [ 'desktop' ],
		layout: 'vertical',
		showXAxis: false,
		showYAxis: true,
		showTooltip: true,
		showCartesianGrid: false,
		tickFormatter: monthFormatter,
		yAxisDataKey: 'month',
		xAxisFontSize: 'sm',
		borderRadius: 5,
	},
};

export const BarChartMultiple: Story = {
	args: {
		data: chartDataMultiple,
		dataKeys,
		layout: 'horizontal',
		colors,
		showXAxis: true,
		showYAxis: false,
		showTooltip: true,
		tooltipIndicator: 'dashed',
		tooltipLabelKey: 'month',
		showCartesianGrid: true,
		tickFormatter: monthFormatter,
		xAxisDataKey: 'month',
		xAxisFontSize: 'sm',
		borderRadius: 4,
	},
};

export const BarChartStucked: Story = {
	args: {
		data: chartDataMultiple,
		dataKeys,
		layout: 'horizontal',
		stacked: true,
		colors,
		showXAxis: true,
		showYAxis: false,
		showTooltip: true,
		showLegend: true,
		showCartesianGrid: true,
		tickFormatter: monthFormatter,
		xAxisDataKey: 'month',
		xAxisFontSize: 'sm',
	},
};

BarChartStucked.storyName = 'Bar Chart Stucked + Legend';

export const BarChartInteractive: Story = {
	args: {
		data: chartDataIteractive,
		dataKeys: [ 'desktop' ],
		layout: 'horizontal',
		stacked: false,
		colors,
		showXAxis: true,
		showYAxis: false,
		showTooltip: true,
		showLegend: false,
		showCartesianGrid: true,
		tickFormatter: monthFormatterInteractive,
		xAxisDataKey: 'date',
		xAxisFontSize: 'sm',
		chartWidth: 900,
		chartHeight: 250,
		borderRadius: 0,
	},
};

type Story1 = StoryFn<typeof BarChart>;

export const BarChartCard1: Story1 = ( args ) => (
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
			<BarChart
				data={ chartData }
				dataKeys={ [ 'desktop' ] }
				showCartesianGrid={ true }
				tickFormatter={ monthFormatter }
				showXAxis={ true }
				xAxisDataKey="month"
				showYAxis={ false }
				showLegend={ false }
			/>
		</Container.Item>
	</Container>
);

BarChartCard1.storyName = 'Clone Sites Card With Bar Chart';

export const BarChartCard2: Story1 = ( args ) => (
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
			<BarChart
				data={ chartDataMultiple }
				dataKeys={ dataKeys }
				layout="horizontal"
				colors={ colors }
				showXAxis={ true }
				showYAxis={ false }
				showTooltip={ true }
				showCartesianGrid={ true }
				tickFormatter={ monthFormatter }
				xAxisDataKey="month"
				borderRadius={ 4 }
			/>
		</Container.Item>
	</Container>
);

BarChartCard2.storyName = 'Clone Sites Card With Bar Chart Multiple';

export const BarChartCard3: Story1 = ( args ) => (
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
			<BarChart
				data={ chartDataMultiple }
				dataKeys={ dataKeys }
				layout="horizontal"
				stacked={ true }
				colors={ colors }
				showXAxis={ true }
				showYAxis={ false }
				showTooltip={ true }
				showLegend={ true }
				showCartesianGrid={ true }
				tickFormatter={ monthFormatter }
				xAxisDataKey="month"
			/>
		</Container.Item>
	</Container>
);

BarChartCard3.storyName = 'Clone Sites Card With Stacked Bar Chart + Legend';

export const BarChartCard4: Story1 = ( args ) => (
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
			<BarChart
				data={ chartData }
				dataKeys={ [ 'desktop' ] }
				layout="vertical"
				showXAxis={ false }
				showYAxis={ true }
				showTooltip={ true }
				showCartesianGrid={ false }
				tickFormatter={ monthFormatter }
				yAxisDataKey="month"
				xAxisFontSize="sm"
				borderRadius={ 5 }
			/>
		</Container.Item>
	</Container>
);

BarChartCard4.storyName = 'Clone Sites Card With Bar Chart Horizontal';

export const AreaChartCard5: Story1 = ( args ) => (
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
			<BarChart
				data={ chartDataIteractive }
				dataKeys={ [ 'desktop' ] }
				tickFormatter={ monthFormatterInteractive }
				showXAxis={ true }
				xAxisDataKey="date"
				showYAxis={ false }
				showLegend={ false }
				chartWidth={ 900 }
				chartHeight={ 250 }
				borderRadius={ 0 }
			/>
		</Container.Item>
	</Container>
);

AreaChartCard5.storyName = 'Revenue Card With Bar Chart Interactive';
