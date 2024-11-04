"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[38872],{251621:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1","title":"ORM\u63a5\u53e3\u5f00\u53d1","description":"gdb \u6a21\u5757\u4f7f\u7528\u4e86\u975e\u5e38\u7075\u6d3b\u4e14\u6269\u5c55\u6027\u5f3a\u7684\u63a5\u53e3\u8bbe\u8ba1\uff0c\u63a5\u53e3\u8bbe\u8ba1\u5141\u8bb8\u5f00\u53d1\u8005\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u81ea\u5b9a\u4e49\u5b9e\u73b0\u548c\u66ff\u6362\u63a5\u53e3\u5b9a\u4e49\u4e2d\u7684\u4efb\u4f55\u65b9\u6cd5\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1","slug":"/docs/core/gdb-interface","permalink":"/docs/core/gdb-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/core/gdb-interface","title":"ORM\u63a5\u53e3\u5f00\u53d1","sidebar_position":8,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362","permalink":"/docs/core/gdb-senior-custom-type-converting"},"next":{"title":"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406","permalink":"/docs/core/gdb-interface-callback"}}');var s=n(474848),r=n(28453);const i={slug:"/docs/core/gdb-interface",title:"ORM\u63a5\u53e3\u5f00\u53d1",sidebar_position:8,hide_title:!0},o=void 0,t={},l=[{value:"<code>DB</code> \u63a5\u53e3",id:"db-\u63a5\u53e3",level:2},{value:"<code>DB</code> \u63a5\u53e3\u5173\u7cfb",id:"db-\u63a5\u53e3\u5173\u7cfb",level:2},{value:"<code>Driver</code> \u63a5\u53e3",id:"driver-\u63a5\u53e3",level:2}];function a(e){const d={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"gdb"})," \u6a21\u5757\u4f7f\u7528\u4e86\u975e\u5e38\u7075\u6d3b\u4e14\u6269\u5c55\u6027\u5f3a\u7684\u63a5\u53e3\u8bbe\u8ba1\uff0c\u63a5\u53e3\u8bbe\u8ba1\u5141\u8bb8\u5f00\u53d1\u8005\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u81ea\u5b9a\u4e49\u5b9e\u73b0\u548c\u66ff\u6362\u63a5\u53e3\u5b9a\u4e49\u4e2d\u7684\u4efb\u4f55\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(d.h2,{id:"db-\u63a5\u53e3",children:[(0,s.jsx)(d.code,{children:"DB"})," \u63a5\u53e3"]}),"\n",(0,s.jsxs)(d.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,s.jsx)(d.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#DB",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#DB"})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"DB"})," \u63a5\u53e3\u662f\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u6838\u5fc3\u63a5\u53e3\uff0c\u4e5f\u662f\u6211\u4eec\u901a\u8fc7 ",(0,s.jsx)(d.code,{children:"ORM"})," \u64cd\u4f5c\u6570\u636e\u5e93\u65f6\u6700\u5e38\u7528\u7684\u63a5\u53e3\uff0c\u8fd9\u91cc\u4e3b\u8981\u5bf9\u63a5\u53e3\u7684\u51e0\u4e2a\u91cd\u8981\u65b9\u6cd5\u505a\u8bf4\u660e\uff1a"]}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"Open"})," \u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u7279\u5b9a\u7684\u6570\u636e\u5e93\u8fde\u63a5\u5bf9\u8c61\uff0c\u8fd4\u56de\u7684\u662f\u6807\u51c6\u5e93\u7684 ",(0,s.jsx)(d.code,{children:"*sql.DB"})," \u901a\u7528\u6570\u636e\u5e93\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"Do*"})," \u7cfb\u5217\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570 ",(0,s.jsx)(d.code,{children:"link"})," \u4e3a ",(0,s.jsx)(d.code,{children:"Link"})," \u63a5\u53e3\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5728 ",(0,s.jsx)(d.code,{children:"master-slave"})," \u6a21\u5f0f\u4e0b\u53ef\u80fd\u662f\u4e00\u4e2a\u4e3b\u8282\u70b9\u5bf9\u8c61\uff0c\u4e5f\u53ef\u80fd\u662f\u4ece\u8282\u70b9\u5bf9\u8c61\uff0c\u56e0\u6b64\u5982\u679c\u5728\u7ee7\u627f\u7684\u9a71\u52a8\u5bf9\u8c61\u5b9e\u73b0\u4e2d\u4f7f\u7528\u8be5 ",(0,s.jsx)(d.code,{children:"link"})," \u53c2\u6570\u65f6\uff0c\u6ce8\u610f\u5f53\u524d\u7684\u8fd0\u884c\u6a21\u5f0f\u3002 ",(0,s.jsx)(d.code,{children:"slave"})," \u8282\u70b9\u5728\u5927\u90e8\u5206\u7684\u6570\u636e\u5e93\u4e3b\u4ece\u6a21\u5f0f\u4e2d\u5f80\u5f80\u662f\u4e0d\u53ef\u5199\u7684\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"HandleSqlBeforeCommit"})," \u65b9\u6cd5\u5c06\u4f1a\u5728\u6bcf\u4e00\u6761 ",(0,s.jsx)(d.code,{children:"SQL"})," \u63d0\u4ea4\u7ed9\u6570\u636e\u5e93\u670d\u52a1\u7aef\u6267\u884c\u65f6\u88ab\u8c03\u7528\u505a\u4e00\u4e9b\u63d0\u4ea4\u524d\u7684\u56de\u8c03\u5904\u7406\u3002"]}),"\n",(0,s.jsx)(d.li,{children:"\u5176\u4ed6\u63a5\u53e3\u65b9\u6cd5\u8be6\u89c1\u63a5\u53e3\u6587\u6863\u6216\u8005\u6e90\u7801\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(d.h2,{id:"db-\u63a5\u53e3\u5173\u7cfb",children:[(0,s.jsx)(d.code,{children:"DB"})," \u63a5\u53e3\u5173\u7cfb"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:n(358331).A+"",width:"2432",height:"1866"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.code,{children:"GoFrame ORM Relations"})}),"\n",(0,s.jsxs)(d.h2,{id:"driver-\u63a5\u53e3",children:[(0,s.jsx)(d.code,{children:"Driver"})," \u63a5\u53e3"]}),"\n",(0,s.jsxs)(d.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,s.jsx)(d.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Driver",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Driver"})]}),"\n",(0,s.jsx)(d.p,{children:"\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u7684\u9a71\u52a8\u9700\u8981\u5b9e\u73b0\u4ee5\u4e0b\u63a5\u53e3\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-go",children:"// Driver is the interface for integrating sql drivers into package gdb.\ntype Driver interface {\n    // New creates and returns a database object for specified database server.\n    New(core *Core, node *ConfigNode) (DB, error)\n}\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u5176\u4e2d\u7684 ",(0,s.jsx)(d.code,{children:"New"})," \u65b9\u6cd5\u7528\u4e8e\u6839\u636e ",(0,s.jsx)(d.code,{children:"Core"})," \u6570\u636e\u5e93\u57fa\u7840\u5bf9\u8c61\u4ee5\u53ca ",(0,s.jsx)(d.code,{children:"ConfigNode"})," \u914d\u7f6e\u5bf9\u8c61\u521b\u5efa\u9a71\u52a8\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd4\u56de\u7684\u6570\u636e\u5e93\u5bf9\u8c61\u9700\u8981\u5b9e\u73b0 ",(0,s.jsx)(d.code,{children:"DB"})," \u63a5\u53e3\u3002\u800c\u6570\u636e\u5e93\u57fa\u7840\u5bf9\u8c61 ",(0,s.jsx)(d.code,{children:"Core"})," \u5df2\u7ecf\u5b9e\u73b0\u4e86 ",(0,s.jsx)(d.code,{children:"DB"})," \u63a5\u53e3\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u53ea\u9700\u8981\u201d\u7ee7\u627f\u201d ",(0,s.jsx)(d.code,{children:"Core"})," \u5bf9\u8c61\uff0c\u7136\u540e\u6839\u636e\u9700\u8981\u8986\u76d6\u5bf9\u5e94\u7684\u63a5\u53e3\u5b9e\u73b0\u65b9\u6cd5\u5373\u53ef\u3002"]})]})}function h(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},358331:(e,d,n)=>{n.d(d,{A:()=>c});const c=n.p+"assets/images/1f5e48cc947e21dbed2745f69254935a-891c603c932080da42159aa53d0f4e68.png"},28453:(e,d,n)=>{n.d(d,{R:()=>i,x:()=>o});var c=n(296540);const s={},r=c.createContext(s);function i(e){const d=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(r.Provider,{value:d},e.children)}}}]);