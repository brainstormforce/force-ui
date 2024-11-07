import {
    LineChart as LineChartWrapper, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import ChartTooltipContent from './chart-tooltip-content';
import Label from '../label';

const LineChart = ({
    data,
    dataKeys = [],
    colors = [],
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    tooltipIndicator = 'dot', // dot, line, dashed
    tooltipLabelKey,
    showCartesianGrid = true,
    tickFormatter,
    xAxisDataKey,
    yAxisDataKey,
    xAxisFontSize = 'sm', // sm, md, lg
    xAxisFontColor = "#4B5563",
    yAxisFontColor = "#4B5563",
    chartWidth = 350,
    chartHeight = 200,
    withDots = false,
}) => {

    const defaultColors = [
        { stroke: '#2563EB' },
        { stroke: '#38BDF8' },
    ];

    const appliedColors = colors.length > 0 ? colors : defaultColors;

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
        <LineChartWrapper
            width={chartWidth}
            height={chartHeight}
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
                    tick={{ fontSize: fontSizeVariant, fill: xAxisFontColor }}
                />
            )}
            {showYAxis && (
                <YAxis 
                    dataKey={yAxisDataKey}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fontSize: fontSizeVariant, fill: yAxisFontColor }}
                />
            )}

            {showTooltip && <Tooltip content={<ChartTooltipContent indicator={tooltipIndicator} labelKey={tooltipLabelKey} />} />}

            {dataKeys.map((key, index) => (
                <Line
                    key={key}
                    type="natural"
                    dataKey={key}
                    stroke={appliedColors[index].stroke}
                    fill={appliedColors[index].stroke}
                    strokeWidth={2}
                    dot={withDots}
                />
            ))}
        </LineChartWrapper>
    );
};

export default LineChart;