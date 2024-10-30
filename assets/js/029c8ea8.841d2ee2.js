"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[91103],{29476:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(74848),n=s(28453);const r={title:"SameSite \u8bbe\u7f6e",sidebar_position:10,hide_title:!0},o=void 0,a={id:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/SameSite \u8bbe\u7f6e",title:"SameSite \u8bbe\u7f6e",description:"SameSite \u4ecb\u7ecd",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027/10-SameSite \u8bbe\u7f6e.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/SameSite \u8bbe\u7f6e",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/SameSite \u8bbe\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027/10-SameSite \u8bbe\u7f6e.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730215846e3,sidebarPosition:10,frontMatter:{title:"SameSite \u8bbe\u7f6e",sidebar_position:10,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"PProf\u670d\u52a1\u6027\u80fd\u5206\u6790",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/PProf\u670d\u52a1\u6027\u80fd\u5206\u6790"},next:{title:"HTTPServer-\u76d1\u63a7\u6307\u6807",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HTTPServer-\u76d1\u63a7\u6307\u6807"}},c={},d=[{value:"SameSite \u4ecb\u7ecd",id:"samesite-\u4ecb\u7ecd",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:3},{value:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42",id:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42",level:3},{value:"\u5982\u4f55\u8bbe\u7f6e\uff1f",id:"\u5982\u4f55\u8bbe\u7f6e",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"samesite-\u4ecb\u7ecd",children:"SameSite \u4ecb\u7ecd"}),"\n",(0,i.jsx)(t.h3,{id:"\u53c2\u8003\u6587\u6863",children:"\u53c2\u8003\u6587\u6863"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://web.dev/samesite-cookies-explained/",children:"https://web.dev/samesite-cookies-explained/"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://web.dev/samesite-cookie-recipes/",children:"https://web.dev/samesite-cookie-recipes/"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://web.dev/schemeful-samesite/",children:"https://web.dev/schemeful-samesite/"})}),"\n",(0,i.jsx)(t.h3,{id:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42",children:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.chromestatus.com/feature/5096179480133632",children:"https://www.chromestatus.com/feature/5096179480133632"})}),"\n",(0,i.jsx)(t.h2,{id:"\u5982\u4f55\u8bbe\u7f6e",children:"\u5982\u4f55\u8bbe\u7f6e\uff1f"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Cookie.SetHttpCookie(&http.Cookie{\n            Name:     "test",\n            Value:    "1234",\n            Secure:   true,\n            SameSite: http.SameSiteNoneMode,// \u81ea\u5b9a\u4e49samesite\uff0c\u914d\u5408secure\u4e00\u8d77\u4f7f\u7528\n        })\n    })\n    s.SetAddr("127.0.0.1:8080")\n    s.Run()\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);