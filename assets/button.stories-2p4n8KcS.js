import{j as z}from"./jsx-runtime-CfatFE5O.js";import{B as G}from"./button-CgINCcmo.js";import{w as O,e as r,u as A}from"./index-K2iIJPr3.js";import{P as F}from"./plus-BaMJlyku.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./createLucideIcon-9-bnJYrk.js";const U={title:"Atoms/Button",component:G,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select"},size:{control:"select"},type:{control:"select"},iconPosition:{control:"select"}}},e=async({canvasElement:u})=>{const s=O(u),a=await s.findByRole("button");await r(a).toHaveTextContent("Button"),await r(a).toContainElement(s.getByRole("img")),await A.click(a),await r(a).toHaveFocus()},L=async({canvasElement:u})=>{const s=O(u),a=await s.findByRole("button");await r(a).toHaveTextContent("Button"),await r(a).toContainElement(s.getByRole("img")),await r(a).toHaveAttribute("disabled"),await A.click(a),await r(a).not.toHaveFocus()},o={args:{children:"Button",variant:"primary",size:"md",type:"button",tag:"button",className:"",disabled:!1,destructive:!1,iconPosition:"left",loading:!1,icon:z.jsx(F,{role:"img","aria-label":"icon"})},play:e},t={args:{variant:"primary",children:"Button",icon:z.jsx(F,{role:"img","aria-label":"icon"}),iconPosition:"left"},play:e},n={args:{...t.args,disabled:!0},play:L},i={args:{...t.args,variant:"secondary"},play:e},c={args:{...t.args,variant:"ghost"},play:e},l={args:{...t.args,variant:"outline"},play:e},m={args:{...t.args,variant:"link"},play:e};var p,d,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'button',
    tag: 'button',
    className: '',
    disabled: false,
    destructive: false,
    iconPosition: 'left',
    loading: false,
    icon: <Plus role="img" aria-label="icon" />
  },
  play: buttonTest
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var y,b,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button',
    icon: <Plus role="img" aria-label="icon" />,
    iconPosition: 'left'
  },
  play: buttonTest
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,P,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  },
  play: disabledButtonTest
}`,...(B=(P=n.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var w,T,h;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  },
  play: buttonTest
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var x,S,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'ghost'
  },
  play: buttonTest
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var E,H,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'outline'
  },
  play: buttonTest
}`,...(R=(H=l.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var j,C,D;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'link'
  },
  play: buttonTest
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const V=["Default","Primary","Disabled","Secondary","Ghost","Outline","Link"];export{o as Default,n as Disabled,c as Ghost,m as Link,l as Outline,t as Primary,i as Secondary,V as __namedExportsOrder,U as default};
