import{j as a}from"./jsx-runtime-CfatFE5O.js";import{C as e}from"./container-BNYZU-GH.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";const w={title:"Atoms/Container",component:e,parameters:{layout:"centered"},subcomponents:{"Container.Item":e.Item},tags:["autodocs"],argTypes:{direction:{control:"select",if:{arg:"containerType",eq:"flex"}},wrap:{control:"select",if:{arg:"containerType",eq:"flex"}},cols:{control:"select",if:{arg:"containerType",eq:"grid"}},gridFlow:{control:"select",if:{arg:"containerType",eq:"grid"}},colsSubGrid:{control:"boolean",if:{arg:"containerType",eq:"grid"}},rowsSubGrid:{control:"boolean",if:{arg:"containerType",eq:"grid"}},autoRows:{control:"boolean",if:{arg:"containerType",eq:"grid"}},autoCols:{control:"boolean",if:{arg:"containerType",eq:"grid"}},justify:{control:"select"},align:{control:"select"},gap:{control:"select"},gapX:{control:"select"},gapY:{control:"select"}}},r={args:{className:"bg-gray-200 p-4",cols:3,containerType:"flex",gap:"sm",justify:"start",align:"start",direction:"row"},render:n=>a.jsxs(e,{...n,children:[a.jsx(e.Item,{className:"bg-red-500 p-4",...n.containerType==="flex"?{grow:0,shrink:1}:{},children:"Item 1"}),a.jsx(e.Item,{className:"bg-green-500 p-4",...n.containerType==="flex"?{grow:0,shrink:1}:{},children:"Item 2"}),a.jsx(e.Item,{className:"bg-blue-500 p-4",...n.containerType==="flex"?{grow:0,shrink:1}:{},children:"Item 3"})]})},t={args:{containerType:"flex",gap:"sm",justify:"between",align:"center",direction:"row-reverse",className:"bg-gray-200 p-4"},render:r.render},o={args:{containerType:"flex",direction:"column",gap:"sm",justify:"between",align:"center",className:"bg-gray-200 p-4"},render:r.render};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    className: 'bg-gray-200 p-4',
    cols: 3,
    containerType: 'flex',
    gap: 'sm',
    justify: 'start',
    align: 'start',
    direction: 'row'
  },
  render: args => {
    return <Container {...args}>
                <Container.Item className="bg-red-500 p-4" {...args.containerType === 'flex' ? {
        grow: 0,
        shrink: 1
      } : {}}>
                    Item 1
                </Container.Item>
                <Container.Item className="bg-green-500 p-4" {...args.containerType === 'flex' ? {
        grow: 0,
        shrink: 1
      } : {}}>
                    Item 2
                </Container.Item>
                <Container.Item className="bg-blue-500 p-4" {...args.containerType === 'flex' ? {
        grow: 0,
        shrink: 1
      } : {}}>
                    Item 3
                </Container.Item>
            </Container>;
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,g,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    containerType: 'flex',
    gap: 'sm',
    justify: 'between',
    align: 'center',
    direction: 'row-reverse',
    className: 'bg-gray-200 p-4'
  },
  render: BasicContainer.render
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,d,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    containerType: 'flex',
    direction: 'column',
    gap: 'sm',
    justify: 'between',
    align: 'center',
    className: 'bg-gray-200 p-4'
  },
  render: BasicContainer.render
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const C=["BasicContainer","RowReverse","DirectionVertical"];export{r as BasicContainer,o as DirectionVertical,t as RowReverse,C as __namedExportsOrder,w as default};
