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
    argTypes: {
        type: { 
            control: { 
                type: 'select', 
                options: ['line', 'area', 'bar', 'pie'] 
            } 
        },
        width: { 
            control: { 
                type: 'number' 
            }, 
            defaultValue: 500 
        },
        height: { 
            control: { 
                type: 'number' 
            }, 
            defaultValue: 300 
        },
        showXAxis: { 
            control: { 
                type: 'boolean' 
            }, 
            defaultValue: true 
        },
        showYAxis: { 
            control: { 
                type: 'boolean' 
            }, 
            defaultValue: true 
        },
        showTooltip: { 
            control: { 
                type: 'boolean' 
            }, 
            defaultValue: true 
        },
        showLegend: { 
            control: { 
                type: 'boolean' 
            }, 
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