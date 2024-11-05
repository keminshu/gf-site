"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[22451],{596258:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>i});const d=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-RawSQL","title":"ORM\u9ad8\u7ea7\u7279\u6027-RawSQL","description":"\u7531\u4e8e ORM \u7684\u5b89\u5168\u6027\u4fdd\u969c\uff0c\u6240\u6709\u8f93\u5165\u7684\u53c2\u6570\u5728\u5e95\u5c42\u90fd\u5c06\u4f7f\u7528\u9884\u5904\u7406\u6a21\u5f0f\u6267\u884c\uff0c\u9632\u6b62\u5e38\u89c1\u7684 SQL \u6ce8\u5165\u98ce\u9669\u3002\u5728\u67d0\u4e00\u4e9b\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u671f\u671b\u5728\u751f\u6210\u6267\u884c\u7684SQL\u8bed\u53e5\u4e2d\u5d4c\u5165\u81ea\u5b9a\u4e49\u7684SQL\u8bed\u53e5\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ORM \u7684 RawSQL \u7279\u6027\uff0c\u901a\u8fc7 gdb.Raw \u7c7b\u578b\u6765\u5b9e\u73b0\u3002\u6211\u4eec\u6765\u770b\u51e0\u4e2a\u793a\u4f8b\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-RawSQL.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/docs/core/gdb-senior-raw-sql","permalink":"/en/docs/core/gdb-senior-raw-sql","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-RawSQL.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-senior-raw-sql","title":"ORM\u9ad8\u7ea7\u7279\u6027-RawSQL","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027","permalink":"/en/docs/core/gdb-senior"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-SQL\u6355\u83b7","permalink":"/en/docs/core/gdb-senior-catch-sql"}}');var s=o(474848),c=o(28453);const r={slug:"/docs/core/gdb-senior-raw-sql",title:"ORM\u9ad8\u7ea7\u7279\u6027-RawSQL",sidebar_position:0,hide_title:!0},t=void 0,a={},i=[{value:"\u5728 <code>Insert</code> \u4e2d\u4f7f\u7528 <code>RawSQL</code>",id:"\u5728-insert-\u4e2d\u4f7f\u7528-rawsql",level:2},{value:"\u5728 <code>Update</code> \u4e2d\u4f7f\u7528 <code>RawSQL</code>",id:"\u5728-update-\u4e2d\u4f7f\u7528-rawsql",level:2},{value:"\u5728 <code>Select</code> \u4e2d\u4f7f\u7528 <code>RawSQL</code>",id:"\u5728-select-\u4e2d\u4f7f\u7528-rawsql",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684\u5b89\u5168\u6027\u4fdd\u969c\uff0c\u6240\u6709\u8f93\u5165\u7684\u53c2\u6570\u5728\u5e95\u5c42\u90fd\u5c06\u4f7f\u7528\u9884\u5904\u7406\u6a21\u5f0f\u6267\u884c\uff0c\u9632\u6b62\u5e38\u89c1\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u6ce8\u5165\u98ce\u9669\u3002\u5728\u67d0\u4e00\u4e9b\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u671f\u671b\u5728\u751f\u6210\u6267\u884c\u7684SQL\u8bed\u53e5\u4e2d\u5d4c\u5165\u81ea\u5b9a\u4e49\u7684SQL\u8bed\u53e5\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684 ",(0,s.jsx)(n.code,{children:"RawSQL"})," \u7279\u6027\uff0c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u7c7b\u578b\u6765\u5b9e\u73b0\u3002\u6211\u4eec\u6765\u770b\u51e0\u4e2a\u793a\u4f8b\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u5728-insert-\u4e2d\u4f7f\u7528-rawsql",children:["\u5728 ",(0,s.jsx)(n.code,{children:"Insert"})," \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"RawSQL"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u8be5\u7c7b\u578b\u7684\u53c2\u6570\u5c06\u4f1a\u76f4\u63a5\u4f5c\u4e3a ",(0,s.jsx)(n.code,{children:"SQL"})," \u7247\u6bb5\u5d4c\u5165\u5230\u63d0\u4ea4\u5230\u5e95\u5c42\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u4e2d\uff0c\u4e0d\u4f1a\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u53c2\u6570\u7c7b\u578b\u3001\u4e5f\u4e0d\u4f1a\u88ab\u5f53\u505a\u9884\u5904\u7406\u53c2\u6570\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(\'id+2\',\'john\',\'123456\',\'now()\')\ng.Model("user").Data(g.Map{\n    "id":          "id+2",\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": "now()",\n}).Insert()\n// \u6267\u884c\u62a5\u9519\uff1aError Code: 1136. Column count doesn\'t match value count at row 1\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540e\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(id+2,\'john\',\'123456\',now())\ng.Model("user").Data(g.Map{\n    "id":          gdb.Raw("id+2"),\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": gdb.Raw("now()"),\n}).Insert()\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5728-update-\u4e2d\u4f7f\u7528-rawsql",children:["\u5728 ",(0,s.jsx)(n.code,{children:"Update"})," \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"RawSQL"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET login_count=\'login_count+1\',update_time=\'now()\' WHERE id=1\ng.Model("user").Data(g.Map{\n    "login_count": "login_count+1",\n    "update_time": "now()",\n}).Where("id", 1).Update()\n// \u6267\u884c\u62a5\u9519\uff1aError Code: 1136. Column count doesn\'t match value count at row 1\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540e\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET login_count=login_count+1,update_time=now() WHERE id=1\ng.Model("user").Data(g.Map{\n    "login_count": gdb.Raw("login_count+1"),\n    "update_time": gdb.Raw("now()"),\n}).Where("id", 1).Update()\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5728-select-\u4e2d\u4f7f\u7528-rawsql",children:["\u5728 ",(0,s.jsx)(n.code,{children:"Select"})," \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"RawSQL"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u65f6\u95f4\u51fd\u6570 ",(0,s.jsx)(n.code,{children:"now()"})," \u5c06\u4f1a\u88ab\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u4f5c\u4e3a ",(0,s.jsx)(n.code,{children:"SQL"})," \u53c2\u6570\u6267\u884c\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE `created_at`<\'now()\'\ng.Model("user").WhereLT("created_at", "now()").All()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540e\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE `created_at`<now()\ng.Model("user").WhereLT("created_at", gdb.Raw("now()")).All()\n'})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>t});var d=o(296540);const s={},c=d.createContext(s);function r(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);