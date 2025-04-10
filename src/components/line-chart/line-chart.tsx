import {
	LineChart as LineChartWrapper,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import ChartTooltipContent from './chart-tooltip-content';
import Label from '../label';
import type { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

// Default color constants
const DEFAULT_FONT_COLOR = '#6B7280';
const DEFAULT_GRID_COLOR = '#E5E7EB';
const DEFAULT_LINE_COLORS = [ { stroke: '#2563EB' }, { stroke: '#38BDF8' } ];

interface DataItem {
	[key: string]: number | string;
}
interface Color {
	stroke: string;
}

interface LineChartProps {
	/** An array of objects representing the source data for the chart. */
	data: DataItem[];

	/** An array of strings representing the keys to access data in each data object. Used for identifying different data series. */
	dataKeys: string[];

	/** An array of color objects that determine the stroke colors for each data series in the chart. */
	colors?: Color[];

	/** Whether to render the `<XAxis />` component for the x-axis. */
	showXAxis?: boolean;

	/** Whether to render the `<YAxis />` component for the y-axis. */
	showYAxis?: boolean;

	/** Toggle the visibility of the tooltip on hover, displaying detailed information for each data point. */
	showTooltip?: boolean;

	/** The tooltip indicator. It can be `dot`, `line`, or `dashed`. */
	tooltipIndicator?: 'dot' | 'line' | 'dashed';

	/** The key to use for the tooltip label. */
	tooltipLabelKey?: string;

	/** Whether to display the `<CartesianGrid />`, adding horizontal and vertical grid lines. */
	showCartesianGrid?: boolean;

	/** A function used to format the ticks on the x-axis, e.g., for formatting dates or numbers. */
	tickFormatter?: ( value: string ) => string;

	/** The key in the data objects representing values for the x-axis. */
	xAxisDataKey?: string;

	/** The key in the data objects representing values for the y-axis. */
	yAxisDataKey?: string;

	/** Font size for the labels on the x-axis. */
	xAxisFontSize?: 'sm' | 'md' | 'lg';

	/** Font color for the labels on the x-axis. */
	xAxisFontColor?: string;

	/**
	 * Font color for the labels on the y-axis.
	 * When biaxial is true, you can provide an array of two colors [leftAxisColor, rightAxisColor].
	 * If a single color is provided, it will be used for both axes.
	 */
	yAxisFontColor?: string | string[];

	/** Width of the chart container. */
	chartWidth?: number | string;

	/** Height of the chart container. */
	chartHeight?: number | string;

	/** Determines whether dots are shown on each data point. */
	withDots?: boolean;

	/**
	 * Line chart Wrapper props to apply additional props to the wrapper component. Ex. `margin`, or `onClick` etc.
	 * @see https://recharts.org/en-US/api/LineChart
	 */
	lineChartWrapperProps?: Omit<
		CategoricalChartProps,
		'width' | 'height' | 'data'
	>;
	/**
	 * The stroke dasharray for the Cartesian grid.
	 * @default '3 3'
	 * @see https://recharts.org/en-US/api/CartesianGrid
	 */
	strokeDasharray?: string;

	/**
	 * The color of the Cartesian grid lines.
	 * @default '#E5E7EB'
	 */
	gridColor?: string;

	/**
	 * Biaxial chart.
	 */
	biaxial?: boolean;
}

const LineChart = ( {
	data,
	dataKeys = [],
	colors = [],
	showXAxis = false,
	showYAxis = false,
	showTooltip = true,
	tooltipIndicator = 'dot', // dot, line, dashed
	tooltipLabelKey,
	showCartesianGrid = true,
	tickFormatter,
	xAxisDataKey,
	yAxisDataKey,
	xAxisFontSize = 'sm', // sm, md, lg
	xAxisFontColor = DEFAULT_FONT_COLOR,
	yAxisFontColor = DEFAULT_FONT_COLOR,
	chartWidth = 350,
	chartHeight = 200,
	withDots = false,
	lineChartWrapperProps,
	strokeDasharray = '3 3',
	gridColor = DEFAULT_GRID_COLOR,
	biaxial = false,
}: LineChartProps ) => {
	const appliedColors = colors.length > 0 ? colors : DEFAULT_LINE_COLORS;

	const fontSizeMap = {
		sm: '12px',
		md: '14px',
		lg: '16px',
	};

	const fontSizeVariant = fontSizeMap[ xAxisFontSize ] || fontSizeMap.sm;

	// Handle Y-axis colors for biaxial chart
	const getYAxisFontColor = ( index = 0 ) => {
		if ( Array.isArray( yAxisFontColor ) ) {
			return yAxisFontColor[ index ] || yAxisFontColor[ 0 ] || DEFAULT_FONT_COLOR;
		}
		return yAxisFontColor;
	};

	if ( ! data || data.length === 0 ) {
		return (
			<Label size="sm" variant="help">
				No data available
			</Label>
		);
	}

	return (
		<ResponsiveContainer width={ chartWidth } height={ chartHeight }>
			<LineChartWrapper { ...lineChartWrapperProps } data={ data }>
				{ showCartesianGrid && (
					<CartesianGrid
						strokeDasharray={ strokeDasharray }
						horizontal={ false }
						stroke={ gridColor }
					/>
				) }
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
					hide={ ! showXAxis }
					interval="equidistantPreserveStart"
				/>
				<YAxis
					yAxisId="left"
					dataKey={ biaxial ? dataKeys[ 0 ] : yAxisDataKey }
					tickLine={ false }
					axisLine={ false }
					tickMargin={ 8 }
					tick={ {
						fontSize: fontSizeVariant,
						fill: getYAxisFontColor( 0 ),
					} }
					hide={ ! showYAxis }
					orientation="left"
				/>

				{ biaxial && dataKeys.length > 1 && (
					<YAxis
						yAxisId="right"
						dataKey={ dataKeys[ 1 ] }
						tickLine={ false }
						axisLine={ false }
						tickMargin={ 8 }
						tick={ {
							fontSize: fontSizeVariant,
							fill: getYAxisFontColor( 1 ),
						} }
						orientation="right"
						hide={ ! showYAxis }
					/>
				) }

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

				{ dataKeys.map( ( key, index ) => {
					// Determine which Y-axis this line should use
					let axisId = 'left';
					if ( biaxial && index > 0 ) {
						axisId = 'right';
					}

					return (
						<Line
							key={ key }
							type="natural"
							dataKey={ key }
							stroke={ appliedColors[ index ].stroke }
							fill={ appliedColors[ index ].stroke }
							strokeWidth={ 2 }
							dot={ withDots }
							yAxisId={ axisId }
						/>
					);
				} ) }
			</LineChartWrapper>
		</ResponsiveContainer>
	);
};

export default LineChart;
