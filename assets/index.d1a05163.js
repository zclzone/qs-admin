import{_ as oe}from"./AppPage.4eb54830.js";import{m as q,W as M,bi as k,c as x,d as E,u as N,i as y,f as S,bj as L,j as Y,h as b,V as re,e as $,ct as ie,v as se,bd as C,a as le,a5 as ce,b as R,r as D,x as ue,U as de,at as fe,ab as me,ac as v,ae as l,ad as _,ag as P,af as ge,ar as F,ao as he,ap as ve,a0 as be,bY as _e,bz as pe,aa as G,ah as xe}from"./index.3d03cbd1.js";import{f as we,o as ye}from"./on-fonts-ready.a9991d99.js";let U=!1;function Se(){if(!!q&&!!window.CSS&&!U&&(U=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const ke=e=>{const{primaryColor:n,successColor:c,warningColor:d,errorColor:i,infoColor:r,fontWeightStrong:t}=e;return{fontWeight:t,rotate:"252deg",colorStartPrimary:k(n,{alpha:.6}),colorEndPrimary:n,colorStartInfo:k(r,{alpha:.6}),colorEndInfo:r,colorStartWarning:k(d,{alpha:.6}),colorEndWarning:d,colorStartError:k(i,{alpha:.6}),colorEndError:i,colorStartSuccess:k(c,{alpha:.6}),colorEndSuccess:c}},ze={name:"GradientText",common:M,self:ke},$e=ze,Ce=x("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),Re=Object.assign(Object.assign({},S.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),Ee=E({name:"GradientText",props:Re,setup(e){Se();const{mergedClsPrefixRef:n,inlineThemeDisabled:c}=N(e),d=y(()=>{const{type:a}=e;return a==="danger"?"error":a}),i=y(()=>{let a=e.size||e.fontSize;return a&&(a=we(a)),a||void 0}),r=y(()=>{const a=e.color||e.gradient;if(typeof a=="string")return a;if(a){const f=a.deg||0,m=a.from,s=a.to;return`linear-gradient(${f}deg, ${m} 0%, ${s} 100%)`}}),t=S("GradientText","-gradient-text",Ce,$e,e,n),u=y(()=>{const{value:a}=d,{common:{cubicBezierEaseInOut:f},self:{rotate:m,[L("colorStart",a)]:s,[L("colorEnd",a)]:p,fontWeight:g}}=t.value;return{"--n-bezier":f,"--n-rotate":m,"--n-color-start":s,"--n-color-end":p,"--n-font-weight":g}}),o=c?Y("gradient-text",y(()=>d.value[0]),u,e):void 0;return{mergedClsPrefix:n,compatibleType:d,styleFontSize:i,styleBgImage:r,cssVars:c?void 0:u,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:e,onRender:n}=this;return n==null||n(),b("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),Pe=re({name:"Watermark",common:M,self(e){const{fontFamily:n}=e;return{fontFamily:n}}}),Fe=Pe,Ne=x("statistic",[$("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),x("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[$("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[x("icon",{verticalAlign:"-0.125em"})]),$("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),$("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[x("icon",{verticalAlign:"-0.125em"})])])]),Be=Object.assign(Object.assign({},S.props),{tabularNums:Boolean,label:String,value:[String,Number]}),Te=E({name:"Statistic",props:Be,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:c,mergedRtlRef:d}=N(e),i=S("Statistic","-statistic",Ne,ie,e,n),r=se("Statistic",d,n),t=y(()=>{const{self:{labelFontWeight:o,valueFontSize:a,valueFontWeight:f,valuePrefixTextColor:m,labelTextColor:s,valueSuffixTextColor:p,valueTextColor:g,labelFontSize:w},common:{cubicBezierEaseInOut:z}}=i.value;return{"--n-bezier":z,"--n-label-font-size":w,"--n-label-font-weight":o,"--n-label-text-color":s,"--n-value-font-weight":f,"--n-value-font-size":a,"--n-value-prefix-text-color":m,"--n-value-suffix-text-color":p,"--n-value-text-color":g}}),u=c?Y("statistic",void 0,t,e):void 0;return{rtlEnabled:r,mergedClsPrefix:n,cssVars:c?void 0:t,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e;const{mergedClsPrefix:n,$slots:{default:c,label:d,prefix:i,suffix:r}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),b("div",{class:[`${n}-statistic`,this.themeClass,this.rtlEnabled&&`${n}-statistic--rtl`],style:this.cssVars},C(d,t=>b("div",{class:`${n}-statistic__label`},this.label||t)),b("div",{class:`${n}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},C(i,t=>t&&b("span",{class:`${n}-statistic-value__prefix`},t)),this.value!==void 0?b("span",{class:`${n}-statistic-value__content`},this.value):C(c,t=>t&&b("span",{class:`${n}-statistic-value__content`},t)),C(r,t=>t&&b("span",{class:`${n}-statistic-value__suffix`},t))))}}),Oe=le([x("watermark-container",`
 position: relative;
 `,[ce("selectable",`
 user-select: none;
 -webkit-user-select: none;
 `),R("global-rotate",`
 overflow: hidden;
 `),R("fullscreen",`
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 position: fixed;
 `)]),x("watermark",`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 background-repeat: repeat;
 `,[R("fullscreen",`
 position: fixed;
 `),R("global-rotate",`
 position: absolute;
 height: max(284vh, 284vw);
 width: max(284vh, 284vw);
 `)])]);function We(e){if(!e)return 1;const n=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/n}const Ie=Object.assign(Object.assign({},S.props),{debug:Boolean,cross:Boolean,fullscreen:Boolean,width:{type:Number,default:32},height:{type:Number,default:32},zIndex:{type:Number,default:10},xGap:{type:Number,default:0},yGap:{type:Number,default:0},yOffset:{type:Number,default:0},xOffset:{type:Number,default:0},rotate:{type:Number,default:0},image:String,imageOpacity:{type:Number,default:1},imageHeight:Number,imageWidth:Number,content:String,selectable:{type:Boolean,default:!0},fontSize:{type:Number,default:14},fontFamily:String,fontStyle:{type:String,default:"normal"},fontVariant:{type:String,default:""},fontWeight:{type:Number,default:400},fontColor:{type:String,default:"rgba(128, 128, 128, .3)"},fontStretch:{type:String,default:""},lineHeight:{type:Number,default:14},globalRotate:{type:Number,default:0}}),Ve=E({name:"Watermark",props:Ie,setup(e,{slots:n}){const{mergedClsPrefixRef:c}=N(e),d=S("Watermark","-watermark",Oe,Fe,e,c),i=D(""),r=q?document.createElement("canvas"):null,t=r?r.getContext("2d"):null,u=D(!1);return ye(()=>u.value=!0),ue(()=>{if(!r)return;u.value;const o=We(t),{xGap:a,yGap:f,width:m,height:s,yOffset:p,xOffset:g,rotate:w,image:z,content:B,fontColor:K,fontStyle:X,fontVariant:J,fontStretch:Q,fontWeight:Z,fontFamily:ee,fontSize:te,lineHeight:T,debug:O}=e,ne=(a+m)*o,ae=(f+s)*o,W=g*o,I=p*o;if(r.width=ne,r.height=ae,t){t.translate(0,0);const V=m*o,j=s*o;if(O&&(t.strokeStyle="grey",t.strokeRect(0,0,V,j)),t.rotate(w*(Math.PI/180)),z){const h=new Image;h.crossOrigin="anonymous",h.referrerPolicy="no-referrer",h.src=z,h.onload=()=>{t.globalAlpha=e.imageOpacity;const{imageWidth:A,imageHeight:H}=e;t.drawImage(h,W,I,(e.imageWidth||(H?h.width*H/h.height:h.width))*o,(e.imageHeight||(A?h.height*A/h.width:h.height))*o),i.value=r.toDataURL()}}else B&&(O&&(t.strokeStyle="green",t.strokeRect(0,0,V,j)),t.font=`${X} ${J} ${Z} ${Q} ${te*o}px/${T*o}px ${ee||d.value.self.fontFamily}`,t.fillStyle=K,t.fillText(B,W,I+T*o),i.value=r.toDataURL())}else de("watermark","Canvas is not supported in the browser.")}),()=>{var o;const{globalRotate:a,fullscreen:f,zIndex:m}=e,s=c.value,p=a!==0&&f,g="max(142vh, 142vw)",w=b("div",{class:[`${s}-watermark`,a!==0&&`${s}-watermark--global-rotate`,f&&`${s}-watermark--fullscreen`],style:{transform:a?`translateX(-50%) translateY(-50%) rotate(${a}deg)`:void 0,zIndex:p?void 0:m,backgroundSize:`${e.xGap+e.width}px`,backgroundPosition:a===0?e.cross?`${e.width/2}px ${e.height/2}px, 0 0`:"":e.cross?`calc(${g} + ${e.width/2}px) calc(${g} + ${e.height/2}px), ${g} ${g}`:g,backgroundImage:e.cross?`url(${i.value}), url(${i.value})`:`url(${i.value})`}});return e.fullscreen&&!a?w:b("div",{class:[`${s}-watermark-container`,a!==0&&`${s}-watermark-container--global-rotate`,f&&`${s}-watermark-container--fullscreen`,e.selectable&&`${s}-watermark-container--selectable`],style:{zIndex:p?m:void 0}},(o=n.default)===null||o===void 0?void 0:o.call(n),w)}}}),je={"flex-1":"","min-w-375":""},Ae={flex:"","items-center":""},He=["src"],Le={"ml-20":""},De={"text-16":""},Ge={"ml-auto":"","items-center":"",hidden:"","md:flex":""},Ue=l("a",{href:"https://github.com/zclzone/qs-admin"},[l("img",{allt:"stars",src:"https://badgen.net/github/stars/zclzone/qs-admin"})],-1),qe=l("a",{href:"https://github.com/zclzone/qs-admin"},[l("img",{allt:"forks",src:"https://badgen.net/github/forks/zclzone/qs-admin"})],-1),Me={flex:"","flex-wrap":"","justify-around":""},Ye=l("p",{"op-60":""}," \u4E00\u4E2A\u57FA\u4E8E Vue3\u3001Vite3\u3001TypeScript\u3001Pinia\u3001Unocss\u3001Naive UI \u7684\u8F7B\u91CF\u7EA7\u540E\u53F0\u7BA1\u7406\u6A21\u677F ",-1),Ke=l("div",{"w-300":"","h-0":""},null,-1),Xe=l("div",{"w-300":"","h-0":""},null,-1),Je=l("div",{"w-300":"","h-0":""},null,-1),Qe=l("div",{"w-300":"","h-0":""},null,-1),Ze=E({__name:"index",setup(e){const n=fe();return(c,d)=>{const i=Ee,r=Te,t=_e,u=Ve,o=pe,a=oe;return G(),me(a,{"show-footer":!0,"min-w-375":""},{default:v(()=>[l("div",je,[_(u,{content:P(n).name,cross:"",selectable:"","font-size":16,"line-height":16,width:192,height:128,"x-offset":12,"y-offset":28,rotate:-15},{default:v(()=>[_(t,{"rounded-10":""},{default:v(()=>[l("div",Ae,[l("img",{"rounded-full":"",width:"60",src:P(n).avatar},null,8,He),l("div",Le,[l("p",De," Hello, "+ge(P(n).name)+" \uFF01 ",1),_(i,{"mt-5":"","text-12":"","op-60":"",gradient:"linear-gradient(90deg, red 0%, green 50%, blue 100%)"},{default:v(()=>[F(" \u4ED6\u65E5\u82E5\u9042\u51CC\u4E91\u5FD7\uFF0C\u6562\u7B11\u9EC4\u5DE2\u4E0D\u4E08\u592B~ ")]),_:1})]),l("div",Ge,[_(r,{label:"\u5F85\u529E",value:4,"w-80":""},{suffix:v(()=>[F(" / 10 ")]),_:1}),_(r,{label:"Stars","w-80":"","ml-20":""},{default:v(()=>[Ue]),_:1}),_(r,{label:"Forks","w-80":"","ml-20":""},{default:v(()=>[qe]),_:1})])])]),_:1})]),_:1},8,["content"]),_(t,{title:"\u9879\u76EE",size:"small",segmented:!0,"mt-15":"","rounded-10":""},{"header-extra":v(()=>[_(o,{text:"",type:"primary"},{default:v(()=>[F(" \u66F4\u591A ")]),_:1})]),default:v(()=>[l("div",Me,[(G(),he(be,null,ve(20,f=>_(t,{key:f,"w-300":"","flex-shrink-0":"","mt-10":"","mb-10":"","cursor-pointer":"","hover:card-shadow":"",title:"\u5947\u601DAdmin",size:"small"},{default:v(()=>[Ye]),_:2},1024)),64)),Ke,Xe,Je,Qe])]),_:1})])]),_:1})}}}),at=xe(Ze,[["__file","/home/runner/work/qs-admin/qs-admin/src/views/workbench/index.vue"]]);export{at as default};
