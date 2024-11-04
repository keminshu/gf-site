"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[77178],{147666:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362","title":"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362","description":"Struct \u8f6c\u6362","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson","slug":"/docs/components/encoding-gjson-struct-converting","permalink":"/docs/components/encoding-gjson-struct-converting","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/components/encoding-gjson-struct-converting","title":"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362","sidebar_position":2,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u901a\u7528\u7f16\u89e3\u7801-\u5c42\u7ea7\u8bbf\u95ee","permalink":"/docs/components/encoding-gjson-nested-visiting"},"next":{"title":"\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539","permalink":"/docs/components/encoding-gjson-dynamic-creating-and-editing"}}');var s=e(474848),r=e(28453);const c={slug:"/docs/components/encoding-gjson-struct-converting",title:"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362",sidebar_position:2,hide_title:!0},i=void 0,d={},u=[{value:"<code>Struct</code> \u8f6c\u6362",id:"struct-\u8f6c\u6362",level:2}];function a(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h2,{id:"struct-\u8f6c\u6362",children:[(0,s.jsx)(t.code,{children:"Struct"})," \u8f6c\u6362"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Struct"})," \u65b9\u6cd5\u7528\u4e8e\u5c06\u6574\u4e2a ",(0,s.jsx)(t.code,{children:"Json"})," \u5305\u542b\u7684\u6570\u636e\u5185\u5bb9\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u6570\u636e\u683c\u5f0f\u6216\u8005\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'data :=\n    `\n{\n    "count" : 1,\n    "array" : ["John", "Ming"]\n}`\nif j, err := gjson.DecodeToJson(data); err != nil {\n    panic(err)\n} else {\n    type Users struct {\n        Count int\n        Array []string\n    }\n    users := new(Users)\n    if err := j.Scan(users); err != nil {\n        panic(err)\n    }\n    fmt.Printf(`%+v`, users)\n}\n\n// Output:\n// &{Count:1 Array:[John Ming]}\n'})})]})}function l(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>i});var o=e(296540);const s={},r=o.createContext(s);function c(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);