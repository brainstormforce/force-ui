import {
	PieChart as PieChartWrapper,
	Pie,
	Label as PieLabel,
	Tooltip,
	Legend,
} from 'recharts';
import ChartTooltipContent from './chart-tooltip-content';
import ChartLegendContent from './chart-legend-content';
import Label from '../label';

interface DataItem {
	[key: string]: number | string;
}

export interface PieChartProps {
	/** An array of objects representing the source data for the chart. */
	data: DataItem[];

	/** A string which representing the key to access data in each data object. Used for identifying different data series. */
	dataKey: string;

	/** Type of pie chart. It can be `simple` or `donut` */
	type?: 'simple' | 'donut';

	/** Toggle the visibility of the tooltip on hover, displaying detailed information for each data point. */
	showTooltip?: boolean;

	/** The tooltip indicator. It can be `dot`, `line`, or `dashed`. */
	tooltipIndicator?: 'dot' | 'line' | 'dashed';

	/** The key to use for the tooltip label. */
	tooltipLabelKey?: string;

	/** When is true it show the label inside `donut` pie chart */
	label?: boolean;

	/** Label name which will be displayed inside donut pie chart. */
	labelName?: string;

	/** Label name color which will be displayed inside donut pie chart. */
	labelNameColor?: string;

	/** Label value which will be displayed inside donut pie chart. */
	labelValue?: number | string;

	/** Whether to render the `<Legend />` component to identify data series. */
	showLegend?: boolean;

	/** Width of the chart container. */
	chartWidth?: number;

	/** Outer radius of the pie chart. */
	pieOuterRadius?: number;

	/** Inner radius of the pie chart. */
	pieInnerRadius?: number;
}

const PieChart = ( {
	data,
	dataKey,
	type = 'simple', // simple, donut
	showTooltip = true,
	tooltipIndicator = 'dot', // dot, line, dashed
	tooltipLabelKey,
	label = false,
	labelName = '',
	labelNameColor = '#6B7280',
	labelValue,
	showLegend = false,
	chartWidth = 300,
	pieOuterRadius = 90,
	pieInnerRadius = 60,
}: PieChartProps ) => {
	const isDonut = type === 'donut';
	const outerRadius = pieOuterRadius; // adjust as needed
	const innerRadius = isDonut ? pieInnerRadius : 0; // innerRadius = 0 for simple pie, non-zero for donut

	if ( ! data || data.length === 0 ) {
		return (
			<Label size="sm" variant="help">
				No data available
			</Label>
		);
	}

	return (
		<PieChartWrapper width={ chartWidth } height={ chartWidth }>
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
			{ showLegend && <Legend content={ <ChartLegendContent /> } /> }
			<Pie
				data={ data }
				cx="50%"
				cy="50%"
				innerRadius={ innerRadius }
				outerRadius={ outerRadius }
				dataKey={ dataKey }
			>
				{ isDonut && label && (
					<PieLabel
						content={ ( { viewBox } ) => {
							if ( viewBox && 'cx' in viewBox && 'cy' in viewBox ) {
								return (
									<text
										x={ viewBox.cx }
										y={ viewBox.cy }
										textAnchor="middle"
										dominantBaseline="middle"
										className="space-y-3"
									>
										<tspan
											x={ viewBox.cx }
											dy="-4"
											className="fill-foreground text-xl font-bold"
										>
											{ labelValue }
										</tspan>
										<tspan
											x={ viewBox.cx }
											dy="24"
											className="text-sm"
											style={ { fill: labelNameColor } }
										>
											{ labelName }
										</tspan>
									</text>
								);
							}
						} }
					/>
				) }
			</Pie>
		</PieChartWrapper>
	);
};

export default PieChart;
