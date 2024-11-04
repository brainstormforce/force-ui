import {
    BarChart as BarChartWrapper, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import ChartLegendContent from './chart-legend-content';
import ChartTooltipContent from './chart-tooltip-content';

const BarChart = ({
    data,
    dataKeys = [],
    colors = [],
    layout = "horizontal", // horizontal, vertical
    stacked = false,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    tooltipIndicator = 'dot', // dot, line, dashed
    tooltipLabelKey,
    showLegend = false,
    showCartesianGrid = true,
    tickFormatter,
    xAxisDataKey,
    yAxisDataKey,
    xAxisFontSize = 'sm', // sm, md, lg
    xAxisFontColor = "#4B5563",
    width = 350,
    height = 200,
    borderRadius = 8,
}) => {

    const fontSizeMap = {
        sm: '12px',
        md: '14px',
        lg: '16px'
    };

    const fontSizeVariant = fontSizeMap[xAxisFontSize] || fontSizeMap.sm;

    return (
        <ResponsiveContainer width="100%"
            height="100%"
            initialDimension={{ width: width, height: height }}>
            <BarChartWrapper data={data} margin={{ left: 14, right: 14 }} layout={layout}>
                {showCartesianGrid && <CartesianGrid vertical={false} />}

                {layout === "horizontal" && showXAxis && (
                    <XAxis
                        dataKey={xAxisDataKey}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={tickFormatter}
                        tick={{ fontSize: fontSizeVariant, fill: xAxisFontColor }}
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
                {showTooltip && <Tooltip content={<ChartTooltipContent indicator={tooltipIndicator} labelKey={tooltipLabelKey} />}/>}
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
            </BarChartWrapper>
        </ResponsiveContainer>
    );
};

export default BarChart;