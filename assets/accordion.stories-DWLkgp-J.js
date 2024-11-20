import{j as e}from"./jsx-runtime-CfatFE5O.js";import{A as o}from"./accordion-CvDF7LCb.js";import{B as a}from"./badge-yuBkyoYk.js";import{S as t}from"./settings-BI_I5vCr.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./index-CH97fFM0.js";import"./proxy-BrM9YEId.js";import"./chevron-down-C437CSEq.js";import"./createLucideIcon-9-bnJYrk.js";import"./minus-2x63mxhm.js";import"./plus-BaMJlyku.js";import"./x-DyQPfKin.js";const _={title:"Molecules/Accordion",component:o,parameters:{layout:"centered"},tags:["autodocs"],subcomponents:{Item:o.Item,Trigger:o.Trigger,Content:o.Content},decorators:[n=>e.jsx("div",{className:"w-[450px]",children:e.jsx(n,{})})],argTypes:{type:{control:{type:"select"}},iconType:{control:{type:"select"}}}},b=n=>e.jsxs(o,{...n,className:n.className,children:[e.jsxs(o.Item,{value:"item1",children:[e.jsx(o.Trigger,{iconType:n.iconType,children:"Accordion Item"}),e.jsx(o.Content,{children:"Yes, Force UI is an open-source project, copyright 2022."})]}),e.jsxs(o.Item,{value:"item2",disabled:n.itemDisabled,children:[e.jsx(o.Trigger,{iconType:n.iconType,children:"Accordion Item"}),e.jsx(o.Content,{children:"Yes, Force UI is an open-source project, copyright 2022."})]}),e.jsxs(o.Item,{value:"item3",disabled:n.disabled,className:n.accordionItemclassName,children:[e.jsx(o.Trigger,{iconType:n.iconType,children:"Accordion Item"}),e.jsx(o.Content,{children:"Yes, Force UI is an open-source project, copyright 2022."})]})]}),c=b.bind({});c.args={autoClose:!1,type:"simple",iconType:"arrow",defaultValue:"item1",disabled:!1,className:""};const d=n=>e.jsxs(o,{...n,className:n.className,children:[e.jsxs(o.Item,{value:"item1",children:[e.jsxs(o.Trigger,{iconType:n.iconType,children:[e.jsx(t,{className:"flex-shrink-0 size-5 text-icon-secondary"}),"Accordion Item",e.jsx(a,{label:"Badge",size:"xs",variant:"neutral"})]}),e.jsx(o.Content,{children:"Yes, Force UI is an open-source project, copyright 2022."})]}),e.jsxs(o.Item,{value:"item2",disabled:n.itemDisabled,children:[e.jsxs(o.Trigger,{iconType:n.iconType,children:[e.jsx(t,{className:"flex-shrink-0 size-5 text-icon-secondary"}),"Accordion Item",e.jsx(a,{label:"Badge",size:"xs",variant:"neutral"})]}),e.jsx(o.Content,{children:"Yes, Force UI is an open-source project, copyright 2022."})]}),e.jsxs(o.Item,{value:"item3",disabled:n.disabled,className:n.accordionItemclassName,children:[e.jsxs(o.Trigger,{iconType:n.iconType,children:[e.jsx(t,{className:"flex-shrink-0 size-5 text-icon-secondary"}),"Accordion Item",e.jsx(a,{label:"Badge",size:"xs",variant:"neutral"})]}),e.jsx(o.Content,{children:"Yes, Force UI is an open-source project, copyright 2022."})]})]}),r=d.bind({});r.args={autoClose:!1,type:"simple",iconType:"arrow",defaultValue:"item1",disabled:!1,className:""};const i=d.bind({});i.args={autoClose:!0,type:"boxed",iconType:"plus-minus",defaultValue:"item2",disabled:!1,className:""};const s=d.bind({});s.args={autoClose:!0,type:"separator",iconType:"arrow",defaultValue:"item3",disabled:!1,className:""};var l,m,p;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Accordion {...args} className={args.className}>
        <Accordion.Item value="item1">
            <Accordion.Trigger iconType={args.iconType}>
                Accordion Item
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item2" disabled={args.itemDisabled}>
            <Accordion.Trigger iconType={args.iconType}>
                Accordion Item
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item3" disabled={args.disabled} className={args.accordionItemclassName}>
            <Accordion.Trigger iconType={args.iconType}>
                Accordion Item
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
    </Accordion>`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,A,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => <Accordion {...args} className={args.className}>
        <Accordion.Item value="item1">
            <Accordion.Trigger iconType={args.iconType}>
                <Settings className="flex-shrink-0 size-5 text-icon-secondary" />
                Accordion Item
                <Badge label="Badge" size="xs" variant="neutral" />
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item2" disabled={args.itemDisabled}>
            <Accordion.Trigger iconType={args.iconType}>
                <Settings className="flex-shrink-0 size-5 text-icon-secondary" />
                Accordion Item
                <Badge label="Badge" size="xs" variant="neutral" />
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item3" disabled={args.disabled} className={args.accordionItemclassName}>
            <Accordion.Trigger iconType={args.iconType}>
                <Settings className="flex-shrink-0 size-5 text-icon-secondary" />
                Accordion Item
                <Badge label="Badge" size="xs" variant="neutral" />
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
    </Accordion>`,...(u=(A=r.parameters)==null?void 0:A.docs)==null?void 0:u.source}}};var y,T,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => <Accordion {...args} className={args.className}>
        <Accordion.Item value="item1">
            <Accordion.Trigger iconType={args.iconType}>
                <Settings className="flex-shrink-0 size-5 text-icon-secondary" />
                Accordion Item
                <Badge label="Badge" size="xs" variant="neutral" />
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item2" disabled={args.itemDisabled}>
            <Accordion.Trigger iconType={args.iconType}>
                <Settings className="flex-shrink-0 size-5 text-icon-secondary" />
                Accordion Item
                <Badge label="Badge" size="xs" variant="neutral" />
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item3" disabled={args.disabled} className={args.accordionItemclassName}>
            <Accordion.Trigger iconType={args.iconType}>
                <Settings className="flex-shrink-0 size-5 text-icon-secondary" />
                Accordion Item
                <Badge label="Badge" size="xs" variant="neutral" />
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
    </Accordion>`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var x,h,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Accordion {...args} className={args.className}>
        <Accordion.Item value="item1">
            <Accordion.Trigger iconType={args.iconType}>
                <Settings className="flex-shrink-0 size-5 text-icon-secondary" />
                Accordion Item
                <Badge label="Badge" size="xs" variant="neutral" />
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item2" disabled={args.itemDisabled}>
            <Accordion.Trigger iconType={args.iconType}>
                <Settings className="flex-shrink-0 size-5 text-icon-secondary" />
                Accordion Item
                <Badge label="Badge" size="xs" variant="neutral" />
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item3" disabled={args.disabled} className={args.accordionItemclassName}>
            <Accordion.Trigger iconType={args.iconType}>
                <Settings className="flex-shrink-0 size-5 text-icon-secondary" />
                Accordion Item
                <Badge label="Badge" size="xs" variant="neutral" />
            </Accordion.Trigger>
            <Accordion.Content>
                Yes, Force UI is an open-source project, copyright 2022.
            </Accordion.Content>
        </Accordion.Item>
    </Accordion>`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const E=["BasicAccordion","SimpleAccordion","BoxedAccordion","SeparatorAccordion"];export{c as BasicAccordion,i as BoxedAccordion,s as SeparatorAccordion,r as SimpleAccordion,E as __namedExportsOrder,_ as default};
