import {
    PieChart, Pie, Cell
} from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = ({ 
    data,
    width,
    height,
    showTooltip,
    showLegend,
    customColors,
 }) => {
    return (
        // <PieChart
        //     width={500}
        //     height={400}
        // >
        //     <Pie
        //         data={data}
        //         cx={120}
        //         cy={200}
        //         innerRadius={60}
        //         outerRadius={80}
        //         fill="#8884d8"
        //         paddingAngle={5}
        //         dataKey="value"
        //         cornerRadius={5}
        //     >
        //         {data.map((entry, index) => (
        //             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        //         ))}
        //     </Pie>
        // </PieChart>
        <PieChart width={width} height={height}>
            <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            {/* {showTooltip && <Tooltip />} */}
            {/* {showLegend && <Legend />} */}
        </PieChart>
    );
};


export default PieChartComponent;