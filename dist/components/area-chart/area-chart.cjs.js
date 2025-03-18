"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),f=require("react"),t=require("recharts"),K=require("./chart-legend-content.cjs.js"),D=require("./chart-tooltip-content.cjs.js"),F=require("../label/label.cjs.js"),G=({data:n,dataKeys:x,colors:c=[],variant:d="solid",showXAxis:j=!0,showYAxis:g=!0,showTooltip:h=!0,tooltipIndicator:m="dot",tooltipLabelKey:k,showLegend:y=!0,showCartesianGrid:C=!0,tickFormatter:S,xAxisDataKey:q,yAxisDataKey:B,xAxisFontSize:L="sm",xAxisFontColor:u="#6B7280",chartWidth:r=350,chartHeight:a=200})=>{const[b,v]=f.useState(r),[z,A]=f.useState(a),M=[{stroke:"#2563EB",fill:"#BFDBFE"},{stroke:"#38BDF8",fill:"#BAE6FD"}],i=c.length>0?c:M;f.useEffect(()=>{v(r),A(a)},[r,a]);const p={sm:"12px",md:"14px",lg:"16px"},o=p[L]||p.sm,E=()=>e.jsx("defs",{children:i.map((l,s)=>e.jsxs("linearGradient",{id:`fill${s}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:l.fill,stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:l.fill,stopOpacity:.1})]},`gradient${s}`))});return!n||n.length===0?e.jsx(F.default,{size:"sm",variant:"help",children:"No data available"}):e.jsx(t.ResponsiveContainer,{width:b,height:z,children:e.jsxs(t.AreaChart,{data:n,margin:{left:14,right:14},children:[C&&e.jsx(t.CartesianGrid,{vertical:!1}),j&&e.jsx(t.XAxis,{dataKey:q,tickLine:!1,axisLine:!1,tickMargin:8,tickFormatter:S,tick:{fontSize:o,fill:u}}),g&&e.jsx(t.YAxis,{dataKey:B,tickLine:!1,axisLine:!1,tickMargin:8,tick:{fontSize:o,fill:u}}),h&&e.jsx(t.Tooltip,{content:e.jsx(D.default,{indicator:m,labelKey:k})}),y&&e.jsx(t.Legend,{content:e.jsx(K.default,{fontSizeVariant:o})}),d==="gradient"&&E(),x.map((l,s)=>e.jsx(t.Area,{type:"monotone",dataKey:l,stroke:i[s%i.length].stroke,fill:d==="gradient"?`url(#fill${s})`:i[s%i.length].fill,stackId:"1"},l))]})})};exports.default=G;
//# sourceMappingURL=area-chart.cjs.js.map
