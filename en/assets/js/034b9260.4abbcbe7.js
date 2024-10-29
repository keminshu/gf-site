"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[25961],{90818:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var o=r(74848),t=r(28453);const s={title:"\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5",sidebar_position:5,hide_title:!0},c=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5",title:"\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5",description:"\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u5806\u6808\u4fe1\u606f",source:"@site/versioned_docs/version-2.7.x/4-\u6838\u5fc3\u7ec4\u4ef6/5-\u9519\u8bef\u5904\u7406/5-\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/5-\u9519\u8bef\u5904\u7406",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5",permalink:"/gf-site/en/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/4-\u6838\u5fc3\u7ec4\u4ef6/5-\u9519\u8bef\u5904\u7406/5-\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:5,frontMatter:{title:"\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5",sidebar_position:5,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027",permalink:"/gf-site/en/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027"},next:{title:"\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5",permalink:"/gf-site/en/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5"}},d={},a=[{value:"\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u5806\u6808\u4fe1\u606f",id:"\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u5806\u6808\u4fe1\u606f",level:2},{value:"\u6b63\u786e\u7684\u9519\u8bef\u5bf9\u8c61Wrap\u65b9\u5f0f",id:"\u6b63\u786e\u7684\u9519\u8bef\u5bf9\u8c61wrap\u65b9\u5f0f",level:2}];function g(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u5806\u6808\u4fe1\u606f",children:"\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u5806\u6808\u4fe1\u606f"}),"\n",(0,o.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"fmt/glog"})," \u6216\u8005\u5176\u4ed6\u5305\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u8f93\u51fa\u9519\u8bef\u5806\u6808\u4fe1\u606f\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/encoding/gjson"\n)\n\nfunc main() {\n\t_, err := gjson.Encode(func() {})\n\tfmt.Printf("err: %v", err)\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"err: json.Marshal failed: json: unsupported type: func()\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u9519\u8bef\u5806\u6808\u4fe1\u606f\uff0c\u5e94\u5f53\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"%+v"})," \u7684\u683c\u5f0f\u5316\u65b9\u5f0f\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/encoding/gjson"\n)\n\nfunc main() {\n\t_, err := gjson.Encode(func() {})\n\tfmt.Printf("err: %+v", err)\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"err: json.Marshal failed: json: unsupported type: func()\n1. json.Marshal failed\n   1).  github.com/gogf/gf/v2/internal/json.Marshal\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/internal/json/json.go:30\n   2).  github.com/gogf/gf/v2/encoding/gjson.Encode\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/encoding/gjson/gjson_stdlib_json_util.go:41\n   3).  main.main\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.test/main.go:10\n2. json: unsupported type: func()\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u6b63\u786e\u7684\u9519\u8bef\u5bf9\u8c61wrap\u65b9\u5f0f",children:"\u6b63\u786e\u7684\u9519\u8bef\u5bf9\u8c61Wrap\u65b9\u5f0f"}),"\n",(0,o.jsxs)(e.p,{children:["\u5f53\u5bf9\u9519\u8bef\u5bf9\u8c61\u8fdb\u884c ",(0,o.jsx)(e.code,{children:"Wrap"})," \u65f6\uff0c\u4e0d\u8981\u5c06\u9519\u8bef\u5bf9\u8c61\u6253\u5370\u5230 ",(0,o.jsx)(e.code,{children:"Wrap"})," \u7684\u9519\u8bef\u4fe1\u606f\u4e2d\uff0c\u56e0\u4e3a ",(0,o.jsx)(e.code,{children:"Wrap"})," \u65f6\u672c\u8eab\u4f1a\u5c06\u76ee\u6807\u9519\u8bef\u5bf9\u8c61\u5305\u88f9\u5230\u521b\u5efa\u7684\u65b0\u7684\u9519\u8bef\u5bf9\u8c61\u5185\u90e8\u3002\u5982\u679c\u5c06\u9519\u8bef\u4fe1\u606f\u518d\u6253\u5370\u5305\u542b\u5728\u9519\u8bef\u5b57\u7b26\u4e32\u4e2d\uff0c\u90a3\u4e48\u5728\u6253\u5370\u9519\u8bef\u5806\u6808\u7684\u65f6\u5019\u4f1a\u51fa\u73b0\u9519\u8bef\u4fe1\u606f\u91cd\u590d\u3002\u4f8b\u5982\uff08\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u8fd9\u91cc\u6ca1\u6709\u6253\u5370\u5806\u6808\u4fe1\u606f\uff09\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/encoding/gjson"\n\t"github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n\t_, err1 := gjson.Encode(func() {})\n\terr2 := gerror.Wrapf(err1, `error occurred: %v`, err1)\n\tfmt.Printf("err: %v", err2)\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u6253\u5370\u7684\u9519\u8bef\u4fe1\u606f\u51fa\u73b0\u4e86\u91cd\u590d\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"err: error occurred: json.Marshal failed: json: unsupported type: func(): json.Marshal failed: json: unsupported type: func()\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u6211\u4eec\u5c06\u4e0a\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u4fee\u590d\u4e00\u4e0b\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/encoding/gjson"\n\t"github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n\t_, err1 := gjson.Encode(func() {})\n\terr2 := gerror.Wrap(err1, `error occurred`)\n\tfmt.Printf("err: %v", err2)\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"err: error occurred: json.Marshal failed: json: unsupported type: func()\n"})})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(g,{...n})}):g(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>i});var o=r(96540);const t={},s=o.createContext(t);function c(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);