import Infographic from "./infographic.jsx";

// Sample data for charts
const lineChartData = [
    { name: 'Jan', revenue: 4000, profit: 2400 },
    { name: 'Feb', revenue: 3000, profit: 1398 },
    { name: 'Mar', revenue: 9800, profit: 2000 },
];

const areaChartData = [
    { name: 'Jan', product1: 4000, product2: 2400 },
    { name: 'Feb', product1: 3000, product2: 2210 },
    { name: 'Mar', product1: 2000, product2: 2290 },
];

const barChartData = [
    { name: 'Jan', revenue: 4000, profit: 2400 },
    { name: 'Feb', revenue: 3000, profit: 1398 },
    { name: 'Mar', revenue: 9800, profit: 2000 },
];

const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

// Export default story configuration
export default {
    title: 'Molecules/Infographic',
    component: Infographic,
    parameters: {
		layout: 'centered',
	},
    tags: [ 'autodocs' ],
    argTypes: {
        data: { 
            description:
				'The source data in which each element is an object.',
        },
        type: { 
            description:
				'Specifies the type of the Infographic component',
            control: { type: 'select' },
            options: ['line', 'area', 'bar', 'pie'], 
        },
        width: { 
            description:
				'Specifies the width of the the Infographic component',
            control: { 
                type: 'number' 
            }, 
            defaultValue: 500 
        },
        height: { 
            description:
				'Specifies the height of the the Infographic component',
            control: { type: 'number' }, 
            defaultValue: 300 
        },
        showXAxis: { 
            description:
				"Render the `<XAxis />` component which present x axis",
            control: { type: 'boolean' }, 
            defaultValue: true 
        },
        showYAxis: {
            description:
				"Render the `<YAxis />` component which present y axis", 
            control: { type: 'boolean' }, 
            defaultValue: true 
        },
        showTooltip: { 
            description:
				"Render the `<Tooltip />` component which give more inforamtion", 
            control: { type: 'boolean' }, 
            defaultValue: true 
        },
        showLegend: { 
            description:
				"Render the `<Legend />` component",
            control: { type: 'boolean' }, 
            defaultValue: true 
        },
        showCartesianGrid: { 
            description:
				"Render the `<CartesianGrid />` component which adding horizontal and vertical lines across the chart area.",
            control: { type: 'boolean' }, 
            defaultValue: true 
        },
    },
};

// Template for the stories
const Template = (args) => <Infographic {...args} />;

export const LineChart = Template.bind({});
LineChart.args = {
    type: 'line',
    data: lineChartData,
    width: 600,
    height: 400,
    showXAxis: true,
    showYAxis: true,
    showTooltip: true,
    showLegend: true,
    showCartesianGrid: true,
};

export const AreaChart = Template.bind({});
AreaChart.args = {
    type: 'area',
    data: areaChartData,
    width: 600,
    height: 400,
    showXAxis: true,
    showYAxis: true,
    showTooltip: true,
    showLegend: true,
};

export const BarChart = Template.bind({});
BarChart.args = {
    type: 'bar',
    data: barChartData,
    width: 600,
    height: 400,
    showXAxis: true,
    showYAxis: true,
    showTooltip: true,
    showLegend: true,
};

// export const PieChart = Template.bind({});
// PieChart.args = {
//     type: 'pie',
//     data: pieChartData,
//     width: 500,
//     height: 400,
//     showTooltip: true,
//     showLegend: true,
// };