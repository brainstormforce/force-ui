import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as n}from"./container-BNYZU-GH.js";import{B as i}from"./button-CgINCcmo.js";import{L as r}from"./label-D4p9IGVl.js";import{B as d}from"./badge-yuBkyoYk.js";import{A as c,S as p,a as u,P as g}from"./icons-Pmw3xJsu.js";import{A as x}from"./arrow-up-right-C_vyprBS.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./x-DyQPfKin.js";import"./createLucideIcon-9-bnJYrk.js";const L={title:"Organisms/Cards/Plugin Blocks",parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{width:"1100px",padding:"10px"},children:e.jsx(s,{})})]},b=[{id:"1",badgeText:"Free",buttonText:"Install",svg:e.jsx(c,{}),title:"Astra Theme",description:"Free WordPress Page Builder Plugin."},{id:"2",badgeText:"Free",buttonText:"Activate",svg:e.jsx(p,{}),title:"Starters Templates",description:"Build your dream website in minutes with AI."},{id:"3",badgeText:"Free",buttonText:"Install",svg:e.jsx(u,{}),title:"SureCart",description:"The new way to sell on WordPress."},{id:"4",badgeText:"Free",buttonText:"Install",svg:e.jsx(g,{}),title:"Presto Player",description:"Automate your WordPress setup."}],f=s=>e.jsxs(n,{...s,containerType:"flex",gap:"xs",direction:"column",className:"w-120 border border-solid rounded-md border-border-subtle p-4",children:[e.jsx(n.Item,{className:"md:w-full lg:w-full",children:e.jsxs(n,{className:"p-1",justify:"between",gap:"xs",align:"center",children:[e.jsx(n.Item,{children:e.jsx(r,{className:"font-semibold",children:"Extend Your Website"})}),e.jsx(n.Item,{className:"items-center",children:e.jsxs(i,{className:"p-0",variant:"ghost",children:[e.jsx(x,{}),e.jsx("span",{className:"sr-only",children:"View Details"})]})})]})}),e.jsx(n.Item,{className:"md:w-full lg:w-full bg-field-primary-background rounded-lg",children:e.jsx(n,{containerType:"grid",cols:2,className:"gap-1 p-1",children:b.map(a=>e.jsx(n.Item,{className:"md:w-full lg:w-full flex",children:e.jsxs(n,{containerType:"flex",direction:"column",className:"flex-1 gap-1 shadow-soft-shadow-inner p-2 rounded-md bg-background-primary",children:[e.jsx(n.Item,{children:e.jsxs(n,{className:"gap-1 items-center",children:[e.jsx(n.Item,{className:"&>svg]:size-5",grow:1,order:"none",shrink:1,children:a.svg}),e.jsx(n.Item,{children:e.jsx(d,{label:a.badgeText,icon:null,size:"xxs",variant:"green",closable:!1,className:"py-0"})}),e.jsx(n.Item,{children:e.jsx(i,{variant:"link",className:"p-0 text-link-primary",size:"sm",children:a.buttonText})})]})}),e.jsxs(n.Item,{className:"gap-0.5 p-1",children:[e.jsx(r,{className:"text-sm font-medium",children:a.title}),e.jsx(r,{variant:"help",className:"text-sm",children:a.description})]})]})},a.id))})})]}),t=f.bind({});var l,o,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`(args: Template2Props) => {
  return <Container {...args} containerType="flex" gap="xs" direction="column" className="w-120 border border-solid rounded-md border-border-subtle p-4">
            <Container.Item className="md:w-full lg:w-full">
                <Container className="p-1" justify="between" gap="xs" align="center">
                    <Container.Item>
                        <Label className="font-semibold">
                            Extend Your Website
                        </Label>
                    </Container.Item>
                    <Container.Item className="items-center">
                        <Button className="p-0" variant="ghost">
                            <ArrowUpRight />
                            <span className="sr-only">View Details</span>
                        </Button>
                    </Container.Item>
                </Container>
            </Container.Item>
            <Container.Item className="md:w-full lg:w-full bg-field-primary-background rounded-lg">
                <Container containerType="grid" cols={2} className="gap-1 p-1">
                    {astraRadioButtonGroupData.map(card => <Container.Item key={card.id} className="md:w-full lg:w-full flex">
                            <Container containerType="flex" direction="column" className="flex-1 gap-1 shadow-soft-shadow-inner p-2 rounded-md bg-background-primary">
                                <Container.Item>
                                    <Container className="gap-1 items-center">
                                        <Container.Item className="&>svg]:size-5" grow={1} order="none" shrink={1}>
                                            {card.svg}
                                        </Container.Item>
                                        <Container.Item>
                                            <Badge label={card.badgeText} icon={null} size="xxs" variant="green" closable={false} className="py-0" />
                                        </Container.Item>
                                        <Container.Item>
                                            <Button variant="link" className="p-0 text-link-primary" size="sm">
                                                {card.buttonText}
                                            </Button>
                                        </Container.Item>
                                    </Container>
                                </Container.Item>
                                <Container.Item className="gap-0.5 p-1">
                                    <Label className="text-sm font-medium">
                                        {card.title}
                                    </Label>
                                    <Label variant="help" className="text-sm">
                                        {card.description}
                                    </Label>
                                </Container.Item>
                            </Container>
                        </Container.Item>)}
                </Container>
            </Container.Item>
        </Container>;
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const A=["PluginBlocks"];export{t as PluginBlocks,A as __namedExportsOrder,L as default};
