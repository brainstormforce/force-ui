import { useEffect, useState, type ReactNode } from 'react';
import {
	AreaChart as AreaChartWrapper,
	Area,
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
import type { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

// Default color constants
const DEFAULT_FONT_COLOR = '#6B7280';
const DEFAULT_AREA_COLORS = [
	{ stroke: '#2563EB', fill: '#BFDBFE' },
	{ stroke: '#38BDF8', fill: '#BAE6FD' },
];

interface DataItem {
	[key: string]: number | string; // Adjust based on your data structure
}
interface Color {
	stroke: string;
	fill: string;
}

interface AreaChartProps {
	/** An array of objects representing the source data for the chart. */
	data: DataItem[];

	/** An array of strings representing the keys to access data in each data object. Used for identifying different data series. */
	dataKeys: string[];

	/** An array of color strings that determine the colors for each data series in the chart. */
	colors?: Color[];

	/** Defines the variant of Area Chart. */
	variant?: 'solid' | 'gradient';

	/** Whether to render the `<XAxis />` component for the x-axis. */
	showXAxis?: boolean;

	/** Whether to render the `<XAxis />` component for the y-axis. */
	showYAxis?: boolean;

	/** Toggle the visibility of the tooltip on hover, displaying detailed information for each data point. */
	showTooltip?: boolean;

	/** The tooltip indicator. It can be `dot`, `line` or `dashed`. */
	tooltipIndicator?: 'dot' | 'line' | 'dashed';

	/** An array of objects representing the source data for the chart. */
	tooltipLabelKey?: string;

	/** Whether to render the `<Legend />` component to identify data series. */
	showLegend?: boolean;

	/** Whether to display the `<CartesianGrid />`, adding horizontal and vertical grid lines. */
	showCartesianGrid?: boolean;

	/** A function used to format the ticks on the x-axis, e.g., for formatting dates or numbers. */
	xAxisTickFormatter?: ( value: string ) => string;

	/**
	 * A function used to format the ticks on the x-axis, e.g., for formatting dates or numbers.
	 * @deprecated Use `xAxisTickFormatter` instead.
	 */
	tickFormatter?: ( value: string ) => string;

	/** A function used to format the ticks on the y-axis, e.g., for converting 1000 to 1K. */
	yAxisTickFormatter?: ( value: number ) => string;

	/** The key in the data objects representing values for the x-axis. This is used to access the x-axis values from each data entry. */
	xAxisDataKey?: string;

	/** The key in the data objects representing values for the y-axis. This is used to access the y-axis values from each data entry. */
	yAxisDataKey?: string;

	/** Font size for the labels on the x-axis. */
	xAxisFontSize?: 'sm' | 'md' | 'lg';

	/** Font color for the labels on the x-axis. */
	xAxisFontColor?: string;

	/** Width of the chart container. */
	chartWidth?: number;

	/** Height of the chart container. */
	chartHeight?: number;

	/**
	 * Area chart Wrapper props to apply additional props to the wrapper component. Ex. `margin`, or `onClick` etc.
	 * @see https://recharts.org/en-US/api/AreaChart
	 */
	areaChartWrapperProps?: Omit<
		CategoricalChartProps,
		'width' | 'height' | 'data'
	>;

	/**
	 * Custom component to display when no data is available.
	 * If not provided, a default "No data available" message will be displayed.
	 */
	noDataComponent?: ReactNode;
}

const AreaChart = ( {
	data,
	dataKeys,
	colors = [],
	variant = 'solid',
	showXAxis = true,
	showYAxis = true,
	showTooltip = true,
	tooltipIndicator = 'dot', // dot, line, dashed
	tooltipLabelKey,
	showLegend = true,
	showCartesianGrid = true,
	xAxisTickFormatter,
	tickFormatter,
	yAxisTickFormatter,
	xAxisDataKey,
	yAxisDataKey,
	xAxisFontSize = 'sm', // sm, md, lg
	xAxisFontColor = DEFAULT_FONT_COLOR,
	chartWidth = 350,
	chartHeight = 200,
	areaChartWrapperProps = {
		margin: {
			left: 14,
			right: 14,
			top: 6,
			bottom: 6,
		},
	},
	noDataComponent,
}: AreaChartProps ) => {
	const [ width, setWidth ] = useState( chartWidth );
	const [ height, setHeight ] = useState( chartHeight );

	const appliedColors = colors.length > 0 ? colors : DEFAULT_AREA_COLORS;

	useEffect( () => {
		setWidth( chartWidth );
		setHeight( chartHeight );
	}, [ chartWidth, chartHeight ] );

	const fontSizeMap = {
		sm: '12px',
		md: '14px',
		lg: '16px',
	};

	const fontSizeVariant = fontSizeMap[ xAxisFontSize ] || fontSizeMap.sm;

	const renderGradients = () => (
		<defs>
			{ appliedColors.map( ( color, index ) => (
				<linearGradient
					key={ `gradient${ index }` }
					id={ `fill${ index }` }
					x1="0"
					y1="0"
					x2="0"
					y2="1"
				>
					<stop
						offset="5%"
						stopColor={ color.fill }
						stopOpacity={ 0.8 }
					/>
					<stop
						offset="95%"
						stopColor={ color.fill }
						stopOpacity={ 0.1 }
					/>
				</linearGradient>
			) ) }
		</defs>
	);

	if ( ! data || data.length === 0 ) {
		return (
			noDataComponent || (
				<Label size="sm" variant="help">
					No data available
				</Label>
			)
		);
	}

	return (
		<ResponsiveContainer width={ width } height={ height }>
			<AreaChartWrapper { ...areaChartWrapperProps } data={ data }>
				{ showCartesianGrid && <CartesianGrid vertical={ false } /> }
				<XAxis
					dataKey={ xAxisDataKey }
					tickLine={ false }
					axisLine={ false }
					tickMargin={ 8 }
					tickFormatter={ xAxisTickFormatter || tickFormatter }
					tick={ {
						fontSize: fontSizeVariant,
						fill: xAxisFontColor,
					} }
					hide={ ! showXAxis }
					interval="preserveStartEnd"
				/>
				<YAxis
					dataKey={ yAxisDataKey }
					tickLine={ false }
					axisLine={ false }
					tickMargin={ 8 }
					tickFormatter={ yAxisTickFormatter }
					tick={ {
						fontSize: fontSizeVariant,
						fill: xAxisFontColor,
					} }
					hide={ ! showYAxis }
				/>
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

				{ variant === 'gradient' && renderGradients() }

				{ dataKeys.map( ( key, index ) => (
					<Area
						key={ key }
						type="monotone"
						dataKey={ key }
						stroke={
							appliedColors[ index % appliedColors.length ].stroke
						}
						fill={
							variant === 'gradient'
								? `url(#fill${ index })`
								: appliedColors[ index % appliedColors.length ]
									.fill
						}
						stackId="1"
					/>
				) ) }
			</AreaChartWrapper>
		</ResponsiveContainer>
	);
};

export default AreaChart;
