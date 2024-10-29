import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

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
}) => {
    return (
        <BarChart width={width} height={height} data={data} margin={{ left: 14, right: 14 }} layout={layout}>
            {showCartesianGrid && <CartesianGrid vertical={false} />}

            {/* {showXAxis && (
                <XAxis
                    dataKey={xAxisDataKey}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={tickFormatter}
                    tick={{ fontSize: xAxisFontSize, fill: '#4B5563' }}
                />
            )} */}

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
            {showLegend && <Legend />}
            
            {dataKeys.map((key, index) => (
                stacked 
                ? 
                <Bar 
                    key={key}
                    dataKey={key} 
                    fill={colors[index]?.fill || '#7DD3FC'}
                    radius={8} 
                    stackId="a"
                />
                :
                    <Bar
                        key={key}
                        dataKey={key}
                        fill={colors[index]?.fill || '#7DD3FC'}
                        radius={8}
                    />
            ))}
        </BarChart>
    );
};


export default BarChartComponent;