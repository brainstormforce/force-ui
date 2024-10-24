import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

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
        <AreaChart width={width} height={height} data={data}>
            {showCartesianGrid && <CartesianGrid strokeDasharray="5 5" />}
            {showXAxis && <XAxis dataKey="name" />}
            {showYAxis && <YAxis />}
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            <Area
                type="monotone"
                dataKey="product1"
                stroke="#2563eb"
                fill="#3b82f6"
                stackId="1"
            />
            <Area
                type="monotone"
                dataKey="product2"
                stroke="#7c3aed"
                fill="#8b5cf6"
                stackId="1"
            />
        </AreaChart>
    );
};

export default AreaChartComponent;