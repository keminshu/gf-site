"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[54398],{893105:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-UnmarshalValue","title":"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue","description":"\u5f53\u7136\uff0c\u60f3\u5fc5\u60a8\u5df2\u7ecf\u731c\u5230\u4e86\uff0c\u5728\u5bf9\u4e00\u4e9b\u590d\u6742\u7c7b\u578b\uff08\u5982 struct\uff09\u7684\u8f6c\u6362\u65f6\uff0c gconv \u6a21\u5757\u5185\u90e8\u5176\u5b9e\u4f7f\u7528\u4e86\u53cd\u5c04\u7684\u7279\u6027\u6765\u5b9e\u73b0\u7684\u3002\u8fd9\u867d\u7136\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u6377\uff0c\u4f46\u662f\u8fd9\u786e\u5b9e\u662f\u4ee5\u6027\u80fd\u635f\u8017\u4e3a\u4ee3\u4ef7\u7684\u3002\u5176\u5b9e\u5728\u5bf9\u4e8e struct \u8f6c\u6362\u65f6\uff0c\u5982\u679c\u5f00\u53d1\u8005\u5df2\u7ecf \u660e\u786e\u8f6c\u6362\u89c4\u5219\uff0c\u5e76\u4e14\u5bf9\u4e8e\u5176\u4e2d\u7684\u6027\u80fd\u635f\u8017\u6bd4\u8f83\u5728\u610f\uff0c\u90a3\u4e48\u53ef\u4ee5\u5bf9\u7279\u5b9a\u7684 struct \u5b9e\u73b0 UnmarshalValue \u63a5\u53e3\u6765\u5b9e\u73b0 \u81ea\u5b9a\u4e49\u8f6c\u6362\u3002\u5f53\u4f7f\u7528 gconv \u6a21\u5757\u5bf9\u8be5 struct \u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u65e0\u8bba\u8be5 struct \u662f\u76f4\u63a5\u4f5c\u4e3a\u8f6c\u6362\u5bf9\u8c61\u6216\u8005\u4f5c\u4e3a\u8f6c\u6362\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c gconv \u90fd\u5c06\u4f1a\u81ea\u52a8\u8bc6\u522b\u5176\u5b9e\u73b0\u7684 UnmarshalValue \u63a5\u53e3\u5e76\u76f4\u63a5\u8c03\u7528\u8be5\u63a5\u53e3\u5b9e\u73b0\u7c7b\u578b\u8f6c\u6362\uff0c\u800c\u4e0d\u4f1a\u4f7f\u7528\u53cd\u5c04\u7279\u6027\u6765\u5b9e\u73b0\u8f6c\u6362\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-UnmarshalValue.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362","slug":"/docs/core/gconv-unmarshal-value","permalink":"/en/docs/core/gconv-unmarshal-value","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-UnmarshalValue.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/core/gconv-unmarshal-value","title":"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue","sidebar_position":6,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u7c7b\u578b\u8f6c\u6362-Converter\u7279\u6027","permalink":"/en/docs/core/gconv-converter"},"next":{"title":"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","permalink":"/en/docs/core/gconv-benchmark"}}');var s=r(474848),t=r(28453);const c={slug:"/docs/core/gconv-unmarshal-value",title:"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue",sidebar_position:6,hide_title:!0},i=void 0,o={},d=[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"1\u3001\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u67e5\u8be2\u7ed3\u679c <code>struct</code> \u8f6c\u6362",id:"1\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u67e5\u8be2\u7ed3\u679c-struct-\u8f6c\u6362",level:3},{value:"2\u3001\u81ea\u5b9a\u4e49\u4e8c\u8fdb\u5236TCP\u6570\u636e\u89e3\u5305",id:"2\u81ea\u5b9a\u4e49\u4e8c\u8fdb\u5236tcp\u6570\u636e\u89e3\u5305",level:3}];function l(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u5f53\u7136\uff0c\u60f3\u5fc5\u60a8\u5df2\u7ecf\u731c\u5230\u4e86\uff0c\u5728\u5bf9\u4e00\u4e9b\u590d\u6742\u7c7b\u578b\uff08\u5982 ",(0,s.jsx)(e.code,{children:"struct"}),"\uff09\u7684\u8f6c\u6362\u65f6\uff0c ",(0,s.jsx)(e.code,{children:"gconv"})," \u6a21\u5757\u5185\u90e8\u5176\u5b9e\u4f7f\u7528\u4e86\u53cd\u5c04\u7684\u7279\u6027\u6765\u5b9e\u73b0\u7684\u3002\u8fd9\u867d\u7136\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u6377\uff0c\u4f46\u662f\u8fd9\u786e\u5b9e\u662f\u4ee5\u6027\u80fd\u635f\u8017\u4e3a\u4ee3\u4ef7\u7684\u3002\u5176\u5b9e\u5728\u5bf9\u4e8e ",(0,s.jsx)(e.code,{children:"struct"})," \u8f6c\u6362\u65f6\uff0c\u5982\u679c\u5f00\u53d1\u8005\u5df2\u7ecf ",(0,s.jsx)(e.strong,{children:"\u660e\u786e\u8f6c\u6362\u89c4\u5219"}),"\uff0c\u5e76\u4e14\u5bf9\u4e8e\u5176\u4e2d\u7684\u6027\u80fd\u635f\u8017\u6bd4\u8f83\u5728\u610f\uff0c\u90a3\u4e48\u53ef\u4ee5\u5bf9\u7279\u5b9a\u7684 ",(0,s.jsx)(e.code,{children:"struct"})," \u5b9e\u73b0 ",(0,s.jsx)(e.code,{children:"UnmarshalValue"})," \u63a5\u53e3\u6765\u5b9e\u73b0 ",(0,s.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49\u8f6c\u6362"}),"\u3002\u5f53\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"gconv"})," \u6a21\u5757\u5bf9\u8be5 ",(0,s.jsx)(e.code,{children:"struct"})," \u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u65e0\u8bba\u8be5 ",(0,s.jsx)(e.code,{children:"struct"})," \u662f\u76f4\u63a5\u4f5c\u4e3a\u8f6c\u6362\u5bf9\u8c61\u6216\u8005\u4f5c\u4e3a\u8f6c\u6362\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c ",(0,s.jsx)(e.code,{children:"gconv"})," \u90fd\u5c06\u4f1a\u81ea\u52a8\u8bc6\u522b\u5176\u5b9e\u73b0\u7684 ",(0,s.jsx)(e.code,{children:"UnmarshalValue"})," \u63a5\u53e3\u5e76\u76f4\u63a5\u8c03\u7528\u8be5\u63a5\u53e3\u5b9e\u73b0\u7c7b\u578b\u8f6c\u6362\uff0c\u800c\u4e0d\u4f1a\u4f7f\u7528\u53cd\u5c04\u7279\u6027\u6765\u5b9e\u73b0\u8f6c\u6362\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["\u6807\u51c6\u5e93\u7684\u5e38\u7528\u53cd\u5e8f\u5217\u5316\u63a5\u53e3\uff0c\u5982 ",(0,s.jsx)(e.code,{children:"UnmarshalText(text []byte) error"})," \u5176\u5b9e\u4e5f\u662f\u652f\u6301\u7684\u54df\uff0c\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,s.jsx)(e.code,{children:"UnmarshalValue"}),"\uff0c\u53ea\u662f\u53c2\u6570\u4e0d\u540c\u3002"]})}),"\n",(0,s.jsx)(e.h2,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"// apiUnmarshalValue is the interface for custom defined types customizing value assignment.\n// Note that only pointer can implement interface apiUnmarshalValue.\ntype apiUnmarshalValue interface {\n    UnmarshalValue(interface{}) error\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49 ",(0,s.jsx)(e.code,{children:"UnmarshalValue"})," \u65b9\u6cd5\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u8f6c\u6362\u3002\u8fd9\u91cc\u7684\u8f93\u5165\u53c2\u6570\u4e3a ",(0,s.jsx)(e.code,{children:"interface{}"})," \u7c7b\u578b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u4e2d\u901a\u8fc7 \u7c7b\u578b\u65ad\u8a00 \u6216\u8005\u5176\u4ed6\u65b9\u5f0f\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\u3002"]}),"\n",(0,s.jsxs)(e.admonition,{type:"warning",children:[(0,s.jsxs)(e.p,{children:["\u9700\u8981\u7279\u522b\u6ce8\u610f\uff0c\u7531\u4e8e ",(0,s.jsx)(e.code,{children:"UnmarshalValue"})," \u7c7b\u578b\u8f6c\u6362\u4f1a\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\uff0c\u56e0\u6b64\u9700\u8981\u4fdd\u8bc1\u8be5\u63a5\u53e3\u5b9e\u73b0\u7684\u63a5\u53d7\u8005( ",(0,s.jsx)(e.code,{children:"Receiver"}),")\u662f\u6307\u9488\u7c7b\u578b\u3002"]}),(0,s.jsx)(e.p,{children:"\u6b63\u786e\u7684\u63a5\u53e3\u5b9e\u73b0\u5b9a\u4e49\u793a\u4f8b\uff08\u4f7f\u7528\u6307\u9488\u63a5\u53d7\uff09\uff1a"}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func (c *Receiver) UnmarshalValue(interface{}) error\n"})}),(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u9519\u8bef\u7684"})," \u63a5\u53e3\u5b9e\u73b0\u5b9a\u4e49\u793a\u4f8b\uff08\u4f7f\u7528\u4e86\u503c\u4f20\u9012\uff09\uff1a"]}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func (c Receiver) UnmarshalValue(interface{}) error\n"})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.h3,{id:"1\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u67e5\u8be2\u7ed3\u679c-struct-\u8f6c\u6362",children:["1\u3001\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u67e5\u8be2\u7ed3\u679c ",(0,s.jsx)(e.code,{children:"struct"})," \u8f6c\u6362"]}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u636e\u8868\u7ed3\u6784\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `user` (\n   id bigint unsigned NOT NULL AUTO_INCREMENT,\n   passport varchar(45),\n   password char(32) NOT NULL,\n   nickname varchar(45) NOT NULL,\n   create_time timestamp NOT NULL,\n   PRIMARY KEY (id)\n) ;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\u4ee3\u7801\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/garray"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gtime"\n    "reflect"\n)\n\ntype User struct {\n    Id         int\n    Passport   string\n    Password   string\n    Nickname   string\n    CreateTime *gtime.Time\n}\n\n// \u5b9e\u73b0UnmarshalValue\u63a5\u53e3\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53\u8f6c\u6362\nfunc (user *User) UnmarshalValue(value interface{}) error {\n    if record, ok := value.(gdb.Record); ok {\n        *user = User{\n            Id:         record["id"].Int(),\n            Passport:   record["passport"].String(),\n            Password:   "",\n            Nickname:   record["nickname"].String(),\n            CreateTime: record["create_time"].GTime(),\n        }\n        return nil\n    }\n    return gerror.Newf(`unsupported value type for UnmarshalValue: %v`, reflect.TypeOf(value))\n}\n\nfunc main() {\n    var (\n        err   error\n        users []*User\n    )\n    array := garray.New(true)\n    for i := 1; i <= 10; i++ {\n        array.Append(g.Map{\n            "id":          i,\n            "passport":    fmt.Sprintf(`user_%d`, i),\n            "password":    fmt.Sprintf(`pass_%d`, i),\n            "nickname":    fmt.Sprintf(`name_%d`, i),\n            "create_time": gtime.NewFromStr("2018-10-24 10:00:00").String(),\n        })\n    }\n    // \u5199\u5165\u6570\u636e\n    _, err = g.Model("user").Data(array).Insert()\n    if err != nil {\n        panic(err)\n    }\n    // \u67e5\u8be2\u6570\u636e\n    err = g.Model("user").Order("id asc").Scan(&users)\n    if err != nil {\n        panic(err)\n    }\n    g.Dump(users)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'[\n    {\n        Id:         1,\n        Passport:   "user_1",\n        Password:   "",\n        Nickname:   "name_1",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n    {\n        Id:         2,\n        Passport:   "user_2",\n        Password:   "",\n        Nickname:   "name_2",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n    {\n        Id:         3,\n        Passport:   "user_3",\n        Password:   "",\n        Nickname:   "name_3",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n    {\n        Id:         4,\n        Passport:   "user_4",\n        Password:   "",\n        Nickname:   "name_4",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n    {\n        Id:         5,\n        Passport:   "user_5",\n        Password:   "",\n        Nickname:   "name_5",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n    {\n        Id:         6,\n        Passport:   "user_6",\n        Password:   "",\n        Nickname:   "name_6",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n    {\n        Id:         7,\n        Passport:   "user_7",\n        Password:   "",\n        Nickname:   "name_7",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n    {\n        Id:         8,\n        Passport:   "user_8",\n        Password:   "",\n        Nickname:   "name_8",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n    {\n        Id:         9,\n        Passport:   "user_9",\n        Password:   "",\n        Nickname:   "name_9",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n    {\n        Id:         10,\n        Passport:   "user_10",\n        Password:   "",\n        Nickname:   "name_10",\n        CreateTime: "2018-10-24 10:00:00",\n    },\n]\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u81ea\u5b9a\u4e49\u7684 ",(0,s.jsx)(e.code,{children:"UnmarshalValue"})," \u7c7b\u578b\u8f6c\u6362\u65b9\u6cd5\u4e2d\u6ca1\u6709\u4f7f\u7528\u5230\u53cd\u5c04\u7279\u6027\uff0c\u56e0\u6b64\u8f6c\u6362\u7684\u6027\u80fd\u4f1a\u5f97\u5230\u6781\u5927\u7684\u63d0\u5347\u3002\u5c0f\u4f19\u4f34\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u7740\u589e\u52a0\u5199\u5165\u7684\u6570\u636e\u91cf\uff08\u4f8b\u5982 ",(0,s.jsx)(e.code,{children:"100W"}),"\uff09\uff0c\u540c\u65f6\u5bf9\u6bd4\u4e00\u4e0b\u53bb\u6389 ",(0,s.jsx)(e.code,{children:"UnmarshalValue"})," \u540e\u7684\u7c7b\u578b\u8f6c\u6362\u6240\u5f00\u9500\u7684\u65f6\u95f4\u3002"]})}),"\n",(0,s.jsx)(e.h3,{id:"2\u81ea\u5b9a\u4e49\u4e8c\u8fdb\u5236tcp\u6570\u636e\u89e3\u5305",children:"2\u3001\u81ea\u5b9a\u4e49\u4e8c\u8fdb\u5236TCP\u6570\u636e\u89e3\u5305"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e2aTCP\u901a\u4fe1\u7684\u6570\u636e\u5305\u89e3\u5305\u793a\u4f8b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "errors"\n    "fmt"\n    "github.com/gogf/gf/v2/crypto/gcrc32"\n    "github.com/gogf/gf/v2/encoding/gbinary"\n    "github.com/gogf/gf/v2/util/gconv"\n)\n\ntype Pkg struct {\n    Length uint16 // Total length.\n    Crc32  uint32 // CRC32.\n    Data   []byte\n}\n\n// NewPkg creates and returns a package with given data.\nfunc NewPkg(data []byte) *Pkg {\n    return &Pkg{\n        Length: uint16(len(data) + 6),\n        Crc32:  gcrc32.Encrypt(data),\n        Data:   data,\n    }\n}\n\n// Marshal encodes the protocol struct to bytes.\nfunc (p *Pkg) Marshal() []byte {\n    b := make([]byte, 6+len(p.Data))\n    copy(b, gbinary.EncodeUint16(p.Length))\n    copy(b[2:], gbinary.EncodeUint32(p.Crc32))\n    copy(b[6:], p.Data)\n    return b\n}\n\n// UnmarshalValue decodes bytes to protocol struct.\nfunc (p *Pkg) UnmarshalValue(v interface{}) error {\n    b := gconv.Bytes(v)\n    if len(b) < 6 {\n        return errors.New("invalid package length")\n    }\n    p.Length = gbinary.DecodeToUint16(b[:2])\n    if len(b) < int(p.Length) {\n        return errors.New("invalid data length")\n    }\n    p.Crc32 = gbinary.DecodeToUint32(b[2:6])\n    p.Data = b[6:]\n    if gcrc32.Encrypt(p.Data) != p.Crc32 {\n        return errors.New("crc32 validation failed")\n    }\n    return nil\n}\n\nfunc main() {\n    var p1, p2 *Pkg\n\n    // Create a demo pkg as p1.\n    p1 = NewPkg([]byte("123"))\n    fmt.Println(p1)\n\n    // Convert bytes from p1 to p2 using gconv.Struct.\n    err := gconv.Struct(p1.Marshal(), &p2)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(p2)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"&{9 2286445522 [49 50 51]}\n&{9 2286445522 [49 50 51]}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>i});var a=r(296540);const s={},t=a.createContext(s);function c(n){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);