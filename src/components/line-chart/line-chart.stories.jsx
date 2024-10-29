import LineChartComponent from './line-chart';


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
    { stroke: '#2563EB' },
    { stroke: '#38BDF8' },
];

export default {
    title: 'Atoms/LineChartComponent',
    component: LineChartComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

// Custom tick formatter function for months
const monthFormatter = (value) => value.slice(0, 3);

const Template = (args) => <LineChartComponent {...args} />;

export const LineChartSimple = Template.bind({});
LineChartSimple.args = {
    data: chartData,
    dataKeys: ['desktop'],
    colors: [{ stroke: '#3b82f6' }],
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showLegend: false,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 12,
    width: 500,
    height: 300,
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
    showLegend: false,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 12,
    width: 500,
    height: 300,
    withDots: true
};

export const LineChartMultiple = Template.bind({});
LineChartMultiple.args = {
    data: chartDataMultiple,
    dataKeys: dataKeys,
    colors: colors,
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showLegend: false,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 12,
    width: 500,
    height: 300,
    withDots: false
};