import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import ChartLegendContent from './chart-legend-content.jsx';

const AreaChartComponent = ({
    data,
    dataKeys,
    colors,
    variant = 'solid',
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
        <ResponsiveContainer width="100%" height="100%" initialDimension={{ width: width, height: height }}>
            <AreaChart data={data} margin={{ left: 14, right: 14 }}>
                {showCartesianGrid && <CartesianGrid vertical={false} />}
                {showXAxis && (
                    <XAxis
                        dataKey={xAxisDataKey}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={tickFormatter}
                        tick={{ fontSize: xAxisFontSize, fill: "#4B5563" }}
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
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;
