"use strict";(self.webpackChunkapi_mysql=self.webpackChunkapi_mysql||[]).push([[2919],{92919:(te,x,s)=>{s.r(x),s.d(x,{U:()=>fe,i:()=>Ie});var e=s(74081),t=s(94050),E=s(59461),o=s(44328),l=s(27279),y=s(48102),d=s(86967),O=s(93153),C=s(50086),i=s(73411),g=s(32370),M=s(10701),A=s(4987),c=s(93415),p=s(5938),J=s(6918),oe=s(15244),ae=s(23298),K=s(74577),v=s(35250),f=s(9941),S=s(27875),X=s(37472),G=s(74758),k=s(29206),P=s(61020),z=s(40464),ne=s(51447),le=s(11266),b=s(47599),de=s(79211),T=s(16543),Pe=s(26784),he=s(78665),r=s(70627),Oe=s(89486),De=s(82298),xe=s(71563),ue=s(83595),w=s(47853);const Ee=({onClick:a})=>{const{formatMessage:m}=(0,P.Z)();return(0,e.jsx)(y.z,{onClick:a,startIcon:(0,e.jsx)(T.Z,{}),size:"S",children:m({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})};Ee.propTypes={onClick:r.func.isRequired};const ce=({canDelete:a,headers:m,entriesToDelete:j,onClickDelete:q,onSelectRow:$,withMainAction:F,withBulkActions:B,rows:I})=>{const{push:h,location:{pathname:Y}}=(0,ne.k6)(),{formatMessage:D}=(0,P.Z)();return(0,e.jsx)(d.p,{children:I.map(n=>{const Z=j.findIndex(U=>U===n.id)!==-1;return(0,e.jsxs)(O.Tr,{...(0,t.X7)({fn:()=>h(`${Y}/${n.id}`),condition:B}),children:[F&&(0,e.jsx)(C.Td,{...t.UW,children:(0,e.jsx)(i.C,{"aria-label":D({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,o.g)(n.firstname,n.lastname)}),checked:Z,onChange:()=>{$({name:n.id,value:!Z})}})}),m.map(({key:U,cellFormatter:V,name:W,...N})=>(0,e.jsx)(C.Td,{children:typeof V=="function"?V(n,{key:U,name:W,formatMessage:D,...N}):(0,e.jsx)(g.Z,{textColor:"neutral800",children:n[W]||"-"})},U)),B&&(0,e.jsx)(C.Td,{children:(0,e.jsxs)(M.k,{justifyContent:"end",children:[(0,e.jsx)(A.h,{onClick:()=>h(`${Y}/${n.id}`),label:D({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,o.g)(n.firstname,n.lastname)}),noBorder:!0,icon:(0,e.jsx)(Pe.Z,{})}),a&&(0,e.jsx)(c.x,{paddingLeft:1,...t.UW,children:(0,e.jsx)(A.h,{onClick:()=>q(n.id),label:D({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,o.g)(n.firstname,n.lastname)}),noBorder:!0,icon:(0,e.jsx)(he.Z,{})})})]})})]},n.id)})})};ce.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},ce.propTypes={canDelete:r.bool,entriesToDelete:r.array,headers:r.array.isRequired,onClickDelete:r.func,onSelectRow:r.func,rows:r.array,withBulkActions:r.bool,withMainAction:r.bool};const ge={firstname:"",lastname:"",email:"",roles:[]},ye=[],Ce=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ae=w.Ry().shape({firstname:w.Z_().trim().required(t.I0.required),lastname:w.Z_(),email:w.Z_().email(t.I0.email).required(t.I0.required),roles:w.IX().min(1,t.I0.required).required(t.I0.required)}),Te={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Me=({onSuccess:a,onToggle:m})=>{const[j,q]=(0,l.useState)("create"),[$,F]=(0,l.useState)(!1),[B,I]=(0,l.useState)(null),{formatMessage:h}=(0,P.Z)(),Y=(0,t.lm)(),{lockApp:D,unlockApp:n}=(0,t.o1)(),{post:Z}=(0,t.kY)(),U=(0,b.p)(ye,async()=>(await s.e(9385).then(s.bind(s,19385))).ROLE_LAYOUT,{combine(u,R){return[...u,R]},defaultValue:[]}),V=(0,b.p)(ge,async()=>(await s.e(9385).then(s.bind(s,19385))).FORM_INITIAL_VALUES,{combine(u,R){return{...u,...R}},defaultValue:ge}),W=(0,b.p)(ue.M,async()=>(await s.e(1254).then(s.bind(s,91254))).MagicLinkEE),N=(0,z.useMutation)(u=>Z("/admin/users",u),{async onSuccess({data:u}){I(u.data.registrationToken),await a(),re(),F(!1)},onError(u){throw F(!1),Y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),u},onSettled(){n()}}),ee=h({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ie=async(u,{setErrors:R})=>{D(),F(!0);try{await N.mutateAsync(u)}catch(H){n(),H?.response?.data?.error.message==="Email already taken"&&R({email:H.response.data.error.message})}},re=()=>{_?q(_):m()},{buttonSubmitLabel:se,isDisabled:Q,next:_}=Te[j],Ue=j==="create"?(0,e.jsx)(y.z,{type:"submit",loading:$,children:h(se)}):(0,e.jsx)(y.z,{type:"button",loading:$,onClick:m,children:h(se)});return W?(0,e.jsxs)(p.P,{onClose:m,labelledBy:"title",children:[(0,e.jsx)(J.x,{children:(0,e.jsx)(Oe.O,{label:ee,children:(0,e.jsx)(De.$,{isCurrent:!0,children:ee})})}),(0,e.jsx)(xe.J9,{enableReinitialize:!0,initialValues:V,onSubmit:ie,validationSchema:Ae,validateOnChange:!1,children:({errors:u,handleChange:R,values:H})=>(0,e.jsxs)(t.l0,{children:[(0,e.jsx)(oe.f,{children:(0,e.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:6,children:[j!=="create"&&(0,e.jsx)(W,{registrationToken:B}),(0,e.jsxs)(c.x,{children:[(0,e.jsx)(g.Z,{variant:"beta",as:"h2",children:h({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,e.jsx)(c.x,{paddingTop:4,children:(0,e.jsx)(M.k,{direction:"column",alignItems:"stretch",gap:1,children:(0,e.jsx)(ae.r,{gap:5,children:Ce.map(_e=>_e.map(L=>(0,e.jsx)(K.P,{...L.size,children:(0,e.jsx)(t.jm,{...L,disabled:Q,error:u[L.name],onChange:R,value:H[L.name]})},L.name)))})})})]}),(0,e.jsxs)(c.x,{children:[(0,e.jsx)(g.Z,{variant:"beta",as:"h2",children:h({id:"global.roles",defaultMessage:"User's role"})}),(0,e.jsx)(c.x,{paddingTop:4,children:(0,e.jsxs)(ae.r,{gap:5,children:[(0,e.jsx)(K.P,{col:6,xs:12,children:(0,e.jsx)(ue.S,{disabled:Q,error:u.roles,onChange:R,value:H.roles})}),U.map(_e=>_e.map(L=>(0,e.jsx)(K.P,{...L.size,children:(0,e.jsx)(t.jm,{...L,disabled:Q,onChange:R,value:H[L.name]})},L.name)))]})})]})]})}),(0,e.jsx)(v.m,{startActions:(0,e.jsx)(y.z,{variant:"tertiary",onClick:m,type:"button",children:h({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:Ue})]})})]}):null};Me.propTypes={onToggle:r.func.isRequired,onSuccess:r.func.isRequired};const me=({pagination:a})=>(0,e.jsx)(c.x,{paddingTop:4,children:(0,e.jsxs)(M.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(t.v4,{}),(0,e.jsx)(t.tU,{pagination:a})]})});me.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},me.propTypes={pagination:r.shape({page:r.number,pageCount:r.number,pageSize:r.number,total:r.number})};const je=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Le=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:a},{formatMessage:m}){return(0,e.jsx)(g.Z,{textColor:"neutral800",children:a.map(j=>m({id:`Settings.permissions.users.${j.code}`,defaultMessage:j.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:a},{formatMessage:m}){return(0,e.jsxs)(M.k,{children:[(0,e.jsx)(t.qb,{isActive:a,variant:a?"success":"danger"}),(0,e.jsx)(g.Z,{textColor:"neutral800",children:m({id:a?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:a?"Active":"Inactive"})})]})}}],pe=["ee","license-limit-info"],fe=()=>{const{post:a}=(0,t.kY)(),{formatAPIError:m}=(0,t.So)(),[j,q]=(0,l.useState)(!1),$=(0,E.v9)(o.s),{allowedActions:{canCreate:F,canDelete:B,canRead:I}}=(0,t.ss)($.settings.users),h=(0,z.useQueryClient)(),Y=(0,t.lm)(),{formatMessage:D}=(0,P.Z)(),{search:n}=(0,ne.TH)();(0,t.go)();const{users:Z,pagination:U,isError:V,isLoading:W,refetch:N}=(0,le.u)(k.parse(n,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:I}),ee=(0,b.p)(Ee,async()=>(await s.e(8384).then(s.bind(s,98384))).CreateActionEE),ie=Le.map(_=>({..._,metadatas:{..._.metadatas,label:D(_.metadatas.label)}})),re=D({id:"global.users",defaultMessage:"Users"}),se=()=>{q(_=>!_)},Q=(0,z.useMutation)(async _=>{await a("/admin/users/batch-delete",{ids:_})},{async onSuccess(){await N(),await h.refetchQueries(pe)},onError(_){Y({type:"warning",message:{id:"notification.error",message:m(_),defaultMessage:"An error occured"}})}});return ee?(0,e.jsxs)(f.o,{"aria-busy":W,children:[(0,e.jsx)(t.SL,{name:"Users"}),(0,e.jsx)(S.T,{primaryAction:F&&(0,e.jsx)(ee,{onClick:se}),title:re,subtitle:D({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),I&&(0,e.jsx)(X.Z,{startActions:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.m,{label:D({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:re})}),(0,e.jsx)(de.F,{displayedFilters:je})]})}),(0,e.jsxs)(G.D,{canRead:I,children:[!I&&(0,e.jsx)(t.ZF,{}),V&&(0,e.jsx)("div",{children:"TODO: An error occurred"}),I&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.tM,{contentType:"Users",isLoading:W,onConfirmDeleteAll:Q.mutateAsync,onConfirmDelete:_=>Q.mutateAsync([_]),headers:ie,rows:Z,withBulkActions:!0,withMainAction:B,children:(0,e.jsx)(ce,{canDelete:B,headers:ie,rows:Z,withBulkActions:!0,withMainAction:B})}),U&&(0,e.jsx)(me,{pagination:U})]})]}),j&&(0,e.jsx)(Me,{onSuccess:async()=>{await N(),await h.refetchQueries(pe)},onToggle:se})]}):null},ve=()=>{const a=(0,b.p)(fe,async()=>(await s.e(9911).then(s.bind(s,79911))).UserListPageEE);return a?(0,e.jsx)(a,{}):null},Ie=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const a=(0,E.v9)(o.s);return(0,e.jsx)(t.O4,{permissions:a.settings.users.main,children:(0,e.jsx)(ve,{})})}},Symbol.toStringTag,{value:"Module"}))},79211:(te,x,s)=>{s.d(x,{F:()=>C});var e=s(74081),t=s(27279),E=s(93415),o=s(48102),l=s(94050),y=s(57121),d=s(70627),O=s(61020);const C=({displayedFilters:i})=>{const[g,M]=(0,t.useState)(!1),{formatMessage:A}=(0,O.Z)(),c=(0,t.useRef)(),p=()=>{M(J=>!J)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(E.x,{paddingTop:1,paddingBottom:1,children:[(0,e.jsx)(o.z,{variant:"tertiary",ref:c,startIcon:(0,e.jsx)(y.Z,{}),onClick:p,size:"S",children:A({id:"app.utils.filters",defaultMessage:"Filters"})}),g&&(0,e.jsx)(l.J5,{displayedFilters:i,isVisible:g,onToggle:p,source:c})]}),(0,e.jsx)(l.W$,{filtersSchema:i})]})};C.propTypes={displayedFilters:d.arrayOf(d.shape({name:d.string.isRequired,metadatas:d.shape({label:d.string}),fieldSchema:d.shape({type:d.string})})).isRequired}},83595:(te,x,s)=>{s.d(x,{M:()=>c,S:()=>K,a:()=>A});var e=s(74081),t=s(70627),E=s(61020),o=s(47599),l=s(4987),y=s(5627),d=s(78955),O=s(94050),C=s(78031),i=s(34547),g=s(40464),M=s(7484);const A=({children:v,target:f})=>{const S=(0,O.lm)(),{formatMessage:X}=(0,E.Z)(),{copy:G}=(0,O.VP)(),k=X({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),P=async()=>{await G(f)&&S({type:"info",message:{id:"notification.link-copied"}})};return(0,e.jsx)(O.Y_,{endAction:(0,e.jsx)(l.h,{label:k,noBorder:!0,icon:(0,e.jsx)(C.Z,{}),onClick:P}),title:f,titleEllipsis:!0,subtitle:v,icon:(0,e.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})};A.propTypes={children:t.oneOfType([t.element,t.string]).isRequired,target:t.string.isRequired};const c=({registrationToken:v})=>{const{formatMessage:f}=(0,E.Z)(),S=`${window.location.origin}${(0,o.T)()}/auth/register?registrationToken=${v}`;return(0,e.jsx)(A,{target:S,children:f({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})};c.defaultProps={registrationToken:""},c.propTypes={registrationToken:t.string};const p=(0,M.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,J=M.default.div`
  animation: ${p} 2s infinite linear;
`,oe=()=>(0,e.jsx)(J,{children:(0,e.jsx)(i.Z,{})}),ae=async()=>{const{get:v}=(0,O.tg)(),{data:f}=await v("/admin/roles");return f.data},K=({disabled:v,error:f,onChange:S,value:X})=>{const{status:G,data:k}=(0,g.useQuery)(["roles"],ae,{staleTime:5e4}),{formatMessage:P}=(0,E.Z)(),z=f?P({id:f,defaultMessage:f}):"",ne=P({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),le=P({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),b=P({id:"app.components.Select.placeholder",defaultMessage:"Select"}),de=G==="loading"?(0,e.jsx)(oe,{}):void 0;return(0,e.jsx)(y.P,{id:"roles",disabled:v,error:z,hint:le,label:ne,name:"roles",onChange:T=>{S({target:{name:"roles",value:T}})},placeholder:b,multi:!0,startIcon:de,value:X.map(T=>T.toString()),withTags:!0,required:!0,children:(k||[]).map(T=>(0,e.jsx)(d.W,{value:T.id.toString(),children:P({id:`global.${T.code}`,defaultMessage:T.name})},T.id))})};K.defaultProps={disabled:!1,error:void 0},K.propTypes={disabled:t.bool,error:t.string,onChange:t.func.isRequired,value:t.array.isRequired}},11266:(te,x,s)=>{s.d(x,{u:()=>o});var e=s(27279),t=s(94050),E=s(40464);function o(l={},y={}){const{id:d="",...O}=l,{get:C}=(0,t.kY)(),{data:i,isError:g,isLoading:M,refetch:A}=(0,E.useQuery)(["users",d,O],async()=>{const{data:{data:p}}=await C(`/admin/users/${d}`,{params:O});return p},y);return{users:e.useMemo(()=>{let p=[];return i&&("results"in i?Array.isArray(i.results)&&(p=i.results):p=[i]),p},[i]),pagination:e.useMemo(()=>(i&&"pagination"in i)??null,[i]),isLoading:M,isError:g,refetch:A}}},37472:(te,x,s)=>{s.d(x,{Z:()=>E});var e=s(74081),t=s(10701);const E=({startActions:o,endActions:l})=>!o&&!l?null:(0,e.jsxs)(t.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(t.k,{gap:2,wrap:"wrap",children:o}),(0,e.jsx)(t.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})}}]);
