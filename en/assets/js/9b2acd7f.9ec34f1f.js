"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[55343],{33992:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/NoSQL Redis","title":"NoSQL Redis","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/NoSQL Redis.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/","permalink":"/en/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/NoSQL Redis.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":12,"frontMatter":{"title":"NoSQL Redis","sidebar_position":12,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362","permalink":"/en/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362"},"next":{"title":"Redis-\u914d\u7f6e\u7ba1\u7406","permalink":"/en/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406"}}');var d=n(474848),r=n(28453);const c={title:"NoSQL Redis",sidebar_position:12,hide_title:!0},o=void 0,t={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u7ec4\u4ef6\u7279\u6027",id:"\u7ec4\u4ef6\u7279\u6027",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Redis"})," \u5ba2\u6237\u7aef\u7531 ",(0,d.jsx)(s.code,{children:"gredis"})," \u7ec4\u4ef6\u5b9e\u73b0\uff0c\u5e95\u5c42\u91c7\u7528\u4e86\u94fe\u63a5\u6c60\u8bbe\u8ba1\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1\u901a\u7528\u6027\u548c\u6269\u5c55\u6027\uff0c ",(0,d.jsx)(s.code,{children:"gredis"})," \u7ec4\u4ef6\u91c7\u7528\u4e86 ",(0,d.jsx)(s.strong,{children:"\u547d\u4ee4\u901a\u9053"})," \u7684\u65b9\u5f0f\u6267\u884c ",(0,d.jsx)(s.code,{children:"Redis"})," \u64cd\u4f5c\u3002\u5f53\u60a8\u4e0d\u77e5\u9053\u547d\u4ee4\u901a\u9053\u7684\u53c2\u6570\u5982\u4f55\u4f20\u9012\u65f6\uff0c\u53ef\u4ee5\u53c2\u8003\u7ec8\u7aef\u547d\u4ee4\u884c\u7684\u53c2\u6570\u4f20\u9012\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u548c\u547d\u4ee4\u884c\u7684\u53c2\u6570\u4f20\u9012\u4fdd\u6301\u4e00\u81f4\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/database/gredis"\n'})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"\u7b80\u8981\u4ecb\u7ecd\uff1a"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"gredis"})," \u4f7f\u7528\u4e86\u8fde\u63a5\u6c60\u6765\u8fdb\u884c ",(0,d.jsx)(s.code,{children:"Redis"})," \u8fde\u63a5\u7ba1\u7406\uff0c\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"Config"})," \u914d\u7f6e\u5bf9\u8c61\u6216\u8005 ",(0,d.jsx)(s.code,{children:"Set*"})," \u65b9\u6cd5\u53ef\u4ee5\u5bf9\u8fde\u63a5\u6c60\u7684\u5c5e\u6027\u8fdb\u884c\u7ba1\u7406\uff0c\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"Stats"})," \u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u8fde\u63a5\u6c60\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u6211\u4eec\u6700\u5e38\u7528\u7684\u662f ",(0,d.jsx)(s.code,{children:"Do"})," \u65b9\u6cd5\uff0c\u6267\u884c\u540c\u6b65\u6307\u4ee4\uff0c\u901a\u8fc7\u5411 ",(0,d.jsx)(s.code,{children:"Redis Server"})," \u53d1\u9001\u5bf9\u5e94\u7684 ",(0,d.jsx)(s.code,{children:"Redis API"})," \u547d\u4ee4\uff0c\u6765\u4f7f\u7528 ",(0,d.jsx)(s.code,{children:"Redis Server"})," \u7684\u670d\u52a1\u3002 ",(0,d.jsx)(s.code,{children:"Do"})," \u65b9\u6cd5\u6700\u5927\u7684\u7279\u70b9\u662f\u5185\u90e8\u81ea\u884c\u4ece\u8fde\u63a5\u6c60\u4e2d\u83b7\u53d6\u8fde\u63a5\u5bf9\u8c61\uff0c\u4f7f\u7528\u5b8c\u6bd5\u540e\u81ea\u52a8\u4e22\u56de\u8fde\u63a5\u6c60\u4e2d\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u624b\u52a8\u8c03\u7528 ",(0,d.jsx)(s.code,{children:"Close"})," \u65b9\u6cd5\uff0c\u65b9\u4fbf\u4f7f\u7528\u3002"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"Redis"})," \u4e2d\u6587\u624b\u518c\u8bf7\u53c2\u8003\uff1a ",(0,d.jsx)(s.a,{href:"http://redisdoc.com/",children:"http://redisdoc.com/"})]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"Redis"})," \u5b98\u65b9\u547d\u4ee4\u8bf7\u53c2\u8003\uff1a ",(0,d.jsx)(s.a,{href:"https://redis.io/commands",children:"https://redis.io/commands"})]}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"gredis.Redis"})," \u5ba2\u6237\u7aef\u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,d.jsx)(s.code,{children:"Close"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u7528\u4e8e\u5173\u95ed ",(0,d.jsx)(s.code,{children:"Redis"})," \u5ba2\u6237\u7aef\uff08\u540c\u65f6\u5173\u95ed\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u6c60\uff09\uff0c\u800c\u4e0d\u662f\u8fde\u63a5\u5bf9\u8c61\uff0c\u5f00\u53d1\u8005\u57fa\u672c\u4e0d\u4f1a\u7528\u5230\uff0c\u975e\u9ad8\u7ea7\u73a9\u5bb6\u8bf7\u4e0d\u8981\u4f7f\u7528\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u7ec4\u4ef6\u7279\u6027",children:"\u7ec4\u4ef6\u7279\u6027"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"gredis"})," \u5177\u6709\u4ee5\u4e0b\u663e\u8457\u7279\u6027\uff1a"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u4f7f\u7528\u7b80\u4fbf\uff0c\u529f\u80fd\u5f3a\u5927"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u7edf\u4e00\u914d\u7f6e\u7ec4\u4ef6\u8fdb\u884c\u914d\u7f6e"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u652f\u6301\u5355\u5b9e\u4f8b\u53ca\u96c6\u7fa4\u5316\u64cd\u4f5c"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["\u652f\u6301 ",(0,d.jsx)(s.code,{children:"Redis"})," \u670d\u52a1\u6240\u6709\u7279\u6027"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["\u652f\u6301 ",(0,d.jsx)(s.code,{children:"OpenTelemetry"})," \u53ef\u89c2\u6d4b\u6027"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u652f\u6301\u5355\u4f8b\u5bf9\u8c61\u3001\u4e5f\u652f\u6301\u52a8\u6001\u521b\u5efa\u5bf9\u8c61"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u5f88\u9ad8\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027"}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(296540);const d={},r=i.createContext(d);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);