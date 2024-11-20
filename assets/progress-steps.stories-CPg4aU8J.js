import{j as e}from"./jsx-runtime-CfatFE5O.js";import{P as r}from"./progress-steps-DWWsqr7G.js";import{C as j}from"./check-D2eNpWXB.js";import{H as b}from"./house-B3L_x2Y5.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./plus-BaMJlyku.js";import"./createLucideIcon-9-bnJYrk.js";r.Step.displayName="ProgressSteps.Step";const E={title:"Atoms/ProgressSteps",component:r,subcomponents:{"ProgressSteps.Step":r.Step},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select"},size:{control:"select"},type:{control:"select"},currentStep:{control:{type:"number",min:1,max:5}},children:{control:!1}},decorators:[p=>e.jsx("div",{style:{width:"700px",margin:"0 auto"},children:e.jsx(p,{})})]},o=p=>e.jsxs(r,{...p,children:[e.jsx(r.Step,{icon:e.jsx(b,{}),labelText:"Step 1",size:"md",children:"Step 1"}),e.jsx(r.Step,{labelText:"Step 2",size:"md",children:"Step 2"}),e.jsx(r.Step,{labelText:"Step 3",size:"md",children:"Step 3"}),e.jsx(r.Step,{labelText:"Step 4",size:"md",children:"Step 4"}),e.jsx(r.Step,{labelText:"Step 5",size:"md",children:"Step 5"})]}),t={args:{variant:"dot",size:"md",type:"inline",currentStep:2},render:o},n={args:{variant:"number",size:"md",type:"inline",currentStep:3},render:o},s={args:{variant:"icon",size:"md",type:"inline",currentStep:4,icon:e.jsx(j,{})},render:o},a={args:{variant:"dot",size:"md",type:"stack",currentStep:3},render:o};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    size: 'md',
    type: 'inline',
    currentStep: 2
  },
  render: Template
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,S;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'number',
    size: 'md',
    type: 'inline',
    currentStep: 3
  },
  render: Template
}`,...(S=(l=n.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    size: 'md',
    type: 'inline',
    currentStep: 4,
    icon: <Check />
  },
  render: Template
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,z,T;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    size: 'md',
    type: 'stack',
    currentStep: 3
  },
  render: Template
}`,...(T=(z=a.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const H=["Default","NumberVariant","IconVariant","StackType"];export{t as Default,s as IconVariant,n as NumberVariant,a as StackType,H as __namedExportsOrder,E as default};
