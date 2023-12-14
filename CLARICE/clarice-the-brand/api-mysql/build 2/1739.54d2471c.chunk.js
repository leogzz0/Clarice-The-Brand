"use strict";(self.webpackChunkapi_mysql=self.webpackChunkapi_mysql||[]).push([[1739],{38566:(xt,k,n)=>{n.d(k,{c:()=>B});var t=n(74081),_=n(7484),L=n(93415),f=n(84366),x=n(10701),F=n(32370);const S=(0,_.default)(L.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:y})=>y.colors.primary600};
  }
`,N=(0,_.default)(L.x)`
  border-radius: 0 0 ${({theme:y})=>y.borderRadius} ${({theme:y})=>y.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,B=({children:y,icon:J,...z})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(f.i,{}),(0,t.jsx)(N,{as:"button",background:"primary100",padding:5,...z,children:(0,t.jsxs)(x.k,{children:[(0,t.jsx)(S,{"aria-hidden":!0,background:"primary200",children:J}),(0,t.jsx)(L.x,{paddingLeft:3,children:(0,t.jsx)(F.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:y})})]})})]})},71739:(xt,k,n)=>{n.r(k),n.d(k,{default:()=>zt});var t=n(74081),_=n(10701),L=n(50703),f=n(93415),x=n(32370),F=n(70774),S=n(38101),N=n(93153),B=n(50086),y=n(48102),J=n(38566),z=n(4987),Et=n(27875),yt=n(74758),c=n(94050),Ct=n(95066),U=n(36938),at=n(26784),Mt=n(78665),Dt=n(91561),Tt=n(31440),jt=n(59082),Pt=n(76827),T=n(98934),Ot=n(10131),rt=n(6078),lt=n(51943),$=n(61020),G=n(51447),W=n(27279),o=n(70627),d=n(27743),E=n(7484),wt=n(364),Vt=n(99732),Xt=n(43433),Ht=n(83287),Jt=n(6699),Gt=n(12665),Yt=n(8175),qt=n(47853),te=n(63799),ee=n(84921),ne=n(59461),oe=n(79146),se=n(29206),ie=n(88702),ae=n(81465),re=n(51527),le=n(49204),de=n(74919),ce=n(51006);const dt=E.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,c.Q1)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,c.Q1)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:s,theme:i})=>s?`background-color: ${i.colors.primary200};`:e?`background-color: ${i.colors.primary200};`:`background: ${i.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function Q({customRowComponent:e,component:s,isFromDynamicZone:i,isNestedInDZComponent:a,firstLoopComponentUid:p}){const{modifiedData:l}=(0,d.u)(),{schema:{attributes:g}}=T(l,["components",s],{schema:{attributes:[]}});return(0,t.jsx)(dt,{isChildOfDynamicZone:i,className:"component-row",children:(0,t.jsx)("td",{colSpan:12,children:(0,t.jsx)(w,{customRowComponent:e,items:g,targetUid:s,firstLoopComponentUid:p||s,editTarget:"components",isFromDynamicZone:i,isNestedInDZComponent:a,isSub:!0,secondLoopComponentUid:p?s:null})})})}Q.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},Q.propTypes={component:o.string,customRowComponent:o.func,firstLoopComponentUid:o.string,isFromDynamicZone:o.bool,isNestedInDZComponent:o.bool};function Y({isActive:e,icon:s}){return(0,t.jsx)(_.k,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:(0,t.jsx)(L.J,{as:d.C[s]||d.C.cube,height:5,width:5})})}Y.defaultProps={isActive:!1,icon:"Cube"},Y.propTypes={isActive:o.bool,icon:o.string};const ct=(0,E.default)(f.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,c.Q1)(8)};

  svg {
    width: ${(0,c.Q1)(10)};
    height: ${(0,c.Q1)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,vt=(0,E.default)(_.k)`
  width: ${(0,c.Q1)(140)};
  height: ${(0,c.Q1)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${ct} {
      display: block;
    }

    ${x.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`;function q({component:e,dzName:s,index:i,isActive:a,isInDevelopmentMode:p,onClick:l}){const{modifiedData:g,removeComponentFromDynamicZone:j}=(0,d.u)(),{schema:{icon:M,displayName:C}}=T(g,["components",e],{schema:{}}),m=r=>{r.stopPropagation(),j(s,i)};return(0,t.jsxs)(vt,{alignItems:"center",direction:"column",className:a?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:l,role:"tab",tabIndex:a?0:-1,cursor:"pointer","aria-selected":a,"aria-controls":`dz-${s}-panel-${i}`,id:`dz-${s}-tab-${i}`,children:[(0,t.jsx)(Y,{icon:M,isActive:a}),(0,t.jsx)(f.x,{marginTop:1,maxWidth:"100%",children:(0,t.jsx)(x.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:C})}),p&&(0,t.jsx)(ct,{as:"button",onClick:m,children:(0,t.jsx)(Ct.Z,{})})]})}q.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},q.propTypes={component:o.string,dzName:o.string.isRequired,index:o.number.isRequired,isActive:o.bool,isInDevelopmentMode:o.bool,onClick:o.func};const bt=(0,E.default)(U.Z)`
  width: ${(0,c.Q1)(32)};
  height: ${(0,c.Q1)(32)};
  padding: ${(0,c.Q1)(9)};
  border-radius: ${(0,c.Q1)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Rt=(0,E.default)(f.x)`
  height: ${(0,c.Q1)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,At=(0,E.default)(_.k)`
  width: 100%;
  overflow-x: auto;
`,It=(0,E.default)(f.x)`
  padding-top: ${(0,c.Q1)(90)};
`,Bt=(0,E.default)(_.k)`
  flex-shrink: 0;
  width: ${(0,c.Q1)(140)};
  height: ${(0,c.Q1)(80)};
  justify-content: center;
  align-items: center;
`;function tt({customRowComponent:e,components:s,addComponent:i,name:a,targetUid:p}){const{isInDevelopmentMode:l}=(0,d.u)(),[g,j]=(0,W.useState)(0),{formatMessage:M}=(0,$.Z)(),C=r=>{g!==r&&j(r)},m=()=>{i(a)};return(0,t.jsx)(dt,{className:"dynamiczone-row",isFromDynamicZone:!0,children:(0,t.jsxs)("td",{colSpan:12,children:[(0,t.jsx)(Rt,{paddingLeft:8,children:(0,t.jsxs)(At,{gap:2,children:[l&&(0,t.jsx)("button",{type:"button",onClick:m,children:(0,t.jsxs)(Bt,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(bt,{}),(0,t.jsx)(x.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:M({id:(0,d.g)("button.component.add"),defaultMessage:"Add a component"})})]})}),(0,t.jsx)(_.k,{role:"tablist",gap:2,children:s.map((r,u)=>(0,t.jsx)(q,{dzName:a,index:u,component:r,isActive:g===u,isInDevelopmentMode:l,onClick:()=>C(u)},r))})]})}),(0,t.jsx)(It,{children:s.map((r,u)=>{const h={customRowComponent:e,component:r};return(0,t.jsx)(f.x,{id:`dz-${a}-panel-${u}`,role:"tabpanel",tabindex:0,"aria-labelledby":`dz-${a}-tab-${u}`,style:{display:g===u?"block":"none"},children:(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:(0,W.createElement)(Q,{...h,isFromDynamicZone:!0,targetUid:p,key:r})})})},r)})})]})})}tt.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},tt.propTypes={addComponent:o.func,components:o.instanceOf(Array),customRowComponent:o.func,name:o.string,targetUid:o.string.isRequired};const $t=(0,E.default)(f.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e,color:s})=>e.colors[`${s}600`]};
  }
`,Lt=(0,E.default)(f.x)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,pt=({children:e,icon:s,color:i,...a})=>(0,t.jsx)(Lt,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...a,children:(0,t.jsxs)(_.k,{children:[(0,t.jsx)($t,{color:i,"aria-hidden":!0,background:`${i}200`,children:s}),(0,t.jsx)(f.x,{paddingLeft:3,children:(0,t.jsx)(x.Z,{variant:"pi",fontWeight:"bold",textColor:`${i}600`,children:e})})]})});pt.propTypes={color:o.string.isRequired,children:o.string.isRequired,icon:o.node.isRequired};const Ut=(0,E.default)(f.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`;function w({addComponentToDZ:e,customRowComponent:s,editTarget:i,firstLoopComponentUid:a,isFromDynamicZone:p,isMain:l,isNestedInDZComponent:g,isSub:j,items:M,secondLoopComponentUid:C,targetUid:m}){const{formatMessage:r}=(0,$.Z)(),{trackUsage:u}=(0,c.rS)(),{isInDevelopmentMode:h,modifiedData:A,isInContentTypeView:O}=(0,d.u)(),{onOpenModalAddField:b}=(0,d.a)(),P=()=>{u("hasClickedCTBAddFieldBanner"),b({forTarget:i,targetUid:m})};return m?M.length===0&&l?(0,t.jsxs)(F.i,{colCount:2,rowCount:2,children:[(0,t.jsx)(S.h,{children:(0,t.jsxs)(N.Tr,{children:[(0,t.jsx)(B.Th,{children:(0,t.jsx)(x.Z,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(B.Th,{children:(0,t.jsx)(x.Z,{variant:"sigma",textColor:"neutral600",children:r({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(c.c4,{action:(0,t.jsx)(y.z,{onClick:P,size:"L",startIcon:(0,t.jsx)(U.Z,{}),variant:"secondary",children:r({id:(0,d.g)("table.button.no-fields"),defaultMessage:"Add new field"})}),colSpan:2,content:O?{id:(0,d.g)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,d.g)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})]}):(0,t.jsxs)(Ut,{children:[(0,t.jsx)(f.x,{paddingLeft:6,paddingRight:l?6:0,...l&&{style:{overflowX:"auto"}},children:(0,t.jsxs)("table",{children:[l&&(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(x.Z,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)("th",{colSpan:"2",children:(0,t.jsx)(x.Z,{variant:"sigma",textColor:"neutral600",children:r({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)("tbody",{children:M.map(v=>{const{type:I}=v,K=s;return(0,t.jsxs)(W.Fragment,{children:[(0,t.jsx)(K,{...v,isNestedInDZComponent:g,targetUid:m,editTarget:i,firstLoopComponentUid:a,isFromDynamicZone:p,secondLoopComponentUid:C}),I==="component"&&(0,t.jsx)(Q,{...v,customRowComponent:s,targetUid:m,isNestedInDZComponent:p,editTarget:i,firstLoopComponentUid:a}),I==="dynamiczone"&&(0,t.jsx)(tt,{...v,customRowComponent:s,addComponent:e,targetUid:m})]},v.name)})})]})}),l&&h&&(0,t.jsx)(J.c,{icon:(0,t.jsx)(U.Z,{}),onClick:P,children:r({id:(0,d.g)(`form.button.add.field.to.${A.contentType?A.contentType.schema.kind:i||"collectionType"}`),defaultMessage:"Add another field"})}),j&&h&&(0,t.jsx)(pt,{icon:(0,t.jsx)(U.Z,{}),onClick:P,color:p?"primary":"neutral",children:r({id:(0,d.g)("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):(0,t.jsxs)(F.i,{colCount:2,rowCount:2,children:[(0,t.jsx)(S.h,{children:(0,t.jsxs)(N.Tr,{children:[(0,t.jsx)(B.Th,{children:(0,t.jsx)(x.Z,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(B.Th,{children:(0,t.jsx)(x.Z,{variant:"sigma",textColor:"neutral600",children:r({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(c.c4,{colSpan:2,content:{id:(0,d.g)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}})]})}w.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},w.propTypes={addComponentToDZ:o.func,customRowComponent:o.func,editTarget:o.string.isRequired,firstLoopComponentUid:o.string,isFromDynamicZone:o.bool,isNestedInDZComponent:o.bool,isMain:o.bool,items:o.instanceOf(Array),secondLoopComponentUid:o.string,targetUid:o.string,isSub:o.bool};const Wt=(0,E.default)(f.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:s})=>e.colors[s]};
    display: block;
  }
`,Kt=E.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:s})=>e.colors[s]};
  }
`,ut=e=>(0,t.jsx)(Wt,{children:(0,t.jsx)(Kt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})});ut.propTypes={color:o.string.isRequired};const et=({content:e})=>lt(e);et.defaultProps={content:null},et.propTypes={content:o.string};const Zt=(0,E.default)(f.x)`
  position: relative;
`,nt=({type:e,customField:s,repeatable:i})=>{const{formatMessage:a}=(0,$.Z)();let p=e;return["integer","biginteger","float","decimal"].includes(e)?p="number":["string"].includes(e)&&(p="text"),s?(0,t.jsx)(x.Z,{children:a({id:(0,d.g)("attribute.customField"),defaultMessage:"Custom field"})}):(0,t.jsxs)(x.Z,{children:[a({id:(0,d.g)(`attribute.${p}`),defaultMessage:e}),"\xA0",i&&a({id:(0,d.g)("component.repeatable"),defaultMessage:"(repeatable)"})]})};nt.defaultProps={customField:null,repeatable:!1},nt.propTypes={type:o.string.isRequired,customField:o.string,repeatable:o.bool};function ot({configurable:e,customField:s,editTarget:i,firstLoopComponentUid:a,isFromDynamicZone:p,name:l,onClick:g,relation:j,repeatable:M,secondLoopComponentUid:C,target:m,targetUid:r,type:u}){const{contentTypes:h,isInDevelopmentMode:A,removeAttribute:O}=(0,d.u)(),{formatMessage:b}=(0,$.Z)(),P=u==="relation"&&j.includes("morph"),v=["integer","biginteger","float","decimal"].includes(u)?"number":u,I=T(h,[m],{}),K=T(I,["schema","displayName"],""),Z=T(I,"plugin"),it=m?"relation":v,V=()=>{P||e!==!1&&g(i,C||a||r,l,u,s)};let R;return C&&a?R=2:a?R=1:R=0,(0,t.jsxs)(Zt,{as:"tr",...(0,c.X7)({fn:V,condition:A&&e&&!P}),children:[(0,t.jsxs)("td",{style:{position:"relative"},children:[R!==0&&(0,t.jsx)(ut,{color:p?"primary200":"neutral150"}),(0,t.jsxs)(_.k,{paddingLeft:2,gap:4,children:[(0,t.jsx)(d.A,{type:it,customField:s}),(0,t.jsx)(x.Z,{fontWeight:"bold",children:l})]})]}),(0,t.jsx)("td",{children:m?(0,t.jsxs)(x.Z,{children:[b({id:(0,d.g)(`modelPage.attribute.${P?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",(0,t.jsxs)("span",{style:{fontStyle:"italic"},children:[(0,t.jsx)(et,{content:K}),"\xA0",Z&&`(${b({id:(0,d.g)("from"),defaultMessage:"from"})}: ${Z})`]})]}):(0,t.jsx)(nt,{type:u,customField:s,repeatable:M})}),(0,t.jsx)("td",{children:A?(0,t.jsx)(_.k,{justifyContent:"flex-end",...c.UW,children:e?(0,t.jsxs)(_.k,{gap:1,children:[!P&&(0,t.jsx)(z.h,{onClick:V,label:`${b({id:"app.utils.edit",defaultMessage:"Edit"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(at.Z,{})}),(0,t.jsx)(z.h,{onClick:X=>{X.stopPropagation(),O(i,l,C||a||"")},label:`${b({id:"global.delete",defaultMessage:"Delete"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(Mt.Z,{})})]}):(0,t.jsx)(Dt.Z,{})}):(0,t.jsx)(f.x,{height:(0,c.Q1)(32)})})]})}ot.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},ot.propTypes={configurable:o.bool,customField:o.string,editTarget:o.string.isRequired,firstLoopComponentUid:o.string,isFromDynamicZone:o.bool,name:o.string.isRequired,onClick:o.func,relation:o.string,repeatable:o.bool,secondLoopComponentUid:o.string,target:o.string,targetUid:o.string,type:o.string};const kt=(0,W.memo)(ot),Ft=e=>{let s;switch(e){case"date":case"datetime":case"time":case"timestamp":s="date";break;case"integer":case"biginteger":case"decimal":case"float":s="number";break;case"string":case"text":s="text";break;case"":s="relation";break;default:s=e}return s},St={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},st=({disabled:e,isTemporary:s,isInContentTypeView:i,contentTypeKind:a,targetUid:p})=>{const{formatMessage:l}=(0,$.Z)(),{push:g}=(0,G.k6)(),{collectionTypesConfigurations:j,componentsConfigurations:M,singleTypesConfigurations:C}=St,m=l({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let r=j;const u=()=>(s||g(i?`/content-manager/collectionType/${p}/configurations/edit`:`/content-manager/components/${p}/configurations/edit`),!1);return i&&a==="singleType"&&(r=C),i||(r=M),(0,t.jsx)(c.jW,{permissions:r,children:(0,t.jsx)(y.z,{startIcon:(0,t.jsx)(Tt.Z,{}),variant:"tertiary",onClick:u,disabled:s||e,children:m})})};st.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},st.propTypes={disabled:o.bool.isRequired,contentTypeKind:o.string,isInContentTypeView:o.bool,isTemporary:o.bool,targetUid:o.string};const Nt=(0,W.memo)(st),zt=()=>{const{initialData:e,modifiedData:s,isInDevelopmentMode:i,isInContentTypeView:a,submitData:p}=(0,d.u)(),{formatMessage:l}=(0,$.Z)(),{trackUsage:g}=(0,c.rS)(),j=(0,G.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:M,onOpenModalAddField:C,onOpenModalEditField:m,onOpenModalEditSchema:r,onOpenModalEditCustomField:u}=(0,d.a)(),h=a?"contentType":"component",A=[h,"schema","attributes"],O=T(s,[h,"uid"]),b=T(s,[h,"isTemporary"],!1),P=T(s,[h,"schema","kind"],null),v=T(s,A,[]),I=Ot(e,[h,"plugin"]),K=!rt(s,e),Z=a?"contentType":"component",it=D=>{M({dynamicZoneTarget:D,targetUid:O})},V=async(D,gt,mt,ht,_t)=>{const ft=Ft(ht);_t?u({forTarget:D,targetUid:gt,attributeName:mt,attributeType:ft,customFieldUid:_t}):m({forTarget:D,targetUid:gt,attributeName:mt,attributeType:ft,step:ht==="component"?"2":null})};let R=T(s,[h,"schema","displayName"],"");const X=T(s,[h,"schema","kind"],""),H=j?.params.currentUID==="create-content-type";!R&&H&&(R=l({id:(0,d.g)("button.model.create"),defaultMessage:"Create new collection type"}));const Qt=()=>{const D=X||h;D==="collectionType"&&g("willEditNameOfContentType"),D==="singleType"&&g("willEditNameOfSingleType"),r({modalType:h,forTarget:h,targetUid:O,kind:D})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G.NL,{message:D=>D.hash==="#back"?!1:l({id:(0,d.g)("prompt.unsaved")}),when:K}),(0,t.jsx)(Et.T,{id:"title",primaryAction:i&&(0,t.jsxs)(_.k,{gap:2,children:[!H&&(0,t.jsx)(y.z,{startIcon:(0,t.jsx)(U.Z,{}),variant:"secondary",onClick:()=>{C({forTarget:Z,targetUid:O})},children:l({id:(0,d.g)("button.attributes.add.another"),defaultMessage:"Add another field"})}),(0,t.jsx)(y.z,{startIcon:(0,t.jsx)(jt.Z,{}),onClick:()=>p(),type:"submit",disabled:rt(s,e),children:l({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:i&&!I&&!H&&(0,t.jsx)(y.z,{startIcon:(0,t.jsx)(at.Z,{}),variant:"tertiary",onClick:Qt,children:l({id:"app.utils.edit",defaultMessage:"Edit"})}),title:lt(R),subtitle:l({id:(0,d.g)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:(0,t.jsx)(c.rU,{startIcon:(0,t.jsx)(Pt.Z,{}),to:"/plugins/content-type-builder/",children:l({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(yt.D,{children:(0,t.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(_.k,{justifyContent:"flex-end",children:(0,t.jsx)(_.k,{gap:2,children:(0,t.jsx)(Nt,{targetUid:O,isTemporary:b,isInContentTypeView:a,contentTypeKind:P,disabled:H},"link-to-cm-settings-view")})}),(0,t.jsx)(f.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(w,{items:v,customRowComponent:D=>(0,t.jsx)(kt,{...D,onClick:V}),addComponentToDZ:it,targetUid:O,editTarget:Z,isMain:!0})})]})})]})}}}]);
