"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[78251],{52480:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","title":"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","description":"gcron \u4e0e gtimer \u533a\u522b","source":"@site/versioned_docs/version-2.5.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron","slug":"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","permalink":"/en/2.5.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5b9a\u65f6\u4efb\u52a1-\u6ce8\u610f\u4e8b\u9879","permalink":"/en/2.5.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-\u6ce8\u610f\u4e8b\u9879"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406-gcache","permalink":"/en/2.5.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u7f13\u5b58\u7ba1\u7406-gcache"}}');var i=n(474848),c=n(28453);const s={title:"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer",sidebar_position:4,hide_title:!0},d=void 0,o={},l=[{value:"<code>gcron</code> \u4e0e <code>gtimer</code> \u533a\u522b",id:"gcron-\u4e0e-gtimer-\u533a\u522b",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h2,{id:"gcron-\u4e0e-gtimer-\u533a\u522b",children:[(0,i.jsx)(r.code,{children:"gcron"})," \u4e0e ",(0,i.jsx)(r.code,{children:"gtimer"})," \u533a\u522b"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/en/2.5.x/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E7%B3%BB%E7%BB%9F%E7%9B%B8%E5%85%B3/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1-gcron/",children:"\u5b9a\u65f6\u4efb\u52a1-gcron"})," \u4e0e ",(0,i.jsx)(r.a,{href:"/en/2.5.x/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E7%B3%BB%E7%BB%9F%E7%9B%B8%E5%85%B3/%E5%AE%9A%E6%97%B6%E5%99%A8-gtimer/",children:"\u5b9a\u65f6\u5668-gtimer"})," \u533a\u522b:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"gtimer"})," \u5c5e\u4e8e\u9ad8\u6027\u80fd\u6a21\u5757\uff0c\u662f\u6846\u67b6\u6838\u5fc3\u6a21\u5757\uff0c\u6784\u5efa\u4efb\u4f55\u5b9a\u65f6\u4efb\u52a1\u7684\u57fa\u7840\uff0c\u4efb\u4f55\u65b9\u6cd5\u64cd\u4f5c\u8017\u65f6\u5747\u5728 ",(0,i.jsx)(r.code,{children:"\u7eb3\u79d2"})," \u7ea7\u522b\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"gtimer"})," \u53ef\u9002\u7528\u4e8e\u4efb\u4f55\u7684\u5b9a\u65f6\u4efb\u52a1\u573a\u666f\u4e2d\uff0c\u4f8b\u5982: TCP\u901a\u4fe1\u3001\u6e38\u620f\u5f00\u53d1\u7b49\u573a\u666f\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"gcron"})," \u652f\u6301\u7ecf\u5178\u7684 ",(0,i.jsx)(r.code,{children:"crontab"})," \u5f62\u5f0f\u7684\u5b9a\u65f6\u4efb\u52a1\u8bed\u6cd5\uff0c\u6700\u5c0f\u65f6\u95f4\u8bbe\u5b9a\u95f4\u9694\u4e3a ",(0,i.jsx)(r.code,{children:"\u79d2"}),"\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"gcron"})," \u5e95\u5c42\u5b9e\u73b0\u57fa\u4e8e ",(0,i.jsx)(r.code,{children:"gtimer"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u76f8\u4f3c\u6a21\u5757"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"}),(0,i.jsx)(r.th,{children:"\u6027\u80fd"}),(0,i.jsx)(r.th,{children:"\u7c7bLinux Crontab\u6a21\u5f0f"}),(0,i.jsx)(r.th,{children:"\u5e95\u5c42\u5b9e\u73b0"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/en/2.5.x/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E7%B3%BB%E7%BB%9F%E7%9B%B8%E5%85%B3/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1-gcron/",children:"\u5b9a\u65f6\u4efb\u52a1-gcron"})}),(0,i.jsxs)(r.td,{children:["\u5b9a\u65f6\u4efb\u52a1\u3002",(0,i.jsx)("br",{}),"\u8f83\u4e0a\u5c42\u5c01\u88c5\uff0c\u65f6\u95f4\u523b\u5ea6\u4ee5\u81ea\u7136\u79d2\u4e3a\u5355\u4f4d\u3002"]}),(0,i.jsx)(r.td,{children:"\u4e00\u822c"}),(0,i.jsx)(r.td,{children:"\u652f\u6301"}),(0,i.jsxs)(r.td,{children:["\u57fa\u4e8e ",(0,i.jsx)(r.code,{children:"gtimer"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/en/2.5.x/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E7%B3%BB%E7%BB%9F%E7%9B%B8%E5%85%B3/%E5%AE%9A%E6%97%B6%E5%99%A8-gtimer/",children:"\u5b9a\u65f6\u5668-gtimer"})}),(0,i.jsxs)(r.td,{children:["\u5b9a\u65f6\u5668\u3002",(0,i.jsx)("br",{}),"\u5e95\u5c42\u7ec4\u4ef6\uff0c\u65f6\u95f4\u523b\u5ea6\u4ee5\u65f6\u95f4\u69fd\u4e3a\u5355\u4f4d\uff08\u65f6\u95f4\u69fd\u53ef\u81ea\u5b9a\u4e49\uff09\u3002"]}),(0,i.jsx)(r.td,{children:"\u9ad8\u6548"}),(0,i.jsx)(r.td,{children:"\u4e0d\u652f\u6301"}),(0,i.jsxs)(r.td,{children:["\u57fa\u4e8e ",(0,i.jsx)(r.code,{children:"PriorityQueue"})," \u6570\u636e\u7ed3\u6784\u81ea\u5b9e\u73b0"]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>d});var t=n(296540);const i={},c=t.createContext(i);function s(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);