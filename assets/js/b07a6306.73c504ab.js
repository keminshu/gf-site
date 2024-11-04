"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[7058],{951070:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>T,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370","title":"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370","description":"ghttp \u5ba2\u6237\u7aef\u652f\u6301\u5bf9HTTP\u8bf7\u6c42\u7684\u8f93\u5165\u4e0e\u8f93\u51fa\u539f\u59cb\u4fe1\u606f\u83b7\u53d6\u4e0e\u6253\u5370\uff0c\u65b9\u4fbf\u8c03\u8bd5\uff0c\u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a","source":"@site/versioned_docs/version-1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370.md","sourceDirName":"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient","slug":"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370","permalink":"/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient-\u81ea\u5b9a\u4e49Header","permalink":"/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Header"},"next":{"title":"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e","permalink":"/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e"}}');var s=t(474848),r=t(28453);const o={title:"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",sidebar_position:5,hide_title:!0},l=void 0,c={},a=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ghttp"})," \u5ba2\u6237\u7aef\u652f\u6301\u5bf9HTTP\u8bf7\u6c42\u7684\u8f93\u5165\u4e0e\u8f93\u51fa\u539f\u59cb\u4fe1\u606f\u83b7\u53d6\u4e0e\u6253\u5370\uff0c\u65b9\u4fbf\u8c03\u8bd5\uff0c\u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func (r *ClientResponse) Raw() string\nfunc (r *ClientResponse) RawDump()\nfunc (r *ClientResponse) RawRequest() string\nfunc (r *ClientResponse) RawResponse() string\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6240\u6709\u7684\u65b9\u6cd5\u5747\u7ed1\u5b9a\u5728 ",(0,s.jsx)(e.code,{children:"ClientResponse"})," \u5bf9\u8c61\u4e0a\uff0c\u4e5f\u5c31\u662f\u8bf4\u5fc5\u987b\u8981\u8bf7\u6c42\u7ed3\u675f\u540e\u624d\u80fd\u6253\u5370\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    response, err := g.Client().Get("https://goframe.org")\n    if err != nil {\n        panic(err)\n    }\n    response.RawDump()\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"+---------------------------------------------+\n|                   REQUEST                   |\n+---------------------------------------------+\nGET / HTTP/1.1\nHost: goframe.org\nUser-Agent: Go-http-client/1.1\nAccept-Encoding: gzip\n\n+---------------------------------------------+\n|                   RESPONSE                  |\n+---------------------------------------------+\nHTTP/1.1 200 OK\nConnection: close\nTransfer-Encoding: chunked\nContent-Type: text/html; charset=utf-8\nDate: Mon, 08 Jun 2020 11:33:26 GMT\nServer: nginx/1.10.3 (Ubuntu)\n\n<!DOCTYPE html>\n...\n\n"})})]})}function T(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>l});var i=t(296540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);