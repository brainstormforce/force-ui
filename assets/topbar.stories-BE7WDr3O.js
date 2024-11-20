import{j as a}from"./jsx-runtime-CfatFE5O.js";import{B as M}from"./button-CgINCcmo.js";import{B as L}from"./badge-yuBkyoYk.js";import{A as x,U as C}from"./avatar-B8_OD95I.js";import{T as e}from"./topbar-DtySoa-G.js";import{A as u}from"./arrow-up-right-C_vyprBS.js";import{C as w}from"./circle-help-Cp_v9ZhW.js";import{M as H}from"./megaphone-DqHlcorR.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./x-DyQPfKin.js";import"./createLucideIcon-9-bnJYrk.js";const y={title:"Organisms/Topbar",component:e,subcomponents:{"Topbar.Left":e.Left,"Topbar.Middle":e.Middle,"Topbar.Right":e.Right,"Topbar.Item":e.Item},parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{gap:{control:{type:"select"}},children:{control:!1}}},p=o=>a.jsxs(e,{gap:o.gap,children:[a.jsx(e.Left,{gap:o.topbarLeftGap,children:a.jsx(e.Item,{children:a.jsx("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z",fill:"#0D7EE8"})})})}),a.jsxs(e.Middle,{align:o.topbarMiddleAlign,gap:o.topbarMiddleGap,children:[a.jsx(e.Item,{children:a.jsxs("div",{className:"flex gap-2",children:[a.jsx("div",{children:"Nav Item 1"}),a.jsx("div",{children:"Nav Item 2"}),a.jsx("div",{children:"Nav Item 3"})]})}),a.jsx(e.Item,{children:a.jsx(M,{variant:"ghost",icon:a.jsx(u,{}),iconPosition:"right",children:"Upgrade to Pro"})})]}),a.jsxs(e.Right,{gap:o.topbarRightGap,children:[a.jsx(e.Item,{children:a.jsx(L,{label:"V 0.0 2",size:"xs",variant:"neutral",closable:!1})}),a.jsxs(e.Item,{className:"gap-2",children:[a.jsx(w,{}),a.jsx(H,{})]}),a.jsx(e.Item,{children:a.jsx(x,{size:"sm",border:"ring",children:a.jsx(C,{})})})]})]}),i=p.bind({}),r=p.bind({});r.args={topbarMiddleAlign:"center"};r.storyName="Topbar with Center-Aligned Middle Section";const t=p.bind({});t.args={topbarMiddleAlign:"left"};t.storyName="Topbar with Left-Aligned Middle Section";const n=p.bind({});n.args={topbarMiddleAlign:"right"};n.storyName="Topbar with Right-Aligned Middle Section";var s,l,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`args => <Topbar gap={args.gap}>
        <Topbar.Left gap={args.topbarLeftGap}>
            <Topbar.Item>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z" fill="#0D7EE8" />
                </svg>
            </Topbar.Item>
        </Topbar.Left>

        <Topbar.Middle align={args.topbarMiddleAlign} gap={args.topbarMiddleGap}>
            <Topbar.Item>
                <div className="flex gap-2">
                    <div>Nav Item 1</div>
                    <div>Nav Item 2</div>
                    <div>Nav Item 3</div>
                </div>
            </Topbar.Item>
            <Topbar.Item>
                <Button variant="ghost" icon={<ArrowUpRight />} iconPosition="right">
                    Upgrade to Pro
                </Button>
            </Topbar.Item>
        </Topbar.Middle>

        <Topbar.Right gap={args.topbarRightGap}>
            <Topbar.Item>
                <Badge label="V 0.0 2" size="xs" variant="neutral" closable={false} />
            </Topbar.Item>
            <Topbar.Item className="gap-2">
                <CircleHelp />
                <Megaphone />
            </Topbar.Item>
            <Topbar.Item>
                <Avatar size="sm" border="ring">
                    <User />
                </Avatar>
            </Topbar.Item>
        </Topbar.Right>
    </Topbar>`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,m,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => <Topbar gap={args.gap}>
        <Topbar.Left gap={args.topbarLeftGap}>
            <Topbar.Item>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z" fill="#0D7EE8" />
                </svg>
            </Topbar.Item>
        </Topbar.Left>

        <Topbar.Middle align={args.topbarMiddleAlign} gap={args.topbarMiddleGap}>
            <Topbar.Item>
                <div className="flex gap-2">
                    <div>Nav Item 1</div>
                    <div>Nav Item 2</div>
                    <div>Nav Item 3</div>
                </div>
            </Topbar.Item>
            <Topbar.Item>
                <Button variant="ghost" icon={<ArrowUpRight />} iconPosition="right">
                    Upgrade to Pro
                </Button>
            </Topbar.Item>
        </Topbar.Middle>

        <Topbar.Right gap={args.topbarRightGap}>
            <Topbar.Item>
                <Badge label="V 0.0 2" size="xs" variant="neutral" closable={false} />
            </Topbar.Item>
            <Topbar.Item className="gap-2">
                <CircleHelp />
                <Megaphone />
            </Topbar.Item>
            <Topbar.Item>
                <Avatar size="sm" border="ring">
                    <User />
                </Avatar>
            </Topbar.Item>
        </Topbar.Right>
    </Topbar>`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,c,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => <Topbar gap={args.gap}>
        <Topbar.Left gap={args.topbarLeftGap}>
            <Topbar.Item>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z" fill="#0D7EE8" />
                </svg>
            </Topbar.Item>
        </Topbar.Left>

        <Topbar.Middle align={args.topbarMiddleAlign} gap={args.topbarMiddleGap}>
            <Topbar.Item>
                <div className="flex gap-2">
                    <div>Nav Item 1</div>
                    <div>Nav Item 2</div>
                    <div>Nav Item 3</div>
                </div>
            </Topbar.Item>
            <Topbar.Item>
                <Button variant="ghost" icon={<ArrowUpRight />} iconPosition="right">
                    Upgrade to Pro
                </Button>
            </Topbar.Item>
        </Topbar.Middle>

        <Topbar.Right gap={args.topbarRightGap}>
            <Topbar.Item>
                <Badge label="V 0.0 2" size="xs" variant="neutral" closable={false} />
            </Topbar.Item>
            <Topbar.Item className="gap-2">
                <CircleHelp />
                <Megaphone />
            </Topbar.Item>
            <Topbar.Item>
                <Avatar size="sm" border="ring">
                    <User />
                </Avatar>
            </Topbar.Item>
        </Topbar.Right>
    </Topbar>`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var T,I,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => <Topbar gap={args.gap}>
        <Topbar.Left gap={args.topbarLeftGap}>
            <Topbar.Item>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z" fill="#0D7EE8" />
                </svg>
            </Topbar.Item>
        </Topbar.Left>

        <Topbar.Middle align={args.topbarMiddleAlign} gap={args.topbarMiddleGap}>
            <Topbar.Item>
                <div className="flex gap-2">
                    <div>Nav Item 1</div>
                    <div>Nav Item 2</div>
                    <div>Nav Item 3</div>
                </div>
            </Topbar.Item>
            <Topbar.Item>
                <Button variant="ghost" icon={<ArrowUpRight />} iconPosition="right">
                    Upgrade to Pro
                </Button>
            </Topbar.Item>
        </Topbar.Middle>

        <Topbar.Right gap={args.topbarRightGap}>
            <Topbar.Item>
                <Badge label="V 0.0 2" size="xs" variant="neutral" closable={false} />
            </Topbar.Item>
            <Topbar.Item className="gap-2">
                <CircleHelp />
                <Megaphone />
            </Topbar.Item>
            <Topbar.Item>
                <Avatar size="sm" border="ring">
                    <User />
                </Avatar>
            </Topbar.Item>
        </Topbar.Right>
    </Topbar>`,...(f=(I=n.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const W=["Default","WithMiddleAlignment","WithLeftAlignment","WithRightAlignment"];export{i as Default,t as WithLeftAlignment,r as WithMiddleAlignment,n as WithRightAlignment,W as __namedExportsOrder,y as default};
