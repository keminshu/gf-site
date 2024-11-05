"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[7960],{684410:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u7c7b\u578b-garray/\u6570\u7ec4\u7c7b\u578b-garray","title":"\u6570\u7ec4\u7c7b\u578b-garray","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u7c7b\u578b-garray/\u6570\u7ec4\u7c7b\u578b-garray.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u7c7b\u578b-garray","slug":"/docs/components/container-garray","permalink":"/en/docs/components/container-garray","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u7c7b\u578b-garray/\u6570\u7ec4\u7c7b\u578b-garray.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/container-garray","title":"\u6570\u7ec4\u7c7b\u578b-garray","sidebar_position":1,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u5b57\u5178\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/en/docs/components/container-gmap-funcs"},"next":{"title":"\u6570\u7ec4\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/en/docs/components/container-garray-example"}}');var o=n(474848),c=n(28453);const t={slug:"/docs/components/container-garray",title:"\u6570\u7ec4\u7c7b\u578b-garray",sidebar_position:1,hide_title:!0},i=void 0,d={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsx)(r.p,{children:"\u6570\u7ec4\u5bb9\u5668\uff0c\u63d0\u4f9b\u666e\u901a\u6570\u7ec4\uff0c\u53ca\u6392\u5e8f\u6570\u7ec4\uff0c\u652f\u6301\u6570\u636e\u9879\u552f\u4e00\u6027\u77eb\u6b63\uff0c\u652f\u6301\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u63a7\u5236\u3002"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,o.jsx)(r.p,{children:"\u6570\u7ec4\u64cd\u4f5c\u3002"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/garray"\n'})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/garray",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/garray"})}),"\n",(0,o.jsx)(r.p,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"garray"})," \u6a21\u5757\u4e0b\u7684\u5bf9\u8c61\u53ca\u65b9\u6cd5\u8f83\u591a\uff0c\u5efa\u8bae\u4ed4\u7ec6\u770b\u770b\u63a5\u53e3\u6587\u6863\u3002"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"garray"})," \u652f\u6301 ",(0,o.jsx)(r.code,{children:"int"}),"/ ",(0,o.jsx)(r.code,{children:"string"}),"/ ",(0,o.jsx)(r.code,{children:"interface{}"})," \u4e09\u79cd\u5e38\u7528\u7684\u6570\u636e\u7c7b\u578b\u3002"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"garray"})," \u652f\u6301\u666e\u901a\u6570\u7ec4\u548c\u6392\u5e8f\u6570\u7ec4\uff0c\u666e\u901a\u6570\u7ec4\u7684\u7ed3\u6784\u4f53\u540d\u79f0\u5b9a\u4e49\u4e3a ",(0,o.jsx)(r.code,{children:"*Array"})," \u683c\u5f0f\uff0c\u6392\u5e8f\u6570\u7ec4\u7684\u7ed3\u6784\u4f53\u540d\u79f0\u5b9a\u4e49\u4e3a ",(0,o.jsx)(r.code,{children:"Sorted*Array"})," \u683c\u5f0f\uff0c\u5982\u4e0b\uff1a","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"Array"}),", ",(0,o.jsx)(r.code,{children:"intArray"}),", ",(0,o.jsx)(r.code,{children:"StrArray"})]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"SortedArray"}),", ",(0,o.jsx)(r.code,{children:"SortedIntArray"}),", ",(0,o.jsx)(r.code,{children:"SortedStrArray"})]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["\u5176\u4e2d\u6392\u5e8f\u6570\u7ec4 ",(0,o.jsx)(r.code,{children:"SortedArray"}),"\uff0c\u9700\u8981\u7ed9\u5b9a\u6392\u5e8f\u6bd4\u8f83\u65b9\u6cd5\uff0c\u5728\u5de5\u5177\u5305 ",(0,o.jsx)(r.code,{children:"gutil"})," \u4e2d\u4e5f\u5b9a\u4e49\u4e86\u5f88\u591a ",(0,o.jsx)(r.code,{children:"Comparator*"})," \u6bd4\u8f83\u65b9\u6cd5"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>i});var s=n(296540);const o={},c=s.createContext(o);function t(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);