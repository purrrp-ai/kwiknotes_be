import{j as e,r as p,C as f}from"./index-73886e4a.js";import{r as v,i as _}from"./createSvgIcon-a251f031.js";import{D as g,H as y}from"./header-f9be09ae.js";import{M as w,N as c}from"./note-5f8929cb.js";import"./createSvgIcon-95652d7e.js";import"./useForkRef-f0f0758c.js";import"./useIsFocusVisible-a21fe620.js";import"./logo-link-04dba84f.js";import"./Close-1ba24843.js";import"./CircularProgress-e7129798.js";import"./makeStyles-8abd10b7.js";import"./IconButton-692d3f3e.js";import"./Button-9730829b.js";var i={},E=_;Object.defineProperty(i,"__esModule",{value:!0});var m=i.default=void 0,N=E(v()),M=e,D=(0,N.default)((0,M.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");m=i.default=D;const S="_binned_1wde1_1",C="_bin-emphasis_1wde1_15",r={binned:S,"bin-emphasis":"_bin-emphasis_1wde1_15",binEmphasis:C};function Y(){var d;const{user:o,gridView:u,navOpen:a,setShowSignIn:x}=p.useContext(f),[h,l]=p.useState("underline"),b=()=>l("none"),j=()=>l("underline");let s=null;if(o){const t=(d=o.notes)==null?void 0:d.filter(n=>n.binned);t.length?s=u?e.jsx(w,{columns:{xl:a?7:6,lg:a?5:4,sm:3,xs:1},spacing:1.25,sx:{mt:8},className:r["notes-wrapper_grid"],children:t.slice().reverse().map(n=>e.jsx(c,{n},n._id))}):e.jsx("div",{className:r["notes-wrapper_list"],children:t.slice().reverse().map(n=>e.jsx(c,{n},n._id))}):s=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.binEmphasis,children:[e.jsx("em",{children:"Binned notes are permanently deleted after 7 days"}),t.length?e.jsx("button",{type:"button",onClick:()=>console.log("bin emptied."),children:"Empty your bin"}):null]}),e.jsxs("p",{className:"empty-dependency",children:[e.jsx(m,{sx:{fontSize:"3em",opacity:.85,alignSelf:"center"}}),"No binned notes"]})]})}else s=e.jsxs("p",{className:"empty-dependency",style:{flexFlow:"row nowrap",alignItems:"center"},children:[e.jsx("button",{type:"button",onClick:()=>x(!0),style:{border:0,padding:"0 6px",backgroundColor:"transparent",pointerEvents:"auto",textDecoration:h},onMouseEnter:b,onMouseLeave:j,children:"Sign in"}),"to see your notes in bin"]});return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsxs("main",{className:"main",children:[e.jsx(y,{}),e.jsx("section",{className:r.binned,"aria-label":"Your binned notes",role:"region",children:s})]})]})}export{Y as default};
