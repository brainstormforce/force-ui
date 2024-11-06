import LineChart from './line-chart';

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
    { month: "April", desktop: 173, mobile: 160 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const dataKeys = ['desktop', 'mobile']; 

const colors = [
    { stroke: '#2563EB' },
    { stroke: '#38BDF8' },
];

export default {
    title: 'Atoms/LineChart',
    component: LineChart,
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
        withDots: {
            description:
                'Toggle the visibility of data point dots along the line in the chart. When enabled, each data point will be marked with a dot.',
            control: { type: 'boolean' },
            defaultValue: false,
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
    }
}

// Custom tick formatter function for months
const monthFormatter = (value) => value.slice(0, 3);

const Template = (args) => <LineChart {...args} />;

export const LineChartSimple = Template.bind({});
LineChartSimple.args = {
    data: chartData,
    dataKeys: ['desktop'],
    colors: [{ stroke: '#3b82f6' }],
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 12,
    withDots: false
};

export const LineChartWithDots = Template.bind({});
LineChartWithDots.args = {
    data: chartData,
    dataKeys: ['desktop'],
    colors: [{ stroke: '#3b82f6' }],
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 12,
    withDots: true,
};

LineChartWithDots.storyName = 'Line Chart With Dots';

export const LineChartMultiple = Template.bind({});
LineChartMultiple.args = {
    data: chartDataMultiple,
    dataKeys: dataKeys,
    colors: colors,
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 12,
    withDots: false
};