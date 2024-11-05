import { PieChart as PieChartWrapper, Pie, Label, Tooltip, Legend,  ResponsiveContainer } from 'recharts';
import ChartTooltipContent from './chart-tooltip-content';
import ChartLegendContent from './chart-legend-content';

const PieChart = ({
    data,
    dataKey,
    type = 'simple', // simple, donut
    showTooltip = true,
    tooltipIndicator = 'dot', // dot, line, dashed
    tooltipLabelKey,
    label = false,
    labelValue,
    showLegend = false,
}) => {

    const isDonut = type === 'donut';
    const outerRadius = 100; // adjust as needed
    const innerRadius = isDonut ? 60 : 0; // innerRadius = 0 for simple pie, non-zero for donut


    return (
        <PieChartWrapper width={400} height={400}>
            {showTooltip && <Tooltip content={<ChartTooltipContent indicator={tooltipIndicator} labelKey={tooltipLabelKey} />} />}
            {showLegend && <Legend content={<ChartLegendContent horizontalAlign="right" />} />}
            <Pie
                data={data}
                cx='50%'
                cy='50%'
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                dataKey={dataKey}
            >
                {isDonut && label && (
                    <Label
                    content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                                <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                >
                                    <tspan
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        className="fill-foreground text-3xl font-bold"
                                    >
                                        {labelValue}
                                    </tspan>
                                    <tspan
                                        x={viewBox.cx}
                                        y={(viewBox.cy || 0) + 24}
                                        className="fill-muted-foreground"
                                    >
                                        Visitors
                                    </tspan>
                                </text>
                            )
                        }
                    }}
                />)}
            </Pie>
        </PieChartWrapper>
    )
}

export default PieChart;