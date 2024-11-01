import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import ChartLegendContent from './chart-legend-content';

const BarChartComponent = ({
    data,
    dataKeys = [],
    colors = [],
    layout = "horizontal", // horizontal, vertical
    stacked = false,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    showLegend = false,
    showCartesianGrid = true,
    tickFormatter,
    xAxisDataKey,
    yAxisDataKey,
    xAxisFontSize = 12,
    width = 350,
    height = 200,
    borderRadius = 8,
}) => {
    return (
        <ResponsiveContainer width="100%"
            height="100%"
            initialDimension={{ width: width, height: height }}>
            <BarChart data={data} margin={{ left: 14, right: 14 }} layout={layout}>
                {showCartesianGrid && <CartesianGrid vertical={false} />}

                {layout === "horizontal" && showXAxis && (
                    <XAxis
                        dataKey={xAxisDataKey}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={tickFormatter}
                        tick={{ fontSize: xAxisFontSize, fill: '#4B5563' }}
                    />
                )}

                {layout === "horizontal" && showYAxis && <YAxis dataKey={yAxisDataKey} />}

                {layout === "vertical" && (
                    <>
                        <XAxis type="number" dataKey={xAxisDataKey} hide />
                        <YAxis
                            dataKey={yAxisDataKey}
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={tickFormatter}
                            tick={{ fontSize: xAxisFontSize, fill: '#4B5563' }}
                        />
                    </>
                )}
                
                {showYAxis && <YAxis dataKey={yAxisDataKey} />}
                {showTooltip && <Tooltip />}
                {showLegend && <Legend content={<ChartLegendContent />} />}
                
                {dataKeys.map((key, index) => {
                    let radius;

                    if (stacked) {
                        if (index === 0) {
                            radius = [0, 0, 4, 4]; // Bottom bar
                        } else if (index === dataKeys.length - 1) {
                            radius = [4, 4, 0, 0]; // Top bar
                        } else {
                            radius = 0; // Middle bars have no radius
                        }
                    } else {
                        radius = borderRadius;
                    }

                    return (
                        <Bar
                            key={key}
                            dataKey={key}
                            fill={colors[index]?.fill || '#7DD3FC'}
                            radius={radius}
                            stackId={stacked ? "a" : undefined}
                        />
                    );
                })}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;