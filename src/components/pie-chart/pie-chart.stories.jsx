import PieChart from "./pie-chart";
import Button from "../button";
import Badge from "../badge";
import Label from "../label";
import Container from "../container";
import { ArrowUpRight, ArrowUp } from 'lucide-react';

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
    argTypes: {
        data: {
            description:
                'An array of objects representing the source data for the chart.',
            control: { type: 'object' },
        },
        dataKey: {
            description:
                'A string which representing the key to access data in each data object. Used for identifying different data series.',
            control: { type: 'string' },
            table: {
                type: { summary: 'string' },
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
        showLegend: {
            description:
                'Toggle the visibility of the legend, displaying information for each data point.',
            control: { type: 'boolean' },
            defaultValue: true,
            table: {
                type: { summary: 'boolean' },
            },
        },
        type: {
            description: 'Type of pie chart. It can be `simple` or `donut`',
            control: { type: 'select' },
            options: ['simple', 'donut'],
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            description: 'When is true it show the label inside `donut` pie chart',
            // control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
            },
        },
        
    }
}

const Template = (args) => <PieChart {...args} />;


export const PieChartSimple = Template.bind({});
PieChartSimple.args = {
    data: chartData,
    dataKey: "visitors",
    showTooltip: true,
    tooltipIndicator: "dot",
    showLegend: false
}

export const PieChartDonut = Template.bind({});
PieChartDonut.args = {
    type: "donut",
    data: chartData,
    dataKey: "visitors",
    showTooltip: true,
    tooltipIndicator: "dot",
    label: true,
    labelValue: totalVisitors(),
    showLegend: false
}

export const PieChartCard1 = () => (
    <Container
        containerType="grid"
        gap="xs"
        className="p-4 bg-background-primary rounded-lg shadow-sm"
    >
        <Container.Item className="p-1 space-y-2">
            <Container containerType="flex" justify="between" align="center">
                <Label size="sm" className="text-text-tertiary font-medium">
                    Staging Sites
                </Label>
                <Button className="p-0" variant="ghost">
                    <ArrowUpRight className="text-icon-secondary size-4" />
                </Button>
            </Container>
            <Container containerType="flex" align="center" gap="xs">
                <div className="text-4xl text-text-primary font-semibold">
                    16/20
                </div>
            </Container>
        </Container.Item>
        <Container.Item>
            <PieChart
                data={chartData}
                dataKey="visitors"
                showTooltip={true}
                tooltipIndicator="dot"
                showLegend={true}
            />
        </Container.Item>
    </Container>
);

PieChartCard1.storyName = 'Clone Sites Card with Pie Chart';

export const PieChartCard2 = () => (
    <Container
        containerType="grid"
        gap="xs"
        className="p-4 bg-background-primary rounded-lg shadow-sm"
    >
        <Container.Item className="p-1 space-y-2">
            <Container containerType="flex" justify="between" align="center">
                <Label size="sm" className="text-text-tertiary font-medium">
                    Staging Sites
                </Label>
                <Button className="p-0" variant="ghost">
                    <ArrowUpRight className="text-icon-secondary size-4" />
                </Button>
            </Container>
        </Container.Item>
        <Container.Item>
            <PieChart
                data={chartData}
                type="donut"
                dataKey="visitors"
                showTooltip={true}
                tooltipIndicator="dot"
                showLegend={true}
                label={true}
                labelValue={totalVisitors()}
            />
        </Container.Item>
    </Container>
);

PieChartCard2.storyName = 'Blueprint Sites Card with Pie Chart';

