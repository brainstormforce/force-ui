import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as x}from"./index-ClcD9ViR.js";import{S as e}from"./search-Cymdjl4e.js";import{F as s}from"./file-BltMh5Cu.js";import{c as v}from"./createLucideIcon-9-bnJYrk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./loader-BTI51AZl.js";import"./badge-yuBkyoYk.js";import"./x-DyQPfKin.js";import"./floating-ui.react-DEvApr_e.js";import"./index-ZuzByk-F.js";import"./search-C4OpTwLZ.js";/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=v("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),P={title:"Molecules/SearchBox",component:e,subcomponents:{"SearchBox.Input":e.Input,"SearchBox.Loading":e.Loading,"SearchBox.Separator":e.Separator,"SearchBox.Content":e.Content,"SearchBox.List":e.List,"SearchBox.Empty":e.Empty,"SearchBox.Group":e.Group,"SearchBox.Item":e.Item},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"}},children:{control:!1}}},h=S=>{const[R,b]=x.useState(!1),D=x.useRef(null),A=()=>{},y=E=>{b(E)};return n.jsxs(e,{...S,open:R||S.open,onOpenChange:y,children:[n.jsx(e.Input,{ref:D,onChange:A}),n.jsx(e.Content,{children:n.jsxs(e.List,{children:[n.jsxs(e.Group,{heading:"Suggestions",children:[n.jsx(e.Item,{icon:n.jsx(s,{}),children:"Calendar"}),n.jsx(e.Item,{icon:n.jsx(s,{}),children:"Document"}),n.jsx(e.Item,{icon:n.jsx(s,{}),children:"Attendance"})]}),n.jsx(e.Separator,{}),n.jsxs(e.Group,{heading:"Folders",children:[n.jsx(e.Item,{icon:n.jsx(i,{}),children:"Calendar Folder"}),n.jsx(e.Item,{icon:n.jsx(i,{}),children:"Document Folder"}),n.jsx(e.Item,{icon:n.jsx(i,{}),children:"Attendance Folder"})]})]})})]})},c=h.bind({});c.args={size:"sm"};const o=h.bind({});o.args={};o.decorators=[()=>n.jsx(e,{children:n.jsx(e.Input,{variant:"secondary"})})];const r=h.bind({});r.args={};r.decorators=[()=>n.jsx(e,{children:n.jsx(e.Input,{variant:"ghost"})})];const a=h.bind({});a.args={};a.decorators=[()=>n.jsx(e,{children:n.jsx(e.Input,{disabled:!0})})];const t=h.bind({});t.args={open:!0,loading:!0};var p,d,l;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const handleSearch = () => {
    // Logic for handling search input change
  };
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  return <SearchBox {...args} open={open || args.open} onOpenChange={handleOpenChange}>
            <SearchBox.Input ref={inputRef} onChange={handleSearch} />
            <SearchBox.Content>
                <SearchBox.List>
                    <SearchBox.Group heading="Suggestions">
                        <SearchBox.Item icon={<File />}>
                            Calendar
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Document
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Attendance
                        </SearchBox.Item>
                    </SearchBox.Group>
                    <SearchBox.Separator />
                    <SearchBox.Group heading="Folders">
                        <SearchBox.Item icon={<Folder />}>
                            Calendar Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Document Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Attendance Folder
                        </SearchBox.Item>
                    </SearchBox.Group>
                </SearchBox.List>
            </SearchBox.Content>
        </SearchBox>;
}`,...(l=(d=c.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var B,m,u;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const handleSearch = () => {
    // Logic for handling search input change
  };
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  return <SearchBox {...args} open={open || args.open} onOpenChange={handleOpenChange}>
            <SearchBox.Input ref={inputRef} onChange={handleSearch} />
            <SearchBox.Content>
                <SearchBox.List>
                    <SearchBox.Group heading="Suggestions">
                        <SearchBox.Item icon={<File />}>
                            Calendar
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Document
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Attendance
                        </SearchBox.Item>
                    </SearchBox.Group>
                    <SearchBox.Separator />
                    <SearchBox.Group heading="Folders">
                        <SearchBox.Item icon={<Folder />}>
                            Calendar Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Document Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Attendance Folder
                        </SearchBox.Item>
                    </SearchBox.Group>
                </SearchBox.List>
            </SearchBox.Content>
        </SearchBox>;
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,I,F;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const handleSearch = () => {
    // Logic for handling search input change
  };
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  return <SearchBox {...args} open={open || args.open} onOpenChange={handleOpenChange}>
            <SearchBox.Input ref={inputRef} onChange={handleSearch} />
            <SearchBox.Content>
                <SearchBox.List>
                    <SearchBox.Group heading="Suggestions">
                        <SearchBox.Item icon={<File />}>
                            Calendar
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Document
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Attendance
                        </SearchBox.Item>
                    </SearchBox.Group>
                    <SearchBox.Separator />
                    <SearchBox.Group heading="Folders">
                        <SearchBox.Item icon={<Folder />}>
                            Calendar Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Document Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Attendance Folder
                        </SearchBox.Item>
                    </SearchBox.Group>
                </SearchBox.List>
            </SearchBox.Content>
        </SearchBox>;
}`,...(F=(I=r.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var C,f,O;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const handleSearch = () => {
    // Logic for handling search input change
  };
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  return <SearchBox {...args} open={open || args.open} onOpenChange={handleOpenChange}>
            <SearchBox.Input ref={inputRef} onChange={handleSearch} />
            <SearchBox.Content>
                <SearchBox.List>
                    <SearchBox.Group heading="Suggestions">
                        <SearchBox.Item icon={<File />}>
                            Calendar
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Document
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Attendance
                        </SearchBox.Item>
                    </SearchBox.Group>
                    <SearchBox.Separator />
                    <SearchBox.Group heading="Folders">
                        <SearchBox.Item icon={<Folder />}>
                            Calendar Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Document Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Attendance Folder
                        </SearchBox.Item>
                    </SearchBox.Group>
                </SearchBox.List>
            </SearchBox.Content>
        </SearchBox>;
}`,...(O=(f=a.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var j,G,L;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const handleSearch = () => {
    // Logic for handling search input change
  };
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  return <SearchBox {...args} open={open || args.open} onOpenChange={handleOpenChange}>
            <SearchBox.Input ref={inputRef} onChange={handleSearch} />
            <SearchBox.Content>
                <SearchBox.List>
                    <SearchBox.Group heading="Suggestions">
                        <SearchBox.Item icon={<File />}>
                            Calendar
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Document
                        </SearchBox.Item>
                        <SearchBox.Item icon={<File />}>
                            Attendance
                        </SearchBox.Item>
                    </SearchBox.Group>
                    <SearchBox.Separator />
                    <SearchBox.Group heading="Folders">
                        <SearchBox.Item icon={<Folder />}>
                            Calendar Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Document Folder
                        </SearchBox.Item>
                        <SearchBox.Item icon={<Folder />}>
                            Attendance Folder
                        </SearchBox.Item>
                    </SearchBox.Group>
                </SearchBox.List>
            </SearchBox.Content>
        </SearchBox>;
}`,...(L=(G=t.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const Q=["BasicSearchBox","SecondarySearchBox","GhostSearchBox","DisabledSearchBox","LoadingSearchBox"];export{c as BasicSearchBox,a as DisabledSearchBox,r as GhostSearchBox,t as LoadingSearchBox,o as SecondarySearchBox,Q as __namedExportsOrder,P as default};
