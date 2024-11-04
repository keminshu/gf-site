"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[11698],{751918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362","description":"\u5f53\u6211\u4eec\u9700\u8981\u5c06\u67e5\u8be2\u7684\u7ed3\u679c\u8f6c\u6362\u5230\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u4e2d\uff0c\u65e0\u8bba\u662f\u4f5c\u4e3a\u76f4\u63a5\u8f6c\u6362\u7684\u7c7b\u578b\u8fd8\u662f\u4f5c\u4e3a struct \u7684\u5c5e\u6027\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u7279\u5b9a\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u3002\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003 \u7c7b\u578b\u8f6c\u6362-UnmarshalValue \u7ae0\u8282\u3002","source":"@site/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362","permalink":"/en/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":8,"frontMatter":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362","sidebar_position":8,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301","permalink":"/en/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301"},"next":{"title":"NoSQL Redis","permalink":"/en/2.5.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/"}}');var s=n(474848),i=n(28453);const r={title:"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",sidebar_position:8,hide_title:!0},a=void 0,c={},d=[];function l(e){const t={a:"a",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(t.p,{children:["\u5f53\u6211\u4eec\u9700\u8981\u5c06\u67e5\u8be2\u7684\u7ed3\u679c\u8f6c\u6362\u5230\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u4e2d\uff0c\u65e0\u8bba\u662f\u4f5c\u4e3a\u76f4\u63a5\u8f6c\u6362\u7684\u7c7b\u578b\u8fd8\u662f\u4f5c\u4e3a ",(0,s.jsx)(t.code,{children:"struct"})," \u7684\u5c5e\u6027\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u7279\u5b9a\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u3002\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003 ",(0,s.jsx)(t.a,{href:"/en/2.5.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-UnmarshalValue",children:"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue"})," \u7ae0\u8282\u3002"]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(296540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);