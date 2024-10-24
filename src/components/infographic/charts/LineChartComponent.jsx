import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const LineChartComponent = ({ 
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
        <LineChart width={width} height={height} data={data}>
            {showCartesianGrid && <CartesianGrid strokeDasharray="3 3" />}
            {showXAxis && <XAxis dataKey="name" />}
            {showYAxis && <YAxis />}
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
            <Line type="monotone" dataKey="profit" stroke="#8b5cf6" />
        </LineChart>
    );
};

export default LineChartComponent;