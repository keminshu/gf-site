"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[95348],{48760:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=e(74848),p=e(28453);const t={slug:"/components/container/gmap/benchmark",title:"\u5b57\u5178\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:1,hide_title:!0},s=void 0,c={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5b57\u5178\u7c7b\u578b-gmap/\u5b57\u5178\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",title:"\u5b57\u5178\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",description:"\u6027\u80fd\u6d4b\u8bd5",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/0-\u5b57\u5178\u7c7b\u578b-gmap/1-\u5b57\u5178\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/0-\u5b57\u5178\u7c7b\u578b-gmap",slug:"/components/container/gmap/benchmark",permalink:"/gf-site/docs/components/container/gmap/benchmark",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/5-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/0-\u5b57\u5178\u7c7b\u578b-gmap/1-\u5b57\u5178\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730354542e3,sidebarPosition:1,frontMatter:{slug:"/components/container/gmap/benchmark",title:"\u5b57\u5178\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:1,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u5b57\u5178\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/components/container/gmap/usage"},next:{title:"\u5b57\u5178\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/gf-site/docs/components/container/gmap/funcs"}},r={},l=[{value:"\u6027\u80fd\u6d4b\u8bd5",id:"\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"\u5e76\u53d1\u5b89\u5168",id:"\u5e76\u53d1\u5b89\u5168",level:3},{value:"\u975e\u5e76\u53d1\u5b89\u5168",id:"\u975e\u5e76\u53d1\u5b89\u5168",level:3},{value:"\u4e0d\u540c\u7c7b\u578bmap\u6027\u80fd",id:"\u4e0d\u540c\u7c7b\u578bmap\u6027\u80fd",level:3},{value:"<code>gmap</code> \u4e0e <code>sync.Map</code> \u6027\u80fd\u6bd4\u8f83",id:"gmap-\u4e0e-syncmap-\u6027\u80fd\u6bd4\u8f83",level:3}];function m(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,p.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"\u6027\u80fd\u6d4b\u8bd5",children:"\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,a.jsx)(o.h3,{id:"\u5e76\u53d1\u5b89\u5168",children:"\u5e76\u53d1\u5b89\u5168"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"https://github.com/gogf/gf/v2/blob/master/container/gmap/gmap_z_bench_safe_test.go",children:"https://github.com/gogf/gf/v2/blob/master/container/gmap/gmap_z_bench_safe_test.go"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"goos: linux\ngoarch: amd64\nBenchmark_IntIntMap_Set-4               10000000               202 ns/op              15 B/op          0 allocs/op\nBenchmark_IntAnyMap_Set-4               10000000               262 ns/op              29 B/op          1 allocs/op\nBenchmark_IntStrMap_Set-4               10000000               241 ns/op              22 B/op          0 allocs/op\nBenchmark_AnyAnyMap_Set-4                5000000               359 ns/op              40 B/op          2 allocs/op\nBenchmark_StrIntMap_Set-4                5000000               305 ns/op              26 B/op          1 allocs/op\nBenchmark_StrAnyMap_Set-4                5000000               354 ns/op              40 B/op          2 allocs/op\nBenchmark_StrStrMap_Set-4                5000000               338 ns/op              32 B/op          1 allocs/op\nBenchmark_IntIntMap_Get-4               20000000              86.6 ns/op               0 B/op          0 allocs/op\nBenchmark_IntAnyMap_Get-4               30000000              69.7 ns/op               0 B/op          0 allocs/op\nBenchmark_IntStrMap_Get-4               30000000              69.6 ns/op               0 B/op          0 allocs/op\nBenchmark_AnyAnyMap_Get-4               20000000              74.4 ns/op               0 B/op          0 allocs/op\nBenchmark_StrIntMap_Get-4               20000000               116 ns/op               7 B/op          0 allocs/op\nBenchmark_StrAnyMap_Get-4               20000000              92.3 ns/op               7 B/op          0 allocs/op\nBenchmark_StrStrMap_Get-4               20000000              91.9 ns/op               7 B/op          0 allocs/op\n"})}),"\n",(0,a.jsx)(o.h3,{id:"\u975e\u5e76\u53d1\u5b89\u5168",children:"\u975e\u5e76\u53d1\u5b89\u5168"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"https://github.com/gogf/gf/v2/blob/master/container/gmap/gmap_z_bench_unsafe_test.go",children:"https://github.com/gogf/gf/v2/blob/master/container/gmap/gmap_z_bench_unsafe_test.go"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"goos: linux\ngoarch: amd64\nBenchmark_Unsafe_IntIntMap_Set-4        10000000               318 ns/op              62 B/op          0 allocs/op\nBenchmark_Unsafe_IntAnyMap_Set-4         5000000               282 ns/op              57 B/op          1 allocs/op\nBenchmark_Unsafe_IntStrMap_Set-4         5000000               332 ns/op              82 B/op          1 allocs/op\nBenchmark_Unsafe_AnyAnyMap_Set-4         3000000               471 ns/op              73 B/op          2 allocs/op\nBenchmark_Unsafe_StrIntMap_Set-4         5000000               429 ns/op              82 B/op          1 allocs/op\nBenchmark_Unsafe_StrAnyMap_Set-4         3000000               424 ns/op              73 B/op          2 allocs/op\nBenchmark_Unsafe_StrStrMap_Set-4         2000000               515 ns/op              96 B/op          2 allocs/op\nBenchmark_Unsafe_IntIntMap_Get-4        10000000               133 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_IntAnyMap_Get-4        20000000               134 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_IntStrMap_Get-4        10000000               126 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_AnyAnyMap_Get-4        10000000               166 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_StrIntMap_Get-4         5000000               246 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_StrAnyMap_Get-4        10000000               238 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_StrStrMap_Get-4         5000000               229 ns/op               7 B/op          0 allocs/op\n"})}),"\n",(0,a.jsx)(o.h3,{id:"\u4e0d\u540c\u7c7b\u578bmap\u6027\u80fd",children:"\u4e0d\u540c\u7c7b\u578bmap\u6027\u80fd"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"https://github.com/gogf/gf/v2/blob/master/container/gmap/gmap_z_bench_maps_test.go",children:"https://github.com/gogf/gf/v2/blob/master/container/gmap/gmap_z_bench_maps_test.go"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"goos: linux\ngoarch: amd64\nBenchmark_HashMap_Set-4                  5000000               349 ns/op              40 B/op          2 allocs/op\nBenchmark_ListMap_Set-4                  3000000               455 ns/op              87 B/op          3 allocs/op\nBenchmark_TreeMap_Set-4                  3000000               481 ns/op              28 B/op          2 allocs/op\nBenchmark_HashMap_Get-4                 30000000              67.8 ns/op               0 B/op          0 allocs/op\nBenchmark_ListMap_Get-4                 20000000              74.5 ns/op               0 B/op          0 allocs/op\nBenchmark_TreeMap_Get-4                 20000000               189 ns/op               8 B/op          1 allocs/op\n"})}),"\n",(0,a.jsxs)(o.h3,{id:"gmap-\u4e0e-syncmap-\u6027\u80fd\u6bd4\u8f83",children:[(0,a.jsx)(o.code,{children:"gmap"})," \u4e0e ",(0,a.jsx)(o.code,{children:"sync.Map"})," \u6027\u80fd\u6bd4\u8f83"]}),"\n",(0,a.jsxs)(o.p,{children:["go\u8bed\u8a00\u4ece ",(0,a.jsx)(o.code,{children:"1.9"})," \u7248\u672c\u5f00\u59cb\u5f15\u5165\u4e86\u5e76\u53d1\u5b89\u5168\u7684 ",(0,a.jsx)(o.code,{children:"sync.Map"}),"\uff0c\u4f46 ",(0,a.jsx)(o.code,{children:"gmap"})," \u6bd4\u8f83\u4e8e\u6807\u51c6\u5e93\u7684 ",(0,a.jsx)(o.code,{children:"sync.Map"})," \u6027\u80fd\u66f4\u52a0\u4f18\u5f02\uff0c\u5e76\u4e14\u529f\u80fd\u66f4\u52a0\u4e30\u5bcc\u3002"]}),"\n",(0,a.jsxs)(o.p,{children:["\u6211\u4eec\u6765\u770b\u770b\u57fa\u51c6\u6d4b\u8bd5\u5bf9\u6bd4\u7ed3\u679c\uff1a ",(0,a.jsx)(o.a,{href:"https://github.com/gogf/gf/v2/blob/master/container/gmap/gmap_z_bench_syncmap_test.go",children:"https://github.com/gogf/gf/v2/blob/master/container/gmap/gmap_z_bench_syncmap_test.go"})]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"goos: linux\ngoarch: amd64\nBenchmark_GMapSet-4                     10000000               209 ns/op              15 B/op          0 allocs/op\nBenchmark_SyncMapSet-4                   3000000               451 ns/op              67 B/op          3 allocs/op\nBenchmark_GMapGet-4                     30000000              66.4 ns/op               0 B/op          0 allocs/op\nBenchmark_SyncMapGet-4                  30000000              36.0 ns/op               0 B/op          0 allocs/op\nBenchmark_GMapRemove-4                  10000000               207 ns/op               0 B/op          0 allocs/op\nBenchmark_SyncMapRmove-4                30000000              42.4 ns/op               0 B/op          0 allocs/op\n"})})]})}function h(n={}){const{wrapper:o}={...(0,p.R)(),...n.components};return o?(0,a.jsx)(o,{...n,children:(0,a.jsx)(m,{...n})}):m(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>s,x:()=>c});var a=e(96540);const p={},t=a.createContext(p);function s(n){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function c(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(p):n.components||p:s(n.components),a.createElement(t.Provider,{value:o},n.children)}}}]);