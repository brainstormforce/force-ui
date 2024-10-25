import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import ChartLegendContent from './chart-legend-content.jsx';

const AreaChartComponent = ({
    data,
    dataKeys,
    colors,
    width = 500,
    height = 400,
    variant = 'stacked',
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    showLegend = true,
    showCartesianGrid = true,
    tickFormatter,
    xAxisDataKey,
    yAxisDataKey,
}) => {
    const renderGradients = () => (
        <defs>
            {colors.map((color, index) => (
                <linearGradient key={`gradient${index}`} id={`fill${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color.fill} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={color.fill} stopOpacity={0.1} />
                </linearGradient>
            ))}
        </defs>
    );

    return (
        <AreaChart width={width} height={height} data={data} margin={{ left: 40, right: 40 }}>
            {showCartesianGrid && <CartesianGrid vertical={false} />}
            {showXAxis && (
                <XAxis
                    dataKey={xAxisDataKey}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={tickFormatter || ((value) => value.slice(0, 3))}
                />
            )}
            {showYAxis && <YAxis dataKey={yAxisDataKey} />}
            {showTooltip && <Tooltip />}
            {showLegend && <Legend content={<ChartLegendContent />}  />}

            {variant === 'gradient' && renderGradients()}

            {dataKeys.map((key, index) => (
                <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={colors[index].stroke}
                    fill={variant === 'gradient' ? `url(#fill${index})` : colors[index].fill}
                    stackId="1"
                />
            ))}
        </AreaChart>
    );
};

export default AreaChartComponent;
