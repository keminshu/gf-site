"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[52255],{768914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531","title":"\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531","slug":"/docs/web/router-registering-strict-router","permalink":"/en/docs/web/router-registering-strict-router","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/web/router-registering-strict-router","title":"\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531","sidebar_position":3,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u8def\u7531\u6ce8\u518c-\u5206\u7ec4\u8def\u7531","permalink":"/en/docs/web/router-registering-group"},"next":{"title":"\u89c4\u8303\u8def\u7531-\u57fa\u672c\u793a\u4f8b","permalink":"/en/docs/web/router-registering-strict-router-example"}}');var s=n(474848),i=n(28453),o=n(744074);const c={slug:"/docs/web/router-registering-strict-router",title:"\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531",sidebar_position:3,hide_title:!0},l=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(t.p,{children:["\u4ece ",(0,s.jsx)(t.code,{children:"v2.0"})," \u7248\u672c\u5f00\u59cb\uff0c\u6846\u67b6\u7684 ",(0,s.jsx)(t.code,{children:"Server"})," \u7ec4\u4ef6\u989d\u5916\u63d0\u4f9b\u4e86\u89c4\u8303\u5316\u7684\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u66f4\u52a0\u9002\u5408\u56e2\u961f\u89c4\u8303\u5316\u7684\u4f7f\u7528\u573a\u666f\u3001\u4e1a\u52a1\u590d\u6742\u5ea6\u66f4\u9ad8\u7684\u9879\u76ee\u3002\u89c4\u8303\u8def\u7531\u5b9e\u73b0\u4e86\u4ee5\u4e0b\u7279\u6027\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u89c4\u8303\u5316 ",(0,s.jsx)(t.code,{children:"API"})," \u6309\u7167\u7ed3\u6784\u5316\u7f16\u7a0b\u8bbe\u8ba1"]}),"\n",(0,s.jsxs)(t.li,{children:["\u89c4\u8303\u5316 ",(0,s.jsx)(t.code,{children:"API"})," \u63a5\u53e3\u65b9\u6cd5\u53c2\u6570\u98ce\u683c\u5b9a\u4e49"]}),"\n",(0,s.jsx)(t.li,{children:"\u66f4\u52a0\u7b80\u5316\u7684\u8def\u7531\u6ce8\u518c\u4e0e\u7ef4\u62a4"}),"\n",(0,s.jsx)(t.li,{children:"\u7edf\u4e00\u63a5\u53e3\u8fd4\u56de\u6570\u636e\u683c\u5f0f\u8bbe\u8ba1"}),"\n",(0,s.jsx)(t.li,{children:"\u4fdd\u969c\u4ee3\u7801\u4e0e\u63a5\u53e3\u6587\u6863\u540c\u6b65\u7ef4\u62a4"}),"\n",(0,s.jsxs)(t.li,{children:["\u81ea\u52a8\u7684 ",(0,s.jsx)(t.code,{children:"API"})," \u53c2\u6570\u5bf9\u8c61\u5316\u63a5\u6536\u4e0e\u6821\u9a8c"]}),"\n",(0,s.jsxs)(t.li,{children:["\u81ea\u52a8\u751f\u6210\u57fa\u4e8e\u6807\u51c6 ",(0,s.jsx)(t.code,{children:"OpenAPIv3"})," \u534f\u8bae\u7684\u63a5\u53e3\u6587\u6863"]}),"\n",(0,s.jsxs)(t.li,{children:["\u81ea\u52a8\u751f\u6210 ",(0,s.jsx)(t.code,{children:"SwaggerUI"})," \u9875\u9762"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["\u6ce8\u610f\u4e00\u4e0b\u54e6\uff1a ",(0,s.jsx)(t.strong,{children:"\u89c4\u8303\u8def\u7531"})," \u4e0e\u539f\u6709\u7684 ",(0,s.jsx)(t.strong,{children:"\u51fd\u6570\u3001\u5bf9\u8c61\u3001\u5206\u7ec4"})," \u8def\u7531\u65b9\u5f0f\u90fd\u662f\u6846\u67b6\u7684 ",(0,s.jsx)(t.code,{children:"HTTP Server"})," \u7ec4\u4ef6\u5e76\u5b58\u652f\u6301\u7684\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u662f\u4e3a\u4e86\u89e3\u51b3\u4e00\u4e9b\u89c4\u8303\u5316\u548c\u81ea\u52a8\u5316\u7ba1\u7406\u63a5\u53e3\u7684\u573a\u666f\uff0c\u66f4\u9002\u7528\u4e8e\u56e2\u961f\u591a\u4eba\u534f\u4f5c\u4f7f\u7528\u3002\u5176\u4ed6\u7684\u8def\u7531\u65b9\u5f0f\uff0c\u7279\u522b\u662f\u6846\u67b6 ",(0,s.jsx)(t.code,{children:"v1"})," \u7248\u672c\u7684\u51fd\u6570\u3001\u5bf9\u8c61\u6ce8\u518c\u65b9\u5f0f\u4e5f\u662f\u5728\u65b0\u7248\u672c\u652f\u6301\u7684\u54c8\uff01\u770b\u4e2a\u4eba\u4f7f\u7528\u4e60\u60ef\u8fdb\u884c\u5408\u7406\u9009\u62e9\u54df\u3002"]})}),"\n",(0,s.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,s.jsx)(o.A,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},744074:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(296540),s=n(634164),i=n(291054),o=n(314783),c=n(597639);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function h(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}var m=n(940877),p=n(923230),f=n(985225);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(474848);function j(e){let{href:t,children:n}=e;return(0,x.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",g.cardContainer),children:n})}function b(e){let{href:t,icon:n,title:r,description:i}=e;return(0,x.jsxs)(j,{href:t,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,s.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),i&&(0,x.jsx)("p",{className:(0,s.A)("text--truncate",g.cardDescription),title:i,children:i})]})}function v(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=h();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function w(e){let{item:t}=e;const n=(0,m.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,x.jsx)(b,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function A(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(w,{item:t});case"category":return(0,x.jsx)(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,i.$S)();return(0,x.jsx)(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(y,{...e});const r=(0,i.d1)(t);return(0,x.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(A,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(296540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);