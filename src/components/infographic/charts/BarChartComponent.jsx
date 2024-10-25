import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const BarChartComponent = ({ 
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
        <BarChart width={width} height={height} data={data}>
            {showCartesianGrid && <CartesianGrid vertical={false} />}
            {showXAxis && <XAxis dataKey="month" tickLine={false} tickMargin={10} />}
            {showYAxis && <YAxis />}
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            <Bar dataKey="desktop" fill="#2563eb" radius={8} />
        </BarChart>
    );
};


export default BarChartComponent;



// const BarChartComponent = ({ 
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
//         <BarChart width={width} height={height} data={data}>
//             {showCartesianGrid && <CartesianGrid strokeDasharray="3 3" />}
//             {showXAxis && <XAxis dataKey="name" />}
//             {showYAxis && <YAxis />}
//             {showTooltip && <Tooltip />}
//             {showLegend && <Legend />}
//             <Bar dataKey="revenue" fill="#2563eb" />
//             <Bar dataKey="profit" fill="#8b5cf6" />
//         </BarChart>
//     );
// };


// export default BarChartComponent;