---
slug: '/docs/core/gcfg-interface-adapter-file'
title: '配置管理-AdapterFile'
sidebar_position: 0
hide_title: true
keywords: [GoFrame,GoFrame框架,配置管理,AdapterFile,g.Cfg对象,基于文件的配置,gcfg.NewWithAdapter,配置组件,配置加载,Go语言]
description: '本页面介绍了GoFrame框架中配置管理的实现，主要通过AdapterFile进行基于文件的配置加载和读取。用户可以通过g.Cfg单例对象便捷地使用配置管理，亦可通过gcfg.NewWithAdapter方法创建配置管理对象。示例代码展示了如何在Go语言中实现和运行这些配置操作。'
---

## `AdapterFile`

`AdapterFile` 是框架默认的配置管理实现方式，基于文件的配置加载和读取。

## 通过 `g.Cfg` 单例对象使用

大部分场景下，我们可以通过框架已经封装好的g.Cfg单例对象来便捷使用基于文件的配置管理实现。例如：

`config.yaml`

```yaml
server:
  address:     ":8888"
  openapiPath: "/api.json"
  swaggerPath: "/swagger"
  dumpRouterMap: false

database:
  default:
    link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
    debug:  true
```

`main.go`

```go
package main

import (
    "fmt"

    "github.com/gogf/gf/v2/frame/g"
    "github.com/gogf/gf/v2/os/gctx"
)

func main() {
    var ctx = gctx.New()
    fmt.Println(g.Cfg().MustGet(ctx, "server.address").String())
    fmt.Println(g.Cfg().MustGet(ctx, "database.default").Map())
}
```

运行后，终端输出：

```html
:8888
map[debug:true link:mysql:root:12345678@tcp(127.0.0.1:3306)/test]
```

## 通过 `gcfg.NewWithAdapter` 使用

我们也可以通过配置组件的 `NewWithAdapter` 方法来创建一个基于给定 `Adapter` 的配置管理对象，当然，在这里我们给一个 `AdapterFile` 接口对象。

`config.yaml`

```yaml
server:
  address:     ":8888"
  openapiPath: "/api.json"
  swaggerPath: "/swagger"
  dumpRouterMap: false

database:
  default:
    link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
    debug:  true
```

`main.go`

```go
package main

import (
    "fmt"

    "github.com/gogf/gf/v2/os/gcfg"
    "github.com/gogf/gf/v2/os/gctx"
)

func main() {
    var ctx = gctx.New()
    adapter, err := gcfg.NewAdapterFile("config")
    if err != nil {
        panic(err)
    }
    config := gcfg.NewWithAdapter(adapter)
    fmt.Println(config.MustGet(ctx, "server.address").String())
    fmt.Println(config.MustGet(ctx, "database.default").Map())
}
```

运行后，终端输出：

```html
:8888
map[debug:true link:mysql:root:12345678@tcp(127.0.0.1:3306)/test]
```