"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[78841],{167684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=t(474848),r=t(28453);const s={slug:"/request-input",title:"\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570",hide_title:!0,sidebar_position:1},c=void 0,d={id:"\u5feb\u901f\u5f00\u59cb/\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570",title:"\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570",description:"\u5728\u524d\u9762\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4f1a\u4e86\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684Web Server\u7a0b\u5e8f\u3002",source:"@site/quick/0-\u5feb\u901f\u5f00\u59cb/2-\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570.md",sourceDirName:"0-\u5feb\u901f\u5f00\u59cb",slug:"/request-input",permalink:"/gf-site/quick/request-input",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/quick/0-\u5feb\u901f\u5f00\u59cb/2-\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730181252e3,sidebarPosition:1,frontMatter:{slug:"/request-input",title:"\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570",hide_title:!0,sidebar_position:1},sidebar:"hiddenSidebar",previous:{title:"Hello World",permalink:"/gf-site/quick/hello-world"},next:{title:"\u8bf7\u6c42\u6570\u636e\u7ed3\u6784",permalink:"/gf-site/quick/request-struct"}},l={},o=[{value:"\u53c2\u6570\u793a\u4f8b",id:"\u53c2\u6570\u793a\u4f8b",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:2},{value:"\u5b66\u4e60\u603b\u7ed3",id:"\u5b66\u4e60\u603b\u7ed3",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u5728\u524d\u9762\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4f1a\u4e86\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684",(0,i.jsx)(n.code,{children:"Web Server"}),"\u7a0b\u5e8f\u3002\n\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u5c1d\u8bd5\u7740\u5728",(0,i.jsx)(n.code,{children:"Web Server"}),"\u4e2d\u83b7\u53d6\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u53c2\u6570\u4fe1\u606f\u3002\n\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u6211\u4eec\u4f7f\u7528",(0,i.jsx)(n.code,{children:"Query String"}),"\u7684\u65b9\u5f0f\u6765\u4f20\u9012\u8bf7\u6c42\u53c2\u6570\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u793a\u4f8b",children:"\u53c2\u6570\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u5c06\u4e4b\u524d\u7684",(0,i.jsx)(n.code,{children:"Hello World"}),"\u793a\u4f8b\u7a0b\u5e8f\u8fdb\u884c\u7b80\u5355\u7684\u6539\u9020\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Writef(\n            "Hello %s! Your Age is %d",\n            r.Get("name", "unknown").String(),\n            r.Get("age").Int(),\n        )\n    })\n    s.SetPort(8000)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67b6\u4e2d\uff0c\u83b7\u53d6\u53c2\u6570\u975e\u5e38\u4fbf\u6377\u3002\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7",(0,i.jsx)(n.code,{children:"r.Get"}),"\u65b9\u6cd5\u83b7\u53d6\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u53c2\u6570\uff0c\u8be5\u65b9\u6cd5\u80fd\u591f\u83b7\u53d6\u6240\u6709",(0,i.jsx)(n.code,{children:"HTTP Method"}),"\u63d0\u4ea4\u7684\u53c2\u6570\uff0c\n\u6bd4\u5982",(0,i.jsx)(n.code,{children:"Query String/Form/Body"}),"\u7b49\uff0c\u5176\u5185\u90e8\u5c06\u4f1a\u6839\u636e\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u7c7b\u578b\u81ea\u52a8\u8bc6\u522b\u89e3\u6790\uff0c\u6bd4\u5982\u652f\u6301\u81ea\u52a8\u8bc6\u522b\u53c2\u6570\u683c\u5f0f\u4f8b\u5982",(0,i.jsx)(n.code,{children:"json/xml"}),"\u7b49\u3002\u8be5\u65b9\u6cd5\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func (r *Request) Get(key string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c",(0,i.jsx)(n.code,{children:"Get"}),"\u65b9\u6cd5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u4e3a\u53c2\u6570\u540d\u79f0\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u975e\u5fc5\u987b\u53c2\u6570\uff0c\u8868\u793a\u9ed8\u8ba4\u503c\u3002\u8fd4\u56de\u7ed3\u679c\u4e3a\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"*gvar.Var"}),"\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e3a",(0,i.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67b6\n\u63d0\u4f9b\u7684\u8fd0\u884c\u65f6\u6cdb\u578b\u5bf9\u8c61\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u573a\u666f\u9700\u8981\u5c06\u53c2\u6570\u8f6c\u6362\u4e3a\u5404\u79cd\u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6267\u884c\u7ed3\u679c",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8000/?name=john&age=18",children:"http://127.0.0.1:8000/?name=john&age=18"})," \u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u8f93\u51fa\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:t(560530).A+"",width:"1024",height:"226"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"})," \u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u8f93\u51fa\u7ed3\u679c\u540c\u6837\u7b26\u5408\u9884\u671f\u3002\u5f53\u672a\u4f20\u9012",(0,i.jsx)(n.code,{children:"name"}),"\u53c2\u6570\u65f6\uff0c\u7a0b\u5e8f\u5c06\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u503c",(0,i.jsx)(n.code,{children:"unkhown"}),"\uff0c\u5e76\u4e14",(0,i.jsx)(n.code,{children:"age"}),"\u53c2\u6570\u4f1a\u4f7f\u7528",(0,i.jsx)(n.code,{children:"int"}),"\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c",(0,i.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(63427).A+"",width:"676",height:"216"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5b66\u4e60\u603b\u7ed3",children:"\u5b66\u4e60\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4f1a\u4e86\u5982\u4f55\u5728HTTP\u56de\u8c03\u51fd\u6570\u4e2d\u83b7\u53d6\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u53c2\u6570\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u5927\u5bb6\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u672c\u793a\u4f8b\u7684\u4ee3\u7801\u4e2d\uff0c\u5b58\u5728\u4e00\u4e9b\u663e\u800c\u6613\u89c1\u7684\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\u7684\u63a5\u6536\u4f7f\u7528\u4e86\u786c\u7f16\u7801\u7684\u53c2\u6570\u540d\u79f0\uff0c\n\u5982\u679c\u5728\u771f\u5b9e\u7684\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u5f88\u5bb9\u6613\u7531\u4e8e\u53c2\u6570\u62fc\u5199\u9519\u8bef\u5f15\u53d1\u5f02\u5e38\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u786c\u7f16\u7801\u7684\u53c2\u6570\u540d\u79f0\u4e0d\u80fd\u786e\u5b9a\u4e1a\u52a1\u542b\u4e49\u548c\u6570\u636e\u7c7b\u578b\uff0c\u5f88\u96be\u8fdb\u884c\u957f\u671f\u7ba1\u7406\u7ef4\u62a4\uff0c\n\u4f8b\u5982\u96be\u4ee5\u5bf9\u53c2\u6570\u8fdb\u884c\u63cf\u8ff0\u8bf4\u660e\u3001\u7c7b\u578b\u6821\u9a8c\u7b49\u57fa\u672c\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0b\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c1d\u8bd5\u901a\u8fc7\u7ed3\u6784\u5316\u7684\u53c2\u6570\u5bf9\u8c61\u6765\u89c4\u907f\u8fd9\u4e00\u95ee\u9898\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},63427:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/QQ_1730178667265-2756e74c7ed56021caad46f6071172b0.png"},560530:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img-0c2fc34c17e9ca5ab24ca490b332cc85.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var i=t(296540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);