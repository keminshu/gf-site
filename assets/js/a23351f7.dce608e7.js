"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[72227],{214820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1/\u914d\u7f6e\u7ba1\u7406-AdapterFile","title":"\u914d\u7f6e\u7ba1\u7406-AdapterFile","description":"AdapterFile","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1/\u914d\u7f6e\u7ba1\u7406-AdapterFile.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","slug":"/docs/core/gcfg-interface-adapter-file","permalink":"/docs/core/gcfg-interface-adapter-file","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u914d\u7f6e\u7ba1\u7406/\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1/\u914d\u7f6e\u7ba1\u7406-AdapterFile.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gcfg-interface-adapter-file","title":"\u914d\u7f6e\u7ba1\u7406-AdapterFile","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u914d\u7f6e\u7ba1\u7406-\u63a5\u53e3\u5316\u8bbe\u8ba1","permalink":"/docs/core/gcfg-interface"},"next":{"title":"\u914d\u7f6e\u7ba1\u7406-AdapterContent","permalink":"/docs/core/gcfg-interface-adapter-content"}}');var c=t(474848),a=t(28453);const d={slug:"/docs/core/gcfg-interface-adapter-file",title:"\u914d\u7f6e\u7ba1\u7406-AdapterFile",sidebar_position:0,hide_title:!0},i=void 0,s={},o=[{value:"<code>AdapterFile</code>",id:"adapterfile",level:2},{value:"\u901a\u8fc7 <code>g.Cfg</code> \u5355\u4f8b\u5bf9\u8c61\u4f7f\u7528",id:"\u901a\u8fc7-gcfg-\u5355\u4f8b\u5bf9\u8c61\u4f7f\u7528",level:2},{value:"\u901a\u8fc7 <code>gcfg.NewWithAdapter</code> \u4f7f\u7528",id:"\u901a\u8fc7-gcfgnewwithadapter-\u4f7f\u7528",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"adapterfile",children:(0,c.jsx)(n.code,{children:"AdapterFile"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"AdapterFile"})," \u662f\u6846\u67b6\u9ed8\u8ba4\u7684\u914d\u7f6e\u7ba1\u7406\u5b9e\u73b0\u65b9\u5f0f\uff0c\u57fa\u4e8e\u6587\u4ef6\u7684\u914d\u7f6e\u52a0\u8f7d\u548c\u8bfb\u53d6\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u901a\u8fc7-gcfg-\u5355\u4f8b\u5bf9\u8c61\u4f7f\u7528",children:["\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"g.Cfg"})," \u5355\u4f8b\u5bf9\u8c61\u4f7f\u7528"]}),"\n",(0,c.jsx)(n.p,{children:"\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6846\u67b6\u5df2\u7ecf\u5c01\u88c5\u597d\u7684g.Cfg\u5355\u4f8b\u5bf9\u8c61\u6765\u4fbf\u6377\u4f7f\u7528\u57fa\u4e8e\u6587\u4ef6\u7684\u914d\u7f6e\u7ba1\u7406\u5b9e\u73b0\u3002\u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"config.yaml"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:'server:\n  address:     ":8888"\n  openapiPath: "/api.json"\n  swaggerPath: "/swagger"\n  dumpRouterMap: false\n\ndatabase:\n  default:\n    link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    debug:  true\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"main.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    fmt.Println(g.Cfg().MustGet(ctx, "server.address").String())\n    fmt.Println(g.Cfg().MustGet(ctx, "database.default").Map())\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd0\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:":8888\nmap[debug:true link:mysql:root:12345678@tcp(127.0.0.1:3306)/test]\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"\u901a\u8fc7-gcfgnewwithadapter-\u4f7f\u7528",children:["\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"gcfg.NewWithAdapter"})," \u4f7f\u7528"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u7ec4\u4ef6\u7684 ",(0,c.jsx)(n.code,{children:"NewWithAdapter"})," \u65b9\u6cd5\u6765\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e\u7ed9\u5b9a ",(0,c.jsx)(n.code,{children:"Adapter"})," \u7684\u914d\u7f6e\u7ba1\u7406\u5bf9\u8c61\uff0c\u5f53\u7136\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u7ed9\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"AdapterFile"})," \u63a5\u53e3\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"config.yaml"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:'server:\n  address:     ":8888"\n  openapiPath: "/api.json"\n  swaggerPath: "/swagger"\n  dumpRouterMap: false\n\ndatabase:\n  default:\n    link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    debug:  true\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"main.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/gcfg"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    adapter, err := gcfg.NewAdapterFile("config")\n    if err != nil {\n        panic(err)\n    }\n    config := gcfg.NewWithAdapter(adapter)\n    fmt.Println(config.MustGet(ctx, "server.address").String())\n    fmt.Println(config.MustGet(ctx, "database.default").Map())\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd0\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:":8888\nmap[debug:true link:mysql:root:12345678@tcp(127.0.0.1:3306)/test]\n"})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const c={},a=r.createContext(c);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);