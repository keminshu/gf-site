"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[26396],{314362:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>M,frontMatter:()=>c,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa","description":"\u6a21\u578b\u521b\u5efa","source":"@site/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa","permalink":"/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","permalink":"/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/"},"next":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58","permalink":"/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58"}}');var r=s(474848),i=s(28453);const c={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa",sidebar_position:0,hide_title:!0},l=void 0,o={},t=[{value:"\u6a21\u578b\u521b\u5efa",id:"\u6a21\u578b\u521b\u5efa",level:2},{value:"<code>Model</code>",id:"model",level:3},{value:"<code>Raw</code>",id:"raw",level:3},{value:"\u94fe\u5f0f\u5b89\u5168",id:"\u94fe\u5f0f\u5b89\u5168",level:2},{value:"\u9ed8\u8ba4\u60c5\u51b5",id:"\u9ed8\u8ba4\u60c5\u51b5",level:3},{value:"<code>Clone</code> \u65b9\u6cd5",id:"clone-\u65b9\u6cd5",level:3},{value:"<code>Safe</code> \u65b9\u6cd5",id:"safe-\u65b9\u6cd5",level:3}];function x(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u6a21\u578b\u521b\u5efa",children:"\u6a21\u578b\u521b\u5efa"}),"\n",(0,r.jsx)(n.h3,{id:"model",children:(0,r.jsx)(n.code,{children:"Model"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Model"})," \u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u57fa\u4e8e\u6570\u636e\u8868\u7684 ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\u3002\u5e38\u89c1\u7684\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"g"})," \u5bf9\u8c61\u7ba1\u7406\u6a21\u5757\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"Model"})," \u65b9\u6cd5\u5728\u9ed8\u8ba4\u7684\u6570\u636e\u5e93\u914d\u7f6e\u4e0a\u521b\u5efa ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'g.Model("user")\n// \u6216\u8005\ng.DB().Model("user")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"DB"})," \u65b9\u6cd5\u5207\u6362\u5f53\u524d\u6a21\u578b\u7684\u6570\u636e\u5e93\u5bf9\u8c61\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'m := g.Model("user")\nm  = m.DB(g.DB("order"))\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u6548\u679c\u4e0e\u4ee5\u4e0b\u64cd\u4f5c\u662f\u4e00\u6837\u7684\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'m := g.DB("user").Model("user")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"raw",children:(0,r.jsx)(n.code,{children:"Raw"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Raw"})," \u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e\u539f\u59cb ",(0,r.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u7684 ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"g"})," \u5bf9\u8c61\u7ba1\u7406\u6a21\u5757\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"ModelRaw"})," \u65b9\u6cd5\u901a\u8fc7\u7ed9\u5b9a\u7684 ",(0,r.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u5728\u9ed8\u8ba4\u7684\u6570\u636e\u5e93\u914d\u7f6e\u4e0a\u521b\u5efa ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'s := "SELECT * FROM `user`"\nm, _ := g.ModelRaw(s).WhereLT("age", 18).Limit(10).OrderAsc("id").All()\n// SELECT * FROM `user` WHERE `age`<18 ORDER BY `id` ASC LIMIT 10\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'s := "SELECT * FROM `user` WHERE `status` IN(?)"\nm, _ := g.ModelRaw(s, g.Slice{1,2,3}).WhereLT("age", 18).Limit(10).OrderAsc("id").All()\n// SELECT * FROM `user` WHERE `status` IN(1,2,3) AND `age`<18 ORDER BY `id` ASC LIMIT 10\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u94fe\u5f0f\u5b89\u5168",children:"\u94fe\u5f0f\u5b89\u5168"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\u94fe\u5f0f\u5b89\u5168"})," \u53ea\u662f\u6a21\u578b\u64cd\u4f5c\u7684\u4e24\u79cd\u65b9\u5f0f\u533a\u522b\uff1a\u4e00\u79cd\u4f1a\u4fee\u6539\u5f53\u524d ",(0,r.jsx)(n.code,{children:"model"})," \u5bf9\u8c61\uff08\u4e0d\u5b89\u5168\uff0c\u9ed8\u8ba4\uff09\uff0c\u4e00\u79cd\u4e0d\u4f1a\uff08\u5b89\u5168\uff09\u4f46\u662f\u6a21\u578b\u5c5e\u6027\u4fee\u6539/\u6761\u4ef6\u53e0\u52a0\u9700\u8981\u4f7f\u7528\u8d4b\u503c\u64cd\u4f5c\uff0c\u4ec5\u6b64\u800c\u5df2\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9ed8\u8ba4\u60c5\u51b5",children:"\u9ed8\u8ba4\u60c5\u51b5"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c ",(0,r.jsx)(n.code,{children:"gdb"})," \u662f ",(0,r.jsx)(n.code,{children:"\u975e\u94fe\u5f0f\u5b89\u5168"})," \u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u94fe\u5f0f\u64cd\u4f5c\u7684\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u90fd\u5c06\u5bf9\u5f53\u524d\u64cd\u4f5c\u7684 ",(0,r.jsx)(n.code,{children:"Model"})," \u5c5e\u6027\u8fdb\u884c\u4fee\u6539\uff0c\u56e0\u6b64\u8be5 ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61 ",(0,r.jsx)(n.strong,{children:"\u4e0d\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528"}),"\u3002\u4f8b\u5982\uff0c\u5f53\u5b58\u5728\u591a\u4e2a\u5206\u5f00\u67e5\u8be2\u7684\u6761\u4ef6\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u4e48\u6765\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'user := g.Model("user")\nuser.Where("status", g.Slice{1,2,3})\nif vip {\n    // \u67e5\u8be2\u6761\u4ef6\u81ea\u52a8\u53e0\u52a0\uff0c\u4fee\u6539\u5f53\u524d\u6a21\u578b\u5bf9\u8c61\n    user.Where("money>=?", 1000000)\n} else {\n    // \u67e5\u8be2\u6761\u4ef6\u81ea\u52a8\u53e0\u52a0\uff0c\u4fee\u6539\u5f53\u524d\u6a21\u578b\u5bf9\u8c61\n    user.Where("money<?",  1000000)\n}\n//  vip: SELECT * FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT * FROM user WHERE status IN(1,2,3) AND money < 1000000\nr, err := user.All()\n//  vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money < 1000000\nn, err := user.Count()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5982\u679c\u662f\u5206\u5f00\u6267\u884c\u94fe\u5f0f\u64cd\u4f5c\uff0c\u94fe\u5f0f\u7684\u6bcf\u4e00\u4e2a\u64cd\u4f5c\u90fd\u4f1a\u4fee\u6539\u5df2\u6709\u7684 ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\uff0c\u67e5\u8be2\u6761\u4ef6\u4f1a\u81ea\u52a8\u53e0\u52a0\uff0c\u56e0\u6b64 ",(0,r.jsx)(n.code,{children:"user"})," \u5bf9\u8c61\u4e0d\u53ef\u91cd\u590d\u4f7f\u7528\uff0c\u5426\u5219\u6761\u4ef6\u4f1a\u4e0d\u505c\u53e0\u52a0\u3002\u5e76\u4e14\u5728\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u4e2d\uff0c\u6bcf\u6b21\u6211\u4eec\u9700\u8981\u64cd\u4f5c ",(0,r.jsx)(n.code,{children:"user"})," \u7528\u6237\u8868\uff0c\u90fd\u5f97\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:'g.DB().Table("user")'})," \u8fd9\u6837\u7684\u8bed\u6cd5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,r.jsx)(n.code,{children:"user"})," \u6a21\u578b\u5bf9\u8c61\uff0c\u76f8\u5bf9\u6765\u8bf4\u4f1a\u6bd4\u8f83\u7e41\u7410\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u57fa\u4e8e\u6027\u80fd\u4ee5\u53caGC\u4f18\u5316\u8003\u8651\uff0c\u6a21\u578b\u5bf9\u8c61\u4e3a ",(0,r.jsx)(n.code,{children:"\u975e\u94fe\u5f0f\u5b89\u5168"}),"\uff0c\u9632\u6b62\u4ea7\u751f\u8fc7\u591a\u7684\u4e34\u65f6\u6a21\u578b\u5bf9\u8c61\u3002",(0,r.jsx)(n.img,{alt:"(\u5fae\u7b11)",src:s(922279).A+"",width:"16",height:"16"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u4f7f\u7528\u7684\u662fcli\u5de5\u5177 ",(0,r.jsx)(n.code,{children:"gen dao"})," \u751f\u6210\u7684 ",(0,r.jsx)(n.code,{children:"dao"}),"\uff0c\u5982 ",(0,r.jsx)(n.code,{children:"user := dao.User.Ctx(ctx)"}),"\uff0c\u6b64\u65f6\u83b7\u53d6\u5230\u7684 ",(0,r.jsx)(n.code,{children:"user"})," ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\u9ed8\u8ba4\u662f\u94fe\u5f0f\u5b89\u5168\u7684\uff08\u5df2\u81ea\u52a8\u8c03\u7528\u8fc7 ",(0,r.jsx)(n.code,{children:".Safe()"}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"clone-\u65b9\u6cd5",children:[(0,r.jsx)(n.code,{children:"Clone"})," \u65b9\u6cd5"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u624b\u52a8\u8c03\u52a8 ",(0,r.jsx)(n.code,{children:"Clone"})," \u65b9\u6cd5\u514b\u9686\u5f53\u524d\u6a21\u578b\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6a21\u578b\u6765\u5b9e\u73b0\u94fe\u5f0f\u5b89\u5168\uff0c\u7531\u4e8e\u662f\u65b0\u7684\u6a21\u578b\u5bf9\u8c61\uff0c\u56e0\u6b64\u5e76\u4e0d\u62c5\u5fc3\u4f1a\u4fee\u6539\u5df2\u6709\u7684\u6a21\u578b\u5bf9\u8c61\u7684\u95ee\u9898\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// \u5b9a\u4e49\u4e00\u4e2a\u7528\u6237\u6a21\u578b\u5355\u4f8b\nuser := g.Model("user")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// \u514b\u9686\u4e00\u4e2a\u65b0\u7684\u7528\u6237\u6a21\u578b\nm := user.Clone()\nm.Where("status", g.Slice{1,2,3})\nif vip {\n    m.Where("money>=?", 1000000)\n} else {\n    m.Where("money<?",  1000000)\n}\n//  vip: SELECT * FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT * FROM user WHERE status IN(1,2,3) AND money < 1000000\nr, err := m.All()\n//  vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money < 1000000\nn, err := m.Count()\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"safe-\u65b9\u6cd5",children:[(0,r.jsx)(n.code,{children:"Safe"})," \u65b9\u6cd5"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u7136\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Safe"})," \u65b9\u6cd5\u8bbe\u7f6e\u5f53\u524d\u6a21\u578b\u4e3a ",(0,r.jsx)(n.code,{children:"\u94fe\u5f0f\u5b89\u5168"})," \u7684\u5bf9\u8c61\uff0c\u540e\u7eed\u7684\u6bcf\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u90fd\u5c06\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\uff0c\u8be5 ",(0,r.jsx)(n.code,{children:"Model"})," \u5bf9\u8c61\u53ef\u91cd\u590d\u4f7f\u7528\u3002\u4f46\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c\u6a21\u578b\u5c5e\u6027\u7684\u4fee\u6539\uff0c\u6216\u8005\u64cd\u4f5c\u6761\u4ef6\u7684\u53e0\u52a0\uff0c\u9700\u8981\u901a\u8fc7\u53d8\u91cf\u8d4b\u503c\u7684\u65b9\u5f0f\uff08 ",(0,r.jsx)(n.code,{children:"m = m.xxx"}),"\uff09\u8986\u76d6\u539f\u6709\u7684\u6a21\u578b\u5bf9\u8c61\u6765\u5b9e\u73b0\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// \u5b9a\u4e49\u4e00\u4e2a\u7528\u6237\u6a21\u578b\u5355\u4f8b\nuser := g.Model("user").Safe()\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'m := user.Where("status", g.Slice{1,2,3})\nif vip {\n    // \u67e5\u8be2\u6761\u4ef6\u901a\u8fc7\u8d4b\u503c\u53e0\u52a0\n    m = m.Where("money>=?", 1000000)\n} else {\n    // \u67e5\u8be2\u6761\u4ef6\u901a\u8fc7\u8d4b\u503c\u53e0\u52a0\n    m = m.Where("money<?",  1000000)\n}\n//  vip: SELECT * FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT * FROM user WHERE status IN(1,2,3) AND money < 1000000\nr, err := m.All()\n//  vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money < 1000000\nn, err := m.Count()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u793a\u4f8b\u4e2d\u7684\u7528\u6237\u6a21\u578b\u5355\u4f8b\u5bf9\u8c61 ",(0,r.jsx)(n.code,{children:"user"})," \u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\uff0c\u800c\u4e0d\u7528\u62c5\u5fc3\u88ab\u201c\u6c61\u67d3\u201d\u7684\u95ee\u9898\u3002\u5728\u8fd9\u79cd\u94fe\u5f0f\u5b89\u5168\u7684\u65b9\u5f0f\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u7528\u6237\u5355\u4f8b\u5bf9\u8c61 ",(0,r.jsx)(n.code,{children:"user"}),"\uff0c\u5e76\u4e14\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u5230\u540e\u7eed\u7684\u5404\u79cd\u67e5\u8be2\u4e2d\u3002\u4f46\u662f\u5b58\u5728\u591a\u4e2a\u67e5\u8be2\u6761\u4ef6\u65f6\uff0c\u6761\u4ef6\u7684\u53e0\u52a0\u9700\u8981\u901a\u8fc7\u6a21\u578b\u8d4b\u503c\u64cd\u4f5c\uff08 ",(0,r.jsx)(n.code,{children:"m = m.xxx"}),"\uff09\u6765\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Safe"})," \u65b9\u6cd5\u6807\u8bb0\u4e4b\u540e\uff0c\u6bcf\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u90fd\u5c06\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4e34\u65f6\u6a21\u578b\u5bf9\u8c61\uff08\u5185\u90e8\u81ea\u52a8\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Clone"})," \u5b9e\u73b0\u6a21\u578b\u514b\u9686\uff09\uff0c\u4ece\u800c\u5b9e\u73b0\u94fe\u5f0f\u5b89\u5168\u3002\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u5728\u6a21\u578b\u64cd\u4f5c\u4e2d\u6bd4\u8f83\u5e38\u89c1\u3002"]})]})}function M(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},922279:(e,n,s)=>{s.d(n,{A:()=>d});const d="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAxNmgxNlYwSDB6Ii8+PC9kZWZzPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTYpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxnIG1hc2s9InVybCgjYikiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTE2IDhBOCA4IDAgMSAwIDAgOGE4IDggMCAwIDAgMTYgMCIgZmlsbD0iI0ZGQ0M0RCIvPjxwYXRoIGQ9Ik00LjY3MyA1LjUwMmMuMDItLjA4LjUyLTEuOTQ2IDMuMzI3LTEuOTQ2IDIuODA4IDAgMy4zMDcgMS44NjYgMy4zMjYgMS45NDZhLjIyMi4yMjIgMCAwIDEtLjM3MS4yMTJjLS4wMDktLjAwOS0uODY5LS44MjUtMi45NTUtLjgyNS0yLjA4NiAwLTIuOTQ3LjgxNi0yLjk1NS44MjVhLjIyNC4yMjQgMCAwIDEtLjI2Ni4wMzUuMjIyLjIyMiAwIDAgMS0uMTA2LS4yNDdNNi40NDQgMTBjMC0uODYtLjQ5Ny0xLjU1Ni0xLjExLTEuNTU2LS42MTQgMC0xLjExMi42OTYtMS4xMTIgMS41NTYgMCAuODYuNDk4IDEuNTU2IDEuMTExIDEuNTU2LjYxNCAwIDEuMTExLS42OTcgMS4xMTEtMS41NTZNMTEuNzc4IDEwYzAtLjg2LS40OTgtMS41NTYtMS4xMTEtMS41NTYtLjYxNCAwLTEuMTExLjY5Ni0xLjExMSAxLjU1NiAwIC44Ni40OTcgMS41NTYgMS4xMSAxLjU1Ni42MTQgMCAxLjExMi0uNjk3IDEuMTEyLTEuNTU2IiBmaWxsPSIjNjY0NTAwIi8+PC9nPjwvZz48L3N2Zz4="},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var d=s(296540);const r={},i=d.createContext(r);function c(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);