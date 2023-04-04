import{n as Ie,bI as yt,i as D,d as N,h as o,bJ as xt,c as m,a as C,e as h,bK as Ge,bL as Ye,t as J,bM as Je,q as ae,_ as be,bN as wt,k as Qe,r as M,y as $e,bO as Ct,b as A,a5 as te,x as ie,u as Le,f as me,bP as kt,bQ as St,bR as Ve,a1 as Be,o as Pt,aI as zt,p as Ze,v as en,bj as le,bS as Mt,j as nn,bd as fe,N as Rt,a0 as Tt,bT as At,U as Ne,am as Ke,aH as Ee,R as x,aF as qe,bU as Ft,bV as _t,bW as Dt,bX as $t}from"./index.3d03cbd1.js";import{u as Oe}from"./use-merged-state.2978ae50.js";const Bt={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},Et=Bt;function De(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.width?String(a.width):e.defaultWidth,f=e.formats[r]||e.formats[e.defaultWidth];return f}}function re(e){return function(a,r){var f=r!=null&&r.context?String(r.context):"standalone",g;if(f==="formatting"&&e.formattingValues){var l=e.defaultFormattingWidth||e.defaultWidth,u=r!=null&&r.width?String(r.width):l;g=e.formattingValues[u]||e.formattingValues[l]}else{var s=e.defaultWidth,c=r!=null&&r.width?String(r.width):e.defaultWidth;g=e.values[c]||e.values[s]}var i=e.argumentCallback?e.argumentCallback(a):a;return g[i]}}function oe(e){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=r.width,g=f&&e.matchPatterns[f]||e.matchPatterns[e.defaultMatchWidth],l=a.match(g);if(!l)return null;var u=l[0],s=f&&e.parsePatterns[f]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?It(s,function(p){return p.test(u)}):Wt(s,function(p){return p.test(u)}),i;i=e.valueCallback?e.valueCallback(c):c,i=r.valueCallback?r.valueCallback(i):i;var v=a.slice(u.length);return{value:i,rest:v}}}function Wt(e,a){for(var r in e)if(e.hasOwnProperty(r)&&a(e[r]))return r}function It(e,a){for(var r=0;r<e.length;r++)if(a(e[r]))return r}function Lt(e){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=a.match(e.matchPattern);if(!f)return null;var g=f[0],l=a.match(e.parsePattern);if(!l)return null;var u=e.valueCallback?e.valueCallback(l[0]):l[0];u=r.valueCallback?r.valueCallback(u):u;var s=a.slice(g.length);return{value:u,rest:s}}}var Vt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Nt=function(a,r,f){var g,l=Vt[a];return typeof l=="string"?g=l:r===1?g=l.one:g=l.other.replace("{{count}}",r.toString()),f!=null&&f.addSuffix?f.comparison&&f.comparison>0?"in "+g:g+" ago":g};const Ot=Nt;var Ut={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},jt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ht={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Kt={date:De({formats:Ut,defaultWidth:"full"}),time:De({formats:jt,defaultWidth:"full"}),dateTime:De({formats:Ht,defaultWidth:"full"})};const qt=Kt;var Xt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Gt=function(a,r,f,g){return Xt[a]};const Yt=Gt;var Jt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Qt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Zt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},er={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},tr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},rr=function(a,r){var f=Number(a),g=f%100;if(g>20||g<10)switch(g%10){case 1:return f+"st";case 2:return f+"nd";case 3:return f+"rd"}return f+"th"},or={ordinalNumber:rr,era:re({values:Jt,defaultWidth:"wide"}),quarter:re({values:Qt,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:re({values:Zt,defaultWidth:"wide"}),day:re({values:er,defaultWidth:"wide"}),dayPeriod:re({values:nr,defaultWidth:"wide",formattingValues:tr,defaultFormattingWidth:"wide"})};const ar=or;var ir=/^(\d+)(th|st|nd|rd)?/i,lr=/\d+/i,sr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},cr={any:[/^b/i,/^(a|c)/i]},dr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ur={any:[/1/i,/2/i,/3/i,/4/i]},hr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},fr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},br={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},mr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},gr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pr={ordinalNumber:Lt({matchPattern:ir,parsePattern:lr,valueCallback:function(a){return parseInt(a,10)}}),era:oe({matchPatterns:sr,defaultMatchWidth:"wide",parsePatterns:cr,defaultParseWidth:"any"}),quarter:oe({matchPatterns:dr,defaultMatchWidth:"wide",parsePatterns:ur,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:oe({matchPatterns:hr,defaultMatchWidth:"wide",parsePatterns:fr,defaultParseWidth:"any"}),day:oe({matchPatterns:vr,defaultMatchWidth:"wide",parsePatterns:br,defaultParseWidth:"any"}),dayPeriod:oe({matchPatterns:mr,defaultMatchWidth:"any",parsePatterns:gr,defaultParseWidth:"any"})};const yr=pr;var xr={code:"en-US",formatDistance:Ot,formatLong:qt,formatRelative:Yt,localize:ar,match:yr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const wr=xr,Cr={name:"en-US",locale:wr},kr=Cr;function Sr(e){const{mergedLocaleRef:a,mergedDateLocaleRef:r}=Ie(yt,null)||{},f=D(()=>{var l,u;return(u=(l=a==null?void 0:a.value)===null||l===void 0?void 0:l[e])!==null&&u!==void 0?u:Et[e]});return{dateLocaleRef:D(()=>{var l;return(l=r==null?void 0:r.value)!==null&&l!==void 0?l:kr}),localeRef:f}}const Pr=N({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),zr=N({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Mr=N({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Rr=xt("clear",o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Tr=m("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[C(">",[h("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[C("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),C("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),h("placeholder",`
 display: flex;
 `),h("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ge({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),We=N({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return Ye("-base-clear",Tr,J(e,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:e}=this;return o("div",{class:`${e}-base-clear`},o(Je,null,{default:()=>{var a,r;return this.show?o("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},ae(this.$slots.icon,()=>[o(be,{clsPrefix:e},{default:()=>o(Rr,null)})])):o("div",{key:"icon",class:`${e}-base-clear__placeholder`},(r=(a=this.$slots).placeholder)===null||r===void 0?void 0:r.call(a))}}))}}),Ar=N({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:a}){return()=>{const{clsPrefix:r}=e;return o(wt,{clsPrefix:r,class:`${r}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?o(We,{clsPrefix:r,show:e.showClear,onClear:e.onClear},{placeholder:()=>o(be,{clsPrefix:r,class:`${r}-base-suffix__arrow`},{default:()=>ae(a.default,()=>[o(Mr,null)])})}):null})}}}),tn=Qe("n-input");function Fr(e){let a=0;for(const r of e)a++;return a}function ve(e){return e===""||e==null}function _r(e){const a=M(null);function r(){const{value:l}=e;if(!(l!=null&&l.focus)){g();return}const{selectionStart:u,selectionEnd:s,value:c}=l;if(u==null||s==null){g();return}a.value={start:u,end:s,beforeText:c.slice(0,u),afterText:c.slice(s)}}function f(){var l;const{value:u}=a,{value:s}=e;if(!u||!s)return;const{value:c}=s,{start:i,beforeText:v,afterText:p}=u;let b=c.length;if(c.endsWith(p))b=c.length-p.length;else if(c.startsWith(v))b=v.length;else{const F=v[i-1],z=c.indexOf(F,i-1);z!==-1&&(b=z+1)}(l=s.setSelectionRange)===null||l===void 0||l.call(s,b,b)}function g(){a.value=null}return $e(e,g),{recordCursor:r,restoreCursor:f}}const Xe=N({name:"InputWordCount",setup(e,{slots:a}){const{mergedValueRef:r,maxlengthRef:f,mergedClsPrefixRef:g,countGraphemesRef:l}=Ie(tn),u=D(()=>{const{value:s}=r;return s===null||Array.isArray(s)?0:(l.value||Fr)(s)});return()=>{const{value:s}=f,{value:c}=r;return o("span",{class:`${g.value}-input-word-count`},Ct(a.default,{value:c===null||Array.isArray(c)?"":c},()=>[s===void 0?u.value:`${u.value} / ${s}`]))}}}),Dr=m("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[h("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),h("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),h("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),C("&:-webkit-autofill ~",[h("placeholder","display: none;")])]),A("round",[te("textarea","border-radius: calc(var(--n-height) / 2);")]),h("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[C("span",`
 width: 100%;
 display: inline-block;
 `)]),A("textarea",[h("placeholder","overflow: visible;")]),te("autosize","width: 100%;"),A("autosize",[h("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),m("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),h("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),h("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("+",[h("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),te("textarea",[h("placeholder","white-space: nowrap;")]),h("eye",`
 transition: color .3s var(--n-bezier);
 `),A("textarea","width: 100%;",[m("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),A("resizable",[m("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),h("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),h("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),A("pair",[h("input-el, placeholder","text-align: center;"),h("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[m("icon",`
 color: var(--n-icon-color);
 `),m("base-icon",`
 color: var(--n-icon-color);
 `)])]),A("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[h("border","border: var(--n-border-disabled);"),h("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),h("placeholder","color: var(--n-placeholder-color-disabled);"),h("separator","color: var(--n-text-color-disabled);",[m("icon",`
 color: var(--n-icon-color-disabled);
 `),m("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),m("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),h("suffix, prefix","color: var(--n-text-color-disabled);",[m("icon",`
 color: var(--n-icon-color-disabled);
 `),m("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),te("disabled",[h("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[C("&:hover",`
 color: var(--n-icon-color-hover);
 `),C("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),C("&:hover",[h("state-border","border: var(--n-border-hover);")]),A("focus","background-color: var(--n-color-focus);",[h("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),h("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),h("state-border",`
 border-color: #0000;
 z-index: 1;
 `),h("prefix","margin-right: 4px;"),h("suffix",`
 margin-left: 4px;
 `),h("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[m("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),m("base-clear",`
 font-size: var(--n-icon-size);
 `,[h("placeholder",[m("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),C(">",[m("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),m("base-icon",`
 font-size: var(--n-icon-size);
 `)]),m("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>A(`${e}-status`,[te("disabled",[m("base-loading",`
 color: var(--n-loading-color-${e})
 `),h("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),h("state-border",`
 border: var(--n-border-${e});
 `),C("&:hover",[h("state-border",`
 border: var(--n-border-hover-${e});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[h("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),A("focus",`
 background-color: var(--n-color-focus-${e});
 `,[h("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$r=m("input",[A("disabled",[h("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Br=Object.assign(Object.assign({},me.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Ur=N({name:"Input",props:Br,setup(e){ie(()=>{e.showPasswordToggle&&Ne("input",'`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead')});const{mergedClsPrefixRef:a,mergedBorderedRef:r,inlineThemeDisabled:f,mergedRtlRef:g}=Le(e),l=me("Input","-input",Dr,kt,e,a);St&&Ye("-input-safari",$r,a);const u=M(null),s=M(null),c=M(null),i=M(null),v=M(null),p=M(null),b=M(null),F=_r(b),z=M(null),{localeRef:E}=Sr("Input"),$=M(e.defaultValue),W=J(e,"value"),S=Oe(W,$),L=Ve(e),{mergedSizeRef:O,mergedDisabledRef:B,mergedStatusRef:y}=L,T=M(!1),R=M(!1),_=M(!1),I=M(!1);let U=null;const V=D(()=>{const{placeholder:n,pair:t}=e;return t?Array.isArray(n)?n:n===void 0?["",""]:[n,n]:n===void 0?[E.value.placeholder]:[n]}),ge=D(()=>{const{value:n}=_,{value:t}=S,{value:d}=V;return!n&&(ve(t)||Array.isArray(t)&&ve(t[0]))&&d[0]}),pe=D(()=>{const{value:n}=_,{value:t}=S,{value:d}=V;return!n&&d[1]&&(ve(t)||Array.isArray(t)&&ve(t[1]))}),Q=Be(()=>e.internalForceFocus||T.value),ye=Be(()=>{if(B.value||e.readonly||!e.clearable||!Q.value&&!R.value)return!1;const{value:n}=S,{value:t}=Q;return e.pair?!!(Array.isArray(n)&&(n[0]||n[1]))&&(R.value||t):!!n&&(R.value||t)}),Z=D(()=>{const{showPasswordOn:n}=e;if(n)return n;if(e.showPasswordToggle)return"click"}),j=M(!1),xe=D(()=>{const{textDecoration:n}=e;return n?Array.isArray(n)?n.map(t=>({textDecoration:t})):[{textDecoration:n}]:["",""]}),se=M(void 0),we=()=>{var n,t;if(e.type==="textarea"){const{autosize:d}=e;if(d&&(se.value=(t=(n=z.value)===null||n===void 0?void 0:n.$el)===null||t===void 0?void 0:t.offsetWidth),!s.value||typeof d=="boolean")return;const{paddingTop:k,paddingBottom:P,lineHeight:w}=window.getComputedStyle(s.value),H=Number(k.slice(0,-2)),K=Number(P.slice(0,-2)),q=Number(w.slice(0,-2)),{value:ee}=c;if(!ee)return;if(d.minRows){const ne=Math.max(d.minRows,1),_e=`${H+K+q*ne}px`;ee.style.minHeight=_e}if(d.maxRows){const ne=`${H+K+q*d.maxRows}px`;ee.style.maxHeight=ne}}},Ce=D(()=>{const{maxlength:n}=e;return n===void 0?void 0:Number(n)});Pt(()=>{const{value:n}=S;Array.isArray(n)||Fe(n)});const ke=zt().proxy;function X(n){const{onUpdateValue:t,"onUpdate:value":d,onInput:k}=e,{nTriggerFormInput:P}=L;t&&x(t,n),d&&x(d,n),k&&x(k,n),$.value=n,P()}function G(n){const{onChange:t}=e,{nTriggerFormChange:d}=L;t&&x(t,n),$.value=n,d()}function Se(n){const{onBlur:t}=e,{nTriggerFormBlur:d}=L;t&&x(t,n),d()}function Pe(n){const{onFocus:t}=e,{nTriggerFormFocus:d}=L;t&&x(t,n),d()}function ze(n){const{onClear:t}=e;t&&x(t,n)}function Me(n){const{onInputBlur:t}=e;t&&x(t,n)}function Re(n){const{onInputFocus:t}=e;t&&x(t,n)}function Te(){const{onDeactivate:n}=e;n&&x(n)}function on(){const{onActivate:n}=e;n&&x(n)}function an(n){const{onClick:t}=e;t&&x(t,n)}function ln(n){const{onWrapperFocus:t}=e;t&&x(t,n)}function sn(n){const{onWrapperBlur:t}=e;t&&x(t,n)}function cn(){_.value=!0}function dn(n){_.value=!1,n.target===p.value?ce(n,1):ce(n,0)}function ce(n,t=0,d="input"){const k=n.target.value;if(Fe(k),n instanceof InputEvent&&!n.isComposing&&(_.value=!1),e.type==="textarea"){const{value:w}=z;w&&w.syncUnifiedContainer()}if(U=k,_.value)return;F.recordCursor();const P=un(k);if(P)if(!e.pair)d==="input"?X(k):G(k);else{let{value:w}=S;Array.isArray(w)?w=[w[0],w[1]]:w=["",""],w[t]=k,d==="input"?X(w):G(w)}ke.$forceUpdate(),P||Ke(F.restoreCursor)}function un(n){const{countGraphemes:t,maxlength:d,minlength:k}=e;if(t){let w;if(d!==void 0&&(w===void 0&&(w=t(n)),w>Number(d))||k!==void 0&&(w===void 0&&(w=t(n)),w<Number(d)))return!1}const{allowInput:P}=e;return typeof P=="function"?P(n):!0}function hn(n){Me(n),n.relatedTarget===u.value&&Te(),n.relatedTarget!==null&&(n.relatedTarget===v.value||n.relatedTarget===p.value||n.relatedTarget===s.value)||(I.value=!1),de(n,"blur"),b.value=null}function fn(n,t){Re(n),T.value=!0,I.value=!0,on(),de(n,"focus"),t===0?b.value=v.value:t===1?b.value=p.value:t===2&&(b.value=s.value)}function vn(n){e.passivelyActivated&&(sn(n),de(n,"blur"))}function bn(n){e.passivelyActivated&&(T.value=!0,ln(n),de(n,"focus"))}function de(n,t){n.relatedTarget!==null&&(n.relatedTarget===v.value||n.relatedTarget===p.value||n.relatedTarget===s.value||n.relatedTarget===u.value)||(t==="focus"?(Pe(n),T.value=!0):t==="blur"&&(Se(n),T.value=!1))}function mn(n,t){ce(n,t,"change")}function gn(n){an(n)}function pn(n){ze(n),e.pair?(X(["",""]),G(["",""])):(X(""),G(""))}function yn(n){const{onMousedown:t}=e;t&&t(n);const{tagName:d}=n.target;if(d!=="INPUT"&&d!=="TEXTAREA"){if(e.resizable){const{value:k}=u;if(k){const{left:P,top:w,width:H,height:K}=k.getBoundingClientRect(),q=14;if(P+H-q<n.clientX&&n.clientX<P+H&&w+K-q<n.clientY&&n.clientY<w+K)return}}n.preventDefault(),T.value||Ue()}}function xn(){var n;R.value=!0,e.type==="textarea"&&((n=z.value)===null||n===void 0||n.handleMouseEnterWrapper())}function wn(){var n;R.value=!1,e.type==="textarea"&&((n=z.value)===null||n===void 0||n.handleMouseLeaveWrapper())}function Cn(){B.value||Z.value==="click"&&(j.value=!j.value)}function kn(n){if(B.value)return;n.preventDefault();const t=k=>{k.preventDefault(),qe("mouseup",document,t)};if(Ee("mouseup",document,t),Z.value!=="mousedown")return;j.value=!0;const d=()=>{j.value=!1,qe("mouseup",document,d)};Ee("mouseup",document,d)}function Sn(n){var t;switch((t=e.onKeydown)===null||t===void 0||t.call(e,n),n.key){case"Escape":Ae();break;case"Enter":Pn(n);break}}function Pn(n){var t,d;if(e.passivelyActivated){const{value:k}=I;if(k){e.internalDeactivateOnEnter&&Ae();return}n.preventDefault(),e.type==="textarea"?(t=s.value)===null||t===void 0||t.focus():(d=v.value)===null||d===void 0||d.focus()}}function Ae(){e.passivelyActivated&&(I.value=!1,Ke(()=>{var n;(n=u.value)===null||n===void 0||n.focus()}))}function Ue(){var n,t,d;B.value||(e.passivelyActivated?(n=u.value)===null||n===void 0||n.focus():((t=s.value)===null||t===void 0||t.focus(),(d=v.value)===null||d===void 0||d.focus()))}function zn(){var n;!((n=u.value)===null||n===void 0)&&n.contains(document.activeElement)&&document.activeElement.blur()}function Mn(){var n,t;(n=s.value)===null||n===void 0||n.select(),(t=v.value)===null||t===void 0||t.select()}function Rn(){B.value||(s.value?s.value.focus():v.value&&v.value.focus())}function Tn(){const{value:n}=u;(n==null?void 0:n.contains(document.activeElement))&&n!==document.activeElement&&Ae()}function An(n){if(e.type==="textarea"){const{value:t}=s;t==null||t.scrollTo(n)}else{const{value:t}=v;t==null||t.scrollTo(n)}}function Fe(n){const{type:t,pair:d,autosize:k}=e;if(!d&&k)if(t==="textarea"){const{value:P}=c;P&&(P.textContent=(n!=null?n:"")+`\r
`)}else{const{value:P}=i;P&&(n?P.textContent=n:P.innerHTML="&nbsp;")}}function Fn(){we()}const je=M({top:"0"});function _n(n){var t;const{scrollTop:d}=n.target;je.value.top=`${-d}px`,(t=z.value)===null||t===void 0||t.syncUnifiedContainer()}let ue=null;ie(()=>{const{autosize:n,type:t}=e;n&&t==="textarea"?ue=$e(S,d=>{!Array.isArray(d)&&d!==U&&Fe(d)}):ue==null||ue()});let he=null;ie(()=>{e.type==="textarea"?he=$e(S,n=>{var t;!Array.isArray(n)&&n!==U&&((t=z.value)===null||t===void 0||t.syncUnifiedContainer())}):he==null||he()}),Ze(tn,{mergedValueRef:S,maxlengthRef:Ce,mergedClsPrefixRef:a,countGraphemesRef:J(e,"countGraphemes")});const Dn={wrapperElRef:u,inputElRef:v,textareaElRef:s,isCompositing:_,focus:Ue,blur:zn,select:Mn,deactivate:Tn,activate:Rn,scrollTo:An},$n=en("Input",g,a),He=D(()=>{const{value:n}=O,{common:{cubicBezierEaseInOut:t},self:{color:d,borderRadius:k,textColor:P,caretColor:w,caretColorError:H,caretColorWarning:K,textDecorationColor:q,border:ee,borderDisabled:ne,borderHover:_e,borderFocus:Bn,placeholderColor:En,placeholderColorDisabled:Wn,lineHeightTextarea:In,colorDisabled:Ln,colorFocus:Vn,textColorDisabled:Nn,boxShadowFocus:On,iconSize:Un,colorFocusWarning:jn,boxShadowFocusWarning:Hn,borderWarning:Kn,borderFocusWarning:qn,borderHoverWarning:Xn,colorFocusError:Gn,boxShadowFocusError:Yn,borderError:Jn,borderFocusError:Qn,borderHoverError:Zn,clearSize:et,clearColor:nt,clearColorHover:tt,clearColorPressed:rt,iconColor:ot,iconColorDisabled:at,suffixTextColor:it,countTextColor:lt,countTextColorDisabled:st,iconColorHover:ct,iconColorPressed:dt,loadingColor:ut,loadingColorError:ht,loadingColorWarning:ft,[le("padding",n)]:vt,[le("fontSize",n)]:bt,[le("height",n)]:mt}}=l.value,{left:gt,right:pt}=Mt(vt);return{"--n-bezier":t,"--n-count-text-color":lt,"--n-count-text-color-disabled":st,"--n-color":d,"--n-font-size":bt,"--n-border-radius":k,"--n-height":mt,"--n-padding-left":gt,"--n-padding-right":pt,"--n-text-color":P,"--n-caret-color":w,"--n-text-decoration-color":q,"--n-border":ee,"--n-border-disabled":ne,"--n-border-hover":_e,"--n-border-focus":Bn,"--n-placeholder-color":En,"--n-placeholder-color-disabled":Wn,"--n-icon-size":Un,"--n-line-height-textarea":In,"--n-color-disabled":Ln,"--n-color-focus":Vn,"--n-text-color-disabled":Nn,"--n-box-shadow-focus":On,"--n-loading-color":ut,"--n-caret-color-warning":K,"--n-color-focus-warning":jn,"--n-box-shadow-focus-warning":Hn,"--n-border-warning":Kn,"--n-border-focus-warning":qn,"--n-border-hover-warning":Xn,"--n-loading-color-warning":ft,"--n-caret-color-error":H,"--n-color-focus-error":Gn,"--n-box-shadow-focus-error":Yn,"--n-border-error":Jn,"--n-border-focus-error":Qn,"--n-border-hover-error":Zn,"--n-loading-color-error":ht,"--n-clear-color":nt,"--n-clear-size":et,"--n-clear-color-hover":tt,"--n-clear-color-pressed":rt,"--n-icon-color":ot,"--n-icon-color-hover":ct,"--n-icon-color-pressed":dt,"--n-icon-color-disabled":at,"--n-suffix-text-color":it}}),Y=f?nn("input",D(()=>{const{value:n}=O;return n[0]}),He,e):void 0;return Object.assign(Object.assign({},Dn),{wrapperElRef:u,inputElRef:v,inputMirrorElRef:i,inputEl2Ref:p,textareaElRef:s,textareaMirrorElRef:c,textareaScrollbarInstRef:z,rtlEnabled:$n,uncontrolledValue:$,mergedValue:S,passwordVisible:j,mergedPlaceholder:V,showPlaceholder1:ge,showPlaceholder2:pe,mergedFocus:Q,isComposing:_,activated:I,showClearButton:ye,mergedSize:O,mergedDisabled:B,textDecorationStyle:xe,mergedClsPrefix:a,mergedBordered:r,mergedShowPasswordOn:Z,placeholderStyle:je,mergedStatus:y,textAreaScrollContainerWidth:se,handleTextAreaScroll:_n,handleCompositionStart:cn,handleCompositionEnd:dn,handleInput:ce,handleInputBlur:hn,handleInputFocus:fn,handleWrapperBlur:vn,handleWrapperFocus:bn,handleMouseEnter:xn,handleMouseLeave:wn,handleMouseDown:yn,handleChange:mn,handleClick:gn,handleClear:pn,handlePasswordToggleClick:Cn,handlePasswordToggleMousedown:kn,handleWrapperKeydown:Sn,handleTextAreaMirrorResize:Fn,getTextareaScrollContainer:()=>s.value,mergedTheme:l,cssVars:f?void 0:He,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){var e,a;const{mergedClsPrefix:r,mergedStatus:f,themeClass:g,type:l,countGraphemes:u,onRender:s}=this,c=this.$slots;return s==null||s(),o("div",{ref:"wrapperElRef",class:[`${r}-input`,g,f&&`${r}-input--${f}-status`,{[`${r}-input--rtl`]:this.rtlEnabled,[`${r}-input--disabled`]:this.mergedDisabled,[`${r}-input--textarea`]:l==="textarea",[`${r}-input--resizable`]:this.resizable&&!this.autosize,[`${r}-input--autosize`]:this.autosize,[`${r}-input--round`]:this.round&&l!=="textarea",[`${r}-input--pair`]:this.pair,[`${r}-input--focus`]:this.mergedFocus,[`${r}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},o("div",{class:`${r}-input-wrapper`},fe(c.prefix,i=>i&&o("div",{class:`${r}-input__prefix`},i)),l==="textarea"?o(Rt,{ref:"textareaScrollbarInstRef",class:`${r}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var i,v;const{textAreaScrollContainerWidth:p}=this,b={width:this.autosize&&p&&`${p}px`};return o(Tt,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${r}-input__textarea-el`,(i=this.inputProps)===null||i===void 0?void 0:i.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(v=this.inputProps)===null||v===void 0?void 0:v.style,b],onBlur:this.handleInputBlur,onFocus:F=>this.handleInputFocus(F,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`,style:[this.placeholderStyle,b],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o(At,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${r}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${r}-input__input`},o("input",Object.assign({type:l==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":l},this.inputProps,{ref:"inputElRef",class:[`${r}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:i=>this.handleInputFocus(i,0),onInput:i=>this.handleInput(i,0),onChange:i=>this.handleChange(i,0)})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${r}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&fe(c.suffix,i=>i||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${r}-input__suffix`},[fe(c["clear-icon-placeholder"],v=>(this.clearable||v)&&o(We,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>v,icon:()=>{var p,b;return(b=(p=this.$slots)["clear-icon"])===null||b===void 0?void 0:b.call(p)}})),this.internalLoadingBeforeSuffix?null:i,this.loading!==void 0?o(Ar,{clsPrefix:r,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?i:null,this.showCount&&this.type!=="textarea"?o(Xe,null,{default:v=>{var p;return(p=c.count)===null||p===void 0?void 0:p.call(c,v)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${r}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ae(c["password-visible-icon"],()=>[o(be,{clsPrefix:r},{default:()=>o(Pr,null)})]):ae(c["password-invisible-icon"],()=>[o(be,{clsPrefix:r},{default:()=>o(zr,null)})])):null]):null)),this.pair?o("span",{class:`${r}-input__separator`},ae(c.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${r}-input-wrapper`},o("div",{class:`${r}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${r}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:i=>this.handleInputFocus(i,1),onInput:i=>this.handleInput(i,1),onChange:i=>this.handleChange(i,1)}),this.showPlaceholder2?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),fe(c.suffix,i=>(this.clearable||i)&&o("div",{class:`${r}-input__suffix`},[this.clearable&&o(We,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var v;return(v=c["clear-icon"])===null||v===void 0?void 0:v.call(c)},placeholder:()=>{var v;return(v=c["clear-icon-placeholder"])===null||v===void 0?void 0:v.call(c)}}),i]))):null,this.mergedBordered?o("div",{class:`${r}-input__border`}):null,this.mergedBordered?o("div",{class:`${r}-input__state-border`}):null,this.showCount&&l==="textarea"?o(Xe,null,{default:i=>{var v;const{renderCount:p}=this;return p?p(i):(v=c.count)===null||v===void 0?void 0:v.call(c,i)}}):null)}}),Er=o("svg",{viewBox:"0 0 64 64",class:"check-icon"},o("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Wr=o("svg",{viewBox:"0 0 100 100",class:"line-icon"},o("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),rn=Qe("n-checkbox-group"),Ir={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},jr=N({name:"CheckboxGroup",props:Ir,setup(e){ie(()=>{e.onChange!==void 0&&Ne("checkbox-group","`on-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:a}=Le(e),r=Ve(e),{mergedSizeRef:f,mergedDisabledRef:g}=r,l=M(e.defaultValue),u=D(()=>e.value),s=Oe(u,l),c=D(()=>{var p;return((p=s.value)===null||p===void 0?void 0:p.length)||0}),i=D(()=>Array.isArray(s.value)?new Set(s.value):new Set);function v(p,b){const{nTriggerFormInput:F,nTriggerFormChange:z}=r,{onChange:E,"onUpdate:value":$,onUpdateValue:W}=e;if(Array.isArray(s.value)){const S=Array.from(s.value),L=S.findIndex(O=>O===b);p?~L||(S.push(b),W&&x(W,S,{actionType:"check",value:b}),$&&x($,S,{actionType:"check",value:b}),F(),z(),l.value=S,E&&x(E,S)):~L&&(S.splice(L,1),W&&x(W,S,{actionType:"uncheck",value:b}),$&&x($,S,{actionType:"uncheck",value:b}),E&&x(E,S),l.value=S,F(),z())}else p?(W&&x(W,[b],{actionType:"check",value:b}),$&&x($,[b],{actionType:"check",value:b}),E&&x(E,[b]),l.value=[b],F(),z()):(W&&x(W,[],{actionType:"uncheck",value:b}),$&&x($,[],{actionType:"uncheck",value:b}),E&&x(E,[]),l.value=[],F(),z())}return Ze(rn,{checkedCountRef:c,maxRef:J(e,"max"),minRef:J(e,"min"),valueSetRef:i,disabledRef:g,mergedSizeRef:f,toggleCheckbox:v}),{mergedClsPrefix:a}},render(){return o("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Lr=C([m("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[C("&:hover",[m("checkbox-box",[h("border",{border:"var(--n-border-checked)"})])]),C("&:focus:not(:active)",[m("checkbox-box",[h("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),A("inside-table",[m("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),A("checked",[m("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[m("checkbox-icon",[C(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("indeterminate",[m("checkbox-box",[m("checkbox-icon",[C(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),C(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("checked, indeterminate",[C("&:focus:not(:active)",[m("checkbox-box",[h("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),m("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[h("border",{border:"var(--n-border-checked)"})])]),A("disabled",{cursor:"not-allowed"},[A("checked",[m("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[h("border",{border:"var(--n-border-disabled-checked)"}),m("checkbox-icon",[C(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),m("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[h("border",{border:"var(--n-border-disabled)"}),m("checkbox-icon",[C(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),h("label",{color:"var(--n-text-color-disabled)"})]),m("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),m("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[h("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),m("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[C(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),Ge({left:"1px",top:"1px"})])]),h("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[C("&:empty",{display:"none"})])]),Ft(m("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),_t(m("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Vr=Object.assign(Object.assign({},me.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Hr=N({name:"Checkbox",props:Vr,setup(e){ie(()=>{e.onChange&&Ne("checkbox","`on-change` is deprecated, please use `on-update:checked` instead.")});const a=M(null),{mergedClsPrefixRef:r,inlineThemeDisabled:f,mergedRtlRef:g}=Le(e),l=Ve(e,{mergedSize(y){const{size:T}=e;if(T!==void 0)return T;if(c){const{value:R}=c.mergedSizeRef;if(R!==void 0)return R}if(y){const{mergedSize:R}=y;if(R!==void 0)return R.value}return"medium"},mergedDisabled(y){const{disabled:T}=e;if(T!==void 0)return T;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:R},checkedCountRef:_}=c;if(R!==void 0&&_.value>=R&&!b.value)return!0;const{minRef:{value:I}}=c;if(I!==void 0&&_.value<=I&&b.value)return!0}return y?y.disabled.value:!1}}),{mergedDisabledRef:u,mergedSizeRef:s}=l,c=Ie(rn,null),i=M(e.defaultChecked),v=J(e,"checked"),p=Oe(v,i),b=Be(()=>{if(c){const y=c.valueSetRef.value;return y&&e.value!==void 0?y.has(e.value):!1}else return p.value===e.checkedValue}),F=me("Checkbox","-checkbox",Lr,Dt,e,r);function z(y){if(c&&e.value!==void 0)c.toggleCheckbox(!b.value,e.value);else{const{onChange:T,"onUpdate:checked":R,onUpdateChecked:_}=e,{nTriggerFormInput:I,nTriggerFormChange:U}=l,V=b.value?e.uncheckedValue:e.checkedValue;R&&x(R,V,y),_&&x(_,V,y),T&&x(T,V,y),I(),U(),i.value=V}}function E(y){u.value||z(y)}function $(y){if(!u.value)switch(y.key){case" ":case"Enter":z(y)}}function W(y){switch(y.key){case" ":y.preventDefault()}}const S={focus:()=>{var y;(y=a.value)===null||y===void 0||y.focus()},blur:()=>{var y;(y=a.value)===null||y===void 0||y.blur()}},L=en("Checkbox",g,r),O=D(()=>{const{value:y}=s,{common:{cubicBezierEaseInOut:T},self:{borderRadius:R,color:_,colorChecked:I,colorDisabled:U,colorTableHeader:V,colorTableHeaderModal:ge,colorTableHeaderPopover:pe,checkMarkColor:Q,checkMarkColorDisabled:ye,border:Z,borderFocus:j,borderDisabled:xe,borderChecked:se,boxShadowFocus:we,textColor:Ce,textColorDisabled:ke,checkMarkColorDisabledChecked:X,colorDisabledChecked:G,borderDisabledChecked:Se,labelPadding:Pe,labelLineHeight:ze,labelFontWeight:Me,[le("fontSize",y)]:Re,[le("size",y)]:Te}}=F.value;return{"--n-label-line-height":ze,"--n-label-font-weight":Me,"--n-size":Te,"--n-bezier":T,"--n-border-radius":R,"--n-border":Z,"--n-border-checked":se,"--n-border-focus":j,"--n-border-disabled":xe,"--n-border-disabled-checked":Se,"--n-box-shadow-focus":we,"--n-color":_,"--n-color-checked":I,"--n-color-table":V,"--n-color-table-modal":ge,"--n-color-table-popover":pe,"--n-color-disabled":U,"--n-color-disabled-checked":G,"--n-text-color":Ce,"--n-text-color-disabled":ke,"--n-check-mark-color":Q,"--n-check-mark-color-disabled":ye,"--n-check-mark-color-disabled-checked":X,"--n-font-size":Re,"--n-label-padding":Pe}}),B=f?nn("checkbox",D(()=>s.value[0]),O,e):void 0;return Object.assign(l,S,{rtlEnabled:L,selfRef:a,mergedClsPrefix:r,mergedDisabled:u,renderedChecked:b,mergedTheme:F,labelId:$t(),handleClick:E,handleKeyUp:$,handleKeyDown:W,cssVars:f?void 0:O,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender})},render(){var e;const{$slots:a,renderedChecked:r,mergedDisabled:f,indeterminate:g,privateInsideTable:l,cssVars:u,labelId:s,label:c,mergedClsPrefix:i,focusable:v,handleKeyUp:p,handleKeyDown:b,handleClick:F}=this;return(e=this.onRender)===null||e===void 0||e.call(this),o("div",{ref:"selfRef",class:[`${i}-checkbox`,this.themeClass,this.rtlEnabled&&`${i}-checkbox--rtl`,r&&`${i}-checkbox--checked`,f&&`${i}-checkbox--disabled`,g&&`${i}-checkbox--indeterminate`,l&&`${i}-checkbox--inside-table`],tabindex:f||!v?void 0:0,role:"checkbox","aria-checked":g?"mixed":r,"aria-labelledby":s,style:u,onKeyup:p,onKeydown:b,onClick:F,onMousedown:()=>{Ee("selectstart",window,z=>{z.preventDefault()},{once:!0})}},o("div",{class:`${i}-checkbox-box-wrapper`},"\xA0",o("div",{class:`${i}-checkbox-box`},o(Je,null,{default:()=>this.indeterminate?o("div",{key:"indeterminate",class:`${i}-checkbox-icon`},Wr):o("div",{key:"check",class:`${i}-checkbox-icon`},Er)}),o("div",{class:`${i}-checkbox-box__border`}))),c!==null||a.default?o("span",{class:`${i}-checkbox__label`,id:s},a.default?a.default():c):null)}});export{Mr as C,Ar as N,Ur as _,Hr as a,jr as b,Sr as u};
