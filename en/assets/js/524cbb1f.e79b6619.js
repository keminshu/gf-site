"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[27244],{823643:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e","title":"\u670d\u52a1\u7aef\u914d\u7f6e","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/versioned_docs/version-2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e.md","sourceDirName":"\u5fae\u670d\u52a1\u5f00\u53d1","slug":"/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e","permalink":"/en/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"\u670d\u52a1\u7aef\u914d\u7f6e","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u811a\u624b\u67b6\u6a21\u5757","permalink":"/en/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u811a\u624b\u67b6\u6a21\u5757"},"next":{"title":"\u62e6\u622a\u5668\u7ec4\u4ef6","permalink":"/en/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u62e6\u622a\u5668\u7ec4\u4ef6"}}');var r=o(474848),i=o(28453);const s={title:"\u670d\u52a1\u7aef\u914d\u7f6e",sidebar_position:3,hide_title:!0},l=void 0,a={},c=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u914d\u7f6e\u6a21\u677f",id:"\u914d\u7f6e\u6a21\u677f",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"\u670d\u52a1\u7aef\u652f\u6301\u914d\u7f6e\u6587\u4ef6\uff0c\u6240\u6709\u7684\u914d\u7f6e\u5c06\u4f1a\u81ea\u52a8\u6620\u5c04\u5230\u914d\u7f6e\u5bf9\u8c61\u4e2d\u3002\u914d\u7f6e\u5bf9\u8c61\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// GrpcServerConfig is the configuration for server.\ntype GrpcServerConfig struct {\n    Address          string              // (optional) Address for server listening.\n    Name             string              // (optional) Name for current service.\n    Logger           *glog.Logger        // (optional) Logger for server.\n    LogPath          string              // (optional) LogPath specifies the directory for storing logging files.\n    LogStdout        bool                // (optional) LogStdout specifies whether printing logging content to stdout.\n    ErrorStack       bool                // (optional) ErrorStack specifies whether logging stack information when error.\n    ErrorLogEnabled  bool                // (optional) ErrorLogEnabled enables error logging content to files.\n    ErrorLogPattern  string              // (optional) ErrorLogPattern specifies the error log file pattern like: error-{Ymd}.log\n    AccessLogEnabled bool                // (optional) AccessLogEnabled enables access logging content to file.\n    AccessLogPattern string              // (optional) AccessLogPattern specifies the error log file pattern like: access-{Ymd}.log\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e\u6587\u4ef6\u7684\u81ea\u52a8\u8bfb\u53d6\u903b\u8f91\u4e0e\u6846\u67b6\u4e00\u81f4\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,r.jsx)(n.a,{href:"/en/2.3.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86/",children:"\u914d\u7f6e\u7ba1\u7406"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u6a21\u677f",children:"\u914d\u7f6e\u6a21\u677f"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u5b8c\u6574\u7684\u914d\u7f6e\u6a21\u677f\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'grpc:\n  name:             "demo"  # \u670d\u52a1\u540d\u79f0\n  address:          ":8000" # \u81ea\u5b9a\u4e49\u670d\u52a1\u76d1\u542c\u5730\u5740\n  logPath:          "./log" # \u65e5\u5fd7\u5b58\u50a8\u76ee\u5f55\u8def\u5f84\n  logStdout:        true    # \u65e5\u5fd7\u662f\u5426\u8f93\u51fa\u5230\u7ec8\u7aef\n  errorLogEnabled:  true    # \u662f\u5426\u5f00\u542f\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\n  accessLogEnabled: true    # \u662f\u5426\u5f00\u542f\u8bbf\u95ee\u65e5\u5fd7\u8bb0\u5f55\n  errorStack:       true    # \u5f53\u4ea7\u751f\u9519\u8bef\u65f6\uff0c\u662f\u5426\u8bb0\u5f55\u9519\u8bef\u5806\u6808\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(296540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);