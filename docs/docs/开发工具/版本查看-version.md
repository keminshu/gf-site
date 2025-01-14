---
slug: '/docs/cli/version'
title: '版本查看-version'
sidebar_position: 1
hide_title: true
keywords: [GoFrame,GoFrame框架,gf命令行,版本查看,gf version,CLI工具,Golang版本,技术文档,代码编译,环境配置]
description: '本页面介绍如何使用GoFrame命令行工具查看版本信息，包括gf -v和gf version的使用方式。内容涵盖不同版本的使用示例，展示GoFrame在项目中的具体版本信息，并说明CLI编译细节和注意事项，帮助用户准确理解GoFrame版本与Golang及相关技术的关系。'
---

## 使用方式

- `gf -v`
- `gf version`

用以查看当前 `gf` 命令行工具编译时的版本信息。

## 使用示例

### `>= v2.5.7`

```html
$ gf version
v2.7.2
Welcome to GoFrame!
Env Detail:
  Go Version: go1.22.2 linux/amd64
  GF Version(go.mod):
    github.com/gogf/gf/contrib/drivers/mysql/v2@v2.7.2
    github.com/gogf/gf/v2@v2.7.2
CLI Detail:
  Installed At: /data/home/v_hlaghuang/go/bin/gf
  Built Go Version: go1.20.8
  Built GF Version: v2.7.2
  Git Commit: 2024-06-26 10:08:04 b11caba5b03ed54fbb1415151f7d62b6d913179d
  Built Time: 2024-06-26 10:09:50
Others Detail:
  Docs: https://goframe.org
  Now : 2024-07-17T15:48:57+08:00
```

### `< v2.5.6`

```html
$ gf version
GoFrame CLI Tool v2.0.0, https://goframe.org
GoFrame Version: v2.0.0-beta.0.20211214160159-19c9f0a48845 in current go.mod
CLI Installed At: /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf-cli/main
CLI Built Detail:
  Go Version:  go1.16.3
  GF Version:  v2.0.0-beta
  Git Commit:  2021-12-15 22:43:12 7884058b5df346d34ebab035224e415afb556c19
  Build Time:  2021-12-15 23:00:43
```

## 注意事项

在打印的版本信息中会自动检测当前项目使用的 `GoFrame` 版本（自动解析 `go.mod`），并以 `GoFrame Version` 的信息打印出来。

在 `CLI Built Detail` 信息中展示的是当前二进制编译时使用的各种 `Golang` 版本以及 `GoFrame` 版本信息，编译时的 `Git` 提交版本、当前二进制文件的编译时间。
:::warning
大家请勿将 `GoFrame Version` 和 `CLI Built Detail` 中的 `GF Version` 混淆。
:::