import { PieChart as PieChartWrapper, Pie, Label as PieLabel, Tooltip, Legend,  ResponsiveContainer } from 'recharts';
import ChartTooltipContent from './chart-tooltip-content';
import ChartLegendContent from './chart-legend-content';
import Label from '../label';

const PieChart = ({
    data,
    dataKey,
    type = 'simple', // simple, donut
    showTooltip = true,
    tooltipIndicator = 'dot', // dot, line, dashed
    tooltipLabelKey,
    label = false,
    labelName = '',
    labelValue,
    showLegend = false,
    chartWidth = 300,
    chartHeight = 300,
    pieOuterRadius = 90,
    pieInnerRadius = 60,
}) => {

    const isDonut = type === 'donut';
    const outerRadius = pieOuterRadius; // adjust as needed
    const innerRadius = isDonut ? pieInnerRadius : 0; // innerRadius = 0 for simple pie, non-zero for donut

    if (!data || data.length === 0) {
        return (
            <Label
                size="sm"
                variant="help"
            >
                No data available
            </Label>
        );
    }

    return (
        <PieChartWrapper width={chartWidth} height={chartWidth}>
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
                    <PieLabel
                    content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                                <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className='space-y-3'
                                >
                                    <tspan
                                        x={viewBox.cx}
                                        dy="-4"
                                        className="fill-foreground text-xl font-bold"
                                    >
                                        {labelValue}
                                    </tspan>
                                    <tspan
                                        x={viewBox.cx}
                                        dy="24"
                                        className="text-sm"
                                        style={{ fill: '#9CA3AF' }}

                                    >
                                        {labelName}
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