import{d as M,h as p,c as f,a as h,b as B,e as g,u as te,f as G,g as ko,p as W,t as Q,i as $,j as se,k as ne,r as O,o as Ue,l as $o,m as Io,n as X,w as _e,q as Ro,s as Ke,v as To,x as le,y as ze,z as Ve,A as Bo,B as Po,C as Mo,D as Ao,E as he,F as ye,G as Lo,T as We,H as Eo,N as Se,I as Ho,J as me,K as Fo,L as No,M as Oo,O as jo,P as Do,Q as qo,R as q,S as Uo,U as Y,V as Ko,W as Vo,X as Wo,Y as Fe,Z as Ye,_ as Xe,$ as oe,a0 as ee,a1 as we,a2 as Yo,a3 as ke,a4 as xe,a5 as de,a6 as Xo,a7 as Go,a8 as re,a9 as Ge,aa as R,ab as F,ac as V,ad as D,ae as N,af as ve,ag as I,ah as K,ai as $e,aj as Ie,ak as Zo,al as Re,am as Ze,an as Ne,ao as U,ap as Je,aq as Qe,ar as eo,as as Jo,at as Qo,au as oo,av as Te,aw as et,ax as ot,ay as Be,az as Ce,aA as Oe,aB as tt}from"./index.3d03cbd1.js";import{_ as nt}from"./logo.df7e078d.js";import{C as rt,_ as Pe,N as it,c as lt,u as at,r as to,a as Z,b as fe,d as st}from"./icon.88d3c9f5.js";import{u as ae}from"./use-merged-state.2978ae50.js";import{f as ie}from"./on-fonts-ready.a9991d99.js";import"./keys.b2e8db99.js";const ct=M({name:"ChevronDownFilled",render(){return p("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),dt=f("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[h("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),h("a",`
 color: inherit;
 text-decoration: inherit;
 `),f("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[f("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),h("&:not(:last-child)",[B("clickable",[g("link",`
 cursor: pointer;
 `,[h("&:hover",`
 background-color: var(--n-item-color-hover);
 `),h("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),g("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[h("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[f("icon",`
 color: var(--n-item-text-color-hover);
 `)]),h("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[f("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),g("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),h("&:last-child",[g("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[f("icon",`
 color: var(--n-item-text-color-active);
 `)]),g("separator",`
 display: none;
 `)])])]),no=ne("n-breadcrumb"),ut=Object.assign(Object.assign({},G.props),{separator:{type:String,default:"/"}}),ht=M({name:"Breadcrumb",props:ut,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=te(e),r=G("Breadcrumb","-breadcrumb",dt,ko,e,o);W(no,{separatorRef:Q(e,"separator"),mergedClsPrefixRef:o});const a=$(()=>{const{common:{cubicBezierEaseInOut:s},self:{separatorColor:m,itemTextColor:d,itemTextColorHover:v,itemTextColorPressed:y,itemTextColorActive:b,fontSize:l,fontWeightActive:C,itemBorderRadius:u,itemColorHover:S,itemColorPressed:P,itemLineHeight:A}}=r.value;return{"--n-font-size":l,"--n-bezier":s,"--n-item-text-color":d,"--n-item-text-color-hover":v,"--n-item-text-color-pressed":y,"--n-item-text-color-active":b,"--n-separator-color":m,"--n-item-color-hover":S,"--n-item-color-pressed":P,"--n-item-border-radius":u,"--n-font-weight-active":C,"--n-item-line-height":A}}),n=t?se("breadcrumb",void 0,a,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},p("ul",null,this.$slots))}}),mt=Io?window:null,vt=(e=mt)=>{const o=()=>{const{hash:a,host:n,hostname:s,href:m,origin:d,pathname:v,port:y,protocol:b,search:l}=(e==null?void 0:e.location)||{};return{hash:a,host:n,hostname:s,href:m,origin:d,pathname:v,port:y,protocol:b,search:l}},t=()=>{r.value=o()},r=O(o());return Ue(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),$o(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),r},ft={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},pt=M({name:"BreadcrumbItem",props:ft,setup(e,{slots:o}){const t=X(no,null);if(!t)return _e("breadcrumb","`n-breadcrumb-item` must be placed inside `n-breadcrumb`."),()=>null;const{separatorRef:r,mergedClsPrefixRef:a}=t,n=vt(),s=$(()=>e.href?"a":"span"),m=$(()=>n.value.href===e.href?"location":null);return()=>{const{value:d}=a;return p("li",{class:[`${d}-breadcrumb-item`,e.clickable&&`${d}-breadcrumb-item--clickable`]},p(s.value,{class:`${d}-breadcrumb-item__link`,"aria-current":m.value,href:e.href,onClick:e.onClick},o),p("span",{class:`${d}-breadcrumb-item__separator`,"aria-hidden":"true"},Ro(o.separator,()=>{var v;return[(v=e.separator)!==null&&v!==void 0?v:r.value]})))}}}),gt=M({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const o=O(!!e.show),t=O(null),r=X(Ke);let a=0,n="",s=null;const m=O(!1),d=O(!1),v=$(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:y,mergedRtlRef:b}=te(e),l=To("Drawer",b,y),C=x=>{d.value=!0,a=v.value?x.clientY:x.clientX,n=document.body.style.cursor,document.body.style.cursor=v.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",E),document.body.addEventListener("mouseleave",L),document.body.addEventListener("mouseup",H)},u=()=>{s!==null&&(window.clearTimeout(s),s=null),d.value?m.value=!0:s=window.setTimeout(()=>{m.value=!0},300)},S=()=>{s!==null&&(window.clearTimeout(s),s=null),m.value=!1},{doUpdateHeight:P,doUpdateWidth:A}=r,E=x=>{var k,T;if(d.value)if(v.value){let i=((k=t.value)===null||k===void 0?void 0:k.offsetHeight)||0;const z=a-x.clientY;i+=e.placement==="bottom"?z:-z,P(i),a=x.clientY}else{let i=((T=t.value)===null||T===void 0?void 0:T.offsetWidth)||0;const z=a-x.clientX;i+=e.placement==="right"?z:-z,A(i),a=x.clientX}},H=()=>{d.value&&(a=0,d.value=!1,document.body.style.cursor=n,document.body.removeEventListener("mousemove",E),document.body.removeEventListener("mouseup",H),document.body.removeEventListener("mouseleave",L))},L=H;le(()=>{e.show&&(o.value=!0)}),ze(()=>e.show,x=>{x||H()}),Ve(()=>{H()});const _=$(()=>{const{show:x}=e,k=[[ye,x]];return e.showMask||k.push([Bo,e.onClickoutside,void 0,{capture:!0}]),k});function w(){var x;o.value=!1,(x=e.onAfterLeave)===null||x===void 0||x.call(e)}return Po($(()=>e.blockScroll&&o.value)),W(Ho,t),W(Mo,null),W(Ao,null),{bodyRef:t,rtlEnabled:l,mergedClsPrefix:r.mergedClsPrefixRef,isMounted:r.isMountedRef,mergedTheme:r.mergedThemeRef,displayed:o,transitionName:$(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:w,bodyDirectives:_,handleMousedownResizeTrigger:C,handleMouseenterResizeTrigger:u,handleMouseleaveResizeTrigger:S,isDragging:d,isHoverOnResizeTrigger:m}},render(){const{$slots:e,mergedClsPrefix:o}=this;return this.displayDirective==="show"||this.displayed||this.show?he(p("div",{role:"none"},p(Lo,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>p(We,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>he(p("div",Eo(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${o}-drawer`,this.rtlEnabled&&`${o}-drawer--rtl`,`${o}-drawer--${this.placement}-placement`,this.isDragging&&`${o}-drawer--unselectable`,this.nativeScrollbar&&`${o}-drawer--native-scrollbar`]}),[this.resizable?p("div",{class:[`${o}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${o}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?p("div",{class:`${o}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):p(Se,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${o}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[ye,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:bt,cubicBezierEaseOut:xt}=me;function _t({duration:e="0.3s",leaveDuration:o="0.2s",name:t="slide-in-from-right"}={}){return[h(`&.${t}-transition-leave-active`,{transition:`transform ${o} ${bt}`}),h(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${xt}`}),h(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),h(`&.${t}-transition-enter-from`,{transform:"translateX(100%)"}),h(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),h(`&.${t}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:yt,cubicBezierEaseOut:wt}=me;function Ct({duration:e="0.3s",leaveDuration:o="0.2s",name:t="slide-in-from-left"}={}){return[h(`&.${t}-transition-leave-active`,{transition:`transform ${o} ${yt}`}),h(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${wt}`}),h(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),h(`&.${t}-transition-enter-from`,{transform:"translateX(-100%)"}),h(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),h(`&.${t}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:zt,cubicBezierEaseOut:St}=me;function kt({duration:e="0.3s",leaveDuration:o="0.2s",name:t="slide-in-from-top"}={}){return[h(`&.${t}-transition-leave-active`,{transition:`transform ${o} ${zt}`}),h(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${St}`}),h(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),h(`&.${t}-transition-enter-from`,{transform:"translateY(-100%)"}),h(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),h(`&.${t}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:$t,cubicBezierEaseOut:It}=me;function Rt({duration:e="0.3s",leaveDuration:o="0.2s",name:t="slide-in-from-bottom"}={}){return[h(`&.${t}-transition-leave-active`,{transition:`transform ${o} ${$t}`}),h(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${It}`}),h(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),h(`&.${t}-transition-enter-from`,{transform:"translateY(100%)"}),h(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),h(`&.${t}-transition-leave-to`,{transform:"translateY(100%)"})]}const Tt=h([f("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[_t(),Ct(),kt(),Rt(),B("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),B("native-scrollbar",[f("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),g("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[B("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),f("drawer-content-wrapper",`
 box-sizing: border-box;
 `),f("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[B("native-scrollbar",[f("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),f("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),f("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),f("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[g("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),f("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),B("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[g("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),B("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[g("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),B("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[g("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),B("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[g("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),h("body",[h(">",[f("drawer-container",{position:"fixed"})])]),f("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[h("> *",{pointerEvents:"all"})]),f("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[B("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Fo({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Bt=Object.assign(Object.assign({},G.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Pt=M({name:"Drawer",inheritAttrs:!1,props:Bt,setup(e){le(()=>{e.drawerStyle!==void 0&&Y("drawer","`drawer-style` is deprecated, please use `style` instead."),e.drawerClass!==void 0&&Y("drawer","`drawer-class` is deprecated, please use `class` instead."),e.target!==void 0&&Y("drawer","`target` is deprecated, please use `to` instead."),e.onShow!==void 0&&Y("drawer","`on-show` is deprecated, please use `on-update:show` instead."),e.onHide!==void 0&&Y("drawer","`on-hide` is deprecated, please use `on-update:show` instead.")});const{mergedClsPrefixRef:o,namespaceRef:t,inlineThemeDisabled:r}=te(e),a=No(),n=G("Drawer","-drawer",Tt,Do,e,o),s=O(e.defaultWidth),m=O(e.defaultHeight),d=ae(Q(e,"width"),s),v=ae(Q(e,"height"),m),y=$(()=>{const{placement:_}=e;return _==="top"||_==="bottom"?"":ie(d.value)}),b=$(()=>{const{placement:_}=e;return _==="left"||_==="right"?"":ie(v.value)}),l=_=>{const{onUpdateWidth:w,"onUpdate:width":x}=e;w&&q(w,_),x&&q(x,_),s.value=_},C=_=>{const{onUpdateHeight:w,"onUpdate:width":x}=e;w&&q(w,_),x&&q(x,_),m.value=_},u=$(()=>[{width:y.value,height:b.value},e.drawerStyle||""]);function S(_){const{onMaskClick:w,maskClosable:x}=e;x&&E(!1),w&&w(_)}const P=Oo();function A(_){var w;(w=e.onEsc)===null||w===void 0||w.call(e),e.show&&e.closeOnEsc&&qo(_)&&!P.value&&E(!1)}function E(_){const{onHide:w,onUpdateShow:x,"onUpdate:show":k}=e;x&&q(x,_),k&&q(k,_),w&&!_&&q(w,_)}W(Ke,{isMountedRef:a,mergedThemeRef:n,mergedClsPrefixRef:o,doUpdateShow:E,doUpdateHeight:C,doUpdateWidth:l});const H=$(()=>{const{common:{cubicBezierEaseInOut:_,cubicBezierEaseIn:w,cubicBezierEaseOut:x},self:{color:k,textColor:T,boxShadow:i,lineHeight:z,headerPadding:j,footerPadding:pe,bodyPadding:ge,titleFontSize:be,titleTextColor:c,titleFontWeight:vo,headerBorderBottom:fo,footerBorderTop:po,closeIconColor:go,closeIconColorHover:bo,closeIconColorPressed:xo,closeColorHover:_o,closeColorPressed:yo,closeIconSize:wo,closeSize:Co,closeBorderRadius:zo,resizableTriggerColorHover:So}}=n.value;return{"--n-line-height":z,"--n-color":k,"--n-text-color":T,"--n-box-shadow":i,"--n-bezier":_,"--n-bezier-out":x,"--n-bezier-in":w,"--n-header-padding":j,"--n-body-padding":ge,"--n-footer-padding":pe,"--n-title-text-color":c,"--n-title-font-size":be,"--n-title-font-weight":vo,"--n-header-border-bottom":fo,"--n-footer-border-top":po,"--n-close-icon-color":go,"--n-close-icon-color-hover":bo,"--n-close-icon-color-pressed":xo,"--n-close-size":Co,"--n-close-color-hover":_o,"--n-close-color-pressed":yo,"--n-close-icon-size":wo,"--n-close-border-radius":zo,"--n-resize-trigger-color-hover":So}}),L=r?se("drawer",void 0,H,e):void 0;return{mergedClsPrefix:o,namespace:t,mergedBodyStyle:u,handleMaskClick:S,handleEsc:A,mergedTheme:n,cssVars:r?void 0:H,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender,isMounted:a}},render(){const{mergedClsPrefix:e}=this;return p(jo,{to:this.to,show:this.show},{default:()=>{var o;return(o=this.onRender)===null||o===void 0||o.call(this),he(p("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?p(We,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?p("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,p(gt,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Uo,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Mt=e=>{const{baseColor:o,textColor2:t,bodyColor:r,cardColor:a,dividerColor:n,actionColor:s,scrollbarColor:m,scrollbarColorHover:d,invertedColor:v}=e;return{textColor:t,textColorInverted:"#FFF",color:r,colorEmbedded:s,headerColor:a,headerColorInverted:v,footerColor:s,footerColorInverted:v,headerBorderColor:n,headerBorderColorInverted:v,footerBorderColor:n,footerBorderColorInverted:v,siderBorderColor:n,siderBorderColorInverted:v,siderColor:a,siderColorInverted:v,siderToggleButtonBorder:`1px solid ${n}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:Fe(r,m),siderToggleBarColorHover:Fe(r,d),__invertScrollbar:"true"}},At=Ko({name:"Layout",common:Vo,peers:{Scrollbar:Wo},self:Mt}),ro=At,io=ne("n-layout-sider"),lo={type:String,default:"static"},Lt=f("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[f("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Et={embedded:Boolean,position:lo,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ao=ne("n-layout");function Ht(e){return M({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},G.props),Et),setup(o){const t=O(null),r=O(null),{mergedClsPrefixRef:a,inlineThemeDisabled:n}=te(o),s=G("Layout","-layout",Lt,ro,o,a);function m(S,P){if(o.nativeScrollbar){const{value:A}=t;A&&(P===void 0?A.scrollTo(S):A.scrollTo(S,P))}else{const{value:A}=r;A&&A.scrollTo(S,P)}}W(ao,o);let d=0,v=0;const y=S=>{var P;const A=S.target;d=A.scrollLeft,v=A.scrollTop,(P=o.onScroll)===null||P===void 0||P.call(o,S)};Ye(()=>{if(o.nativeScrollbar){const S=t.value;S&&(S.scrollTop=v,S.scrollLeft=d)}});const b={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},l={scrollTo:m},C=$(()=>{const{common:{cubicBezierEaseInOut:S},self:P}=s.value;return{"--n-bezier":S,"--n-color":o.embedded?P.colorEmbedded:P.color,"--n-text-color":P.textColor}}),u=n?se("layout",$(()=>o.embedded?"e":""),C,o):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:b,mergedTheme:s,handleNativeElScroll:y,cssVars:n?void 0:C,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender},l)},render(){var o;const{mergedClsPrefix:t,hasSider:r}=this;(o=this.onRender)===null||o===void 0||o.call(this);const a=r?this.hasSiderStyle:void 0,n=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return p("div",{class:n,style:this.cssVars},this.nativeScrollbar?p("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):p(Se,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const Ft=Ht(!1),Nt=f("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[B("bordered",[g("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),g("left-placement",[B("bordered",[g("border",`
 right: 0;
 `)])]),B("right-placement",`
 justify-content: flex-start;
 `,[B("bordered",[g("border",`
 left: 0;
 `)]),B("collapsed",[f("layout-toggle-button",[f("base-icon",`
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",[h("&:hover",[g("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),f("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[f("base-icon",`
 transform: rotate(0);
 `)]),f("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[h("&:hover",[g("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),B("collapsed",[f("layout-toggle-bar",[h("&:hover",[g("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),f("layout-toggle-button",[f("base-icon",`
 transform: rotate(0);
 `)])]),f("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[f("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[g("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),g("bottom",`
 position: absolute;
 top: 34px;
 `),h("&:hover",[g("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),g("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),h("&:hover",[g("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),g("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),f("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),B("show-content",[f("layout-sider-scroll-container",{opacity:1})]),B("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Ot=M({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return p("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},p(Xe,{clsPrefix:e},{default:()=>p(rt,null)}))}}),jt=M({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return p("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},p("div",{class:`${e}-layout-toggle-bar__top`}),p("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Dt={position:lo,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},qt=M({name:"LayoutSider",props:Object.assign(Object.assign({},G.props),Dt),setup(e){const o=X(ao);o?o.hasSider||_e("layout-sider","You are putting `n-layout-sider` in a `n-layout` but haven't set `has-sider` on the `n-layout`."):_e("layout-sider","Layout sider is not allowed to be put outside layout.");const t=O(null),r=O(null),a=$(()=>ie(d.value?e.collapsedWidth:e.width)),n=$(()=>e.collapseMode!=="transform"?{}:{minWidth:ie(e.width)}),s=$(()=>o?o.siderPlacement:"left"),m=O(e.defaultCollapsed),d=ae(Q(e,"collapsed"),m);function v(_,w){if(e.nativeScrollbar){const{value:x}=t;x&&(w===void 0?x.scrollTo(_):x.scrollTo(_,w))}else{const{value:x}=r;x&&x.scrollTo(_,w)}}function y(){const{"onUpdate:collapsed":_,onUpdateCollapsed:w,onExpand:x,onCollapse:k}=e,{value:T}=d;w&&q(w,!T),_&&q(_,!T),m.value=!T,T?x&&q(x):k&&q(k)}let b=0,l=0;const C=_=>{var w;const x=_.target;b=x.scrollLeft,l=x.scrollTop,(w=e.onScroll)===null||w===void 0||w.call(e,_)};Ye(()=>{if(e.nativeScrollbar){const _=t.value;_&&(_.scrollTop=l,_.scrollLeft=b)}}),W(io,{collapsedRef:d,collapseModeRef:Q(e,"collapseMode")});const{mergedClsPrefixRef:u,inlineThemeDisabled:S}=te(e),P=G("Layout","-layout-sider",Nt,ro,e,u);function A(_){var w,x;_.propertyName==="max-width"&&(d.value?(w=e.onAfterLeave)===null||w===void 0||w.call(e):(x=e.onAfterEnter)===null||x===void 0||x.call(e))}const E={scrollTo:v},H=$(()=>{const{common:{cubicBezierEaseInOut:_},self:w}=P.value,{siderToggleButtonColor:x,siderToggleButtonBorder:k,siderToggleBarColor:T,siderToggleBarColorHover:i}=w,z={"--n-bezier":_,"--n-toggle-button-color":x,"--n-toggle-button-border":k,"--n-toggle-bar-color":T,"--n-toggle-bar-color-hover":i};return e.inverted?(z["--n-color"]=w.siderColorInverted,z["--n-text-color"]=w.textColorInverted,z["--n-border-color"]=w.siderBorderColorInverted,z["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColorInverted,z.__invertScrollbar=w.__invertScrollbar):(z["--n-color"]=w.siderColor,z["--n-text-color"]=w.textColor,z["--n-border-color"]=w.siderBorderColor,z["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColor),z}),L=S?se("layout-sider",$(()=>e.inverted?"a":"b"),H,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:u,mergedTheme:P,styleMaxWidth:a,mergedCollapsed:d,scrollContainerStyle:n,siderPlacement:s,handleNativeElScroll:C,handleTransitionend:A,handleTriggerClick:y,inlineThemeDisabled:S,cssVars:H,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender},E)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),p("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ie(this.width)}]},this.nativeScrollbar?p("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):p(Se,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?p(jt,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):p(Ot,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?p("div",{class:`${o}-layout-sider__border`}):null)}}),ce=ne("n-menu"),Me=ne("n-submenu"),Ae=ne("n-menu-item-group"),ue=8;function Le(e){const o=X(ce),{props:t,mergedCollapsedRef:r}=o,a=X(Me,null),n=X(Ae,null),s=$(()=>t.mode==="horizontal"),m=$(()=>s.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=$(()=>{var l;return Math.max((l=t.collapsedIconSize)!==null&&l!==void 0?l:t.iconSize,t.iconSize)}),v=$(()=>{var l;return!s.value&&e.root&&r.value&&(l=t.collapsedIconSize)!==null&&l!==void 0?l:t.iconSize}),y=$(()=>{if(s.value)return;const{collapsedWidth:l,indent:C,rootIndent:u}=t,{root:S,isGroup:P}=e,A=u===void 0?C:u;if(S)return r.value?l/2-d.value/2:A;if(n)return C/2+n.paddingLeftRef.value;if(a)return(P?C/2:C)+a.paddingLeftRef.value}),b=$(()=>{const{collapsedWidth:l,indent:C,rootIndent:u}=t,{value:S}=d,{root:P}=e;return s.value||!P||!r.value?ue:(u===void 0?C:u)+S+ue-(l+S)/2});return{dropdownPlacement:m,activeIconSize:v,maxIconSize:d,paddingLeft:y,iconMarginRight:b,NMenu:o,NSubmenu:a}}const Ee={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},so=Object.assign(Object.assign({},Ee),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ut=M({name:"MenuOptionGroup",props:so,setup(e){W(Me,null);const o=Le(e);W(Ae,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:r}=X(ce);return function(){const{value:a}=t,n=o.paddingLeft.value,{nodeProps:s}=r,m=s==null?void 0:s(e.tmNode.rawNode);return p("div",{class:`${a}-menu-item-group`,role:"group"},p("div",Object.assign({},m,{class:[`${a}-menu-item-group-title`,m==null?void 0:m.class],style:[(m==null?void 0:m.style)||"",n!==void 0?`padding-left: ${n}px;`:""]}),oe(e.title),e.extra?p(ee,null," ",oe(e.extra)):null),p("div",null,e.tmNodes.map(d=>He(d,r))))}}}),co=M({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=X(ce);return{menuProps:o,style:$(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:$(()=>{const{maxIconSize:t,activeIconSize:r,iconMarginRight:a}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${r}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:r,renderExtra:a,expandIcon:n}}=this,s=t?t(o.rawNode):oe(this.icon);return p("div",{onClick:m=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,m)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&p("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),p("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(o.rawNode):oe(this.title),this.extra||a?p("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(o.rawNode):oe(this.extra)):null),this.showArrow?p(Xe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>n?n(o.rawNode):p(ct,null)}):null)}}),uo=Object.assign(Object.assign({},Ee),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Kt=M({name:"Submenu",props:uo,setup(e){const o=Le(e),{NMenu:t,NSubmenu:r}=o,{props:a,mergedCollapsedRef:n,mergedThemeRef:s}=t,m=$(()=>{const{disabled:l}=e;return r!=null&&r.mergedDisabledRef.value||a.disabled?!0:l}),d=O(!1);W(Me,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:m}),W(Ae,null);function v(){const{onClick:l}=e;l&&l()}function y(){m.value||(n.value||t.toggleExpand(e.internalKey),v())}function b(l){d.value=l}return{menuProps:a,mergedTheme:s,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:d,paddingLeft:o.paddingLeft,mergedDisabled:m,mergedValue:t.mergedValueRef,childActive:we(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:$(()=>a.mode==="horizontal"?!1:n.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:$(()=>!m.value&&(a.mode==="horizontal"||n.value)),handlePopoverShowChange:b,handleClick:y}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:r}}=this,a=()=>{const{isHorizontal:s,paddingLeft:m,collapsed:d,mergedDisabled:v,maxIconSize:y,activeIconSize:b,title:l,childActive:C,icon:u,handleClick:S,menuProps:{nodeProps:P},dropdownShow:A,iconMarginRight:E,tmNode:H,mergedClsPrefix:L}=this,_=P==null?void 0:P(H.rawNode);return p("div",Object.assign({},_,{class:[`${L}-menu-item`,_==null?void 0:_.class],role:"menuitem"}),p(co,{tmNode:H,paddingLeft:m,collapsed:d,disabled:v,iconMarginRight:E,maxIconSize:y,activeIconSize:b,title:l,extra:this.extra,showArrow:!s,childActive:C,clsPrefix:L,icon:u,hover:A,onClick:S}))},n=()=>p(Yo,null,{default:()=>{const{tmNodes:s,collapsed:m}=this;return m?null:p("div",{class:`${o}-submenu-children`,role:"menu"},s.map(d=>He(d,this.menuProps)))}});return this.root?p(Pe,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>p("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:n())}):p("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),n())}}),ho=Object.assign(Object.assign({},Ee),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Vt=M({name:"MenuOption",props:ho,setup(e){const o=Le(e),{NSubmenu:t,NMenu:r}=o,{props:a,mergedClsPrefixRef:n,mergedCollapsedRef:s}=r,m=t?t.mergedDisabledRef:{value:!1},d=$(()=>m.value||e.disabled);function v(b){const{onClick:l}=e;l&&l(b)}function y(b){d.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),v(b))}return{mergedClsPrefix:n,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:we(()=>e.root&&s.value&&a.mode!=="horizontal"&&!d.value),selected:we(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:y}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:r,nodeProps:a}}=this,n=a==null?void 0:a(t.rawNode);return p("div",Object.assign({},n,{role:"menuitem",class:[`${e}-menu-item`,n==null?void 0:n.class]}),p(it,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):oe(this.title),trigger:()=>p(co,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Wt=M({name:"MenuDivider",setup(){const e=X(ce),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:p("div",{class:`${o.value}-menu-divider`})}}),Yt=ke(so),Xt=ke(ho),Gt=ke(uo);function mo(e){return e.type==="divider"||e.type==="render"}function Zt(e){return e.type==="divider"}function He(e,o){const{rawNode:t}=e,{show:r}=t;if(r===!1)return null;if(mo(t))return Zt(t)?p(Wt,Object.assign({key:e.key},t.props)):null;const{labelField:a}=o,{key:n,level:s,isGroup:m}=e,d=Object.assign(Object.assign({},t),{title:t.title||t[a],extra:t.titleExtra||t.extra,key:n,internalKey:n,level:s,root:s===0,isGroup:m});return e.children?e.isGroup?p(Ut,xe(d,Yt,{tmNode:e,tmNodes:e.children,key:n})):p(Kt,xe(d,Gt,{key:n,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):p(Vt,xe(d,Xt,{key:n,tmNode:e}))}function Jt(e){le(()=>{e.items&&Y("menu","`items` is deprecated, please use `options` instead."),e.onOpenNamesChange&&Y("menu","`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.onSelect&&Y("menu","`on-select` is deprecated, please use `on-update:value` instead."),e.onExpandedNamesChange&&Y("menu","`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.expandedNames&&Y("menu","`expanded-names` is deprecated, please use `expanded-keys` instead."),e.defaultExpandedNames&&Y("menu","`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.")})}const je=[h("&::before","background-color: var(--n-item-color-hover);"),g("arrow",`
 color: var(--n-arrow-color-hover);
 `),g("icon",`
 color: var(--n-item-icon-color-hover);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[h("a",`
 color: var(--n-item-text-color-hover);
 `),g("extra",`
 color: var(--n-item-text-color-hover);
 `)])],De=[g("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[h("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),g("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Qt=h([f("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[B("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[f("submenu","margin: 0;"),f("menu-item","margin: 0;"),f("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[h("&::before","display: none;"),B("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),f("menu-item-content",[B("selected",[g("icon","color: var(--n-item-icon-color-active-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[h("a","color: var(--n-item-text-color-active-horizontal);"),g("extra","color: var(--n-item-text-color-active-horizontal);")])]),B("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[h("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),g("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),g("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),de("disabled",[de("selected, child-active",[h("&:focus-within",De)]),B("selected",[J(null,[g("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[h("a","color: var(--n-item-text-color-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),B("child-active",[J(null,[g("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[h("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),J("border-bottom: 2px solid var(--n-border-color-horizontal);",De)]),f("menu-item-content-header",[h("a","color: var(--n-item-text-color-horizontal);")])])]),B("collapsed",[f("menu-item-content",[B("selected",[h("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),f("menu-item-content-header","opacity: 0;"),g("arrow","opacity: 0;"),g("icon","color: var(--n-item-icon-color-collapsed);")])]),f("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),f("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[h("> *","z-index: 1;"),h("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),B("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),B("collapsed",[g("arrow","transform: rotate(0);")]),B("selected",[h("&::before","background-color: var(--n-item-color-active);"),g("arrow","color: var(--n-arrow-color-active);"),g("icon","color: var(--n-item-icon-color-active);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[h("a","color: var(--n-item-text-color-active);"),g("extra","color: var(--n-item-text-color-active);")])]),B("child-active",[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[h("a",`
 color: var(--n-item-text-color-child-active);
 `),g("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),g("arrow",`
 color: var(--n-arrow-color-child-active);
 `),g("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),de("disabled",[de("selected, child-active",[h("&:focus-within",je)]),B("selected",[J(null,[g("arrow","color: var(--n-arrow-color-active-hover);"),g("icon","color: var(--n-item-icon-color-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[h("a","color: var(--n-item-text-color-active-hover);"),g("extra","color: var(--n-item-text-color-active-hover);")])])]),B("child-active",[J(null,[g("arrow","color: var(--n-arrow-color-child-active-hover);"),g("icon","color: var(--n-item-icon-color-child-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[h("a","color: var(--n-item-text-color-child-active-hover);"),g("extra","color: var(--n-item-text-color-child-active-hover);")])])]),B("selected",[J(null,[h("&::before","background-color: var(--n-item-color-active-hover);")])]),J(null,je)]),g("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),g("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),f("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[h("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[h("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),g("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),f("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[f("menu-item-content",`
 height: var(--n-item-height);
 `),f("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Xo({duration:".2s"})])]),f("menu-item-group",[f("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),f("menu-tooltip",[h("a",`
 color: inherit;
 text-decoration: none;
 `)]),f("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function J(e,o){return[B("hover",e,o),h("&:hover",e,o)]}const en=Object.assign(Object.assign({},G.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),on=M({name:"Menu",props:en,setup(e){Jt(e);const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=te(e),r=G("Menu","-menu",Qt,Go,e,o),a=X(io,null),n=$(()=>{var k;const{collapsed:T}=e;if(T!==void 0)return T;if(a){const{collapseModeRef:i,collapsedRef:z}=a;if(i.value==="width")return(k=z.value)!==null&&k!==void 0?k:!1}return!1}),s=$(()=>{const{keyField:k,childrenField:T,disabledField:i}=e;return lt(e.items||e.options,{getIgnored(z){return mo(z)},getChildren(z){return z[T]},getDisabled(z){return z[i]},getKey(z){var j;return(j=z[k])!==null&&j!==void 0?j:z.name}})}),m=$(()=>new Set(s.value.treeNodes.map(k=>k.key))),{watchProps:d}=e,v=O(null);d!=null&&d.includes("defaultValue")?le(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const y=Q(e,"value"),b=ae(y,v),l=O([]),C=()=>{l.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(b.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?le(C):C();const u=at(e,["expandedNames","expandedKeys"]),S=ae(u,l),P=$(()=>s.value.treeNodes),A=$(()=>s.value.getPath(b.value).keyPath);W(ce,{props:e,mergedCollapsedRef:n,mergedThemeRef:r,mergedValueRef:b,mergedExpandedKeysRef:S,activePathRef:A,mergedClsPrefixRef:o,isHorizontalRef:$(()=>e.mode==="horizontal"),invertedRef:Q(e,"inverted"),doSelect:E,toggleExpand:L});function E(k,T){const{"onUpdate:value":i,onUpdateValue:z,onSelect:j}=e;z&&q(z,k,T),i&&q(i,k,T),j&&q(j,k,T),v.value=k}function H(k){const{"onUpdate:expandedKeys":T,onUpdateExpandedKeys:i,onExpandedNamesChange:z,onOpenNamesChange:j}=e;T&&q(T,k),i&&q(i,k),z&&q(z,k),j&&q(j,k),l.value=k}function L(k){const T=Array.from(S.value),i=T.findIndex(z=>z===k);if(~i)T.splice(i,1);else{if(e.accordion&&m.value.has(k)){const z=T.findIndex(j=>m.value.has(j));z>-1&&T.splice(z,1)}T.push(k)}H(T)}const _=k=>{const T=s.value.getPath(k!=null?k:b.value,{includeSelf:!1}).keyPath;if(!T.length)return;const i=Array.from(S.value),z=new Set([...i,...T]);e.accordion&&m.value.forEach(j=>{z.has(j)&&!T.includes(j)&&z.delete(j)}),H(Array.from(z))},w=$(()=>{const{inverted:k}=e,{common:{cubicBezierEaseInOut:T},self:i}=r.value,{borderRadius:z,borderColorHorizontal:j,fontSize:pe,itemHeight:ge,dividerColor:be}=i,c={"--n-divider-color":be,"--n-bezier":T,"--n-font-size":pe,"--n-border-color-horizontal":j,"--n-border-radius":z,"--n-item-height":ge};return k?(c["--n-group-text-color"]=i.groupTextColorInverted,c["--n-color"]=i.colorInverted,c["--n-item-text-color"]=i.itemTextColorInverted,c["--n-item-text-color-hover"]=i.itemTextColorHoverInverted,c["--n-item-text-color-active"]=i.itemTextColorActiveInverted,c["--n-item-text-color-child-active"]=i.itemTextColorChildActiveInverted,c["--n-item-text-color-child-active-hover"]=i.itemTextColorChildActiveInverted,c["--n-item-text-color-active-hover"]=i.itemTextColorActiveHoverInverted,c["--n-item-icon-color"]=i.itemIconColorInverted,c["--n-item-icon-color-hover"]=i.itemIconColorHoverInverted,c["--n-item-icon-color-active"]=i.itemIconColorActiveInverted,c["--n-item-icon-color-active-hover"]=i.itemIconColorActiveHoverInverted,c["--n-item-icon-color-child-active"]=i.itemIconColorChildActiveInverted,c["--n-item-icon-color-child-active-hover"]=i.itemIconColorChildActiveHoverInverted,c["--n-item-icon-color-collapsed"]=i.itemIconColorCollapsedInverted,c["--n-item-text-color-horizontal"]=i.itemTextColorHorizontalInverted,c["--n-item-text-color-hover-horizontal"]=i.itemTextColorHoverHorizontalInverted,c["--n-item-text-color-active-horizontal"]=i.itemTextColorActiveHorizontalInverted,c["--n-item-text-color-child-active-horizontal"]=i.itemTextColorChildActiveHorizontalInverted,c["--n-item-text-color-child-active-hover-horizontal"]=i.itemTextColorChildActiveHoverHorizontalInverted,c["--n-item-text-color-active-hover-horizontal"]=i.itemTextColorActiveHoverHorizontalInverted,c["--n-item-icon-color-horizontal"]=i.itemIconColorHorizontalInverted,c["--n-item-icon-color-hover-horizontal"]=i.itemIconColorHoverHorizontalInverted,c["--n-item-icon-color-active-horizontal"]=i.itemIconColorActiveHorizontalInverted,c["--n-item-icon-color-active-hover-horizontal"]=i.itemIconColorActiveHoverHorizontalInverted,c["--n-item-icon-color-child-active-horizontal"]=i.itemIconColorChildActiveHorizontalInverted,c["--n-item-icon-color-child-active-hover-horizontal"]=i.itemIconColorChildActiveHoverHorizontalInverted,c["--n-arrow-color"]=i.arrowColorInverted,c["--n-arrow-color-hover"]=i.arrowColorHoverInverted,c["--n-arrow-color-active"]=i.arrowColorActiveInverted,c["--n-arrow-color-active-hover"]=i.arrowColorActiveHoverInverted,c["--n-arrow-color-child-active"]=i.arrowColorChildActiveInverted,c["--n-arrow-color-child-active-hover"]=i.arrowColorChildActiveHoverInverted,c["--n-item-color-hover"]=i.itemColorHoverInverted,c["--n-item-color-active"]=i.itemColorActiveInverted,c["--n-item-color-active-hover"]=i.itemColorActiveHoverInverted,c["--n-item-color-active-collapsed"]=i.itemColorActiveCollapsedInverted):(c["--n-group-text-color"]=i.groupTextColor,c["--n-color"]=i.color,c["--n-item-text-color"]=i.itemTextColor,c["--n-item-text-color-hover"]=i.itemTextColorHover,c["--n-item-text-color-active"]=i.itemTextColorActive,c["--n-item-text-color-child-active"]=i.itemTextColorChildActive,c["--n-item-text-color-child-active-hover"]=i.itemTextColorChildActiveHover,c["--n-item-text-color-active-hover"]=i.itemTextColorActiveHover,c["--n-item-icon-color"]=i.itemIconColor,c["--n-item-icon-color-hover"]=i.itemIconColorHover,c["--n-item-icon-color-active"]=i.itemIconColorActive,c["--n-item-icon-color-active-hover"]=i.itemIconColorActiveHover,c["--n-item-icon-color-child-active"]=i.itemIconColorChildActive,c["--n-item-icon-color-child-active-hover"]=i.itemIconColorChildActiveHover,c["--n-item-icon-color-collapsed"]=i.itemIconColorCollapsed,c["--n-item-text-color-horizontal"]=i.itemTextColorHorizontal,c["--n-item-text-color-hover-horizontal"]=i.itemTextColorHoverHorizontal,c["--n-item-text-color-active-horizontal"]=i.itemTextColorActiveHorizontal,c["--n-item-text-color-child-active-horizontal"]=i.itemTextColorChildActiveHorizontal,c["--n-item-text-color-child-active-hover-horizontal"]=i.itemTextColorChildActiveHoverHorizontal,c["--n-item-text-color-active-hover-horizontal"]=i.itemTextColorActiveHoverHorizontal,c["--n-item-icon-color-horizontal"]=i.itemIconColorHorizontal,c["--n-item-icon-color-hover-horizontal"]=i.itemIconColorHoverHorizontal,c["--n-item-icon-color-active-horizontal"]=i.itemIconColorActiveHorizontal,c["--n-item-icon-color-active-hover-horizontal"]=i.itemIconColorActiveHoverHorizontal,c["--n-item-icon-color-child-active-horizontal"]=i.itemIconColorChildActiveHorizontal,c["--n-item-icon-color-child-active-hover-horizontal"]=i.itemIconColorChildActiveHoverHorizontal,c["--n-arrow-color"]=i.arrowColor,c["--n-arrow-color-hover"]=i.arrowColorHover,c["--n-arrow-color-active"]=i.arrowColorActive,c["--n-arrow-color-active-hover"]=i.arrowColorActiveHover,c["--n-arrow-color-child-active"]=i.arrowColorChildActive,c["--n-arrow-color-child-active-hover"]=i.arrowColorChildActiveHover,c["--n-item-color-hover"]=i.itemColorHover,c["--n-item-color-active"]=i.itemColorActive,c["--n-item-color-active-hover"]=i.itemColorActiveHover,c["--n-item-color-active-collapsed"]=i.itemColorActiveCollapsed),c}),x=t?se("menu",$(()=>e.inverted?"a":"b"),w,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:u,uncontrolledExpanededKeys:l,mergedExpandedKeys:S,uncontrolledValue:v,mergedValue:b,activePath:A,tmNodes:P,mergedTheme:r,mergedCollapsed:n,cssVars:t?void 0:w,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender,showOption:_}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:r}=this;return r==null||r(),p("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>He(a,this.$props)))}}),tn=M({__name:"SideLogo",setup(e){const o="\u5947\u601DAdmin",t=re();return(r,a)=>{const n=nt,s=Ge("router-link");return R(),F(s,{"h-60":"","f-c-c":"",to:"/"},{default:V(()=>[D(n,{"text-36":"","color-primary":""}),he(N("h2",{"ml-15":"","color-primary":"","text-18":"","font-bold":"","max-w-140":"","flex-shrink-0":""},ve(I(o)),513),[[ye,!I(t).sider.collapsed]])]),_:1})}}}),nn=K(tn,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/sidebar/components/SideLogo.vue"]]),rn=M({__name:"SideMenu",setup(e){const o=$e(),t=Ie(),r=Zo(),a=re(),n=Re(),s=O();ze(t,async()=>{var l;await Ze(),(l=s.value)==null||l.showOption()});const m=$(()=>r.menus.map(l=>v(l)).sort((l,C)=>l.order-C.order));function d(l,C){return Ne(C)?C:`/${[l,C].filter(u=>!!u&&u!=="/").map(u=>u.replace(/(^\/)|(\/$)/g,"")).join("/")}`}function v(l,C=""){var P,A;let u={label:l.meta&&l.meta.title||l.name,key:l.name,path:d(C,l.path),icon:y(l.meta),order:((P=l.meta)==null?void 0:P.order)||0};const S=l.children?l.children.filter(E=>E.name&&!E.isHidden):[];if(!S.length)return u;if(S.length===1){const E=S[0];u={label:((A=E.meta)==null?void 0:A.title)||E.name,key:E.name,path:d(u.path,E.path),icon:y(E.meta),order:u.order};const H=E.children?E.children.filter(L=>L.name&&!L.isHidden):[];H.length===1?u=v(H[0],u.path):H.length>1&&(u.children=H.map(L=>v(L,u.path)).sort((L,_)=>L.order-_.order))}else u.children=S.map(E=>v(E,u.path)).sort((E,H)=>E.order-H.order);return u}function y(l){return l!=null&&l.customIcon?to(l.customIcon,{size:18}):l!=null&&l.icon?Z(l.icon,{size:18}):null}function b(l,C){var S;const u=C;if(Ne(u.path)){window.open(u.path);return}u.path===t.path&&!((S=t.meta)!=null&&S.keepAlive)?n.reloadPage():o.push(u.path),a.isMobile&&a.setCollapsed(!0)}return(l,C)=>{const u=on;return R(),F(u,{ref_key:"menu",ref:s,class:"side-menu",accordion:"",indent:18,"collapsed-icon-size":22,"collapsed-width":64,options:I(m),value:I(t).meta&&I(t).meta.activeMenu||I(t).name,"onUpdate:value":b},null,8,["options","value"])}}});const ln=K(rn,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/sidebar/components/SideMenu.vue"]]),an=M({__name:"index",setup(e){return(o,t)=>(R(),U(ee,null,[D(nn),D(ln)],64))}}),qe=K(an,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/sidebar/index.vue"]]),sn=M({__name:"BreadCrumb",setup(e){const o=$e(),t=Ie();function r(n){n!==t.path&&o.push(n)}function a(n,s=16){return n!=null&&n.customIcon?to(n.customIcon,{size:s}):n!=null&&n.icon?Z(n.icon,{size:s}):null}return(n,s)=>{const m=pt,d=ht;return R(),F(d,null,{default:V(()=>[(R(!0),U(ee,null,Je(I(t).matched.filter(v=>{var y;return!!((y=v.meta)!=null&&y.title)}),v=>(R(),F(m,{key:v.path,onClick:y=>r(v.path)},{default:V(()=>[(R(),F(Qe(a(v.meta)))),eo(" "+ve(v.meta.title),1)]),_:2},1032,["onClick"]))),128))]),_:1})}}}),cn=K(sn,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/header/components/BreadCrumb.vue"]]),dn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},un=N("path",{fill:"currentColor",d:"M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M3 21h18v-2H3m0-7l4 4V8m4 9h10v-2H11v2Z"},null,-1),hn=[un];function mn(e,o){return R(),U("svg",dn,hn)}const vn={name:"mdi-format-indent-decrease",render:mn},fn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},pn=N("path",{fill:"currentColor",d:"M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M11 17h10v-2H11M3 8v8l4-4m-4 9h18v-2H3v2Z"},null,-1),gn=[pn];function bn(e,o){return R(),U("svg",fn,gn)}const xn={name:"mdi-format-indent-increase",render:bn},_n=M({__name:"MenuCollapse",setup(e){const o=re();return(t,r)=>{const a=xn,n=vn,s=fe;return R(),F(s,{size:"20","cursor-pointer":"",onClick:r[0]||(r[0]=m=>I(o).toggleCollapsed())},{default:V(()=>[I(o).sider.collapsed?(R(),F(a,{key:0})):(R(),F(n,{key:1}))]),_:1})}}}),yn=K(_n,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/header/components/MenuCollapse.vue"]]),wn={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Cn=N("path",{fill:"currentColor",d:"m290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6l43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6L423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"},null,-1),zn=[Cn];function Sn(e,o){return R(),U("svg",wn,zn)}const kn={name:"ant-design-fullscreen-outlined",render:Sn},$n={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},In=N("path",{fill:"currentColor",d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 0 0 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 0 0 391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6L877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 0 0-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"},null,-1),Rn=[In];function Tn(e,o){return R(),U("svg",$n,Rn)}const Bn={name:"ant-design-fullscreen-exit-outlined",render:Tn},Pn=M({__name:"FullScreen",setup(e){const{isFullscreen:o,toggle:t}=Jo();return(r,a)=>{const n=Bn,s=kn,m=fe;return R(),F(m,{"mr-20":"","cursor-pointer":"",size:"18",onClick:I(t)},{default:V(()=>[I(o)?(R(),F(n,{key:0})):(R(),F(s,{key:1}))]),_:1},8,["onClick"])}}}),Mn=K(Pn,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/header/components/FullScreen.vue"]]),An={flex:"","items-center":"","cursor-pointer":""},Ln=["src"],En={hidden:"","sm:block":""},Hn=M({__name:"UserAvatar",setup(e){const o=Qo(),t=[{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:Z("mdi:exit-to-app",{size:14})}];function r(a){var n;a==="logout"&&((n=window.$dialog)==null||n.info({content:"\u786E\u8BA4\u9000\u51FA\uFF1F",title:"\u63D0\u793A",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick(){var s;o.logout(),(s=window.$message)==null||s.success("\u5DF2\u9000\u51FA\u767B\u5F55!")}}))}return(a,n)=>{const s=Pe;return R(),F(s,{options:t,onSelect:r},{default:V(()=>[N("div",An,[N("img",{src:I(o).avatar,mr10:"","w-35":"","h-35":"","rounded-full":""},null,8,Ln),N("span",En,ve(I(o).name),1)])]),_:1})}}}),Fn=K(Hn,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/header/components/UserAvatar.vue"]]),Nn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},On=N("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),jn=[On];function Dn(e,o){return R(),U("svg",Nn,jn)}const qn={name:"mdi-github",render:Dn},Un=M({__name:"GithubSite",setup(e){function o(){window.open("https://github.com/zclzone/qs-admin")}return(t,r)=>{const a=qn,n=fe;return R(),F(n,{"mr-20":"",size:"18",style:{cursor:"pointer"},onClick:o},{default:V(()=>[D(a)]),_:1})}}}),Kn=K(Un,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/header/components/GithubSite.vue"]]),Vn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Wn=N("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),Yn=[Wn];function Xn(e,o){return R(),U("svg",Vn,Yn)}const Gn={name:"mdi-white-balance-sunny",render:Xn},Zn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Jn=N("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),Qn=[Jn];function er(e,o){return R(),U("svg",Zn,Qn)}const or={name:"mdi-moon-waning-crescent",render:er},tr=M({__name:"ThemeMode",setup(e){const o=re();return(t,r)=>{const a=or,n=Gn,s=fe;return R(),F(s,{"mr-20":"","cursor-pointer":"",size:"18",onClick:I(o).toggleDarkMode},{default:V(()=>[I(o).darkMode?(R(),F(a,{key:0})):(R(),F(n,{key:1}))]),_:1},8,["onClick"])}}}),nr=K(tr,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/header/components/ThemeMode.vue"]]),rr={flex:"","items-center":""},ir={"ml-auto":"",flex:"","items-center":""},lr=M({__name:"index",setup(e){return(o,t)=>(R(),U(ee,null,[N("div",rr,[D(yn),D(cn,{"ml-15":"",hidden:"","sm:block":""})]),N("div",ir,[D(nr),D(Kn),D(Mn),D(Fn)])],64))}}),ar=K(lr,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/header/index.vue"]]),sr=M({__name:"ContextMenu",props:{show:{type:Boolean,required:!1,default:!1},currentPath:{type:String,required:!1,default:""},x:{type:Number,required:!0},y:{type:Number,required:!0}},emits:["update:show"],setup(e,{emit:o}){const t=e,r=oo(),a=Re(),n=$(()=>[{label:"\u91CD\u65B0\u52A0\u8F7D",key:"reload",disabled:t.currentPath!==r.activeTab,icon:Z("mdi:refresh",{size:14})},{label:"\u5173\u95ED",key:"close",disabled:r.tabs.length<=1,icon:Z("mdi:close",{size:14})},{label:"\u5173\u95ED\u5176\u4ED6",key:"close-other",disabled:r.tabs.length<=1,icon:Z("mdi:arrow-expand-horizontal",{size:14})},{label:"\u5173\u95ED\u5DE6\u4FA7",key:"close-left",disabled:r.tabs.length<=1||t.currentPath===r.tabs[0].path,icon:Z("mdi:arrow-expand-left",{size:14})},{label:"\u5173\u95ED\u53F3\u4FA7",key:"close-right",disabled:r.tabs.length<=1||t.currentPath===r.tabs[r.tabs.length-1].path,icon:Z("mdi:arrow-expand-right",{size:14})}]),s=$({get(){return t.show},set(y){o("update:show",y)}}),m=new Map([["reload",()=>{a.reloadPage()}],["close",()=>{r.removeTab(t.currentPath)}],["close-other",()=>{r.removeOther(t.currentPath)}],["close-left",()=>{r.removeLeft(t.currentPath)}],["close-right",()=>{r.removeRight(t.currentPath)}]]);function d(){s.value=!1}function v(y){const b=m.get(y);b&&b(),d()}return(y,b)=>{const l=Pe;return R(),F(l,{show:I(s),options:I(n),x:e.x,y:e.y,placement:"bottom-start",onClickoutside:d,onSelect:v},null,8,["show","options","x","y"])}}}),cr=K(sr,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/tab/components/ContextMenu.vue"]]),dr={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ur=N("path",{fill:"currentColor",d:"M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"},null,-1),hr=[ur];function mr(e,o){return R(),U("svg",dr,hr)}const vr={name:"ic-baseline-keyboard-arrow-right",render:mr},fr={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},pr=N("path",{fill:"currentColor",d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"},null,-1),gr=[pr];function br(e,o){return R(),U("svg",fr,gr)}const xr={name:"ic-baseline-keyboard-arrow-left",render:br},_r=["onMousewheel"],yr=M({__name:"ScrollX",props:{showArrow:{type:Boolean,required:!1,default:!0}},setup(e){const o=O(0),t=O(null),r=O(null),a=O(!1),n=Oe((v,y)=>{a.value?-o.value>y-v?o.value=v-y:o.value>0&&(o.value=0):o.value=0},200),s=Oe(()=>{var b,l;const v=((b=r.value)==null?void 0:b.offsetWidth)||0,y=((l=t.value)==null?void 0:l.offsetWidth)||0;a.value=y>v,n(v,y)},200);function m(v){var C,u;const{wheelDelta:y}=v,b=((C=r.value)==null?void 0:C.offsetWidth)||0,l=((u=t.value)==null?void 0:u.offsetWidth)||0;y<0&&(b>l&&o.value<-10||b<=l&&l+o.value-b<-10)||y>0&&o.value>10||(o.value+=y,n(b,l))}const d=new MutationObserver(s);return Ue(()=>{s(),window.addEventListener("resize",s),d.observe(t.value,{childList:!0})}),Ve(()=>{window.removeEventListener("resize",s),d.disconnect()}),(v,y)=>{const b=xr,l=vr;return R(),U("div",{ref_key:"wrapper",ref:r,class:"wrapper",onMousewheel:Ce(m,["prevent"])},[e.showArrow&&I(a)?(R(),U(ee,{key:0},[N("div",{class:"left",onClick:y[0]||(y[0]=C=>m({wheelDelta:120}))},[D(b)]),N("div",{class:"right",onClick:y[1]||(y[1]=C=>m({wheelDelta:-120}))},[D(l)])],64)):Te("v-if",!0),N("div",{ref_key:"content",ref:t,class:ot(["content",{overflow:I(a)&&e.showArrow}]),style:Be({transform:`translateX(${I(o)}px)`})},[et(v.$slots,"default",{},void 0,!0)],6)],40,_r)}}});const wr=K(yr,[["__scopeId","data-v-eec37558"],["__file","/home/runner/work/qs-admin/qs-admin/src/components/common/ScrollX.vue"]]),Cr=M({__name:"index",setup(e){const o=Ie(),t=$e(),r=oo(),a=re(),n=tt({show:!1,x:0,y:0,currentPath:""});ze(()=>o.path,()=>{var u;const{name:b,fullPath:l}=o,C=((u=o.meta)==null?void 0:u.title)||"";r.addTab({name:b,path:l,title:C})},{immediate:!0});const s=b=>{r.setActiveTab(b),t.push(b)};function m(){n.show=!0}function d(){n.show=!1}function v(b,l,C){Object.assign(n,{x:b,y:l,currentPath:C})}async function y(b,l){const{clientX:C,clientY:u}=b;d(),v(C,u,l.path),await Ze(),m()}return(b,l)=>{const C=st;return R(),U(ee,null,[D(wr,{"bg-white":"","dark:bg-dark":"",style:Be({height:`${I(a).tab.height}px`})},{default:V(()=>[(R(!0),U(ee,null,Je(I(r).tabs,u=>(R(),F(C,{key:u.path,"px-15":"","mx-5":"","rounded-4":"","cursor-pointer":"",type:I(r).activeTab===u.path?"primary":"default",closable:I(r).tabs.length>1,onClick:S=>s(u.path),onClose:Ce(S=>I(r).removeTab(u.path),["stop"]),onContextmenu:Ce(S=>y(S,u),["prevent"])},{default:V(()=>[eo(ve(u.title),1)]),_:2},1032,["type","closable","onClick","onClose","onContextmenu"]))),128))]),_:1},8,["style"]),D(cr,{show:I(n).show,"onUpdate:show":l[0]||(l[0]=u=>I(n).show=u),"current-path":I(n).currentPath,x:I(n).x,y:I(n).y},null,8,["show","current-path","x","y"])],64)}}});const zr=K(Cr,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/tab/index.vue"]]),Sr=M({__name:"AppMain",setup(e){const o=Re();return(t,r)=>{const a=Ge("router-view");return R(),F(a,null,{default:V(({Component:n,route:s})=>[I(o).reloadFlag?(R(),F(Qe(n),{key:s.path})):Te("v-if",!0)]),_:1})}}}),kr=K(Sr,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/AppMain.vue"]]),$r={"flex-1":"","flex-col":"","overflow-hidden":""},Ir={key:0,"border-b":"","bc-eee":"","dark:border-0":"",hidden:"","sm:block":""},Rr={"flex-1":"","overflow-hidden":"",bg:"#f5f6fb","dark:bg-hex-101014":""},Tr=M({__name:"index",setup(e){const o=re();return(t,r)=>{const a=qt,n=Pt,s=Ft;return R(),F(s,{"has-sider":"","wh-full":""},{default:V(()=>[I(o).isMobile?(R(),F(n,{key:1,width:I(o).sider.width,"auto-focus":!1,show:!I(o).sider.collapsed,placement:"left","display-directive":"show",onMaskClick:r[0]||(r[0]=m=>I(o).setCollapsed(!0))},{default:V(()=>[D(qe)]),_:1},8,["width","show"])):(R(),F(a,{key:0,bordered:"","collapse-mode":"width","collapsed-width":I(o).sider.collapsedWidth,width:I(o).sider.width,"native-scrollbar":!1,collapsed:I(o).sider.collapsed},{default:V(()=>[D(qe)]),_:1},8,["collapsed-width","width","collapsed"])),N("article",$r,[N("header",{"bg-white":"","px-15":"","border-b":"","bc-eee":"",flex:"","items-center":"",dark:"bg-dark border-0",style:Be(`height: ${I(o).header.height}px`)},[D(ar)],4),I(o).tab.visible?(R(),U("section",Ir,[D(zr)])):Te("v-if",!0),N("section",Rr,[D(kr)])])]),_:1})}}}),Hr=K(Tr,[["__file","/home/runner/work/qs-admin/qs-admin/src/layout/index.vue"]]);export{Hr as default};
