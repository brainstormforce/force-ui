import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

const RadialChartComponent = ({
    data,

}) => {

    return (
        <RadialBarChart
            data={data}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
            width={400}
            height={400}
        >
            <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background clockWise cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                    content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                                <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                >
                                    <tspan
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        className="fill-foreground text-4xl font-bold"
                                    >
                                        {data[0].visitors.toLocaleString()}
                                    </tspan>
                                    <tspan
                                        x={viewBox.cx}
                                        y={(viewBox.cy || 0) + 24}
                                        className="fill-muted-foreground"
                                    >
                                        Visitors
                                    </tspan>
                                </text>
                            )
                        }
                    }}
                />
            </PolarRadiusAxis>
        </RadialBarChart>
    )
}

export default RadialChartComponent;



// import {
//     Label,
//     PolarGrid,
//     PolarRadiusAxis,
//     RadialBar,
//     RadialBarChart,
//     Legend
// } from "recharts"

// const RadialChartComponent = ({
//     data,

// }) => {

//     return (
//         <RadialBarChart cx="50%" cy="50%" innerRadius={30} outerRadius={120} barSize={10} data={data} width={400} height={400}>
//             <RadialBar
//                 minAngle={15}
//                 label={{ position: 'insideStart', fill: '#000' }}
//                 background
//                 clockWise
//                 dataKey="uv"
//             />
//         </RadialBarChart>
//     )
// }

// export default RadialChartComponent;


