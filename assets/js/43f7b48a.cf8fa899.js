"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[6162],{385920:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>x});var r=n(474848),c=n(28453);const o={title:"\u8bf7\u6c42\u8f93\u5165-Context",sidebar_position:6},s=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-Context",title:"\u8bf7\u6c42\u8f93\u5165-Context",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.0.x/5-WEB\u670d\u52a1\u5f00\u53d1/3-\u8bf7\u6c42\u8f93\u5165/6-\u8bf7\u6c42\u8f93\u5165-Context.md",sourceDirName:"5-WEB\u670d\u52a1\u5f00\u53d1/3-\u8bf7\u6c42\u8f93\u5165",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-Context",permalink:"/gf-site/docs/2.0.x/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-Context",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/5-WEB\u670d\u52a1\u5f00\u53d1/3-\u8bf7\u6c42\u8f93\u5165/6-\u8bf7\u6c42\u8f93\u5165-Context.md",tags:[],version:"2.0.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:6,frontMatter:{title:"\u8bf7\u6c42\u8f93\u5165-Context",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53d8\u91cf",permalink:"/gf-site/docs/2.0.x/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53d8\u91cf"},next:{title:"\u8bf7\u6c42\u8f93\u5165-\u6587\u4ef6\u4e0a\u4f20",permalink:"/gf-site/docs/2.0.x/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u6587\u4ef6\u4e0a\u4f20"}},i={},x=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c <code>SetCtxVar/GetCtxVar</code>",id:"\u793a\u4f8b1-setctxvargetctxvar",level:3},{value:"\u793a\u4f8b2\uff0c <code>SetCtx</code>",id:"\u793a\u4f8b2-setctx",level:3}];function l(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(e.p,{children:["\u8bf7\u6c42\u6d41\u7a0b\u5f80\u5f80\u4f1a\u5728\u4e0a\u4e0b\u6587\u4e2d\u5171\u4eab\u4e00\u4e9b\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u7684\u53d8\u91cf\uff0c\u4f8b\u5982\u5728\u8bf7\u6c42\u5f00\u59cb\u4e4b\u524d\u901a\u8fc7\u4e2d\u95f4\u4ef6\u8bbe\u7f6e\u4e00\u4e9b\u53d8\u91cf\uff0c\u968f\u540e\u5728\u8def\u7531\u670d\u52a1\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u83b7\u53d6\u8be5\u53d8\u91cf\u5e76\u76f8\u5e94\u5bf9\u4e00\u4e9b\u5904\u7406\u3002\u8fd9\u79cd\u9700\u6c42\u975e\u5e38\u5e38\u89c1\u3002\u5728 ",(0,r.jsx)(e.code,{children:"GoFrame"})," \u6846\u67b6\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u5bf9\u8c61\u6765\u5904\u7406\u6d41\u7a0b\u5171\u4eab\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u751a\u81f3\u5c06\u8be5\u5bf9\u8c61\u8fdb\u4e00\u6b65\u4f20\u9012\u5230\u4f9d\u8d56\u7684\u5404\u4e2a\u6a21\u5757\u65b9\u6cd5\u4e2d\u3002\u8be5 ",(0,r.jsx)(e.code,{children:"Context"})," \u5bf9\u8c61\u7c7b\u578b\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93\u7684 ",(0,r.jsx)(e.code,{children:"context.Context"})," \u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u5f80\u5f80\u4f1a\u4f5c\u4e3a\u6a21\u5757\u95f4\u8c03\u7528\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u8be5\u63a5\u53e3\u53c2\u6570\u4e5f\u662f ",(0,r.jsx)(e.code,{children:"Golang"})," \u5b98\u65b9\u63a8\u8350\u7684\u5728\u6a21\u5757\u95f4\u4f20\u9012\u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u63a8\u8350\u65b9\u5f0f\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func (r *Request) GetCtx() context.Context\nfunc (r *Request) SetCtx(ctx context.Context)\nfunc (r *Request) GetCtxVar(key interface{}, def ...interface{}) *gvar.Var\nfunc (r *Request) SetCtxVar(key interface{}, value interface{})\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"GetCtx"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u7684 ",(0,r.jsx)(e.code,{children:"context.Context"})," \u5bf9\u8c61\uff0c\u4f5c\u7528\u540c ",(0,r.jsx)(e.code,{children:"Context"})," \u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"SetCtx"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684 ",(0,r.jsx)(e.code,{children:"context.Context"})," \u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"GetCtxVar"})," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u5e76\u53ef\u7ed9\u5b9a\u5f53\u8be5\u53d8\u91cf\u4e0d\u5b58\u5728\u65f6\u7684\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"SetCtxVar"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u4e0a\u4e0b\u6587\u53d8\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsxs)(e.h3,{id:"\u793a\u4f8b1-setctxvargetctxvar",children:["\u793a\u4f8b1\uff0c ",(0,r.jsx)(e.code,{children:"SetCtxVar/GetCtxVar"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nconst (\n\tTraceIdName = "trace-id"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.Middleware(func(r *ghttp.Request) {\n\t\t\tr.SetCtxVar(TraceIdName, "HBm876TFCde435Tgf")\n\t\t\tr.Middleware.Next()\n\t\t})\n\t\tgroup.ALL("/", func(r *ghttp.Request) {\n\t\t\tr.Response.Write(r.GetCtxVar(TraceIdName))\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"SetCtxVar"})," \u548c ",(0,r.jsx)(e.code,{children:"GetCtxVar"})," \u6765\u8bbe\u7f6e\u548c\u83b7\u53d6\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u8be5\u53d8\u91cf\u751f\u547d\u5468\u671f\u4ec5\u9650\u4e8e\u5f53\u524d\u8bf7\u6c42\u6d41\u7a0b\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"})," \uff0c\u9875\u9762\u8f93\u51fa\u5185\u5bb9\u4e3a\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"HBm876TFCde435Tgf\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"\u793a\u4f8b2-setctx",children:["\u793a\u4f8b2\uff0c ",(0,r.jsx)(e.code,{children:"SetCtx"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"SetCtx"})," \u65b9\u6cd5\u5e38\u7528\u4e8e\u4e2d\u95f4\u4ef6\u4e2d\u6574\u5408\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7684\u7ec4\u4ef6\uff0c\u4f8b\u5982\u7b2c\u4e09\u65b9\u7684\u94fe\u8def\u8ddf\u8e2a\u7ec4\u4ef6\u7b49\u7b49\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u8fd9\u91cc\u6211\u4eec\u5c06\u4e0a\u9762\u7684\u4f8b\u5b50\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"SetCtx"})," \u65b9\u6cd5\u6765\u6539\u9020\u4e00\u4e0b\u6765\u505a\u6f14\u793a\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"context"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nconst (\n\tTraceIdName = "trace-id"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.Middleware(func(r *ghttp.Request) {\n\t\t\tctx := context.WithValue(r.Context(), TraceIdName, "HBm876TFCde435Tgf")\n\t\t\tr.SetCtx(ctx)\n\t\t\tr.Middleware.Next()\n\t\t})\n\t\tgroup.ALL("/", func(r *ghttp.Request) {\n\t\t\tr.Response.Write(r.Context().Value(TraceIdName))\n\t\t\t// \u4e5f\u53ef\u4ee5\u4f7f\u7528\n\t\t\t// r.Response.Write(r.GetCtxVar(TraceIdName))\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"})," \uff0c\u9875\u9762\u8f93\u51fa\u5185\u5bb9\u4e3a\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"HBm876TFCde435Tgf\n"})})]})}function a(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>d});var r=n(296540);const c={},o=r.createContext(c);function s(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:s(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);