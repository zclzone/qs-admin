import{_ as k}from"./AppPage.4eb54830.js";import{_ as B}from"./logo.df7e078d.js";import{bA as F,d as q,ai as I,aj as C,r as h,bB as R,bC as L,ab as D,ac as b,ay as N,ag as n,ae as e,ad as i,ar as v,af as S,bD as A,bE as K,bF as T,bG as V,bH as $,bz as z,aa as P,ah as U}from"./index.3d03cbd1.js";import{_ as j,a as E}from"./Checkbox.5b9dd68a.js";import"./use-merged-state.2978ae50.js";const G="/qs-admin/assets/login_banner.6e96327c.webp",H={login:(g={})=>F.post("/auth/login",g,{noNeedToken:!0})},J="/qs-admin/assets/login_bg.ed2739b3.webp",M={"m-auto":"","p-15":"","f-c-c":"","min-w-345":"","rounded-10":"","card-shadow":"","bg-white":"","dark:bg-dark":"","bg-opacity-60":""},O=e("div",{"w-380":"",hidden:"","md:block":"","px-20":"","py-35":""},[e("img",{src:G,"w-full":"",alt:"login_banner"})],-1),Q={"w-320":"","flex-col":"","px-20":"","py-35":""},W={"f-c-c":"","text-24":"","font-normal":"",color:"#6a6a6a"},X={"mt-30":""},Y={"mt-30":""},Z={"mt-20":""},ee={"mt-20":""},oe=q({__name:"index",setup(g){const y="\u5947\u601DAdmin",f=I(),c=C().query,t=h({name:"",password:""}),d=R("loginInfo");d&&(t.value.name=d.name||"",t.value.password=d.password||"");const _=h(!1),p=L("isRemember",!1);async function w(){var u,s;const{name:l,password:o}=t.value;if(!l||!o){(u=window.$message)==null||u.warning("\u8BF7\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801");return}try{_.value=!0;const a=await H.login({name:l,password:o.toString()});if((s=window.$notification)==null||s.success({title:"\u767B\u5F55\u6210\u529F\uFF01",duration:2500}),K(a.data.token),p.value?T("loginInfo",{name:l,password:o}):V("loginInfo"),await $(),c.redirect){const m=c.redirect;Reflect.deleteProperty(c,"redirect"),f.push({path:m,query:c})}else f.push("/")}catch(a){console.error(a)}_.value=!1}return(l,o)=>{const u=B,s=j,a=E,m=z,x=k;return P(),D(x,{"show-footer":!0,"bg-cover":"",style:N({backgroundImage:`url(${n(J)})`})},{default:b(()=>[e("div",M,[O,e("div",Q,[e("h5",W,[i(u,{"mr-30":"","text-50":"","color-primary":""}),v(S(n(y)),1)]),e("div",X,[i(s,{value:n(t).name,"onUpdate:value":o[0]||(o[0]=r=>n(t).name=r),autofocus:"",class:"text-16 items-center h-50 pl-10",placeholder:"admin",maxlength:20},null,8,["value"])]),e("div",Y,[i(s,{value:n(t).password,"onUpdate:value":o[1]||(o[1]=r=>n(t).password=r),class:"text-16 items-center h-50 pl-10",type:"password","show-password-on":"mousedown",placeholder:"123456",maxlength:20,onKeydown:A(w,["enter"])},null,8,["value","onKeydown"])]),e("div",Z,[i(a,{checked:n(p),label:"\u8BB0\u4F4F\u6211","on-update:checked":r=>p.value=r},null,8,["checked","on-update:checked"])]),e("div",ee,[i(m,{"w-full":"","h-50":"","rounded-5":"","text-16":"",type:"primary",loading:n(_),onClick:w},{default:b(()=>[v(" \u767B\u5F55 ")]),_:1},8,["loading"])])])])]),_:1},8,["style"])}}}),ce=U(oe,[["__file","/home/runner/work/qs-admin/qs-admin/src/views/login/index.vue"]]);export{ce as default};
