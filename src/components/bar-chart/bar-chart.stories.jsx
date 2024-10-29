import BarChartComponent from "./bar-chart";

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

const dataKeys = ['desktop', 'mobile'];

const colors = [
    { fill: '#7DD3FC' },
    { fill: '#2563EB' },
];

export default {
    title: 'Atoms/BarChartComponent',
    component: BarChartComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

// Custom tick formatter function for months
const monthFormatter = (value) => value.slice(0, 3);

const Template = (args) => <BarChartComponent {...args} />

export const BarChartSimple = Template.bind({});
BarChartSimple.args = {
    data: chartData,
    dataKeys: ['desktop'],
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 12,
    // width: 500,
    // height: 300,
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
    // xAxisDataKey: 'desktop',
    yAxisDataKey: 'month',
    xAxisFontSize: 12,
    // width: 500,
    height: 300,
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
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    // yAxisDataKey: 'month',
    xAxisFontSize: 12,
    width: 500,
    height: 300,
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
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    // yAxisDataKey: 'month',
    xAxisFontSize: 12,
    width: 500,
    height: 300,
}