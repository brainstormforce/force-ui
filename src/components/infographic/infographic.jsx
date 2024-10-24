'use client';

import {
    LineChart,
    Line,
    AreaChart,
    Area,
    BarChart,
    Bar,
    PieChart, 
    Pie, 
    Sector, 
    Cell, 
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,

} from 'recharts';

const productSales = [
    {
        name: 'Jan',
        product1: 4000,
        product2: 2400,
    },
    {
        name: 'Feb',
        product1: 3000,
        product2: 2210,
    },
    {
        name: 'Mar',
        product1: 2000,
        product2: 2290,
    },
    {
        name: 'Apr',
        product1: 2780,
        product2: 2000,
    },
    {
        name: 'May',
        product1: 1890,
        product2: 2181,
    },
    {
        name: 'Jun',
        product1: 2390,
        product2: 2500,
    },
];

const salesData = [
    {
        name: 'Jan',
        revenue: 4000,
        profit: 2400,
    },
    {
        name: 'Feb',
        revenue: 3000,
        profit: 1398,
    },
    {
        name: 'Mar',
        revenue: 9800,
        profit: 2000,
    },
    {
        name: 'Apr',
        revenue: 3908,
        profit: 2780,
    },
    {
        name: 'May',
        revenue: 4800,
        profit: 1890,
    },
    {
        name: 'Jun',
        revenue: 3800,
        profit: 2390,
    },
];

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const LineChartComponent = () => {
//     return (
//             <LineChart
//                 width={500}
//                 height={300}
//                 data={salesData}
//                 margin={{
//                     right: 30,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
//                 <Line type="monotone" dataKey="profit" stroke="#8b5cf6" />
//             </LineChart>
//     );
// };

// export default LineChartComponent;

// const AreaChartComponent = () => {
//     return (
//             <AreaChart
//                 width={500}
//                 height={400}
//                 data={productSales}
//                 margin={{ right: 30 }}
//             >
//                 <YAxis />
//                 <XAxis dataKey="name" />
//                 <CartesianGrid strokeDasharray="5 5" />

//                 <Tooltip />
//                 <Legend />

//                 <Area
//                     type="monotone"
//                     dataKey="product1"
//                     stroke="#2563eb"
//                     fill="#3b82f6"
//                     stackId="1"
//                 />

//                 <Area
//                     type="monotone"
//                     dataKey="product2"
//                     stroke="#7c3aed"
//                     fill="#8b5cf6"
//                     stackId="1"
//                 />
//             </AreaChart>
//     );
// };


// export default AreaChartComponent;

const AreaChartComponent = () => {
    return (
        <AreaChart
            width={500}
            height={400}
            data={productSales}
            margin={{ right: 30 }}
        >
            <YAxis />
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="5 5" />

            <Tooltip />
            <Legend />

            <defs>
                <linearGradient id="fillProduct1" x1="0" y1="0" x2="0" y2="1">
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
                <linearGradient id="fillProduct2" x1="0" y1="0" x2="0" y2="1">
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
                dataKey="product1"
                stroke="#2563eb"
                fill="url(#fillProduct1)"
                stackId="1"
            />

            <Area
                type="monotone"
                dataKey="product2"
                stroke="#7c3aed"
                fill="url(#fillProduct2)"
                stackId="1"
            />
        </AreaChart>
    );
};


export default AreaChartComponent;


// const BarChartComponent = () => {
//     return (
//         <BarChart
//             width={500}
//             height={400}
//             data={salesData}
//             margin={{ right: 30 }}
//         >
//             <YAxis />
//             <XAxis dataKey="name" />
//             <CartesianGrid strokeDasharray="3 3" />

//             <Tooltip />
//             <Legend />

//             <Bar
//                 dataKey="revenue"
//                 fill="#2563eb"
//             />

//             <Bar
//                 dataKey="profit"
//                 fill="#8b5cf6"
//             />
//         </BarChart>
//     );
// };


// export default BarChartComponent;



// const PieChartComponent = () => {
//     return (
//         <PieChart
//             width={500}
//             height={400}
//             // data={salesData}
//             // margin={{ right: 30 }}
//         >
//             <Pie
//                 data={data}
//                 cx={120}
//                 cy={200}
//                 innerRadius={60}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 paddingAngle={5}
//                 dataKey="value"
//                 cornerRadius={5}
//             >
//                 {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//             </Pie>
//         </PieChart>
//     );
// };


// export default PieChartComponent;
