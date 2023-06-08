import{d as h,r as a,e as q,_ as te,j as N,m as ye,g as ke,b as Pe,f as Re,s as pe,u as Se}from"./index-73886e4a.js";import{B as Ne}from"./makeStyles-8abd10b7.js";import{u as G,o as D,b as se,s as le,a as ne,d as ae,c as ie}from"./useForkRef-f0f0758c.js";function me(e){return typeof e=="string"}function Te(e,t,o){return e===void 0||me(e)?t:h({},t,{ownerState:h({},t.ownerState,o)})}const Ce={disableDefaultClasses:!1},Ie=a.createContext(Ce);function Fe(e){const{disableDefaultClasses:t}=a.useContext(Ie);return o=>t?"":e(o)}function Me(e,t=[]){if(e===void 0)return{};const o={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!t.includes(n)).forEach(n=>{o[n]=e[n]}),o}function ee(e,t){return typeof e=="function"?e(t):e}function we(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ce(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(o=>!(o.match(/^on[A-Z]/)&&typeof e[o]=="function")).forEach(o=>{t[o]=e[o]}),t}function Ae(e){const{getSlotProps:t,additionalProps:o,externalSlotProps:n,externalForwardedProps:s,className:r}=e;if(!t){const E=q(s==null?void 0:s.className,n==null?void 0:n.className,r,o==null?void 0:o.className),u=h({},o==null?void 0:o.style,s==null?void 0:s.style,n==null?void 0:n.style),P=h({},o,s,n);return E.length>0&&(P.className=E),Object.keys(u).length>0&&(P.style=u),{props:P,internalRef:void 0}}const l=Me(h({},s,n)),i=ce(n),d=ce(s),f=t(l),x=q(f==null?void 0:f.className,o==null?void 0:o.className,r,s==null?void 0:s.className,n==null?void 0:n.className),m=h({},f==null?void 0:f.style,o==null?void 0:o.style,s==null?void 0:s.style,n==null?void 0:n.style),p=h({},f,o,d,i);return x.length>0&&(p.className=x),Object.keys(m).length>0&&(p.style=m),{props:p,internalRef:f.ref}}const Oe=["elementType","externalSlotProps","ownerState"];function de(e){var t;const{elementType:o,externalSlotProps:n,ownerState:s}=e,r=te(e,Oe),l=ee(n,s),{props:i,internalRef:d}=Ae(h({},r,{externalSlotProps:l})),f=G(d,l==null?void 0:l.ref,(t=e.additionalProps)==null?void 0:t.ref);return Te(o,h({},i,{ref:f}),s)}const Be=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function De(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function He(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Le(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||He(e))}function $e(e){const t=[],o=[];return Array.from(e.querySelectorAll(Be)).forEach((n,s)=>{const r=De(n);r===-1||!Le(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function je(){return!0}function _e(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=$e,isEnabled:l=je,open:i}=e,d=a.useRef(!1),f=a.useRef(null),x=a.useRef(null),m=a.useRef(null),p=a.useRef(null),E=a.useRef(!1),u=a.useRef(null),P=G(t.ref,u),M=a.useRef(null);a.useEffect(()=>{!i||!u.current||(E.current=!o)},[o,i]),a.useEffect(()=>{if(!i||!u.current)return;const c=D(u.current);return u.current.contains(c.activeElement)||(u.current.hasAttribute("tabIndex")||u.current.setAttribute("tabIndex","-1"),E.current&&u.current.focus()),()=>{s||(m.current&&m.current.focus&&(d.current=!0,m.current.focus()),m.current=null)}},[i]),a.useEffect(()=>{if(!i||!u.current)return;const c=D(u.current),b=y=>{const{current:C}=u;if(C!==null){if(!c.hasFocus()||n||!l()||d.current){d.current=!1;return}if(!C.contains(c.activeElement)){if(y&&p.current!==y.target||c.activeElement!==p.current)p.current=null;else if(p.current!==null)return;if(!E.current)return;let S=[];if((c.activeElement===f.current||c.activeElement===x.current)&&(S=r(u.current)),S.length>0){var $,k;const j=!!(($=M.current)!=null&&$.shiftKey&&((k=M.current)==null?void 0:k.key)==="Tab"),I=S[0],F=S[S.length-1];typeof I!="string"&&typeof F!="string"&&(j?F.focus():I.focus())}else C.focus()}}},w=y=>{M.current=y,!(n||!l()||y.key!=="Tab")&&c.activeElement===u.current&&y.shiftKey&&(d.current=!0,x.current&&x.current.focus())};c.addEventListener("focusin",b),c.addEventListener("keydown",w,!0);const L=setInterval(()=>{c.activeElement&&c.activeElement.tagName==="BODY"&&b(null)},50);return()=>{clearInterval(L),c.removeEventListener("focusin",b),c.removeEventListener("keydown",w,!0)}},[o,n,s,l,i,r]);const H=c=>{m.current===null&&(m.current=c.relatedTarget),E.current=!0,p.current=c.target;const b=t.props.onFocus;b&&b(c)},R=c=>{m.current===null&&(m.current=c.relatedTarget),E.current=!0};return N.jsxs(a.Fragment,{children:[N.jsx("div",{tabIndex:i?0:-1,onFocus:R,ref:f,"data-testid":"sentinelStart"}),a.cloneElement(t,{ref:P,onFocus:H}),N.jsx("div",{tabIndex:i?0:-1,onFocus:R,ref:x,"data-testid":"sentinelEnd"})]})}function Ke(e){return typeof e=="function"?e():e}const Ue=a.forwardRef(function(t,o){const{children:n,container:s,disablePortal:r=!1}=t,[l,i]=a.useState(null),d=G(a.isValidElement(n)?n.ref:null,o);if(se(()=>{r||i(Ke(s)||document.body)},[s,r]),se(()=>{if(l&&!r)return le(o,l),()=>{le(o,null)}},[o,l,r]),r){if(a.isValidElement(n)){const f={ref:d};return a.cloneElement(n,f)}return N.jsx(a.Fragment,{children:n})}return N.jsx(a.Fragment,{children:l&&ye.createPortal(n,l)})}),We=Ue;function ze(e){const t=D(e);return t.body===e?ne(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function V(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ue(e){return parseInt(ne(e).getComputedStyle(e).paddingRight,10)||0}function Ve(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function fe(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,l=>{const i=r.indexOf(l)===-1,d=!Ve(l);i&&d&&V(l,s)})}function Q(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Ye(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(ze(n)){const l=we(D(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ue(n)+l}px`;const i=D(n).querySelectorAll(".mui-fixed");[].forEach.call(i,d=>{o.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${ue(d)+l}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=D(n).body;else{const l=n.parentElement,i=ne(n);r=(l==null?void 0:l.nodeName)==="HTML"&&i.getComputedStyle(l).overflowY==="scroll"?l:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:l,property:i})=>{r?l.style.setProperty(i,r):l.style.removeProperty(i)})}}function qe(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Ge{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&V(t.modalRef,!1);const s=qe(o);fe(o,t.mount,t.modalRef,s,!0);const r=Q(this.containers,l=>l.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=Q(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=Ye(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=Q(this.containers,l=>l.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&V(t.modalRef,o),fe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const l=r.modals[r.modals.length-1];l.modalRef&&V(l.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ze(e){return ke("MuiModal",e)}Pe("MuiModal",["root","hidden","backdrop"]);const Xe=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],Je=e=>{const{open:t,exited:o}=e;return Re({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Fe(Ze))};function Qe(e){return typeof e=="function"?e():e}function et(e){return e?e.props.hasOwnProperty("in"):!1}const tt=new Ge,nt=a.forwardRef(function(t,o){var n,s;const{children:r,closeAfterTransition:l=!1,container:i,disableAutoFocus:d=!1,disableEnforceFocus:f=!1,disableEscapeKeyDown:x=!1,disablePortal:m=!1,disableRestoreFocus:p=!1,disableScrollLock:E=!1,hideBackdrop:u=!1,keepMounted:P=!1,manager:M=tt,onBackdropClick:H,onClose:R,onKeyDown:c,open:b,onTransitionEnter:w,onTransitionExited:L,slotProps:y={},slots:C={}}=t,$=te(t,Xe),k=M,[S,j]=a.useState(!b),I=a.useRef({}),F=a.useRef(null),v=a.useRef(null),_=G(v,o),K=et(r),W=(n=t["aria-hidden"])!=null?n:!0,Z=()=>D(F.current),A=()=>(I.current.modalRef=v.current,I.current.mountNode=F.current,I.current),z=()=>{k.mount(A(),{disableScrollLock:E}),v.current&&(v.current.scrollTop=0)},O=ae(()=>{const g=Qe(i)||Z().body;k.add(A(),g),v.current&&z()}),U=a.useCallback(()=>k.isTopModal(A()),[k]),X=ae(g=>{F.current=g,!(!g||!v.current)&&(b&&U()?z():V(v.current,W))}),T=a.useCallback(()=>{k.remove(A(),W)},[k,W]);a.useEffect(()=>()=>{T()},[T]),a.useEffect(()=>{b?O():(!K||!l)&&T()},[b,T,K,l,O]);const B=h({},t,{closeAfterTransition:l,disableAutoFocus:d,disableEnforceFocus:f,disableEscapeKeyDown:x,disablePortal:m,disableRestoreFocus:p,disableScrollLock:E,exited:S,hideBackdrop:u,keepMounted:P}),oe=Je(B),he=()=>{j(!1),w&&w()},be=()=>{j(!0),L&&L(),l&&T()},ge=g=>{g.target===g.currentTarget&&(H&&H(g),R&&R(g,"backdropClick"))},xe=g=>{c&&c(g),!(g.key!=="Escape"||!U())&&(x||(g.stopPropagation(),R&&R(g,"escapeKeyDown")))},Y={};r.props.tabIndex===void 0&&(Y.tabIndex="-1"),K&&(Y.onEnter=ie(he,r.props.onEnter),Y.onExited=ie(be,r.props.onExited));const re=(s=C.root)!=null?s:"div",Ee=de({elementType:re,externalSlotProps:y.root,externalForwardedProps:$,additionalProps:{ref:_,role:"presentation",onKeyDown:xe},className:oe.root,ownerState:B}),J=C.backdrop,ve=de({elementType:J,externalSlotProps:y.backdrop,additionalProps:{"aria-hidden":!0,onClick:ge,open:b},className:oe.backdrop,ownerState:B});return!P&&!b&&(!K||S)?null:N.jsx(We,{ref:X,container:i,disablePortal:m,children:N.jsxs(re,h({},Ee,{children:[!u&&J?N.jsx(J,h({},ve)):null,N.jsx(_e,{disableEnforceFocus:f,disableAutoFocus:d,disableRestoreFocus:p,isEnabled:U,open:b,children:a.cloneElement(r,Y)})]}))})}),ot=nt,rt=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],st=pe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>h({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),lt=pe(Ne,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),at=a.forwardRef(function(t,o){var n,s,r,l,i,d;const f=Se({name:"MuiModal",props:t}),{BackdropComponent:x=lt,BackdropProps:m,classes:p,className:E,closeAfterTransition:u=!1,children:P,container:M,component:H,components:R={},componentsProps:c={},disableAutoFocus:b=!1,disableEnforceFocus:w=!1,disableEscapeKeyDown:L=!1,disablePortal:y=!1,disableRestoreFocus:C=!1,disableScrollLock:$=!1,hideBackdrop:k=!1,keepMounted:S=!1,onBackdropClick:j,onClose:I,open:F,slotProps:v,slots:_,theme:K}=f,W=te(f,rt),[Z,A]=a.useState(!0),z={container:M,closeAfterTransition:u,disableAutoFocus:b,disableEnforceFocus:w,disableEscapeKeyDown:L,disablePortal:y,disableRestoreFocus:C,disableScrollLock:$,hideBackdrop:k,keepMounted:S,onBackdropClick:j,onClose:I,open:F},O=h({},f,z,{exited:Z}),U=(n=(s=_==null?void 0:_.root)!=null?s:R.Root)!=null?n:st,X=(r=(l=_==null?void 0:_.backdrop)!=null?l:R.Backdrop)!=null?r:x,T=(i=v==null?void 0:v.root)!=null?i:c.root,B=(d=v==null?void 0:v.backdrop)!=null?d:c.backdrop;return N.jsx(ot,h({slots:{root:U,backdrop:X},slotProps:{root:()=>h({},ee(T,O),!me(U)&&{as:H,theme:K},{className:q(E,T==null?void 0:T.className,p==null?void 0:p.root,!O.open&&O.exited&&(p==null?void 0:p.hidden))}),backdrop:()=>h({},m,ee(B,O),{className:q(B==null?void 0:B.className,m==null?void 0:m.className,p==null?void 0:p.backdrop)})},onTransitionEnter:()=>A(!1),onTransitionExited:()=>A(!0),ref:o},W,z,{children:P}))}),ut=at;export{ut as M,we as g,me as i};
