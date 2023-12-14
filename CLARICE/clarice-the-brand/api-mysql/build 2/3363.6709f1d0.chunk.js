"use strict";(self.webpackChunkapi_mysql=self.webpackChunkapi_mysql||[]).push([[3363],{47796:(v,O,s)=>{s.d(O,{S:()=>m});var t=s(74081),P=s(23298),a=s(74577),d=s(2981),i=s(10701),e=s(32370),h=s(61020),c=s(47533),M=s(7484);const m=({providers:_,displayAllProviders:D})=>{const{formatMessage:E}=(0,h.Z)();return D?(0,t.jsx)(P.r,{gap:4,children:_.map(n=>(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(r,{provider:n})},n.uid))}):_.length>2&&!D?(0,t.jsxs)(P.r,{gap:4,children:[_.slice(0,2).map(n=>(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(r,{provider:n})},n.uid)),(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(d.u,{label:E({id:"global.see-more"}),children:(0,t.jsx)(o,{as:c.rU,to:"/auth/providers",children:(0,t.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,t.jsx)(x,{justifyContent:"center",children:_.map(n=>(0,t.jsx)(r,{provider:n},n.uid))})},x=(0,M.default)(i.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:_})=>_.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:_})=>_.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:_})=>_.spaces[2]};
  }
`,r=({provider:_})=>(0,t.jsx)(d.u,{label:_.displayName,children:(0,t.jsx)(o,{href:`${window.strapi.backendURL}/admin/connect/${_.uid}`,children:_.icon?(0,t.jsx)("img",{src:_.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,t.jsx)(e.Z,{children:_.displayName})})}),o=M.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:_})=>_.colors.neutral150};
  border-radius: ${({theme:_})=>_.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:_})=>_.colors.neutral600};
`},63363:(v,O,s)=>{s.r(O),s.d(O,{FORMS:()=>R});var t=s(74081),P=s(9941),a=s(93415),d=s(32370),i=s(10701),e=s(77970),h=s(48102),c=s(84366),M=s(79213),m=s(94050),x=s(61020),r=s(40464),o=s(51447),_=s(47533),D=s(7484),E=s(47599),n=s(47796),W=s(15816),I=s(97442),K=s(13576),f=s(87830),u=s(47184),y=s(364),S=s(27279),p=s(59461),$=s(71563),Z=s(49204),F=s(47853),z=s(75719),N=s(74919),Q=s(29206),Y=s(98934),G=s(43433);const L=()=>{const{push:A}=(0,o.k6)(),{formatMessage:l}=(0,x.Z)(),{get:B}=(0,m.kY)(),{isLoading:g,data:j=[]}=(0,r.useQuery)(["ee","providers"],async()=>{const{data:T}=await B("/admin/providers");return T},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),U=()=>{A("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!g&&j.length===0?(0,t.jsx)(o.l_,{to:"/auth/login"}):(0,t.jsx)(E.U,{children:(0,t.jsxs)(P.o,{children:[(0,t.jsxs)(E.e,{children:[(0,t.jsxs)(E.C,{children:[(0,t.jsx)(E.f,{}),(0,t.jsx)(a.x,{paddingTop:6,paddingBottom:1,children:(0,t.jsx)(d.Z,{as:"h1",variant:"alpha",children:l({id:"Auth.form.welcome.title"})})}),(0,t.jsx)(a.x,{paddingBottom:7,children:(0,t.jsx)(d.Z,{variant:"epsilon",textColor:"neutral600",children:l({id:"Auth.login.sso.subtitle"})})})]}),(0,t.jsxs)(i.k,{direction:"column",alignItems:"stretch",gap:7,children:[g?(0,t.jsx)(i.k,{justifyContent:"center",children:(0,t.jsx)(e.a,{children:l({id:"Auth.login.sso.loading"})})}):(0,t.jsx)(n.S,{providers:j}),(0,t.jsxs)(i.k,{children:[(0,t.jsx)(C,{}),(0,t.jsx)(a.x,{paddingLeft:3,paddingRight:3,children:(0,t.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:l({id:"or"})})}),(0,t.jsx)(C,{})]}),(0,t.jsx)(h.z,{fullWidth:!0,size:"L",onClick:U,children:l({id:"Auth.form.button.login.strapi"})})]})]}),(0,t.jsx)(i.k,{justifyContent:"center",children:(0,t.jsx)(a.x,{paddingTop:4,children:(0,t.jsx)(M.r,{as:_.OL,to:"/auth/forgot-password",children:(0,t.jsx)(d.Z,{variant:"pi",children:l({id:"Auth.link.forgot-password"})})})})})]})})},C=(0,D.default)(c.i)`
  flex: 1;
`,R={providers:L}}}]);
