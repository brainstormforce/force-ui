import BarChart from "./bar-chart";
import Label from "../label";
import Button from "../button";
import Badge from "../badge";
import Container from "../container";
import { ArrowUpRight, ArrowUp } from 'lucide-react';

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartDataMultiple = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

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

const dataKeys = ['desktop', 'mobile'];

const colors = [
    { fill: '#7DD3FC' },
    { fill: '#2563EB' },
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
    title: 'Atoms/BarChart',
    component: BarChart,
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
            table: {
                type: { summary: 'array' },
            },
        },
        colors: {
            description:
                'An array of color strings that determine the colors for each data series in the chart.',
            control: { type: 'array' },
            table: {
                type: { summary: 'array' },
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
            description: 'The tooltip indicator. It can be `dot`, `line` or `dashed`',
            control: { type: 'select' },
            options: ['dot', 'line', 'dashed'],
            table: {
                type: { summary: 'string' },
            },
        },
        tooltipLabelKey: {
            description: "Present tooltip lable key. E.g. for this data element: `{ month: 'January', desktop: 186, mobile: 80 }` if set lableKye to 'month' the tooltip will display the month name (like 'January')",
            table: {
                type: { summary: 'string' },
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
        tickFormatter: {
            description:
                'A function used to format the ticks on the axes, e.g., for formatting dates or numbers.',
            control: { type: 'function' },
        },
        xAxisDataKey: {
            description:
                'The key in the data objects representing values for the x-axis. This is used to access the x-axis values from each data entry.',
            control: { type: 'text' },
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
        yAxisFontColor: {
            description: 'Font color for the labels on the y-axis.',
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
        layout: {
            description: 'The layout of bars in the chart. It can be horizontal or vertical',
            table: {
                type: { summary: 'string' },
            },
        },
        stacked: {
            description: 'The stack id of bar, when two bars have the same value axis and same stackId, then the two bars are stacked in order.',
            table: {
                type: { summary: 'boolean' },
            },
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
        borderRadius: {
            description: 'Border radius of bars.',
            control: { type: 'number' },
            table: {
                type: { summary: 'number' },
            },
        },
    }
}

const Template = (args) => <BarChart {...args} />

export const BarChartSimple = Template.bind({});
BarChartSimple.args = {
    data: chartData,
    dataKeys: ['desktop'],
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    tooltipIndicator: "line",
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
}

export const BarChartHorizontal = Template.bind({});
BarChartHorizontal.args = {
    data: chartData,
    dataKeys: ['desktop'],
    layout: "vertical",
    showXAxis: true,
    showYAxis: true,
    showTooltip: true,
    showCartesianGrid: false,
    tickFormatter: monthFormatter,
    yAxisDataKey: 'month',
    xAxisFontSize: 'sm',
    height: 300,
    borderRadius: 5
}

export const BarChartMultiple = Template.bind({});
BarChartMultiple.args = {
    data: chartDataMultiple,
    dataKeys: dataKeys,
    layout: "horizontal",
    colors: colors,
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    tooltipIndicator: "dashed",
    tooltipLabelKey: "month",
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 'sm',
    width: 500,
    height: 300,
    borderRadius: 4
}

export const BarChartStucked = Template.bind({});
BarChartStucked.args = {
    data: chartDataMultiple,
    dataKeys: dataKeys,
    layout: "horizontal",
    stacked: true,
    colors: colors,
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showLegend: true,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 'sm',
    width: 500,
    height: 300,
}

BarChartStucked.storyName = 'Bar Chart Stucked + Legend';

export const BarChartInteractive = Template.bind({});
BarChartInteractive.args = {
    data: chartDataIteractive,
    dataKeys: ['desktop'],
    layout: "horizontal",
    stacked: false,
    colors: colors,
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
    borderRadius: 0
}

export const BarChartCard1 = () => (
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
            <BarChart
                data={chartData}
                dataKeys={["desktop"]}
                showCartesianGrid={true}
                tickFormatter={monthFormatter}
                showXAxis={true}
                xAxisDataKey="month"
                showYAxis={false}
                showLegend={false}
            />
        </Container.Item>
    </Container>
);

BarChartCard1.storyName = 'Clone Sites Card With Bar Chart';

export const BarChartCard2 = () => (
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
            <BarChart
                data={chartDataMultiple}
                dataKeys={dataKeys}
                layout="horizontal"
                colors={colors}
                showXAxis={true}
                showYAxis={false}
                showTooltip={true}
                showCartesianGrid={true}
                tickFormatter={monthFormatter}
                xAxisDataKey="month"
                borderRadius={4}
            />
        </Container.Item>
    </Container>
);

BarChartCard2.storyName = 'Clone Sites Card With Bar Chart Multiple';

export const BarChartCard3 = () => (
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
            <BarChart
                data={chartDataMultiple}
                dataKeys={dataKeys}
                layout="horizontal"
                stacked={true}
                colors={colors}
                showXAxis={true}
                showYAxis={false}
                showTooltip={true}
                showLegend={true}
                showCartesianGrid={true}
                tickFormatter={monthFormatter}
                xAxisDataKey="month"
            />
        </Container.Item>
    </Container>
);

BarChartCard3.storyName = 'Clone Sites Card With Stacked Bar Chart + Legend';

export const BarChartCard4 = () => (
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
            <BarChart
                data={chartData}
                dataKeys={["desktop"]}
                layout="vertical"
                showXAxis={false}
                showYAxis={true}
                showTooltip={true}
                showCartesianGrid={false}
                tickFormatter={monthFormatter}
                yAxisDataKey="month"
                xAxisFontSize='sm'
                borderRadius={5}
            />
        </Container.Item>
    </Container>
);

BarChartCard4.storyName = 'Clone Sites Card With Bar Chart Horizontal';

export const AreaChartCard5 = () => (
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
            <BarChart
                data={chartDataIteractive}
                dataKeys={['desktop']}
                tickFormatter={monthFormatterInteractive}
                showXAxis={true}
                xAxisDataKey="date"
                showYAxis={false}
                showLegend={false}
                chartWidth={900}
                chartHeight={250}
                borderRadius={0}
            />
        </Container.Item>
    </Container>
);

AreaChartCard5.storyName = 'Revenue Card With Bar Chart Interactive';