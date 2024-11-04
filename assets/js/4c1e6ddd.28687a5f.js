"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[56128],{476755:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"docs/\u9879\u76ee\u90e8\u7f72/\u72ec\u7acb\u90e8\u7f72","title":"\u72ec\u7acb\u90e8\u7f72","description":"\u4f7f\u7528 GoFrame \u5f00\u53d1\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u72ec\u7acb\u5730\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u8bbe\u7f6e\u4e3a\u540e\u53f0\u5b88\u62a4\u8fdb\u7a0b\u8fd0\u884c\u5373\u53ef\u3002\u8fd9\u79cd\u6a21\u5f0f\u5e38\u7528\u5728\u7b80\u5355\u7684API\u670d\u52a1\u9879\u76ee\u4e2d\u3002","source":"@site/docs/docs/\u9879\u76ee\u90e8\u7f72/\u72ec\u7acb\u90e8\u7f72.md","sourceDirName":"docs/\u9879\u76ee\u90e8\u7f72","slug":"/docs/deploy/standalone","permalink":"/docs/deploy/standalone","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u9879\u76ee\u90e8\u7f72/\u72ec\u7acb\u90e8\u7f72.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/deploy/standalone","title":"\u72ec\u7acb\u90e8\u7f72","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u9879\u76ee\u90e8\u7f72","permalink":"/docs/deploy"},"next":{"title":"\u4ee3\u7406\u90e8\u7f72","permalink":"/docs/deploy/proxy"}}');var c=n(474848),r=n(28453);const i={slug:"/docs/deploy/standalone",title:"\u72ec\u7acb\u90e8\u7f72",sidebar_position:0,hide_title:!0},l=void 0,o={},t=[{value:"*nix",id:"nix",level:2},{value:"1. <code>nohup</code>",id:"1-nohup",level:3},{value:"2. <code>tmux</code>",id:"2-tmux",level:3},{value:"3. <code>supervisor</code>",id:"3-supervisor",level:3},{value:"4. <code>systemctl</code>",id:"4-systemctl",level:3},{value:"5. <code>screen</code>",id:"5-screen",level:3},{value:"windows",id:"windows",level:2},{value:"1. <code>NSSM</code>",id:"1-nssm",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"GoFrame"})," \u5f00\u53d1\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u72ec\u7acb\u5730\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u8bbe\u7f6e\u4e3a\u540e\u53f0\u5b88\u62a4\u8fdb\u7a0b\u8fd0\u884c\u5373\u53ef\u3002\u8fd9\u79cd\u6a21\u5f0f\u5e38\u7528\u5728\u7b80\u5355\u7684API\u670d\u52a1\u9879\u76ee\u4e2d\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u670d\u52a1\u5668\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"*nix"})," \u670d\u52a1\u5668\u7cfb\u5217(\u5305\u62ec: ",(0,c.jsx)(s.code,{children:"Linux"}),", ",(0,c.jsx)(s.code,{children:"MacOS"}),", ",(0,c.jsx)(s.code,{children:"*BSD"}),")\uff0c\u4ee5\u4e0b\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"Ubuntu"})," \u7cfb\u7edf\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"GoFrame"})," \u6846\u67b6\u5f00\u53d1\u7684\u9879\u76ee\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"nix",children:"*nix"}),"\n",(0,c.jsxs)(s.h3,{id:"1-nohup",children:["1. ",(0,c.jsx)(s.code,{children:"nohup"})]}),"\n",(0,c.jsxs)(s.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7b80\u5355\u7684 ",(0,c.jsx)(s.code,{children:"nohup"})," \u547d\u4ee4\u6765\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f7f\u5176\u4f5c\u4e3a\u540e\u53f0\u5b88\u62a4\u8fdb\u7a0b\u8fd0\u884c\uff0c\u5373\u4f7f\u8fdc\u7a0b\u8fde\u63a5\u7684SSH\u65ad\u5f00\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u7a0b\u5e8f\u7684\u6267\u884c\u3002\u5728\u6d41\u884c\u7684Linux\u53d1\u884c\u7248\u4e2d\u5f80\u5f80\u90fd\u9ed8\u8ba4\u5b89\u88c5\u597d\u4e86 ",(0,c.jsx)(s.code,{children:"nohup"})," \u547d\u4ee4\u5de5\u5177\u3002 \u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"nohup ./gf-app &\n"})}),"\n",(0,c.jsxs)(s.h3,{id:"2-tmux",children:["2. ",(0,c.jsx)(s.code,{children:"tmux"})]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"tmux"})," \u662f\u4e00\u6b3e ",(0,c.jsx)(s.code,{children:"Linux"})," \u4e0b\u7684\u7ec8\u7aef\u590d\u7528\u5de5\u5177\uff0c\u53ef\u4ee5\u5f00\u542f\u4e0d\u540c\u7684\u7ec8\u7aef\u7a97\u53e3\u6765\u5c06\u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u540e\u53f0\u5b88\u62a4\u8fdb\u7a0b\u6267\u884c\uff0c\u5373\u4f7f\u8fdc\u7a0b\u8fde\u63a5\u7684 ",(0,c.jsx)(s.code,{children:"SSH"})," \u65ad\u5f00\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u7a0b\u5e8f\u7684\u6267\u884c\u3002 \u5728 ",(0,c.jsx)(s.code,{children:"ubuntu"})," \u7cfb\u7edf\u4e0b\u76f4\u63a5\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"sudo apt-get install tmux"})," \u5b89\u88c5\u5373\u53ef\u3002\u4f7f\u7528\u4ee5\u4e0b\u6b65\u9aa4\u5c06\u5e94\u7528\u7a0b\u5e8f\u540e\u53f0\u8fd0\u884c\u3002"]}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"tmux new -s gf-app"}),"\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:["\u5728\u65b0\u7ec8\u7aef\u7a97\u53e3\u4e2d\u6267\u884c ",(0,c.jsx)(s.code,{children:"./gf-app"})," \u5373\u53ef\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"ctrl"})," + ",(0,c.jsx)(s.code,{children:"B & D"})," \u5feb\u6377\u952e\u53ef\u4ee5\u9000\u51fa\u5f53\u524d\u7ec8\u7aef\u7a97\u53e3\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"tmux attach -t gf-app"})," \u53ef\u8fdb\u5165\u5230\u4e4b\u524d\u7684\u7ec8\u7aef\u7a97\u53e3\uff1b"]}),"\n"]}),"\n",(0,c.jsxs)(s.h3,{id:"3-supervisor",children:["3. ",(0,c.jsx)(s.code,{children:"supervisor"})]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"supervisor"})," \u662f\u7528 ",(0,c.jsx)(s.code,{children:"Python"})," \u5f00\u53d1\u7684\u4e00\u5957\u901a\u7528\u7684\u8fdb\u7a0b\u7ba1\u7406\u7a0b\u5e8f\uff0c\u80fd\u5c06\u4e00\u4e2a\u666e\u901a\u7684\u547d\u4ee4\u884c\u8fdb\u7a0b\u53d8\u4e3a\u540e\u53f0 ",(0,c.jsx)(s.code,{children:"daemon"}),"\uff0c\u5e76\u76d1\u63a7\u8fdb\u7a0b\u72b6\u6001\uff0c\u5f02\u5e38\u9000\u51fa\u65f6\u80fd\u81ea\u52a8\u91cd\u542f\u3002\u5b98\u65b9\u7f51\u7ad9\uff1a ",(0,c.jsx)(s.a,{href:"http://supervisord.org/",children:"http://supervisord.org/"})," \u5e38\u89c1\u914d\u7f6e\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-ini",children:"[program:gf-app]\nuser           = root\ndirectory      = /var/www\ncommand        = /var/www/main\nstdout_logfile = /var/log/gf-app-stdout.log\nstderr_logfile = /var/log/gf-app-stderr.log\nautostart      = true\nautorestart    = true\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u4f7f\u7528\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"sudo service supervisor start"})," \u542f\u52a8 ",(0,c.jsx)(s.code,{children:"supervisor"})," \u670d\u52a1\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:["\u521b\u5efa\u5e94\u7528\u914d\u7f6e\u6587\u4ef6 ",(0,c.jsx)(s.code,{children:"/etc/supervisor/conf.d/gf-app.conf"}),", \u5185\u5bb9\u5982\u4e0a;"]}),"\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"sudo supervisorctl"})," \u8fdb\u5165 ",(0,c.jsx)(s.code,{children:"supervisor"})," \u7ba1\u7406\u7ec8\u7aef\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"reload"})," \u91cd\u65b0\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u5e76\u91cd\u542f\u5f53\u524d ",(0,c.jsx)(s.code,{children:"supoervisor"})," \u7ba1\u7406\u7684\u6240\u6709\u8fdb\u7a0b\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"update"})," \u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e(\u9ed8\u8ba4\u4e0d\u91cd\u542f)\uff0c\u968f\u540e\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"start gf-app"})," \u542f\u52a8\u6307\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:["\u968f\u540e\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"status"})," \u6307\u4ee4\u67e5\u770b\u5f53\u524d ",(0,c.jsx)(s.code,{children:"supervisor"})," \u7ba1\u7406\u7684\u8fdb\u7a0b\u72b6\u6001\uff1b"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u8e29\u5751\u5206\u4eab\u7ecf\u9a8c\uff1a"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"conf"})," \u914d\u7f6e\u6587\u4ef6\u53d8\u66f4\u540e\u9700\u8981\u5728 ",(0,c.jsx)(s.code,{children:"supervisorctl"})," \u4e2d\u6267\u884c ",(0,c.jsx)(s.code,{children:"reload"})," \u624d\u80fd\u66f4\u65b0\u4f7f\u7528\u5230\u6700\u65b0\u7684\u914d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"directory"})," \u914d\u7f6e\u4e00\u822c\u662f\u4e0d\u80fd\u7f3a\u5c11\u7684\uff0c\u6307\u5b9a\u5f53\u524d\u7684\u5de5\u4f5c\u76ee\u5f55\u8def\u5f84\uff0c\u4e14\u5fc5\u987b\u914d\u7f6e\u5728 ",(0,c.jsx)(s.code,{children:"command"})," \u4e4b\u524d\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"command"})," \u547d\u4ee4\u9700\u8981\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\uff0c\u5426\u5219\u4f1a\u627e\u4e0d\u5230\u6267\u884c\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.h3,{id:"4-systemctl",children:["4. ",(0,c.jsx)(s.code,{children:"systemctl"})]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Systemd"})," \u662f ",(0,c.jsx)(s.code,{children:"Linux"})," \u7cfb\u7edf\u5de5\u5177\uff0c\u7528\u6765\u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\uff0c\u5df2\u6210\u4e3a\u5927\u591a\u6570\u53d1\u884c\u7248\u7684\u6807\u51c6\u914d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u800c ",(0,c.jsx)(s.code,{children:"systemctl"})," \u662f ",(0,c.jsx)(s.code,{children:"Systemd"})," \u7684\u4e3b\u547d\u4ee4\uff0c\u7528\u4e8e\u7ba1\u7406\u7cfb\u7edf\u3002\u53ef\u4ee5\u53c2\u8003 ",(0,c.jsx)(s.a,{href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",children:"\u962e\u4e00\u5cf0\u5bf9\u4e8e Systemd \u7684\u89e3\u8bfb"})," \uff0c\u6587\u7ae0\u7684\u7b2c\u56db\u3001\u4e94\u7ae0\u8282\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5176\u5b9e\u6211\u4eec\u5927\u90e8\u5206\u670d\u52a1\u90fd\u6709\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"systemctl"})," \u7ba1\u7406\uff0c\u6bd4\u5982 ",(0,c.jsx)(s.code,{children:"MySQL\u3001Nginx"})," \u7b49\u7b49\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u5e38\u89c1\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-ini",children:"[Unit]\n# \u5355\u5143\u63cf\u8ff0\nDescription=GF APP\n# \u5728\u4ec0\u4e48\u670d\u52a1\u542f\u52a8\u4e4b\u540e\u518d\u6267\u884c\u672c\u7a0b\u5e8f\nAfter=mysql.service\n\n[Service]\nType=simple\n# \u7a0b\u5e8f\u6267\u884c\u7684\u76ee\u5f55\nWorkingDirectory=/data/server/gfapp/\n# \u542f\u52a8\u7684\u811a\u672c\u547d\u4ee4\nExecStart=/data/server/gfapp/gfapp\n# \u91cd\u542f\u6761\u4ef6\nRestart=always\n# \u51e0\u79d2\u540e\u91cd\u542f\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u4f7f\u7528\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\u521b\u5efa\u5e94\u7528\u914d\u7f6e\u6587\u4ef6 ",(0,c.jsx)(s.code,{children:"/etc/systemd/system/gfapp.service"}),", \u5185\u5bb9\u5982\u4e0a;"]}),"\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"systemctl daemon-reload"})," \u91cd\u65b0\u52a0\u8f7d\u670d\u52a1;"]}),"\n",(0,c.jsxs)(s.li,{children:["\u6267\u884c ",(0,c.jsx)(s.code,{children:"systemctl start gfapp"})," \u6765\u542f\u52a8\u670d\u52a1;"]}),"\n",(0,c.jsxs)(s.li,{children:["\u6700\u540e\u6267\u884c ",(0,c.jsx)(s.code,{children:"systemctl status gfapp"})," \u6765\u67e5\u770b\u670d\u52a1\u8fd0\u884c\u7684\u72b6\u6001\u4fe1\u606f;"]}),"\n",(0,c.jsxs)(s.li,{children:["\u6267\u884c ",(0,c.jsx)(s.code,{children:"systemctl enable gfapp"})," \u5c06\u670d\u52a1\u6dfb\u52a0\u5230\u5f00\u673a\u542f\u52a8\u9879;"]}),"\n",(0,c.jsxs)(s.li,{children:["\u6ce8\u610f\uff1a\u6267\u884c\u7684 ",(0,c.jsx)(s.code,{children:"gfapp"})," \u662f\u4f7f\u7528\u6587\u4ef6\u540d\u4f5c\u4e3a\u670d\u52a1\u540d;"]}),"\n",(0,c.jsxs)(s.li,{children:["\u5e38\u89c1\u7684\u547d\u4ee4\u6709: ",(0,c.jsx)(s.code,{children:"start(\u542f\u52a8), stop(\u505c\u6b62), restart(\u91cd\u542f), status(\u67e5\u770b\u8fd0\u884c\u72b6\u6001), enable(\u6dfb\u52a0\u5230\u5f00\u673a\u542f\u52a8\u9879), disable(\u5c06\u7a0b\u5e8f\u4ece\u5f00\u673a\u542f\u52a8\u4e2d\u79fb\u9664)"})]}),"\n"]}),"\n",(0,c.jsxs)(s.h3,{id:"5-screen",children:["5. ",(0,c.jsx)(s.code,{children:"screen"})]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Screen"})," \u662f\u4e00\u6b3e\u7531 ",(0,c.jsx)(s.code,{children:"GNU"})," \u8ba1\u5212\u5f00\u53d1\u7684\u7528\u4e8e\u547d\u4ee4\u884c\u7ec8\u7aef\u5207\u6362\u7684\u81ea\u7531\u8f6f\u4ef6\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8be5\u8f6f\u4ef6\u540c\u65f6\u8fde\u63a5\u591a\u4e2a\u672c\u5730\u6216\u8fdc\u7a0b\u7684\u547d\u4ee4\u884c\u4f1a\u8bdd\uff0c\u5e76\u5728\u5176\u95f4\u81ea\u7531\u5207\u6362\u3002 ",(0,c.jsx)(s.code,{children:"GNU Screen"})," \u53ef\u4ee5\u770b\u4f5c\u662f\u7a97\u53e3\u7ba1\u7406\u5668\u7684\u547d\u4ee4\u884c\u754c\u9762\u7248\u672c\u3002\u5b83\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u7ba1\u7406\u591a\u4e2a\u4f1a\u8bdd\u7684\u754c\u9762\u548c\u76f8\u5e94\u7684\u529f\u80fd\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u5b89\u88c5\u65b9\u5f0f:"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"sudo apt install -y screen "}),"( ",(0,c.jsx)(s.code,{children:"debian"})," \u7cfb\u5217)"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"sudo yum install -y screen"}),"\xa0 ( ",(0,c.jsx)(s.code,{children:"centos"}),")"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\u5e38\u7528\u53c2\u6570:"})}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"screen -S yourname"})," -> \u65b0\u5efa\u4e00\u4e2a\u53eb yourname \u7684 session"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"screen -ls"})," -> \u5217\u51fa\u5f53\u524d\u6240\u6709\u7684 session"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"screen -r yourname"})," -> \u56de\u5230 yourname \u8fd9\u4e2a session"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"screen -d yourname"})," -> \u8fdc\u7a0bdetach\u67d0\u4e2a session"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"screen -d -r yourname"})," -> \u7ed3\u675f\u5f53\u524d session \u5e76\u56de\u5230 yourname \u8fd9\u4e2a session"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\u4f7f\u7528\u65b9\u6cd5:"})}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528\u547d\u4ee4 ",(0,c.jsx)(s.code,{children:"screen -S gfapp"})," \u521b\u5efa\u4e00\u4e2a session;"]}),"\n",(0,c.jsxs)(s.li,{children:["\u5728\u65b0\u7ec8\u7aef\u7a97\u53e3\u4e2d\u6267\u884c ",(0,c.jsx)(s.code,{children:"./gf-app"})," \u5373\u53ef\uff1b"]}),"\n",(0,c.jsxs)(s.li,{children:["\u6267\u884c ",(0,c.jsx)(s.code,{children:"ctrl-a, ctrl-d"})," \u6682\u65f6\u79bb\u5f00\u5f53\u524dsession;"]}),"\n",(0,c.jsxs)(s.li,{children:["\u6267\u884c ",(0,c.jsx)(s.code,{children:"screen -r gfapp"})," \u8fd4\u56de\u547d\u4ee4\u7a97\u53e3; \u82e5\u8fd4\u56de\u4e0d\u6210\u529f, \u53ef\u80fd\u662f\u8be5\u7a97\u53e3\u88ab\u5360\u7528( ",(0,c.jsx)(s.code,{children:"Attached"}),")\u4e86, \u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"screen -Dr gfapp"}),";"]}),"\n",(0,c.jsxs)(s.li,{children:["\u6267\u884c ",(0,c.jsx)(s.code,{children:"screen -X -S gfapp quit"})," \u7ed3\u675f\u7a0b\u5e8f;"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"windows",children:"windows"}),"\n",(0,c.jsxs)(s.h3,{id:"1-nssm",children:["1. ",(0,c.jsx)(s.code,{children:"NSSM"})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://zhuanlan.zhihu.com/p/455904037",children:"\u5c0f\u5de7\u53c8\u5b9e\u7528\u7684NSSM\u5c01\u88c5windows\u670d\u52a1\u5de5\u5177\u4ecb\u7ecd - \u77e5\u4e4e (zhihu.com)"})})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var d=n(296540);const c={},r=d.createContext(c);function i(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);