"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[11448],{637152:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e/ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u6587\u4ef6","title":"ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u6587\u4ef6","description":"\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u7ec4\u4ef6\u6765\u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e\uff0c\u5e76\u4f7f\u7528 g \u5bf9\u8c61\u7ba1\u7406\u6a21\u5757\u4e2d\u7684 g.DB(\\"\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0\\") \u65b9\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\uff0c\u6570\u636e\u5e93\u5bf9\u8c61\u5c06\u4f1a\u81ea\u52a8\u8bfb\u53d6\u914d\u7f6e\u7ec4\u4ef6\u4e2d\u7684\u76f8\u5e94\u914d\u7f6e\u9879\uff0c\u5e76\u81ea\u52a8\u521d\u59cb\u5316\u8be5\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5355\u4f8b\u5bf9\u8c61\u3002\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u4f7f\u7528\u7684\u662f\u914d\u7f6e\u7ba1\u7406\u7ec4\u4ef6\u5b9e\u73b0\uff08\u914d\u7f6e\u7ec4\u4ef6\u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\u9ed8\u8ba4\u4f7f\u7528\u6587\u4ef6\u7cfb\u7edf\u5b9e\u73b0\uff09\uff0c\u540c\u6837\u652f\u6301\u591a\u79cd\u6570\u636e\u683c\u5f0f\u5982\uff1a toml/yaml/json/xml/ini/properties\u3002\u9ed8\u8ba4\u5e76\u4e14\u63a8\u8350\u7684\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u683c\u5f0f\u4e3a yaml\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e/ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u6587\u4ef6.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e","slug":"/docs/core/gdb-config-file","permalink":"/docs/core/gdb-config-file","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e/ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u6587\u4ef6.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730783885000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-config-file","title":"ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u6587\u4ef6","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u4f7f\u7528\u914d\u7f6e","permalink":"/docs/core/gdb-config"},"next":{"title":"ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u65b9\u6cd5","permalink":"/docs/core/gdb-config-funcs"}}');var d=n(474848),r=n(28453);const c={slug:"/docs/core/gdb-config-file",title:"ORM\u4f7f\u7528\u914d\u7f6e-\u914d\u7f6e\u6587\u4ef6",sidebar_position:0,hide_title:!0},l=void 0,i={},o=[{value:"\u7b80\u5355\u914d\u7f6e",id:"\u7b80\u5355\u914d\u7f6e",level:2},{value:"\u5b8c\u6574\u914d\u7f6e",id:"\u5b8c\u6574\u914d\u7f6e",level:2},{value:"\u96c6\u7fa4\u6a21\u5f0f",id:"\u96c6\u7fa4\u6a21\u5f0f",level:2},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u7ec4\u4ef6\u6765\u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e\uff0c\u5e76\u4f7f\u7528 ",(0,d.jsx)(s.code,{children:"g"})," \u5bf9\u8c61\u7ba1\u7406\u6a21\u5757\u4e2d\u7684 ",(0,d.jsx)(s.code,{children:'g.DB("\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0")'})," \u65b9\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\uff0c\u6570\u636e\u5e93\u5bf9\u8c61\u5c06\u4f1a\u81ea\u52a8\u8bfb\u53d6\u914d\u7f6e\u7ec4\u4ef6\u4e2d\u7684\u76f8\u5e94\u914d\u7f6e\u9879\uff0c\u5e76\u81ea\u52a8\u521d\u59cb\u5316\u8be5\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5355\u4f8b\u5bf9\u8c61\u3002\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u4f7f\u7528\u7684\u662f\u914d\u7f6e\u7ba1\u7406\u7ec4\u4ef6\u5b9e\u73b0\uff08\u914d\u7f6e\u7ec4\u4ef6\u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\u9ed8\u8ba4\u4f7f\u7528\u6587\u4ef6\u7cfb\u7edf\u5b9e\u73b0\uff09\uff0c\u540c\u6837\u652f\u6301\u591a\u79cd\u6570\u636e\u683c\u5f0f\u5982\uff1a ",(0,d.jsx)(s.code,{children:"toml/yaml/json/xml/ini/properties"}),"\u3002\u9ed8\u8ba4\u5e76\u4e14\u63a8\u8350\u7684\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u683c\u5f0f\u4e3a ",(0,d.jsx)(s.code,{children:"yaml"}),"\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u7b80\u5355\u914d\u7f6e",children:"\u7b80\u5355\u914d\u7f6e"}),"\n",(0,d.jsx)(s.admonition,{type:"tip",children:(0,d.jsxs)(s.p,{children:["\u4ece ",(0,d.jsx)(s.code,{children:"v2.2.0"})," \u7248\u672c\u5f00\u59cb\uff0c\u4f7f\u7528 ",(0,d.jsx)(s.code,{children:"link"})," \u8fdb\u884c\u6570\u636e\u5e93\u914d\u7f6e\u65f6\uff0c\u6570\u636e\u5e93\u7ec4\u4ef6\u7edf\u4e00\u4e86\u4e0d\u540c\u6570\u636e\u5e93\u7c7b\u578b\u7684\u914d\u7f6e\u683c\u5f0f\uff0c\u4ee5\u7b80\u5316\u914d\u7f6e\u7ba1\u7406\u3002"]})}),"\n",(0,d.jsxs)(s.p,{children:["\u7b80\u5316\u914d\u7f6e\u901a\u8fc7\u914d\u7f6e\u9879 ",(0,d.jsx)(s.code,{children:"link"})," \u6307\u5b9a\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-html",children:"type:username:password@protocol(address)[/dbname][?param1=value1&...&paramN=valueN]\n"})}),"\n",(0,d.jsx)(s.p,{children:"\u5373\uff1a"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-html",children:"\u7c7b\u578b:\u8d26\u53f7:\u5bc6\u7801@\u534f\u8bae(\u5730\u5740)/\u6570\u636e\u5e93\u540d\u79f0?\u7279\u6027\u914d\u7f6e\n"})}),"\n",(0,d.jsx)(s.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"\u6570\u636e\u5e93\u540d\u79f0"})," \u53ca ",(0,d.jsx)(s.strong,{children:"\u7279\u6027\u914d\u7f6e"})," \u4e3a\u975e\u5fc5\u987b\u53c2\u6570\uff0c\u5176\u4ed6\u53c2\u6570\u4e3a\u5fc5\u987b\u53c2\u6570\u3002"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"\u534f\u8bae"})," \u53ef\u9009\u914d\u7f6e\u4e3a\uff1a ",(0,d.jsx)(s.code,{children:"tcp/udp/file"}),"\uff0c\u5e38\u89c1\u914d\u7f6e\u4e3a ",(0,d.jsx)(s.code,{children:"tcp"})]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"\u7279\u6027\u914d\u7f6e"})," \u6839\u636e\u4e0d\u540c\u7684\u6570\u636e\u5e93\u7c7b\u578b\uff0c\u7531\u5176\u5e95\u5c42\u5b9e\u73b0\u7684\u7b2c\u4e09\u65b9\u9a71\u52a8\u5b9a\u4e49\uff0c\u5177\u4f53\u9700\u8981\u53c2\u8003\u7b2c\u4e09\u65b9\u9a71\u52a8\u5b98\u7f51\u3002\u4f8b\u5982\uff0c\u9488\u5bf9 ",(0,d.jsx)(s.code,{children:"mysql"})," \u9a71\u52a8\u800c\u8a00\uff0c\u4f7f\u7528\u7684\u7b2c\u4e09\u65b9\u9a71\u52a8\u4e3a\uff1a ",(0,d.jsx)(s.a,{href:"https://github.com/go-sql-driver/mysql",children:"https://github.com/go-sql-driver/mysql"}),"\xa0\u652f\u6301\u7684\u7279\u6027\u914d\u7f6e\u5982 ",(0,d.jsx)(s.code,{children:"multiStatements"})," \u548c ",(0,d.jsx)(s.code,{children:"loc"})," \u7b49\u3002"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-yaml",children:'database:\n  default:\n    link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n  user:\n    link:  "sqlite::@file(/var/data/db.sqlite3)"\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u5bf9\u5e94\u7684 ",(0,d.jsx)(s.code,{children:"link"})," \u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(s.th,{children:"link\u793a\u4f8b"}),(0,d.jsx)(s.th,{children:"extra\u53c2\u6570"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"mysql"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"mysql:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local&parseTime=true"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"mariadb"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"mariadb:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local&parseTime=true"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"tidb"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"tidb:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local&parseTime=true"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"pgsql"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"pgsql:root:12345678@tcp(127.0.0.1:5432)/test"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://github.com/lib/pq",children:"pq"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"mssql"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"mssql:root:12345678@tcp(127.0.0.1:1433)/test?encrypt=disable"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://github.com/microsoft/go-mssqldb",children:"go-mssqldb"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"sqlite"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"sqlite::@file(/var/data/db.sqlite3)"})}),(0,d.jsxs)(s.td,{children:["pure go:",(0,d.jsx)(s.a,{href:"https://github.com/glebarez/go-sqlite",children:"go-sqlite"}),"32bit-cgo:",(0,d.jsx)(s.a,{href:"https://github.com/mattn/go-sqlite3",children:"go-sqlite3"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"oracle"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"oracle:root:12345678@tcp(127.0.0.1:5432)/test"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://github.com/sijms/go-ora",children:"go-ora"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"clickhouse"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"clickhouse:root:12345678@tcp(127.0.0.1:9000)/test"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://github.com/ClickHouse/clickhouse-go",children:"clickhouse-go"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"dm"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"dm:root:12345678@tcp(127.0.0.1:5236)/test"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://gitee.com/chunanyong/dm",children:"dm"})})]})]})]}),"\n",(0,d.jsx)(s.admonition,{type:"tip",children:(0,d.jsxs)(s.p,{children:["\u66f4\u591a\u6846\u67b6\u652f\u6301\u7684\u6570\u636e\u5e93\u7c7b\u578b\u8bf7\u53c2\u8003\uff1a ",(0,d.jsx)(s.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]})}),"\n",(0,d.jsx)(s.h2,{id:"\u5b8c\u6574\u914d\u7f6e",children:"\u5b8c\u6574\u914d\u7f6e"}),"\n",(0,d.jsxs)(s.p,{children:["\u5b8c\u6574\u7684 ",(0,d.jsx)(s.code,{children:"config.yaml"})," \u6570\u636e\u5e93\u914d\u7f6e\u9879\u7684\u6570\u636e\u683c\u5f0f\u5f62\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-yaml",children:'database:\n  \u5206\u7ec4\u540d\u79f0:\n    host:                  "\u5730\u5740"\n    port:                  "\u7aef\u53e3"\n    user:                  "\u8d26\u53f7"\n    pass:                  "\u5bc6\u7801"\n    name:                  "\u6570\u636e\u5e93\u540d\u79f0"\n    type:                  "\u6570\u636e\u5e93\u7c7b\u578b(\u5982\uff1amariadb/tidb/mysql/pgsql/mssql/sqlite/oracle/clickhouse/dm)"\n    link:                  "(\u53ef\u9009)\u81ea\u5b9a\u4e49\u6570\u636e\u5e93\u94fe\u63a5\u4fe1\u606f\uff0c\u5f53\u8be5\u5b57\u6bb5\u88ab\u8bbe\u7f6e\u503c\u65f6\uff0c\u4ee5\u4e0a\u94fe\u63a5\u5b57\u6bb5(Host,Port,User,Pass,Name)\u5c06\u5931\u6548\uff0c\u4f46\u662ftype\u5fc5\u987b\u6709\u503c"\n    extra:                 "(\u53ef\u9009)\u4e0d\u540c\u6570\u636e\u5e93\u7684\u989d\u5916\u7279\u6027\u914d\u7f6e\uff0c\u7531\u5e95\u5c42\u6570\u636e\u5e93driver\u5b9a\u4e49"\n    role:                  "(\u53ef\u9009)\u6570\u636e\u5e93\u4e3b\u4ece\u89d2\u8272(master/slave)\uff0c\u4e0d\u4f7f\u7528\u5e94\u7528\u5c42\u7684\u4e3b\u4ece\u673a\u5236\u8bf7\u5747\u8bbe\u7f6e\u4e3amaster"\n    debug:                 "(\u53ef\u9009)\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f"\n    prefix:                "(\u53ef\u9009)\u8868\u540d\u524d\u7f00"\n    dryRun:                "(\u53ef\u9009)ORM\u7a7a\u8dd1(\u53ea\u8bfb\u4e0d\u5199)"\n    charset:               "(\u53ef\u9009)\u6570\u636e\u5e93\u7f16\u7801(\u5982: utf8/gbk/gb2312)\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3autf8"\n\tprotocol:              "(\u53ef\u9009)\u6570\u636e\u5e93\u8fde\u63a5\u534f\u8bae\uff0c\u9ed8\u8ba4\u4e3aTCP"\n    weight:                "(\u53ef\u9009)\u8d1f\u8f7d\u5747\u8861\u6743\u91cd\uff0c\u7528\u4e8e\u8d1f\u8f7d\u5747\u8861\u63a7\u5236\uff0c\u4e0d\u4f7f\u7528\u5e94\u7528\u5c42\u7684\u8d1f\u8f7d\u5747\u8861\u673a\u5236\u8bf7\u7f6e\u7a7a"\n    timezone:              "(\u53ef\u9009)\u65f6\u533a\u914d\u7f6e\uff0c\u4f8b\u5982:Local"\n    namespace:             "(\u53ef\u9009)\u7528\u4ee5\u652f\u6301\u4e2a\u522b\u6570\u636e\u5e93\u670d\u52a1Catalog&Schema\u533a\u5206\u7684\u95ee\u9898\uff0c\u539f\u6709\u7684Schema\u4ee3\u8868\u6570\u636e\u5e93\u540d\u79f0\uff0c\u800cNameSpace\u4ee3\u8868\u4e2a\u522b\u6570\u636e\u5e93\u670d\u52a1\u7684Schema"\n    maxIdle:               "(\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u95f2\u7f6e\u7684\u8fde\u63a5\u6570(\u9ed8\u8ba410)"\n    maxOpen:               "(\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u6253\u5f00\u7684\u8fde\u63a5\u6570(\u9ed8\u8ba4\u65e0\u9650\u5236)"\n    maxLifetime:           "(\u53ef\u9009)\u8fde\u63a5\u5bf9\u8c61\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u65f6\u95f4\u957f\u5ea6(\u9ed8\u8ba430\u79d2)"\n\tqueryTimeout:          "(\u53ef\u9009)\u67e5\u8be2\u8bed\u53e5\u8d85\u65f6\u65f6\u957f(\u9ed8\u8ba4\u65e0\u9650\u5236\uff0c\u6ce8\u610fctx\u7684\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e)"\n\texecTimeout:           "(\u53ef\u9009)\u5199\u5165\u8bed\u53e5\u8d85\u65f6\u65f6\u957f(\u9ed8\u8ba4\u65e0\u9650\u5236\uff0c\u6ce8\u610fctx\u7684\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e)"\n\ttranTimeout:           "(\u53ef\u9009)\u4e8b\u52a1\u5904\u7406\u8d85\u65f6\u65f6\u957f(\u9ed8\u8ba4\u65e0\u9650\u5236\uff0c\u6ce8\u610fctx\u7684\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e)"\n\tprepareTimeout:        "(\u53ef\u9009)\u9884\u51c6\u5907SQL\u8bed\u53e5\u6267\u884c\u8d85\u65f6\u65f6\u957f(\u9ed8\u8ba4\u65e0\u9650\u5236\uff0c\u6ce8\u610fctx\u7684\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e)"\n    createdAt:             "(\u53ef\u9009)\u81ea\u52a8\u521b\u5efa\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0"\n    updatedAt:             "(\u53ef\u9009)\u81ea\u52a8\u66f4\u65b0\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0"\n    deletedAt:             "(\u53ef\u9009)\u8f6f\u5220\u9664\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0"\n    timeMaintainDisabled:  "(\u53ef\u9009)\u662f\u5426\u5b8c\u5168\u5173\u95ed\u65f6\u95f4\u66f4\u65b0\u7279\u6027\uff0ctrue\u65f6CreatedAt/UpdatedAt/DeletedAt\u90fd\u5c06\u5931\u6548"\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u5b8c\u6574\u7684\u6570\u636e\u5e93\u914d\u7f6e\u9879\u793a\u4f8b( ",(0,d.jsx)(s.code,{children:"YAML"}),")\uff1a"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-yaml",children:'database:\n  default:\n    host:          "127.0.0.1"\n    port:          "3306"\n    user:          "root"\n    pass:          "12345678"\n    name:          "test"\n    type:          "mysql"\n    extra:         "parseTime=true"\n    role:          "master"\n    debug:         "true"\n    dryrun:        0\n    weight:        "100"\n    prefix:        "gf_"\n    charset:       "utf8"\n    timezone:      "Local"\n    maxIdle:       "10"\n    maxOpen:       "100"\n    maxLifetime:   "30s"\n \tprotocol\n'})}),"\n",(0,d.jsx)(s.admonition,{type:"note",children:(0,d.jsxs)(s.p,{children:["\u4f7f\u7528\u8be5\u914d\u7f6e\u65b9\u5f0f\u65f6\uff0c ",(0,d.jsxs)(s.strong,{children:["\u4e3a\u4fdd\u8bc1\u6570\u636e\u5e93\u5b89\u5168\uff0c\u9ed8\u8ba4\u5e95\u5c42\u4e0d\u652f\u6301\u591a\u884c ",(0,d.jsx)(s.code,{children:"SQL"})," \u8bed\u53e5\u6267\u884c"]}),"\u3002\u4e3a\u4e86\u5f97\u5230\u66f4\u591a\u914d\u7f6e\u9879\u63a7\u5236\uff0c\u8bf7\u53c2\u8003\u63a8\u8350\u7684\u7b80\u5316\u914d\u7f6e\uff0c\u540c\u65f6\u5efa\u8bae\u60a8\u52a1\u5fc5\u4e86\u89e3\u6e05\u695a\u7b80\u5316\u914d\u7f6e\u9879\u4e2d\u6bcf\u4e2a\u8fde\u63a5\u53c2\u6570\u7684\u529f\u80fd\u4f5c\u7528\u3002"]})}),"\n",(0,d.jsx)(s.h2,{id:"\u96c6\u7fa4\u6a21\u5f0f",children:"\u96c6\u7fa4\u6a21\u5f0f"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"gdb"})," \u7684\u914d\u7f6e\u652f\u6301\u96c6\u7fa4\u6a21\u5f0f\uff0c\u6570\u636e\u5e93\u914d\u7f6e\u4e2d\u6bcf\u4e00\u9879\u5206\u7ec4\u914d\u7f6e\u5747\u53ef\u4ee5\u662f\u591a\u4e2a\u8282\u70b9\uff0c\u652f\u6301\u8d1f\u8f7d\u5747\u8861\u6743\u91cd\u7b56\u7565\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-yaml",children:'database:\n  default:\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    role: "master"\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    role: "slave"\n\n  user:\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    role: "master"\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    role: "slave"\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    role: "slave"\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u4ee5\u4e0a\u6570\u636e\u5e93\u914d\u7f6e\u793a\u4f8b\u4e2d\u5305\u542b\u4e24\u4e2a\u6570\u636e\u5e93\u5206\u7ec4 ",(0,d.jsx)(s.code,{children:"default"})," \u548c ",(0,d.jsx)(s.code,{children:"user"}),"\uff0c\u5176\u4e2d ",(0,d.jsx)(s.code,{children:"default"})," \u5206\u7ec4\u5305\u542b\u4e00\u4e3b\u4e00\u4ece\uff0c ",(0,d.jsx)(s.code,{children:"user"})," \u5206\u7ec4\u5305\u542b\u4e00\u4e3b\u4e24\u4ece\u3002\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"g.DB()"})," \u548c ",(0,d.jsx)(s.code,{children:'g.DB("user")'})," \u83b7\u53d6\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u8fde\u63a5\u5bf9\u8c61\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u65e5\u5fd7\u914d\u7f6e",children:"\u65e5\u5fd7\u914d\u7f6e"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"gdb"})," \u652f\u6301\u65e5\u5fd7\u8f93\u51fa\uff0c\u5185\u90e8\u4f7f\u7528\u7684\u662f ",(0,d.jsx)(s.code,{children:"glog.Logger"})," \u5bf9\u8c61\u5b9e\u73b0\u65e5\u5fd7\u7ba1\u7406\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5bf9\u65e5\u5fd7\u5bf9\u8c61\u8fdb\u884c\u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,d.jsx)(s.code,{children:"gdb"})," \u5173\u95ed\u4e86 ",(0,d.jsx)(s.code,{children:"DEBUG"})," \u65e5\u5fd7\u8f93\u51fa\uff0c\u5982\u679c\u9700\u8981\u6253\u5f00 ",(0,d.jsx)(s.code,{children:"DEBUG"})," \u4fe1\u606f\u9700\u8981\u5c06\u6570\u636e\u5e93\u7684 ",(0,d.jsx)(s.code,{children:"debug"})," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,d.jsx)(s.code,{children:"true"}),"\u3002\u4ee5\u4e0b\u662f\u4e3a\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-yaml",children:'database:\n  logger:\n    path:    "/var/log/gf-app/sql"\n    level:   "all"\n    stdout:  true\n  default:\n    link:    "mysql:root:12345678@tcp(127.0.0.1:3306)/user_center"\n    debug:   true\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u5176\u4e2d ",(0,d.jsx)(s.code,{children:"database.logger"})," \u5373\u4e3a ",(0,d.jsx)(s.code,{children:"gdb"})," \u7684\u65e5\u5fd7\u914d\u7f6e\uff0c\u5f53\u8be5\u914d\u7f6e\u4e0d\u5b58\u5728\u65f6\uff0c\u5c06\u4f1a\u4f7f\u7528\u65e5\u5fd7\u7ec4\u4ef6\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,d.jsx)(s.a,{href:"/pages/viewpage.action?pageId=1114388",children:"\u65e5\u5fd7\u7ec4\u4ef6-\u914d\u7f6e\u7ba1\u7406"})," \u7ae0\u8282\u3002"]}),"\n",(0,d.jsx)(s.admonition,{type:"warning",children:(0,d.jsxs)(s.p,{children:["\u9700\u8981\u6ce8\u610f\u54e6\uff1a\u7531\u4e8e ",(0,d.jsx)(s.code,{children:"ORM"})," \u5e95\u5c42\u90fd\u662f\u91c7\u7528\u5b89\u5168\u7684\u9884\u5904\u7406\u6267\u884c\u65b9\u5f0f\uff0c\u63d0\u4ea4\u5230\u5e95\u5c42\u7684 ",(0,d.jsx)(s.code,{children:"SQL"})," \u4e0e\u53c2\u6570\u5176\u5b9e\u662f\u5206\u5f00\u7684\uff0c\u56e0\u6b64\u65e5\u5fd7\u4e2d\u8bb0\u5f55\u7684\u5b8c\u6574 ",(0,d.jsx)(s.code,{children:"SQL"})," \u4ec5\u4f5c\u53c2\u8003\u65b9\u4fbf\u4eba\u5de5\u9605\u8bfb\uff0c\u5e76\u4e0d\u662f\u771f\u6b63\u63d0\u4ea4\u5230\u5e95\u5c42\u7684 ",(0,d.jsx)(s.code,{children:"SQL"})," \u8bed\u53e5\u3002"]})})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>l});var t=n(296540);const d={},r=t.createContext(d);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);