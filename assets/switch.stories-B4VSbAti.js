import{j as l}from"./jsx-runtime-CfatFE5O.js";import{r as o}from"./index-ClcD9ViR.js";import{S as b}from"./switch-8-TKop4N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.browser-DP16PUbO.js";import"./functions-D_VlAfUZ.js";const L={title:"Atoms/Switch",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select"}}},r=({defaultValue:s,size:S,...t})=>{const[V,c]=o.useState(s);o.useEffect(()=>{c(s)},[s]);const k=i=>{c(i),t.onChange&&t.onChange(i)};return l.jsx(l.Fragment,{children:l.jsx(b,{id:"switch-element",...t,size:S,value:V,onChange:k,"aria-label":"Switch Element"})})},e=r.bind({});e.args={defaultValue:!1,size:"lg",disabled:!1};const a=r.bind({});a.args={defaultValue:!0,size:"lg",disabled:!1,label:{heading:"Switch Label",description:"Switch Description"}};const n=r.bind({});n.args={size:"lg",disabled:!0,label:{heading:"Disabled Switch",description:"This switch is disabled."}};var d,h,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
  defaultValue,
  size,
  ...args
}) => {
  const [checked, setChecked] = useState(defaultValue);
  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);
  const handleChange = (newValue: boolean) => {
    setChecked(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <>
            <Switch id="switch-element" {...args} size={size} value={checked} onChange={handleChange} aria-label="Switch Element" />
        </>;
}`,...(u=(h=e.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,m,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
  defaultValue,
  size,
  ...args
}) => {
  const [checked, setChecked] = useState(defaultValue);
  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);
  const handleChange = (newValue: boolean) => {
    setChecked(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <>
            <Switch id="switch-element" {...args} size={size} value={checked} onChange={handleChange} aria-label="Switch Element" />
        </>;
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,C,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`({
  defaultValue,
  size,
  ...args
}) => {
  const [checked, setChecked] = useState(defaultValue);
  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);
  const handleChange = (newValue: boolean) => {
    setChecked(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };
  return <>
            <Switch id="switch-element" {...args} size={size} value={checked} onChange={handleChange} aria-label="Switch Element" />
        </>;
}`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const T=["Basic","WithLabel","Disabled"];export{e as Basic,n as Disabled,a as WithLabel,T as __namedExportsOrder,L as default};
