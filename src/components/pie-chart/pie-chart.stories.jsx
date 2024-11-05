import PieChart from "./pie-chart";

const chartData = [
    { name: "chrome", visitors: 275, fill: '#1E3A8A' },
    { name: "safari", visitors: 200, fill: '#2563EB' },
    { name: "firefox", visitors: 287, fill: '#497ef2' },
    { name: "edge", visitors: 173, fill: '#7DD3FC' },
    { name: "other", visitors: 190, fill: '#45bcf5' },
];

const totalVisitors = () => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
}

export default {
    title: 'Atoms/PieChart',
    component: PieChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

const Template = (args) => <PieChart {...args} />;


export const Default = Template.bind({});
Default.args = {
    data: chartData,
    dataKey: "visitors",
    tooltipIndicator: "dot",
    labelValue: totalVisitors()
}

