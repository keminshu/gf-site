"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[25383],{13945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=n(74848),r=n(28453);const o={title:"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301",sidebar_position:9,hide_title:!0},i=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301",title:"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301",description:"GoFrame ORM \u7ec4\u4ef6\u9488\u5bf9\u4e8e struct \u5185\u5d4c\u7ed3\u6784\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u652f\u6301\uff0c\u5305\u62ec\u53c2\u6570\u4f20\u9012\u3001\u7ed3\u679c\u5904\u7406\u3002\u4f8b\u5982\uff1a",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/7-ORM\u9ad8\u7ea7\u7279\u6027/9-ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/7-ORM\u9ad8\u7ea7\u7279\u6027",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301",permalink:"/gf-site/en/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/7-ORM\u9ad8\u7ea7\u7279\u6027/9-ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:9,frontMatter:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301",sidebar_position:9,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001",permalink:"/gf-site/en/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001"},next:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362",permalink:"/gf-site/en/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u81ea\u5b9a\u4e49\u7c7b\u578b\u8f6c\u6362"}},d={},a=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"GoFrame ORM"})," \u7ec4\u4ef6\u9488\u5bf9\u4e8e ",(0,s.jsx)(t.code,{children:"struct"})," \u5185\u5d4c\u7ed3\u6784\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u652f\u6301\uff0c\u5305\u62ec\u53c2\u6570\u4f20\u9012\u3001\u7ed3\u679c\u5904\u7406\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'type Base struct {\n    Uid        int         `orm:"uid"`\n    CreateAt   *gtime.Time `orm:"create_at"`\n    UpdateAt   *gtime.Time `orm:"update_at"`\n    DeleteAt   *gtime.Time `orm:"delete_at"`\n}\ntype User struct {\n    Base\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    Nickname   string `orm:"nickname"`\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u5e76\u4e14\uff0c\u65e0\u8bba\u591a\u5c11\u5c42\u7ea7\u7684 ",(0,s.jsx)(t.code,{children:"struct"})," \u5d4c\u5957\uff0c ",(0,s.jsx)(t.code,{children:"ORM"})," \u7684\u53c2\u6570\u4f20\u9012\u548c\u7ed3\u679c\u5904\u7406\u90fd\u652f\u6301\u3002"]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);