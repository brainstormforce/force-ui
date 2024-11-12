import {
	BarChart as BarChartWrapper,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import ChartLegendContent from './chart-legend-content';
import ChartTooltipContent from './chart-tooltip-content';
import Label from '../label';

interface DataItem {
	[key: string]: number | string;
}
interface Color {
	fill: string;
}

interface BarChartProps {
	/** An array of objects representing the source data for the chart. */
	data: DataItem[];

	/** An array of strings representing the keys to access data in each data object. Used for identifying different data series. */
	dataKeys: string[];

	/** An array of color strings that determine the colors for each data series in the chart. */
	colors?: Color[];

	/** Defines the layout of Bar Chart. if you want to check how layout `vertical` works, then you need to clear the xAxisDataKey value and set showCartesianGrid to false. */
	layout?: 'horizontal' | 'vertical';

	/** Defines are the chart bars are stacked. */
	stacked?: boolean;

	/** Whether to render the `<XAxis />` component for the x-axis. */
	showXAxis?: boolean;

	/** Whether to render the `<YAxis />` component for the y-axis. */
	showYAxis?: boolean;

	/** Toggle the visibility of the tooltip on hover, displaying detailed information for each data point. */
	showTooltip?: boolean;

	/** The tooltip indicator. It can be `dot`, `line` or `dashed`. */
	tooltipIndicator?: 'dot' | 'line' | 'dashed';

	/** Present tooltip lable key. E.g. for this data element: `{ month: 'January', desktop: 186, mobile: 80 }` if set lableKye to 'month' the tooltip will display the month name (like 'January'). */
	tooltipLabelKey?: string;

	/** Whether to render the `<Legend />` component to identify data series. */
	showLegend?: boolean;

	/** Whether to display the `<CartesianGrid />`, adding horizontal and vertical grid lines. */
	showCartesianGrid?: boolean;

	/** A function used to format the ticks on the axes, e.g., ```const monthFormatter = ( value: string ) => value.slice( 0, 3 );``` */
	tickFormatter?: ( value: string ) => string;

	/** The key in the data objects representing values for the x-axis. This is used to access the x-axis values from each data entry. */
	xAxisDataKey?: string;

	/** The key in the data objects representing values for the y-axis. This is used to access the y-axis values from each data entry. */
	yAxisDataKey?: string;

	/** Font size for the labels on the x-axis. */
	xAxisFontSize?: 'sm' | 'md' | 'lg';

	/** Font color for the labels on the x-axis. */
	xAxisFontColor?: string;

	/** Font color for the labels on the y-axis. */
	yAxisFontColor?: string;

	/** Width of the chart container. */
	chartWidth?: number;

	/** Height of the chart container. */
	chartHeight?: number;

	/** Border radius of chart bar. */
	borderRadius?: number;
}

const BarChart = ( {
	data,
	dataKeys = [],
	colors = [],
	layout = 'horizontal', // horizontal, vertical
	stacked = false,
	showXAxis = true,
	showYAxis = true,
	showTooltip = true,
	tooltipIndicator = 'dot', // dot, line, dashed
	tooltipLabelKey,
	showLegend = false,
	showCartesianGrid = true,
	tickFormatter,
	xAxisDataKey,
	yAxisDataKey,
	xAxisFontSize = 'sm', // sm, md, lg
	xAxisFontColor = '#4B5563',
	yAxisFontColor = '#4B5563',
	chartWidth = 350,
	chartHeight = 200,
	borderRadius = 8,
}: BarChartProps ) => {
	const defaultColors = [ { fill: '#7DD3FC' }, { fill: '#2563EB' } ];

	const appliedColors = colors.length > 0 ? colors : defaultColors;

	const fontSizeMap = {
		sm: '12px',
		md: '14px',
		lg: '16px',
	};

	const fontSizeVariant = fontSizeMap[ xAxisFontSize ] || fontSizeMap.sm;

	if ( ! data || data.length === 0 ) {
		return (
			<Label size="sm" variant="help">
				No data available
			</Label>
		);
	}

	return (
		<ResponsiveContainer width={ chartWidth } height={ chartHeight }>
			<BarChartWrapper
				data={ data }
				margin={ { left: 14, right: 14 } }
				layout={ layout }
			>
				{ showCartesianGrid && <CartesianGrid vertical={ false } /> }

				{ layout === 'horizontal' && showXAxis && (
					<XAxis
						dataKey={ xAxisDataKey }
						tickLine={ false }
						axisLine={ false }
						tickMargin={ 8 }
						tickFormatter={ tickFormatter }
						tick={ {
							fontSize: fontSizeVariant,
							fill: xAxisFontColor,
						} }
					/>
				) }

				{ layout === 'horizontal' && showYAxis && (
					<YAxis
						dataKey={ yAxisDataKey }
						tickLine={ false }
						tickMargin={ 10 }
						axisLine={ false }
						tick={ {
							fontSize: fontSizeVariant,
							fill: yAxisFontColor,
						} }
					/>
				) }

				{ layout === 'vertical' && (
					<>
						<XAxis type="number" dataKey={ xAxisDataKey } hide />
						<YAxis
							dataKey={ yAxisDataKey }
							type="category"
							tickLine={ false }
							tickMargin={ 10 }
							axisLine={ false }
							tickFormatter={ tickFormatter }
							tick={ {
								fontSize: fontSizeVariant,
								fill: yAxisFontColor,
							} }
						/>
					</>
				) }

				{ showYAxis && <YAxis dataKey={ yAxisDataKey } /> }
				{ showTooltip && (
					<Tooltip
						content={
							<ChartTooltipContent
								indicator={ tooltipIndicator }
								labelKey={ tooltipLabelKey }
							/>
						}
					/>
				) }
				{ showLegend && (
					<Legend
						content={
							<ChartLegendContent
								fontSizeVariant={ fontSizeVariant }
							/>
						}
					/>
				) }

				{ dataKeys.map( ( key, index ) => {
					let radius: number | [number, number, number, number];

					if ( stacked ) {
						if ( index === 0 ) {
							radius = [ 0, 0, 4, 4 ]; // Bottom bar
						} else if ( index === dataKeys.length - 1 ) {
							radius = [ 4, 4, 0, 0 ]; // Top bar
						} else {
							radius = 0; // Middle bars have no radius
						}
					} else {
						radius = borderRadius;
					}

					return (
						<Bar
							key={ key }
							dataKey={ key }
							fill={ appliedColors[ index ]?.fill }
							radius={ radius }
							stackId={ stacked ? 'a' : undefined }
						/>
					);
				} ) }
			</BarChartWrapper>
		</ResponsiveContainer>
	);
};

export default BarChart;
