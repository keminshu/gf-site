"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[60858],{991086:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/\u5b89\u5168\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","title":"\u5b89\u5168\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","description":"gtype \u5e76\u53d1\u5b89\u5168\u57fa\u672c\u7c7b\u578b\u7684\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u5f80\u5f80\u5c31\u7c7b\u4f3c\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u6cd5(\u4ee5 gtype.Int \u7c7b\u578b\u4e3e\u4f8b)\uff1a","source":"@site/versioned_docs/version-2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/\u5b89\u5168\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype","slug":"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/\u5b89\u5168\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/\u5b89\u5168\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/\u5b89\u5168\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u5b89\u5168\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5b89\u5168\u7c7b\u578b-gtype","permalink":"/2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/"},"next":{"title":"\u5b89\u5168\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","permalink":"/2.2.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b89\u5168\u7c7b\u578b-gtype/\u5b89\u5168\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5"}}');var s=t(474848),r=t(28453);const c={title:"\u5b89\u5168\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},o=void 0,d={},a=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"<code>JSON</code> \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217",id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gtype"})," \u5e76\u53d1\u5b89\u5168\u57fa\u672c\u7c7b\u578b\u7684\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u5f80\u5f80\u5c31\u7c7b\u4f3c\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u6cd5(\u4ee5 ",(0,s.jsx)(e.code,{children:"gtype.Int"})," \u7c7b\u578b\u4e3e\u4f8b)\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func NewInt(value ...int) *Int\nfunc (v *Int) Add(delta int) (new int)\nfunc (v *Int) Cas(old, new int) bool\nfunc (v *Int) Clone() *Int\nfunc (v *Int) Set(value int) (old int)\nfunc (v *Int) String() string\nfunc (v *Int) Val() int\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/container/gtype"\n    "fmt"\n)\n\nfunc main() {\n    // \u521b\u5efa\u4e00\u4e2aInt\u578b\u7684\u5e76\u53d1\u5b89\u5168\u57fa\u672c\u7c7b\u578b\u5bf9\u8c61\n    i := gtype.NewInt()\n\n    // \u8bbe\u7f6e\u503c\n    fmt.Println(i.Set(10))\n\n    // \u83b7\u53d6\u503c\n    fmt.Println(i.Val())\n\n    // \u6570\u503c-1\uff0c\u5e76\u8fd4\u56de\u4fee\u6539\u4e4b\u540e\u7684\u6570\u503c\n    fmt.Println(i.Add(-1))\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-0",children:"10\n9\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",children:[(0,s.jsx)(e.code,{children:"JSON"})," \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gtype"})," \u6a21\u5757\u4e0b\u7684\u6240\u6709\u5bb9\u5668\u7c7b\u578b\u5747\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93 ",(0,s.jsx)(e.code,{children:"json"})," \u6570\u636e\u683c\u5f0f\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u63a5\u53e3\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["1\u3001 ",(0,s.jsx)(e.code,{children:"Marshal"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/v2/container/gtype"\n)\n\nfunc main() {\n    type Student struct {\n        Id     *gtype.Int\n        Name   *gtype.String\n        Scores *gtype.Interface\n    }\n    s := Student{\n        Id:     gtype.NewInt(1),\n        Name:   gtype.NewString("john"),\n        Scores: gtype.NewInterface([]int{100, 99, 98}),\n    }\n    b, _ := json.Marshal(s)\n    fmt.Println(string(b))\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'{"Id":1,"Name":"john","Scores":[100,99,98]}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["2\u3001 ",(0,s.jsx)(e.code,{children:"Unmarshal"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/v2/container/gtype"\n)\n\nfunc main() {\n    b := []byte(`{"Id":1,"Name":"john","Scores":[100,99,98]}`)\n    type Student struct {\n        Id     *gtype.Int\n        Name   *gtype.String\n        Scores *gtype.Interface\n    }\n    s := Student{}\n    json.Unmarshal(b, &s)\n    fmt.Println(s)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"{1 john [100,99,98]}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var i=t(296540);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);