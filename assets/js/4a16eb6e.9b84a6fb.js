"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[24337],{239562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>g,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"\u6a21\u5757\u5217\u8868/\u6587\u672c\u5904\u7406/gregex -\u6b63\u5219\u8868\u8fbe\u5f0f","title":"gregex (\u6b63\u5219\u8868\u8fbe\u5f0f)","description":"gregex \u63d0\u4f9b\u4e86\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u652f\u6301\uff0c\u5e95\u5c42\u662f\u5bf9\u6807\u51c6\u5e93 regexp \u7684\u5c01\u88c5\uff0c\u6781\u5927\u5730\u7b80\u5316\u4e86\u6b63\u5219\u7684\u4f7f\u7528\uff0c\u5e76\u91c7\u7528\u4e86\u89e3\u6790\u7f13\u5b58\u8bbe\u8ba1\uff0c\u63d0\u9ad8\u4e86\u6267\u884c\u6548\u7387\u3002","source":"@site/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u6587\u672c\u5904\u7406/gregex -\u6b63\u5219\u8868\u8fbe\u5f0f.md","sourceDirName":"\u6a21\u5757\u5217\u8868/\u6587\u672c\u5904\u7406","slug":"/\u6a21\u5757\u5217\u8868/\u6587\u672c\u5904\u7406/gregex -\u6b63\u5219\u8868\u8fbe\u5f0f","permalink":"/1.16.x/\u6a21\u5757\u5217\u8868/\u6587\u672c\u5904\u7406/gregex -\u6b63\u5219\u8868\u8fbe\u5f0f","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u6587\u672c\u5904\u7406/gregex -\u6b63\u5219\u8868\u8fbe\u5f0f.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"gregex (\u6b63\u5219\u8868\u8fbe\u5f0f)","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"gring (\u5e76\u53d1\u5b89\u5168\u73af\u7ed3\u6784)","permalink":"/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gring -\u5e76\u53d1\u5b89\u5168\u73af\u7ed3\u6784"},"next":{"title":"gstr (\u5b57\u7b26\u4e32\u5904\u7406)","permalink":"/1.16.x/\u6a21\u5757\u5217\u8868/\u6587\u672c\u5904\u7406/gstr -\u5b57\u7b26\u4e32\u5904\u7406"}}');var s=t(474848),o=t(28453);const i={title:"gregex (\u6b63\u5219\u8868\u8fbe\u5f0f)",sidebar_position:0,hide_title:!0},g=void 0,c={},a=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gregex"})," \u63d0\u4f9b\u4e86\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u652f\u6301\uff0c\u5e95\u5c42\u662f\u5bf9\u6807\u51c6\u5e93 ",(0,s.jsx)(n.code,{children:"regexp"})," \u7684\u5c01\u88c5\uff0c\u6781\u5927\u5730\u7b80\u5316\u4e86\u6b63\u5219\u7684\u4f7f\u7528\uff0c\u5e76\u91c7\u7528\u4e86\u89e3\u6790\u7f13\u5b58\u8bbe\u8ba1\uff0c\u63d0\u9ad8\u4e86\u6267\u884c\u6548\u7387\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/text/gregex"\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/text/gregex",children:"https://godoc.org/github.com/gogf/gf/text/gregex"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7b80\u5355\u793a\u4f8b\uff1a"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/text/gregex"\n)\n\nfunc main() {\n    match, _ := gregex.MatchString(`(\\w+).+\\-\\-\\s*(.+)`, `GF is best! -- John`)\n    fmt.Printf(`%s says "%s" is the one he loves!`, match[2], match[1])\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'John says "GF" is the one he loves!\n\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>g});var r=t(296540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function g(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);