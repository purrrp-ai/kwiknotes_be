import{j as e,r as c,C as j}from"./index-73886e4a.js";import{r as g,i as y}from"./createSvgIcon-a251f031.js";import{D as _,H as C}from"./header-f9be09ae.js";import{M,N as p}from"./note-5f8929cb.js";import"./createSvgIcon-95652d7e.js";import"./useForkRef-f0f0758c.js";import"./useIsFocusVisible-a21fe620.js";import"./logo-link-04dba84f.js";import"./Close-1ba24843.js";import"./CircularProgress-e7129798.js";import"./makeStyles-8abd10b7.js";import"./IconButton-692d3f3e.js";import"./Button-9730829b.js";var n={},S=y;Object.defineProperty(n,"__esModule",{value:!0});var d=n.default=void 0,b=S(g()),w=e,D=(0,b.default)((0,w.jsx)("path",{d:"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5 6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"}),"Archive");d=n.default=D;const E="_stashes_76bz7_1",N={stashes:E};function T(){var l;const{user:o,gridView:m,navOpen:a,setShowSignIn:u}=c.useContext(j),[x,i]=c.useState("underline"),h=()=>i("none"),v=()=>i("underline");let r=null;const f={xl:a?7:6,lg:a?5:4,sm:3,xs:1};if(o){const t=(l=o.notes)==null?void 0:l.slice().filter(s=>s.stashed&&!s.binned);t!=null&&t.length?r=m?e.jsx(M,{columns:f,spacing:1.25,sx:{mt:8},children:t.slice().reverse().map(s=>e.jsx(p,{n:s},s._id))}):e.jsx("div",{children:t.slice().reverse().map(s=>e.jsx(p,{n:s},s._id))}):r=e.jsxs("p",{className:"empty-dependency",children:[e.jsx(d,{sx:{fontSize:"3em",opacity:.85,alignSelf:"center"}}),"Your stashed notes appear here"]})}else r=e.jsxs("p",{className:"empty-dependency",style:{flexFlow:"row nowrap",alignItems:"center"},children:[e.jsx("button",{type:"button",onClick:()=>u(!0),style:{border:0,padding:"0 6px",backgroundColor:"transparent",pointerEvents:"auto",textDecoration:x},onMouseEnter:h,onMouseLeave:v,children:"Sign in"}),"to see your notes"]});return e.jsxs(e.Fragment,{children:[e.jsx(_,{}),e.jsxs("main",{className:"main",children:[e.jsx(C,{}),e.jsx("section",{className:N.stashes,"aria-label":"Your stash",role:"region",children:r})]})]})}export{T as default};