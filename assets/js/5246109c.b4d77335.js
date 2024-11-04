"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[20123],{547785:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b","title":"\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b","description":"\u5bf9 OpenTelemetry \u7684\u6982\u5ff5\u6709\u521d\u6b65\u4e86\u89e3\u540e\uff0c\u6211\u4eec\u63a5\u7740\u4ee5 Jaeger \u4e3a\u4f8b\u6765\u6f14\u793a\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u5b9e\u73b0\u94fe\u8def\u8ffd\u8e2a\u3002","source":"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b","permalink":"/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u94fe\u8def\u8ddf\u8e2a","permalink":"/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a/"},"next":{"title":"\u94fe\u8def\u8ddf\u8e2a-HTTP\u8bf7\u6c42","permalink":"/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u8bf7\u6c42"}}');var s=r(474848),c=r(28453);const i={title:"\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b",sidebar_position:0,hide_title:!0},d=void 0,o={},a=[{value:"Jaeger",id:"jaeger",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u793a\u4f8b\u4ed3\u5e93\u5730\u5740",id:"\u793a\u4f8b\u4ed3\u5e93\u5730\u5740",level:2},{value:"\u5355\u8fdb\u7a0b\u94fe\u8def\u8ddf\u8e2a",id:"\u5355\u8fdb\u7a0b\u94fe\u8def\u8ddf\u8e2a",level:2},{value:"TracerProvider",id:"tracerprovider",level:3},{value:"Root Span",id:"root-span",level:3},{value:"\u65b9\u6cd5\u95f4Span\u521b\u5efa",id:"\u65b9\u6cd5\u95f4span\u521b\u5efa",level:3},{value:"\u6548\u679c\u67e5\u770b",id:"\u6548\u679c\u67e5\u770b",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5bf9 ",(0,s.jsx)(n.code,{children:"OpenTelemetry"})," \u7684\u6982\u5ff5\u6709\u521d\u6b65\u4e86\u89e3\u540e\uff0c\u6211\u4eec\u63a5\u7740\u4ee5 ",(0,s.jsx)(n.code,{children:"Jaeger"})," \u4e3a\u4f8b\u6765\u6f14\u793a\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u5b9e\u73b0\u94fe\u8def\u8ffd\u8e2a\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"jaeger",children:"Jaeger"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),"\\\u02c8y\u0101-g\u0259r\\ \u662fUber\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u8ffd\u8e2a\u7cfb\u7edf\uff0c\u662f\u652f\u6301 ",(0,s.jsx)(n.code,{children:"OpenTelemetry"})," \u7684\u7cfb\u7edf\u4e4b\u4e00\uff0c\u4e5f\u662f ",(0,s.jsx)(n.code,{children:"CNCF"})," \u9879\u76ee\u3002\u672c\u7bc7\u5c06\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Jaeger"})," \u6765\u6f14\u793a\u5982\u4f55\u5728\u7cfb\u7edf\u4e2d\u5f15\u5165\u5206\u5e03\u5f0f\u8ffd\u8e2a\u3002\u4ee5\u4e0b\u662f ",(0,s.jsx)(n.code,{children:"Opentracing+Jaeger"})," \u7684\u67b6\u6784\u56fe\uff0c\u9488\u5bf9\u4e8e\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"OpenTelemetry"})," \u4e5f\u662f\u5982\u6b64\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"",children:(0,s.jsx)(n.img,{src:r(58217).A+"",width:"2512",height:"1344"})}),"\n",(0,s.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Jaeger"})," \u63d0\u4f9b\u4e86 ",(0,s.jsx)(n.code,{children:"all-in-one"})," \u955c\u50cf\uff0c\u65b9\u4fbf\u6211\u4eec\u5feb\u901f\u5f00\u59cb\u6d4b\u8bd5\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -d --name jaeger \\\n-e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \\\n-p 5775:5775/udp \\\n-p 6831:6831/udp \\\n-p 6832:6832/udp \\\n-p 5778:5778 \\\n-p 16686:16686 \\\n-p 14268:14268 \\\n-p 9411:9411 \\\njaegertracing/all-in-one:1.14\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"docker"})," \u955c\u50cf\u62c9\u53d6\u592a\u6162\uff0c\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"docker"})," \u62c9\u53d6\u7ad9\u70b9\u7684\u955c\u50cf\u5730\u5740\uff0c\u4f8b\u5982\uff1a ",(0,s.jsx)(n.a,{href:"http://mirrors.ustc.edu.cn/help/dockerhub.html?highlight=docker",children:"http://mirrors.ustc.edu.cn/help/dockerhub.html?highlight=docker"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u955c\u50cf\u542f\u52a8\u540e\uff0c\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"http://localhost:16686/",children:"http://localhost:16686"})," \u53ef\u4ee5\u6253\u5f00 ",(0,s.jsx)(n.code,{children:"Jaeger UI"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(209310).A+"",width:"1918",height:"896"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u8f7d\u5ba2\u6237\u7aef ",(0,s.jsx)(n.code,{children:"library"}),"\uff0c\u4fbf\u4e8e\u540e\u7eed\u4ee3\u7801\u5f00\u53d1\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/jaegertracing/jaeger-client-go\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b\u4ed3\u5e93\u5730\u5740",children:"\u793a\u4f8b\u4ed3\u5e93\u5730\u5740"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u7684\u793a\u4f8b\u4ee3\u7801\u6258\u7ba1\u5230\u4e86 ",(0,s.jsx)(n.code,{children:"github"})," \u4e0a\uff0c\u5730\u5740\u4e3a\uff1a ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf-tracing",children:"https://github.com/gogf/gf-tracing"})]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8f7d\u5230\u672c\u5730\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gogf/gf-tracing\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u968f\u540e\u7684\u793a\u4f8b\u4ecb\u7ecd\u90fd\u5c06\u4ee5\u6b64\u4ed3\u5e93\u4ee3\u7801\u4e3a\u51c6\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5355\u8fdb\u7a0b\u94fe\u8def\u8ddf\u8e2a",children:"\u5355\u8fdb\u7a0b\u94fe\u8def\u8ddf\u8e2a"}),"\n",(0,s.jsxs)(n.p,{children:["\u5355\u8fdb\u7a0b\u7684\u94fe\u8def\u8ddf\u8e2a\u5373\u8fdb\u7a0b\u5185\u65b9\u6cd5\u4e4b\u95f4\u7684\u8c03\u7528\u94fe\u5173\u7cfb\u3002\u8fd9\u79cd\u573a\u666f\u7684\u8ddf\u8e2a\u6ca1\u6709\u6d89\u53ca\u5230\u5206\u5e03\u5f0f\u8ddf\u8e2a\uff0c\u6bd4\u8f83\u7b80\u5355\uff0c\u4ee5\u8be5\u793a\u4f8b\u4f5c\u4e3a\u6211\u4eec\u5165\u95e8\u7684\u4e00\u4e2a\u4f8b\u5b50\u5427\u3002\u793a\u4f8b\u4ee3\u7801\u5730\u5740\uff1a ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf-tracing/tree/master/examples/inprocess",children:"https://github.com/gogf/gf-tracing/tree/master/examples/inprocess"})]}),"\n",(0,s.jsx)(n.h3,{id:"tracerprovider",children:"TracerProvider"}),"\n",(0,s.jsxs)(n.p,{children:["\u521d\u59cb\u5316 ",(0,s.jsx)(n.code,{children:"Jaeger tracer"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package tracing\n\nimport (\n    "strings"\n\n    "go.opentelemetry.io/otel"\n    "go.opentelemetry.io/otel/exporters/jaeger"\n    "go.opentelemetry.io/otel/sdk/resource"\n    "go.opentelemetry.io/otel/sdk/trace"\n    semconv "go.opentelemetry.io/otel/semconv/v1.4.0"\n)\n\n// InitJaeger initializes and registers jaeger to global TracerProvider.\n//\n// The output parameter `tp` is used for waiting exported trace spans to be uploaded,\n// which is useful if your program is ending and you do not want to lose recent spans.\nfunc InitJaeger(serviceName, endpoint string) (tp *trace.TracerProvider, err error) {\n    var endpointOption jaeger.EndpointOption\n    if strings.HasPrefix(endpoint, "http") {\n        // HTTP.\n        endpointOption = jaeger.WithCollectorEndpoint(jaeger.WithEndpoint(endpoint))\n    } else {\n        // UDP.\n        endpointOption = jaeger.WithAgentEndpoint(jaeger.WithAgentHost(endpoint))\n    }\n\n    // Create the Jaeger exporter\n    exp, err := jaeger.New(endpointOption)\n    if err != nil {\n        return nil, err\n    }\n    tp = trace.NewTracerProvider(\n        // Always be sure to batch in production.\n        trace.WithBatcher(exp),\n        // Record information about this application in an Resource.\n        trace.WithResource(resource.NewWithAttributes(\n            semconv.SchemaURL,\n            semconv.ServiceNameKey.String(serviceName),\n        )),\n    )\n    otel.SetTracerProvider(tp)\n    return tp, nil\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"root-span",children:"Root Span"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"root span"})," \u5373\u94fe\u8def\u4e2d\u7b2c\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"span"})," \u5bf9\u8c61\u3002\u5728\u8fd9\u91cc\u7684\u5355\u8fdb\u7a0b\u573a\u666f\u4e2d\uff0c\u5f80\u5f80\u9700\u8981\u624b\u52a8\u521b\u5efa\u4e00\u4e2a\u3002\u968f\u540e\u5728\u65b9\u6cd5\u5185\u90e8\u521b\u5efa\u7684 ",(0,s.jsx)(n.code,{children:"span"})," \u90fd\u4f1a\u4f5c\u4e3a\u5b83\u7684\u5b50\u7ea7 ",(0,s.jsx)(n.code,{children:"span"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5206\u5e03\u5f0f\u67b6\u6784\u7684\u670d\u52a1\u95f4\u901a\u4fe1\u573a\u666f\u4e2d\uff0c\u5f80\u5f80\u4e0d\u9700\u8981\u5f00\u53d1\u8005\u624b\u52a8\u521b\u5efa ",(0,s.jsx)(n.code,{children:"root span"}),"\uff0c\u800c\u662f\u7531\u5ba2\u6237\u7aef/\u670d\u52a1\u7aef\u8bf7\u6c42\u7684\u62e6\u622a\u5668\u6765\u81ea\u52a8\u521b\u5efa\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa ",(0,s.jsx)(n.code,{children:"tracer"}),"\uff0c\u751f\u6210 ",(0,s.jsx)(n.code,{children:"root span"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func main() {\n    flush, err := tracing.InitJaeger(ServiceName, JaegerUdpEndpoint)\n    if err != nil {\n        g.Log().Fatal(err)\n    }\n    defer flush()\n\n    ctx, span := gtrace.NewSpan(context.Background(), "main")\n    defer span.End()\n\n    user1 := GetUser(ctx, 1)\n    g.Dump(user1)\n\n    user100 := GetUser(ctx, 100)\n    g.Dump(user100)\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"root span"}),"\uff0c\u5e76\u5c06\u8be5 ",(0,s.jsx)(n.code,{children:"span"})," \u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"context"})," \u4f20\u9012\u7ed9 ",(0,s.jsx)(n.code,{children:"GetUser"})," \u65b9\u6cd5\uff0c\u4ee5\u4fbf\u5728 ",(0,s.jsx)(n.code,{children:"GetUser"})," \u65b9\u6cd5\u4e2d\u5c06\u8ffd\u8e2a\u94fe\u7ee7\u7eed\u5ef6\u7eed\u4e0b\u53bb\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u65b9\u6cd5\u95f4span\u521b\u5efa",children:"\u65b9\u6cd5\u95f4Span\u521b\u5efa"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// GetUser retrieves and returns hard coded user data for demonstration.\nfunc GetUser(ctx context.Context, id int) g.Map {\n    ctx, span := gtrace.NewSpan(ctx, "GetUser")\n    defer span.End()\n    m := g.Map{}\n    gutil.MapMerge(\n        m,\n        GetInfo(ctx, id),\n        GetDetail(ctx, id),\n        GetScores(ctx, id),\n    )\n    return m\n}\n\n// GetInfo retrieves and returns hard coded user info for demonstration.\nfunc GetInfo(ctx context.Context, id int) g.Map {\n    ctx, span := gtrace.NewSpan(ctx, "GetInfo")\n    defer span.End()\n    if id == 100 {\n        return g.Map{\n            "id":     100,\n            "name":   "john",\n            "gender": 1,\n        }\n    }\n    return nil\n}\n\n// GetDetail retrieves and returns hard coded user detail for demonstration.\nfunc GetDetail(ctx context.Context, id int) g.Map {\n    ctx, span := gtrace.NewSpan(ctx, "GetDetail")\n    defer span.End()\n    if id == 100 {\n        return g.Map{\n            "site":  "https://goframe.org",\n            "email": "john@goframe.org",\n        }\n    }\n    return nil\n}\n\n// GetScores retrieves and returns hard coded user scores for demonstration.\nfunc GetScores(ctx context.Context, id int) g.Map {\n    ctx, span := gtrace.NewSpan(ctx, "GetScores")\n    defer span.End()\n    if id == 100 {\n        return g.Map{\n            "math":    100,\n            "english": 60,\n            "chinese": 50,\n        }\n    }\n    return nil\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u591a\u5c42\u7ea7\u65b9\u6cd5\u95f4\u7684\u94fe\u8def\u4fe1\u606f\u4f20\u9012\uff0c\u5373\u662f\u628a ",(0,s.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u65b9\u6cd5\u53c2\u6570\u4f20\u9012\u5373\u53ef\u3002\u5728\u65b9\u6cd5\u5185\u90e8\uff0c\u6211\u4eec\u901a\u8fc7\u7684\u56fa\u5b9a\u8bed\u6cd5\u6765\u521b\u5efa/\u5f00\u59cb\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Span"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'ctx, span := gtrace.NewSpan(ctx, "xxx")\ndefer span.End()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5e76\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"defer"})," \u7684\u65b9\u5f0f\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"span.End"})," \u6765\u7ed3\u675f\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Span"}),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u5f88\u597d\u5730\u8bb0\u5f55 ",(0,s.jsx)(n.code,{children:"Span"})," \u751f\u547d\u5468\u671f\uff08\u5f00\u59cb\u548c\u7ed3\u675f\uff09\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u90fd\u5c06\u4f1a\u5c55\u793a\u5230\u94fe\u8def\u8ddf\u8e2a\u7cfb\u7edf\u4e2d\u3002\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"gtrace.NewSpan"})," \u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"spanName"})," \u6211\u4eec\u76f4\u63a5\u7ed9\u5b9a\u65b9\u6cd5\u7684\u540d\u79f0\u5373\u53ef\uff0c\u8fd9\u6837\u5728\u94fe\u8def\u5c55\u793a\u4e2d\u6bd4\u8f83\u6709\u8bc6\u522b\u6027\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6548\u679c\u67e5\u770b",children:"\u6548\u679c\u67e5\u770b"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u5b8c\u4e0a\u9762\u7684\u7a0b\u5e8f\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(379486).A+"",width:"1010",height:"740"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6253\u5f00 ",(0,s.jsx)(n.code,{children:"Jaeger UI"}),": ",(0,s.jsx)(n.a,{href:"http://localhost:16686/search",children:"http://localhost:16686/search"}),"\uff0c\u53ef\u4ee5\u770b\u5230\u94fe\u8def\u8ffd\u8e2a\u7684\u7ed3\u679c\uff1a",(0,s.jsx)(n.img,{src:r(529977).A+"",width:"1280",height:"266"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(910694).A+"",width:"2852",height:"1240"})}),"\n",(0,s.jsxs)(n.p,{children:["\u70b9\u51fb\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b\u5177\u4f53\u4fe1\u606f\uff0c\u5305\u62ec ",(0,s.jsx)(n.code,{children:"span"})," \u7684\u8c03\u7528\u987a\u5e8f\u3001\u8c03\u7528\u5173\u7cfb\uff0c\u6267\u884c\u65f6\u95f4\u8f74\uff0c\u4ee5\u53ca\u8bb0\u5f55\u4e00\u4e9bAttributes\u548c ",(0,s.jsx)(n.code,{children:"Events"})," \u4fe1\u606f\uff0c\u6781\u5927\u7684\u65b9\u4fbf\u6211\u4eec\u5b9a\u4f4d\u7cfb\u7edf\u4e2d\u7684\u5f02\u5e38\u548c\u53d1\u73b0\u6027\u80fd\u74f6\u9888\u3002\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(268691).A+"",width:"1919",height:"846"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"tracing-inprocess"})," \u662f\u6211\u4eec ",(0,s.jsx)(n.code,{children:"tracer"})," \u7684\u540d\u79f0\uff0c\u8be5\u540d\u79f0\u5f80\u5f80\u662f\u670d\u52a1\u540d\u79f0\uff0c\u7531\u4e8e\u6211\u4eec\u8fd9\u91cc\u53ea\u6709\u4e00\u4e2a\u8fdb\u7a0b\u548c\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"tracer"}),"\uff0c\u56e0\u6b64\u8fd9\u91cc\u53ea\u770b\u5f97\u5230\u4e00\u4e2a\u670d\u52a1\u540d\u79f0\u3002\u5176\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"main"})," \u4e3a\u6211\u4eec\u521b\u5efa\u7684 ",(0,s.jsx)(n.code,{children:"root span"})," \u540d\u79f0\uff0c\u5176\u4ed6\u7684 ",(0,s.jsx)(n.code,{children:"span"})," \u4e3a\u57fa\u4e8e\u8be5 ",(0,s.jsx)(n.code,{children:"root span"})," \u521b\u5efa\u7684\u5b50\u7ea7 ",(0,s.jsx)(n.code,{children:"span"}),"\u3002\u7531\u4e8e\u6211\u4eec\u5728\u7a0b\u5e8f\u4e2d\u8c03\u7528\u4e86\u4e24\u6b21 ",(0,s.jsx)(n.code,{children:"GetUser"})," \u65b9\u6cd5\uff0c\u56e0\u6b64\u8fd9\u91cc\u4e5f\u5c55\u793a\u4e86\u4e24\u6b21 ",(0,s.jsx)(n.code,{children:"GetUser"})," \u65b9\u6cd5\u7684\u8c03\u7528\u3002\u6bcf\u4e00\u6b21 ",(0,s.jsx)(n.code,{children:"GetUser"})," \u8c03\u7528\u7684\u5185\u90e8\u53c8\u5206\u522b\u53bb\u8c03\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"GetIndo\u3001GetDetail\u3001GetScores"})," \u4e09\u4e2a\u65b9\u6cd5\uff0c\u65b9\u6cd5\u95f4\u7684\u8c03\u7528\u5c42\u7ea7\u5173\u7cfb\u5c55\u793a\u5f97\u975e\u5e38\u6e05\u6670\u660e\u4e86\uff0c\u5e76\u4e14\u6bcf\u4e2a\u65b9\u6cd5\u7684\u8c03\u7528\u65f6\u957f\u90fd\u53ef\u4ee5\u770b\u5f97\u5230\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5173\u4e8e\u5176\u4e2d\u6bcf\u4e2a ",(0,s.jsx)(n.code,{children:"span"})," \u8bb0\u5f55\u7684 ",(0,s.jsx)(n.code,{children:"Tags"})," \u548c ",(0,s.jsx)(n.code,{children:"Process"})," \u4fe1\u606f\u5176\u5b9e\u5bf9\u5e94\u4e86 ",(0,s.jsx)(n.code,{children:"OpenTelemetry"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"Attributes"})," \u548c ",(0,s.jsx)(n.code,{children:"Events"})," \u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u6211\u4eec\u653e\u5230\u540e\u7eed\u7ae0\u8282\u53bb\u8be6\u7ec6\u4ecb\u7ecd\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},529977:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/4e7578015b37d7f6187039f4a1c04a30-ae9c9e0e900bcf8bef94471d7d75a117.jpg"},58217:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/765229ab3000dab2192051439398e45d-0dfc53f098d5b704ad93a0423dbd8ceb.png"},910694:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/783d297f679251bd72c0b985656cec3f-4db7680b06beda56926e17ade0a213e1.png"},268691:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/c392461db1de0086fc2e2081f452644f-16e4e0d0dd57ef54d4fb44411bb6b74f.png"},209310:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/e2947fd76d0e927bf88b05aef3a606f9-e8f8ffbbe85f12b7ca426a6a20e32f3b.png"},379486:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/e47d4375ce048f9e3a031a5300aba99a-3508156f1c4260a5efe65451d7669fed.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(296540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);