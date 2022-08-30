var be=Object.defineProperty,we=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var G=(e,t,r)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))ke.call(t,r)&&G(e,r,t[r]);if(Z)for(var r of Z(t))Pe.call(t,r)&&G(e,r,t[r]);return e},j=(e,t)=>we(e,Ce(t));import{r as g,j as n,P as $,c as w,T as Se,b as c,B as b,h as f,U as Ne,V as $e,W as oe,X as se,d as C,Y as Ae,F as T,Z as Le,$ as ae,a0 as U,w as D,a1 as Oe,a2 as le,a3 as O,a4 as ie,a5 as q,a6 as E,a7 as Te,a8 as De,u as K,a9 as Be,aa as Ie,ab as Fe,g as ce,C as ue,x as Y,ac as je,m as X,M as Re,ad as ze,ae as Me,af as He,ag as Ue}from"./index.5901d226.js";import{C as qe}from"./chevron-down.e7f05dbc.js";import{F as Ee,p as Ke,A as Ve,I as We}from"./Fab.93225453.js";import{R as Ze,a as Ge,T as Ye}from"./TextFitler.f9fb92be.js";import{f as Xe}from"./index.e97a91e5.js";import{S as Je}from"./Select.f72e6abf.js";import"./debounce.d080d5e1.js";function Qe(e,t){if(e==null)return{};var r=et(e,t),o,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function et(e,t){if(e==null)return{};var r={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}var V=g.exports.forwardRef(function(e,t){var r=e.color,o=r===void 0?"currentColor":r,s=e.size,a=s===void 0?24:s,l=Qe(e,["color","size"]);return n("svg",j(F({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),{children:n("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}))});V.propTypes={color:$.string,size:$.oneOfType([$.string,$.number])};V.displayName="Zap";var J=V;function de(e){const t=e.size||24,r=w({[Se.animate]:e.animate});return n("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}const tt="_FlexCenter_1380a_1";var rt={FlexCenter:tt};function nt({children:e}){return n("div",{className:rt.FlexCenter,children:e})}const{useRef:Q,useEffect:ot}=f;function st({onClickPrimaryButton:e,onClickSecondaryButton:t}){const r=Q(null),o=Q(null);return ot(()=>{r.current.focus()},[]),c("div",{onKeyDown:a=>{a.keyCode===39?o.current.focus():a.keyCode===37&&r.current.focus()},children:[n("h2",{children:"Close Connections?"}),n("p",{children:'Click "Yes" to close those connections that are still using the old selected proxy in this group'}),n("div",{style:{height:30}}),c(nt,{children:[n(b,{onClick:e,ref:r,children:"Yes"}),n("div",{style:{width:20}}),n(b,{onClick:t,ref:o,children:"No"})]})]})}const at="_header_1y9js_1",lt="_arrow_1y9js_8",it="_isOpen_1y9js_13",ct="_btn_1y9js_20",ut="_qty_1y9js_25";var k={header:at,arrow:lt,isOpen:it,btn:ct,qty:ut};function pe({name:e,type:t,toggle:r,isOpen:o,qty:s}){const a=g.exports.useCallback(l=>{l.preventDefault(),(l.key==="Enter"||l.key===" ")&&r()},[r]);return c("div",{className:k.header,onClick:r,style:{cursor:"pointer"},tabIndex:0,onKeyDown:a,role:"button",children:[n("div",{children:n(Ne,{name:e,type:t})}),typeof s=="number"?n("span",{className:k.qty,children:s}):null,n(b,{kind:"minimal",onClick:r,className:k.btn,title:"Toggle collapsible section",children:n("span",{className:w(k.arrow,{[k.isOpen]:o}),children:n(qe,{size:20})})})]})}const{useMemo:dt}=f;function pt(e,t){return e.filter(r=>{const o=t[r];return o===void 0?!0:o.number!==0})}const A=(e,t)=>{if(e&&typeof e.number=="number"&&e.number>0)return e.number;const r=t&&t.type;return r&&se.indexOf(r)>-1?-1:999999},ht={Natural:e=>e,LatencyAsc:(e,t,r)=>e.sort((o,s)=>{const a=A(t[o],r&&r[o]),l=A(t[s],r&&r[s]);return a-l}),LatencyDesc:(e,t,r)=>e.sort((o,s)=>{const a=A(t[o],r&&r[o]);return A(t[s],r&&r[s])-a}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,r)=>t>r?-1:t<r?1:0)};function yt(e,t){const r=t.toLowerCase().split(" ").map(o=>o.trim()).filter(o=>!!o);return r.length===0?e:e.filter(o=>{let s=0;for(;s<r.length;s++){const a=r[s];if(o.toLowerCase().indexOf(a)>-1)return!0}return!1})}function ft(e,t,r,o,s,a){let l=[...e];return r&&(l=pt(e,t)),typeof o=="string"&&o!==""&&(l=yt(l,o)),ht[s](l,t,a)}function he(e,t,r,o,s){const[a]=$e(oe);return dt(()=>ft(e,t,r,a,o,s),[e,t,r,a,o,s])}const mt="_header_5pmv2_1",vt="_groupHead_5pmv2_5",_t="_action_5pmv2_11";var R={header:mt,groupHead:vt,action:_t};const xt="_proxy_8ev0l_1",gt="_now_8ev0l_25",bt="_error_8ev0l_29",wt="_selectable_8ev0l_32",Ct="_proxyType_8ev0l_40",kt="_row_8ev0l_51",Pt="_proxyName_8ev0l_57",St="_proxySmall_8ev0l_66";var m={proxy:xt,now:gt,error:bt,selectable:wt,proxyType:Ct,row:kt,proxyName:Pt,proxySmall:St};const Nt="_proxyLatency_hz69v_1";var $t={proxyLatency:Nt};function At({number:e,color:t}){return n("span",{className:$t.proxyLatency,style:{color:t},children:typeof e=="number"&&e!==0?e+" ms":" "})}const{useMemo:N}=f,P={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function ye({number:e}={}){return e===0?P.na:e<200?P.good:e<400?P.normal:typeof e=="number"?P.bad:P.na}function Lt(e,t){return se.indexOf(t)>-1?{border:"1px dotted #777"}:{background:ye(e)}}function Ot({now:e,name:t,proxy:r,latency:o,isSelectable:s,onClick:a}){const l=N(()=>Lt(o,r.type),[o,r]),i=N(()=>{let d=t;return o&&typeof o.number=="number"&&(d+=" "+o.number+" ms"),d},[t,o]),u=g.exports.useCallback(()=>{s&&a&&a(t)},[t,a,s]),p=N(()=>w(m.proxySmall,{[m.now]:e,[m.selectable]:s}),[s,e]),h=g.exports.useCallback(d=>{d.key==="Enter"&&u()},[u]);return n("div",{title:i,className:p,style:l,onClick:u,onKeyDown:h,role:s?"menuitem":""})}function Tt(e){return e==="Shadowsocks"?"SS":e}const Dt=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function Bt({children:e,label:t,"aria-label":r}){const[o,s]=Ae();return c(T,{children:[g.exports.cloneElement(e,o),n(Le,j(F({},s),{label:t,"aria-label":r,position:Dt}))]})}function It({now:e,name:t,proxy:r,latency:o,isSelectable:s,onClick:a}){const l=N(()=>ye(o),[o]),i=g.exports.useCallback(()=>{s&&a&&a(t)},[t,a,s]),u=g.exports.useCallback(h=>{h.key==="Enter"&&i()},[i]),p=N(()=>w(m.proxy,{[m.now]:e,[m.selectable]:s}),[s,e]);return c("div",{tabIndex:0,className:p,onClick:i,onKeyDown:u,role:s?"menuitem":"",children:[n("div",{className:m.proxyName,children:n(Bt,{label:t,"aria-label":"proxy name: "+t,children:n("span",{children:t})})}),c("div",{className:m.row,children:[n("span",{className:m.proxyType,style:{opacity:e?.6:.2},children:Tt(r.type)}),n(At,{number:o==null?void 0:o.number,color:l})]})]})}const fe=(e,{name:t})=>{const r=ae(e),o=U(e);return{proxy:r[t]||{name:t,type:"Unknown",history:[]},latency:o[t]}},Ft=C(fe)(It),jt=C(fe)(Ot),Rt="_list_1oy7w_1",zt="_listSummaryView_1oy7w_8";var me={list:Rt,listSummaryView:zt};function ve({all:e,now:t,isSelectable:r,itemOnTapCallback:o}){const s=e;return n("div",{className:me.list,children:s.map(a=>n(Ft,{onClick:o,isSelectable:r,name:a,now:a===t},a))})}function _e({all:e,now:t,isSelectable:r,itemOnTapCallback:o}){return n("div",{className:me.listSummaryView,children:e.map(s=>n(jt,{onClick:o,isSelectable:r,name:s,now:s===t},s))})}const{createElement:Mt,useCallback:z,useMemo:Ht}=f;function Ut({name:e,all:t,delay:r,hideUnavailableProxies:o,proxySortBy:s,proxies:a,type:l,now:i,isOpen:u,apiConfig:p,dispatch:h}){const d=he(t,r,o,s,a),_=Ht(()=>l==="Selector",[l]),{app:{updateCollapsibleIsOpen:x},proxies:{requestDelayForProxies:y}}=D(),B=z(()=>{x("proxyGroup",e,!u)},[u,x,e]),I=z(W=>{!_||h(Oe(p,e,W))},[p,h,e,_]),v=le(!1),ge=z(async()=>{if(!v.value){v.set(!0);try{await y(p,d)}catch{}v.set(!1)}},[d,p,y,v]);return c("div",{className:R.group,children:[c("div",{className:R.groupHead,children:[n(pe,{name:e,type:l,toggle:B,qty:d.length,isOpen:u}),n("div",{className:R.action,children:n(O,{label:"Test latency",children:n(b,{kind:"circular",onClick:ge,children:n(de,{animate:v.value,size:16})})})})]}),Mt(u?ve:_e,{all:d,now:i,isSelectable:_,itemOnTapCallback:I})]})}const qt=C((e,{name:t,delay:r})=>{const o=ae(e),s=ie(e),a=q(e),l=E(e),i=o[t],{all:u,type:p,now:h}=i;return{all:u,delay:r,hideUnavailableProxies:l,proxySortBy:a,proxies:o,type:p,now:h,isOpen:s[`proxyGroup:${t}`]}})(Ut),{useCallback:xe,useState:Et}=f;function Kt({dispatch:e,apiConfig:t,name:r}){return xe(()=>e(Te(t,r)),[t,e,r])}function Vt({dispatch:e,apiConfig:t,names:r}){const[o,s]=Et(!1);return[xe(async()=>{if(!o){s(!0);try{await e(De(t,r))}catch{}s(!1)}},[t,e,r,o]),o]}const{useState:Wt,useCallback:Zt}=f;function Gt({isLoading:e}){return e?n(We,{children:n(J,{width:16,height:16})}):n(J,{width:16,height:16})}function Yt({dispatch:e,apiConfig:t}){const[r,o]=Wt(!1);return[Zt(()=>{r||(o(!0),e(Be(t)).then(()=>o(!1),()=>o(!1)))},[t,e,r]),r]}function Xt({dispatch:e,apiConfig:t,proxyProviders:r}){const{t:o}=K(),[s,a]=Yt({dispatch:e,apiConfig:t}),[l,i]=Vt({apiConfig:t,dispatch:e,names:r.map(u=>u.name)});return n(Ee,{icon:n(Gt,{isLoading:a}),onClick:s,text:o("Test Latency"),style:Ke,children:r.length>0?n(Ve,{text:o("update_all_proxy_provider"),onClick:l,children:n(Ze,{isRotating:i})}):null})}const Jt="_updatedAt_1rx92_1",Qt="_main_1rx92_8",er="_head_1rx92_17",tr="_action_1rx92_23",rr="_refresh_1rx92_31";var S={updatedAt:Jt,main:Qt,head:er,action:tr,refresh:rr};const{useCallback:ee}=f;function nr({name:e,proxies:t,delay:r,hideUnavailableProxies:o,proxySortBy:s,vehicleType:a,updatedAt:l,isOpen:i,dispatch:u,apiConfig:p}){const h=he(t,r,o,s),d=le(!1),_=Kt({dispatch:u,apiConfig:p,name:e}),x=ee(()=>{if(d.value)return;d.set(!0);const v=()=>d.set(!1);u(Ie(p,e)).then(v,v)},[p,u,e,d]),{app:{updateCollapsibleIsOpen:y}}=D(),B=ee(()=>{y("proxyProvider",e,!i)},[i,y,e]),I=Xe(new Date(l),new Date);return c("div",{className:S.main,children:[c("div",{className:S.head,children:[n(pe,{name:e,toggle:B,type:a,isOpen:i,qty:h.length}),c("div",{className:S.action,children:[n(O,{label:"Update",children:n(b,{kind:"circular",onClick:_,children:n(ar,{})})}),n(O,{label:"Health Check",children:n(b,{kind:"circular",onClick:x,children:n(de,{animate:d.value,size:16})})})]})]}),n("div",{className:S.updatedAt,children:c("small",{children:["Updated ",I," ago"]})}),i?n(ve,{all:h}):n(_e,{all:h})]})}const or={rest:{scale:1},pressed:{scale:.95}},sr={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function ar(){const t=Fe.read().motion;return n(t.div,{className:S.refresh,variants:or,initial:"rest",whileHover:"hover",whileTap:"pressed",children:n(t.div,{className:"flexCenter",variants:sr,children:n(Ge,{size:16})})})}const lr=(e,{proxies:t,name:r})=>{const o=E(e),s=U(e),a=ie(e),l=ce(e),i=q(e);return{apiConfig:l,proxies:t,delay:s,hideUnavailableProxies:o,proxySortBy:i,isOpen:a[`proxyProvider:${r}`]}},ir=C(lr)(nr);function cr({items:e}){return e.length===0?null:c(T,{children:[n(ue,{title:"Proxy Provider"}),n("div",{children:e.map(t=>n(ir,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt},t.name))})]})}const ur="_labeledInput_cmki0_1";var M={labeledInput:ur};const dr=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:te}=f;function pr({appConfig:e}){const{app:{updateAppConfig:t}}=D(),r=te(a=>{t("proxySortBy",a.target.value)},[t]),o=te(a=>{t("hideUnavailableProxies",a)},[t]),{t:s}=K();return c(T,{children:[c("div",{className:M.labeledInput,children:[n("span",{children:s("sort_in_grp")}),n("div",{children:n(Je,{options:dr.map(a=>[a[0],s(a[1])]),selected:e.proxySortBy,onChange:r})})]}),n("hr",{}),c("div",{className:M.labeledInput,children:[n("span",{children:s("hide_unavail_proxies")}),n("div",{children:n(Y,{name:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:o})})]}),c("div",{className:M.labeledInput,children:[n("span",{children:s("auto_close_conns")}),n("div",{children:n(Y,{name:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:a=>t("autoCloseOldConns",a)})})]})]})}const hr=e=>{const t=q(e),r=E(e),o=je(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:r,autoCloseOldConns:o}}};var yr=C(hr)(pr);const fr="_overlay_uuk3b_1",mr="_cnt_uuk3b_5",vr="_afterOpen_uuk3b_16";var H={overlay:fr,cnt:mr,afterOpen:vr};const{useMemo:_r}=f;function re({isOpen:e,onRequestClose:t,children:r}){const o=_r(()=>({base:w(X.content,H.cnt),afterOpen:H.afterOpen,beforeClose:""}),[]);return n(Re,{isOpen:e,onRequestClose:t,className:o,overlayClassName:w(X.overlay,H.overlay),children:r})}function xr({color:e="currentColor",size:t=24}){return c("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("path",{d:"M2 6h9M18.5 6H22"}),n("circle",{cx:"16",cy:"6",r:"2"}),n("path",{d:"M22 18h-9M6 18H2"}),n("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const gr="_topBar_jgy4z_1",br="_topBarRight_jgy4z_13",wr="_textFilterContainer_jgy4z_22",Cr="_group_jgy4z_29";var L={topBar:gr,topBarRight:br,textFilterContainer:wr,group:Cr};const{useState:kr,useEffect:Pr,useCallback:ne,useRef:Sr}=f;function Nr({dispatch:e,groupNames:t,delay:r,proxyProviders:o,apiConfig:s,showModalClosePrevConns:a}){const l=Sr({}),i=ne(()=>{l.current.startAt=Date.now(),e(ze(s)).then(()=>{l.current.completeAt=Date.now()})},[s,e]);Pr(()=>{i();const y=()=>{l.current.startAt&&Date.now()-l.current.startAt>3e4&&i()};return window.addEventListener("focus",y,!1),()=>window.removeEventListener("focus",y,!1)},[i]);const[u,p]=kr(!1),h=ne(()=>{p(!1)},[]),{proxies:{closeModalClosePrevConns:d,closePrevConnsAndTheModal:_}}=D(),{t:x}=K();return c(T,{children:[n(re,{isOpen:u,onRequestClose:h,children:n(yr,{})}),c("div",{className:L.topBar,children:[n(ue,{title:x("Proxies")}),c("div",{className:L.topBarRight,children:[n("div",{className:L.textFilterContainer,children:n(Ye,{textAtom:oe})}),n(O,{label:x("settings"),children:n(b,{kind:"minimal",onClick:()=>p(!0),children:n(xr,{size:16})})})]})]}),n("div",{children:t.map(y=>n("div",{className:L.group,children:n(qt,{name:y,delay:r,apiConfig:s,dispatch:e})},y))}),n(cr,{items:o}),n("div",{style:{height:60}}),n(Xt,{dispatch:e,apiConfig:s,proxyProviders:o}),n(re,{isOpen:a,onRequestClose:d,children:n(st,{onClickPrimaryButton:()=>_(s),onClickSecondaryButton:d})})]})}const $r=e=>({apiConfig:ce(e),groupNames:Me(e),proxyProviders:He(e),delay:U(e),showModalClosePrevConns:Ue(e)});var jr=C($r)(Nr);export{jr as default};
