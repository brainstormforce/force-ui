import { PieChart as PieChartWrapper, Pie, Label, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import ChartTooltipContent from './chart-tooltip-content';

const PieChart = ({
    data,
    dataKey,
    type = 'simple', // simple, donut
    colors = [],
    tooltipIndicator = 'dot', // dot, line, dashed
    tooltipLabelKey,
    labelValue
}) => {

    return (
        <PieChartWrapper width={800} height={400}>
            <Tooltip content={<ChartTooltipContent indicator={tooltipIndicator} labelKey={tooltipLabelKey} />} />
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                dataKey={dataKey}
            />
        </PieChartWrapper>
    )
}

export default PieChart;



// import { PieChart as PieChartWrapper, Pie, Label, Cell, Tooltip, ResponsiveContainer } from 'recharts';
// import ChartTooltipContent from './chart-tooltip-content';

// const PieChart = ({
//     data,
//     dataKey,
//     type = 'simple', // simple, donut
//     colors = [],
//     tooltipIndicator = 'dot', // dot, line, dashed
//     tooltipLabelKey,
//     labelValue
// }) => {

//     return (
//         <PieChartWrapper width={800} height={400}>
//             <Tooltip content={<ChartTooltipContent indicator={tooltipIndicator} labelKey={tooltipLabelKey} />} />
//             <Pie
//                 data={data}
//                 cx={120}
//                 cy={200}
//                 innerRadius={60}
//                 outerRadius={100}
//                 paddingAngle={0}
//                 dataKey={dataKey}
//             >
//                 <Label
//                     content={({ viewBox }) => {
//                         if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                             return (
//                                 <text
//                                     x={viewBox.cx}
//                                     y={viewBox.cy}
//                                     textAnchor="middle"
//                                     dominantBaseline="middle"
//                                 >
//                                     <tspan
//                                         x={viewBox.cx}
//                                         y={viewBox.cy}
//                                         className="fill-foreground text-3xl font-bold"
//                                     >
//                                         {labelValue}
//                                     </tspan>
//                                     <tspan
//                                         x={viewBox.cx}
//                                         y={(viewBox.cy || 0) + 24}
//                                         className="fill-muted-foreground"
//                                     >
//                                         Visitors
//                                     </tspan>
//                                 </text>
//                             )
//                         }
//                     }}
//                 />
//             </Pie>
//         </PieChartWrapper>
//     )
// }

// export default PieChart;