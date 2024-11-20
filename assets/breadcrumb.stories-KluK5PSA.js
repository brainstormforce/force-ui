import{j as e}from"./jsx-runtime-CfatFE5O.js";import{B as r}from"./breadcrumb-BgQfnCma.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./chevron-right-CK9EFw-n.js";import"./createLucideIcon-9-bnJYrk.js";import"./ellipsis-Dia-pOBG.js";const S={title:"Atoms/Breadcrumb",component:r,subcomponents:{"Breadcrumb.List":r.List,"Breadcrumb.Item":r.Item,"Breadcrumb.Link":r.Link,"Breadcrumb.Separator":r.Separator,"Breadcrumb.Ellipsis":r.Ellipsis,"Breadcrumb.Page":r.Page},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"}},children:{control:!1}}},i=({separatorType:m,...p})=>e.jsx(r,{size:p.size,children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Home"})}),e.jsx(r.Separator,{type:m}),e.jsx(r.Item,{children:e.jsx(r.Ellipsis,{})}),e.jsx(r.Separator,{type:m}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Category"})}),e.jsx(r.Separator,{type:m}),e.jsx(r.Item,{children:e.jsx(r.Page,{children:"Current Page"})})]})}),t=i.bind({}),a=i.bind({});a.args={size:"md",separatorType:"slash"};var s,c,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
  separatorType,
  ...args
}) => <Breadcrumb size={args.size}>
        <Breadcrumb.List>
            <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator type={separatorType} />
            <Breadcrumb.Item>
                <Breadcrumb.Ellipsis />
            </Breadcrumb.Item>
            <Breadcrumb.Separator type={separatorType} />
            <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Category</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator type={separatorType} />
            <Breadcrumb.Item>
                <Breadcrumb.Page>Current Page</Breadcrumb.Page>
            </Breadcrumb.Item>
        </Breadcrumb.List>
    </Breadcrumb>`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var d,o,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  separatorType,
  ...args
}) => <Breadcrumb size={args.size}>
        <Breadcrumb.List>
            <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator type={separatorType} />
            <Breadcrumb.Item>
                <Breadcrumb.Ellipsis />
            </Breadcrumb.Item>
            <Breadcrumb.Separator type={separatorType} />
            <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Category</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator type={separatorType} />
            <Breadcrumb.Item>
                <Breadcrumb.Page>Current Page</Breadcrumb.Page>
            </Breadcrumb.Item>
        </Breadcrumb.List>
    </Breadcrumb>`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const x=["Default","MediumSizeWithSlashSeparator"];export{t as Default,a as MediumSizeWithSlashSeparator,x as __namedExportsOrder,S as default};
