"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[94235],{102410:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>_,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","title":"\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","description":"https://github.com/gogf/gf/v2/blob/master/container/gset/gset\\\\z\\\\bench\\\\test.go","source":"@site/versioned_docs/version-2.5.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset","slug":"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","permalink":"/2.5.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/2.5.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528"},"next":{"title":"\u96c6\u5408\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/2.5.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd"}}');var s=o(474848),a=o(28453);const r={title:"\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:1,hide_title:!0},c=void 0,p={},l=[];function i(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/v2/blob/master/container/gset/gset_z_bench_test.go",children:"https://github.com/gogf/gf/v2/blob/master/container/gset/gset_z_bench_test.go"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"goos: linux\ngoarch: amd64\nBenchmark_IntSet_Add-4                  10000000               277 ns/op               8 B/op          0 allocs/op\nBenchmark_IntSet_Contains-4             20000000              60.6 ns/op               0 B/op          0 allocs/op\nBenchmark_IntSet_Remove-4               10000000               211 ns/op               0 B/op          0 allocs/op\nBenchmark_AnySet_Add-4                   5000000               312 ns/op              21 B/op          1 allocs/op\nBenchmark_AnySet_Contains-4             30000000              68.2 ns/op               0 B/op          0 allocs/op\nBenchmark_AnySet_Remove-4                5000000               267 ns/op               0 B/op          0 allocs/op\nBenchmark_StrSet_Add-4                   5000000               383 ns/op              20 B/op          1 allocs/op\nBenchmark_StrSet_Contains-4             10000000               160 ns/op               7 B/op          0 allocs/op\nBenchmark_StrSet_Remove-4                5000000               306 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_IntSet_Add-4           10000000               258 ns/op              35 B/op          0 allocs/op\nBenchmark_Unsafe_IntSet_Contains-4      20000000               146 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_IntSet_Remove-4        10000000               173 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_AnySet_Add-4            5000000               355 ns/op              41 B/op          1 allocs/op\nBenchmark_Unsafe_AnySet_Contains-4      10000000               150 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_AnySet_Remove-4        200000000             11.9 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_StrSet_Add-4            5000000               486 ns/op              59 B/op          1 allocs/op\nBenchmark_Unsafe_StrSet_Contains-4       5000000               298 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_StrSet_Remove-4        10000000               158 ns/op               7 B/op          0 allocs/op\n"})})]})}function _(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(296540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);