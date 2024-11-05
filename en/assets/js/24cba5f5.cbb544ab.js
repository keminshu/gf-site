"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[95375],{908827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-gset","title":"\u96c6\u5408\u7c7b\u578b-gset","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-gset.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset","slug":"/docs/components/container-gset","permalink":"/en/docs/components/container-gset","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-gset.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/components/container-gset","title":"\u96c6\u5408\u7c7b\u578b-gset","sidebar_position":2,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u6570\u7ec4\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/en/docs/components/container-garray-funcs"},"next":{"title":"\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/en/docs/components/container-gset-example"}}');var r=n(474848),o=n(28453),c=n(744074);const i={slug:"/docs/components/container-gset",title:"\u96c6\u5408\u7c7b\u578b-gset",sidebar_position:2,hide_title:!0},l=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsx)(t.p,{children:"\u96c6\u5408\uff0c\u5373\u4e0d\u53ef\u91cd\u590d\u7684\u4e00\u7ec4\u5143\u7d20\uff0c\u5143\u7d20\u9879\u53ef\u4ee5\u4e3a\u4efb\u610f\u7c7b\u578b\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u540c\u65f6\uff0c ",(0,r.jsx)(t.code,{children:"gset"})," \u652f\u6301\u53ef\u9009\u7684\u5e76\u53d1\u5b89\u5168\u53c2\u6570\u9009\u9879\uff0c\u652f\u6301\u5e76\u53d1\u5b89\u5168\u7684\u573a\u666f\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,r.jsx)(t.p,{children:"\u96c6\u5408\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/gset"\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gset",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gset"})]}),"\n",(0,r.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,r.jsx)(c.A,{})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},744074:(e,t,n)=>{n.d(t,{A:()=>N});var s=n(296540),r=n(634164),o=n(291054),c=n(314783),i=n(597639);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function g(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return s[Math.min(o,s.length-1)]}(n,t,e)}}var p=n(940877),m=n(923230),h=n(985225);const f={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(474848);function j(e){let{href:t,children:n}=e;return(0,x.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",f.cardContainer),children:n})}function v(e){let{href:t,icon:n,title:s,description:o}=e;return(0,x.jsxs)(j,{href:t,children:[(0,x.jsxs)(h.A,{as:"h2",className:(0,r.A)("text--truncate",f.cardTitle),title:s,children:[n," ",s]}),o&&(0,x.jsx)("p",{className:(0,r.A)("text--truncate",f.cardDescription),title:o,children:o})]})}function b(e){let{item:t}=e;const n=(0,o.Nr)(t),s=function(){const{selectMessage:e}=g();return t=>e(t,(0,m.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,p.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.cC)(t.docId??void 0);return(0,x.jsx)(v,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(y,{item:t});case"category":return(0,x.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const n=(0,o.$S)();return(0,x.jsx)(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(w,{...e});const s=(0,o.d1)(t);return(0,x.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(k,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(296540);const r={},o=s.createContext(r);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);