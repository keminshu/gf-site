"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[34651],{53909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>T,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var o=n(74848),i=n(28453);const s={title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",sidebar_position:3,hide_title:!0},r=void 0,d={id:"\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.6.x/7-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/0-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b.md",sourceDirName:"7-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/0-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",slug:"/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/",permalink:"/gf-site/docs/2.6.x/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/7-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/0-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:3,frontMatter:{title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",sidebar_position:3,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b",permalink:"/gf-site/docs/2.6.x/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b"},next:{title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-Baggage",permalink:"/gf-site/docs/2.6.x/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-Baggage"}},c={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(t.p,{children:["\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e24\u4e2a\u793a\u4f8b\uff0c\u4e00\u4e2a\u7528\u4e8e\u6f14\u793a ",(0,o.jsx)(t.code,{children:"baggage"})," \u670d\u52a1\u95f4\u4e0a\u4e0b\u6587\u6570\u636e\u4f20\u9012\uff1b\u4e00\u4e2a\u7528\u4e8e\u6f14\u793a\u8f83\u5b8c\u6574\u7684 ",(0,o.jsx)(t.code,{children:"HTTP+DB+Redis+Logging"})," \u7ec4\u4ef6\u7684\u94fe\u8def\u8ddf\u8e2a\u3002"]})]})}function T(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);