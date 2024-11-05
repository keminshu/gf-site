"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[72294],{781052:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6","title":"UDP\u7ec4\u4ef6","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6.md","sourceDirName":"docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6","slug":"/docs/network/gudp","permalink":"/docs/network/gudp","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/network/gudp","title":"UDP\u7ec4\u4ef6","sidebar_position":1,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027","permalink":"/docs/network/gtcp-connection-pool"},"next":{"title":"UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","permalink":"/docs/network/gudp-conn"}}');var s=r(474848),o=r(28453),c=r(744074);const i={slug:"/docs/network/gudp",title:"UDP\u7ec4\u4ef6",sidebar_position:1,hide_title:!0},l=void 0,d={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"UDP (User Datagram Protocol)"})," \u4e00\u79cd\u65e0\u8fde\u63a5\u7684\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u63d0\u4f9b\u9762\u5411\u4e8b\u52a1\u7684\u7b80\u5355\u4e0d\u53ef\u9760\u4fe1\u606f\u4f20\u9001\u670d\u52a1\u3002 ",(0,s.jsx)(n.code,{children:"UDP"})," \u670d\u52a1\u7aef\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"gudp.Server"})," \u5b9e\u73b0\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"gudp.Conn"})," \u5bf9\u8c61\u6216\u8005\u5de5\u5177\u65b9\u6cd5\u5b9e\u73b0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gudp"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Server\n    func GetServer(name ...interface{}) *Server\n    func NewServer(address string, handler func(*Conn), names ...string) *Server\n    func (s *Server) Close() error\n    func (s *Server) Run() error\n    func (s *Server) SetAddress(address string)\n    func (s *Server) SetHandler(handler func(*Conn))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"GetServer"})," \u4f7f\u7528\u5355\u4f8b\u6a21\u5f0f\u901a\u8fc7\u7ed9\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684\u540d\u79f0\u83b7\u53d6/\u521b\u5efa\u4e00\u4e2aServer\uff0c\u540e\u7eed\u53ef\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"SetAddress"})," \u548c ",(0,s.jsx)(n.code,{children:"SetHandler"})," \u65b9\u6cd5\u52a8\u6001\u4fee\u6539Server\u5c5e\u6027\uff1b ",(0,s.jsx)(n.code,{children:"NewServer"})," \u5219\u76f4\u63a5\u6839\u636e\u7ed9\u5b9a\u53c2\u6570\u521b\u5efa\u4e00\u4e2aServer\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6765\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/net/gudp"\n)\n\nfunc main() {\n    gudp.NewServer("127.0.0.1:8999", func(conn *gudp.Conn) {\n        defer conn.Close()\n        for {\n            if data, _ := conn.Recv(-1); len(data) > 0 {\n                fmt.Println(string(data))\n            }\n        }\n    }).Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"UDPServer"})," \u662f\u963b\u585e\u8fd0\u884c\u7684\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u81ea\u5b9a\u4e49\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u6839\u636e\u8bfb\u53d6\u5185\u5bb9\u8fdb\u884c\u5e76\u53d1\u5904\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Linux"})," \u4e0b\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5411\u670d\u52a1\u7aef\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"UDP"})," \u6570\u636e\u8fdb\u884c\u6d4b\u8bd5\uff0c\u968f\u540e\u67e5\u770b\u670d\u52a1\u7aef\u7aef\u662f\u5426\u6709\u8f93\u51fa\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo "hello" > /dev/udp/127.0.0.1/8999\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,s.jsx)(c.A,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},744074:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(296540),s=r(634164),o=r(291054),c=r(314783),i=r(597639);const l=["zero","one","two","few","many","other"];function d(e){return l.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:d(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function h(){const e=u();return{selectMessage:(n,r)=>function(e,n,r){const t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const s=r.select(n),o=r.pluralForms.indexOf(s);return t[Math.min(o,t.length-1)]}(r,n,e)}}var p=r(940877),g=r(923230),f=r(985225);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=r(474848);function j(e){let{href:n,children:r}=e;return(0,x.jsx)(c.A,{href:n,className:(0,s.A)("card padding--lg",m.cardContainer),children:r})}function v(e){let{href:n,icon:r,title:t,description:o}=e;return(0,x.jsxs)(j,{href:n,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,s.A)("text--truncate",m.cardTitle),title:t,children:[r," ",t]}),o&&(0,x.jsx)("p",{className:(0,s.A)("text--truncate",m.cardDescription),title:o,children:o})]})}function S(e){let{item:n}=e;const r=(0,o.Nr)(n),t=function(){const{selectMessage:e}=h();return n=>e(n,(0,g.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,x.jsx)(v,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function P(e){let{item:n}=e;const r=(0,p.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,o.cC)(n.docId??void 0);return(0,x.jsx)(v,{href:n.href,icon:r,title:n.label,description:n.description??t?.description})}function D(e){let{item:n}=e;switch(n.type){case"link":return(0,x.jsx)(P,{item:n});case"category":return(0,x.jsx)(S,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function b(e){let{className:n}=e;const r=(0,o.$S)();return(0,x.jsx)(w,{items:r.items,className:n})}function w(e){const{items:n,className:r}=e;if(!n)return(0,x.jsx)(b,{...e});const t=(0,o.d1)(n);return(0,x.jsx)("section",{className:(0,s.A)("row",r),children:t.map(((e,n)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(D,{item:e})},n)))})}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(296540);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);