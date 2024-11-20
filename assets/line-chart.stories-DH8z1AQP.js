import{L as x}from"./line-chart-ChnXESza.js";import"./jsx-runtime-CfatFE5O.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./label-D4p9IGVl.js";import"./generateCategoricalChart-CQ1jUcy2.js";import"./tiny-invariant-CopsF_GD.js";import"./YAxis-BgfodG5x.js";const l=[{month:"January",desktop:186},{month:"February",desktop:305},{month:"March",desktop:237},{month:"April",desktop:73},{month:"May",desktop:209},{month:"June",desktop:214}],w=[{month:"January",desktop:186,mobile:80},{month:"February",desktop:305,mobile:200},{month:"March",desktop:237,mobile:120},{month:"April",desktop:173,mobile:160},{month:"May",desktop:209,mobile:130},{month:"June",desktop:214,mobile:140}],k=["desktop","mobile"],A=[{stroke:"#2563EB"},{stroke:"#38BDF8"}],L={title:"Atoms/LineChart",component:x,parameters:{layout:"centered"},tags:["autodocs"]},e=u=>u.slice(0,3),t={args:{data:l,dataKeys:["desktop"],colors:[{stroke:"#3b82f6"}],showXAxis:!0,showYAxis:!1,showTooltip:!0,showCartesianGrid:!0,tickFormatter:e,xAxisDataKey:"month",xAxisFontSize:"sm",withDots:!1}},o={args:{data:l,dataKeys:["desktop"],colors:[{stroke:"#3b82f6"}],showXAxis:!0,showYAxis:!1,showTooltip:!0,showCartesianGrid:!0,tickFormatter:e,xAxisDataKey:"month",xAxisFontSize:"sm",withDots:!0}},s={args:{data:w,dataKeys:k,colors:A,showXAxis:!0,showYAxis:!1,showTooltip:!0,showCartesianGrid:!0,tickFormatter:e,xAxisDataKey:"month",xAxisFontSize:"sm",withDots:!1}};var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    data: chartData,
    dataKeys: ['desktop'],
    colors: [{
      stroke: '#3b82f6'
    }],
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 'sm',
    withDots: false
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var i,m,h;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: chartData,
    dataKeys: ['desktop'],
    colors: [{
      stroke: '#3b82f6'
    }],
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 'sm',
    withDots: true
  }
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,c,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: chartDataMultiple,
    dataKeys,
    colors,
    showXAxis: true,
    showYAxis: false,
    showTooltip: true,
    showCartesianGrid: true,
    tickFormatter: monthFormatter,
    xAxisDataKey: 'month',
    xAxisFontSize: 'sm',
    withDots: false
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const M=["LineChartSimple","LineChartWithDots","LineChartMultiple"];export{s as LineChartMultiple,t as LineChartSimple,o as LineChartWithDots,M as __namedExportsOrder,L as default};
