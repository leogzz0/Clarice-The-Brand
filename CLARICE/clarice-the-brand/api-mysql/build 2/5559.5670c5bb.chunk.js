"use strict";(self.webpackChunkapi_mysql=self.webpackChunkapi_mysql||[]).push([[5559],{85559:(h,N,i)=>{i.r(N),i.d(N,{HomePage:()=>CI,HomePageCE:()=>w});var I=i(74081),j=i(27279),t=i(93415),g=i(10701),s=i(32370),m=i(48102),c=i(27997),Z=i(9941),T=i(23298),d=i(74577),D=i(37370),x=i(79213),a=i(94050),P=i(53274),e=i(87050),k=i(23227),B=i(75682),v=i(96700),Y=i(48157),U=i(73352),R=i(82063),V=i(70525),_=i(1072),f=i(73354),Q=i(66770),H=i(364),z=i(61020),J=i(47533),X=i(51447),l=i(7484),u=i(44328),F=i(59491),K=i(47599),mI=i(40464),uI=i(64797),ZI=i(85811),rI=i(43433),LI=i(98934),TI=i(8175),yI=i(59461),EI=i(15816),SI=i(97442),xI=i(13576),PI=i(87830),pI=i(47184),zI=i(71563),hI=i(49204),OI=i(47853),WI=i(75719),GI=i(74919),bI=i(29206);const $=()=>{const{guidedTourState:M,setSkipped:n}=(0,a.c1)(),{formatMessage:C}=(0,z.Z)(),{trackUsage:y}=(0,a.rS)(),r=Object.entries(u.L).map(([o,A])=>({key:o,title:A.home.title,content:(0,I.jsx)(D.Q,{onClick:()=>y(A.home.trackingEvent),as:J.OL,to:A.home.cta.target,endIcon:(0,I.jsx)(P.Z,{}),children:C(A.home.cta.title)}),isDone:Object.entries(M[o]).every(([,L])=>L)})),E=r.findIndex(o=>!o.isDone),W=()=>{n(!0),y("didSkipGuidedtour")};return(0,I.jsxs)(t.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0",children:[(0,I.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,I.jsx)(s.Z,{variant:"beta",as:"h2",children:C({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})}),(0,I.jsx)(t.x,{children:r.map((o,A)=>{const L=q(E,A);return(0,I.jsxs)(t.x,{children:[(0,I.jsxs)(g.k,{children:[(0,I.jsx)(t.x,{minWidth:(0,a.Q1)(30),marginRight:5,children:(0,I.jsx)(u.N,{state:L,children:A+1})}),(0,I.jsx)(s.Z,{variant:"delta",as:"h3",children:C(o.title)})]}),(0,I.jsxs)(g.k,{alignItems:"flex-start",children:[(0,I.jsx)(g.k,{justifyContent:"center",minWidth:(0,a.Q1)(30),marginBottom:3,marginTop:3,marginRight:5,children:A===r.length-1?null:(0,I.jsx)(u.V,{state:L})}),(0,I.jsx)(t.x,{marginTop:2,children:L===u.S.IS_ACTIVE?o.content:null})]})]},o.key)})})]}),(0,I.jsx)(g.k,{justifyContent:"flex-end",children:(0,I.jsx)(m.z,{variant:"tertiary",onClick:W,children:C({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})})})]})},q=(M,n)=>M===-1||n<M?u.S.IS_DONE:n>M?u.S.IS_NOT_DONE:u.S.IS_ACTIVE,II="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIG9wYWNpdHk9Ii44IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggb3BhY2l0eT0iLjE1IiBkPSJNMTEwLjgxIDM3SDczLjk3Vjc0LjFoMzYuODRWMzdaIiBmaWxsPSJ1cmwoI2EpIi8+CiAgICAgICAgPHBhdGggb3BhY2l0eT0iLjA3IiBkPSJNMzYuODQgMEgwdjM3LjA4aDM2Ljg0VjBaIiBmaWxsPSJ1cmwoI2IpIi8+CiAgICAgICAgPHBhdGggb3BhY2l0eT0iLjA3IiBkPSJNNzMuOTIgNzMuOTVIMzcuMDh2MzcuMDhoMzYuODRWNzMuOTVaIiBmaWxsPSJ1cmwoI2MpIi8+CiAgICAgICAgPHBhdGggb3BhY2l0eT0iLjA3IiBkPSJNMTQ3Ljk5IDExMC45MmgtMzcuM1YxNDhIMTQ4di0zNy4wOFoiIGZpbGw9InVybCgjZCkiLz4KICAgICAgICA8cGF0aCBvcGFjaXR5PSIuMTUiIGQ9Ik03My44MyAzN0gzNi44NEw3My44MyAwdjM3WiIgZmlsbD0idXJsKCNlKSIvPgogICAgICAgIDxwYXRoIG9wYWNpdHk9Ii4xNSIgZD0iTTExMC42IDExMS4wMnYtMzdoMzYuOThsLTM2Ljk5IDM3WiIgZmlsbD0idXJsKCNmKSIvPgogICAgICAgIDxwYXRoIG9wYWNpdHk9Ii40IiBkPSJNNzMuODMgMHYzN2gzNi45OHYzNy4wMWgzN1YzYTMgMyAwIDAgMC0zLTNINzMuODJaIiBmaWxsPSJ1cmwoI2cpIi8+CiAgICA8L2c+CiAgICAKICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjkxLjMxIiB5MT0iODMuMzEiIHgyPSIxMTguMjQiIHkyPSI1Ni41OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjN0E5MkZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMyNTNFQSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgCiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNDAuOTkiIHkxPSIxMy44OCIgeDI9Ii4wMSIgeTI9IjExLjY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBOEI4RkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzI1M0VBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICAKICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSI1NC40MSIgeTE9IjEyMC4yNSIgeDI9IjgxLjM1IiB5Mj0iOTMuNTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E4QjhGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMjUzRUEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIAogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjEyOC4yNCIgeTE9IjE1Ny4yMiIgeDI9IjE1NS4xNyIgeTI9IjEzMC4xNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQThCOEZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMyNTNFQSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgCiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iNTQuMjQiIHkxPSI0Ni4yMSIgeDI9IjgxLjEyIiB5Mj0iMTkuMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzdBOTJGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMjUzRUEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIAogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZiIgeDE9IjEyNi4yOCIgeTE9Ijc0LjA1IiB4Mj0iMTI0Ljk0IiB5Mj0iMTExLjA3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3QTkyRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzI1M0VBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICAKICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSI3My4zNyIgeTE9IjM2Ljg3IiB4Mj0iMTMyLjg3IiB5Mj0iNjYuNzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzdBOTJGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzODU4RUEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K",iI="data:image/png;base64,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",MI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjI5LjQxIDQ0IDE0OS4wOSA1MC4zNSI+PHBhdGggc3Ryb2tlPSIjRUFFQUVGIiBkPSJNMzAuNSA0NC41YzM3IDI3IDQ3LjUgMzggMTQ3LjQ5OSAzMiIvPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZmlsbD0iI0YyOUQ0MSIgZD0ibTEyOS40NjcgOTQuMDg1IDguMTQ4LTE0LjE0MmEuNTk4LjU5OCAwIDAgMC0uNDAzLS44ODcgNzUuMDk5IDc1LjA5OSAwIDAgMC0zLjA0NS0uNTM2Yy0xLjg3NS0uMjc0LTIuOTM2LS40NC00LjgzNy0uNTA1LTEuODM4LS4wNjQtMi44NzMuMDEtNC42OTguMTUzYTY0LjA1IDY0LjA1IDAgMCAwLTIuNjkyLjI5My41OTcuNTk3IDAgMCAwLS40NjIuODUxbDcuMDQyIDE0LjczN2MuMTg2LjM4OC43MzIuNDEuOTQ3LjAzNloiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2IpIj48cGF0aCBmaWxsPSIjRjI5RDQxIiBkPSJtNDYuOTkgNzUuNTIgMTMuODEzLTguNjk3YS41OTcuNTk3IDAgMCAwIC4wNTgtLjk3MSA3NS4xOTEgNzUuMTkxIDAgMCAwLTIuNDQyLTEuODk3Yy0xLjUzLTEuMTE5LTIuMzktMS43NjEtNC4wNC0yLjcwNy0xLjU5NS0uOTE1LTIuNTQ1LTEuMzM0LTQuMjI2LTIuMDZhNjQuMDkgNjQuMDkgMCAwIDAtMi41MTYtLjk5OS41OTcuNTk3IDAgMCAwLS44MDYuNTM3bC0uNjYgMTYuMzE5YS41MzUuNTM1IDAgMCAwIC44Mi40NzRaIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNjKSI+PHBhdGggZmlsbD0iIzVDQjE3NiIgZD0ibTI5LjQxIDYzLjUxIDIuMTAyLTE2LjE4NmEuNTk3LjU5NyAwIDAgMSAuODU4LS40NmMuNzQ4LjM3MSAxLjkwNS45NTQgMi43NDUgMS40MiAxLjY1Ny45MiAyLjYwMiAxLjQzMyA0LjE1MiAyLjUzNCAxLjUgMS4wNjQgMi4yNzggMS43NSAzLjY0MiAyLjk3MmE2NC4wMjYgNjQuMDI2IDAgMCAxIDEuOTYyIDEuODY1Yy4yOTEuMjg2LjIxNC43NzEtLjE0OS45NTdsLTE0LjUzOCA3LjQ0M2EuNTM1LjUzNSAwIDAgMS0uNzc0LS41NDVaIi8+PC9nPjxtYXNrIGlkPSJkIiB3aWR0aD0iMTciIGhlaWdodD0iMTkiIHg9IjI5IiB5PSI0NiIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSI+PHBhdGggZmlsbD0iIzVDQjE3NiIgZD0ibTI5LjQxMiA2My41MSAyLjEwMS0xNi4xODZhLjU5Ny41OTcgMCAwIDEgLjg1OC0uNDZjLjc0OS4zNzEgMS45MDUuOTU0IDIuNzQ2IDEuNDIgMS42NTcuOTIgMi42MDEgMS40MzMgNC4xNTIgMi41MzQgMS41IDEuMDY0IDIuMjc4IDEuNzUgMy42NDIgMi45NzJhNjQuMTQ4IDY0LjE0OCAwIDAgMSAxLjk2MiAxLjg2NWMuMjkuMjg2LjIxNC43NzEtLjE1Ljk1N2wtMTQuNTM3IDcuNDQzYS41MzUuNTM1IDAgMCAxLS43NzQtLjU0NVoiLz48L21hc2s+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iLjY2MSIgbWFzaz0idXJsKCNkKSI+PHBhdGggZD0iTTM5Ljc1NSA1MS4yMThjLTEuMDUgMS41NTgtNC42MDYgNC43ODgtMTAuNDQgNS4yNDdNMzYuNDE1IDQ3LjgxNmMtMS4wNSAxLjU1OC00LjYwNiA0Ljc4OS0xMC40NCA1LjI0N000Mi45NyA1My45N2MtMS40NTcgMS45MDgtNi4zNDEgNS45MDItMTQuMjE2IDYuNjE5TTQyLjE1IDU4LjQ5OWMtMS42NDUgMS43NDgtNS4yOSA0LjAzMy0xMy4xOTcgMy45MzkiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2UpIj48cGF0aCBmaWxsPSIjN0I3OUZGIiBkPSJtMTY5LjgxMyA5Mi45ODMgNS45MjctMTUuMjA4YS41OTguNTk4IDAgMCAwLS41MzEtLjgxNSA3NS4yMTMgNzUuMjEzIDAgMCAwLTMuMDkxLS4wNzJjLTEuODk1LjAxLTIuOTY5LjAwNy00Ljg1OS4yMjgtMS44MjYuMjE0LTIuODM4LjQ0Mi00LjYyMS44NTktLjgxNS4xOS0xLjg5My40ODgtMi42MTcuNjk0YS41OTYuNTk2IDAgMCAwLS4zMjguOTFsOS4xNzggMTMuNTFhLjUzNi41MzYgMCAwIDAgLjk0Mi0uMTA2WiIvPjwvZz48ZyBmaWx0ZXI9InVybCgjZikiPjxwYXRoIGZpbGw9IiM3Qjc5RkYiIGQ9Im04Ny4wMDEgOTAuODUzLTQuNDY2LTE1LjY5OWEuNTk3LjU5NyAwIDAgMSAuNjA2LS43NjFjLjgzNS4wNDUgMi4xMjcuMTIzIDMuMDg0LjIyIDEuODg2LjE5IDIuOTU2LjI4NyA0LjgxNi42ODUgMS43OTcuMzg1IDIuNzg0LjcwOSA0LjUxOSAxLjI5MS43OTQuMjY3IDEuODM5LjY2NSAyLjU0LjkzOC4zOC4xNDguNTAxLjYyNC4yNC45MzhMODcuOTI5IDkxLjA0OGEuNTM1LjUzNSAwIDAgMS0uOTI3LS4xOTVaIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNnKSI+PHBhdGggZmlsbD0iI0VFNUU1MiIgZD0ibTY2LjE1MyA4NS4xMjIgMTIuMzU1LTEwLjY2NWEuNTk3LjU5NyAwIDAgMC0uMDg3LS45NyA3NS4zNTMgNzUuMzUzIDAgMCAwLTIuNjk4LTEuNTFjLTEuNjgtLjg3Ny0yLjYyNy0xLjM4My00LjQtMi4wNzItMS43MTQtLjY2Ni0yLjcxNi0uOTM4LTQuNDg2LTEuNDA0YTY0LjA4MyA2NC4wODMgMCAwIDAtMi42MzgtLjYxMS41OTcuNTk3IDAgMCAwLS43MTYuNjUxbDEuNzg4IDE2LjIzNGEuNTM1LjUzNSAwIDAgMCAuODgyLjM0N1oiLz48L2c+PGNpcmNsZSBjeD0iNzAuNzkzIiBjeT0iNzQuNTExIiByPSIuOTkyIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InJvdGF0ZSg4LjU1MyA3MC43OTMgNzQuNTEpIi8+PGNpcmNsZSBjeD0iNjUuNTc0IiBjeT0iNzguNjMiIHI9Ii45OTIiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0icm90YXRlKDguNTUzIDY1LjU3NCA3OC42MykiLz48Y2lyY2xlIGN4PSI2NS40MDgiIGN5PSI3NC41MTkiIHI9Ii45OTIiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0icm90YXRlKDguNTUzIDY1LjQwOCA3NC41MTkpIi8+PGNpcmNsZSBjeD0iNjcuODM0IiBjeT0iODEuOTQzIiByPSIuOTkyIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InJvdGF0ZSg4LjU1MyA2Ny44MzQgODEuOTQzKSIvPjxjaXJjbGUgY3g9IjY3LjI1OSIgY3k9IjY5Ljg3NSIgcj0iLjk5MiIgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJyb3RhdGUoOC41NTMgNjcuMjU5IDY5Ljg3NSkiLz48Y2lyY2xlIGN4PSI3NC42OTEiIGN5PSI3Mi44MzQiIHI9Ii45OTIiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0icm90YXRlKDguNTUzIDc0LjY5IDcyLjgzNCkiLz48Y2lyY2xlIGN4PSI3MS4xNzEiIGN5PSI3OC45NjgiIHI9Ii45OTIiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0icm90YXRlKDguNTUzIDcxLjE3MSA3OC45NjgpIi8+PGcgZmlsdGVyPSJ1cmwoI2gpIj48cGF0aCBmaWxsPSIjRUU1RTUyIiBkPSJtMTQ5LjkxMSA5My44MjQgNi41MjEtMTQuOTYzYS41OTguNTk4IDAgMCAwLS40OTktLjgzNiA3NS4yNTUgNzUuMjU1IDAgMCAwLTMuMDg2LS4xOTNjLTEuODk0LS4wNjQtMi45NjctLjExLTQuODYzLjAzNy0xLjgzMy4xNDEtMi44NTQuMzMtNC42NTEuNjc2LS44MjMuMTU4LTEuOTEyLjQxNC0yLjY0My41OWEuNTk2LjU5NiAwIDAgMC0uMzY0Ljg5OGw4LjY0IDEzLjg2YS41MzUuNTM1IDAgMCAwIC45NDUtLjA3WiIvPjwvZz48Y2lyY2xlIGN4PSIxNDkuNSIgY3k9IjgyLjI1IiByPSIuOTkyIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTcuMDk4IDE0OS41IDgyLjI1KSIvPjxjaXJjbGUgY3g9IjE0Ni41NzkiIGN5PSI4OC4yMjIiIHI9Ii45OTIiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0icm90YXRlKC0xNy4wOTggMTQ2LjU3OSA4OC4yMjIpIi8+PGNpcmNsZSBjeD0iMTQ0LjY1IiBjeT0iODQuNTg4IiByPSIuOTkyIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTcuMDk4IDE0NC42NSA4NC41ODgpIi8+PGNpcmNsZSBjeD0iMTUwLjA0OSIgY3k9IjkwLjIzMSIgcj0iLjk5MiIgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJyb3RhdGUoLTE3LjA5OCAxNTAuMDQ5IDkwLjIzMSkiLz48Y2lyY2xlIGN4PSIxNDQuMzA2IiBjeT0iNzkuNiIgcj0iLjk5MiIgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJyb3RhdGUoLTE3LjA5OCAxNDQuMzA2IDc5LjYpIi8+PGNpcmNsZSBjeD0iMTUyLjI4NyIgY3k9Ijc5LjA1MSIgcj0iLjk5MiIgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJyb3RhdGUoLTE3LjA5OCAxNTIuMjg3IDc5LjA1KSIvPjxjaXJjbGUgY3g9IjE1MS43NyIgY3k9Ijg2LjEwMyIgcj0iLjk5MiIgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJyb3RhdGUoLTE3LjA5OCAxNTEuNzcgODYuMTAzKSIvPjxnIGZpbHRlcj0idXJsKCNpKSI+PHBhdGggZmlsbD0iIzVDQjE3NiIgZD0ibTEwOS4xNzEgOTMuNCA4Ljg2LTEzLjcwN2EuNTk4LjU5OCAwIDAgMC0uMzU3LS45MDZjLS44MTEtLjItMi4wNy0uNTAzLTMuMDEzLS42OS0xLjg1OS0uMzctMi45MTEtLjU5LTQuODA2LS43NTMtMS44MzEtLjE1Ny0yLjg2OS0uMTM2LTQuNjk5LS4wODYtLjgzNy4wMjMtMS45NTMuMDk4LTIuNzAzLjE1NGEuNTk3LjU5NyAwIDAgMC0uNTA1LjgyN2w2LjI3OSAxNS4wNzdjLjE2Ni4zOTguNzEuNDQ3Ljk0NC4wODRaIi8+PC9nPjxtYXNrIGlkPSJqIiB3aWR0aD0iMTgiIGhlaWdodD0iMTciIHg9IjEwMSIgeT0iNzciIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiPjxwYXRoIGZpbGw9IiM1Q0IxNzYiIGQ9Im0xMDkuMTcgOTMuNCA4Ljg2LTEzLjcwN2EuNTk4LjU5OCAwIDAgMC0uMzU3LS45MDVjLS44MTEtLjIwMS0yLjA3LS41MDQtMy4wMTMtLjY5Mi0xLjg1OS0uMzctMi45MTEtLjU4OS00LjgwNi0uNzUxLTEuODMxLS4xNTgtMi44NjktLjEzNy00LjY5OS0uMDg3LS44MzcuMDIzLTEuOTUzLjA5OS0yLjcwMy4xNTRhLjU5Ny41OTcgMCAwIDAtLjUwNS44MjdsNi4yNzkgMTUuMDc3Yy4xNjYuMzk4LjcxLjQ0Ny45NDQuMDg1WiIvPjwvbWFzaz48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIuNjYxIiBtYXNrPSJ1cmwoI2opIj48cGF0aCBkPSJNMTA5LjIyNSA3Ny4zMzVjLS4yMDcgMS44NjcuNDE4IDYuNjMyIDQuNTczIDEwLjc1M00xMTMuOTcyIDc2LjljLS4yMDcgMS44NjcuNDE4IDYuNjMxIDQuNTczIDEwLjc1M00xMDQuOTkyIDc3LjM1N2MtLjEyMSAyLjM5NyAxLjAyMyA4LjYwMiA2LjU2OCAxNC4yNE0xMDIuNjkgODEuMzQzYy4xMjUgMi4zOTcgMS40MjkgNi40OTcgNy41MjIgMTEuNTM3Ii8+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMS41NjUiIGhlaWdodD0iMjEuNjQ5IiB4PSIxMTguNzc1IiB5PSI3Ni4wMDkiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJoYXJkQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz48ZmVPZmZzZXQgZHk9Ii42NjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjMyMiIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjEyOTQxMiAwIDAgMCAwIDAuMTI5NDEyIDAgMCAwIDAgMC4yMDM5MjIgMCAwIDAgMC4xIDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTJfMzkiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTJfMzkiIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJiIiB3aWR0aD0iMjAuMjAxIiBoZWlnaHQ9IjIyLjc0MSIgeD0iNDMuNTI2IiB5PSI1Ni4xNjciIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJoYXJkQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz48ZmVPZmZzZXQgZHk9Ii42NjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjMyMiIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjEyOTQxMiAwIDAgMCAwIDAuMTI5NDEyIDAgMCAwIDAgMC4yMDM5MjIgMCAwIDAgMC4xIDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTJfMzkiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTJfMzkiIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJjIiB3aWR0aD0iMjAuOTMyIiBoZWlnaHQ9IjIyLjYwMiIgeD0iMjYuNzYxIiB5PSI0NC44MTgiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJoYXJkQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz48ZmVPZmZzZXQgZHk9Ii42NjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjMyMiIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjEyOTQxMiAwIDAgMCAwIDAuMTI5NDEyIDAgMCAwIDAgMC4yMDM5MjIgMCAwIDAgMC4xIDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTJfMzkiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTJfMzkiIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJlIiB3aWR0aD0iMjEuNDgyIiBoZWlnaHQ9IjIxLjcyNCIgeD0iMTU2Ljk0NCIgeT0iNzQuOTA0IiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iaGFyZEFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0IGR5PSIuNjYxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS4zMjIiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4xMjk0MTIgMCAwIDAgMCAwLjEyOTQxMiAwIDAgMCAwIDAuMjAzOTIyIDAgMCAwIDAuMSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5IiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZiIgd2lkdGg9IjIxLjI1NiIgaGVpZ2h0PSIyMi4xMzkiIHg9Ijc5Ljg2OCIgeT0iNzIuNDA5IiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iaGFyZEFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0IGR5PSIuNjYxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS4zMjIiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4xMjk0MTIgMCAwIDAgMCAwLjEyOTQxMiAwIDAgMCAwIDAuMjAzOTIyIDAgMCAwIDAuMSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5IiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZyIgd2lkdGg9IjIwLjUyNiIgaGVpZ2h0PSIyMi42NjQiIHg9IjYwLjgzNSIgeT0iNjUuODkzIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iaGFyZEFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0IGR5PSIuNjYxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS4zMjIiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4xMjk0MTIgMCAwIDAgMCAwLjEyOTQxMiAwIDAgMCAwIDAuMjAzOTIyIDAgMCAwIDAuMSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5IiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iaCIgd2lkdGg9IjIxLjUzNyIgaGVpZ2h0PSIyMS42NjIiIHg9IjEzNy41OSIgeT0iNzUuNzg4IiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iaGFyZEFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0IGR5PSIuNjYxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS4zMjIiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4xMjk0MTIgMCAwIDAgMCAwLjEyOTQxMiAwIDAgMCAwIDAuMjAzOTIyIDAgMCAwIDAuMSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5IiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iaSIgd2lkdGg9IjIxLjUxNSIgaGVpZ2h0PSIyMS43MTIiIHg9Ijk5LjI1NyIgeT0iNzUuMjM4IiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iaGFyZEFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0IGR5PSIuNjYxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS4zMjIiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4xMjk0MTIgMCAwIDAgMCAwLjEyOTQxMiAwIDAgMCAwIDAuMjAzOTIyIDAgMCAwIDAuMSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzEyXzM5IiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PC9kZWZzPjwvc3ZnPg==",w=()=>{const{formatMessage:M}=(0,z.Z)(),{collectionTypes:n,singleTypes:C,isLoading:y}=(0,F.u)(),{guidedTourState:r,isGuidedTourVisible:E,isSkipped:W}=(0,a.c1)(),o=!Object.values(r).every(S=>Object.values(S).every(b=>b))&&E&&!W,{push:A}=(0,X.k6)(),L=S=>{S.preventDefault(),A("/plugins/content-type-builder/content-types/create-content-type")},G=j.useMemo(()=>{const S=b=>b.filter(NI=>NI.isDisplayed);return S(n).length>1||S(C).length>0},[n,C]);return y?(0,I.jsx)(a.dO,{}):(0,I.jsxs)(c.A,{children:[(0,I.jsx)(H.q,{title:M({id:"HomePage.helmet.title",defaultMessage:"Homepage"})}),(0,I.jsxs)(Z.o,{children:[(0,I.jsx)(tI,{children:(0,I.jsx)("img",{alt:"","aria-hidden":!0,src:II})}),(0,I.jsxs)(t.x,{padding:10,children:[(0,I.jsx)(T.r,{children:(0,I.jsx)(d.P,{col:8,s:12,children:(0,I.jsx)("div",{children:(0,I.jsx)(t.x,{paddingLeft:6,paddingBottom:10,children:(0,I.jsxs)(g.k,{direction:"column",alignItems:"flex-start",gap:5,children:[(0,I.jsx)(s.Z,{as:"h1",variant:"alpha",children:M(G?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})}),(0,I.jsx)(gI,{textColor:"neutral600",variant:"epsilon",children:M(G?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})}),G?(0,I.jsx)(x.r,{isExternal:!0,href:"https://strapi.io/blog",children:M({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})}):(0,I.jsx)(m.z,{size:"L",onClick:L,endIcon:(0,I.jsx)(P.Z,{}),children:M({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})})]})})})})}),(0,I.jsxs)(T.r,{gap:6,children:[(0,I.jsx)(d.P,{col:8,s:12,children:o?(0,I.jsx)($,{}):(0,I.jsx)(eI,{})}),(0,I.jsx)(d.P,{col:4,s:12,children:(0,I.jsx)(sI,{})})]})]})]})]})},tI=(0,l.default)(t.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,gI=(0,l.default)(s.Z)`
  word-break: break-word;
`,eI=()=>{const{formatMessage:M}=(0,z.Z)(),{trackUsage:n}=(0,a.rS)();return(0,I.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:5,children:[(0,I.jsx)(p,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{n("didClickOnTryStrapiCloudSection")},children:(0,I.jsxs)(g.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6,children:[(0,I.jsx)(aI,{hasRadius:!0,padding:3,children:(0,I.jsx)(nI,{width:"2rem",height:"2rem",justifyContent:"center",hasRadius:!0,alignItems:"center",children:(0,I.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"15",fill:"none",children:(0,I.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M4.39453 13.8298C1.93859 13.6455 0 11.468 0 8.80884 0 6.0289 2.11876 3.7753 4.73238 3.7753c.46775 0 .91964.07218 1.34638.20664C7.21234 1.62909 9.66469 0 12.5073 0c2.5102 0 4.7161 1.27036 5.9782 3.18766a4.54297 4.54297 0 0 1 .6132-.04144C21.8056 3.14622 24 5.54066 24 8.49436c0 2.89194-2.1036 5.24784-4.7323 5.34504v.0031l-1.8948.278a38.18054 38.18054 0 0 1-11.08354 0l-1.89483-.278v-.0127Z",clipRule:"evenodd"})})})}),(0,I.jsxs)(g.k,{gap:1,direction:"column",alignItems:"start",children:[(0,I.jsx)(s.Z,{fontWeight:"semiBold",variant:"pi",children:M({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}),(0,I.jsx)(s.Z,{textColor:"neutral600",children:M({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})}),(0,I.jsx)(t.x,{src:MI,position:"absolute",top:0,right:0,as:"img"})]})]})}),(0,I.jsx)(p,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>n("didClickonReadTheDocumentationSection"),children:(0,I.jsx)(a.Y_,{title:M({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:M({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:(0,I.jsx)(e.Z,{}),iconBackground:"primary100"})}),(0,I.jsx)(p,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>n("didClickonCodeExampleSection"),children:(0,I.jsx)(a.Y_,{title:M({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:M({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:(0,I.jsx)(k.Z,{}),iconBackground:"warning100"})}),(0,I.jsx)(p,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>n("didClickonTutorialSection"),children:(0,I.jsx)(a.Y_,{title:M({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:M({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:(0,I.jsx)(B.Z,{}),iconBackground:"secondary100"})}),(0,I.jsx)(p,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>n("didClickonBlogSection"),children:(0,I.jsx)(a.Y_,{title:M({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:M({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:(0,I.jsx)(v.Z,{}),iconBackground:"alternative100"})})]})},p=l.default.a`
  text-decoration: none;
`,aI=(0,l.default)(t.x)`
  background-image: url(${iI});
`,nI=(0,l.default)(g.k)`
  background: rgba(255, 255, 255, 0.3);
`,sI=()=>{const{formatMessage:M}=(0,z.Z)(),{communityEdition:n}=(0,a.L7)(),C=[...DI,{icon:(0,I.jsx)(O,{}),link:n?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return(0,I.jsxs)(g.k,{as:"aside",direction:"column","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow",gap:7,children:[(0,I.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:5,children:[(0,I.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:3,children:[(0,I.jsx)(s.Z,{variant:"delta",as:"h2",id:"join-the-community",children:M({id:"app.components.HomePage.community",defaultMessage:"Join the community"})}),(0,I.jsx)(s.Z,{textColor:"neutral600",children:M({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"})})]}),(0,I.jsx)(x.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:(0,I.jsx)(Y.Z,{}),children:M({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})})]}),(0,I.jsx)(dI,{children:C.map(({icon:y,link:r,name:E})=>(0,I.jsx)(d.P,{col:6,s:12,children:(0,I.jsx)(jI,{size:"L",startIcon:y,variant:"tertiary",href:r,isExternal:!0,children:M(E)})},E.id))})]})},lI=(0,l.default)(U.Z)`
  path {
    fill: #7289da !important;
  }
`,cI=(0,l.default)(R.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,O=(0,l.default)(V.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,oI=(0,l.default)(_.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,AI=(0,l.default)(f.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,jI=(0,l.default)(D.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:M})=>M.spaces[6]};
    height: ${({theme:M})=>M.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,dI=(0,l.default)(T.r)`
  row-gap: ${({theme:M})=>M.spaces[2]};
  column-gap: ${({theme:M})=>M.spaces[4]};
`,DI=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:(0,I.jsx)(Q.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:(0,I.jsx)(lI,{}),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:(0,I.jsx)(cI,{}),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:(0,I.jsx)(oI,{}),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:(0,I.jsx)(AI,{}),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:(0,I.jsx)(O,{}),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:(0,I.jsx)(O,{}),alt:"career"}],CI=()=>{const M=(0,K.p)(w,async()=>(await i.e(3474).then(i.bind(i,63474))).HomePageEE);return M?(0,I.jsx)(M,{}):null}},59491:(h,N,i)=>{i.d(N,{u:()=>s});var I=i(27279),j=i(94050),t=i(53532),g=i(40464);function s(){const{get:m}=(0,j.kY)(),{formatAPIError:c}=(0,j.So)(),Z=(0,j.lm)(),T=(0,g.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:e}}=await m("/content-manager/components");return e},onError(e){e instanceof t.d7&&Z({type:"warning",message:c(e)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:e}}=await m("/content-manager/content-types");return e},onError(e){e instanceof t.d7&&Z({type:"warning",message:c(e)})}}]),[d,D]=T,x=d.isLoading||D.isLoading,a=I.useMemo(()=>(D?.data??[]).filter(e=>e.kind==="collectionType"&&e.isDisplayed),[D?.data]),P=I.useMemo(()=>(D?.data??[]).filter(e=>e.kind!=="collectionType"&&e.isDisplayed),[D?.data]);return{isLoading:x,components:I.useMemo(()=>d?.data??[],[d?.data]),collectionTypes:a,singleTypes:P}}},27997:(h,N,i)=>{i.d(N,{A:()=>m});var I=i(74081),j=i(7484),t=i(93415);const g=(0,j.default)(t.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:c})=>c?"auto 1fr":"1fr"};
`,s=(0,j.default)(t.x)`
  overflow-x: hidden;
`,m=({sideNav:c,children:Z})=>(0,I.jsxs)(g,{hasSideNav:Boolean(c),children:[c,(0,I.jsx)(s,{paddingBottom:10,children:Z})]})},53532:(h,N,i)=>{i.d(N,{d7:()=>t});var I=i(5466);const{Axios:j,AxiosError:t,CanceledError:g,isCancel:s,CancelToken:m,VERSION:c,all:Z,Cancel:T,isAxiosError:d,spread:D,toFormData:x,AxiosHeaders:a,HttpStatusCode:P,formToJSON:e,getAdapter:k,mergeConfig:B}=I.default}}]);
