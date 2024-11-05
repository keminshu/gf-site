"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[93566],{725390:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027","description":"ORM \u7a7a\u8dd1\u53ef\u4ee5\u901a\u8fc7 DryRun \u914d\u7f6e\u9879\u6765\u542f\u7528\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002\u5f53 ORM \u7684\u7a7a\u8dd1\u7279\u6027\u5f00\u542f\u65f6\uff0c\u8bfb\u53d6\u64cd\u4f5c\u5c06\u4f1a\u63d0\u4ea4\uff0c\u800c\u5199\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\u64cd\u4f5c\u5c06\u4f1a\u88ab\u5ffd\u7565\u3002\u8be5\u7279\u6027\u5f80\u5f80\u7ed3\u5408\u8c03\u8bd5\u6a21\u5f0f\u548c\u65e5\u5fd7\u8f93\u51fa\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u6821\u9a8c\u5f53\u524d\u7684\u7a0b\u5e8f\uff08\u7279\u522b\u662f\u811a\u672c\uff09\u6267\u884c\u7684 SQL \u662f\u5426\u7b26\u5408\u9884\u671f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5f00\u542f\u4e86\u7a7a\u8dd1\u7279\u6027\u7684\u914d\u7f6e\u793a\u4f8b\uff1a","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/docs/core/gdb-senior-dry-run","permalink":"/en/docs/core/gdb-senior-dry-run","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/core/gdb-senior-dry-run","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027","sidebar_position":5,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04","permalink":"/en/docs/core/gdb-senior-fields-mapping"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b","permalink":"/en/docs/core/gdb-senior-type-recognization"}}');var t=r(474848),o=r(28453);const d={slug:"/docs/core/gdb-senior-dry-run",title:"ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027",sidebar_position:5,hide_title:!0},c=void 0,i={},l=[];function a(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ORM"})," \u7a7a\u8dd1\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"DryRun"})," \u914d\u7f6e\u9879\u6765\u542f\u7528\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002\u5f53 ",(0,t.jsx)(n.code,{children:"ORM"})," \u7684\u7a7a\u8dd1\u7279\u6027\u5f00\u542f\u65f6\uff0c\u8bfb\u53d6\u64cd\u4f5c\u5c06\u4f1a\u63d0\u4ea4\uff0c\u800c\u5199\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\u64cd\u4f5c\u5c06\u4f1a\u88ab\u5ffd\u7565\u3002\u8be5\u7279\u6027\u5f80\u5f80\u7ed3\u5408\u8c03\u8bd5\u6a21\u5f0f\u548c\u65e5\u5fd7\u8f93\u51fa\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u6821\u9a8c\u5f53\u524d\u7684\u7a0b\u5e8f\uff08\u7279\u522b\u662f\u811a\u672c\uff09\u6267\u884c\u7684 ",(0,t.jsx)(n.code,{children:"SQL"})," \u662f\u5426\u7b26\u5408\u9884\u671f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5f00\u542f\u4e86\u7a7a\u8dd1\u7279\u6027\u7684\u914d\u7f6e\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'database:\n  default:\n  - link:   "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    debug:  true\n    dryRun: true\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7a7a\u8dd1\u7279\u6027\u4e5f\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u6216\u8005\u73af\u5883\u53d8\u91cf\u5168\u5c40\u4fee\u6539\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u547d\u4ee4\u884c\u542f\u52a8\u53c2\u6570 - ",(0,t.jsx)(n.code,{children:"gf.gdb.dryrun=true"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6307\u5b9a\u7684\u73af\u5883\u53d8\u91cf - ",(0,t.jsx)(n.code,{children:"GF_GDB_DRYRUN=true"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ ./app --gf.gdb.dryrun=true\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ ./app --gf.gdb.dryrun true\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(296540);const t={},o=s.createContext(t);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);