(self.webpackChunkapi_mysql=self.webpackChunkapi_mysql||[]).push([[9452],{29520:i=>{function u(n,r,s,t){for(var e=-1,o=n==null?0:n.length;++e<o;){var d=n[e];r(t,d,s(d),n)}return t}i.exports=u},67083:(i,u,n)=>{var r=n(62878);function s(t,e){var o=t==null?0:t.length;return!!o&&r(t,e,0)>-1}i.exports=s},65286:i=>{function u(n,r,s){for(var t=-1,e=n==null?0:n.length;++t<e;)if(s(r,n[t]))return!0;return!1}i.exports=u},83377:(i,u,n)=>{var r=n(54483),s=r("length");i.exports=s},98694:(i,u,n)=>{var r=n(1107);function s(t,e,o,d){return r(t,function(a,l,c){e(d,a,o(a),c)}),d}i.exports=s},1107:(i,u,n)=>{var r=n(84856),s=n(52593),t=s(r);i.exports=t},32652:i=>{function u(n,r,s,t){for(var e=n.length,o=s+(t?1:-1);t?o--:++o<e;)if(r(n[o],o,n))return o;return-1}i.exports=u},62878:(i,u,n)=>{var r=n(32652),s=n(2784),t=n(51425);function e(o,d,a){return d===d?t(o,d,a):r(o,s,a)}i.exports=e},2784:i=>{function u(n){return n!==n}i.exports=u},92403:(i,u,n)=>{var r=n(1107),s=n(47727);function t(e,o){var d=-1,a=s(e)?Array(e.length):[];return r(e,function(l,c,f){a[++d]=o(l,c,f)}),a}i.exports=t},16429:(i,u,n)=>{var r=n(36393),s=n(82393),t=n(90040),e=n(92403),o=n(63135),d=n(20435),a=n(9998),l=n(51339),c=n(26126);function f(v,x,g){x.length?x=r(x,function(h){return c(h)?function(p){return s(p,h.length===1?h[0]:h)}:h}):x=[l];var O=-1;x=r(x,d(t));var E=e(v,function(h,p,j){var m=r(x,function(M){return M(h)});return{criteria:m,index:++O,value:h}});return o(E,function(h,p){return a(h,p,g)})}i.exports=f},63135:i=>{function u(n,r){var s=n.length;for(n.sort(r);s--;)n[s]=n[s].value;return n}i.exports=u},21157:(i,u,n)=>{var r=n(44936),s=n(67083),t=n(65286),e=n(42435),o=n(83661),d=n(1695),a=200;function l(c,f,v){var x=-1,g=s,O=c.length,E=!0,h=[],p=h;if(v)E=!1,g=t;else if(O>=a){var j=f?null:o(c);if(j)return d(j);E=!1,g=e,p=new r}else p=f?[]:h;n:for(;++x<O;){var m=c[x],M=f?f(m):m;if(m=v||m!==0?m:0,E&&M===M){for(var C=p.length;C--;)if(p[C]===M)continue n;f&&p.push(M),h.push(m)}else g(p,M,v)||(p!==h&&p.push(M),h.push(m))}return h}i.exports=l},17654:(i,u,n)=>{var r=n(85194);function s(t,e){if(t!==e){var o=t!==void 0,d=t===null,a=t===t,l=r(t),c=e!==void 0,f=e===null,v=e===e,x=r(e);if(!f&&!x&&!l&&t>e||l&&c&&v&&!f&&!x||d&&c&&v||!o&&v||!a)return 1;if(!d&&!l&&!x&&t<e||x&&o&&a&&!d&&!l||f&&o&&a||!c&&a||!v)return-1}return 0}i.exports=s},9998:(i,u,n)=>{var r=n(17654);function s(t,e,o){for(var d=-1,a=t.criteria,l=e.criteria,c=a.length,f=o.length;++d<c;){var v=r(a[d],l[d]);if(v){if(d>=f)return v;var x=o[d];return v*(x=="desc"?-1:1)}}return t.index-e.index}i.exports=s},37177:(i,u,n)=>{var r=n(29520),s=n(98694),t=n(90040),e=n(26126);function o(d,a){return function(l,c){var f=e(l)?r:s,v=a?a():{};return f(l,d,t(c,2),v)}}i.exports=o},52593:(i,u,n)=>{var r=n(47727);function s(t,e){return function(o,d){if(o==null)return o;if(!r(o))return t(o,d);for(var a=o.length,l=e?a:-1,c=Object(o);(e?l--:++l<a)&&d(c[l],l,c)!==!1;);return o}}i.exports=s},83661:(i,u,n)=>{var r=n(31497),s=n(18920),t=n(1695),e=1/0,o=r&&1/t(new r([,-0]))[1]==e?function(d){return new r(d)}:s;i.exports=o},51425:i=>{function u(n,r,s){for(var t=s-1,e=n.length;++t<e;)if(n[t]===r)return t;return-1}i.exports=u},30930:(i,u,n)=>{var r=n(83377),s=n(11993),t=n(61781);function e(o){return s(o)?t(o):r(o)}i.exports=e},61781:i=>{var u="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",t=n+r+s,e="\\ufe0e\\ufe0f",o="["+u+"]",d="["+t+"]",a="\\ud83c[\\udffb-\\udfff]",l="(?:"+d+"|"+a+")",c="[^"+u+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",x="\\u200d",g=l+"?",O="["+e+"]?",E="(?:"+x+"(?:"+[c,f,v].join("|")+")"+O+g+")*",h=O+g+E,p="(?:"+[c+d+"?",d,f,v,o].join("|")+")",j=RegExp(a+"(?="+a+")|"+p+h,"g");function m(M){for(var C=j.lastIndex=0;j.test(M);)++C;return C}i.exports=m},63799:(i,u,n)=>{var r=n(71041),s=n(37177),t=Object.prototype,e=t.hasOwnProperty,o=s(function(d,a,l){e.call(d,l)?d[l].push(a):r(d,l,[a])});i.exports=o},63514:(i,u,n)=>{var r=n(13578),s=n(26126),t=n(27138),e="[object String]";function o(d){return typeof d=="string"||!s(d)&&t(d)&&r(d)==e}i.exports=o},18920:i=>{function u(){}i.exports=u},84921:(i,u,n)=>{var r=n(52695),s=n(4500),t=n(47727),e=n(63514),o=n(30930),d="[object Map]",a="[object Set]";function l(c){if(c==null)return 0;if(t(c))return e(c)?o(c):c.length;var f=s(c);return f==d||f==a?c.size:r(c).length}i.exports=l},51006:(i,u,n)=>{var r=n(93367),s=n(16429),t=n(52431),e=n(65145),o=t(function(d,a){if(d==null)return[];var l=a.length;return l>1&&e(d,a[0],a[1])?a=[]:l>2&&e(a[0],a[1],a[2])&&(a=[a[0]]),s(d,r(a,1),[])});i.exports=o},79146:(i,u,n)=>{var r=n(16946);function s(t){return r(t).toLowerCase()}i.exports=s},81465:(i,u,n)=>{var r=n(21157);function s(t){return t&&t.length?r(t):[]}i.exports=s},61121:(i,u,n)=>{"use strict";n.d(u,{O:()=>s});var r=n(8295);const s=r.Wx},27997:(i,u,n)=>{"use strict";n.d(u,{A:()=>d});var r=n(74081),s=n(7484),t=n(93415);const e=(0,s.default)(t.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,o=(0,s.default)(t.x)`
  overflow-x: hidden;
`,d=({sideNav:a,children:l})=>(0,r.jsxs)(e,{hasSideNav:Boolean(a),children:[a,(0,r.jsx)(o,{paddingBottom:10,children:l})]})},68412:(i,u,n)=>{"use strict";n.d(u,{r:()=>v});var r=n(74081),s=n(27279),t=n(48157),e=n(47533),o=n(7484),d=n(61657),a=n(32370),l=n(93415);const c=o.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:x})=>x?"none":void 0};
  color: ${({disabled:x,theme:g})=>x?g.colors.neutral600:g.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${a.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:x})=>x.colors.primary500};
  }

  &:active {
    color: ${({theme:x})=>x.colors.primary700};
  }

  ${d.BF};
`,f=(0,o.default)(l.x)`
  display: flex;
`,v=s.forwardRef(({children:x,href:g,to:O,disabled:E=!1,startIcon:h,endIcon:p,...j},m)=>{const M=g?"_blank":void 0,C=g?"noreferrer noopener":void 0;return(0,r.jsxs)(c,{as:O&&!E?e.OL:"a",target:M,rel:C,to:E?void 0:O,href:E?"#":g,disabled:E,ref:m,...j,children:[h&&(0,r.jsx)(f,{as:"span","aria-hidden":!0,paddingRight:2,children:h}),(0,r.jsx)(a.Z,{children:x}),p&&!g&&(0,r.jsx)(f,{as:"span","aria-hidden":!0,paddingLeft:2,children:p}),g&&(0,r.jsx)(f,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,r.jsx)(t.Z,{})})]})})},71877:(i,u,n)=>{"use strict";n.d(u,{m:()=>d});var r=n(74081),s=n(7484),t=n(23298);const e=`${232/16}rem`,o=(0,s.default)(t.r)`
  width: ${e};
  background: ${({theme:a})=>a.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:a})=>a.colors.neutral200};
  z-index: 1;
`,d=({ariaLabel:a,...l})=>(0,r.jsx)(o,{"aria-label":a,as:"nav",...l})},17912:(i,u,n)=>{"use strict";n.d(u,{p:()=>h});var r=n(74081),s=n(27279),t=n(10382),e=n(7484),o=n(89166),d=n(74513);const a=p=>{const j=(0,s.useRef)();return(0,s.useEffect)(()=>{j.current=p}),j.current};var l=n(84366),c=n(93415),f=n(28479),v=n(31624),x=n(10701),g=n(32370),O=n(4987);const E=(0,e.default)(l.i)`
  width: ${24/16}rem;
  background-color: ${({theme:p})=>p.colors.neutral200};
`,h=({as:p="h2",label:j,searchLabel:m="",searchable:M=!1,onChange:C=()=>{},value:A="",onClear:L=()=>{},onSubmit:P=()=>{},id:T})=>{const[D,R]=(0,s.useState)(!1),W=a(D),I=(0,d.M)(T),y=(0,s.useRef)(void 0),S=(0,s.useRef)(void 0);(0,s.useEffect)(()=>{D&&y.current&&y.current.focus(),W&&!D&&S.current&&S.current.focus()},[D,W]);const U=()=>{R(B=>!B)},K=B=>{L(B),y.current.focus()},$=B=>{B.relatedTarget?.id!==I&&R(!1)},b=B=>{B.key===o.y.ESCAPE&&R(!1)};return D?(0,r.jsxs)(c.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,r.jsx)(f.U,{children:(0,r.jsx)(v.w,{name:"searchbar",value:A,onChange:C,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:b,ref:y,onBlur:$,onClear:K,onSubmit:P,clearLabel:"Clear",size:"S",children:m})}),(0,r.jsx)(c.x,{paddingLeft:2,paddingTop:4,children:(0,r.jsx)(E,{})})]}):(0,r.jsxs)(c.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,r.jsxs)(x.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,r.jsx)(g.Z,{variant:"beta",as:p,children:j}),M&&(0,r.jsx)(O.h,{ref:S,onClick:U,label:m,icon:(0,r.jsx)(t.Z,{})})]}),(0,r.jsx)(c.x,{paddingTop:4,children:(0,r.jsx)(E,{})})]})}},49370:(i,u,n)=>{"use strict";n.d(u,{E:()=>x});var r=n(74081),s=n(27279),t=n(79830),e=n(7484),o=n(93415),d=n(32370),a=n(10701),l=n(30413);const c=(0,e.default)(o.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:g})=>g.colors.neutral800};
  svg > * {
    fill: ${({theme:g})=>g.colors.neutral600};
  }

  &.active {
    ${({theme:g})=>`
      background-color: ${g.colors.primary100};
      border-right: 2px solid ${g.colors.primary600};
      svg > * {
        fill: ${g.colors.primary700};
      }
      ${d.Z} {
        color: ${g.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,f=(0,e.default)(t.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:g,$active:O})=>O?g.colors.primary600:g.colors.neutral600};
  }
`,v=e.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,x=s.forwardRef(({children:g,icon:O=null,withBullet:E=!1,as:h=l.f,isSubSectionChild:p=!1,...j},m)=>(0,r.jsxs)(c,{as:h,icon:O,background:"neutral100",paddingLeft:p?9:7,paddingBottom:2,paddingTop:2,ref:m,...j,children:[(0,r.jsxs)(a.k,{children:[O?(0,r.jsx)(v,{children:O}):(0,r.jsx)(f,{}),(0,r.jsx)(o.x,{paddingLeft:2,children:(0,r.jsx)(d.Z,{as:"span",children:g})})]}),E&&(0,r.jsx)(o.x,{as:a.k,paddingRight:4,children:(0,r.jsx)(f,{$active:!0})})]}))},20534:(i,u,n)=>{"use strict";n.d(u,{D:()=>O});var r=n(74081),s=n(27279),t=n(7484),e=n(10411),o=n(10701),d=n(93415),a=n(32370);const l=(0,t.default)(o.k)`
  border: none;
  padding: 0;
  background: transparent;
`,c=t.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:E})=>E?"0deg":"180deg"});
`,f=({collapsable:E=!1,label:h,onClick:p=()=>{},ariaExpanded:j,ariaControls:m})=>E?(0,r.jsxs)(l,{as:"button",onClick:p,"aria-expanded":j,"aria-controls":m,textAlign:"left",children:[(0,r.jsx)(d.x,{paddingRight:1,children:(0,r.jsx)(a.Z,{variant:"sigma",textColor:"neutral600",children:h})}),E&&(0,r.jsx)(c,{rotated:j,children:(0,r.jsx)(e.Z,{"aria-hidden":!0})})]}):(0,r.jsx)(l,{children:(0,r.jsx)(d.x,{paddingRight:1,children:(0,r.jsx)(a.Z,{variant:"sigma",textColor:"neutral600",children:h})})});var v=n(74513),x=n(4963);const g=(0,t.default)(d.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:E})=>E.colors.neutral500};
    }
  }
`,O=({collapsable:E=!1,label:h,badgeLabel:p,children:j,id:m})=>{const[M,C]=(0,s.useState)(!0),A=(0,v.M)(m),L=()=>{C(P=>!P)};return(0,r.jsxs)(o.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,r.jsx)(g,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,r.jsxs)(d.x,{position:"relative",paddingRight:p?6:0,children:[(0,r.jsx)(f,{onClick:L,ariaExpanded:M,ariaControls:A,collapsable:E,label:h}),p&&(0,r.jsx)(x.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:p})]})}),(!E||M)&&(0,r.jsx)("ol",{id:A,children:s.Children.map(j,(P,T)=>(0,r.jsx)("li",{children:P},T))})]})}},96220:(i,u,n)=>{"use strict";n.d(u,{Z:()=>o});var r=n(74081),s=n(27279),t=n(93415),e=n(10701);const o=({children:d,spacing:a=2,horizontal:l=!1,...c})=>(0,r.jsx)(t.x,{paddingTop:2,paddingBottom:4,children:(0,r.jsx)(e.k,{as:"ol",gap:a,direction:l?"row":"column",alignItems:l?"center":"stretch",...c,children:s.Children.map(d,(f,v)=>(0,r.jsx)("li",{children:f},v))})})}}]);
