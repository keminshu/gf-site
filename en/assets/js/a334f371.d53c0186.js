"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[37407],{796315:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>t});const c=JSON.parse('{"id":"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406","title":"\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406","description":"GoFrame \u6846\u67b6\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684 Server \u65e5\u5fd7\u7ba1\u7406\u529f\u80fd\uff0c\u5305\u62ec access log \u4ee5\u53ca error log\uff0c\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u7edf\u4e00\u914d\u7f6e\u7ba1\u7406\u3002","source":"@site/versioned_docs/version-2.5.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406.md","sourceDirName":"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027","slug":"/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406","permalink":"/en/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730380474000,"sidebarPosition":1,"frontMatter":{"title":"\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u9759\u6001\u6587\u4ef6\u670d\u52a1","permalink":"/en/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u9759\u6001\u6587\u4ef6\u670d\u52a1"},"next":{"title":"HTTPS & TLS","permalink":"/en/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HTTPS & TLS"}}');var l=n(474848),s=n(28453);const o={title:"\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406",sidebar_position:1,hide_title:!0},d=void 0,i={},t=[{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u5bf9\u8c61",id:"\u914d\u7f6e\u5bf9\u8c61",level:3},{value:"\u914d\u7f6e\u5c5e\u6027",id:"\u914d\u7f6e\u5c5e\u6027",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u914d\u7f6e\u65b9\u6cd5",id:"\u914d\u7f6e\u65b9\u6cd5",level:3},{value:"\u65e5\u5fd7\u683c\u5f0f",id:"\u65e5\u5fd7\u683c\u5f0f",level:2},{value:"\u8bf7\u6c42\u65e5\u5fd7",id:"\u8bf7\u6c42\u65e5\u5fd7",level:3},{value:"\u9519\u8bef\u65e5\u5fd7",id:"\u9519\u8bef\u65e5\u5fd7",level:3},{value:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5904\u7406",id:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5904\u7406",level:2},{value:"<code>Server</code> \u65e5\u5fd7\u4e0e\u4e1a\u52a1\u65e5\u5fd7",id:"server-\u65e5\u5fd7\u4e0e\u4e1a\u52a1\u65e5\u5fd7",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684 ",(0,l.jsx)(r.code,{children:"Server"})," \u65e5\u5fd7\u7ba1\u7406\u529f\u80fd\uff0c\u5305\u62ec ",(0,l.jsx)(r.code,{children:"access log"})," \u4ee5\u53ca ",(0,l.jsx)(r.code,{children:"error log"}),"\uff0c\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u7edf\u4e00\u914d\u7f6e\u7ba1\u7406\u3002"]}),"\n",(0,l.jsx)(r.h2,{id:"\u65e5\u5fd7\u914d\u7f6e",children:"\u65e5\u5fd7\u914d\u7f6e"}),"\n",(0,l.jsx)(r.h3,{id:"\u914d\u7f6e\u5bf9\u8c61",children:"\u914d\u7f6e\u5bf9\u8c61"}),"\n",(0,l.jsx)(r.p,{children:"\u8bf7\u67e5\u770bAPI\u6587\u6863\uff1a"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig"})}),"\n",(0,l.jsx)(r.h3,{id:"\u914d\u7f6e\u5c5e\u6027",children:"\u914d\u7f6e\u5c5e\u6027"}),"\n",(0,l.jsx)(r.p,{children:"\u65e5\u5fd7\u76f8\u5173\u914d\u7f6e\u5c5e\u6027\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-go",children:"Logger            *glog.Logger      // Logger for server.\nLogPath           string            // Directory for storing logging files.\nLogStdout         bool              // Printing logging content to stdout.\nErrorStack        bool              // Logging stack information when error.\nErrorLogEnabled   bool              // Enable error logging files.\nErrorLogPattern   string            // Error log file pattern like: error-{Ymd}.log\nAccessLogEnabled  bool              // Enable access logging files.\nAccessLogPattern  string            // Error log file pattern like: access-{Ymd}.log\n"})}),"\n",(0,l.jsx)(r.p,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsxs)(r.li,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u65e5\u5fd7\u4e0d\u4f1a\u8f93\u51fa\u5230\u6587\u4ef6\u4e2d\uff0c\u800c\u662f\u76f4\u63a5\u6253\u5370\u5230\u7ec8\u7aef\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7684 ",(0,l.jsx)(r.code,{children:"access"})," \u65e5\u5fd7\u7ec8\u7aef\u8f93\u51fa\u662f\u5173\u95ed\u7684\uff0c\u4ec5\u6709 ",(0,l.jsx)(r.code,{children:"error"})," \u65e5\u5fd7\u9ed8\u8ba4\u5f00\u542f\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:["\u6240\u6709\u7684\u9009\u9879\u5747\u53ef\u901a\u8fc7 ",(0,l.jsx)(r.code,{children:"Server.Set*"})," \u65b9\u6cd5\u8bbe\u7f6e\uff0c\u5927\u90e8\u5206\u9009\u9879\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(r.code,{children:"Server.Get*"})," \u65b9\u6cd5\u83b7\u53d6\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"Logger"})," \u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u65e5\u5fd7\u7ba1\u7406\u5bf9\u8c61\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u5b8c\u6574\u7684\u65e5\u5fd7\u7ba1\u7406\u5bf9\u8c61\uff0c\u5ffd\u7565\u5176\u4ed6\u65e5\u5fd7\u9009\u9879\u914d\u7f6e\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"LogPath"})," \u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u65e5\u5fd7\u76ee\u5f55\uff0c\u53ea\u6709\u5728\u8bbe\u7f6e\u4e86\u65e5\u5fd7\u76ee\u5f55\u7684\u60c5\u51b5\u4e0b\u624d\u4f1a\u8f93\u51fa\u65e5\u5fd7\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"ErrorLogPattern"})," \u53ca ",(0,l.jsx)(r.code,{children:"AccessLogPattern"})," \u7528\u4e8e\u914d\u7f6e\u65e5\u5fd7\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.jsx)(r.code,{children:"error-{Ymd}.log"})," \u53ca ",(0,l.jsx)(r.code,{children:"access-{Ymd}.log"}),"\uff0c\u4f8b\u5982\uff1a ",(0,l.jsx)(r.code,{children:"error-20191212.log"}),", ",(0,l.jsx)(r.code,{children:"access-20191212.log"}),"\u3002"]}),"\n",(0,l.jsx)(r.li,{children:"\u5176\u4ed6\u914d\u7f6e\u9009\u9879\u8bf4\u660e\u8bf7\u53c2\u8003\u6ce8\u91ca\u548cAPI\u6587\u6863\u3002"}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsxs)(r.p,{children:["\u5b98\u65b9\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u6765\u7ba1\u7406\u670d\u52a1\u914d\u7f6e\u4ee5\u53ca\u65e5\u5fd7\u65e5\u5fd7\u914d\u7f6e\u3002 \u4e00\u4e2a\u53c2\u8003\u7684\u65e5\u5fd7\u914d\u7f6e\u5185\u5bb9\u793a\u4f8b\uff08\u4ee5 ",(0,l.jsx)(r.code,{children:"yaml"})," \u683c\u5f0f\u4e3a\u4f8b\uff09\uff1a"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-yaml",children:'server:\n  LogPath:          "/var/log/gf-demos/server"\n  LogStdout:        false\n  ErrorStack:       true\n  ErrorLogEnabled:  true\n  ErrorLogPattern:  "error.{Ymd}.log"\n  AccessLogEnabled: true\n  AccessLogPattern: "access.{Ymd}.log"\n'})}),"\n",(0,l.jsxs)(r.p,{children:["\u5f53 ",(0,l.jsx)(r.code,{children:"Server"})," \u542f\u52a8\u65f6\u5c06\u4f1a\u81ea\u52a8\u53bb\u8bfb\u53d6\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6 ",(0,l.jsx)(r.code,{children:"config.yaml"})," \u4e2d\u7684 ",(0,l.jsx)(r.code,{children:"server"})," \u8282\u70b9\u914d\u7f6e\u3002"]}),"\n",(0,l.jsx)(r.h3,{id:"\u914d\u7f6e\u65b9\u6cd5",children:"\u914d\u7f6e\u65b9\u6cd5"}),"\n",(0,l.jsxs)(r.p,{children:["\u65e5\u5fd7\u7684\u914d\u7f6e\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(r.code,{children:"Server"})," \u5bf9\u8c61\u7684 ",(0,l.jsx)(r.code,{children:"Set*"})," \u65b9\u6cd5\u6765\u8fdb\u884c\u914d\u7f6e\uff0c\u53c2\u8003 ",(0,l.jsx)(r.a,{href:"/en/2.5.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE/",children:"\u670d\u52a1\u914d\u7f6e"})," \u7ae0\u8282\u3002"]}),"\n",(0,l.jsx)(r.h2,{id:"\u65e5\u5fd7\u683c\u5f0f",children:"\u65e5\u5fd7\u683c\u5f0f"}),"\n",(0,l.jsxs)(r.p,{children:["\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u6bd4\u8f83\u7b80\u5355\uff0c\u8fd9\u91cc\u4e0d\u518d\u793a\u4f8b\u8bf4\u660e\u3002\u4ee5\u4e0b\u793a\u4f8b\u901a\u8fc7\u914d\u7f6e\u65b9\u6cd5\u7684\u65b9\u5f0f\u8fdb\u884c\u5bf9 ",(0,l.jsx)(r.code,{children:"Server"})," \u8fdb\u884c\u914d\u7f6e\u3002"]}),"\n",(0,l.jsx)(r.h3,{id:"\u8bf7\u6c42\u65e5\u5fd7",children:"\u8bf7\u6c42\u65e5\u5fd7"}),"\n",(0,l.jsx)(r.p,{children:"\u8bf7\u6c42\u65e5\u5fd7\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-html",children:'2018-04-20 18:11:57.344 200 "GET http 127.0.0.1:8199 /log/access HTTP/1.1" 0.120, 127.0.0.1, "", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/53.0.2785.143 Chrome/53.0.2785.143 Safari/537.36"\n'})}),"\n",(0,l.jsx)(r.p,{children:"\u65e5\u5fd7\u683c\u5f0f:"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:'\u8bf7\u6c42\u65f6\u95f4(\u7cbe\u786e\u5230\u6beb\u79d2) HTTP\u72b6\u6001\u7801 "\u8bf7\u6c42\u65b9\u5f0f \u8bf7\u6c42\u524d\u7f00 \u8bf7\u6c42\u5730\u5740 \u8bf7\u6c42\u534f\u8bae" \u6267\u884c\u65f6\u95f4(\u79d2) \u5ba2\u6237\u7aefIP "\u6765\u6e90URL", "UserAgent"\n'})}),"\n",(0,l.jsxs)(r.p,{children:["\u5176\u4e2d\uff0c ",(0,l.jsx)(r.code,{children:"\u8bf7\u6c42\u524d\u7f00"})," \u4e3a ",(0,l.jsx)(r.code,{children:"http"})," \u6216\u8005 ",(0,l.jsx)(r.code,{children:"https"}),"\uff0c ",(0,l.jsx)(r.code,{children:"\u8bf7\u6c42\u534f\u8bae"})," \u5f80\u5f80\u4e3a ",(0,l.jsx)(r.code,{children:"HTTP/1.0"})," \u6216\u8005 ",(0,l.jsx)(r.code,{children:"HTTP/1.1"}),"\u3002"]}),"\n",(0,l.jsxs)(r.p,{children:["\u6ce8\u610f\uff0c\u65e5\u5fd7\u4e2d\u8bb0\u5f55\u7684 ",(0,l.jsx)(r.code,{children:"\u6267\u884c\u65f6\u95f4"})," \u5355\u4f4d\u4e3a ",(0,l.jsx)(r.code,{children:"\u79d2"}),"\uff0c\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u770b\u5230\u7684\u65f6\u95f4\u51e0\u4e4e\u90fd\u662f ",(0,l.jsx)(r.code,{children:"0.xxx"})," \u79d2\u65f6\u95f4\uff0c\u4e5f\u5c31\u662f\u8bf4\u6267\u884c\u65f6\u95f4\u90fd\u662f\u6beb\u79d2\u7ea7\u4e0d\u52301\u79d2\u3002"]}),"\n",(0,l.jsx)(r.h3,{id:"\u9519\u8bef\u65e5\u5fd7",children:"\u9519\u8bef\u65e5\u5fd7"}),"\n",(0,l.jsx)(r.p,{children:"\u9519\u8bef\u65e5\u5fd7\uff1a"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-html",children:'2019-12-20 20:10:56.484 [ERRO] 500, "GET http 127.0.0.1:8199 /log/error HTTP/1.1" 0.210, 127.0.0.1, "", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"\nStack:\n1. OMG\n   1).  main.main.func1\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/net/ghttp/server/log/log_error.go:10\n\n'})}),"\n",(0,l.jsx)(r.p,{children:"\u9519\u8bef\u4fe1\u606f\u4f1a\u6253\u5370\u51fa\u5bf9\u5e94\u9519\u8bef\u4ea7\u751f\u7684\u5806\u6808\u4fe1\u606f\uff08\u5806\u6808\u4fe1\u606f\u4e2d\u4e0d\u5305\u542b\u6846\u67b6\u5185\u90e8\u8c03\u7528\u4fe1\u606f\uff09\uff0c\u4ee5\u4fbf\u4e8e\u9519\u8bef\u5b9a\u4f4d\u4ee5\u53ca\u5f00\u53d1\u8005\u5206\u6790\u95ee\u9898\u539f\u56e0\u3002"}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"Server"})," \u4ea7\u751f\u7684\u4efb\u4f55 ",(0,l.jsx)(r.code,{children:"panic"})," \u9519\u8bef\u90fd\u5c06\u4f1a\u88ab\u81ea\u52a8\u6355\u83b7\u5230\u9519\u8bef\u65e5\u5fd7\u4e2d\uff0c\u56e0\u6b64\u5bf9\u4e8e\u4e1a\u52a1\u7aef\u7a0b\u5e8f\u6765\u8bb2\uff0c\u65e0\u8bba\u662f\u5728\u63a7\u5236\u5668\u4e2d\u3001\u4e1a\u52a1\u5c01\u88c5\u5c42\u3001\u6570\u636e\u6a21\u578b\u4e2d\uff0c\u5982\u679c\u4ea7\u751f\u4e86\u9519\u8bef\u60f3\u8981\u76f4\u63a5\u9000\u51fa\u4e1a\u52a1\u8bf7\u6c42\u5904\u7406\uff0c\u76f4\u63a5 ",(0,l.jsx)(r.code,{children:"panic"})," \u5373\u53ef\u3002"]}),"\n",(0,l.jsx)(r.h2,{id:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5904\u7406",children:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5904\u7406"}),"\n",(0,l.jsxs)(r.p,{children:["\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5904\u7406 ",(0,l.jsx)(r.code,{children:"Server"})," \u7684\u8bf7\u6c42\u65e5\u5fd7\uff0c\u65b9\u6cd5\u6709\u4e24\u79cd\uff1a"]}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsxs)(r.li,{children:["\u53ef\u4ee5\u901a\u8fc7\u65e5\u5fd7\u914d\u7f6e\u9879\u4f20\u9012\u81ea\u5b9a\u4e49\u7684 ",(0,l.jsx)(r.code,{children:"*glog.Logger"})," \u5bf9\u8c61\u3002"]}),"\n",(0,l.jsx)(r.li,{children:"\u53ef\u4ee5\u901a\u8fc7\u4e2d\u95f4\u4ef6\u6765\u7edf\u4e00\u6355\u83b7\u5904\u7406\uff0c\u53c2\u8003 \u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668 \u7ae0\u8282\u3002"}),"\n"]}),"\n",(0,l.jsxs)(r.h2,{id:"server-\u65e5\u5fd7\u4e0e\u4e1a\u52a1\u65e5\u5fd7",children:[(0,l.jsx)(r.code,{children:"Server"})," \u65e5\u5fd7\u4e0e\u4e1a\u52a1\u65e5\u5fd7"]}),"\n",(0,l.jsxs)(r.p,{children:["\u8fd9\u662f\u4e00\u4e2a ",(0,l.jsx)(r.code,{children:"FAQ"}),"\u3002"]}),"\n",(0,l.jsxs)(r.p,{children:["\u6211\u4eec\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u91cc\u63d0\u5230\u7684\u65e5\u5fd7\u90fd\u662f ",(0,l.jsx)(r.code,{children:"Server"})," \u7684\u65e5\u5fd7\uff0c\u7c7b\u4f3c\u4e8e ",(0,l.jsx)(r.code,{children:"nginx"}),", ",(0,l.jsx)(r.code,{children:"apache"}),", ",(0,l.jsx)(r.code,{children:"tomcat"})," \u7b49\u7b49\u4e00\u7cfb\u5217 ",(0,l.jsx)(r.code,{children:"Web Server"})," \u670d\u52a1\u7684\u65e5\u5fd7\uff0c\u53ea\u5141\u8bb8 ",(0,l.jsx)(r.code,{children:"Server"})," \u8f93\u51fa\u5185\u5bb9\uff0c\u5f00\u53d1\u8005\u65e0\u6cd5\u5f80 ",(0,l.jsx)(r.code,{children:"Server"})," \u7684\u65e5\u5fd7\u6587\u4ef6\u4e2d\u5199\u5165\u65e5\u5fd7\u5185\u5bb9\uff0c\u5e76\u4e14\u65e5\u5fd7\u7c7b\u578b\u548c\u683c\u5f0f\u662f\u5b8c\u5168\u56fa\u5b9a\u7684\u3002"]}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"GoFrame"})," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u65e5\u5fd7\u6a21\u5757\uff0c\u7531 ",(0,l.jsx)(r.code,{children:"glog"})," \u65e5\u5fd7\u7ec4\u4ef6\u5b9e\u73b0\uff0c\u5f00\u53d1\u8005\u901a\u8fc7 ",(0,l.jsx)(r.code,{children:"glog"})," \u7ec4\u4ef6\u6253\u5370\u7684\u65e5\u5fd7\u5c5e\u4e8e\u4e1a\u52a1\u65e5\u5fd7\uff0c\u7a0b\u5e8f\u4e1a\u52a1\u4ee3\u7801\u53ef\u4ee5\u51b3\u5b9a\u8f93\u51fa\u4ec0\u4e48\u5185\u5bb9\uff0c\u8f93\u51fa\u5230\u54ea\u91cc\uff0c\u8f93\u51fa\u683c\u5f0f\u662f\u4ec0\u4e48\u6837\u7b49\u3002\u5e76\u4e14\u5e38\u7528 ",(0,l.jsx)(r.code,{children:"g.Log()"})," \u65b9\u6cd5\u6765\u8f93\u51fa\u4e1a\u52a1\u65e5\u5fd7\uff0c\u8be5\u65b9\u6cd5\u652f\u6301\u81ea\u52a8\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,l.jsx)(r.code,{children:"logger"})," \u914d\u7f6e\u9879\u3002\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,l.jsx)(r.a,{href:"/en/2.5.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6/",children:"\u65e5\u5fd7\u7ec4\u4ef6"})," \u7ae0\u8282\u3002"]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var c=n(296540);const l={},s=c.createContext(l);function o(e){const r=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),c.createElement(s.Provider,{value:r},e.children)}}}]);