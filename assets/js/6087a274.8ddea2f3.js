"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[91870],{469071:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/\u6570\u636e\u89c4\u8303-gen dao","title":"\u6570\u636e\u89c4\u8303-gen dao","description":"gen dao \u547d\u4ee4\u662f CLI \u4e2d\u6700\u9891\u7e41\u4f7f\u7528\u3001\u4e5f\u662f\u6846\u67b6\u8bbe\u8ba1\u7684\u5de5\u7a0b\u89c4\u8303\u80fd\u5426\u51c6\u786e\u843d\u5730\u7684\u5173\u952e\u547d\u4ee4\u3002\u8be5\u547d\u4ee4\u7528\u4e8e\u751f\u6210 dao \u6570\u636e\u8bbf\u95ee\u5bf9\u8c61\u3001 do \u6570\u636e\u8f6c\u5316\u6a21\u578b\u53ca entity \u5b9e\u4f8b\u6570\u636e\u6a21\u578b Go \u4ee3\u7801\u6587\u4ef6\u3002\u7531\u4e8e\u8be5\u547d\u4ee4\u7684\u53c2\u6570\u3001\u9009\u9879\u8f83\u591a\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u7ba1\u7406\u751f\u6210\u89c4\u5219\u3002","source":"@site/versioned_docs/version-2.4.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/\u6570\u636e\u89c4\u8303-gen dao.md","sourceDirName":"\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9","slug":"/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/\u6570\u636e\u89c4\u8303-gen dao","permalink":"/2.4.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/\u6570\u636e\u89c4\u8303-gen dao","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/\u6570\u636e\u89c4\u8303-gen dao.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"\u6570\u636e\u89c4\u8303-gen dao","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u63a5\u53e3\u89c4\u8303\uff08v2.5+\uff09-gen ctrl","permalink":"/2.4.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/\u63a5\u53e3\u89c4\u8303\uff08v2.5+\uff09-gen ctrl"},"next":{"title":"\u6a21\u5757\u89c4\u8303-gen service","permalink":"/2.4.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/\u6a21\u5757\u89c4\u8303-gen service"}}');var i=n(474848),r=n(28453);const c={title:"\u6570\u636e\u89c4\u8303-gen dao",sidebar_position:1,hide_title:!0},t=void 0,l={},o=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u9700\u8981\u624b\u52a8\u7f16\u8bd1\u7684\u6570\u636e\u5e93\u7c7b\u578b",id:"\u9700\u8981\u624b\u52a8\u7f16\u8bd1\u7684\u6570\u636e\u5e93\u7c7b\u578b",level:3},{value:"\u5173\u4e8e <code>bool</code> \u7c7b\u578b\u5bf9\u5e94\u7684\u6570\u636e\u8868\u5b57\u6bb5",id:"\u5173\u4e8e-bool-\u7c7b\u578b\u5bf9\u5e94\u7684\u6570\u636e\u8868\u5b57\u6bb5",level:3}];function h(e){const d={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gen dao"})," \u547d\u4ee4\u662f ",(0,i.jsx)(d.code,{children:"CLI"})," \u4e2d\u6700\u9891\u7e41\u4f7f\u7528\u3001\u4e5f\u662f\u6846\u67b6\u8bbe\u8ba1\u7684\u5de5\u7a0b\u89c4\u8303\u80fd\u5426\u51c6\u786e\u843d\u5730\u7684\u5173\u952e\u547d\u4ee4\u3002\u8be5\u547d\u4ee4\u7528\u4e8e\u751f\u6210 ",(0,i.jsx)(d.code,{children:"dao"})," \u6570\u636e\u8bbf\u95ee\u5bf9\u8c61\u3001 ",(0,i.jsx)(d.code,{children:"do"})," \u6570\u636e\u8f6c\u5316\u6a21\u578b\u53ca ",(0,i.jsx)(d.code,{children:"entity"})," \u5b9e\u4f8b\u6570\u636e\u6a21\u578b ",(0,i.jsx)(d.code,{children:"Go"})," \u4ee3\u7801\u6587\u4ef6\u3002\u7531\u4e8e\u8be5\u547d\u4ee4\u7684\u53c2\u6570\u3001\u9009\u9879\u8f83\u591a\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u7ba1\u7406\u751f\u6210\u89c4\u5219\u3002"]}),"\n",(0,i.jsx)(d.p,{children:"\u5173\u4e8e\u6846\u67b6\u9879\u76ee\u5de5\u7a0b\u89c4\u8303\u4ecb\u7ecd\u8bf7\u67e5\u770b \u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1 \u7ae0\u8282\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,i.jsxs)(d.p,{children:["\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c ",(0,i.jsx)(d.code,{children:"gf gen dao"})," \u5373\u53ef\u3002\u4ee5\u4e0b\u4e3a\u547d\u4ee4\u884c\u5e2e\u52a9\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-bash",children:'$ gf gen dao -h\nUSAGE\n    gf gen dao [OPTION]\n\nOPTION\n    -p, --path                  directory path for generated files\n    -l, --link                  database configuration, the same as the ORM configuration of GoFrame\n    -t, --tables                generate models only for given tables, multiple table names separated with \',\'\n    -x, --tablesEx              generate models excluding given tables, multiple table names separated with \',\'\n    -g, --group                 specifying the configuration group name of database for generated ORM instance,\n                                it\'s not necessary and the default value is "default"\n    -f, --prefix                add prefix for all table of specified link/database tables\n    -r, --removePrefix          remove specified prefix of the table, multiple prefix separated with \',\'\n    -j, --jsonCase              generated json tag case for model struct, cases are as follows:\n                                | Case            | Example            |\n                                |---------------- |--------------------|\n                                | Camel           | AnyKindOfString    |\n                                | CamelLower      | anyKindOfString    | default\n                                | Snake           | any_kind_of_string |\n                                | SnakeScreaming  | ANY_KIND_OF_STRING |\n                                | SnakeFirstUpper | rgb_code_md5       |\n                                | Kebab           | any-kind-of-string |\n                                | KebabScreaming  | ANY-KIND-OF-STRING |\n    -i, --importPrefix          custom import prefix for generated go files\n    -d, --daoPath               directory path for storing generated dao files under path\n    -o, --doPath                directory path for storing generated do files under path\n    -e, --entityPath            directory path for storing generated entity files under path\n    -t1, --tplDaoIndexPath      template file path for dao index file\n    -t2, --tplDaoInternalPath   template file path for dao internal file\n    -t3, --tplDaoDoPath         template file path for dao do file\n    -t4, --tplDaoEntityPath     template file path for dao entity file\n    -s, --stdTime               use time.Time from stdlib instead of gtime.Time for generated time/date fields of tables\n    -w, --withTime              add created time for auto produced go files\n    -n, --gJsonSupport          use gJsonSupport to use *gjson.Json instead of string for generated json fields of\n                                tables\n    -v, --overwriteDao          overwrite all dao files both inside/outside internal folder\n    -c, --descriptionTag        add comment to description tag for each field\n    -k, --noJsonTag             no json tag will be added for each field\n    -m, --noModelComment        no model comment will be added for each field\n    -a, --clear                 delete all generated go files that do not exist in database\n    -h, --help                  more information about this command\n\nEXAMPLE\n    gf gen dao\n    gf gen dao -l "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    gf gen dao -p ./model -g user-center -t user,user_detail,user_login\n    gf gen dao -r user_\n\nCONFIGURATION SUPPORT\n    Options are also supported by configuration file.\n    It\'s suggested using configuration file instead of command line arguments making producing.\n    The configuration node name is "gfcli.gen.dao", which also supports multiple databases, for example(config.yaml):\n    gfcli:\n      gen:\n        dao:\n        - link:     "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n          tables:   "order,products"\n          jsonCase: "CamelLower"\n        - link:   "mysql:root:12345678@tcp(127.0.0.1:3306)/primary"\n          path:   "./my-app"\n          prefix: "primary_"\n          tables: "user, userDetail"\n'})}),"\n",(0,i.jsxs)(d.p,{children:["\u5982\u679c\u4f7f\u7528\u6846\u67b6\u63a8\u8350\u7684\u9879\u76ee\u5de5\u7a0b\u811a\u624b\u67b6\uff0c\u5e76\u4e14\u7cfb\u7edf\u5b89\u88c5\u4e86 ",(0,i.jsx)(d.code,{children:"make"})," \u5de5\u5177\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"make dao"})," \u5feb\u6377\u6307\u4ee4\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"\u914d\u7f6e\u793a\u4f8b",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.code,{children:"/hack/config.yaml"})}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{children:'gfcli:\n  gen:\n    dao:\n    - link:     "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n      tables:   "order,products"\n      jsonCase: "CamelLower"\n\n    - link:   "mysql:root:12345678@tcp(127.0.0.1:3306)/primary"\n      path:   "./my-app"\n      prefix: "primary_"\n      tables: "user, userDetail"\n\n    # sqlite\u9700\u8981\u81ea\u884c\u7f16\u8bd1\u5e26sqlite\u9a71\u52a8\u7684gf\uff0c\u4e0b\u8f7d\u5e93\u4ee3\u7801\u540e\u4fee\u6539\u8def\u5f84\u6587\u4ef6\uff08gf\\cmd\\gf\\internal\\cmd\\cmd_gen_dao.go\uff09\u7684import\u5305\uff0c\u53d6\u6d88\u6ce8\u91ca\u5373\u53ef\u3002sqlite\u9a71\u52a8\u4f9d\u8d56\u4e86gcc\n    - link: "sqlite:./file.db"\n'})}),"\n",(0,i.jsx)(d.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u540d\u79f0"}),(0,i.jsx)(d.th,{children:"\u5fc5\u987b"}),(0,i.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,i.jsx)(d.th,{children:"\u542b\u4e49"}),(0,i.jsx)(d.th,{children:"\u793a\u4f8b"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"gfcli.gen.dao"})}),(0,i.jsx)(d.td,{children:"\u662f"}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"dao"})," \u4ee3\u7801\u751f\u6210\u914d\u7f6e\u9879\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\u914d\u7f6e\u9879\u6784\u6210\u6570\u7ec4\uff0c\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u751f\u6210\u3002\u4e0d\u540c\u7684\u6570\u636e\u5e93\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u751f\u6210\u89c4\u5219\uff0c\u4f8b\u5982\u53ef\u4ee5\u751f\u6210\u5230\u4e0d\u540c\u7684\u4f4d\u7f6e\u6216\u8005\u6587\u4ef6\u3002"]}),(0,i.jsx)(d.td,{children:"-"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"link"})}),(0,i.jsx)(d.td,{children:"\u662f"}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u7b2c\u4e00\u90e8\u5206\u8868\u793a\u4f60\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7c7b\u578b ",(0,i.jsx)(d.code,{children:"mysql"}),", ",(0,i.jsx)(d.code,{children:"postgresql"})," \u7b49, \u7b2c\u4e8c\u90e8\u5206\u5c31\u662f\u8fde\u63a5\u6570\u636e\u5e93\u7684 ",(0,i.jsx)(d.code,{children:"dsn"})," \u4fe1\u606f\u3002\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,i.jsx)(d.a,{href:"/2.4.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE",children:"ORM\u4f7f\u7528\u914d\u7f6e"})," \u7ae0\u8282\u3002"]}),(0,i.jsx)(d.td,{children:"-"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"path"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"internal"})}),(0,i.jsxs)(d.td,{children:["\u751f\u6210 ",(0,i.jsx)(d.code,{children:"dao"})," \u548c ",(0,i.jsx)(d.code,{children:"model"})," \u6587\u4ef6\u7684\u5b58\u50a8 ",(0,i.jsx)(d.strong,{children:"\u76ee\u5f55"})," \u5730\u5740\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"./app"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"group"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"default"})}),(0,i.jsx)(d.td,{children:"\u5728\u6570\u636e\u5e93\u914d\u7f6e\u4e2d\u7684\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0\u3002\u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a\u540d\u79f0\u3002\u6570\u636e\u5e93\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5206\u7ec4\u540d\u79f0\u5f80\u5f80\u786e\u5b9a\u4e4b\u540e\u4fbf\u4e0d\u518d\u4fee\u6539\u3002"}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"default"}),(0,i.jsx)("br",{}),(0,i.jsx)(d.code,{children:"order"}),(0,i.jsx)("br",{}),(0,i.jsx)(d.code,{children:"user"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"prefix"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"\u751f\u6210\u6570\u636e\u5e93\u5bf9\u8c61\u53ca\u6587\u4ef6\u7684\u524d\u7f00\uff0c\u4ee5\u4fbf\u533a\u5206\u4e0d\u540c\u6570\u636e\u5e93\u6216\u8005\u4e0d\u540c\u6570\u636e\u5e93\u4e2d\u7684\u76f8\u540c\u8868\u540d\uff0c\u9632\u6b62\u6570\u636e\u8868\u540c\u540d\u8986\u76d6\u3002"}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"order_"}),(0,i.jsx)("br",{}),(0,i.jsx)(d.code,{children:"user_"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"removePrefix"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u5220\u9664\u6570\u636e\u8868\u7684\u6307\u5b9a\u524d\u7f00\u540d\u79f0\u3002\u591a\u4e2a\u524d\u7f00\u4ee5 ",(0,i.jsx)(d.code,{children:","})," \u53f7\u5206\u9694\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"gf_"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tables"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"\u6307\u5b9a\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u9700\u8981\u6267\u884c\u4ee3\u7801\u751f\u6210\u7684\u6570\u636e\u8868\u3002\u5982\u679c\u4e3a\u7a7a\uff0c\u8868\u793a\u6570\u636e\u5e93\u7684\u6240\u6709\u8868\u90fd\u4f1a\u751f\u6210\u3002"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"user, user_detail"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tablesEx"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"Tables Excluding"}),"\uff0c\u6307\u5b9a\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u9700\u8981\u6392\u9664\u4ee3\u7801\u751f\u6210\u7684\u6570\u636e\u8868\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"product, order"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"jsonCase"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CamelLower"})}),(0,i.jsxs)(d.td,{children:["\u6307\u5b9a ",(0,i.jsx)(d.code,{children:"model"})," \u4e2d\u751f\u6210\u7684\u6570\u636e\u5b9e\u4f53\u5bf9\u8c61\u4e2d ",(0,i.jsx)(d.code,{children:"json"})," \u6807\u7b7e\u540d\u79f0\u89c4\u5219\uff0c\u53c2\u6570\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002\u53c2\u6570\u53ef\u9009\u4e3a\uff1a ",(0,i.jsx)(d.code,{children:"Camel"}),"\u3001 ",(0,i.jsx)(d.code,{children:"CamelLower"}),"\u3001 ",(0,i.jsx)(d.code,{children:"Snake"}),"\u3001 ",(0,i.jsx)(d.code,{children:"SnakeScreaming"}),"\u3001 ",(0,i.jsx)(d.code,{children:"SnakeFirstUpper"}),"\u3001 ",(0,i.jsx)(d.code,{children:"Kebab"}),"\u3001 ",(0,i.jsx)(d.code,{children:"KebabScreaming"}),"\u3002\u5177\u4f53\u4ecb\u7ecd\u8bf7\u53c2\u8003\u547d\u540d\u884c\u5e2e\u52a9\u793a\u4f8b\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Snake"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"stdTime"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u5f53\u6570\u636e\u8868\u5b57\u6bb5\u7c7b\u578b\u4e3a\u65f6\u95f4\u7c7b\u578b\u65f6\uff0c\u4ee3\u7801\u751f\u6210\u7684\u5c5e\u6027\u7c7b\u578b\u4f7f\u7528\u6807\u51c6\u5e93\u7684 ",(0,i.jsx)(d.code,{children:"time.Time"})," \u800c\u4e0d\u662f\u6846\u67b6\u7684 ",(0,i.jsx)(d.code,{children:"*gtime.Time"})," \u7c7b\u578b\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"withTime"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsx)(d.td,{children:"\u4e3a\u6bcf\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u6587\u4ef6\u589e\u52a0\u751f\u6210\u65f6\u95f4\u6ce8\u91ca"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"gJsonSupport"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u5f53\u6570\u636e\u8868\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,i.jsx)(d.code,{children:"JSON"})," \u7c7b\u578b\u65f6\uff0c\u4ee3\u7801\u751f\u6210\u7684\u5c5e\u6027\u7c7b\u578b\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"*gjson.Json"})," \u7c7b\u578b\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"overwriteDao"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u6bcf\u6b21\u751f\u6210 ",(0,i.jsx)(d.code,{children:"dao"})," \u4ee3\u7801\u65f6\u662f\u5426\u91cd\u65b0\u751f\u6210\u8986\u76d6 ",(0,i.jsx)(d.code,{children:"dao/internal"})," \u76ee\u5f55\u5916\u5c42\u7684\u6587\u4ef6\u3002\u6ce8\u610f ",(0,i.jsx)(d.code,{children:"dao/internal"})," \u76ee\u5f55\u5916\u5c42\u7684\u6587\u4ef6\u53ef\u80fd\u7531\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u6269\u5c55\u4e86\u529f\u80fd\uff0c\u8986\u76d6\u53ef\u80fd\u4f1a\u4ea7\u751f\u98ce\u9669\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"importPrefix"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u901a\u8fc7 ",(0,i.jsx)(d.code,{children:"go.mod"})," \u81ea\u52a8\u68c0\u6d4b"]}),(0,i.jsxs)(d.td,{children:["\u7528\u4e8e\u6307\u5b9a\u751f\u6210 ",(0,i.jsx)(d.code,{children:"Go"})," \u6587\u4ef6\u7684 ",(0,i.jsx)(d.code,{children:"import"})," \u8def\u5f84\u524d\u7f00\u3002\u7279\u522b\u662f\u9488\u5bf9\u4e8e\u4e0d\u662f\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"gen dao"})," \u547d\u4ee4\uff0c\u6216\u8005\u60f3\u8981\u5c06\u4ee3\u7801\u6587\u4ef6\u751f\u6210\u5230\u81ea\u5b9a\u4e49\u7684\u5176\u4ed6\u76ee\u5f55\uff0c\u8fd9\u4e2a\u65f6\u5019\u914d\u7f6e\u8be5\u53c2\u6570\u5341\u5206\u5fc5\u8981\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"github.com/gogf/gf"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"descriptionTag"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u7528\u4e8e\u6307\u5b9a\u662f\u5426\u4e3a\u6570\u636e\u6a21\u578b\u7ed3\u6784\u4f53\u5c5e\u6027\u589e\u52a0 ",(0,i.jsx)(d.code,{children:"desription"})," \u7684\u6807\u7b7e\uff0c\u5185\u5bb9\u4e3a\u5bf9\u5e94\u7684\u6570\u636e\u8868\u5b57\u6bb5\u6ce8\u91ca\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"noJsonTag"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsx)(d.td,{children:"\u751f\u6210\u7684\u6570\u636e\u6a21\u578b\u4e2d\uff0c\u5b57\u6bb5\u4e0d\u5e26\u6709json\u6807\u7b7e"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"noModelComment"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsx)(d.td,{children:"\u7528\u4e8e\u6307\u5b9a\u662f\u5426\u5173\u95ed\u6570\u636e\u6a21\u578b\u7ed3\u6784\u4f53\u5c5e\u6027\u7684\u6ce8\u91ca\u81ea\u52a8\u751f\u6210\uff0c\u5185\u5bb9\u4e3a\u6570\u636e\u8868\u5bf9\u5e94\u5b57\u6bb5\u7684\u6ce8\u91ca\u3002"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"clear"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u81ea\u52a8\u5220\u9664\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728\u5bf9\u5e94\u6570\u636e\u8868\u7684\u672c\u5730 ",(0,i.jsx)(d.code,{children:"dao/do/entity"})," \u4ee3\u7801\u6587\u4ef6\u3002\u8bf7\u8c28\u614e\u4f7f\u7528\u8be5\u53c2\u6570\uff01"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"daoPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"dao"})}),(0,i.jsxs)(d.td,{children:["\u4ee3\u7801\u751f\u6210\u7684 ",(0,i.jsx)(d.code,{children:"DAO"})," \u6587\u4ef6\u5b58\u653e\u76ee\u5f55"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"doPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"model/do"})}),(0,i.jsxs)(d.td,{children:["\u4ee3\u7801\u751f\u6210 ",(0,i.jsx)(d.code,{children:"DO"})," \u6587\u4ef6\u5b58\u653e\u76ee\u5f55"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"entityPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"model/entity"})}),(0,i.jsxs)(d.td,{children:["\u4ee3\u7801\u751f\u6210\u7684 ",(0,i.jsx)(d.code,{children:"Entity"})," \u6587\u4ef6\u5b58\u653e\u76ee\u5f55"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tplDaoIndexPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u81ea\u5b9a\u4e49 ",(0,i.jsx)(d.code,{children:"DAO Index"})," \u4ee3\u7801\u751f\u6210\u6a21\u677f\u6587\u4ef6\u8def\u5f84\uff0c\u4f7f\u7528\u8be5\u53c2\u6570\u8bf7\u53c2\u8003\u6e90\u7801"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tplDaoInternalPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u81ea\u5b9a\u4e49 ",(0,i.jsx)(d.code,{children:"DAO Internal"})," \u4ee3\u7801\u751f\u6210\u6a21\u677f\u6587\u4ef6\u8def\u5f84\uff0c\u4f7f\u7528\u8be5\u53c2\u6570\u8bf7\u53c2\u8003\u6e90\u7801"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tplDaoDoPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u81ea\u5b9a\u4e49 ",(0,i.jsx)(d.code,{children:"DO"})," \u4ee3\u7801\u751f\u6210\u6a21\u677f\u6587\u4ef6\u8def\u5f84\uff0c\u4f7f\u7528\u8be5\u53c2\u6570\u8bf7\u53c2\u8003\u6e90\u7801"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tplDaoEntityPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u81ea\u5b9a\u4e49 ",(0,i.jsx)(d.code,{children:"Entity"})," \u4ee3\u7801\u751f\u6210\u6a21\u677f\u6587\u4ef6\u8def\u5f84\uff0c\u4f7f\u7528\u8be5\u53c2\u6570\u8bf7\u53c2\u8003\u6e90\u7801"]}),(0,i.jsx)(d.td,{})]})]})]}),"\n",(0,i.jsx)(d.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsxs)(d.p,{children:["\u4ed3\u5e93\u5730\u5740\uff1a ",(0,i.jsx)(d.a,{href:"https://github.com/gogf/focus-single",children:"https://github.com/gogf/focus-single"})]}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(289768).A+"",width:"3584",height:"2074"})}),"\n",(0,i.jsxs)(d.p,{children:["1\u3001\u4ee5\u4e0b ",(0,i.jsx)(d.code,{children:"3"})," \u4e2a\u76ee\u5f55\u7684\u6587\u4ef6\u7531 ",(0,i.jsx)(d.code,{children:"dao"})," \u547d\u4ee4\u751f\u6210\uff1a"]}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u8def\u5f84"}),(0,i.jsx)(d.th,{children:"\u8bf4\u660e"}),(0,i.jsx)(d.th,{children:"\u8be6\u7ec6\u4ecb\u7ecd"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"/internal/dao"})}),(0,i.jsx)(d.td,{children:"\u6570\u636e\u64cd\u4f5c\u5bf9\u8c61"}),(0,i.jsxs)(d.td,{children:["\u901a\u8fc7\u5bf9\u8c61\u65b9\u5f0f\u8bbf\u95ee\u5e95\u5c42\u6570\u636e\u6e90\uff0c\u5e95\u5c42\u57fa\u4e8eORM\u7ec4\u4ef6\u5b9e\u73b0\u3002\u5f80\u5f80\u9700\u8981\u7ed3\u5408 ",(0,i.jsx)(d.code,{children:"entity"})," \u548c ",(0,i.jsx)(d.code,{children:"do"})," \u901a\u7528\u4f7f\u7528\u3002\u8be5\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5f00\u53d1\u8005\u53ef\u6269\u5c55\u4fee\u6539\uff0c\u4f46\u662f\u5f80\u5f80\u6ca1\u8fd9\u79cd\u5fc5\u8981\u3002"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"/internal/model/do"})}),(0,i.jsx)(d.td,{children:"\u6570\u636e\u8f6c\u6362\u6a21\u578b"}),(0,i.jsxs)(d.td,{children:["\u6570\u636e\u8f6c\u6362\u6a21\u578b\u7528\u4e8e\u4e1a\u52a1\u6a21\u578b\u5230\u6570\u636e\u6a21\u578b\u7684\u8f6c\u6362\uff0c\u7531\u5de5\u5177\u7ef4\u62a4\uff0c\u7528\u6237\u4e0d\u80fd\u4fee\u6539\u3002",(0,i.jsx)("br",{}),"\u5de5\u5177\u6bcf\u6b21\u751f\u6210\u4ee3\u7801\u6587\u4ef6\u5c06\u4f1a\u8986\u76d6\u8be5\u76ee\u5f55\u3002"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"/internal/model/entity"})}),(0,i.jsx)(d.td,{children:"\u6570\u636e\u6a21\u578b"}),(0,i.jsx)(d.td,{children:"\u6570\u636e\u6a21\u578b\u7531\u5de5\u5177\u7ef4\u62a4\uff0c\u7528\u6237\u4e0d\u80fd\u4fee\u6539\u3002\u5de5\u5177\u6bcf\u6b21\u751f\u6210\u4ee3\u7801\u6587\u4ef6\u5c06\u4f1a\u8986\u76d6\u8be5\u76ee\u5f55\u3002"})]})]})]}),"\n",(0,i.jsxs)(d.p,{children:["2\u3001 ",(0,i.jsx)(d.code,{children:"model"})," \u4e2d\u7684\u6a21\u578b\u5206\u4e3a\u4e24\u7c7b\uff1a ",(0,i.jsx)(d.strong,{children:"\u6570\u636e\u6a21\u578b"})," \u548c ",(0,i.jsx)(d.strong,{children:"\u4e1a\u52a1\u6a21\u578b"}),"\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.strong,{children:"\u6570\u636e\u6a21\u578b\uff1a"})," \u901a\u8fc7 ",(0,i.jsx)(d.code,{children:"CLI"})," \u5de5\u5177\u81ea\u52a8\u751f\u6210 ",(0,i.jsx)(d.code,{children:"model/entity"}),"\xa0\u76ee\u5f55\u6587\u4ef6\uff0c\u6570\u636e\u5e93\u7684\u6570\u636e\u8868\u90fd\u4f1a\u751f\u6210\u5230\u8be5\u76ee\u5f55\u4e0b\uff0c\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5bf9\u5e94\u7684\u6a21\u578b\u4e3a\u6570\u636e\u6a21\u578b\u3002\u6570\u636e\u6a21\u578b\u5373\u4e0e\u6570\u636e\u8868\u4e00\u4e00\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5f00\u53d1\u8005\u5f80\u5f80\u4e0d\u9700\u8981\u53bb\u4fee\u6539\u5e76\u4e14\u4e5f\u4e0d\u5e94\u8be5\u53bb\u4fee\u6539\uff0c\u6570\u636e\u6a21\u578b\u53ea\u6709\u5728\u6570\u636e\u8868\u7ed3\u6784\u53d8\u66f4\u65f6\u901a\u8fc7 ",(0,i.jsx)(d.code,{children:"CLI"})," \u5de5\u5177\u81ea\u52a8\u66f4\u65b0\u3002\u6570\u636e\u6a21\u578b\u7531 ",(0,i.jsx)(d.code,{children:"CLI"})," \u5de5\u5177\u751f\u6210\u53ca\u7edf\u4e00\u7ef4\u62a4\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.strong,{children:"\u4e1a\u52a1\u6a21\u578b\uff1a"})," \u4e1a\u52a1\u6a21\u578b\u5373\u662f\u4e0e\u4e1a\u52a1\u76f8\u5173\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6309\u9700\u5b9a\u4e49\uff0c\u4f8b\u5982 ",(0,i.jsx)(d.code,{children:"service"})," \u7684\u8f93\u5165\u8f93\u51fa\u6570\u636e\u7ed3\u6784\u5b9a\u4e49\u3001\u5185\u90e8\u7684\u4e00\u4e9b\u6570\u636e\u7ed3\u6784\u5b9a\u4e49\u7b49\u3002\u4e1a\u52a1\u6a21\u578b\u7531\u5f00\u53d1\u8005\u6839\u636e\u4e1a\u52a1\u9700\u8981\u81ea\u884c\u5b9a\u4e49\u7ef4\u62a4\uff0c\u5b9a\u4e49\u5230 ",(0,i.jsx)(d.code,{children:"model"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:["3\u3001 ",(0,i.jsx)(d.code,{children:"dao"})," \u4e2d\u7684\u6587\u4ef6\u6309\u7167\u6570\u636e\u8868\u540d\u79f0\u8fdb\u884c\u547d\u540d\uff0c\u4e00\u4e2a\u6570\u636e\u8868\u4e00\u4e2a\u6587\u4ef6\u53ca\u5176\u4e00\u4e2a\u5bf9\u5e94\u7684 ",(0,i.jsx)(d.code,{children:"DAO"})," \u5bf9\u8c61\u3002\u64cd\u4f5c\u6570\u636e\u8868\u5373\u662f\u901a\u8fc7 ",(0,i.jsx)(d.code,{children:"DAO"})," \u5bf9\u8c61\u4ee5\u53ca\u76f8\u5173\u64cd\u4f5c\u65b9\u6cd5\u5b9e\u73b0\u3002 ",(0,i.jsx)(d.code,{children:"dao"})," \u64cd\u4f5c\u91c7\u7528\u89c4\u8303\u5316\u8bbe\u8ba1\uff0c\u5fc5\u987b\u4f20\u9012 ",(0,i.jsx)(d.code,{children:"ctx"})," \u53c2\u6570\uff0c\u5e76\u5728\u751f\u6210\u7684\u4ee3\u7801\u4e2d\u5fc5\u987b\u901a\u8fc7 ",(0,i.jsx)(d.code,{children:"Ctx"})," \u6216\u8005 ",(0,i.jsx)(d.code,{children:"Transaction"})," \u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61\u6765\u94fe\u5f0f\u64cd\u4f5c\u6570\u636e\u8868\u3002"]}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(554722).A+"",width:"2478",height:"544"})}),"\n",(0,i.jsx)(d.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsx)(d.h3,{id:"\u9700\u8981\u624b\u52a8\u7f16\u8bd1\u7684\u6570\u636e\u5e93\u7c7b\u578b",children:"\u9700\u8981\u624b\u52a8\u7f16\u8bd1\u7684\u6570\u636e\u5e93\u7c7b\u578b"}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gen dao"})," \u547d\u4ee4\u6d89\u53ca\u5230\u6570\u636e\u8bbf\u95ee\u76f8\u5173\u4ee3\u7801\u751f\u6210\u65f6\uff0c\u9ed8\u8ba4\u652f\u6301\u5e38\u7528\u7684\u82e5\u5e72\u7c7b\u578b\u6570\u636e\u5e93\u3002\u5982\u679c\u9700\u8981 ",(0,i.jsx)(d.code,{children:"Oracle"})," \u6570\u636e\u5e93\u7c7b\u578b\u652f\u6301\uff0c\u9700\u8981\u5f00\u53d1\u8005\u81ea\u5df1\u4fee\u6539\u6e90\u7801\u6587\u4ef6\u540e\u81ea\u884c\u672c\u5730\u624b\u52a8\u7f16\u8bd1\u751f\u6210 ",(0,i.jsx)(d.code,{children:"CLI"})," \u5de5\u5177\u968f\u540e\u5b89\u88c5\uff0c\u56e0\u4e3a\u8fd9\u4e24\u4e2a\u6570\u636e\u5e93\u7684\u9a71\u52a8\u9700\u8981 ",(0,i.jsx)(d.code,{children:"CGO"})," \u652f\u6301\uff0c\u65e0\u6cd5\u9884\u7f16\u8bd1\u751f\u6210\u7ed9\u5927\u5bb6\u76f4\u63a5\u4f7f\u7528\u3002"]}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(405972).A+"",width:"3072",height:"1738"})}),"\n",(0,i.jsxs)(d.h3,{id:"\u5173\u4e8e-bool-\u7c7b\u578b\u5bf9\u5e94\u7684\u6570\u636e\u8868\u5b57\u6bb5",children:["\u5173\u4e8e ",(0,i.jsx)(d.code,{children:"bool"})," \u7c7b\u578b\u5bf9\u5e94\u7684\u6570\u636e\u8868\u5b57\u6bb5"]}),"\n",(0,i.jsxs)(d.p,{children:["\u7531\u4e8e\u5927\u90e8\u5206\u6570\u636e\u5e93\u7c7b\u578b\u90fd\u6ca1\u6709 ",(0,i.jsx)(d.code,{children:"bool"})," \u7c7b\u578b\u7684\u6570\u636e\u8868\u5b57\u6bb5\u7c7b\u578b\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"bit(1)"})," \u6765\u4ee3\u66ff ",(0,i.jsx)(d.code,{children:"bool"})," \u7c7b\u578b\u3002 ",(0,i.jsx)(d.code,{children:"gen dao"})," \u547d\u4ee4\u4f1a\u81ea\u52a8\u8bc6\u522b ",(0,i.jsx)(d.code,{children:"bit(1)"})," \u6570\u636e\u8868\u5b57\u6bb5\u5e76\u751f\u6210 ",(0,i.jsx)(d.code,{children:"bool"})," \u7c7b\u578b\u7684\u5c5e\u6027\u3002\u6b64\u5916\uff0c\u6211\u4eec\u4e0d\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"tinyint(1)"})," \u4f5c\u4e3a ",(0,i.jsx)(d.code,{children:"bool"})," \u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(d.p,{children:"\u4f8b\u5982\uff0c\u8868\u5b57\u6bb5\uff1a"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(200937).A+"",width:"1222",height:"280"})}),"\n",(0,i.jsx)(d.p,{children:"\u751f\u6210\u7684\u5c5e\u6027\uff1a"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(156002).A+"",width:"1504",height:"322"})})]})}function x(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},156002:(e,d,n)=>{n.d(d,{A:()=>s});const s=n.p+"assets/images/31d3d6234fb8afd4101d966db1f5f056-d90407ea70256208403dc60ab2768c5f.png"},200937:(e,d,n)=>{n.d(d,{A:()=>s});const s=n.p+"assets/images/53d7482adf5c8389dac61de102dfa587-6366abf1cc1ea82c8737534f40362376.png"},405972:(e,d,n)=>{n.d(d,{A:()=>s});const s=n.p+"assets/images/62ff4aeb883b82ec423d2aeb56e5fb39-1fd5a64ec9e2a0638a6ca6c28e5e4ef6.png"},554722:(e,d,n)=>{n.d(d,{A:()=>s});const s=n.p+"assets/images/6bf732e963cabd3a45586cbbcecf557a-70012abfeb13124da0173d20015e15e1.png"},289768:(e,d,n)=>{n.d(d,{A:()=>s});const s=n.p+"assets/images/9ce0817f4616471066a4c9947783634a-c0d60822529f8a0ba75c447235ec9abb.png"},28453:(e,d,n)=>{n.d(d,{R:()=>c,x:()=>t});var s=n(296540);const i={},r=s.createContext(i);function c(e){const d=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);