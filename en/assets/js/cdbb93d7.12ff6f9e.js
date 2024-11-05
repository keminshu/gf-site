"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[31013],{972489:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>g,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370","title":"\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370","description":"\u9519\u8bef\u65e5\u5fd7\u4fe1\u606f\u652f\u6301 Stack \u7279\u6027\uff0c\u8be5\u7279\u6027\u53ef\u4ee5\u81ea\u52a8\u6253\u5370\u51fa\u5f53\u524d\u8c03\u7528\u65e5\u5fd7\u7ec4\u4ef6\u65b9\u6cd5\u7684\u5806\u6808\u4fe1\u606f\uff0c\u8be5\u5806\u6808\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 Notice/Warning/Error/Critical/Panic/Fatal \u7b49\u9519\u8bef\u65e5\u5fd7\u8f93\u51fa\u65b9\u6cd5\u89e6\u53d1\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 GetStack/PrintStack \u83b7\u53d6/\u6253\u5370\u3002\u9519\u8bef\u4fe1\u606f\u7684 stack \u4fe1\u606f\u5bf9\u4e8e\u8c03\u8bd5\u6765\u8bf4\u76f8\u5f53\u6709\u7528\u3002","source":"@site/versioned_docs/version-2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370","permalink":"/en/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":9,"frontMatter":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370","sidebar_position":9,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-\u5f02\u6b65\u8f93\u51fa","permalink":"/en/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5f02\u6b65\u8f93\u51fa"},"next":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f","permalink":"/en/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f"}}');var t=e(474848),c=e(28453);const g={title:"\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370",sidebar_position:9,hide_title:!0},i=void 0,s={},a=[{value:"\u793a\u4f8b1\uff0c\u901a\u8fc7 <code>Error</code> \u65b9\u6cd5\u89e6\u53d1",id:"\u793a\u4f8b1\u901a\u8fc7-error-\u65b9\u6cd5\u89e6\u53d1",level:3},{value:"\u793a\u4f8b2\uff0c\u901a\u8fc7 <code>Stack</code> \u65b9\u6cd5\u6253\u5370",id:"\u793a\u4f8b2\u901a\u8fc7-stack-\u65b9\u6cd5\u6253\u5370",level:3},{value:"\u793a\u4f8b3\uff0c\u6253\u5370 <code>gerror.Error</code>",id:"\u793a\u4f8b3\u6253\u5370-gerrorerror",level:3}];function l(n){const o={code:"code",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["\u9519\u8bef\u65e5\u5fd7\u4fe1\u606f\u652f\u6301 ",(0,t.jsx)(o.code,{children:"Stack"})," \u7279\u6027\uff0c\u8be5\u7279\u6027\u53ef\u4ee5\u81ea\u52a8\u6253\u5370\u51fa\u5f53\u524d\u8c03\u7528\u65e5\u5fd7\u7ec4\u4ef6\u65b9\u6cd5\u7684\u5806\u6808\u4fe1\u606f\uff0c\u8be5\u5806\u6808\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(o.code,{children:"Notice*/Warning*/Error*/Critical*/Panic*/Fatal*"})," \u7b49\u9519\u8bef\u65e5\u5fd7\u8f93\u51fa\u65b9\u6cd5\u89e6\u53d1\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(o.code,{children:"GetStack/PrintStack"})," \u83b7\u53d6/\u6253\u5370\u3002\u9519\u8bef\u4fe1\u606f\u7684 ",(0,t.jsx)(o.code,{children:"stack"})," \u4fe1\u606f\u5bf9\u4e8e\u8c03\u8bd5\u6765\u8bf4\u76f8\u5f53\u6709\u7528\u3002"]}),"\n",(0,t.jsxs)(o.h3,{id:"\u793a\u4f8b1\u901a\u8fc7-error-\u65b9\u6cd5\u89e6\u53d1",children:["\u793a\u4f8b1\uff0c\u901a\u8fc7 ",(0,t.jsx)(o.code,{children:"Error"})," \u65b9\u6cd5\u89e6\u53d1"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc Test(ctx context.Context) {\n    glog.Error(ctx, "This is error!")\n}\n\nfunc main() {\n    ctx := context.TODO()\n    Test(ctx)\n}\n\n'})}),"\n",(0,t.jsx)(o.p,{children:"\u6253\u5370\u51fa\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-html",children:"2022-01-05 15:08:54.998 [ERRO] This is error!\nStack:\n1.  main.Test\n    C:/hailaz/test/main.go:10\n2.  main.main\n    C:/hailaz/test/main.go:15\n"})}),"\n",(0,t.jsxs)(o.h3,{id:"\u793a\u4f8b2\u901a\u8fc7-stack-\u65b9\u6cd5\u6253\u5370",children:["\u793a\u4f8b2\uff0c\u901a\u8fc7 ",(0,t.jsx)(o.code,{children:"Stack"})," \u65b9\u6cd5\u6253\u5370"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    glog.PrintStack(ctx)\n    glog.New().PrintStack(ctx)\n\n    fmt.Println(glog.GetStack())\n    fmt.Println(glog.New().GetStack())\n}\n\n'})}),"\n",(0,t.jsx)(o.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-html",children:"2019-07-12 22:20:28.070 Stack:\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:11\n\n2019-07-12 22:20:28.070 Stack:\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:12\n\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:14\n\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:15\n"})}),"\n",(0,t.jsxs)(o.h3,{id:"\u793a\u4f8b3\u6253\u5370-gerrorerror",children:["\u793a\u4f8b3\uff0c\u6253\u5370 ",(0,t.jsx)(o.code,{children:"gerror.Error"})]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"glog"})," \u65e5\u5fd7\u6a21\u5757\u652f\u6301\u5bf9\u6807\u51c6\u9519\u8bef\u4ee5\u53ca ",(0,t.jsx)(o.code,{children:"gerror"})," \u9519\u8bef\u7684\u5806\u6808\u6253\u5370\u652f\u6301\u3002"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "errors"\n\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc MakeError() error {\n    return errors.New("connection closed with normal error")\n}\n\nfunc MakeGError() error {\n    return gerror.New("connection closed with gerror")\n}\n\nfunc TestGError(ctx context.Context) {\n    err1 := MakeError()\n    err2 := MakeGError()\n    glog.Error(ctx, err1)\n    glog.Errorf(ctx, "%+v", err2)\n}\n\nfunc main() {\n    ctx := context.TODO()\n    TestGError(ctx)\n}\n\n'})}),"\n",(0,t.jsx)(o.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-html",children:"2019-07-12 22:23:11.467 [ERRO] connection closed with normal error\nStack:\n1. main.TestGError\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:20\n2. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:25\n\n2019-07-12 22:23:11.467 [ERRO] connection closed with gerror\n1. connection closed with gerror\n    1). main.MakeGError\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:14\n    2). main.TestGError\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:19\n    3). main.main\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:25\nStack:\n1. main.TestGError\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:21\n2. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:25\n"})})]})}function d(n={}){const{wrapper:o}={...(0,c.R)(),...n.components};return o?(0,t.jsx)(o,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>g,x:()=>i});var r=e(296540);const t={},c=r.createContext(t);function g(n){const o=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function i(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:g(n.components),r.createElement(c.Provider,{value:o},n.children)}}}]);