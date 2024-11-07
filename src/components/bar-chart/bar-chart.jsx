import { useEffect, useState } from 'react';
import {
    BarChart as BarChartWrapper, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import ChartLegendContent from './chart-legend-content';
import ChartTooltipContent from './chart-tooltip-content';
import Label from '../label';

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
    yAxisFontColor = "#4B5563",
    chartWidth = 350,
    chartHeight = 200,
    borderRadius = 8,
}) => {

    const [width, setWidth] = useState(chartWidth);
    const [height, setHeight] = useState(chartHeight);

    const defaultColors = [
        { fill: '#7DD3FC' },
        { fill: '#2563EB' },
    ];

    const appliedColors = colors.length > 0 ? colors : defaultColors;

    useEffect(() => {
        setWidth(chartWidth);
        setHeight(chartHeight);
    }, [chartWidth, chartHeight]);

    const fontSizeMap = {
        sm: '12px',
        md: '14px',
        lg: '16px'
    };

    const fontSizeVariant = fontSizeMap[xAxisFontSize] || fontSizeMap.sm;

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
        <ResponsiveContainer width={width} height={height}>
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

                {layout === "horizontal" && showYAxis && (
                    <YAxis 
                        dataKey={yAxisDataKey} 
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tick={{ fontSize: fontSizeVariant, fill: yAxisFontColor }}
                    />
                )}

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
                            tick={{ fontSize: fontSizeVariant, fill: yAxisFontColor }}
                        />
                    </>
                )}
                
                {showYAxis && <YAxis dataKey={yAxisDataKey} />}
                {showTooltip && <Tooltip content={<ChartTooltipContent indicator={tooltipIndicator} labelKey={tooltipLabelKey} />}/>}
                {showLegend && <Legend content={<ChartLegendContent fontSizeVariant={fontSizeVariant} />} />}
                
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
                            fill={appliedColors[index]?.fill}
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