import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as T}from"./index-ClcD9ViR.js";import{T as i}from"./tooltip-A7E8ZG3D.js";import{L as y}from"./label-D4p9IGVl.js";import{B as j}from"./button-CgINCcmo.js";import{C as x}from"./circle-help-Cp_v9ZhW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./floating-ui.react-DEvApr_e.js";import"./index-ZuzByk-F.js";import"./functions-D_VlAfUZ.js";import"./utils-BXkLUWnZ.js";import"./info-CABwj-1_.js";import"./createLucideIcon-9-bnJYrk.js";import"./check-D2eNpWXB.js";const B={title:"Molecules/Tooltip",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select"},placement:{control:"select"},strategy:{control:"select"},children:{control:!1},content:{control:!1}}},v=t=>{const[o,h]=T.useState(!1);return e.jsx(i,{...t,open:t.open??o,setOpen:t.open?h:void 0,children:e.jsx(x,{className:"cursor-pointer"})})},a=v.bind({});a.args={variant:"dark",placement:"bottom",title:"Tooltip",content:e.jsx("span",{children:"This is custom JSX content."}),arrow:!0,triggers:["hover","focus"],interactive:!1};const r=t=>e.jsx("div",{style:{display:"grid",gap:"10px",justifyContent:"center",padding:"20px"},children:["top","bottom","left","right"].map(o=>e.jsx(i,{...t,placement:o,children:e.jsx(x,{className:"cursor-pointer"})},o))});r.args={variant:"dark",title:"Tooltip",content:"Simple description.",arrow:!0};const s=t=>e.jsx("div",{style:{display:"grid",gap:"10px",justifyContent:"center",padding:"20px"},children:["top","bottom","left","right"].map(o=>e.jsx(i,{...t,placement:o,children:e.jsx(y,{size:"md",className:"cursor-pointer",children:"Label"})},o))});s.args={variant:"dark",title:"Tooltip",content:e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{children:"Tooltips provide extra information for elements."}),e.jsx(j,{variant:"primary",size:"sm",className:"w-full mt-2",children:"Upgrade now"})]}),interactive:!0,arrow:!0};r.__docgenInfo={description:"",methods:[],displayName:"TooltipWithIcon"};s.__docgenInfo={description:"",methods:[],displayName:"TooltipWithLabel"};var p,n,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <Tooltip {...args} open={args.open ?? isOpen} setOpen={args.open ? setIsOpen : undefined}>
            <CircleHelp className="cursor-pointer" />
        </Tooltip>;
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => <div style={{
  display: 'grid',
  gap: '10px',
  justifyContent: 'center',
  padding: '20px'
}}>
        {(['top', 'bottom', 'left', 'right'] as const).map(placement => <Tooltip key={placement} {...args} placement={placement}>
                <CircleHelp className="cursor-pointer" />
            </Tooltip>)}
    </div>`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div style={{
  display: 'grid',
  gap: '10px',
  justifyContent: 'center',
  padding: '20px'
}}>
        {(['top', 'bottom', 'left', 'right'] as const).map(placement => <Tooltip key={placement} {...args} placement={placement}>
                <Label size="md" className="cursor-pointer">
                    Label
                </Label>
            </Tooltip>)}
    </div>`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const D=["DefaultTooltip","TooltipWithIcon","TooltipWithLabel"];export{a as DefaultTooltip,r as TooltipWithIcon,s as TooltipWithLabel,D as __namedExportsOrder,B as default};
