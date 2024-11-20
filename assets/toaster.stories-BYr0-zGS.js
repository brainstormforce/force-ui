import{j as s}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{T as n,t as e}from"./toaster-BMi6XA9W.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./utils-BXkLUWnZ.js";import"./button-CgINCcmo.js";import"./info-CABwj-1_.js";import"./createLucideIcon-9-bnJYrk.js";import"./check-D2eNpWXB.js";import"./index-ZuzByk-F.js";import"./index-CH97fFM0.js";import"./proxy-BrM9YEId.js";import"./x-DyQPfKin.js";const j={title:"Atoms/Toaster",component:n,parameters:{layout:"centered",docs:{source:{code:`
              <Toaster position="top-right" design="stack" theme="light" autoDismiss={true} dismissAfter={5000} />
              <div className="flex gap-2">
                  <button onClick={() => toast.success('Success toast!', { description: 'This is a success message' })}>
                      Show Success Toast
                  </button>
                  <button onClick={() => toast.error('Error toast!', { description: 'This is an error message' })}>
                      Show Error Toast
                  </button>
                  <button onClick={() => toast.info('Info toast!', { description: 'This is an info message' })}>
                      Show Info Toast
                  </button>
                  <button onClick={() => toast.warning('Warning toast!', { description: 'This is a warning message' })}>
                      Show Warning Toast
                  </button>
              </div>
              `}}},tags:["autodocs"],decorators:[o=>s.jsx("div",{style:{width:"900px",height:"500px",position:"relative",margin:"0 auto"},children:s.jsx(o,{})})],argTypes:{position:{control:{type:"select"}},design:{control:{type:"select"}},theme:{control:{type:"select"}}}},m=o=>s.jsxs("div",{children:[c.createElement(n,{...o,key:o.position}),s.jsx("div",{className:"h-[100dvh] flex flex-col items-center justify-center",children:s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:()=>e.success("Success toast!",{description:"This is a success message"}),children:"Show Success Toast"}),s.jsx("button",{onClick:()=>e.error("Error toast!",{description:"This is an error message"}),children:"Show Error Toast"}),s.jsx("button",{onClick:()=>e.info("Info toast!",{description:"This is an info message"}),children:"Show Info Toast"}),s.jsx("button",{onClick:()=>e.warning("Warning toast!",{description:"This is a warning message"}),children:"Show Warning Toast"})]})})]}),t=m.bind({});t.args={position:"top-right",design:"stack",theme:"light",autoDismiss:!0,dismissAfter:5e3};var i,r,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <div>
            <Toaster {...args} key={args.position} />
            <div className="h-[100dvh] flex flex-col items-center justify-center">
                <div className="flex gap-2">
                    <button onClick={() => toast.success('Success toast!', {
          description: 'This is a success message'
        })}>
                        Show Success Toast
                    </button>
                    <button onClick={() => toast.error('Error toast!', {
          description: 'This is an error message'
        })}>
                        Show Error Toast
                    </button>
                    <button onClick={() => toast.info('Info toast!', {
          description: 'This is an info message'
        })}>
                        Show Info Toast
                    </button>
                    <button onClick={() => toast.warning('Warning toast!', {
          description: 'This is a warning message'
        })}>
                        Show Warning Toast
                    </button>
                </div>
            </div>
        </div>;
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,j as default};
