import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import ChartLegendContent from './chart-legend-content';

const LineChartComponent = ({
    data,
    dataKeys = [],
    colors = [],
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    showLegend = true,
    showCartesianGrid = true,
    tickFormatter,
    xAxisDataKey,
    yAxisDataKey,
    xAxisFontSize = 12,
    width = 350,
    height = 200,
    withDots = false,
}) => {
    return (
        <LineChart
            width={width}
            height={height}
            data={data}
            margin={{ left: 14, right: 14 }}
        >
            {showCartesianGrid && <CartesianGrid vertical={false} />}
            {showXAxis && (
                <XAxis
                    dataKey={xAxisDataKey}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={tickFormatter}
                    tick={{ fontSize: xAxisFontSize, fill: '#4B5563' }}
                />
            )}
            {showYAxis && <YAxis dataKey={yAxisDataKey} />}

            {showTooltip && <Tooltip />}
            {showLegend && <Legend content={<ChartLegendContent />} />}


            {dataKeys.map((key, index) => (
                <Line
                    key={key}
                    type="natural"
                    dataKey={key}
                    stroke={colors[index].stroke}
                    fill={colors[index].stroke}
                    strokeWidth={2}
                    dot={withDots}
                />
            ))}
        </LineChart>
    );
};

export default LineChartComponent;