import{j as l}from"./jsx-runtime-CfatFE5O.js";import{r as p}from"./index-ClcD9ViR.js";import{S as e}from"./select-BiFcC5AA.js";import{L as P}from"./label-D4p9IGVl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./floating-ui.react-DEvApr_e.js";import"./index-ZuzByk-F.js";import"./badge-yuBkyoYk.js";import"./x-DyQPfKin.js";import"./createLucideIcon-9-bnJYrk.js";import"./index.browser-DP16PUbO.js";import"./chevron-down-C437CSEq.js";import"./search-C4OpTwLZ.js";import"./check-D2eNpWXB.js";const G={title:"Molecules/Select",component:e,subcomponents:{"Select.Button":e.Button,"Select.Portal":e.Portal,"Select.Options":e.Options,"Select.Option":e.Option},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1},size:{control:{type:"select"}}}},j=["Select Item 1","Select Item 2","Select Item 3","Select Item 4","Select Item 5"],r=t=>{const[L,i]=p.useState(),y=c=>{i(c)};return p.useEffect(()=>{if(t!=null&&t.multiple){i([]);return}i("")},[t]),l.jsxs("div",{style:{width:"260px"},children:[l.jsxs(e,{...t,onChange:y,value:L,children:[l.jsx(e.Button,{label:"Label"}),l.jsx(e.Portal,{children:l.jsx(e.Options,{children:j.map((c,w)=>l.jsx(e.Option,{value:c,children:c},w))})})]},t!=null&&t.multiple?1:0),l.jsxs(P,{className:"mt-1.5",size:"sm",variant:"help",tag:"span",children:["Hint text can be added here.",l.jsx("a",{href:"https://example.com",children:"Link"}),"."]})]})},s=r.bind({});s.args={size:"md",multiple:!1};const a=r.bind({});a.args={size:"md",combobox:!0,multiple:!1};const o=r.bind({});o.args={size:"md",multiple:!0};const n=r.bind({});n.args={size:"md",multiple:!0,combobox:!0};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<string | []>();
  const handleSelect = (value: unknown) => {
    setSelected(value as unknown as string | []);
  };
  useEffect(() => {
    if (args?.multiple) {
      setSelected([]);
      return;
    }
    setSelected('');
  }, [args]);
  return <div style={{
    width: '260px'
  }}>
            <Select key={args?.multiple ? 1 : 0} {...args} onChange={handleSelect} value={selected}>
                <Select.Button label="Label" />
                <Select.Portal>
                    <Select.Options>
                        {options.map((option, index) => <Select.Option key={index} value={option}>
                                {option}
                            </Select.Option>)}
                    </Select.Options>
                </Select.Portal>
            </Select>
            <Label className="mt-1.5" size="sm" variant="help" tag="span">
                Hint text can be added here.
                <a href="https://example.com">Link</a>.
            </Label>
        </div>;
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var S,h,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<string | []>();
  const handleSelect = (value: unknown) => {
    setSelected(value as unknown as string | []);
  };
  useEffect(() => {
    if (args?.multiple) {
      setSelected([]);
      return;
    }
    setSelected('');
  }, [args]);
  return <div style={{
    width: '260px'
  }}>
            <Select key={args?.multiple ? 1 : 0} {...args} onChange={handleSelect} value={selected}>
                <Select.Button label="Label" />
                <Select.Portal>
                    <Select.Options>
                        {options.map((option, index) => <Select.Option key={index} value={option}>
                                {option}
                            </Select.Option>)}
                    </Select.Options>
                </Select.Portal>
            </Select>
            <Label className="mt-1.5" size="sm" variant="help" tag="span">
                Hint text can be added here.
                <a href="https://example.com">Link</a>.
            </Label>
        </div>;
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,g,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<string | []>();
  const handleSelect = (value: unknown) => {
    setSelected(value as unknown as string | []);
  };
  useEffect(() => {
    if (args?.multiple) {
      setSelected([]);
      return;
    }
    setSelected('');
  }, [args]);
  return <div style={{
    width: '260px'
  }}>
            <Select key={args?.multiple ? 1 : 0} {...args} onChange={handleSelect} value={selected}>
                <Select.Button label="Label" />
                <Select.Portal>
                    <Select.Options>
                        {options.map((option, index) => <Select.Option key={index} value={option}>
                                {option}
                            </Select.Option>)}
                    </Select.Options>
                </Select.Portal>
            </Select>
            <Label className="mt-1.5" size="sm" variant="help" tag="span">
                Hint text can be added here.
                <a href="https://example.com">Link</a>.
            </Label>
        </div>;
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,O,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<string | []>();
  const handleSelect = (value: unknown) => {
    setSelected(value as unknown as string | []);
  };
  useEffect(() => {
    if (args?.multiple) {
      setSelected([]);
      return;
    }
    setSelected('');
  }, [args]);
  return <div style={{
    width: '260px'
  }}>
            <Select key={args?.multiple ? 1 : 0} {...args} onChange={handleSelect} value={selected}>
                <Select.Button label="Label" />
                <Select.Portal>
                    <Select.Options>
                        {options.map((option, index) => <Select.Option key={index} value={option}>
                                {option}
                            </Select.Option>)}
                    </Select.Options>
                </Select.Portal>
            </Select>
            <Label className="mt-1.5" size="sm" variant="help" tag="span">
                Hint text can be added here.
                <a href="https://example.com">Link</a>.
            </Label>
        </div>;
}`,...(k=(O=n.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const J=["BasicSelect","Combobox","Multiselect","MultiselectCombobox"];export{s as BasicSelect,a as Combobox,o as Multiselect,n as MultiselectCombobox,J as __namedExportsOrder,G as default};
