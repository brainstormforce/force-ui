import{j as t}from"./jsx-runtime-CfatFE5O.js";import{B as s}from"./button-CgINCcmo.js";import"./switch-8-TKop4N.js";import"./checkbox-Bkh6c8SD.js";import{R as i}from"./radio-button-Bj1riCbP.js";import"./badge-yuBkyoYk.js";import"./textarea-C-rsMFXU.js";import"./avatar-B8_OD95I.js";import"./input-C-ZJu8n2.js";import{L as l}from"./label-D4p9IGVl.js";import{T as d}from"./title-C2fDDsOl.js";import"./loader-BTI51AZl.js";import"./progress-bar-DE0hPJn8.js";import"./tooltip-A7E8ZG3D.js";import"./editor-input-Bcg09eG9.js";import"./tabs-BreO_8f9.js";import"./select-BiFcC5AA.js";import"./toaster-BMi6XA9W.js";import"./container-BNYZU-GH.js";import"./alert-CODtMEfA.js";import{P as o}from"./progress-steps-DWWsqr7G.js";import"./skeleton-DXhuH3FB.js";import"./menu-item-Dsf6NfTu.js";import"./sidebar-C6q1ipwA.js";import"./breadcrumb-BgQfnCma.js";import"./dialog-B742XYCD.js";import{T as r}from"./topbar-DtySoa-G.js";import"./search-Cymdjl4e.js";import"./dropdown-menu-BXHb9URM.js";import"./drawer-BPYs_56L.js";import"./pagination-Bt_v8-t7.js";import"./datepicker-Bv9INp8v.js";import"./accordion-CvDF7LCb.js";import"./bar-chart-NsJUIeHI.js";import"./line-chart-ChnXESza.js";import"./pie-chart-DuxCe5_2.js";import"./area-chart-uwYhenYK.js";import"./dropzone-DqKgINMW.js";import{c}from"./icons-Pmw3xJsu.js";import{X as u}from"./x-DyQPfKin.js";import{C as b}from"./chevron-right-CK9EFw-n.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./functions-D_VlAfUZ.js";import"./index.browser-DP16PUbO.js";import"./minus-2x63mxhm.js";import"./createLucideIcon-9-bnJYrk.js";import"./check-D2eNpWXB.js";import"./info-CABwj-1_.js";import"./floating-ui.react-DEvApr_e.js";import"./index-ZuzByk-F.js";import"./utils-BXkLUWnZ.js";import"./proxy-BrM9YEId.js";import"./chevron-down-C437CSEq.js";import"./search-C4OpTwLZ.js";import"./index-CH97fFM0.js";import"./plus-BaMJlyku.js";import"./panel-left-close-fvU0ez36.js";import"./ellipsis-Dia-pOBG.js";import"./chevron-left-B7emPgd4.js";import"./ResponsiveContainer-CM8-Voaa.js";import"./generateCategoricalChart-CQ1jUcy2.js";import"./tiny-invariant-CopsF_GD.js";import"./YAxis-BgfodG5x.js";import"./cloud-upload-D7W2hvRg.js";import"./file-BltMh5Cu.js";const Pt={title:"Templates/Onboarding/Import",parameters:{layout:"fullscreen"},tags:["autodocs"]},x=p=>t.jsxs("div",{...p,className:"bg-background-secondary min-h-screen w-full pb-10",children:[t.jsxs(r,{className:"bg-background-secondary",children:[t.jsx(r.Left,{children:t.jsx(r.Item,{children:t.jsx(c,{})})}),t.jsx(r.Middle,{children:t.jsx(r.Item,{children:t.jsxs(o,{currentStep:2,children:[t.jsx(o.Step,{labelText:"Connect"}),t.jsx(o.Step,{labelText:"Import"}),t.jsx(o.Step,{labelText:"Profile"}),t.jsx(o.Step,{labelText:"Social"})]})})}),t.jsx(r.Right,{children:t.jsx(r.Item,{children:t.jsx(u,{className:"size-4"})})})]}),t.jsxs("div",{className:"md:w-[45rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm",children:[t.jsxs("div",{children:[t.jsx(d,{size:"md",className:"text-text-primary",tag:"h4",title:"Import Data From Your Current Plugins"}),t.jsx(l,{className:"text-text-secondary mt-1 text-sm max-w-[35rem] font-normal",children:"We have deducted few SEO plugins installed on your website. Select the plugin from which you want to import"})]}),t.jsx("div",{className:"py-6",children:t.jsxs(i.Group,{vertical:!0,children:[t.jsx(i.Button,{value:"seoPress",label:{heading:"SEOPress"},borderOn:!0}),t.jsx(i.Button,{value:"aioSeo",label:{heading:"AIO SEO"},borderOn:!0}),t.jsx(i.Button,{value:"youstSeo",label:{heading:"Yoast SEO"},borderOn:!0})]})}),t.jsxs("div",{className:"flex justify-end items-center gap-3 mt-6",children:[t.jsx(s,{variant:"ghost",className:"text-text-tertiary",children:"Skip"}),t.jsx(s,{className:"flex items-center gap-2",icon:t.jsx(b,{}),iconPosition:"right",children:"Next"})]})]})]}),e=x.bind({});e.args={};e.storyName="OnboardingImport";var a,n,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <div {...args} className="bg-background-secondary min-h-screen w-full pb-10">
            <Topbar className="bg-background-secondary">
                <Topbar.Left>
                    <Topbar.Item>
                        <SureEmailIcon />
                    </Topbar.Item>
                </Topbar.Left>
                <Topbar.Middle>
                    <Topbar.Item>
                        <ProgressSteps currentStep={2}>
                            <ProgressSteps.Step labelText="Connect" />
                            <ProgressSteps.Step labelText="Import" />
                            <ProgressSteps.Step labelText="Profile" />
                            <ProgressSteps.Step labelText="Social" />
                        </ProgressSteps>
                    </Topbar.Item>
                </Topbar.Middle>
                <Topbar.Right>
                    <Topbar.Item>
                        <X className="size-4" />
                    </Topbar.Item>
                </Topbar.Right>
            </Topbar>
            <div className="md:w-[45rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm">
                <div>
                    <Title size="md" className="text-text-primary" tag="h4" title="Import Data From Your Current Plugins" />
                    <Label className="text-text-secondary mt-1 text-sm max-w-[35rem] font-normal">
                        We have deducted few SEO plugins installed on your
                        website. Select the plugin from which you want to import
                    </Label>
                </div>
                <div className="py-6">
                    <RadioButton.Group vertical={true}>
                        <RadioButton.Button value="seoPress" label={{
            heading: \`SEOPress\`
          }} borderOn={true} />
                        <RadioButton.Button value="aioSeo" label={{
            heading: \`AIO SEO\`
          }} borderOn={true} />
                        <RadioButton.Button value="youstSeo" label={{
            heading: \`Yoast SEO\`
          }} borderOn={true} />
                    </RadioButton.Group>
                </div>
                <div className="flex justify-end items-center gap-3 mt-6">
                    <Button variant="ghost" className="text-text-tertiary">
                        Skip
                    </Button>
                    <Button className="flex items-center gap-2" icon={<ChevronRight />} iconPosition="right">
                        Next
                    </Button>
                </div>
            </div>
        </div>;
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const wt=["OnboardingImport"];export{e as OnboardingImport,wt as __namedExportsOrder,Pt as default};
