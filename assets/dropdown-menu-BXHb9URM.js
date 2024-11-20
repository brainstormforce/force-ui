import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as a,R as d}from"./index-ClcD9ViR.js";import{u as E,o as F,f as L,s as O,b as V,c as z,h as H,i as U,j as B,k as K,F as G}from"./floating-ui.react-DEvApr_e.js";import{c as u,b as x}from"./functions-D_VlAfUZ.js";import{M as c}from"./menu-item-Dsf6NfTu.js";const D=a.createContext({}),J=()=>a.useContext(D),i=({placement:e="bottom",offset:s=10,boundary:t="clippingAncestors",dropdownPortalRoot:r,dropdownPortalId:p,children:C,className:M})=>{const[N,f]=a.useState(!1),{refs:b,floatingStyles:T,context:m}=E({open:N,onOpenChange:f,placement:e,strategy:"absolute",middleware:[F(s),L({boundary:t}),O({boundary:t})],whileElementsMounted:V}),k=z(m),P=H(m),q=U(m,{role:"menu"}),{getReferenceProps:I,getFloatingProps:S}=B([k,P,q]),{isMounted:j,styles:A}=K(m,{duration:150,initial:{opacity:0,scale:.95},open:{opacity:1,scale:1},close:{opacity:0,scale:.95}}),R=()=>f(n=>!n),_=()=>f(!1);return o.jsx(D.Provider,{value:{handleClose:_},children:o.jsxs("div",{className:u("relative inline-block",M),children:[d.Children.map(C,n=>{var l;return d.isValidElement(n)&&((l=n==null?void 0:n.type)==null?void 0:l.displayName)==="DropdownMenu.Trigger"?a.cloneElement(n,{ref:b.setReference,onClick:R,...I()}):null}),j&&o.jsx(G,{id:p,root:r,children:o.jsx("div",{ref:b.setFloating,style:{...T,...A},...S(),children:d.Children.map(C,n=>{var l;return((l=n==null?void 0:n.type)==null?void 0:l.displayName)==="DropdownMenu.Content"?n:null})})})]})})};i.displayName="DropdownMenu";const g=d.forwardRef(({children:e,className:s,...t},r)=>a.isValidElement(e)?d.cloneElement(e,{className:s,ref:r,...t}):o.jsx("div",{ref:r,className:u("cursor-pointer",s),role:"button",tabIndex:0,...t,children:e}));g.displayName="DropdownMenu.Trigger";const y=({children:e,className:s,...t})=>o.jsx("div",{className:u("border border-solid border-border-subtle rounded-md shadow-lg overflow-hidden",s),children:o.jsx(c,{...t,children:e})});y.displayName="DropdownMenu.Content";const h=e=>o.jsx(c.List,{...e});h.displayName="DropdownMenu.List";const v=({children:e,as:s=c.Item,...t})=>{var p;const{handleClose:r}=J();return e?s===a.Fragment&&a.isValidElement(e)?a.cloneElement(e,{onClick:x((p=e.props)==null?void 0:p.onClick,r)}):o.jsx(s,{...t,className:u("px-2",t.className),onClick:x(t.onClick,r),children:e}):null};v.displayName="DropdownMenu.Item";const w=e=>o.jsx(c.Separator,{...e});w.displayName="DropdownMenu.Separator";i.Trigger=g;i.Content=y;i.List=h;i.Item=v;i.Separator=w;i.__docgenInfo={description:"",methods:[{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{
	children,
	className,
	...props
}: DropdownCommonProps & AdditionalProps`,optional:!1,type:{name:"intersection",raw:"DropdownCommonProps & AdditionalProps",elements:[{name:"DropdownCommonProps"},{name:"AdditionalProps"}]}}],returns:null},{name:"List",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"MenuListProps",alias:"DropdownMenuListProps"}}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
	children,
	as: Tag = Menu.Item,
	...props
}`,optional:!1,type:null}],returns:null},{name:"Separator",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"MenuSeparatorProps",alias:"DropdownMenuSeparatorProps"}}],returns:null}],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Children of the component"},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'right'
| 'bottom'
| 'left'
| 'top-start'
| 'top-end'
| 'right-start'
| 'right-end'
| 'bottom-start'
| 'bottom-end'
| 'left-start'
| 'left-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"}]},description:"Defines the position of the dropdown menu.",defaultValue:{value:"'bottom'",computed:!1}},offset:{required:!1,tsType:{name:"OffsetOptions"},description:"Defines the offset of the dropdown menu.",defaultValue:{value:"10",computed:!1}},boundary:{required:!1,tsType:{name:"Boundary"},description:"Defines the boundary of the dropdown menu.",defaultValue:{value:"'clippingAncestors'",computed:!1}},dropdownPortalRoot:{required:!1,tsType:{name:"FloatingPortalProps['root']",raw:"FloatingPortalProps['root']"},description:"Defines the trigger element of the dropdown menu."},dropdownPortalId:{required:!1,tsType:{name:"FloatingPortalProps['id']",raw:"FloatingPortalProps['id']"},description:"Defines the trigger element of the dropdown menu."}}};g.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu.Trigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Children of the component"},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};y.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu.Content",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Children of the component"},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};h.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu.List",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the component."},heading:{required:!1,tsType:{name:"string"},description:"Heading for the menu list."},arrow:{required:!1,tsType:{name:"boolean"},description:"Displays an arrow next to the heading."},open:{required:!1,tsType:{name:"boolean"},description:"Controls the initial open state of the menu list."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"( isOpen: boolean ) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback function triggered when the menu list is clicked."},children:{required:!0,tsType:{name:"ReactNode"},description:"Child elements of the menu list."},showArrowOnHover:{required:!1,tsType:{name:"boolean"},description:"Shows the arrow only when hovering."}}};v.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu.Item",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content of the dropdown menu item."},as:{required:!1,tsType:{name:"ElementType"},description:"Tag of the dropdown menu item. Use your custom component or HTML tag if needed instead of the default `li`.",defaultValue:{value:`( {
	disabled = false,
	active,
	onClick,
	children,
	className,
}: MenuItemProps ) => {
	const { size } = useMenuContext();

	const baseClasses =
		'flex p-1 gap-1 items-center bg-transparent border-none rounded text-text-secondary cursor-pointer m-0';
	const sizeClasses = {
		sm: '[&>svg]:size-4 [&>svg]:m-1 [&>*:not(svg)]:mx-1 [&>*:not(svg)]:my-0.5 text-sm',
		md: '[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 text-base',
	}?.[ size ?? 'md' ];
	const hoverClasses =
		'hover:bg-background-secondary hover:text-text-primary';
	const disabledClasses = disabled
		? 'text-text-disabled hover:text-text-disabled cursor-not-allowed hover:bg-transparent'
		: '';
	const activeClasses = active
		? 'text-icon-primary [&>svg]:text-icon-interactive bg-background-secondary'
		: '';
	const transitionClasses = 'transition-colors duration-300 ease-in-out';

	return (
		<li
			role="menuitem"
			tabIndex={ 0 }
			onClick={ onClick }
			onKeyDown={ ( event ) => {
				if ( event.key === 'Enter' || event.key === ' ' ) {
					onClick?.();
				}
			} }
			className={ cn(
				baseClasses,
				sizeClasses,
				hoverClasses,
				disabledClasses,
				activeClasses,
				transitionClasses,
				className
			) }
		>
			{ children }
		</li>
	);
}`,computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler."},className:{required:!1,tsType:{name:"string"},description:"Additional class name."}}};w.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu.Separator",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the component."},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"},{name:"literal",value:"'double'"},{name:"literal",value:"'hidden'"},{name:"literal",value:"'none'"}]},description:"Defines the style of the separator (e.g., 'solid', 'dashed')."}}};export{i as D};
