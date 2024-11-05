"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[30342],{321469:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u63a5\u53e3\u8bbe\u8ba1","title":"\u7f13\u5b58\u7ba1\u7406-\u63a5\u53e3\u8bbe\u8ba1","description":"\u7f13\u5b58\u7ec4\u4ef6\u91c7\u7528\u4e86\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u4e86 Adapter \u63a5\u53e3\uff0c\u4efb\u4f55\u5b9e\u73b0\u4e86 Adapter \u63a5\u53e3\u7684\u5bf9\u8c61\u5747\u53ef\u6ce8\u518c\u5230\u7f13\u5b58\u7ba1\u7406\u5bf9\u8c61\u4e2d\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u5bf9\u7f13\u5b58\u7ba1\u7406\u5bf9\u8c61\u8fdb\u884c\u7075\u6d3b\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\u548c\u6269\u5c55\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u63a5\u53e3\u8bbe\u8ba1.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406","slug":"/docs/core/gcache-interface","permalink":"/docs/core/gcache-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u63a5\u53e3\u8bbe\u8ba1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gcache-interface","title":"\u7f13\u5b58\u7ba1\u7406-\u63a5\u53e3\u8bbe\u8ba1","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u7f13\u5b58\u7ba1\u7406","permalink":"/docs/core/gcache"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58","permalink":"/docs/core/gcache-memory"}}');var r=c(474848),s=c(28453);const o={slug:"/docs/core/gcache-interface",title:"\u7f13\u5b58\u7ba1\u7406-\u63a5\u53e3\u8bbe\u8ba1",sidebar_position:0,hide_title:!0},d=void 0,i={},a=[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u6ce8\u518c\u63a5\u53e3\u5b9e\u73b0",id:"\u6ce8\u518c\u63a5\u53e3\u5b9e\u73b0",level:2},{value:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0",id:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u7f13\u5b58\u7ec4\u4ef6\u91c7\u7528\u4e86\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u4e86 ",(0,r.jsx)(t.code,{children:"Adapter"})," \u63a5\u53e3\uff0c\u4efb\u4f55\u5b9e\u73b0\u4e86 ",(0,r.jsx)(t.code,{children:"Adapter"})," \u63a5\u53e3\u7684\u5bf9\u8c61\u5747\u53ef\u6ce8\u518c\u5230\u7f13\u5b58\u7ba1\u7406\u5bf9\u8c61\u4e2d\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u5bf9\u7f13\u5b58\u7ba1\u7406\u5bf9\u8c61\u8fdb\u884c\u7075\u6d3b\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\u548c\u6269\u5c55\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Adapter"})," \u63a5\u53e3\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcache#Adapter",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcache#Adapter"})}),"\n",(0,r.jsx)(t.h2,{id:"\u6ce8\u518c\u63a5\u53e3\u5b9e\u73b0",children:"\u6ce8\u518c\u63a5\u53e3\u5b9e\u73b0"}),"\n",(0,r.jsxs)(t.p,{children:["\u901a\u8fc7\u8be5\u65b9\u6cd5\u5c06\u5b9e\u73b0\u7684 ",(0,r.jsx)(t.code,{children:"adapter"})," \u5e94\u7528\u5230\u5bf9\u5e94\u7684 ",(0,r.jsx)(t.code,{children:"Cache"})," \u5bf9\u8c61\u4e0a\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// SetAdapter changes the adapter for this cache.\n// Be very note that, this setting function is not concurrent-safe, which means you should not call\n// this setting function concurrently in multiple goroutines.\nfunc (c *Cache) SetAdapter(adapter Adapter)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u5177\u4f53\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,r.jsx)(t.a,{href:"/docs/core/gcache-redis",children:"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58"})," \u7ae0\u8282\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0",children:"\u83b7\u53d6\u63a5\u53e3\u5b9e\u73b0"}),"\n",(0,r.jsxs)(t.p,{children:["\u901a\u8fc7\u8be5\u65b9\u6cd5\u83b7\u53d6\u5f53\u524d\u6ce8\u518c\u7684 ",(0,r.jsx)(t.code,{children:"adapter"})," \u63a5\u53e3\u5b9e\u73b0\u5bf9\u8c61\u4e0a\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// GetAdapter returns the adapter that is set in current Cache.\nfunc (c *Cache) GetAdapter() Adapter\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u5177\u4f53\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,r.jsx)(t.a,{href:"/docs/core/gcache-redis",children:"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58"})," \u7ae0\u8282\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,c)=>{c.d(t,{R:()=>o,x:()=>d});var n=c(296540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);