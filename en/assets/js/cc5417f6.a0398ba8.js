"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[70306],{725496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6838\u5fc3\u7ec4\u4ef6","title":"\u6838\u5fc3\u7ec4\u4ef6(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","description":"\u6838\u5fc3\u7ec4\u4ef6\u662f GoFrame \u6846\u67b6\u7684\u6838\u5fc3\u7ec4\u6210\u90e8\u5206\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6838\u5fc3\u7ec4\u4ef6.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6","slug":"/docs/core","permalink":"/en/docs/core","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6838\u5fc3\u7ec4\u4ef6.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/core","title":"\u6838\u5fc3\u7ec4\u4ef6(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","sidebar_position":4,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u5de5\u5177\u5e2e\u52a9-help","permalink":"/en/docs/cli/help"},"next":{"title":"\u5bf9\u8c61\u7ba1\u7406","permalink":"/en/docs/core/g"}}');var o=n(474848),s=n(28453),c=n(744074);const i={slug:"/docs/core",title:"\u6838\u5fc3\u7ec4\u4ef6(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",sidebar_position:4,hide_title:!0},l=void 0,a={},d=[];function u(e){const t={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u6838\u5fc3\u7ec4\u4ef6\u662f ",(0,o.jsx)(t.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u6838\u5fc3\u7ec4\u6210\u90e8\u5206\u3002"]}),"\n","\n",(0,o.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},744074:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(296540),o=n(634164),s=n(291054),c=n(314783),i=n(597639);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var p=n(940877),f=n(923230),h=n(985225);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(474848);function j(e){let{href:t,children:n}=e;return(0,x.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function b(e){let{href:t,icon:n,title:r,description:s}=e;return(0,x.jsxs)(j,{href:t,children:[(0,x.jsxs)(h.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function w(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,p.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(b,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(y,{item:t});case"category":return(0,x.jsx)(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function F(e){let{className:t}=e;const n=(0,s.$S)();return(0,x.jsx)(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(F,{...e});const r=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(v,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);