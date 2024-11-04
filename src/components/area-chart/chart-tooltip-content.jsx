import React from 'react';
import { cn } from '@/utilities/functions';

const ChartTooltipContent = React.forwardRef(
    (
        {
            active,
            payload,
            className,
            indicator = 'dot',
            hideLabel = false,
            hideIndicator = false,
            label,
            labelFormatter,
            labelClassName,
            formatter,
            color,
            nameKey = 'name',
            labelKey = 'value',
        },
        ref
    ) => {
        const tooltipLabel = React.useMemo(() => {
            if (hideLabel || !payload?.length) return null;

            const [item] = payload;
            const value = labelFormatter ? labelFormatter(label) : item[labelKey] || label;

            return value ? <div className={cn('font-medium', labelClassName)}>{value}</div> : null;
        }, [label, labelFormatter, payload, hideLabel, labelClassName, labelKey]);

        if (!active || !payload?.length) return null;

        const isSinglePayload = payload.length === 1 && indicator !== 'dot';

        return (
            <div
                ref={ref}
                className={cn(
                    'tooltip-container grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl',
                    className
                )}
            >
                {!isSinglePayload ? tooltipLabel : null}
                <div className="grid gap-1.5">
                    {payload.map((item, index) => {
                        const indicatorColor = color || item.color || '#000';

                        return (
                            <div
                                key={item.dataKey || index}
                                className={cn(
                                    'flex w-full items-stretch gap-2',
                                    indicator === 'dot' && 'items-center'
                                )}
                            >
                                {!hideIndicator && (
                                    <div
                                        className={cn({
                                            'h-2.5 w-2.5 rounded-full bg-primary': indicator === 'dot',
                                            'w-1 h-full bg-primary': indicator === 'line',
                                            'w-0 border-dashed border-primary': indicator === 'dashed',
                                        })}
                                        style={{
                                            backgroundColor: indicator === 'dot' ? indicatorColor : undefined,
                                            borderColor: indicator === 'dashed' ? indicatorColor : undefined,
                                        }}
                                    />
                                )}
                                <div className="flex-1 flex justify-between items-center">
                                    <span>{item[nameKey] || item.dataKey}</span>
                                    <span className="font-mono font-medium">{formatter ? formatter(item.value) : item.value}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
);

ChartTooltipContent.displayName = 'ChartTooltipContent';

export default ChartTooltipContent;
