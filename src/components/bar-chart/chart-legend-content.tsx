import React from 'react';
import { cn } from '@/utilities/functions';

interface ChartLegendContentProps {
    className?: string;
    hideIcon?: boolean;
    payload?: {
        color: string;
        value: string | number;
        [key: string]: string | number;
    }[];
    verticalAlign?: 'top' | 'bottom';
    nameKey?: string;
    fontSizeVariant?: string | number;
}

const ChartLegendContent = React.forwardRef<HTMLDivElement,ChartLegendContentProps>(
    (
        {
            className,
            hideIcon = false,
            payload = [], // array of objects that represents the data for each legend item
            verticalAlign = 'bottom', // top | bottom
            nameKey = 'value',
            fontSizeVariant,
        },
        ref
    ) => {
        if (!payload.length) return null;

        return (
            <div
                ref={ref}
                className={cn('flex items-center justify-center gap-4',
                    verticalAlign === 'top' ? 'pb-3' : 'pt-3', className
                )}
            >
                {payload.map((item) => (
                    <div key={item.value} className="flex items-center gap-1.5">
                        {!hideIcon && (
                            <div
                                className="size-2 shrink-0 rounded-sm"
                                style={{
                                    backgroundColor: item.color,
                                }}
                            />
                        )}
                        <span className="capitalize" style={{ fontSize: fontSizeVariant }}>{item[nameKey]}</span>
                    </div>
                ))}
            </div>
        );
    }
);

ChartLegendContent.displayName = 'ChartLegendContent';

export default ChartLegendContent;