"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[8683],{453975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(474848),i=r(28453);const o={title:"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406",sidebar_position:0},s=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406",title:"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406",description:"\u81ea\u5b9a\u4e49\u56de\u8c03\u5904\u7406\u662f\u6700\u5e38\u89c1\u7684\u63a5\u53e3\u5f00\u53d1\u5b9e\u73b0\uff0c\u5f00\u53d1\u4e2d\u53ea\u9700\u8981\u5bf9\u63a5\u53e3\u4e2d\u7684\u90e8\u5206\u65b9\u6cd5\u8fdb\u884c\u66ff\u6362\u4e0e\u4fee\u6539\uff0c\u5728\u9a71\u52a8\u9ed8\u8ba4\u5b9e\u73b0\u903b\u8f91\u4e2d\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\u3002\u6240\u6709\u7684 SQL \u8bed\u53e5\u6267\u884c\u5fc5\u5b9a\u4f1a\u901a\u8fc7 DoQuery \u6216\u8005 DoExec \u6216\u8005 DoFilter \u63a5\u53e3\uff0c\u6839\u636e\u9700\u6c42\u5728\u81ea\u5b9a\u4e49\u7684\u9a71\u52a8\u4e2d\u5b9e\u73b0\u5e76\u8986\u76d6\u76f8\u5173\u63a5\u53e3\u65b9\u6cd5\u5b9e\u73b0\u6240\u9700\u529f\u80fd\u5373\u53ef\u3002",source:"@site/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/8-ORM\u63a5\u53e3\u5f00\u53d1/0-ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/8-ORM\u63a5\u53e3\u5f00\u53d1",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/8-ORM\u63a5\u53e3\u5f00\u53d1/0-ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406.md",tags:[],version:"2.2.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:0,frontMatter:{title:"ORM\u63a5\u53e3\u5f00\u53d1-\u56de\u8c03\u5904\u7406",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"ORM\u63a5\u53e3\u5f00\u53d1",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/"},next:{title:"ORM\u63a5\u53e3\u5f00\u53d1-\u9a71\u52a8\u5f00\u53d1",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1-\u9a71\u52a8\u5f00\u53d1"}},d={},l=[];function a(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["\u81ea\u5b9a\u4e49\u56de\u8c03\u5904\u7406\u662f\u6700\u5e38\u89c1\u7684\u63a5\u53e3\u5f00\u53d1\u5b9e\u73b0\uff0c\u5f00\u53d1\u4e2d\u53ea\u9700\u8981\u5bf9\u63a5\u53e3\u4e2d\u7684\u90e8\u5206\u65b9\u6cd5\u8fdb\u884c\u66ff\u6362\u4e0e\u4fee\u6539\uff0c\u5728\u9a71\u52a8\u9ed8\u8ba4\u5b9e\u73b0\u903b\u8f91\u4e2d\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\u3002\u6240\u6709\u7684 ",(0,n.jsx)(t.code,{children:"SQL"})," \u8bed\u53e5\u6267\u884c\u5fc5\u5b9a\u4f1a\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"DoQuery"})," \u6216\u8005 ",(0,n.jsx)(t.code,{children:"DoExec"})," \u6216\u8005 ",(0,n.jsx)(t.code,{children:"DoFilter"})," \u63a5\u53e3\uff0c\u6839\u636e\u9700\u6c42\u5728\u81ea\u5b9a\u4e49\u7684\u9a71\u52a8\u4e2d\u5b9e\u73b0\u5e76\u8986\u76d6\u76f8\u5173\u63a5\u53e3\u65b9\u6cd5\u5b9e\u73b0\u6240\u9700\u529f\u80fd\u5373\u53ef\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u56de\u8c03\u5904\u7406\u7684\u793a\u4f8b\uff0c\u73b0\u9700\u8981\u5c06\u6240\u6709\u6267\u884c\u7684 ",(0,n.jsx)(t.code,{children:"SQL"})," \u8bed\u53e5\u8bb0\u5f55\u5230 ",(0,n.jsx)(t.code,{children:"monitor"})," \u8868\u4e2d\uff0c\u4ee5\u65b9\u4fbf\u4e8e\u8fdb\u884c ",(0,n.jsx)(t.code,{children:"SQL"})," \u5ba1\u8ba1\u3002\u4e3a\u7b80\u5316\u793a\u4f8b\u7f16\u5199\uff0c\u4ee5\u4e0b\u4ee3\u7801\u5b9e\u73b0\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",(0,n.jsx)(t.code,{children:"MySQL"})," \u9a71\u52a8\uff0c\u8be5\u9a71\u52a8\u7ee7\u627f\u4e8e ",(0,n.jsx)(t.code,{children:"drivers"})," \u4e0b ",(0,n.jsx)(t.code,{children:"mysql"})," \u6a21\u5757\u5185\u5df2\u7ecf\u5b9e\u73b0\u7684 ",(0,n.jsx)(t.code,{children:"Driver"}),"\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'package driver\n\nimport (\n\t"context"\n\n\t"github.com/gogf/gf/contrib/drivers/mysql/v2"\n\t"github.com/gogf/gf/v2/database/gdb"\n\t"github.com/gogf/gf/v2/os/gtime"\n)\n\n// MyDriver is a custom database driver, which is used for testing only.\n// For simplifying the unit testing case purpose, MyDriver struct inherits the mysql driver\n// gdb.Driver and overwrites its functions DoQuery and DoExec.\n// So if there\'s any sql execution, it goes through MyDriver.DoQuery/MyDriver.DoExec firstly\n// and then gdb.Driver.DoQuery/gdb.Driver.DoExec.\n// You can call it sql "HOOK" or "HiJack" as your will.\ntype MyDriver struct {\n\t*mysql.Driver\n}\n\nvar (\n\t// customDriverName is my driver name, which is used for registering.\n\tcustomDriverName = "MyDriver"\n)\n\nfunc init() {\n\t// It here registers my custom driver in package initialization function "init".\n\t// You can later use this type in the database configuration.\n\tif err := gdb.Register(customDriverName, &MyDriver{}); err != nil {\n\t\tpanic(err)\n\t}\n}\n\n// New creates and returns a database object for mysql.\n// It implements the interface of gdb.Driver for extra database driver installation.\nfunc (d *MyDriver) New(core *gdb.Core, node *gdb.ConfigNode) (gdb.DB, error) {\n\treturn &MyDriver{\n\t\t&mysql.Driver{\n\t\t\tCore: core,\n\t\t},\n\t}, nil\n}\n\n// DoCommit commits current sql and arguments to underlying sql driver.\nfunc (d *MyDriver) DoCommit(ctx context.Context, in gdb.DoCommitInput) (out gdb.DoCommitOutput, err error) {\n\ttsMilliStart := gtime.TimestampMilli()\n\tout, err = d.Core.DoCommit(ctx, in)\n\ttsMilliFinished := gtime.TimestampMilli()\n\t_, _ = in.Link.ExecContext(ctx,\n\t\t"INSERT INTO `monitor`(`sql`,`cost`,`time`,`error`) VALUES(?,?,?,?)",\n\t\tgdb.FormatSqlWithArgs(in.Sql, in.Args),\n\t\ttsMilliFinished-tsMilliStart,\n\t\tgtime.Now(),\n\t\terr,\n\t)\n\treturn\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4eec\u770b\u5230\uff0c\u8fd9\u91cc\u5728\u5305\u521d\u59cb\u5316\u65b9\u6cd5 ",(0,n.jsx)(t.code,{children:"init"})," \u4e2d\u4f7f\u7528\u4e86 ",(0,n.jsx)(t.code,{children:'gdb.Register("MyDriver", &MyDriver{})'})," \u6765\u6ce8\u518c\u4e86\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u540d\u79f0\u7684\u9a71\u52a8\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:'gdb.Register("mysql", &MyDriver{})'})," \u6765\u8986\u76d6\u5df2\u6709\u7684\u6846\u67b6 ",(0,n.jsx)(t.code,{children:"mysql"})," \u9a71\u52a8\u4e3a\u81ea\u5df1\u7684\u9a71\u52a8\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u9a71\u52a8\u540d\u79f0 ",(0,n.jsx)(t.code,{children:"mysql"})," \u4e3a\u6846\u67b6\u9ed8\u8ba4\u7684 ",(0,n.jsx)(t.code,{children:"DriverMysql"})," \u9a71\u52a8\u7684\u540d\u79f0\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u7531\u4e8e\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u4e2a\u65b0\u7684\u9a71\u52a8\u540d\u79f0 ",(0,n.jsx)(t.code,{children:"MyDriver"}),"\uff0c\u56e0\u6b64\u5728 ",(0,n.jsx)(t.code,{children:"gdb"})," \u914d\u7f6e\u4e2d\u7684 ",(0,n.jsx)(t.code,{children:"type"})," \u6570\u636e\u5e93\u7c7b\u578b\u65f6\uff0c\u9700\u8981\u586b\u5199\u8be5\u9a71\u52a8\u540d\u79f0\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528\u914d\u7f6e\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'database:\n  default:\n  - link: "MyDriver:root:12345678@tcp(127.0.0.1:3306)/user"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(296540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);