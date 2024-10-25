import Infographic from "./infographic.jsx";

// Sample data for charts
const lineChartData = [
    { name: 'Jan', revenue: 4000, profit: 2400 },
    { name: 'Feb', revenue: 3000, profit: 1398 },
    { name: 'Mar', revenue: 9800, profit: 2000 },
];

const areaChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartDataIteractive = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
]

const barChartDataSimple = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

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
    showYAxis: false,
    showTooltip: true,
    showLegend: false,
    showCartesianGrid: true
};

export const AreaChartGradient = Template.bind({});
AreaChartGradient.args = {
    type: 'area',
    data: areaChartData,
    width: 600,
    height: 400,
    showXAxis: true,
    showYAxis: false,
    showTooltip: false,
    showLegend: false,
    showCartesianGrid: true
};

export const AreaChartInteractive = Template.bind({});
AreaChartInteractive.args = {
    type: 'area',
    data: chartDataIteractive,
    width: 1220,
    height: 400,
    showXAxis: true,
    showYAxis: false,
    showTooltip: false,
    showLegend: true,
    showCartesianGrid: true
};

export const BarChartSimpleVertical = Template.bind({});
BarChartSimpleVertical.args = {
    type: 'bar',
    data: barChartDataSimple,
    width: 600,
    height: 400,
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showLegend: false,
    showCartesianGrid: true
};

export const BarChart = Template.bind({});
BarChart.args = {
    type: 'bar',
    data: barChartDataSimple,
    width: 600,
    height: 400,
    showXAxis: true,
    showYAxis: true,
    showTooltip: true,
    showLegend: true,
};

export const PieChart = Template.bind({});
PieChart.args = {
    type: 'pie',
    data: pieChartData,
    width: 500,
    height: 400,
    // showTooltip: true,
    // showLegend: true,
};