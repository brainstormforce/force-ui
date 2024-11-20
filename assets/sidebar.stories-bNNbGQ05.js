import{j as e}from"./jsx-runtime-CfatFE5O.js";import{S as s}from"./sidebar-C6q1ipwA.js";import{B as g}from"./button-CgINCcmo.js";import{r as u}from"./index-ClcD9ViR.js";import{S as x,a as h,b as S,T as f,C}from"./truck-DDHB8os9.js";import{P as j}from"./pen-tool-b7bhHU3H.js";import{T as v,R as z}from"./tag-10QZTyHX.js";import{M as y,C as N}from"./mouse-pointer-kbNb_Ads.js";import"./functions-D_VlAfUZ.js";import"./tooltip-A7E8ZG3D.js";import"./floating-ui.react-DEvApr_e.js";import"./index-ZuzByk-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BXkLUWnZ.js";import"./info-CABwj-1_.js";import"./createLucideIcon-9-bnJYrk.js";import"./check-D2eNpWXB.js";import"./panel-left-close-fvU0ez36.js";const G={title:"Organisms/Sidebar",component:s,parameters:{layout:"left"},tags:["autodocs"],argTypes:{children:{control:!1}},subcomponents:{"Sidebar.Header":s.Header,"Sidebar.Body":s.Body,"Sidebar.Footer":s.Footer,"Sidebar.Item":s.Item}},I=d=>{const c=[{heading:"Store",items:[{icon:e.jsx(x,{size:20}),label:"Store Settings"},{icon:e.jsx(j,{size:20}),label:"Design & Branding",disabled:!0}]},{heading:"Orders & Sales",items:[{icon:e.jsx(h,{size:20}),label:"Orders & Receipts"},{icon:e.jsx(S,{size:20}),label:"Abandoned Checkout",active:!0},{icon:e.jsx(v,{size:20}),label:"Taxes"},{icon:e.jsx(f,{size:20}),label:"Shipping"},{icon:e.jsx(C,{size:20}),label:"Payment Processors"}]},{heading:"Customers",items:[{icon:e.jsx(y,{size:20}),label:"Affiliates"},{icon:e.jsx(z,{size:20}),label:"Subscriptions"},{icon:e.jsx(N,{size:20}),label:"Subscriptions Saver"}]}],[a,m]=u.useState(!1);return e.jsxs(s,{...d,onCollapseChange:r=>{m(r)},children:[e.jsx(s.Header,{children:e.jsx(s.Item,{className:a?"flex justify-center":"",children:e.jsx("img",{width:a?"auto":"180px",height:a?"24px":"auto",alt:"Logo",src:a?"https://avatars.githubusercontent.com/u/4979824?s=200&v=4":"https://wordpress.org/five-for-the-future/files/2019/09/bsf-logo-.png"})})}),e.jsx(s.Body,{children:e.jsx(s.Item,{children:e.jsx("div",{className:"flex flex-col gap-6",children:c.map((r,p)=>e.jsxs("div",{children:[e.jsx("p",{className:"text-text-tertiary p-1 m-0",children:!a&&r.heading}),e.jsx("div",{className:"gap-0.5",children:r.items.map((t,b)=>e.jsxs("div",{className:`p-1 flex items-center gap-1 cursor-pointer rounded-md hover:bg-slate-100 text-text-secondary ${a?"justify-center":""}`,children:[e.jsx("span",{className:"[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 h-8",children:t.icon}),!a&&e.jsx("span",{className:"text-base",children:t.label})]},b))})]},p))})})}),e.jsx(s.Footer,{children:e.jsx(s.Item,{children:e.jsx(g,{className:"w-full",children:a?"Pro":"Pro Version"})})})]})},i=I.bind({});i.args={collapsible:!0};var o,l,n;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const menuData = [{
    heading: 'Store',
    items: [{
      icon: <Store size={20} />,
      label: 'Store Settings'
    }, {
      icon: <PenTool size={20} />,
      label: 'Design & Branding',
      disabled: true
    }]
  }, {
    heading: 'Orders & Sales',
    items: [{
      icon: <ShoppingBag size={20} />,
      label: 'Orders & Receipts'
    }, {
      icon: <ShoppingCart size={20} />,
      label: 'Abandoned Checkout',
      active: true
    }, {
      icon: <Tag size={20} />,
      label: 'Taxes'
    }, {
      icon: <Truck size={20} />,
      label: 'Shipping'
    }, {
      icon: <CreditCard size={20} />,
      label: 'Payment Processors'
    }]
  }, {
    heading: 'Customers',
    items: [{
      icon: <MousePointer size={20} />,
      label: 'Affiliates'
    }, {
      icon: <RefreshCcw size={20} />,
      label: 'Subscriptions'
    }, {
      icon: <ChartNoAxesColumnIncreasing size={20} />,
      label: 'Subscriptions Saver'
    }]
  }];
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return <Sidebar {...args} onCollapseChange={isCollapsed => {
    setSidebarCollapsed(isCollapsed);
  }}>
            <Sidebar.Header>
                <Sidebar.Item className={sidebarCollapsed ? 'flex justify-center' : ''}>
                    <img width={sidebarCollapsed ? 'auto' : '180px'} height={sidebarCollapsed ? '24px' : 'auto'} alt="Logo" src={sidebarCollapsed ? 'https://avatars.githubusercontent.com/u/4979824?s=200&v=4' : 'https://wordpress.org/five-for-the-future/files/2019/09/bsf-logo-.png'} />
                </Sidebar.Item>
            </Sidebar.Header>
            <Sidebar.Body>
                <Sidebar.Item>
                    <div className="flex flex-col gap-6">
                        {menuData.map((section, sectionIndex) => <div key={sectionIndex}>
                                <p className="text-text-tertiary p-1 m-0">
                                    {!sidebarCollapsed && section.heading}
                                </p>
                                <div className="gap-0.5">
                                    {section.items.map((item, itemIndex) => <div key={itemIndex} className={\`p-1 flex items-center gap-1 cursor-pointer rounded-md hover:bg-slate-100 text-text-secondary \${sidebarCollapsed ? 'justify-center' : ''}\`}>
                                            <span className="[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 h-8">
                                                {item.icon}
                                            </span>
                                            {!sidebarCollapsed && <span className="text-base">
                                                    {item.label}
                                                </span>}
                                        </div>)}
                                </div>
                            </div>)}
                    </div>
                </Sidebar.Item>
            </Sidebar.Body>
            <Sidebar.Footer>
                <Sidebar.Item>
                    <Button className="w-full">
                        {sidebarCollapsed ? 'Pro' : 'Pro Version'}
                    </Button>
                </Sidebar.Item>
            </Sidebar.Footer>
        </Sidebar>;
}`,...(n=(l=i.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const J=["SimpleSidebar"];export{i as SimpleSidebar,J as __namedExportsOrder,G as default};
