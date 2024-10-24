import LineChartComponent from './charts/LineChartComponent';
import AreaChartComponent from './charts/AreaChartComponent';
import BarChartComponent from './charts/BarChartComponent';
import PieChartComponent from './charts/PieChartComponent';

const Infographic = ( props ) => {
    const {
        type,
        data,
        width = 500,
        height = 300,
        showXAxis = true,
        showYAxis = true,
        showTooltip = true,
        showLegend = true,
        showCartesianGrid = true,
        customColors,
    } = props;

    switch (type) {
        case 'line':
            return <LineChartComponent {...props} />;
        case 'area':
            return <AreaChartComponent {...props} />;
        case 'bar':
            return <BarChartComponent {...props} />;
        case 'pie':
            return <PieChartComponent {...props} />;
        default:
            return <div>Invalid chart type</div>;
    }
};

export default Infographic;
