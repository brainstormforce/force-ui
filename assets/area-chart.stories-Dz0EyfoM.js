import{j as e}from"./jsx-runtime-CfatFE5O.js";import{A as m}from"./area-chart-uwYhenYK.js";import{L as F}from"./label-D4p9IGVl.js";import{B as K}from"./button-CgINCcmo.js";import{B as l}from"./badge-yuBkyoYk.js";import{C as t}from"./container-BNYZU-GH.js";import{A as T}from"./arrow-up-right-C_vyprBS.js";import{A as B}from"./arrow-up-JuuIyZCo.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./ResponsiveContainer-CM8-Voaa.js";import"./generateCategoricalChart-CQ1jUcy2.js";import"./tiny-invariant-CopsF_GD.js";import"./YAxis-BgfodG5x.js";import"./x-DyQPfKin.js";import"./createLucideIcon-9-bnJYrk.js";const p=[{month:"January",sales:186,expenses:80},{month:"February",sales:305,expenses:200},{month:"March",sales:237,expenses:120},{month:"April",sales:73,expenses:190},{month:"May",sales:209,expenses:130},{month:"June",sales:214,expenses:140}],c=["sales","expenses"],z=[{date:"2024-04-01",desktop:222,mobile:150},{date:"2024-04-02",desktop:97,mobile:180},{date:"2024-04-03",desktop:167,mobile:120},{date:"2024-04-04",desktop:242,mobile:260},{date:"2024-04-05",desktop:373,mobile:290},{date:"2024-04-06",desktop:301,mobile:340},{date:"2024-04-07",desktop:245,mobile:180},{date:"2024-04-08",desktop:409,mobile:320},{date:"2024-04-09",desktop:59,mobile:110},{date:"2024-04-10",desktop:261,mobile:190},{date:"2024-04-11",desktop:327,mobile:350},{date:"2024-04-12",desktop:292,mobile:210},{date:"2024-04-13",desktop:342,mobile:380},{date:"2024-04-14",desktop:137,mobile:220},{date:"2024-04-15",desktop:120,mobile:170},{date:"2024-04-16",desktop:138,mobile:190},{date:"2024-04-17",desktop:446,mobile:360},{date:"2024-04-18",desktop:364,mobile:410},{date:"2024-04-19",desktop:243,mobile:180},{date:"2024-04-20",desktop:89,mobile:150},{date:"2024-04-21",desktop:137,mobile:200},{date:"2024-04-22",desktop:224,mobile:170},{date:"2024-04-23",desktop:138,mobile:230},{date:"2024-04-24",desktop:387,mobile:290},{date:"2024-04-25",desktop:215,mobile:250},{date:"2024-04-26",desktop:75,mobile:130},{date:"2024-04-27",desktop:383,mobile:420},{date:"2024-04-28",desktop:122,mobile:180},{date:"2024-04-29",desktop:315,mobile:240},{date:"2024-04-30",desktop:454,mobile:380},{date:"2024-05-01",desktop:165,mobile:220},{date:"2024-05-02",desktop:293,mobile:310},{date:"2024-05-03",desktop:247,mobile:190},{date:"2024-05-04",desktop:385,mobile:420},{date:"2024-05-05",desktop:481,mobile:390},{date:"2024-05-06",desktop:498,mobile:520},{date:"2024-05-07",desktop:388,mobile:300},{date:"2024-05-08",desktop:149,mobile:210},{date:"2024-05-09",desktop:227,mobile:180},{date:"2024-05-10",desktop:293,mobile:330},{date:"2024-05-11",desktop:335,mobile:270},{date:"2024-05-12",desktop:197,mobile:240},{date:"2024-05-13",desktop:197,mobile:160},{date:"2024-05-14",desktop:448,mobile:490},{date:"2024-05-15",desktop:473,mobile:380},{date:"2024-05-16",desktop:338,mobile:400},{date:"2024-05-17",desktop:499,mobile:420},{date:"2024-05-18",desktop:315,mobile:350},{date:"2024-05-19",desktop:235,mobile:180},{date:"2024-05-20",desktop:177,mobile:230},{date:"2024-05-21",desktop:82,mobile:140},{date:"2024-05-22",desktop:81,mobile:120},{date:"2024-05-23",desktop:252,mobile:290},{date:"2024-05-24",desktop:294,mobile:220},{date:"2024-05-25",desktop:201,mobile:250},{date:"2024-05-26",desktop:213,mobile:170},{date:"2024-05-27",desktop:420,mobile:460},{date:"2024-05-28",desktop:233,mobile:190},{date:"2024-05-29",desktop:78,mobile:130},{date:"2024-05-30",desktop:340,mobile:280},{date:"2024-05-31",desktop:178,mobile:230},{date:"2024-06-01",desktop:178,mobile:200},{date:"2024-06-02",desktop:470,mobile:410},{date:"2024-06-03",desktop:103,mobile:160},{date:"2024-06-04",desktop:439,mobile:380},{date:"2024-06-05",desktop:88,mobile:140},{date:"2024-06-06",desktop:294,mobile:250},{date:"2024-06-07",desktop:323,mobile:370},{date:"2024-06-08",desktop:385,mobile:320},{date:"2024-06-09",desktop:438,mobile:480},{date:"2024-06-10",desktop:155,mobile:200},{date:"2024-06-11",desktop:92,mobile:150},{date:"2024-06-12",desktop:492,mobile:420},{date:"2024-06-13",desktop:81,mobile:130},{date:"2024-06-14",desktop:426,mobile:380},{date:"2024-06-15",desktop:307,mobile:350},{date:"2024-06-16",desktop:371,mobile:310},{date:"2024-06-17",desktop:475,mobile:520},{date:"2024-06-18",desktop:107,mobile:170},{date:"2024-06-19",desktop:341,mobile:290},{date:"2024-06-20",desktop:408,mobile:450},{date:"2024-06-21",desktop:169,mobile:210},{date:"2024-06-22",desktop:317,mobile:270},{date:"2024-06-23",desktop:480,mobile:530},{date:"2024-06-24",desktop:132,mobile:180},{date:"2024-06-25",desktop:141,mobile:190},{date:"2024-06-26",desktop:434,mobile:380},{date:"2024-06-27",desktop:448,mobile:490},{date:"2024-06-28",desktop:149,mobile:200},{date:"2024-06-29",desktop:103,mobile:160},{date:"2024-06-30",desktop:446,mobile:400}],L=["desktop","mobile"],i=[{stroke:"#2563EB",fill:"#BFDBFE"},{stroke:"#38BDF8",fill:"#BAE6FD"}],x=a=>a.slice(0,3),S=a=>new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric"}),ee={title:"Atoms/AreaChart",component:m,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{data:p,dataKeys:c,colors:i,variant:"solid",tickFormatter:x,showXAxis:!0,xAxisDataKey:"month",showYAxis:!1,showLegend:!1,showTooltip:!0,tooltipIndicator:"dot"}},d={args:{data:p,dataKeys:c,colors:i,variant:"gradient",tickFormatter:x,showXAxis:!0,xAxisDataKey:"month",showYAxis:!1,showLegend:!1}},r={args:{chartWidth:900,chartHeight:250,data:z,dataKeys:L,colors:i,variant:"gradient",showXAxis:!0,xAxisDataKey:"date",showYAxis:!1,tickFormatter:S}};r.storyName="Area Chart Gradient with Legend";const s=a=>e.jsxs(t,{containerType:"grid",gap:"xs",className:"p-4 bg-background-primary rounded-lg shadow-sm",...a,children:[e.jsxs(t.Item,{className:"p-1 space-y-2",children:[e.jsxs(t,{containerType:"flex",justify:"between",align:"center",children:[e.jsx(F,{size:"sm",className:"text-text-tertiary font-medium",children:"Cloned Sites"}),e.jsxs(K,{className:"p-0",variant:"ghost",children:[e.jsx(T,{className:"text-icon-secondary size-4"}),e.jsx("span",{className:"sr-only",children:"View Details"})]})]}),e.jsxs(t,{containerType:"flex",align:"center",gap:"xs",children:[e.jsx("div",{className:"text-4xl text-text-primary font-semibold",children:"316"}),e.jsx(l,{label:"12%",size:"sm",type:"pill",variant:"green",icon:e.jsx(B,{})})]}),e.jsxs(t,{containerType:"flex",align:"center",className:"gap-0 space-x-1",children:[e.jsx("span",{className:"text-field-helper text-xs",children:"Compare to"}),e.jsx(l,{label:"298",size:"sm",type:"pill",variant:"neutral",icon:null}),e.jsx("span",{className:"text-field-helper text-xs",children:"previous week"})]})]}),e.jsx(t.Item,{children:e.jsx(m,{data:p,dataKeys:c,colors:i,variant:"solid",tickFormatter:x,showXAxis:!0,xAxisDataKey:"month",showYAxis:!1,showLegend:!1})})]});s.storyName="Clone Sites Card With Area Chart";const o=a=>e.jsxs(t,{containerType:"grid",gap:"xs",className:"p-4 bg-background-primary rounded-lg shadow-sm",...a,children:[e.jsxs(t.Item,{className:"p-1 space-y-2",children:[e.jsxs(t,{containerType:"flex",justify:"between",align:"center",children:[e.jsx(F,{size:"sm",className:"text-text-tertiary font-medium",children:"Revenue"}),e.jsxs(K,{className:"p-0",variant:"ghost",children:[e.jsx(T,{className:"text-icon-secondary size-4"}),e.jsx("span",{className:"sr-only",children:"View Details"})]})]}),e.jsxs(t,{containerType:"flex",align:"center",gap:"xs",children:[e.jsx("div",{className:"text-4xl text-text-primary font-semibold",children:"$3,169"}),e.jsx(l,{label:"12%",size:"sm",type:"pill",variant:"green",icon:e.jsx(B,{})})]}),e.jsxs(t,{containerType:"flex",align:"center",className:"gap-0 space-x-1",children:[e.jsx("span",{className:"text-field-helper text-xs",children:"Compared to"}),e.jsx(l,{label:"$2,984",size:"sm",type:"pill",variant:"neutral",icon:null}),e.jsx("span",{className:"text-field-helper text-xs",children:"previous week"})]})]}),e.jsx(t.Item,{children:e.jsx(m,{chartWidth:900,chartHeight:250,data:z,dataKeys:L,colors:i,variant:"gradient",tickFormatter:S,showXAxis:!0,xAxisDataKey:"date",showYAxis:!1,showLegend:!0})})]});o.storyName="Revenue Card With Area Chart";s.__docgenInfo={description:"",methods:[],displayName:"AreaChartCard1"};o.__docgenInfo={description:"",methods:[],displayName:"AreaChartCard2"};var h,b,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: areaChartData,
    dataKeys,
    colors,
    variant: 'solid',
    // solid, gradient
    tickFormatter: monthFormatter,
    showXAxis: true,
    xAxisDataKey: 'month',
    showYAxis: false,
    showLegend: false,
    showTooltip: true,
    tooltipIndicator: 'dot'
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var g,y,u;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: areaChartData,
    dataKeys,
    colors,
    variant: 'gradient',
    // solid, gradient
    tickFormatter: monthFormatter,
    showXAxis: true,
    xAxisDataKey: 'month',
    showYAxis: false,
    showLegend: false
  }
}`,...(u=(y=d.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var C,f,A;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    chartWidth: 900,
    chartHeight: 250,
    data: chartDataIteractive,
    dataKeys: dataKeysInteractive,
    colors,
    variant: 'gradient',
    // solid, gradient
    showXAxis: true,
    xAxisDataKey: 'date',
    showYAxis: false,
    tickFormatter: monthFormatterInteractive
  }
}`,...(A=(f=r.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var w,v,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => <Container containerType="grid" gap="xs" className="p-4 bg-background-primary rounded-lg shadow-sm" {...args}>
        <Container.Item className="p-1 space-y-2">
            <Container containerType="flex" justify="between" align="center">
                <Label size="sm" className="text-text-tertiary font-medium">
                    Cloned Sites
                </Label>
                <Button className="p-0" variant="ghost">
                    <ArrowUpRight className="text-icon-secondary size-4" />
                    <span className="sr-only">View Details</span>
                </Button>
            </Container>
            <Container containerType="flex" align="center" gap="xs">
                <div className="text-4xl text-text-primary font-semibold">
                    316
                </div>
                <Badge label={'12%'} size="sm" type="pill" variant="green" icon={<ArrowUp />} />
            </Container>
            <Container containerType="flex" align="center" className="gap-0 space-x-1">
                <span className="text-field-helper text-xs">Compare to</span>
                <Badge label={'298'} size="sm" type="pill" variant="neutral" icon={null} />
                <span className="text-field-helper text-xs">previous week</span>
            </Container>
        </Container.Item>
        <Container.Item>
            <AreaChart data={areaChartData} dataKeys={dataKeys} colors={colors} variant="solid" tickFormatter={monthFormatter} showXAxis={true} xAxisDataKey="month" showYAxis={false} showLegend={false} />
        </Container.Item>
    </Container>`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var j,I,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`args => <Container containerType="grid" gap="xs" className="p-4 bg-background-primary rounded-lg shadow-sm" {...args}>
        <Container.Item className="p-1 space-y-2">
            <Container containerType="flex" justify="between" align="center">
                <Label size="sm" className="text-text-tertiary font-medium">
                    Revenue
                </Label>
                <Button className="p-0" variant="ghost">
                    <ArrowUpRight className="text-icon-secondary size-4" />
                    <span className="sr-only">View Details</span>
                </Button>
            </Container>
            <Container containerType="flex" align="center" gap="xs">
                <div className="text-4xl text-text-primary font-semibold">
                    $3,169
                </div>
                <Badge label={'12%'} size="sm" type="pill" variant="green" icon={<ArrowUp />} />
            </Container>
            <Container containerType="flex" align="center" className="gap-0 space-x-1">
                <span className="text-field-helper text-xs">Compared to</span>
                <Badge label={'$2,984'} size="sm" type="pill" variant="neutral" icon={null} />
                <span className="text-field-helper text-xs">previous week</span>
            </Container>
        </Container.Item>
        <Container.Item>
            <AreaChart chartWidth={900} chartHeight={250} data={chartDataIteractive} dataKeys={dataKeysInteractive} colors={colors} variant="gradient" tickFormatter={monthFormatterInteractive} showXAxis={true} xAxisDataKey="date" showYAxis={false} showLegend={true} />
        </Container.Item>
    </Container>`,...(D=(I=o.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const te=["AreaChartSimple","AreaChartGradient","AreaChartInteractive","AreaChartCard1","AreaChartCard2"];export{s as AreaChartCard1,o as AreaChartCard2,d as AreaChartGradient,r as AreaChartInteractive,n as AreaChartSimple,te as __namedExportsOrder,ee as default};
