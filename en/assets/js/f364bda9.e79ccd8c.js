"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[68336],{54711:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=r(74848),i=r(28453);const s={slug:"/request-struct",title:"\u8bf7\u6c42\u6570\u636e\u7ed3\u6784",hide_title:!0,sidebar_position:1},c=void 0,l={id:"\u5feb\u901f\u5f00\u59cb/\u8bf7\u6c42\u6570\u636e\u7ed3\u6784",title:"\u8bf7\u6c42\u6570\u636e\u7ed3\u6784",description:"\u5728\u672c\u793a\u4f8b\uff0c\u6211\u4eec\u5c1d\u8bd5\u901a\u8fc7\u6570\u636e\u7ed3\u6784\u5316\u7684\u65b9\u5f0f\uff0c\u89e3\u51b3\u4e0a\u4e00\u7ae0\u8282\u7684\u53c2\u6570\u540d\u79f0\u786c\u7f16\u7801\u95ee\u9898\u3002",source:"@site/quick/0-\u5feb\u901f\u5f00\u59cb/3-\u8bf7\u6c42\u6570\u636e\u7ed3\u6784.md",sourceDirName:"0-\u5feb\u901f\u5f00\u59cb",slug:"/request-struct",permalink:"/gf-site/en/quick/request-struct",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/quick/0-\u5feb\u901f\u5f00\u59cb/3-\u8bf7\u6c42\u6570\u636e\u7ed3\u6784.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:1,frontMatter:{slug:"/request-struct",title:"\u8bf7\u6c42\u6570\u636e\u7ed3\u6784",hide_title:!0,sidebar_position:1},sidebar:"hiddenSidebar",previous:{title:"\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570",permalink:"/gf-site/en/quick/request-input"},next:{title:"\u4f7f\u7528\u89c4\u8303\u8def\u7531",permalink:"/gf-site/en/quick/strict-router"}},d={},o=[{value:"\u8bf7\u6c42\u5bf9\u8c61",id:"\u8bf7\u6c42\u5bf9\u8c61",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:2},{value:"\u5b66\u4e60\u603b\u7ed3",id:"\u5b66\u4e60\u603b\u7ed3",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5728\u672c\u793a\u4f8b\uff0c\u6211\u4eec\u5c1d\u8bd5\u901a\u8fc7\u6570\u636e\u7ed3\u6784\u5316\u7684\u65b9\u5f0f\uff0c\u89e3\u51b3\u4e0a\u4e00\u7ae0\u8282\u7684\u53c2\u6570\u540d\u79f0\u786c\u7f16\u7801\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bf7\u6c42\u5bf9\u8c61",children:"\u8bf7\u6c42\u5bf9\u8c61"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u8bf7\u6c42\u7684\u6570\u636e\u7ed3\u6784\u6765\u63a5\u6536\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u53c2\u6570\u4fe1\u606f\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type HelloReq struct {\n    Name string // \u540d\u79f0\n    Age  int    // \u5e74\u9f84\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u592a\u68d2\u4e86\uff0c\u770b\u8d77\u6765\u6211\u4eec\u65e2\u53ef\u4ee5\u5bf9\u53c2\u6570\u8fdb\u884c\u6ce8\u91ca\u63cf\u8ff0\uff0c\u4e5f\u80fd\u786e\u5b9a\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u4e0d\u518d\u9700\u8981\u53c2\u6570\u540d\u79f0\u786c\u7f16\u7801\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u8c03\u6574\u6211\u4eec\u524d\u9762\u7684",(0,t.jsx)(n.code,{children:"Web Server"}),"\u7a0b\u5e8f\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype HelloReq struct {\n    Name string // \u540d\u79f0\n    Age  int    // \u5e74\u9f84\n}\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        var req HelloReq\n        if err := r.Parse(&req); err != nil {\n            r.Response.Write(err.Error())\n            return\n        }\n        if req.Name == "" {\n            r.Response.Write("name should not be empty")\n            return\n        }\n        if req.Age <= 0 {\n            r.Response.Write("invalid age value")\n            return\n        }\n        r.Response.Writef(\n            "Hello %s! Your Age is %d",\n            req.Name,\n            req.Age,\n        )\n    })\n    s.SetPort(8000)\n    s.Run()\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u672c\u793a\u4f8b\u4e2d\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6211\u4eec\u901a\u8fc7",(0,t.jsx)(n.code,{children:"r.Parse"}),"\u65b9\u6cd5\u5c06\u8bf7\u6c42\u53c2\u6570\u6620\u5c04\u5230\u8bf7\u6c42\u5bf9\u8c61\u4e0a\uff0c\u968f\u540e\u53ef\u4ee5\u901a\u8fc7\u5bf9\u8c61\u7684\u65b9\u5f0f\u6765\u4f7f\u7528\u53c2\u6570\u3002\n",(0,t.jsx)(n.code,{children:"r.Parse"}),"\u65b9\u6cd5\u652f\u6301\u81ea\u52a8\u89e3\u6790\u5ba2\u6237\u7aef\u63d0\u4ea4\u53c2\u6570\uff0c\u5e76\u8d4b\u503c\u5230\u6307\u5b9a\u5bf9\u8c61\u4e0a\u3002\n\u5185\u90e8\u6709\u56fa\u5b9a\u7684\u540d\u79f0\u6620\u5c04\u903b\u8f91\uff0c\u60a8\u5c06\u5728\u5f00\u53d1\u624b\u518c\u7684\u7c7b\u578b\u8f6c\u6362\u7ec4\u4ef6\u4e2d\u8be6\u7ec6\u4e86\u89e3\u5230\uff0c\u8fd9\u91cc\u4e0d\u4f5c\u8fc7\u591a\u4ecb\u7ecd\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u540c\u65f6\uff0c\u6211\u4eec\u5728\u672c\u793a\u4f8b\u4e2d\u589e\u52a0\u4e86\u6821\u9a8c\u903b\u8f91\uff0c",(0,t.jsx)(n.code,{children:"Name"}),"\u53ca",(0,t.jsx)(n.code,{children:"Age"}),"\u53c2\u6570\u4e0d\u80fd\u4e3a\u7a7a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6267\u884c\u7ed3\u679c",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u8bbf\u95ee ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:8000/?name=john&age=18",children:"http://127.0.0.1:8000/?name=john&age=18"})," \u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u8f93\u51fa\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img.png",src:r(60530).A+"",width:"1024",height:"226"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5c1d\u8bd5\u4e00\u4e0b\u9519\u8bef\u7684\u53c2\u6570\u8bf7\u6c42 ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"})," \u53ef\u4ee5\u770b\u5230\uff0c\u53c2\u6570\u88ab\u6309\u7167\u9884\u671f\u6821\u9a8c\uff0c\u9875\u9762\u8f93\u51fa\u7ed3\u679c\u540c\u6837\u7b26\u5408\u9884\u671f"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img_2.png",src:r(35018).A+"",width:"730",height:"224"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b66\u4e60\u603b\u7ed3",children:"\u5b66\u4e60\u603b\u7ed3"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4f1a\u4e86\u901a\u8fc7\u7ed3\u6784\u5316\u8bf7\u6c42\u5bf9\u8c61\u7684\u65b9\u5f0f\u6765\u89c4\u907f\u53c2\u6570\u540d\u79f0\u786c\u7f16\u7801\u7684\u95ee\u9898\uff0c\n\u4e5f\u80fd\u5f88\u597d\u5730\u7ef4\u62a4\u53c2\u6570\u7684\u540d\u79f0\u3001\u63cf\u8ff0\u548c\u7c7b\u578b\u5b9a\u4e49\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u5728\u8be5\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u540c\u6837\u6709\u503c\u5f97\u6539\u8fdb\u7684\u5730\u65b9\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5176\u4e2d\u7684",(0,t.jsx)(n.code,{children:"r.Parse"}),"\u662f\u5c5e\u4e8e\u4e1a\u52a1\u65e0\u5173\u7684\u64cd\u4f5c\uff0c\u7406\u5e94\u5f53\u72ec\u7acb\u4e8e\u4e1a\u52a1\u903b\u8f91\u4e4b\u5916\u5904\u7406\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u63a5\u53e3\u6bd4\u8f83\u591a\u7684\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7684\u63a5\u53e3\u4e2d\u90fd\u8981\u91cd\u590d\u8fdb\u884c",(0,t.jsx)(n.code,{children:"r.Parse"}),"\u64cd\u4f5c\uff0c\u6bd4\u8f83\u7e41\u7410\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5173\u4e8e\u6570\u636e\u6821\u9a8c\uff0c\u5982\u679c\u63a5\u53e3\u7684\u53c2\u6570\u6bd4\u8f83\u591a\uff0c\u8fdb\u884c\u5927\u91cf\u7684",(0,t.jsx)(n.code,{children:"if"}),"\u6570\u636e\u6821\u9a8c\u64cd\u4f5c\u592a\u8fc7\u4e8e\u7e41\u7410\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u662f\u5426\u6709\u66f4\u597d\u7684\u65b9\u5f0f\u6765\u7b80\u5316\u5e76\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u5462\uff1f\u7b54\u6848\u662f\u80af\u5b9a\u7684\uff0c\u6211\u4eec\u4e0b\u4e00\u4e2a\u7ae0\u8282\u5c1d\u8bd5\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},60530:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/img-0c2fc34c17e9ca5ab24ca490b332cc85.png"},35018:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/img_2-d1bceea3752c3a5f31dab695c6bc36ec.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(96540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);