"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[83576],{571353:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>t});const c=JSON.parse('{"id":"\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gflock -\u6587\u4ef6\u9501\u6a21\u5757","title":"gflock (\u6587\u4ef6\u9501\u6a21\u5757)","description":"\u6587\u4ef6\u9501\u5e38\u7528\u4e8e\u591a\u8fdb\u7a0b\u7684\u4e92\u65a5\u9501\u64cd\u4f5c\uff0c\u5f53\u4e00\u4e2a\u8fdb\u7a0b\u5bf9\u6307\u5b9a\u6587\u4ef6\u9501\u8fdb\u7a0b Lock \u4e4b\u540e\uff0c\u5176\u4ed6\u8fdb\u7a0b\u5c06\u4f1a\u88ab\u963b\u585e\u7b49\u5f85\uff0c\u76f4\u5230\u8be5\u6587\u4ef6\u9501\u88ab\u540c\u4e00\u4e2a\u8fdb\u7a0b Unlock(\u6216\u8005\u5bf9\u5e94\u8fdb\u7a0b\u9000\u51fa)\u3002\u540c\u65f6\uff0c gflock \u4e5f\u652f\u6301\u7c7b TryLock/TryRLock \u7279\u6027\u3002 gflock \u7684\u6587\u4ef6\u9501\u7279\u6027\u662f\u4f9d\u9760\u5e95\u5c42\u7cfb\u7edf\u63d0\u4f9b\u7684\u6587\u4ef6\u9501API\u5b9e\u73b0\u7684\u3002","source":"@site/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gflock -\u6587\u4ef6\u9501\u6a21\u5757.md","sourceDirName":"\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173","slug":"/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gflock -\u6587\u4ef6\u9501\u6a21\u5757","permalink":"/en/1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gflock -\u6587\u4ef6\u9501\u6a21\u5757","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gflock -\u6587\u4ef6\u9501\u6a21\u5757.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":9,"frontMatter":{"title":"gflock (\u6587\u4ef6\u9501\u6a21\u5757)","sidebar_position":9,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"gmutex (\u9ad8\u7ea7\u4e92\u65a5\u9501)","permalink":"/en/1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gmutex -\u9ad8\u7ea7\u4e92\u65a5\u9501"},"next":{"title":"gmlock (\u5185\u5b58\u9501\u6a21\u5757)","permalink":"/en/1.16.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gmlock -\u5185\u5b58\u9501\u6a21\u5757"}}');var l=o(474848),s=o(28453);const d={title:"gflock (\u6587\u4ef6\u9501\u6a21\u5757)",sidebar_position:9,hide_title:!0},i=void 0,r={},t=[];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u6587\u4ef6\u9501\u5e38\u7528\u4e8e\u591a\u8fdb\u7a0b\u7684\u4e92\u65a5\u9501\u64cd\u4f5c\uff0c\u5f53\u4e00\u4e2a\u8fdb\u7a0b\u5bf9\u6307\u5b9a\u6587\u4ef6\u9501\u8fdb\u7a0b ",(0,l.jsx)(n.code,{children:"Lock"})," \u4e4b\u540e\uff0c\u5176\u4ed6\u8fdb\u7a0b\u5c06\u4f1a\u88ab\u963b\u585e\u7b49\u5f85\uff0c\u76f4\u5230\u8be5\u6587\u4ef6\u9501\u88ab\u540c\u4e00\u4e2a\u8fdb\u7a0b ",(0,l.jsx)(n.code,{children:"Unlock"}),"(\u6216\u8005\u5bf9\u5e94\u8fdb\u7a0b\u9000\u51fa)\u3002\u540c\u65f6\uff0c ",(0,l.jsx)(n.code,{children:"gflock"})," \u4e5f\u652f\u6301\u7c7b ",(0,l.jsx)(n.code,{children:"TryLock/TryRLock"})," \u7279\u6027\u3002 ",(0,l.jsx)(n.code,{children:"gflock"})," \u7684\u6587\u4ef6\u9501\u7279\u6027\u662f\u4f9d\u9760\u5e95\u5c42\u7cfb\u7edf\u63d0\u4f9b\u7684\u6587\u4ef6\u9501API\u5b9e\u73b0\u7684\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f\u6587\u4ef6\u9501\u662f\u9488\u5bf9\u4e8e\u591a\u8fdb\u7a0b\u4e92\u65a5\u64cd\u4f5c\uff0c\u800c\u4e0d\u662f\u5355\u8fdb\u7a0b\u591a\u534f\u7a0b\u4e92\u65a5\u3002\u5728\u591a\u8fdb\u7a0b\u9700\u8981\u63a7\u5236\u4e1a\u52a1\u4e92\u65a5\u64cd\u4f5c\u7684\u65f6\u5019\u7279\u522b\u6709\u7528\uff0c\u4f8b\u5982\u591a\u8fdb\u7a0b\u7684\u5b9a\u65f6\u4efb\u52a1\u7ba1\u7406\u573a\u666f\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5b89\u88c5\u6a21\u5757"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"go get -u github.com/gogf/gflock\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gflock"\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gflock",children:"https://godoc.org/github.com/gogf/gflock"})}),"\n",(0,l.jsxs)(n.p,{children:["\u65b9\u6cd5\u6bd4\u8f83\u5b9e\u7528\u4e5f\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u8fd9\u91cc\u6765\u5c55\u793a\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"Lock/Unlock"})," \u7684\u793a\u4f8b\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n    "github.com/gogf/gf/os/glog"\n    "github.com/gogf/gf/os/gproc"\n    "github.com/gogf/gflock"\n)\n\nfunc main() {\n    l := gflock.New("demo.lock")\n    l.Lock()\n    glog.Printf("locked by pid: %d", gproc.Pid())\n    time.Sleep(10*time.Second)\n    l.Unlock()\n    glog.Printf("unlocked by pid: %d", gproc.Pid())\n}\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4eec\u5c06\u8fd9\u4e2a\u7a0b\u5e8f\u8fd0\u884c\u4e24\u6b21\uff0c\u4f1a\u751f\u6210\u4e24\u4e2a\u8fdb\u7a0b\uff0c\u8fdb\u7a0bID\u5206\u522b\u4e3a ",(0,l.jsx)(n.code,{children:"25694"})," \u53ca ",(0,l.jsx)(n.code,{children:"25737"}),"(\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"ps"})," \u547d\u4ee4\u6216\u8005\u8fdb\u7a0b\u7ba1\u7406\u5668\u67e5\u770b)\u3002\u4e24\u4e2a\u8fdb\u7a0b\u90fd\u4f1a\u64cd\u4f5c\u540c\u4e00\u4e2a\u6587\u4ef6\u9501 ",(0,l.jsx)(n.code,{children:"demo.lock"})," \u6587\u4ef6\uff0c\u4f46\u662f\u53ea\u6709\u7b2c\u4e00\u4e2a\u8fdb\u7a0b ",(0,l.jsx)(n.code,{children:"25694"})," \u5f97\u5230\u4e86\u8be5\u6587\u4ef6\u9501\u64cd\u4f5c\u6743\u9650\uff0c\u7b2c\u4e8c\u4e2a\u8fdb\u7a0b ",(0,l.jsx)(n.code,{children:"25737"})," \u53ea\u6709\u7b49\u5f85\u8be5\u6587\u4ef6\u9501\u91ca\u653e\u4e4b\u540e\u624d\u80fd\u8fdb\u4e00\u6b65\u64cd\u4f5c\uff0c\u56e0\u6b64\u88ab\u963b\u585e\u3002\u7a0b\u5e8f\u4e2d\u7684 ",(0,l.jsx)(n.code,{children:"Sleep"})," \u64cd\u4f5c\u6b63\u662f\u4e3a\u4e86\u6f14\u793a\u8fd9\u4e00\u963b\u585e\u7ed3\u679c\u800c\u7279\u610f\u8bbe\u5b9a\u7684\u3002\u5f53\u7b2c\u4e00\u4e2a\u8fdb\u7a0b ",(0,l.jsx)(n.code,{children:"25694"})," \u91ca\u653e\u6587\u4ef6\u9501\u4e4b\u540e\uff0c\u7b2c\u4e8c\u4e2a\u8fdb\u7a0b ",(0,l.jsx)(n.code,{children:"25737"})," \u5c06\u4f1a\u7acb\u5373\u5f00\u59cb\u6267\u884c\u3002\u6700\u7ec8\u7684\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff08\u6ce8\u610f\u6253\u5370\u65f6\u95f4\u7684\u5dee\u5f02\uff09\uff1a"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fdb\u7a0b1\uff08 ",(0,l.jsx)(n.code,{children:"25694"}),"\uff09\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"2018-05-18 13:51:31.191 locked by pid: 25694\n2018-05-18 13:51:34.191 unlocked by pid: 25694\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8fdb\u7a0b2\uff08 ",(0,l.jsx)(n.code,{children:"25737"}),"\uff09\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"2018-05-18 13:51:34.191 locked by pid: 25737\n2018-05-18 13:51:37.191 unlocked by pid: 25737\n\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>i});var c=o(296540);const l={},s=c.createContext(l);function d(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);