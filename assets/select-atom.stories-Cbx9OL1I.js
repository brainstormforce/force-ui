import{j as l}from"./jsx-runtime-CfatFE5O.js";import{S as t}from"./select-BiFcC5AA.js";import{w as v,u as s,s as p,e as c}from"./index-K2iIJPr3.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./floating-ui.react-DEvApr_e.js";import"./index-ZuzByk-F.js";import"./badge-yuBkyoYk.js";import"./x-DyQPfKin.js";import"./createLucideIcon-9-bnJYrk.js";import"./index.browser-DP16PUbO.js";import"./chevron-down-C437CSEq.js";import"./search-C4OpTwLZ.js";import"./check-D2eNpWXB.js";const h=[{id:"1",name:"Red"},{id:"2",name:"Orange"},{id:"3",name:"Yellow"},{id:"4",name:"Green"},{id:"5",name:"Cyan"},{id:"6",name:"Blue"},{id:"7",name:"Purple"},{id:"8",name:"Pink"}],$={title:"Atoms/Select",component:t,subcomponents:{"Select.Button":t.Button,"Select.Portal":t.Portal,"Select.Options":t.Options,"Select.Option":t.Option},parameters:{layout:"centered"},tags:["atoms","autodocs"],argTypes:{size:{control:"select"},children:{control:!1}}},r=({size:n,multiple:o,combobox:a,disabled:i})=>l.jsx("div",{style:{width:"300px"},children:l.jsxs(t,{size:n,multiple:o,combobox:a,disabled:i,onChange:e=>e,children:[l.jsx(t.Button,{placeholder:o?"Select multiple options":"Select an option",label:o?"Select Multiple Colors":"Select a Color"}),l.jsx(t.Portal,{children:l.jsx(t.Options,{children:h.map(e=>l.jsx(t.Option,{value:e,children:e.name},e.id))})})]},o)});r.args={size:"md",multiple:!1,combobox:!1,disabled:!1};r.play=async({canvasElement:n})=>{const a=await v(n).findByRole("combobox");await s.click(a);const i=await p.findByRole("listbox");c(i).toHaveTextContent("Red");const e=await p.findAllByRole("option");await s.click(e[0]),c(a).toHaveTextContent("Red")};const y=({size:n,multiple:o,combobox:a,disabled:i})=>l.jsx("div",{className:"w-full h-[200px]",children:l.jsxs(t,{size:n,multiple:o,combobox:a,disabled:i,onChange:e=>e,children:[l.jsx(t.Button,{placeholder:o?"Select multiple options":"Select an option",label:o?"Select Multiple Colors":"Select a Color"}),l.jsx(t.Options,{children:h.map(e=>l.jsx(t.Option,{value:e,children:e.name},e.id))})]})}),u=y.bind({});u.args={size:"md",multiple:!1,combobox:!1,disabled:!1};const d=({size:n,multiple:o,combobox:a,disabled:i})=>l.jsx("div",{style:{width:"300px"},children:l.jsxs(t,{size:n,multiple:o,combobox:a,disabled:i,onChange:e=>e,children:[l.jsx(t.Button,{placeholder:o?"Select multiple options":"Select an option",label:o?"Select Multiple Colors":"Select a Color"}),l.jsx(t.Portal,{children:l.jsx(t.Options,{children:h.map(e=>l.jsx(t.Option,{value:e,children:e.name},e.id))})})]})});d.args={size:"md",multiple:!0,combobox:!1,disabled:!1};d.play=async({canvasElement:n})=>{const a=await v(n).findByRole("combobox");await s.click(a);const i=await p.findByRole("listbox");c(i).toHaveTextContent("Red");const e=await p.findAllByRole("option");await s.click(e[0]),await s.click(a);const x=await p.findAllByRole("option");await s.click(x[1]),c(a).toHaveTextContent(/Red.*Orange/)};const S=y.bind({});S.args={size:"md",multiple:!0,combobox:!1,disabled:!1};const m=({size:n,multiple:o,combobox:a,disabled:i})=>l.jsx("div",{style:{width:"300px"},children:l.jsxs(t,{size:n,multiple:o,combobox:a,disabled:i,onChange:e=>e,children:[l.jsx(t.Button,{label:"Select Color",placeholder:"Select an option"}),l.jsx(t.Portal,{children:l.jsx(t.Options,{searchBy:"name",searchPlaceholder:"Search...",children:h.map(e=>l.jsx(t.Option,{value:e,children:e.name},e.id))})})]})});m.args={size:"md",multiple:!1,combobox:!0,disabled:!1};m.play=async({canvasElement:n})=>{const a=await v(n).findByRole("combobox");await s.click(a);const i=await p.findByRole("listbox"),e=await p.findByPlaceholderText("Search...");c(i).toContainElement(e),c(i).toHaveTextContent("Red"),await s.type(e,"Pink"),c(i).toHaveTextContent("Pink");const x=await p.findAllByRole("option");await s.click(x[0]),c(a).toHaveTextContent("Pink")};const b=y.bind({});b.args={size:"md",multiple:!1,combobox:!0,disabled:!1};r.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"SingleSelect"};d.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"MultiSelect"};m.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"SelectWithSearch"};var f,O,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`({
  size,
  multiple,
  combobox,
  disabled
}) => <div style={{
  width: '300px'
}}>
        <Select key={multiple as unknown as string} size={size} multiple={multiple} combobox={combobox} disabled={disabled} onChange={value => value}>
            <Select.Button placeholder={multiple ? 'Select multiple options' : 'Select an option'} label={multiple ? 'Select Multiple Colors' : 'Select a Color'} />
            <Select.Portal>
                <Select.Options>
                    {options.map(option => <Select.Option key={option.id} value={option}>
                            {option.name}
                        </Select.Option>)}
                </Select.Options>
            </Select.Portal>
        </Select>
    </div>`,...(C=(O=r.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var g,w,B;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`({
  size,
  multiple,
  combobox,
  disabled
}) => <div className="w-full h-[200px]">
        <Select size={size} multiple={multiple} combobox={combobox} disabled={disabled} onChange={value => value}>
            <Select.Button placeholder={multiple ? 'Select multiple options' : 'Select an option'} label={multiple ? 'Select Multiple Colors' : 'Select a Color'} />
            <Select.Options>
                {options.map(option => <Select.Option key={option.id} value={option}>
                        {option.name}
                    </Select.Option>)}
            </Select.Options>
        </Select>
    </div>`,...(B=(w=u.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var P,j,z;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`({
  size,
  multiple,
  combobox,
  disabled
}) => <div style={{
  width: '300px'
}}>
        <Select size={size} multiple={multiple} combobox={combobox} disabled={disabled} onChange={value => value}>
            <Select.Button placeholder={multiple ? 'Select multiple options' : 'Select an option'} label={multiple ? 'Select Multiple Colors' : 'Select a Color'} />
            <Select.Portal>
                <Select.Options>
                    {options.map(option => <Select.Option key={option.id} value={option}>
                            {option.name}
                        </Select.Option>)}
                </Select.Options>
            </Select.Portal>
        </Select>
    </div>`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var k,R,M;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`({
  size,
  multiple,
  combobox,
  disabled
}) => <div className="w-full h-[200px]">
        <Select size={size} multiple={multiple} combobox={combobox} disabled={disabled} onChange={value => value}>
            <Select.Button placeholder={multiple ? 'Select multiple options' : 'Select an option'} label={multiple ? 'Select Multiple Colors' : 'Select a Color'} />
            <Select.Options>
                {options.map(option => <Select.Option key={option.id} value={option}>
                        {option.name}
                    </Select.Option>)}
            </Select.Options>
        </Select>
    </div>`,...(M=(R=S.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var W,T,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`({
  size,
  multiple,
  combobox,
  disabled
}) => <div style={{
  width: '300px'
}}>
        <Select size={size} multiple={multiple} combobox={combobox} disabled={disabled} onChange={value => value}>
            <Select.Button label="Select Color" placeholder="Select an option" />
            <Select.Portal>
                <Select.Options searchBy="name" searchPlaceholder="Search...">
                    {options.map(option => <Select.Option key={option.id} value={option}>
                            {option.name}
                        </Select.Option>)}
                </Select.Options>
            </Select.Portal>
        </Select>
    </div>`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,H,N;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`({
  size,
  multiple,
  combobox,
  disabled
}) => <div className="w-full h-[200px]">
        <Select size={size} multiple={multiple} combobox={combobox} disabled={disabled} onChange={value => value}>
            <Select.Button placeholder={multiple ? 'Select multiple options' : 'Select an option'} label={multiple ? 'Select Multiple Colors' : 'Select a Color'} />
            <Select.Options>
                {options.map(option => <Select.Option key={option.id} value={option}>
                        {option.name}
                    </Select.Option>)}
            </Select.Options>
        </Select>
    </div>`,...(N=(H=b.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const ee=["SingleSelect","SingleSelectWithoutPortal","MultiSelect","MultiSelectWithoutPortal","SelectWithSearch","SelectWithSearchWithoutPortal"];export{d as MultiSelect,S as MultiSelectWithoutPortal,m as SelectWithSearch,b as SelectWithSearchWithoutPortal,r as SingleSelect,u as SingleSelectWithoutPortal,ee as __namedExportsOrder,$ as default};
