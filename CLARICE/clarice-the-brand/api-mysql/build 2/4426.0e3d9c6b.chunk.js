"use strict";(self.webpackChunkapi_mysql=self.webpackChunkapi_mysql||[]).push([[4426],{64426:(g,d,s)=>{s.r(d),s.d(d,{LoginEE:()=>v});var _=s(74081),i=s(84366),n=s(93415),E=s(10701),r=s(32370),D=s(94050),M=s(61020),o=s(40464),l=s(7484),O=s(47599),e=s(47796),P=s(15816),h=s(97442),t=s(13576),m=s(87830),c=s(47184),a=s(364),I=s(27279),T=s(59461),W=s(71563),K=s(49204),j=s(47853),f=s(75719),u=s(74919),y=s(29206),S=s(98934),$=s(43433);const L=(0,l.default)(i.i)`
  flex: 1;
`,v=C=>{const{formatMessage:x}=(0,M.Z)(),{get:B}=(0,D.kY)(),{isLoading:U,data:R=[]}=(0,o.useQuery)(["ee","providers"],async()=>{const{data:A}=await B("/admin/providers");return A},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!U&&R.length===0?(0,_.jsx)(O.L,{...C}):(0,_.jsx)(O.L,{...C,children:(0,_.jsx)(n.x,{paddingTop:7,children:(0,_.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,_.jsxs)(E.k,{children:[(0,_.jsx)(L,{}),(0,_.jsx)(n.x,{paddingLeft:3,paddingRight:3,children:(0,_.jsx)(r.Z,{variant:"sigma",textColor:"neutral600",children:x({id:"Auth.login.sso.divider"})})}),(0,_.jsx)(L,{})]}),(0,_.jsx)(e.S,{providers:R,displayAllProviders:!1})]})})})}},47796:(g,d,s)=>{s.d(d,{S:()=>O});var _=s(74081),i=s(23298),n=s(74577),E=s(2981),r=s(10701),D=s(32370),M=s(61020),o=s(47533),l=s(7484);const O=({providers:t,displayAllProviders:m})=>{const{formatMessage:c}=(0,M.Z)();return m?(0,_.jsx)(i.r,{gap:4,children:t.map(a=>(0,_.jsx)(n.P,{col:4,children:(0,_.jsx)(P,{provider:a})},a.uid))}):t.length>2&&!m?(0,_.jsxs)(i.r,{gap:4,children:[t.slice(0,2).map(a=>(0,_.jsx)(n.P,{col:4,children:(0,_.jsx)(P,{provider:a})},a.uid)),(0,_.jsx)(n.P,{col:4,children:(0,_.jsx)(E.u,{label:c({id:"global.see-more"}),children:(0,_.jsx)(h,{as:o.rU,to:"/auth/providers",children:(0,_.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,_.jsx)(e,{justifyContent:"center",children:t.map(a=>(0,_.jsx)(P,{provider:a},a.uid))})},e=(0,l.default)(r.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:t})=>t.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:t})=>t.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:t})=>t.spaces[2]};
  }
`,P=({provider:t})=>(0,_.jsx)(E.u,{label:t.displayName,children:(0,_.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${t.uid}`,children:t.icon?(0,_.jsx)("img",{src:t.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,_.jsx)(D.Z,{children:t.displayName})})}),h=l.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
  border-radius: ${({theme:t})=>t.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:t})=>t.colors.neutral600};
`}}]);
