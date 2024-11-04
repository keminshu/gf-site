"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[29998],{735713:(e,d,c)=>{c.r(d),c.d(d,{assets:()=>o,contentTitle:()=>r,default:()=>j,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1","title":"\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1","description":"\u4ee3\u7801\u5206\u5c42\u7684\u610f\u4e49\u5728\u4e8e\u5c06\u7a0b\u5e8f\u903b\u8f91\u8fdb\u4e00\u6b65\u89e3\u8026\uff0c\u5c06\u5c42\u7ea7\u4e4b\u95f4\u7684\u6570\u636e\u6d41\u548c\u4f9d\u8d56\u5173\u7cfb\u8bbe\u8ba1\u4e3a\u5355\u5411\u94fe\u8def\uff0c\u4f7f\u5f97\u7cfb\u7edf\u67b6\u6784\u66f4\u52a0\u7075\u6d3b\u6613\u6269\u5c55\u3002","source":"@site/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1.md","sourceDirName":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1","slug":"/docs/design/project-layer","permalink":"/en/docs/design/project-layer","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730726699000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/design/project-layer","title":"\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","permalink":"/en/docs/design/project"},"next":{"title":"\u5de5\u7a0b\u76ee\u5f55\u8bbe\u8ba1\ud83d\udd25","permalink":"/en/docs/design/project-structure"}}');var s=c(474848),i=c(28453);const l={slug:"/docs/design/project-layer",title:"\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1",sidebar_position:0,hide_title:!0},r=void 0,o={},h=[{value:"\u4e00\u3001\u57fa\u672c\u4ecb\u7ecd",id:"\u4e00\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001 <code>MVC</code> \u8bbe\u8ba1\u6a21\u5f0f",id:"\u4e8c-mvc-\u8bbe\u8ba1\u6a21\u5f0f",level:2},{value:"\u7b80\u8981\u4ecb\u7ecd",id:"\u7b80\u8981\u4ecb\u7ecd",level:3},{value:"\u75db\u70b9\u63cf\u8ff0",id:"\u75db\u70b9\u63cf\u8ff0",level:3},{value:"\u4e09\u3001 <code>3-Tier Architecture</code>",id:"\u4e09-3-tier-architecture",level:2},{value:"\u8868\u793a\u5c42 - <code>UI</code>",id:"\u8868\u793a\u5c42---ui",level:3},{value:"\u4e1a\u52a1\u903b\u8f91\u5c42 -\xa0<code>BLL</code>",id:"\u4e1a\u52a1\u903b\u8f91\u5c42--bll",level:3},{value:"\u6570\u636e\u8bbf\u95ee\u5c42 -\xa0<code>DAL</code>",id:"\u6570\u636e\u8bbf\u95ee\u5c42--dal",level:3},{value:"\u6a21\u578b\u5b9a\u4e49\u5c42 -\xa0<code>Model</code>",id:"\u6a21\u578b\u5b9a\u4e49\u5c42--model",level:3},{value:"\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u4e0e <code>MVC</code>",id:"\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u4e0e-mvc",level:3},{value:"\u56db\u3001\u66f4\u8fdb\u4e00\u6b65\u4e86\u89e3",id:"\u56db\u66f4\u8fdb\u4e00\u6b65\u4e86\u89e3",level:2}];function t(e){const d={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.admonition,{type:"tip",children:(0,s.jsx)(d.p,{children:"\u4ee3\u7801\u5206\u5c42\u7684\u610f\u4e49\u5728\u4e8e\u5c06\u7a0b\u5e8f\u903b\u8f91\u8fdb\u4e00\u6b65\u89e3\u8026\uff0c\u5c06\u5c42\u7ea7\u4e4b\u95f4\u7684\u6570\u636e\u6d41\u548c\u4f9d\u8d56\u5173\u7cfb\u8bbe\u8ba1\u4e3a\u5355\u5411\u94fe\u8def\uff0c\u4f7f\u5f97\u7cfb\u7edf\u67b6\u6784\u66f4\u52a0\u7075\u6d3b\u6613\u6269\u5c55\u3002"})}),"\n",(0,s.jsx)(d.h2,{id:"\u4e00\u57fa\u672c\u4ecb\u7ecd",children:"\u4e00\u3001\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"GoFrame"})," \u4f5c\u4e3a\u4e00\u6b3e\u5de5\u7a0b\u5316\u5b8c\u5907\u7684\u57fa\u7840\u5f00\u53d1\u6846\u67b6\uff0c\u6709\u5176\u72ec\u7279\u7684\u6846\u67b6\u8bbe\u8ba1\u7406\u5ff5\uff0c\u8fd9\u4e00\u7ae0\u8282\u6211\u4eec\u6765\u4ecb\u7ecd\u4e00\u4e0b\u5979\u7684\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1\u3002\u5bf9\u4e8e\u670d\u52a1\u7aef\u4e1a\u52a1\u4ee3\u7801\u7684\u5206\u5c42\u8bbe\u8ba1\u6a21\u5f0f\u4e2d\uff0c\u6211\u4eec\u6bd4\u8f83\u5e38\u89c1\u7684\u662f ",(0,s.jsx)(d.code,{children:"MVC"})," \u8bbe\u8ba1\u6a21\u5f0f\u548c\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u6a21\u5f0f( ",(0,s.jsx)(d.code,{children:"3-Tier Architecture"}),")\u3002"]}),"\n",(0,s.jsxs)(d.h2,{id:"\u4e8c-mvc-\u8bbe\u8ba1\u6a21\u5f0f",children:["\u4e8c\u3001 ",(0,s.jsx)(d.code,{children:"MVC"})," \u8bbe\u8ba1\u6a21\u5f0f"]}),"\n",(0,s.jsxs)(d.p,{children:["\u6211\u4eec\u5148\u6765\u56de\u987e\u4e00\u4e0b\u7ecf\u5178\u7684 ",(0,s.jsx)(d.code,{children:"MVC"})," \u8bbe\u8ba1\u6a21\u5f0f\u3002"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{alt:"MVC\u8bbe\u8ba1\u6a21\u5f0f",src:c(473281).A+"",width:"300",height:"248"})}),"\n",(0,s.jsx)(d.p,{children:"\u56fe1. MVC\u8bbe\u8ba1\u6a21\u5f0f"}),"\n",(0,s.jsx)(d.h3,{id:"\u7b80\u8981\u4ecb\u7ecd",children:"\u7b80\u8981\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"M"})," \u4ee3\u8868\u6a21\u578b( ",(0,s.jsx)(d.code,{children:"Model"}),")\uff0c\u8868\u793a\u4e1a\u52a1\u89c4\u5219\u5c01\u88c5\u3002\u5728 ",(0,s.jsx)(d.code,{children:"MVC"})," \u7684\u4e09\u4e2a\u90e8\u4ef6\u4e2d\uff0c\u6a21\u578b\u62e5\u6709\u6700\u591a\u7684\u5904\u7406\u4efb\u52a1\u3002\u88ab\u6a21\u578b\u8fd4\u56de\u7684\u6570\u636e\u662f\u4e2d\u7acb\u7684\uff0c\u6a21\u578b\u4e0e\u6570\u636e\u683c\u5f0f\u65e0\u5173\uff0c\u8fd9\u6837\u4e00\u4e2a\u6a21\u578b\u80fd\u4e3a\u591a\u4e2a\u89c6\u56fe\u63d0\u4f9b\u6570\u636e\uff0c\u7531\u4e8e\u5e94\u7528\u4e8e\u6a21\u578b\u7684\u4ee3\u7801\u53ea\u9700\u5199\u4e00\u6b21\u5c31\u53ef\u4ee5\u88ab\u591a\u4e2a\u89c6\u56fe\u91cd\u7528\uff0c\u6240\u4ee5\u51cf\u5c11\u4e86\u4ee3\u7801\u7684\u91cd\u590d\u6027\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"V"})," \u4ee3\u8868\u89c6\u56fe( ",(0,s.jsx)(d.code,{children:"View"}),")\uff0c\u7528\u6237\u770b\u5230\u5e76\u4e0e\u4e4b\u4ea4\u4e92\u7684\u754c\u9762\u3002\u6bd4\u5982\u7531 ",(0,s.jsx)(d.code,{children:"HTML"})," \u5143\u7d20\u7ec4\u6210\u7684\u7f51\u9875\u754c\u9762\uff0c\u6216\u8005\u8f6f\u4ef6\u7684\u5ba2\u6237\u7aef\u754c\u9762\u3002 ",(0,s.jsx)(d.code,{children:"MVC"})," \u7684\u597d\u5904\u4e4b\u4e00\u5728\u4e8e\u5b83\u80fd\u4e3a\u5e94\u7528\u7a0b\u5e8f\u5904\u7406\u5f88\u591a\u4e0d\u540c\u7684\u89c6\u56fe\u3002\u5728\u89c6\u56fe\u4e2d\u5176\u5b9e\u6ca1\u6709\u771f\u6b63\u7684\u5904\u7406\u53d1\u751f\uff0c\u5b83\u53ea\u662f\u4f5c\u4e3a\u4e00\u79cd\u8f93\u51fa\u6570\u636e\u5e76\u5141\u8bb8\u7528\u6237\u64cd\u7eb5\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"C"})," \u4ee3\u8868\u63a7\u5236\u5668( ",(0,s.jsx)(d.code,{children:"Controller"}),")\uff0c\u63a5\u53d7\u7528\u6237\u7684\u8f93\u5165\u5e76\u8c03\u7528\u6a21\u578b\u548c\u89c6\u56fe\u53bb\u5b8c\u6210\u7528\u6237\u7684\u9700\u6c42\uff0c\u63a7\u5236\u5668\u672c\u8eab\u4e0d\u8f93\u51fa\u4efb\u4f55\u4e1c\u897f\u548c\u505a\u4efb\u4f55\u5904\u7406\u3002\u5b83\u53ea\u662f\u63a5\u6536\u8bf7\u6c42\u5e76\u51b3\u5b9a\u8c03\u7528\u54ea\u4e2a\u6a21\u578b\u6784\u4ef6\u53bb\u5904\u7406\u8bf7\u6c42\uff0c\u7136\u540e\u518d\u786e\u5b9a\u7528\u54ea\u4e2a\u89c6\u56fe\u6765\u663e\u793a\u8fd4\u56de\u7684\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:["\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u6bd4\u8f83\u7b80\u5355\uff0c\u6bd4\u8f83\u5408\u9002\u4e8e\u9700\u8981\u670d\u52a1\u7aef\u6e32\u67d3\u9875\u9762\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u5bf9\u4e8e ",(0,s.jsx)(d.code,{children:"SEO"})," \u6765\u8bf4\u4e5f\u6bd4\u8f83\u53cb\u597d\u3002\u4f46\u968f\u7740 ",(0,s.jsx)(d.code,{children:"MVVM"})," \u5f00\u53d1\u6a21\u5f0f\u7684\u5174\u8d77\uff0c\u4ee5\u53ca\u524d\u7aef\u6280\u672f\u7684\u5feb\u901f\u53d1\u5c55\uff0c\u7279\u522b\u662f\u4e00\u4e9b\u524d\u7aef\u5f00\u53d1\u6846\u67b6\u5982 ",(0,s.jsx)(d.code,{children:"Vue"}),"\u3001 ",(0,s.jsx)(d.code,{children:"React"}),"\u3001 ",(0,s.jsx)(d.code,{children:"Angular"})," \u4e4b\u7c7b\u7684\u9879\u76ee\u51fa\u73b0\uff0c\u670d\u52a1\u7aef\u7684 ",(0,s.jsx)(d.code,{children:"MVC"})," \u8bbe\u8ba1\u6a21\u5f0f\u4f7f\u7528\u573a\u666f\u53d8\u5f97\u8d8a\u6765\u8d8a\u5c11\u3002"]}),"\n",(0,s.jsx)(d.h3,{id:"\u75db\u70b9\u63cf\u8ff0",children:"\u75db\u70b9\u63cf\u8ff0"}),"\n",(0,s.jsxs)(d.p,{children:["\u9488\u5bf9\u4e8e\u4e1a\u52a1\u903b\u8f91\u5e76\u4e0d\u662f\u7279\u522b\u590d\u6742\u7684\u4e1a\u52a1\u573a\u666f\u9879\u76ee\uff0c ",(0,s.jsx)(d.code,{children:"MVC"})," \u8fd8\u80fd\u6e38\u5203\u6709\u4f59\uff0c\u4f46\u968f\u7740\u4e1a\u52a1\u903b\u8f91\u53d8\u5f97\u5e9e\u5927\u590d\u6742\uff0c ",(0,s.jsx)(d.code,{children:"MVC"})," \u8bbe\u8ba1\u6a21\u5f0f\u7684\u9879\u76ee\u7ef4\u62a4\u6210\u672c\u4e0a\u5347\u7684\u95ee\u9898\u53d8\u5f97\u8d8a\u6765\u8d8a\u660e\u663e\u3002\u7279\u522b\u662f\u968f\u7740\u4e92\u8054\u7f51\u9879\u76ee\u5fae\u670d\u52a1\u67b6\u6784\u7684\u53d1\u5c55\uff0c ",(0,s.jsx)(d.code,{children:"MVC"})," \u8bbe\u8ba1\u6a21\u5f0f\u5728\u5927\u90e8\u5206\u7684\u4e92\u8054\u7f51\u9879\u76ee\u5f00\u53d1\u4e2d\u53d8\u5f97\u8d8a\u6765\u8d8a\u9e21\u808b\u3002\u7a76\u5176\u539f\u56e0\uff0c\u4e3b\u8981\u7684\u51e0\u70b9\uff1a"]}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\u89c6\u56fe\u5c55\u793a\u4e0e\u6570\u636e\u64cd\u4f5c\u65b9\u5f0f\u7684\u8fdb\u4e00\u6b65\u5265\u79bb\uff0c\u7279\u522b\u662f\u79fb\u52a8\u7aef\u7684\u53d1\u5c55\uff0c\u524d\u7aef ",(0,s.jsx)(d.code,{children:"MVVM"})," \u6846\u67b6\u7684\u53d1\u5c55\uff0c\u6211\u4eec\u5927\u591a\u6570\u573a\u666f\u4e0b\u5df2\u4e0d\u518d\u9700\u8981\u670d\u52a1\u7aef\u6e32\u67d3 ",(0,s.jsx)(d.code,{children:"View"}),"\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"MVC"})," \u7684\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1\u6a21\u5f0f\u5176\u5b9e\u7c92\u5ea6\u8f83\u7c97\uff1a","\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"Model"})," \u5c42\u7ea7\u7684\u4ee3\u7801\u65e2\u7ef4\u62a4\u7740\u6570\u636e\uff0c\u4e5f\u5c01\u88c5\u7740\u4e1a\u52a1\u903b\u8f91\uff0c\u968f\u7740\u4e1a\u52a1\u903b\u8f91\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u8fd9\u4e00\u5c42\u529f\u80fd\u903b\u8f91\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u81c3\u80bf\u4e0d\u6613\u7ef4\u62a4\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u5bf9\u4e8e\u56e2\u961f\u7ba1\u7406\u6765\u8bb2\uff0c ",(0,s.jsx)(d.code,{children:"Controller"})," \u548c ",(0,s.jsx)(d.code,{children:"Model"})," \u7684\u804c\u8d23\u8fb9\u754c\u6bd4\u8f83\u6a21\u7cca\uff0c\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458\u5199\u597d\u4ee3\u7801\u7684\u8981\u6c42\u4f1a\u6bd4\u8f83\u9ad8\u3002\u6982\u5ff5\u770b\u4f3c\u7b80\u5355\uff0c\u4f46\u662f\u5374\u96be\u4ee5\u9002\u5e94\u5de5\u4e1a\u5316\u7684\u8f6f\u4ef6\u751f\u4ea7\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(d.h2,{id:"\u4e09-3-tier-architecture",children:["\u4e09\u3001 ",(0,s.jsx)(d.code,{children:"3-Tier Architecture"})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"GoFrame"})," \u6846\u67b6\u63a8\u8350\u7684\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1\u6a21\u5f0f\u4e3a\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\uff08 ",(0,s.jsx)(d.code,{children:"3-Tier Architecture"}),'\uff09\uff0c\u4f46\u5728\u5177\u4f53\u7684\u5b9e\u73b0\u4e2d\uff0c\u5bf9\u8fd9\u79cd\u7ed3\u6784\u8bbe\u8ba1\u6a21\u5f0f\u8fdb\u884c\u4e86\u4e00\u5b9a\u7684\u6539\u8fdb\u3002\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u80fd\u591f\u5f88\u597d\u5730\u4f53\u73b0\u51fa\u8f6f\u4ef6\u8bbe\u8ba1"\u9ad8\u5185\u805a\uff0c\u4f4e\u8026\u5408"\u7684\u8bbe\u8ba1\u601d\u60f3\u3002']}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(989653).A+"",width:"294",height:"300"})}),"\n",(0,s.jsx)(d.p,{children:"\u56fe2. \u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u6a21\u5f0f"}),"\n",(0,s.jsx)(d.p,{children:"\u4f20\u7edf\u7684\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u5982\u4e0a\u56fe\uff0c\u5c06\u9879\u76ee\u4ee3\u7801\u5212\u5206\u4e86\u4e09\u5c42\uff0c\u6bcf\u4e00\u5c42\u6709\u5176\u72ec\u81ea\u7684\u804c\u8d23\u8fb9\u754c\u3002\u4f46\u5728\u5927\u591a\u6570\u7684\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u5e38\u770b\u5230\u7684\u662f\u4ee5\u4e0b\u7684\u5206\u5c42\u7ed3\u6784\uff0c\u5c06\u6570\u636e\u7ed3\u6784\u6a21\u578b\u518d\u8fdb\u4e00\u6b65\u5730\u62bd\u79bb\u4e86\u51fa\u6765\u7edf\u4e00\u7ef4\u62a4\u3002"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{alt:"\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u6a21\u5f0f",src:c(176696).A+"",width:"810",height:"830"})}),"\n",(0,s.jsx)(d.p,{children:"\u56fe3. \u5e38\u89c1\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u6a21\u578b"}),"\n",(0,s.jsxs)(d.h3,{id:"\u8868\u793a\u5c42---ui",children:["\u8868\u793a\u5c42 - ",(0,s.jsx)(d.code,{children:"UI"})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"User Interface"})," \u4f4d\u4e8e\u4e09\u5c42\u6784\u67b6\u7684\u6700\u4e0a\u5c42\uff0c\u4e0e\u7528\u6237\u76f4\u63a5\u63a5\u89e6\uff0c\u4e3b\u8981\u662f ",(0,s.jsx)(d.code,{children:"B/S"})," \u4e2d\u7684 ",(0,s.jsx)(d.code,{children:"WEB"})," \u9875\u9762\uff0c\u4e5f\u53ef\u4ee5\u662f ",(0,s.jsx)(d.code,{children:"API"})," \u63a5\u53e3\u3002\u8868\u793a\u5c42\u7684\u4e3b\u8981\u529f\u80fd\u662f\u5b9e\u73b0\u7cfb\u7edf\u6570\u636e\u7684\u4f20\u5165\u4e0e\u8f93\u51fa\uff0c\u5728\u6b64\u8fc7\u7a0b\u4e2d\u4e0d\u9700\u8981\u501f\u52a9\u903b\u8f91\u5224\u65ad\u64cd\u4f5c\u5c31\u53ef\u4ee5\u5c06\u6570\u636e\u4f20\u9001\u5230 ",(0,s.jsx)(d.code,{children:"BLL"})," \u7cfb\u7edf\u4e2d\u8fdb\u884c\u6570\u636e\u5904\u7406\uff0c\u5904\u7406\u540e\u4f1a\u5c06\u5904\u7406\u7ed3\u679c\u53cd\u9988\u5230\u8868\u793a\u5c42\u4e2d\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u8868\u793a\u5c42\u5c31\u662f\u5b9e\u73b0\u7528\u6237\u754c\u9762/ ",(0,s.jsx)(d.code,{children:"API"})," \u63a5\u53e3\u529f\u80fd\uff0c\u5c06\u7528\u6237\u7684\u9700\u6c42\u4f20\u8fbe\u548c\u53cd\u9988\uff0c\u5e76\u7528 ",(0,s.jsx)(d.code,{children:"BLL"})," \u6216\u8005\u662f ",(0,s.jsx)(d.code,{children:"Model"})," \u8fdb\u884c\u8c03\u8bd5\uff0c\u4fdd\u8bc1\u7528\u6237\u4f53\u9a8c\u3002"]}),"\n",(0,s.jsxs)(d.h3,{id:"\u4e1a\u52a1\u903b\u8f91\u5c42--bll",children:["\u4e1a\u52a1\u903b\u8f91\u5c42 -\xa0",(0,s.jsx)(d.code,{children:"BLL"})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"Business Logic Layer"})," \u7684\u529f\u80fd\u662f\u5bf9\u5177\u4f53\u95ee\u9898\u8fdb\u884c\u903b\u8f91\u5224\u65ad\u4e0e\u6267\u884c\u64cd\u4f5c\uff0c\u63a5\u6536\u5230\u8868\u73b0\u5c42 ",(0,s.jsx)(d.code,{children:"UI"})," \u7684\u7528\u6237\u6307\u4ee4\u540e\uff0c\u4f1a\u8fde\u63a5\u6570\u636e\u8bbf\u95ee\u5c42 ",(0,s.jsx)(d.code,{children:"DAL"}),"\uff0c\u4e1a\u52a1\u903b\u8f91\u5c42\u5728\u4e09\u5c42\u6784\u67b6\u4e2d\u4f4d\u4e8e\u8868\u793a\u5c42\u4e0e\u6570\u636e\u5c42\u4e2d\u95f4\u4f4d\u7f6e\uff0c\u540c\u65f6\u4e5f\u662f\u8868\u793a\u5c42\u4e0e\u6570\u636e\u5c42\u7684\u6865\u6881\uff0c\u5b9e\u73b0\u4e09\u5c42\u4e4b\u95f4\u7684\u6570\u636e\u8fde\u63a5\u548c\u6307\u4ee4\u4f20\u8fbe\uff0c\u53ef\u4ee5\u5bf9\u63a5\u6536\u6570\u636e\u8fdb\u884c\u903b\u8f91\u5904\u7406\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u589e\u5220\u6539\u67e5\u7b49\u529f\u80fd\uff0c\u5e76\u5c06\u5904\u7406\u7ed3\u679c\u53cd\u9988\u5230\u8868\u793a\u5c42 ",(0,s.jsx)(d.code,{children:"UI"})," \u4e2d\uff0c\u5b9e\u73b0\u8f6f\u4ef6\u529f\u80fd\u3002"]}),"\n",(0,s.jsxs)(d.h3,{id:"\u6570\u636e\u8bbf\u95ee\u5c42--dal",children:["\u6570\u636e\u8bbf\u95ee\u5c42 -\xa0",(0,s.jsx)(d.code,{children:"DAL"})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"Data Access Layer"})," \u662f\u6570\u636e\u5e93\u7684\u4e3b\u8981\u64cd\u63a7\u7cfb\u7edf\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u589e\u5220\u6539\u67e5\u7b49\u64cd\u4f5c\uff0c\u5e76\u5c06\u64cd\u4f5c\u7ed3\u679c\u53cd\u9988\u5230\u4e1a\u52a1\u903b\u8f91\u5c42 ",(0,s.jsx)(d.code,{children:"BLL"}),"\u3002\u5728\u5b9e\u9645\u8fd0\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6570\u636e\u8bbf\u95ee\u5c42\u6ca1\u6709\u903b\u8f91\u5224\u65ad\u80fd\u529b\uff0c\u4e3a\u4e86\u5b9e\u73b0\u4ee3\u7801\u7f16\u5199\u7684\u4e25\u8c28\u6027\uff0c\u63d0\u9ad8\u4ee3\u7801\u9605\u8bfb\u7a0b\u5ea6\uff0c\u4e00\u822c\u8f6f\u4ef6\u5f00\u53d1\u4eba\u5458\u4f1a\u5728\u8be5\u5c42\u4e2d\u5b9e\u73b0\u901a\u7528\u6570\u636e\u80fd\u529b\u8fdb\u884c\u5c01\u88c5\uff08\u4f8b\u5982\u901a\u8fc7 ",(0,s.jsx)(d.code,{children:"ORM"})," \u7ec4\u4ef6\uff09\u6765\u4fdd\u8bc1\u6570\u636e\u8bbf\u95ee\u5c42 ",(0,s.jsx)(d.code,{children:"DAL"})," \u6570\u636e\u5904\u7406\u529f\u80fd\u3002"]}),"\n",(0,s.jsxs)(d.h3,{id:"\u6a21\u578b\u5b9a\u4e49\u5c42--model",children:["\u6a21\u578b\u5b9a\u4e49\u5c42 -\xa0",(0,s.jsx)(d.code,{children:"Model"})]}),"\n",(0,s.jsxs)(d.p,{children:["\u6a21\u578b\u5b9a\u4e49\u4e5f\u5e38\u7528 ",(0,s.jsx)(d.code,{children:"Entity"})," \u5b9e\u4f53\u5bf9\u8c61\u6765\u8868\u793a\uff0c\u4e3b\u8981\u7528\u4e8e\u6570\u636e\u5e93\u8868\u7684\u6620\u5c04\u5bf9\u8c61\uff0c\u5728\u4fe1\u606f\u7cfb\u7edf\u8f6f\u4ef6\u5b9e\u9645\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8981\u5efa\u7acb\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u5c06\u5173\u7cfb\u6570\u636e\u5e93\u8868\u91c7\u7528\u5bf9\u8c61\u5b9e\u4f53\u5316\u7684\u65b9\u5f0f\u8868\u73b0\u51fa\u6765\uff0c\u8f85\u52a9\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u5bf9\u5404\u4e2a\u7cfb\u7edf\u529f\u80fd\u7684\u63a7\u5236\u4e0e\u64cd\u4f5c\u6267\u884c\u3002\u5efa\u7acb\u5b9e\u4f53\u7c7b\u5e93\uff0c\u8fdb\u800c\u5b9e\u73b0\u5404\u4e2a\u7ed3\u6784\u5c42\u7684\u53c2\u6570\u4f20\u8f93\uff0c\u63d0\u9ad8\u4ee3\u7801\u7684\u9605\u8bfb\u6027\u3002\u4ece\u672c\u8d28\u4e0a\u770b\uff0c\u5b9e\u4f53\u7c7b\u5e93\u4e3b\u8981\u670d\u52a1\u4e8e\u8868\u793a\u5c42\u3001\u4e1a\u52a1\u903b\u8f91\u5c42\u4ee5\u53ca\u6570\u636e\u8bbf\u95ee\u5c42\uff0c\u5728\u4e09\u5c42\u4e4b\u95f4\u8fdb\u884c\u6570\u636e\u53c2\u6570\u4f20\u8f93\uff0c\u5f3a\u5316\u6570\u636e\u8868\u793a\u7684\u7b80\u7ea6\u6027\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:["\u9700\u8981\u6ce8\u610f\u533a\u5206\u7684\u662f\uff0c\u8fd9\u91cc\u7684 ",(0,s.jsx)(d.code,{children:"Model"})," \u548c ",(0,s.jsx)(d.code,{children:"MVC"})," \u8bbe\u8ba1\u6a21\u5f0f\u4e2d\u7684 ",(0,s.jsx)(d.code,{children:"Model"})," \u867d\u7136\u90fd\u662f\u4e00\u4e2a\u540d\u5b57\u4f46\u662f\u5dee\u522b\u5de8\u5927\uff0c\u804c\u8d23\u5b8c\u5168\u4e0d\u540c\u3002"]}),"\n",(0,s.jsxs)(d.h3,{id:"\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u4e0e-mvc",children:["\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u4e0e ",(0,s.jsx)(d.code,{children:"MVC"})]}),"\n",(0,s.jsxs)(d.p,{children:["\u7531\u4e8e ",(0,s.jsx)(d.code,{children:"MVC"})," \u4e5f\u662f\u4e09\u5c42\u7ed3\u6784\uff0c\u56e0\u6b64\u6709\u7684\u540c\u5b66\u4e5f\u4f1a\u5c06 ",(0,s.jsx)(d.code,{children:"MVC"})," \u7b3c\u7edf\u5730\u5f52\u7eb3\u4e8e\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u4e2d\uff0c\u4ece\u5b57\u9762\u610f\u4e49\u4e0a\u6765\u8bb2\u4f3c\u4e4e\u4e5f\u6ca1\u4ec0\u4e48\u95ee\u9898\u3002\u4e0d\u8fc7\u4e24\u8005\u8fd8\u662f\u5b58\u5728\u4e00\u5b9a\u7684\u533a\u522b\u3002"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(875037).A+"",width:"944",height:"450"})}),"\n",(0,s.jsx)(d.p,{children:"\u56fe4. \u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u4e0eMVC"}),"\n",(0,s.jsxs)(d.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u4e09\u5c42\u67b6\u6784\u8bbe\u8ba1\u4e2d\uff0c ",(0,s.jsx)(d.code,{children:"UI"})," \u8868\u793a\u5c42\u5373\u76f8\u5f53\u4e8e ",(0,s.jsx)(d.code,{children:"MVC"})," \u7684 ",(0,s.jsx)(d.code,{children:"View"})," \u548c ",(0,s.jsx)(d.code,{children:"Controller"})," \u5c42\uff0c\u539f\u672c\u5728 ",(0,s.jsx)(d.code,{children:"MVC"}),' \u4e2d\u8fd9\u4e24\u5c42\u7684\u903b\u8f91\u5e94\u5f53\u662f\u6bd4\u8f83"\u8f7b\u91cf"\u7684\uff0c\u56e0\u6b64\u88ab\u5408\u5e76\u4e3a\u4e00\u5c42\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u4e5f\u53ef\u4ee5\u7406\u89e3\u3002\u6bd4\u8f83\u91cd\u8981\u7684\u4e00\u70b9\u662f\uff0c\u539f\u672c ',(0,s.jsx)(d.code,{children:"MVC"})," \u4e2d\u7684 ",(0,s.jsx)(d.code,{children:"Model"})," \u88ab\u62c6\u5206\u4e3a\u4e86 ",(0,s.jsx)(d.code,{children:"BLL"})," \u548c ",(0,s.jsx)(d.code,{children:"DAL"}),"\uff0c\u5373\u5c06\u4e1a\u52a1\u903b\u8f91\u4e0e\u6570\u636e\u8bbf\u95ee\u8fdb\u884c\u5206\u79bb\uff0c\u5c06\u539f\u672c\u81c3\u80bf\u7684 ",(0,s.jsx)(d.code,{children:"Model"})," \u8fdb\u884c\u4e86\u8fdb\u4e00\u6b65\u7684\u89e3\u8026\uff0c\u6709\u5229\u4e8e\u9879\u76ee\u7684\u66f4\u597d\u7ef4\u62a4\u3002"]}),"\n",(0,s.jsx)(d.admonition,{type:"tip",children:(0,s.jsx)(d.p,{children:"\u8f6f\u4ef6\u67b6\u6784\u7684\u6f14\u53d8\u8fc7\u7a0b\uff0c\u7279\u522b\u662f\u4e92\u8054\u7f51\u8f6f\u4ef6\u67b6\u6784\u7684\u6f14\u53d8\u8fc7\u7a0b\uff0c\u672c\u8d28\u4e5f\u5c31\u662f\u5c06\u4e1a\u52a1\u903b\u8f91\u4e0d\u65ad\u89e3\u8026\u7684\u8fc7\u7a0b\u3002"})}),"\n",(0,s.jsx)(d.h2,{id:"\u56db\u66f4\u8fdb\u4e00\u6b65\u4e86\u89e3",children:"\u56db\u3001\u66f4\u8fdb\u4e00\u6b65\u4e86\u89e3"}),"\n",(0,s.jsxs)(d.p,{children:["\u4ee3\u7801\u5206\u5c42\u601d\u60f3\u662f\u6700\u57fa\u7840\u7684\u5de5\u7a0b\u8bbe\u8ba1\u5165\u95e8\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5206\u5c42\u601d\u60f3\u8fdb\u884c\u843d\u5730\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\uff1a ",(0,s.jsx)(d.a,{href:"/en/docs/design/project-structure",children:"\u5de5\u7a0b\u76ee\u5f55\u8bbe\u8ba1\ud83d\udd25"})]})]})}function j(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},875037:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/2c6cfc087687cca60b1f4d23b78705c4-6b51765a470f370a3c34306767a9ddd0.png"},989653:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/8b93ee429f05737e03dfc58bdfe04905-122d111b673649b5057ffe4bf32ebce1.png"},473281:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/d90094b0f7ec2edb2220ffc0204a1c2d-1efdaa18912ff6cc969a06bd8e8b7018.png"},176696:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/fe9aea78ab05dc6db3b34d021a05ee76-339d0c671d939b6cf6c9569158f0dafb.png"},28453:(e,d,c)=>{c.d(d,{R:()=>l,x:()=>r});var n=c(296540);const s={},i=n.createContext(s);function l(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);