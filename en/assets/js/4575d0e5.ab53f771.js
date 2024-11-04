"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[83608],{705107:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e","title":"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e","description":"\u4ee3\u7406 Proxy \u8bbe\u7f6e","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient","slug":"/docs/web/http-client-proxy","permalink":"/en/docs/web/http-client-proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/web/http-client-proxy","title":"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e","sidebar_position":7,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370","permalink":"/en/docs/web/http-client-raw-request-response"},"next":{"title":"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6","permalink":"/en/docs/web/http-client-middleware"}}');var i=t(474848),o=t(28453);const s={slug:"/docs/web/http-client-proxy",title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",sidebar_position:7,hide_title:!0},c=void 0,l={},d=[{value:"\u4ee3\u7406 <code>Proxy</code> \u8bbe\u7f6e",id:"\u4ee3\u7406-proxy-\u8bbe\u7f6e",level:2},{value:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",id:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",level:2},{value:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",id:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",level:2}];function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"\u4ee3\u7406-proxy-\u8bbe\u7f6e",children:["\u4ee3\u7406 ",(0,i.jsx)(n.code,{children:"Proxy"})," \u8bbe\u7f6e"]}),"\n",(0,i.jsxs)(n.p,{children:["HTTP\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\u53ef\u4ee5\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740 ",(0,i.jsx)(n.code,{children:"proxyURL"}),"\uff0c\u8be5\u8be5\u7279\u6027\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"SetProxy*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u3002\u4ee3\u7406\u4e3b\u8981\u652f\u6301 ",(0,i.jsx)(n.code,{children:"http"})," \u548c ",(0,i.jsx)(n.code,{children:"socks5"})," \u4e24\u79cd\u5f62\u5f0f\uff0c\u5206\u522b\u4e3a ",(0,i.jsx)(n.code,{children:"http://USER:PASSWORD@IP:PORT"})," \u6216 ",(0,i.jsx)(n.code,{children:"socks5://USER:PASSWORD@IP:PORT"})," \u5f62\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func (c *Client) SetProxy(proxyURL string)\nfunc (c *Client) Proxy(proxyURL string) *Client\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u6765\u770b\u4e0b\u5ba2\u6237\u7aef\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"proxyURL"})," \u7684\u793a\u4f8b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",children:"\u666e\u901a\u8c03\u7528\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"SetProxy"})," \u914d\u7f6e\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'client := g.Client()\nclient.SetProxy("http://127.0.0.1:1081")\nclient.SetTimeout(5 * time.Second)\nresponse, err := client.Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nresponse.RawDump()\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",children:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Proxy"})," \u94fe\u5f0f\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'client := g.Client()\nresponse, err := client.Proxy("http://127.0.0.1:1081").Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nfmt.Println(response.RawResponse())\n'})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(296540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);