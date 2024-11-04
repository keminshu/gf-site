"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[35469],{117368:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>j,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u5bf9\u8c61\u521b\u5efa","title":"\u901a\u7528\u7f16\u89e3\u7801-\u5bf9\u8c61\u521b\u5efa","description":"gjson \u6a21\u5757\u9664\u4e86\u6700\u57fa\u7840\u652f\u6301\u7684 JSON \u6570\u636e\u683c\u5f0f\u521b\u5efa Json \u5bf9\u8c61\uff0c\u8fd8\u652f\u6301\u5e38\u7528\u7684\u6570\u636e\u683c\u5f0f\u5185\u5bb9\u521b\u5efa Json \u5bf9\u8c61\u3002\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u4e3a\uff1a JSON, XML, INI, YAML, TOML, PROPERTIES\u3002\u6b64\u5916\uff0c\u4e5f\u652f\u6301\u76f4\u63a5\u901a\u8fc7 struct \u5bf9\u8c61\u521b\u5efa Json \u5bf9\u8c61\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u5bf9\u8c61\u521b\u5efa.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson","slug":"/docs/components/encoding-gjson-creation","permalink":"/en/docs/components/encoding-gjson-creation","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u5bf9\u8c61\u521b\u5efa.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/encoding-gjson-creation","title":"\u901a\u7528\u7f16\u89e3\u7801-\u5bf9\u8c61\u521b\u5efa","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u901a\u7528\u7f16\u89e3\u7801-gjson","permalink":"/en/docs/components/encoding-gjson"},"next":{"title":"\u901a\u7528\u7f16\u89e3\u7801-\u5c42\u7ea7\u8bbf\u95ee","permalink":"/en/docs/components/encoding-gjson-nested-visiting"}}');var s=o(474848),c=o(28453);const d={slug:"/docs/components/encoding-gjson-creation",title:"\u901a\u7528\u7f16\u89e3\u7801-\u5bf9\u8c61\u521b\u5efa",sidebar_position:0,hide_title:!0},i=void 0,r={},l=[{value:"\u4f7f\u7528 <code>New</code> \u65b9\u6cd5\u521b\u5efa",id:"\u4f7f\u7528-new-\u65b9\u6cd5\u521b\u5efa",level:3},{value:"\u901a\u8fc7 <code>JSON</code> \u6570\u636e\u521b\u5efa",id:"\u901a\u8fc7-json-\u6570\u636e\u521b\u5efa",level:4},{value:"\u901a\u8fc7 <code>XML</code> \u6570\u636e\u521b\u5efa",id:"\u901a\u8fc7-xml-\u6570\u636e\u521b\u5efa",level:4},{value:"\u901a\u8fc7 <code>Strcut</code> \u5bf9\u8c61\u521b\u5efa",id:"\u901a\u8fc7-strcut-\u5bf9\u8c61\u521b\u5efa",level:4},{value:"\u81ea\u5b9a\u4e49 <code>Struct</code> \u8f6c\u6362\u6807\u7b7e",id:"\u81ea\u5b9a\u4e49-struct-\u8f6c\u6362\u6807\u7b7e",level:4},{value:"\u4f7f\u7528 <code>Load*</code> \u65b9\u6cd5\u521b\u5efa",id:"\u4f7f\u7528-load-\u65b9\u6cd5\u521b\u5efa",level:3},{value:"\u901a\u8fc7 <code>Load</code> \u65b9\u6cd5\u521b\u5efa",id:"\u901a\u8fc7-load-\u65b9\u6cd5\u521b\u5efa",level:4},{value:"\u901a\u8fc7 <code>LoadContent</code> \u521b\u5efa",id:"\u901a\u8fc7-loadcontent-\u521b\u5efa",level:4}];function a(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gjson"})," \u6a21\u5757\u9664\u4e86\u6700\u57fa\u7840\u652f\u6301\u7684 ",(0,s.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\u521b\u5efa ",(0,s.jsx)(e.code,{children:"Json"})," \u5bf9\u8c61\uff0c\u8fd8\u652f\u6301\u5e38\u7528\u7684\u6570\u636e\u683c\u5f0f\u5185\u5bb9\u521b\u5efa ",(0,s.jsx)(e.code,{children:"Json"})," \u5bf9\u8c61\u3002\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u4e3a\uff1a ",(0,s.jsx)(e.code,{children:"JSON"}),", ",(0,s.jsx)(e.code,{children:"XML"}),", ",(0,s.jsx)(e.code,{children:"INI"}),", ",(0,s.jsx)(e.code,{children:"YAML"}),", ",(0,s.jsx)(e.code,{children:"TOML"}),", ",(0,s.jsx)(e.code,{children:"PROPERTIES"}),"\u3002\u6b64\u5916\uff0c\u4e5f\u652f\u6301\u76f4\u63a5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"struct"})," \u5bf9\u8c61\u521b\u5efa ",(0,s.jsx)(e.code,{children:"Json"})," \u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5bf9\u8c61\u521b\u5efa\u5e38\u7528 ",(0,s.jsx)(e.code,{children:"New"})," \u548c ",(0,s.jsx)(e.code,{children:"Load*"})," \u65b9\u6cd5\uff0c\u66f4\u591a\u7684\u65b9\u6cd5\u8bf7\u67e5\u770b\u63a5\u53e3\u6587\u6863\uff1a ",(0,s.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson"})]}),"\n",(0,s.jsxs)(e.h3,{id:"\u4f7f\u7528-new-\u65b9\u6cd5\u521b\u5efa",children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"New"})," \u65b9\u6cd5\u521b\u5efa"]}),"\n",(0,s.jsxs)(e.h4,{id:"\u901a\u8fc7-json-\u6570\u636e\u521b\u5efa",children:["\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u521b\u5efa"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'jsonContent := `{"name":"john", "score":"100"}`\nj := gjson.New(jsonContent)\nfmt.Println(j.Get("name"))\nfmt.Println(j.Get("score"))\n// Output:\n// john\n// 100\n'})}),"\n",(0,s.jsxs)(e.h4,{id:"\u901a\u8fc7-xml-\u6570\u636e\u521b\u5efa",children:["\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"XML"})," \u6570\u636e\u521b\u5efa"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'jsonContent := `<?xml version="1.0" encoding="UTF-8"?><doc><name>john</name><score>100</score></doc>`\nj := gjson.New(jsonContent)\n// Note that there\'s root node in the XML content.\nfmt.Println(j.Get("doc.name"))\nfmt.Println(j.Get("doc.score"))\n// Output:\n// john\n// 100\n'})}),"\n",(0,s.jsxs)(e.h4,{id:"\u901a\u8fc7-strcut-\u5bf9\u8c61\u521b\u5efa",children:["\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"Strcut"})," \u5bf9\u8c61\u521b\u5efa"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'type Me struct {\n    Name  string `json:"name"`\n    Score int    `json:"score"`\n}\nme := Me{\n    Name:  "john",\n    Score: 100,\n}\nj := gjson.New(me)\nfmt.Println(j.Get("name"))\nfmt.Println(j.Get("score"))\n// Output:\n// john\n// 100\n'})}),"\n",(0,s.jsxs)(e.h4,{id:"\u81ea\u5b9a\u4e49-struct-\u8f6c\u6362\u6807\u7b7e",children:["\u81ea\u5b9a\u4e49 ",(0,s.jsx)(e.code,{children:"Struct"})," \u8f6c\u6362\u6807\u7b7e"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'type Me struct {\n    Name  string `tag:"name"`\n    Score int    `tag:"score"`\n    Title string\n}\nme := Me{\n    Name:  "john",\n    Score: 100,\n    Title: "engineer",\n}\n// The parameter <tags> specifies custom priority tags for struct conversion to map,\n// multiple tags joined with char \',\'.\nj := gjson.NewWithTag(me, "tag")\nfmt.Println(j.Get("name"))\nfmt.Println(j.Get("score"))\nfmt.Println(j.Get("Title"))\n// Output:\n// john\n// 100\n// engineer\n'})}),"\n",(0,s.jsxs)(e.h3,{id:"\u4f7f\u7528-load-\u65b9\u6cd5\u521b\u5efa",children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"Load*"})," \u65b9\u6cd5\u521b\u5efa"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6700\u5e38\u7528\u7684\u662f ",(0,s.jsx)(e.code,{children:"Load"})," \u548c ",(0,s.jsx)(e.code,{children:"LoadContent"})," \u65b9\u6cd5\uff0c\u524d\u8005\u901a\u8fc7\u6587\u4ef6\u8def\u5f84\u8bfb\u53d6\uff0c\u540e\u8005\u901a\u8fc7\u7ed9\u5b9a\u5185\u5bb9\u521b\u5efa ",(0,s.jsx)(e.code,{children:"Json"})," \u5bf9\u8c61\u3002\u65b9\u6cd5\u5185\u90e8\u4f1a\u81ea\u52a8\u8bc6\u522b\u6570\u636e\u683c\u5f0f\uff0c\u5e76\u81ea\u52a8\u89e3\u6790\u8f6c\u6362\u4e3a ",(0,s.jsx)(e.code,{children:"Json"})," \u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(e.h4,{id:"\u901a\u8fc7-load-\u65b9\u6cd5\u521b\u5efa",children:["\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"Load"})," \u65b9\u6cd5\u521b\u5efa"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"JSON"})," \u6587\u4ef6"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'    jsonFilePath := gtest.DataPath("json", "data1.json")\n    j, _ := gjson.Load(jsonFilePath)\n    fmt.Println(j.Get("name"))\n    fmt.Println(j.Get("score"))\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"XML"})," \u6587\u4ef6"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'    jsonFilePath := gtest.DataPath("xml", "data1.xml")\n    j, _ := gjson.Load(jsonFilePath)\n    fmt.Println(j.Get("doc.name"))\n    fmt.Println(j.Get("doc.score"))\n'})}),"\n",(0,s.jsxs)(e.h4,{id:"\u901a\u8fc7-loadcontent-\u521b\u5efa",children:["\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"LoadContent"})," \u521b\u5efa"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'jsonContent := `{"name":"john", "score":"100"}`\nj, _ := gjson.LoadContent(jsonContent)\nfmt.Println(j.Get("name"))\nfmt.Println(j.Get("score"))\n// Output:\n// john\n// 100\n'})})]})}function j(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>d,x:()=>i});var t=o(296540);const s={},c=t.createContext(s);function d(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);