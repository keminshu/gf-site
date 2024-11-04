"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[52994],{431633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de","title":"\u6570\u636e\u8fd4\u56de","description":"HTTP Server \u7684\u6570\u636e\u8fd4\u56de\u901a\u8fc7 ghttp.Response \u5bf9\u8c61\u5b9e\u73b0\uff0c ghttp.Response \u5bf9\u8c61\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93\u7684 http.ResponseWriter \u63a5\u53e3\u3002\u6570\u636e\u8f93\u51fa\u4f7f\u7528 Write* \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\uff0c\u5e76\u4e14\u6570\u636e\u8f93\u51fa\u91c7\u7528\u4e86 Buffer \u673a\u5236\uff0c\u56e0\u6b64\u6570\u636e\u7684\u5904\u7406\u6548\u7387\u6bd4\u8f83\u9ad8\u3002\u4efb\u4f55\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7 OutputBuffer \u65b9\u6cd5\u8f93\u51fa\u7f13\u51b2\u533a\u6570\u636e\u5230\u5ba2\u6237\u7aef\uff0c\u5e76\u6e05\u7a7a\u7f13\u51b2\u533a\u6570\u636e\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de","slug":"/docs/web/response","permalink":"/docs/web/response","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/web/response","title":"\u6570\u636e\u8fd4\u56de","sidebar_position":4,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u8bf7\u6c42\u8f93\u5165-\u6587\u4ef6\u4e0a\u4f20","permalink":"/docs/web/request-file-uploading"},"next":{"title":"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236","permalink":"/docs/web/response-buffering"}}');var s=t(474848),i=t(28453);const o={slug:"/docs/web/response",title:"\u6570\u636e\u8fd4\u56de",sidebar_position:4,hide_title:!0},c=void 0,d={},a=[];function p(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTP Server"})," \u7684\u6570\u636e\u8fd4\u56de\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"ghttp.Response"})," \u5bf9\u8c61\u5b9e\u73b0\uff0c ",(0,s.jsx)(n.code,{children:"ghttp.Response"})," \u5bf9\u8c61\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93\u7684 ",(0,s.jsx)(n.code,{children:"http.ResponseWriter"})," \u63a5\u53e3\u3002\u6570\u636e\u8f93\u51fa\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Write*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\uff0c\u5e76\u4e14\u6570\u636e\u8f93\u51fa\u91c7\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"Buffer"})," \u673a\u5236\uff0c\u56e0\u6b64\u6570\u636e\u7684\u5904\u7406\u6548\u7387\u6bd4\u8f83\u9ad8\u3002\u4efb\u4f55\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"OutputBuffer"})," \u65b9\u6cd5\u8f93\u51fa\u7f13\u51b2\u533a\u6570\u636e\u5230\u5ba2\u6237\u7aef\uff0c\u5e76\u6e05\u7a7a\u7f13\u51b2\u533a\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5e38\u7528\u65b9\u6cd5\uff1a\u66f4\u8be6\u7ec6\u7684\u63a5\u53e3\u5217\u8868\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (r *Response) Write(content ...interface{})\nfunc (r *Response) WriteExit(content ...interface{})\nfunc (r *Response) WriteJson(content interface{}) error\nfunc (r *Response) WriteJsonExit(content interface{}) error\nfunc (r *Response) WriteJsonP(content interface{}) error\nfunc (r *Response) WriteJsonPExit(content interface{}) error\nfunc (r *Response) WriteOver(content ...interface{})\nfunc (r *Response) WriteOverExit(content ...interface{})\nfunc (r *Response) WriteStatus(status int, content ...interface{})\nfunc (r *Response) WriteStatusExit(status int, content ...interface{})\nfunc (r *Response) WriteTpl(tpl string, params ...gview.Params) error\nfunc (r *Response) WriteTplContent(content string, params ...gview.Params) error\nfunc (r *Response) WriteTplDefault(params ...gview.Params) error\nfunc (r *Response) WriteXml(content interface{}, rootTag ...string) error\nfunc (r *Response) WriteXmlExit(content interface{}, rootTag ...string) error\nfunc (r *Response) Writef(format string, params ...interface{})\nfunc (r *Response) WritefExit(format string, params ...interface{})\nfunc (r *Response) Writefln(format string, params ...interface{})\nfunc (r *Response) WriteflnExit(format string, params ...interface{})\nfunc (r *Response) Writeln(content ...interface{})\nfunc (r *Response) WritelnExit(content ...interface{})\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7b80\u8981\u8bf4\u660e:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Write*"})," \u65b9\u6cd5\u7528\u4e8e\u5f80\u8fd4\u56de\u7684\u6570\u636e\u7f13\u51b2\u533a\u8ffd\u52a0\u5199\u5165\u6570\u636e\uff0c\u53c2\u6570\u53ef\u4e3a\u4efb\u610f\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5185\u90e8\u901a\u8fc7\u65ad\u8a00\u5bf9\u53c2\u6570\u505a\u81ea\u52a8\u5206\u6790\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Write*Exit"})," \u65b9\u6cd5\u7528\u4e8e\u5f80\u8fd4\u56de\u7684\u6570\u636e\u7f13\u51b2\u533a\u8ffd\u52a0\u5199\u5165\u6570\u636e\u540e\u9000\u51fa\u5f53\u524d\u6267\u884c\u7684 ",(0,s.jsx)(n.code,{children:"HTTP Handler"})," \u65b9\u6cd5\uff0c\u53ef\u7528\u4e8e\u66ff\u4ee3 ",(0,s.jsx)(n.code,{children:"return"})," \u8fd4\u56de\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteOver*"})," \u65b9\u6cd5\u7528\u4e8e\u8986\u76d6\u7f13\u51b2\u533a\u5199\u5165\uff0c\u539f\u6709\u7f13\u51b2\u533a\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u8986\u76d6\u4e3a\u65b0\u5199\u5165\u7684\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteStatus*"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u6267\u884c\u8fd4\u56de\u7684\u72b6\u6001\u7801\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteJson*"}),"/ ",(0,s.jsx)(n.code,{children:"WriteXml"})," \u65b9\u6cd5\u7528\u4e8e\u7279\u5b9a\u6570\u636e\u683c\u5f0f\u7684\u8f93\u51fa\uff0c\u8fd9\u662f\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u7b80\u4fbf\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteTpl*"})," \u65b9\u6cd5\u7528\u4e8e\u6a21\u677f\u8f93\u51fa\uff0c\u89e3\u6790\u5e76\u8f93\u51fa\u6a21\u677f\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u89e3\u6790\u5e76\u8f93\u51fa\u7ed9\u5b9a\u7684\u6a21\u677f\u5185\u5bb9\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5176\u4ed6\u65b9\u6cd5\u8be6\u89c1\u63a5\u53e3\u6587\u6863\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u9700\u8981\u63d0\u4e00\u4e0b\uff0c ",(0,s.jsx)(n.code,{children:"Header"})," \u7684\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6807\u51c6\u5e93\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Response.Header().Set("Content-Type", "text/plain; charset=utf-8")\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(296540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);