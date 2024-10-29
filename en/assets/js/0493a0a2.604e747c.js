"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[94057],{73536:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=c(74848),d=c(28453);const r={title:"ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b",sidebar_position:0,hide_title:!0},t=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b",title:"ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b",description:"\u4e00\u3001\u6570\u636e\u7ed3\u6784",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/4-ORM\u7ed3\u679c\u5904\u7406/0-ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/4-ORM\u7ed3\u679c\u5904\u7406",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b",permalink:"/gf-site/en/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/4-ORM\u7ed3\u679c\u5904\u7406/0-ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:0,frontMatter:{title:"ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b",sidebar_position:0,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"ORM\u7ed3\u679c\u5904\u7406",permalink:"/gf-site/en/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/"},next:{title:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad",permalink:"/gf-site/en/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad"}},o={},l=[{value:"\u4e00\u3001\u6570\u636e\u7ed3\u6784",id:"\u4e00\u6570\u636e\u7ed3\u6784",level:2},{value:"\u4e8c\u3001 <code>Record</code> \u6570\u636e\u8bb0\u5f55",id:"\u4e8c-record-\u6570\u636e\u8bb0\u5f55",level:2},{value:"\u4e09\u3001 <code>Result</code> \u6570\u636e\u96c6\u5408",id:"\u4e09-result-\u6570\u636e\u96c6\u5408",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u4e00\u6570\u636e\u7ed3\u6784",children:"\u4e00\u3001\u6570\u636e\u7ed3\u6784"}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u8be2\u7ed3\u679c\u7684\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"type Value  = *gvar.Var              // \u8fd4\u56de\u6570\u636e\u8868\u8bb0\u5f55\u503c\ntype Record   map[string]Value       // \u8fd4\u56de\u6570\u636e\u8868\u8bb0\u5f55\u952e\u503c\u5bf9\ntype Result   []Record               // \u8fd4\u56de\u6570\u636e\u8868\u8bb0\u5f55\u5217\u8868\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Value/Record/Result"})," \u7528\u4e8eORM\u64cd\u4f5c\u7684\u7ed3\u679c\u6570\u636e\u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Result"})," \u8868\u793a ",(0,s.jsx)(n.strong,{children:"\u6570\u636e\u8868\u8bb0\u5f55\u5217\u8868"}),"\uff0c ",(0,s.jsx)(n.code,{children:"Record"})," \u8868\u793a ",(0,s.jsx)(n.strong,{children:"\u4e00\u6761\u6570\u636e\u8868\u8bb0\u5f55"}),"\uff0c ",(0,s.jsx)(n.code,{children:"Value"})," \u8868\u793a\u8bb0\u5f55\u4e2d\u7684 ",(0,s.jsx)(n.strong,{children:"\u4e00\u6761\u952e\u503c\u6570\u636e"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Value"})," \u662f ",(0,s.jsx)(n.code,{children:"*gvar.Var"})," \u7c7b\u578b\u7684\u522b\u540d\u7c7b\u578b\uff0c\u662f\u4e00\u4e2a\u8fd0\u884c\u65f6\u6cdb\u578b\uff0c\u4ee5\u4fbf\u652f\u6301\u6570\u636e\u8868\u4e0d\u540c\u7684\u5b57\u6bb5\u7c7b\u578b\uff0c\u65b9\u4fbf\u4e8e\u540e\u7eed\u7684\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e3e\u4e2a\ud83c\udf30\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:c(83726).A+"",width:"2268",height:"452"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:c(45913).A+"",width:"2212",height:"440"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:c(73889).A+"",width:"2204",height:"448"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u4e8c-record-\u6570\u636e\u8bb0\u5f55",children:["\u4e8c\u3001 ",(0,s.jsx)(n.code,{children:"Record"})," \u6570\u636e\u8bb0\u5f55"]}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gdb"})," \u4e3a\u6570\u636e\u8868\u8bb0\u5f55\u64cd\u4f5c\u63d0\u4f9b\u4e86\u6781\u9ad8\u7684\u7075\u6d3b\u6027\u548c\u7b80\u4fbf\u6027\uff0c\u9664\u4e86\u652f\u6301\u4ee5 ",(0,s.jsx)(n.code,{children:"map"})," \u7684\u5f62\u5f0f\u8bbf\u95ee/\u64cd\u4f5c\u6570\u636e\u8868\u8bb0\u5f55\u4ee5\u5916\uff0c\u4e5f\u652f\u6301\u5c06\u6570\u636e\u8868\u8bb0\u5f55\u8f6c\u6362\u4e3a ",(0,s.jsx)(n.code,{children:"struct"})," \u8fdb\u884c\u5904\u7406\u3002\u6211\u4eec\u4ee5\u4e0b\u4f7f\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u6765\u6f14\u793a\u8be5\u7279\u6027\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u7684\u7528\u6237\u8868\u7ed3\u6784\u662f\u8fd9\u6837\u7684\uff08\u7b80\u5355\u8bbe\u8ba1\u7684\u793a\u4f8b\u8868\uff09\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CREATE TABLE `user` (\n  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '\u6635\u79f0',\n  `site` varchar(255) NOT NULL DEFAULT '' COMMENT '\u4e3b\u9875',\n  PRIMARY KEY (`uid`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u6b21\uff0c\u6211\u4eec\u7684\u8868\u6570\u636e\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"uid  name   site\n1    john   https://goframe.org\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u540e\uff0c\u6211\u4eec\u7684\u793a\u4f8b\u7a0b\u5e8f\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\ntype User struct {\n\tUid  int\n\tName string\n}\n\nfunc main() {\n\tvar (\n\t\tuser *User\n\t\tctx  = gctx.New()\n\t)\n\terr := g.DB().Model("user").Where("uid", 1).Scan(&user)\n\tif err != nil {\n\t\tg.Log().Header(false).Fatal(ctx, err)\n\t}\n\tif user != nil {\n\t\tg.Log().Header(false).Print(ctx, user)\n\t}\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{"Uid":1,"Name":"john"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c\u6211\u4eec\u81ea\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"struct"}),"\uff0c\u91cc\u9762\u53ea\u5305\u542b\u4e86 ",(0,s.jsx)(n.code,{children:"Uid"})," \u548c ",(0,s.jsx)(n.code,{children:"Name"})," \u5c5e\u6027\uff0c\u53ef\u4ee5\u770b\u5230\u5b83\u7684\u5c5e\u6027\u5e76\u4e0d\u548c\u6570\u636e\u8868\u7684\u5b57\u6bb5\u4e00\u81f4\uff0c\u8fd9\u4e5f\u662f ",(0,s.jsx)(n.code,{children:"ORM"})," \u7075\u6d3b\u7684\u7279\u6027\u4e4b\u4e00\uff1a\u652f\u6301\u6307\u5b9a\u5c5e\u6027\u83b7\u53d6\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"gdb.Model.Scan"})," \u65b9\u6cd5\u53ef\u4ee5\u5c06\u67e5\u8be2\u5230\u7684\u6570\u636e\u8bb0\u5f55\u8f6c\u6362\u4e3a ",(0,s.jsx)(n.code,{children:"struct"})," \u5bf9\u8c61\u6216\u8005 ",(0,s.jsx)(n.code,{children:"struct"})," \u5bf9\u8c61\u6570\u7ec4\u3002\u7531\u4e8e\u8fd9\u91cc\u4f20\u9012\u7684\u53c2\u6570\u4e3a ",(0,s.jsx)(n.code,{children:"&user"})," \u5373 ",(0,s.jsx)(n.code,{children:"**User"})," \u7c7b\u578b\uff0c\u90a3\u4e48\u5c06\u4f1a\u8f6c\u6362\u4e3a\u4e00\u4e2a ",(0,s.jsx)(n.strong,{children:"\u7ed3\u6784\u4f53\u5bf9\u8c61"}),"\uff0c\u5982\u679c\u4f20\u9012\u4e3a ",(0,s.jsx)(n.code,{children:"[]*User"})," \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u5c06\u4f1a\u8f6c\u6362\u4e3a ",(0,s.jsx)(n.strong,{children:"\u7ed3\u6784\u4f53\u6570\u7ec4"})," \u7ed3\u679c\uff0c\u8bf7\u67e5\u770b\u540e\u7eed\u793a\u4f8b\u3002\u5177\u4f53\u65b9\u6cd5\u4ecb\u7ecd\u8bf7\u67e5\u770b\u94fe\u5f0f\u64cd\u4f5c\u7ae0\u8282\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5c5e\u6027\u5b57\u6bb5\u6620\u5c04\u89c4\u5219\uff1a"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c ",(0,s.jsx)(n.code,{children:"map"})," \u4e2d\u7684\u952e\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"uid,name,site"}),"\uff0c\u800c ",(0,s.jsx)(n.code,{children:"struct"})," \u4e2d\u7684\u5c5e\u6027\u4e3a ",(0,s.jsx)(n.code,{children:"Uid,Name"}),"\uff0c\u90a3\u4e48\u4ed6\u4eec\u4e4b\u95f4\u662f\u5982\u4f55\u6267\u884c\u6620\u5c04\u7684\u5462\uff1f\u4e3b\u8981\u662f\u4ee5\u4e0b\u51e0\u70b9\u7b80\u5355\u7684\u89c4\u5219\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"struct"})," \u4e2d\u9700\u8981\u5339\u914d\u7684\u5c5e\u6027\u5fc5\u987b\u4e3a ",(0,s.jsx)(n.code,{children:"\u516c\u5f00\u5c5e\u6027"}),"(\u9996\u5b57\u6bcd\u5927\u5199)\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8bb0\u5f55\u7ed3\u679c\u4e2d\u952e\u540d\u4f1a\u81ea\u52a8\u6309\u7167 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"\u4e0d\u533a\u5206\u5927\u5c0f\u5199"})})," \u4e14 ",(0,s.jsxs)(n.strong,{children:["\u5ffd\u7565 ",(0,s.jsx)(n.code,{children:"-/_/\u7a7a\u683c"})," \u7b26\u53f7"]})," \u7684\u5f62\u5f0f\u4e0e ",(0,s.jsx)(n.code,{children:"struct"})," \u5c5e\u6027\u8fdb\u884c\u5339\u914d\uff1b"]}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u90a3\u4e48\u5c06\u952e\u503c\u8d4b\u503c\u7ed9\u5c5e\u6027\uff0c\u5982\u679c\u65e0\u6cd5\u5339\u914d\uff0c\u90a3\u4e48\u5ffd\u7565\u8be5\u952e\u503c\uff1b"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u51e0\u4e2a\u5339\u914d\u7684\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u8bb0\u5f55\u952e\u540d    struct\u5c5e\u6027     \u662f\u5426\u5339\u914d\nname       Name           match\nEmail      Email          match\nnickname   NickName       match\nNICKNAME   NickName       match\nNick-Name  NickName       match\nnick_name  NickName       match\nnick_name  Nick_Name      match\nNickName   Nick_Name      match\nNick-Name  Nick_Name      match\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u6570\u636e\u5e93\u7ed3\u679c\u96c6\u8f6c ",(0,s.jsx)(n.code,{children:"struct"})," \u7684\u5e95\u5c42\u662f\u4f9d\u9760 ",(0,s.jsx)(n.code,{children:"gconv.Struct"})," \u65b9\u6cd5\u5b9e\u73b0\u7684\uff0c\u56e0\u6b64\u5982\u679c\u60f3\u8981\u5b9e\u73b0 ",(0,s.jsx)(n.strong,{children:"\u81ea\u5b9a\u4e49\u7684\u5c5e\u6027\u8f6c\u6362"}),"\uff0c\u4ee5\u53ca\u66f4\u8be6\u7ec6\u7684\u6620\u5c04\u89c4\u5219\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/docs/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-Struct%E8%BD%AC%E6%8D%A2",children:"\u7c7b\u578b\u8f6c\u6362-Struct\u8f6c\u6362"})," \u7ae0\u8282\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u4e09-result-\u6570\u636e\u96c6\u5408",children:["\u4e09\u3001 ",(0,s.jsx)(n.code,{children:"Result"})," \u6570\u636e\u96c6\u5408"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Result/Record"})," \u6570\u636e\u7c7b\u578b\u6839\u636e\u6570\u636e\u7ed3\u679c\u96c6\u64cd\u4f5c\u7684\u9700\u8981\uff0c\u5f80\u5f80\u9700\u8981\u6839\u636e\u8bb0\u5f55\u4e2d ",(0,s.jsx)(n.strong,{children:"\u7279\u5b9a\u7684\u5b57\u6bb5"})," \u4f5c\u4e3a\u952e\u540d\u8fdb\u884c\u6570\u636e\u68c0\u7d22\uff0c\u56e0\u6b64\u5b83\u5305\u542b\u591a\u4e2a\u7528\u4e8e\u8f6c\u6362 ",(0,s.jsx)(n.code,{children:"Map/List"})," \u7684\u65b9\u6cd5\uff0c\u540c\u65f6\u4e5f\u5305\u542b\u4e86\u5e38\u7528\u6570\u636e\u7ed3\u6784 ",(0,s.jsx)(n.code,{children:"JSON/XML"})," \u7684\u8f6c\u6362\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u65b9\u6cd5\u6bd4\u8f83\u7b80\u5355\uff0c\u8fd9\u91cc\u4fbf\u4e0d\u518d\u4e3e\u4f8b\u8bf4\u660e\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u4e24\u4e2a\u65b9\u6cd5 ",(0,s.jsx)(n.code,{children:"Record.Map"})," \u53ca ",(0,s.jsx)(n.code,{children:"Result.List"}),"\uff0c\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u4e5f\u662f\u4f7f\u7528\u6bd4\u8f83\u9891\u7e41\u7684\u65b9\u6cd5\uff0c\u7528\u4ee5\u5c06 ",(0,s.jsx)(n.code,{children:"ORM"})," \u67e5\u8be2\u7ed3\u679c\u4fe1\u606f\u8f6c\u6362\u4e3a\u53ef\u505a\u5c55\u793a\u7684\u6570\u636e\u7c7b\u578b\u3002\u7531\u4e8e\u7ed3\u679c\u96c6\u5b57\u6bb5\u503c\u5e95\u5c42\u4e3a ",(0,s.jsx)(n.code,{children:"[]byte"})," \u7c7b\u578b\uff0c\u867d\u7136\u4f7f\u7528\u4e86\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"Value"})," \u7c7b\u578b\u505a\u4e86\u5c01\u88c5\uff0c\u5e76\u4e14\u4e5f\u63d0\u4f9b\u4e86\u6570\u5341\u79cd\u5e38\u89c1\u7684\u7c7b\u578b\u8f6c\u6362\u65b9\u6cd5\uff08\u5177\u4f53\u8bf7\u9605\u8bfb ",(0,s.jsx)(n.a,{href:"/docs/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%B3%9B%E5%9E%8B%E7%B1%BB%E5%9E%8B-gvar",children:"\u6cdb\u578b\u7c7b\u578b-gvar"})," \u7ae0\u8282\uff09\uff0c\u4f46\u662f\u5927\u591a\u6570\u65f6\u5019\u9700\u8981\u76f4\u63a5\u5c06\u7ed3\u679c ",(0,s.jsx)(n.code,{children:"Result"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"Record"})," \u76f4\u63a5\u4f5c\u4e3a ",(0,s.jsx)(n.code,{children:"json"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"xml"})," \u6570\u636e\u7ed3\u6784\u8fd4\u56de\uff0c\u5c31\u9700\u8981\u505a\u8f6c\u6362\u624d\u884c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n\t"database/sql"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\ntype User struct {\n\tUid  int\n\tName string\n\tSite string\n}\n\nfunc main() {\n\tvar (\n\t\tuser []*User\n\t\tctx  = gctx.New()\n\t)\n\terr := g.DB().Model("user").Where("uid", 1).Scan(&user)\n\tif err != nil && err != sql.ErrNoRows {\n\t\tg.Log().Header(false).Fatal(ctx, err)\n\t}\n\tif user != nil {\n\t\tg.Log().Header(false).Print(ctx, user)\n\t}\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[{"Uid":1,"Name":"john","Site":"https://goframe.org"}]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},45913:(e,n,c)=>{c.d(n,{A:()=>s});const s=c.p+"assets/images/73f857180655a5dc19eb8deb79d3a774-23eac3296f477332bac92111bfa42db2.png"},83726:(e,n,c)=>{c.d(n,{A:()=>s});const s=c.p+"assets/images/c4af671f6f43d161fc776afdffaaa047-cedc04da064207c474c509e73e20a187.png"},73889:(e,n,c)=>{c.d(n,{A:()=>s});const s=c.p+"assets/images/d8aedba99def08d9ad5e244dd0bde66a-202fea008f89960ecfef39c6805ee9a7.png"},28453:(e,n,c)=>{c.d(n,{R:()=>t,x:()=>i});var s=c(96540);const d={},r=s.createContext(d);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);