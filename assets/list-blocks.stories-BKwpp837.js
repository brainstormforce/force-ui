import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as a}from"./container-BNYZU-GH.js";import{L as s}from"./label-D4p9IGVl.js";import{B as c}from"./badge-yuBkyoYk.js";import{H as d,M as m,S as p}from"./star-p9hqZTI7.js";import{C as u}from"./circle-help-Cp_v9ZhW.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./x-DyQPfKin.js";import"./createLucideIcon-9-bnJYrk.js";const k={title:"Organisms/Cards/List Blocks",parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[l=>e.jsx("div",{style:{width:"1100px",padding:"10px"},children:e.jsx(l,{})})]},x=[{id:"1",value:"vipsupport",icon:e.jsx(d,{}),label:"VIP Support",hideSelection:!0,useSwitch:!1,bagde:e.jsx(c,{label:"PRO",icon:null,size:"xxs",variant:"inverse",closable:!1})},{id:"2",value:"helpcenter",icon:e.jsx(u,{}),label:"Help Center",hideSelection:!0,useSwitch:!1},{id:"3",value:"community",icon:e.jsx(m,{}),label:"Join the Community",hideSelection:!0,useSwitch:!1},{id:"4",value:"rateus",icon:e.jsx(p,{}),label:"Rate Us",hideSelection:!0,useSwitch:!1}],f=l=>e.jsxs(a,{...l,containerType:"flex",direction:"column",className:"w-96 border border-solid rounded-xl border-border-subtle p-4",gap:"xs",children:[e.jsx(a.Item,{className:"md:w-full lg:w-full p-1",children:e.jsx(s,{className:"font-semibold",children:"Quick Access"})}),e.jsx(a.Item,{className:"flex flex-col md:w-full lg:w-full bg-field-primary-background gap-1 p-1 rounded-lg",children:x.map(n=>e.jsx("div",{className:"p-2 gap-1 items-center bg-background-primary rounded-md shadow-soft-shadow-inner",children:e.jsxs(a,{containerType:"flex",direction:"row",className:"gap-1 p-1",align:"center",children:[e.jsx(a.Item,{className:"flex",children:n.icon}),e.jsx(a.Item,{className:"flex",children:e.jsx("a",{href:"#",className:"no-underline hover:underline hover:text-field-label",children:e.jsx(s,{className:"py-0 px-1 font-normal cursor-pointer",children:n.label})})}),n.bagde?e.jsx(a.Item,{children:n.bagde}):null]},n.id)},n.id))})]}),r=f.bind({});var o,t,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`(args: Template3Props) => {
  return <Container {...args} containerType="flex" direction="column" className="w-96 border border-solid rounded-xl border-border-subtle p-4" gap="xs">
            <Container.Item className="md:w-full lg:w-full p-1">
                <Label className="font-semibold">Quick Access</Label>
            </Container.Item>
            <Container.Item className="flex flex-col md:w-full lg:w-full bg-field-primary-background gap-1 p-1 rounded-lg">
                {containerRowButtons.map(button => <div key={button.id} className="p-2 gap-1 items-center bg-background-primary rounded-md shadow-soft-shadow-inner">
                        <Container key={button.id} containerType="flex" direction="row" className="gap-1 p-1" align="center">
                            <Container.Item className="flex">
                                {button.icon}
                            </Container.Item>
                            <Container.Item className="flex">
                                <a href="#" className="no-underline hover:underline hover:text-field-label">
                                    <Label className="py-0 px-1 font-normal cursor-pointer">
                                        {button.label}
                                    </Label>
                                </a>
                            </Container.Item>
                            {button.bagde ? <Container.Item>{button.bagde}</Container.Item> : null}
                        </Container>
                    </div>)}
            </Container.Item>
        </Container>;
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const L=["ListBlocks"];export{r as ListBlocks,L as __namedExportsOrder,k as default};
