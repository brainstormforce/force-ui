import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

// const AreaChartComponent = ({ 
//     data,
//     width,
//     height,
//     showXAxis,
//     showYAxis,
//     showTooltip,
//     showLegend,
//     showCartesianGrid,
//  }) => {
//     return (
//         <AreaChart width={width} height={height} data={data} margin={{left: 20, right: 20}}>
//             {showCartesianGrid && <CartesianGrid vertical={false} />}
//             {showXAxis && <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />}
//             {showYAxis && <YAxis />}
//             {showTooltip && <Tooltip />}
//             {showLegend && <Legend />}
//             <Area
//                 type="monotone"
//                 dataKey="desktop"
//                 stroke="#2563eb"
//                 fill="#3b82f6"
//                 fillOpacity={0.4}
//                 stackId="1"
//             />
//             <Area
//                 type="monotone"
//                 dataKey="mobile"
//                 stroke="#7c3aed"
//                 fill="#8b5cf6"
//                 fillOpacity={0.4}
//                 stackId="1"
//             />
//         </AreaChart>
//     );
// };

// export default AreaChartComponent;


// const AreaChartComponent = ({ 
//     data,
//     width,
//     height,
//     showXAxis,
//     showYAxis,
//     showTooltip,
//     showLegend,
//     showCartesianGrid,
//  }) => {
//     return (
//         <AreaChart width={width} height={height} data={data} margin={{left: 20, right: 20}}>
//             {showCartesianGrid && <CartesianGrid vertical={false} />}
//             {showXAxis && <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />}
//             {showYAxis && <YAxis />}
//             {showTooltip && <Tooltip />}
//             {showLegend && <Legend />}

//             <defs>
//                 <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
//                     <stop
//                         offset="5%"
//                         stopColor="#3b82f6"
//                         stopOpacity={0.8}
//                     />
//                     <stop
//                         offset="95%"
//                         stopColor="#3b82f6"
//                         stopOpacity={0.1}
//                     />
//                 </linearGradient>
//                 <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
//                     <stop
//                         offset="5%"
//                         stopColor="#8b5cf6"
//                         stopOpacity={0.8}
//                     />
//                     <stop
//                         offset="95%"
//                         stopColor="#8b5cf6"
//                         stopOpacity={0.1}
//                     />
//                 </linearGradient>
//             </defs>
//             <Area
//                 type="monotone"
//                 dataKey="desktop"
//                 stroke="#2563eb"
//                 fill="url(#fillDesktop)"
//                 stackId="1"
//             />
//             <Area
//                 type="monotone"
//                 dataKey="mobile"
//                 stroke="#7c3aed"
//                 fill="url(#fillMobile)"
//                 stackId="1"
//             />
//         </AreaChart>
//     );
// };

// export default AreaChartComponent;


const AreaChartComponent = ({ 
    data,
    width,
    height,
    showXAxis,
    showYAxis,
    showTooltip,
    showLegend,
    showCartesianGrid,
 }) => {
    return (
        <AreaChart width={width} height={height} data={data} margin={{left: 20, right: 20}}>
            {showCartesianGrid && <CartesianGrid vertical={false} />}
            {showXAxis && <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} 
                tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                    })
                }}
            />}
            {showYAxis && <YAxis />}
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}

            <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="5%"
                        stopColor="#3b82f6"
                        stopOpacity={0.8}
                    />
                    <stop
                        offset="95%"
                        stopColor="#3b82f6"
                        stopOpacity={0.1}
                    />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="5%"
                        stopColor="#8b5cf6"
                        stopOpacity={0.8}
                    />
                    <stop
                        offset="95%"
                        stopColor="#8b5cf6"
                        stopOpacity={0.1}
                    />
                </linearGradient>
            </defs>
            <Area
                type="monotone"
                dataKey="desktop"
                stroke="#2563eb"
                fill="url(#fillDesktop)"
                stackId="1"
            />
            <Area
                type="monotone"
                dataKey="mobile"
                stroke="#7c3aed"
                fill="url(#fillMobile)"
                stackId="1"
            />
        </AreaChart>
    );
};

export default AreaChartComponent;