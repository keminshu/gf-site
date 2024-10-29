"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[39921],{239108:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=e(474848),i=e(28453);const r={title:"\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0},c=void 0,o={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",title:"\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/versioned_docs/version-2.6.x/3-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/2-\u96c6\u5408\u7c7b\u578b-gset/0-\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"3-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/2-\u96c6\u5408\u7c7b\u578b-gset",slug:"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/3-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/2-\u96c6\u5408\u7c7b\u578b-gset/0-\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:0,frontMatter:{title:"\u96c6\u5408\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u5408\u7c7b\u578b-gset",permalink:"/gf-site/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/"},next:{title:"\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",permalink:"/gf-site/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u96c6\u5408\u7c7b\u578b-gset/\u96c6\u5408\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5"}},d={},l=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u4ea4\u5dee\u5e76\u8865\u96c6",id:"\u4ea4\u5dee\u5e76\u8865\u96c6",level:2},{value:"<code>Contains/ContainsI</code> \u5305\u542b\u5224\u65ad",id:"containscontainsi-\u5305\u542b\u5224\u65ad",level:2},{value:"<code>Pop/Pops</code> \u96c6\u5408\u9879\u51fa\u6808",id:"poppops-\u96c6\u5408\u9879\u51fa\u6808",level:2},{value:"<code>Join</code> \u96c6\u5408\u9879\u4e32\u8fde",id:"join-\u96c6\u5408\u9879\u4e32\u8fde",level:2},{value:"<code>IsSubsetOf</code> \u5b50\u96c6\u5224\u65ad",id:"issubsetof-\u5b50\u96c6\u5224\u65ad",level:2},{value:"<code>AddIfNotExist*</code> \u5224\u65ad\u6027\u5199\u5165",id:"addifnotexist-\u5224\u65ad\u6027\u5199\u5165",level:2},{value:"<code>Walk</code> \u904d\u5386\u4fee\u6539",id:"walk-\u904d\u5386\u4fee\u6539",level:2},{value:"<code>JSON</code> \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217",id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",level:2}];function a(n){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/container/gset"\n\t"fmt"\n)\n\nfunc main() {\n\t// \u521b\u5efa\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u96c6\u5408\u5bf9\u8c61\n\ts := gset.New(true)\n\n\t// \u6dfb\u52a0\u6570\u636e\u9879\n\ts.Add(1)\n\n\t// \u6279\u91cf\u6dfb\u52a0\u6570\u636e\u9879\n\ts.Add([]interface{}{1, 2, 3}...)\n\n\t// \u96c6\u5408\u6570\u636e\u9879\u5927\u5c0f\n\tfmt.Println(s.Size())\n\n\t// \u96c6\u5408\u4e2d\u662f\u5426\u5b58\u5728\u6307\u5b9a\u6570\u636e\u9879\n\tfmt.Println(s.Contains(2))\n\n\t// \u8fd4\u56de\u6570\u636e\u9879slice\n\tfmt.Println(s.Slice())\n\n\t// \u5220\u9664\u6570\u636e\u9879\n\ts.Remove(3)\n\n\t// \u904d\u5386\u6570\u636e\u9879\n\ts.Iterator(func(v interface{}) bool {\n\t\tfmt.Println("Iterator:", v)\n\t\treturn true\n\t})\n\n\t// \u5c06\u96c6\u5408\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\n\tfmt.Println(s.String())\n\n\t// \u5e76\u53d1\u5b89\u5168\u5199\u9501\u64cd\u4f5c\n\ts.LockFunc(func(m map[interface{}]struct{}) {\n\t\tm[4] = struct{}{}\n\t})\n\n\t// \u5e76\u53d1\u5b89\u5168\u8bfb\u9501\u64cd\u4f5c\n\ts.RLockFunc(func(m map[interface{}]struct{}) {\n\t\tfmt.Println(m)\n\t})\n\n\t// \u6e05\u7a7a\u96c6\u5408\n\ts.Clear()\n\tfmt.Println(s.Size())\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"3\ntrue\n[1 2 3]\nIterator: 1\nIterator: 2\n[1 2]\nmap[1:{} 2:{} 4:{}]\n0\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u4ea4\u5dee\u5e76\u8865\u96c6",children:"\u4ea4\u5dee\u5e76\u8865\u96c6"}),"\n",(0,s.jsx)(t.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u5b9e\u73b0\u4ea4\u5dee\u5e76\u8865\u96c6\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ed3\u679c\u96c6\u5408\uff0c"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"func (set *Set) Intersect(others ...*Set) (newSet *Set)\nfunc (set *Set) Diff(others ...*Set) (newSet *Set)\nfunc (set *Set) Union(others ...*Set) (newSet *Set)\nfunc (set *Set) Complement(full *Set) (newSet *Set)\n"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Intersect"}),": \u4ea4\u96c6\uff0c\u5c5e\u4e8eset\u4e14\u5c5e\u4e8eothers\u7684\u5143\u7d20\u4e3a\u5143\u7d20\u7684\u96c6\u5408\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Diff"}),": \u5dee\u96c6\uff0c\u5c5e\u4e8eset\u4e14\u4e0d\u5c5e\u4e8eothers\u7684\u5143\u7d20\u4e3a\u5143\u7d20\u7684\u96c6\u5408\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Union"}),": \u5e76\u96c6\uff0c\u5c5e\u4e8eset\u6216\u5c5e\u4e8eothers\u7684\u5143\u7d20\u4e3a\u5143\u7d20\u7684\u96c6\u5408\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Complement"}),": \u8865\u96c6\uff0c(\u524d\u63d0: set\u5e94\u5f53\u4e3afull\u7684\u5b50\u96c6)\u5c5e\u4e8e\u5168\u96c6full\u4e0d\u5c5e\u4e8e\u96c6\u5408set\u7684\u5143\u7d20\u7ec4\u6210\u7684\u96c6\u5408\u3002\u5982\u679c\u7ed9\u5b9a\u7684full\u96c6\u5408\u4e0d\u662fset\u7684\u5168\u96c6\u65f6\uff0c\u8fd4\u56defull\u4e0eset\u7684\u5dee\u96c6."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u901a\u8fc7\u96c6\u5408\u65b9\u6cd5\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff0c\u4ea4\u5dee\u5e76\u96c6\u65b9\u6cd5\u652f\u6301\u591a\u4e2a\u96c6\u5408\u53c2\u6570\u8fdb\u884c\u8ba1\u7b97\u3002\u4ee5\u4e0b\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u53ea\u4f7f\u7528\u4e00\u4e2a\u53c2\u6570\u96c6\u5408\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n\ts1 := gset.NewFrom(g.Slice{1, 2, 3})\n\ts2 := gset.NewFrom(g.Slice{4, 5, 6})\n\ts3 := gset.NewFrom(g.Slice{1, 2, 3, 4, 5, 6, 7})\n\n\t// \u4ea4\u96c6\n\tfmt.Println(s3.Intersect(s1).Slice())\n\t// \u5dee\u96c6\n\tfmt.Println(s3.Diff(s1).Slice())\n\t// \u5e76\u96c6\n\tfmt.Println(s1.Union(s2).Slice())\n\t// \u8865\u96c6\n\tfmt.Println(s1.Complement(s3).Slice())\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"[1 2 3]\n[4 5 6 7]\n[1 2 3 4 5 6]\n[7 4 5 6]\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"containscontainsi-\u5305\u542b\u5224\u65ad",children:[(0,s.jsx)(t.code,{children:"Contains/ContainsI"})," \u5305\u542b\u5224\u65ad"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n\tvar set gset.StrSet\n\tset.Add("a")\n\tfmt.Println(set.Contains("a"))\n\tfmt.Println(set.Contains("A"))\n\tfmt.Println(set.ContainsI("A"))\n\n\t// Output:\n\t// true\n\t// false\n\t// true\n}\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"poppops-\u96c6\u5408\u9879\u51fa\u6808",children:[(0,s.jsx)(t.code,{children:"Pop/Pops"})," \u96c6\u5408\u9879\u51fa\u6808"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n\tvar set gset.Set\n\tset.Add(1, 2, 3, 4)\n\tfmt.Println(set.Pop())\n\tfmt.Println(set.Pops(2))\n\tfmt.Println(set.Size())\n\n\t// May Output:\n\t// 1\n\t// [2 3]\n\t// 1\n}\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"join-\u96c6\u5408\u9879\u4e32\u8fde",children:[(0,s.jsx)(t.code,{children:"Join"})," \u96c6\u5408\u9879\u4e32\u8fde"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n\tvar set gset.Set\n\tset.Add("a", "b", "c", "d")\n\tfmt.Println(set.Join(","))\n\n\t// May Output:\n\t// a,b,c,d\n}\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"issubsetof-\u5b50\u96c6\u5224\u65ad",children:[(0,s.jsx)(t.code,{children:"IsSubsetOf"})," \u5b50\u96c6\u5224\u65ad"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gset"\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tvar s1, s2 gset.Set\n\ts1.Add(g.Slice{1, 2, 3}...)\n\ts2.Add(g.Slice{2, 3}...)\n\tfmt.Println(s1.IsSubsetOf(&s2))\n\tfmt.Println(s2.IsSubsetOf(&s1))\n\n\t// Output:\n\t// false\n\t// true\n}\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"addifnotexist-\u5224\u65ad\u6027\u5199\u5165",children:[(0,s.jsx)(t.code,{children:"AddIfNotExist*"})," \u5224\u65ad\u6027\u5199\u5165"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5224\u65ad\u6027\u5199\u5165\u662f\u6307\u5f53\u6307\u5b9a\u7684\u6570\u636e\u9879\u4e0d\u5b58\u5728\u65f6\u5219\u5199\u5165\u5e76\u4e14\u65b9\u6cd5\u8fd4\u56de ",(0,s.jsx)(t.code,{children:"true"}),"\uff0c\u5426\u5219\u5ffd\u7565\u5438\u5165\u5e76\u4e14\u65b9\u6cd5\u8fd4\u56de ",(0,s.jsx)(t.code,{children:"false"}),"\u3002\u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"AddIfNotExist"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"AddIfNotExistFunc"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"AddIfNotExistFuncLock"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u65b9\u6cd5\u5177\u4f53\u63cf\u8ff0\u8bf7\u67e5\u770b\u63a5\u53e3\u6587\u6863\u6216\u6e90\u7801\u6ce8\u91ca\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n\tvar set gset.Set\n\tfmt.Println(set.AddIfNotExist(1))\n\tfmt.Println(set.AddIfNotExist(1))\n\tfmt.Println(set.Slice())\n\n\t// Output:\n\t// true\n\t// false\n\t// [1]\n}\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"walk-\u904d\u5386\u4fee\u6539",children:[(0,s.jsx)(t.code,{children:"Walk"})," \u904d\u5386\u4fee\u6539"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gset"\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tvar (\n\t\tset    gset.StrSet\n\t\tnames  = g.SliceStr{"user", "user_detail"}\n\t\tprefix = "gf_"\n\t)\n\tset.Add(names...)\n\t// Add prefix for given table names.\n\tset.Walk(func(item string) string {\n\t\treturn prefix + item\n\t})\n\tfmt.Println(set.Slice())\n\n\t// May Output:\n\t// [gf_user gf_user_detail]\n}\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",children:[(0,s.jsx)(t.code,{children:"JSON"})," \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"gset"})," \u6a21\u5757\u4e0b\u7684\u6240\u6709\u5bb9\u5668\u7c7b\u578b\u5747\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93 ",(0,s.jsx)(t.code,{children:"json"})," \u6570\u636e\u683c\u5f0f\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u63a5\u53e3\u3002"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"Marshal"})}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n   \t"encoding/json"\n   \t"fmt"\n   \t"github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n   \ttype Student struct {\n   \t\tId     int\n   \t\tName   string\n   \t\tScores *gset.IntSet\n   \t}\n   \ts := Student{\n   \t\tId:     1,\n   \t\tName:   "john",\n   \t\tScores: gset.NewIntSetFrom([]int{100, 99, 98}),\n   \t}\n   \tb, _ := json.Marshal(s)\n   \tfmt.Println(string(b))\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{"Id":1,"Name":"john","Scores":[100,99,98]}\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"Unmarshal"})}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\n\nimport (\n   \t"encoding/json"\n   \t"fmt"\n   \t"github.com/gogf/gf/v2/container/gset"\n)\n\n\nfunc main() {\n   \tb := []byte(`{"Id":1,"Name":"john","Scores":[100,99,98]}`)\n   \ttype Student struct {\n   \t\tId     int\n   \t\tName   string\n   \t\tScores *gset.IntSet\n   \t}\n   \ts := Student{}\n   \tjson.Unmarshal(b, &s)\n   \tfmt.Println(s)\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"{1 john [100,99,98]}\n"})})]})}function f(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>o});var s=e(296540);const i={},r=s.createContext(i);function c(n){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);