"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[40933],{572811:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b","description":"\u4f7f\u7528 GoFrame ORM \u67e5\u8be2\u6570\u636e\u65f6\uff0c\u7531\u4e8e\u5b57\u6bb5\u503c\u662f\u4e00\u4e2a\u6cdb\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5230 Go \u53d8\u91cf\u7c7b\u578b\uff0c\u4f5c\u4e3a\u6cdb\u578b\u7684\u5177\u4f53\u503c\u3002","source":"@site/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b","permalink":"/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027","permalink":"/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362","permalink":"/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362"}}');var c=s(474848),n=s(28453);const r={title:"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b",sidebar_position:4,hide_title:!0},i=void 0,l={},o=[];function h(e){const d={a:"a",code:"code",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(d.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(d.code,{children:"GoFrame ORM"})," \u67e5\u8be2\u6570\u636e\u65f6\uff0c\u7531\u4e8e\u5b57\u6bb5\u503c\u662f\u4e00\u4e2a\u6cdb\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5230 ",(0,c.jsx)(d.code,{children:"Go"})," \u53d8\u91cf\u7c7b\u578b\uff0c\u4f5c\u4e3a\u6cdb\u578b\u7684\u5177\u4f53\u503c\u3002"]}),"\n",(0,c.jsx)(d.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,c.jsxs)(d.ul,{children:["\n",(0,c.jsxs)(d.li,{children:["\u5f53\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,c.jsx)(d.code,{children:"int(xx)"})," \u65f6\uff0c\u67e5\u8be2\u5230\u7684\u5b57\u6bb5\u503c\u7c7b\u578b\u5c06\u4f1a\u88ab\u8bc6\u522b\u4f1a ",(0,c.jsx)(d.code,{children:"int"})," \u7c7b\u578b"]}),"\n",(0,c.jsxs)(d.li,{children:["\u5f53\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,c.jsx)(d.code,{children:"varchar(xxx)"}),"/ ",(0,c.jsx)(d.code,{children:"char(xxx)"}),"/ ",(0,c.jsx)(d.code,{children:"text"})," \u7b49\u7c7b\u578b\u65f6\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u4e3a ",(0,c.jsx)(d.code,{children:"string"})," \u7c7b\u578b"]}),"\n",(0,c.jsx)(d.li,{children:"\u2026\u2026"}),"\n"]}),"\n",(0,c.jsxs)(d.p,{children:["\u4ee5\u4e0b\u4ee5 ",(0,c.jsx)(d.code,{children:"mysql"})," \u7c7b\u578b\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u6570\u636e\u5e93\u7c7b\u578b\u4e0e ",(0,c.jsx)(d.code,{children:"Go"})," \u53d8\u91cf\u7c7b\u578b\u7684\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5173\u7cfb:"]}),"\n",(0,c.jsxs)(d.p,{children:["\u7248\u672c\u53ef\u80fd\u968f\u65f6\u8fed\u4ee3\u66f4\u65b0\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6e90\u7801 ",(0,c.jsx)(d.a,{href:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_core_structure.go",children:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_core_structure.go"})]}),"\n",(0,c.jsxs)(d.table,{children:[(0,c.jsx)(d.thead,{children:(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.th,{children:"\u6570\u636e\u5e93\u7c7b\u578b"}),(0,c.jsx)(d.th,{children:"Go\u53d8\u91cf\u7c7b\u578b"})]})}),(0,c.jsxs)(d.tbody,{children:[(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"*char"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"string"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"*text"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"string"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"*binary"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"bytes"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"*blob"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"bytes"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"*int"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"int"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"*money"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"float64"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"bit"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"int"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"big_int"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"int64"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"float"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"float64"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"double"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"float64"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"decimal"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"float64"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"bool"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"bool"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"date"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"time.Time"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"datetime"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"time.Time"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"timestamp"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"time.Time"})})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"\u5176\u4ed6"})}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"string"})})]})]})]}),"\n",(0,c.jsxs)(d.p,{children:["\u8fd9\u4e00\u7279\u6027\u5bf9\u4e8e\u9700\u8981\u5c06\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f16\u7801\uff0c\u5e76\u901a\u8fc7\u4f8b\u5982 ",(0,c.jsx)(d.code,{children:"JSON"})," \u65b9\u5f0f\u76f4\u63a5\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u6765\u8bf4\u5c06\u4f1a\u975e\u5e38\u53cb\u597d\u3002"]})]})}function x(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,c.jsx)(d,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>i});var t=s(296540);const c={},n=t.createContext(c);function r(e){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(n.Provider,{value:d},e.children)}}}]);