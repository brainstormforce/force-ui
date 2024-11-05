// import React from 'react';

// const ChartLegendContent = React.forwardRef(
//     (
//         {
//             className,
//             hideIcon = false,
//             payload = [], // array of objects that represents the data for each legend item
//             verticalAlign = 'bottom', // top | bottom
//             nameKey = 'value',
//         },
//         ref
//     ) => {
//         if (!payload.length) return null;

//         return (
//             <div
//                 ref={ref}
//                 className={`flex items-center justify-center gap-4 ${verticalAlign === 'top' ? 'pb-3' : 'pt-3'
//                     } ${className}`}
//             >
//                 {payload.map((item) => (
//                     <div key={item.value} className="flex items-center gap-1.5">
//                         {!hideIcon && (
//                             <div
//                                 className="h-2 w-2 shrink-0 rounded-[2px]"
//                                 style={{
//                                     backgroundColor: item.color,
//                                 }}
//                             />
//                         )}
//                         <span className="capitalize">{item[nameKey]}</span>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// );

// ChartLegendContent.displayName = 'ChartLegendContent';

// export default ChartLegendContent;



import React from 'react';

const ChartLegendContent = React.forwardRef(
    (
        {
            className,
            hideIcon = false,
            payload = [], // array of objects that represents the data for each legend item
            verticalAlign = 'bottom', // top | bottom
            horizontalAlign = 'center', // left | center | right
            nameKey = 'value',
        },
        ref
    ) => {
        if (!payload.length) return null;

        // Set flex direction and alignment based on props
        const justifyClass = horizontalAlign === 'left' ? 'justify-start' :
            horizontalAlign === 'right' ? 'justify-end' : 'justify-center';

        return (
            <div
                ref={ref}
                className={`flex items-center ${justifyClass} gap-4 ${verticalAlign === 'top' ? 'pb-3' : 'pt-3'} ${className}`}
            >
                {payload.map((item) => (
                    <div key={item.value} className="flex items-center gap-1.5">
                        {!hideIcon && (
                            <div
                                className="h-2 w-2 shrink-0 rounded-[2px]"
                                style={{
                                    backgroundColor: item.color,
                                }}
                            />
                        )}
                        <span className="capitalize">{item[nameKey]}</span>
                    </div>
                ))}
            </div>
        );
    }
);

ChartLegendContent.displayName = 'ChartLegendContent';

export default ChartLegendContent;
