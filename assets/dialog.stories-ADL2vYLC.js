import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as j}from"./index-ClcD9ViR.js";import{D as o}from"./dialog-B742XYCD.js";import{B as t}from"./button-CgINCcmo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./index-ZuzByk-F.js";import"./index-CH97fFM0.js";import"./proxy-BrM9YEId.js";import"./x-DyQPfKin.js";import"./createLucideIcon-9-bnJYrk.js";const H={title:"Organisms/Dialog",component:o,subcomponents:{"Dialog.Panel":o.Panel,"Dialog.Header":o.Header,"Dialog.Title":o.Title,"Dialog.Description":o.Description,"Dialog.Body":o.Body,"Dialog.Footer":o.Footer,"Dialog.CloseButton":o.CloseButton,"Dialog.Backdrop":o.Backdrop},parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[n=>e.jsx("div",{className:"font-sans [&_*]:font-sans h-[600px] flex items-center justify-center",children:e.jsx(n,{})})],argTypes:{design:{control:{type:"select"}}}},h=n=>{const[B,l]=j.useState(!1);return e.jsxs(o,{...n,open:B,setOpen:l,trigger:n.trigger,children:[e.jsx(o.Backdrop,{}),e.jsxs(o.Panel,{children:[e.jsxs(o.Header,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(o.Title,{children:"Dialog Title"}),e.jsx(o.CloseButton,{})]}),e.jsx(o.Description,{children:"Lorem ipsum dolor sit amet consectetur. Aliquam sed scelerisque et arcu nibh a massa."})]}),e.jsx(o.Body,{children:e.jsx("p",{className:"m-0 text-text-secondary",children:"Body content"})}),e.jsx(o.Footer,{children:e.jsx(t,{onClick:()=>l(!1),children:"Close"})})]})]})},s=h.bind({});s.args={trigger:e.jsx(t,{children:"Open Dialog"}),exitOnEsc:!0,exitOnClickOutside:!1,scrollLock:!0,design:"simple"};const f=()=>e.jsx(o,{trigger:e.jsx(t,{children:"Open Uncontrolled Dialog"}),children:e.jsx(o.Panel,{children:({close:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(o.Header,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(o.Title,{children:"Dialog Title"}),e.jsx(o.CloseButton,{className:"px-2 py-0.5",variant:"ghost",as:t,children:"X"})]}),e.jsx(o.Description,{children:"Lorem ipsum dolor sit amet consectetur. Aliquam sed scelerisque et arcu nibh a massa."})]}),e.jsx(o.Body,{children:e.jsx("h1",{className:"m-0",children:"Dialog Content"})}),e.jsxs(o.Footer,{children:[e.jsx("div",{className:"mr-auto inline-flex items-center",children:"Other option"}),e.jsx(t,{variant:"ghost",children:"Details"}),e.jsx(o.CloseButton,{as:t,variant:"outline",children:"Cancel"}),e.jsx(t,{onClick:n,variant:"primary",children:"Save"})]}),e.jsx(o.Backdrop,{})]})})}),a=h.bind({});a.args={trigger:e.jsx(t,{children:"Open Dialog"}),exitOnEsc:!0,exitOnClickOutside:!1,scrollLock:!0,design:"simple"};const i=f.bind({});i.parameters={docs:{source:{type:"code"}}};var r,c,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <Dialog {...args} open={open} setOpen={setOpen} trigger={args.trigger}>
            <Dialog.Backdrop />
            <Dialog.Panel>
                <Dialog.Header>
                    <div className="flex items-center justify-between">
                        <Dialog.Title>Dialog Title</Dialog.Title>
                        <Dialog.CloseButton />
                    </div>
                    <Dialog.Description>
                        Lorem ipsum dolor sit amet consectetur. Aliquam sed
                        scelerisque et arcu nibh a massa.
                    </Dialog.Description>
                </Dialog.Header>
                <Dialog.Body>
                    <p className="m-0 text-text-secondary">Body content</p>
                </Dialog.Body>
                <Dialog.Footer>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Dialog.Footer>
            </Dialog.Panel>
        </Dialog>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,m,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <Dialog {...args} open={open} setOpen={setOpen} trigger={args.trigger}>
            <Dialog.Backdrop />
            <Dialog.Panel>
                <Dialog.Header>
                    <div className="flex items-center justify-between">
                        <Dialog.Title>Dialog Title</Dialog.Title>
                        <Dialog.CloseButton />
                    </div>
                    <Dialog.Description>
                        Lorem ipsum dolor sit amet consectetur. Aliquam sed
                        scelerisque et arcu nibh a massa.
                    </Dialog.Description>
                </Dialog.Header>
                <Dialog.Body>
                    <p className="m-0 text-text-secondary">Body content</p>
                </Dialog.Body>
                <Dialog.Footer>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Dialog.Footer>
            </Dialog.Panel>
        </Dialog>;
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,D,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Dialog trigger={<Button>Open Uncontrolled Dialog</Button>}>
        <Dialog.Panel>
            {({
      close
    }) => <>
                    <Dialog.Header>
                        <div className="flex items-center justify-between">
                            <Dialog.Title>Dialog Title</Dialog.Title>
                            {/* Custom Close button instead of default with Passes component/tag props. */}
                            <Dialog.CloseButton className="px-2 py-0.5" variant="ghost" as={Button}>
                                X
                            </Dialog.CloseButton>
                        </div>
                        <Dialog.Description>
                            Lorem ipsum dolor sit amet consectetur. Aliquam sed
                            scelerisque et arcu nibh a massa.
                        </Dialog.Description>
                    </Dialog.Header>
                    <Dialog.Body>
                        <h1 className="m-0">Dialog Content</h1>
                    </Dialog.Body>
                    <Dialog.Footer>
                        <div className="mr-auto inline-flex items-center">
                            Other option
                        </div>
                        <Button variant="ghost">Details</Button>
                        <Dialog.CloseButton as={Button} variant="outline">
                            Cancel
                        </Dialog.CloseButton>
                        <Button onClick={close} variant="primary">
                            Save
                        </Button>
                    </Dialog.Footer>
                    <Dialog.Backdrop />
                </>}
        </Dialog.Panel>
    </Dialog>`,...(x=(D=i.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const S=["Default","Controlled","Uncontrolled"];export{a as Controlled,s as Default,i as Uncontrolled,S as __namedExportsOrder,H as default};
