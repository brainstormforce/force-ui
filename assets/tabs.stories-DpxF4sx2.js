import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as E}from"./index-ClcD9ViR.js";import{T as e}from"./tabs-BreO_8f9.js";import{H as n}from"./house-B3L_x2Y5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./proxy-BrM9YEId.js";import"./createLucideIcon-9-bnJYrk.js";const J={title:"Atoms/Tabs",component:e.Group,subcomponents:{"Tabs.Tab":e.Tab,Tabs:e,"Tabs.Panel":e.Panel},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select"},variant:{control:"select"},orientation:{control:"select"},width:{control:"select"},iconPosition:{control:"select"},children:{control:!1}}},r=t=>{const[d,T]=E.useState((t==null?void 0:t.activeItem)??"tab1"),m=({event:p,value:s})=>{const g=s.slug;g&&(T(g),typeof t.onChange=="function"&&t.onChange({event:p,value:s}))};return a.jsxs(e.Group,{...t,activeItem:d,onChange:m,children:[a.jsx(e.Tab,{slug:"tab1",text:"Tab 1",icon:a.jsx(n,{})}),a.jsx(e.Tab,{slug:"tab2",text:"Tab 2",icon:a.jsx(n,{})}),a.jsx(e.Tab,{slug:"tab3",text:"Tab 3",icon:a.jsx(n,{})})]})},o=r.bind({});o.args={size:"sm",variant:"pill",orientation:"horizontal",width:"auto",iconPosition:"left",activeItem:"tab1"};const c={args:{size:"sm",variant:"pill",orientation:"horizontal",width:"auto",iconPosition:"left",activeItem:"tab1"},render:r},l={args:{size:"md",variant:"rounded",orientation:"horizontal",width:"auto",iconPosition:"left",activeItem:"tab2"},render:r},b={args:{size:"lg",variant:"underline",orientation:"vertical",width:"full",iconPosition:"right",activeItem:"tab2"},render:r},u={args:{size:"sm",variant:"pill",orientation:"horizontal",width:"auto",iconPosition:"right",activeItem:"tab3"},render:r},i=t=>{const[d,T]=E.useState("tab1"),m=({value:p})=>{const s=p.slug;s&&T(s)};return a.jsxs(e,{...t,activeItem:d,children:[a.jsxs(e.Group,{onChange:m,children:[a.jsx(e.Tab,{slug:"tab1",text:"Tab 1",icon:a.jsx(n,{})}),a.jsx(e.Tab,{slug:"tab2",text:"Tab 2",icon:a.jsx(n,{})}),a.jsx(e.Tab,{slug:"tab3",text:"Tab 3",icon:a.jsx(n,{})})]}),a.jsxs("div",{className:"my-5 p-5 rounded-md bg-slate-100 shadow-md",children:[a.jsx(e.Panel,{slug:"tab1",children:a.jsx("p",{children:"Tab 1 content"})}),a.jsx(e.Panel,{slug:"tab2",children:a.jsx("p",{children:"Tab 2 content"})}),a.jsx(e.Panel,{slug:"tab3",children:a.jsx("p",{children:"Tab 3 content"})})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"TabsWithPanel"};var h,v,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [activeTab, setActiveTab] = useState(args?.activeItem ?? 'tab1');
  const handleTabChange: TabsGroupProps['onChange'] = ({
    event,
    value
  }) => {
    const activeSlugName = value.slug;
    if (activeSlugName) {
      setActiveTab(activeSlugName);
      if (typeof args.onChange === 'function') {
        args.onChange({
          event,
          value
        });
      }
    }
  };
  return <Tabs.Group {...args} activeItem={activeTab} onChange={handleTabChange}>
            <Tabs.Tab slug="tab1" text="Tab 1" icon={<House />} />
            <Tabs.Tab slug="tab2" text="Tab 2" icon={<House />} />
            <Tabs.Tab slug="tab3" text="Tab 3" icon={<House />} />
        </Tabs.Group>;
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,P,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'pill',
    orientation: 'horizontal',
    width: 'auto',
    iconPosition: 'left',
    activeItem: 'tab1'
  },
  render: Template
}`,...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var C,I,z;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'rounded',
    orientation: 'horizontal',
    width: 'auto',
    iconPosition: 'left',
    activeItem: 'tab2'
  },
  render: Template
}`,...(z=(I=l.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var S,w,G;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'underline',
    orientation: 'vertical',
    width: 'full',
    iconPosition: 'right',
    activeItem: 'tab2'
  },
  render: Template
}`,...(G=(w=b.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var H,y,A;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'pill',
    orientation: 'horizontal',
    width: 'auto',
    iconPosition: 'right',
    activeItem: 'tab3'
  },
  render: Template
}`,...(A=(y=u.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var N,W,_;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabChange: TabsGroupProps['onChange'] = ({
    value
  }) => {
    const selectedTab = value.slug;
    if (selectedTab) {
      setActiveTab(selectedTab);
    }
  };
  return <Tabs {...args} activeItem={activeTab}>
            <Tabs.Group onChange={handleTabChange}>
                <Tabs.Tab slug="tab1" text="Tab 1" icon={<House />} />
                <Tabs.Tab slug="tab2" text="Tab 2" icon={<House />} />
                <Tabs.Tab slug="tab3" text="Tab 3" icon={<House />} />
            </Tabs.Group>
            <div className="my-5 p-5 rounded-md bg-slate-100 shadow-md">
                <Tabs.Panel slug="tab1">
                    <p>Tab 1 content</p>
                </Tabs.Panel>
                <Tabs.Panel slug="tab2">
                    <p>Tab 2 content</p>
                </Tabs.Panel>
                <Tabs.Panel slug="tab3">
                    <p>Tab 3 content</p>
                </Tabs.Panel>
            </div>
        </Tabs>;
}`,...(_=(W=i.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const K=["Default","Basic","Rounded","Vertical","WithCustomIcons","TabsWithPanel"];export{c as Basic,o as Default,l as Rounded,i as TabsWithPanel,b as Vertical,u as WithCustomIcons,K as __namedExportsOrder,J as default};
