"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[76656],{609218:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","title":"\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","description":"https://github.com/gogf/gf/v2/blob/master/container/gset/gset\\\\z\\\\bench\\\\test.go","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset","slug":"/docs/components/container-gset-benchmark","permalink":"/docs/components/container-gset-benchmark","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/container-gset-benchmark","title":"\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","sidebar_position":1,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/docs/components/container-gset-example"},"next":{"title":"\u96c6\u5408\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/docs/components/container-gset-funcs"}}');var s=o(474848),c=o(28453);const a={slug:"/docs/components/container-gset-benchmark",title:"\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:1,hide_title:!0},r=void 0,p={},l=[];function i(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/gogf/gf/v2/blob/master/container/gset/gset_z_bench_test.go",children:"https://github.com/gogf/gf/v2/blob/master/container/gset/gset_z_bench_test.go"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"goos: linux\ngoarch: amd64\nBenchmark_IntSet_Add-4                  10000000               277 ns/op               8 B/op          0 allocs/op\nBenchmark_IntSet_Contains-4             20000000              60.6 ns/op               0 B/op          0 allocs/op\nBenchmark_IntSet_Remove-4               10000000               211 ns/op               0 B/op          0 allocs/op\nBenchmark_AnySet_Add-4                   5000000               312 ns/op              21 B/op          1 allocs/op\nBenchmark_AnySet_Contains-4             30000000              68.2 ns/op               0 B/op          0 allocs/op\nBenchmark_AnySet_Remove-4                5000000               267 ns/op               0 B/op          0 allocs/op\nBenchmark_StrSet_Add-4                   5000000               383 ns/op              20 B/op          1 allocs/op\nBenchmark_StrSet_Contains-4             10000000               160 ns/op               7 B/op          0 allocs/op\nBenchmark_StrSet_Remove-4                5000000               306 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_IntSet_Add-4           10000000               258 ns/op              35 B/op          0 allocs/op\nBenchmark_Unsafe_IntSet_Contains-4      20000000               146 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_IntSet_Remove-4        10000000               173 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_AnySet_Add-4            5000000               355 ns/op              41 B/op          1 allocs/op\nBenchmark_Unsafe_AnySet_Contains-4      10000000               150 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_AnySet_Remove-4        200000000             11.9 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_StrSet_Add-4            5000000               486 ns/op              59 B/op          1 allocs/op\nBenchmark_Unsafe_StrSet_Contains-4       5000000               298 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_StrSet_Remove-4        10000000               158 ns/op               7 B/op          0 allocs/op\n"})})]})}function d(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(i,{...n})}):i(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>r});var t=o(296540);const s={},c=t.createContext(s);function a(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);