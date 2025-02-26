---
slug: '/docs/core/gdb-senior-raw-sql'
title: 'ORM高级特性-RawSQL'
sidebar_position: 0
hide_title: true
keywords: [GoFrame,ORM,RawSQL,SQL注入,gdb.Raw,数据插入,数据更新,数据查询,预处理模式,SQL语句]
description: '本文介绍了如何在GoFrame框架中使用ORM的RawSQL特性，通过使用gdb.Raw类型，可以在生成的SQL语句中嵌入自定义的SQL片段，实现更灵活的数据库操作。详细讲解了在Insert、Update和Select操作中使用RawSQL的方法及其示例，确保SQL语句的安全性和灵活性。'
---

由于 `ORM` 的安全性保障，所有输入的参数在底层都将使用预处理模式执行，防止常见的 `SQL` 注入风险。在某一些场景中，我们期望在生成执行的SQL语句中嵌入自定义的SQL语句，那么我们可以使用 `ORM` 的 `RawSQL` 特性，通过 `gdb.Raw` 类型来实现。我们来看几个示例。

## 在 `Insert` 中使用 `RawSQL`

`gdb.Raw` 是字符串类型，该类型的参数将会直接作为 `SQL` 片段嵌入到提交到底层的 `SQL` 语句中，不会被自动转换为字符串参数类型、也不会被当做预处理参数。例如：

```go
// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES('id+2','john','123456','now()')
g.Model("user").Data(g.Map{
    "id":          "id+2",
    "passport":    "john",
    "password":    "123456",
    "nickname":    "JohnGuo",
    "create_time": "now()",
}).Insert()
// 执行报错：Error Code: 1136. Column count doesn't match value count at row 1
```

使用 `gdb.Raw` 改造后：

```go
// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(id+2,'john','123456',now())
g.Model("user").Data(g.Map{
    "id":          gdb.Raw("id+2"),
    "passport":    "john",
    "password":    "123456",
    "nickname":    "JohnGuo",
    "create_time": gdb.Raw("now()"),
}).Insert()
```

## 在 `Update` 中使用 `RawSQL`

```go
// UPDATE `user` SET login_count='login_count+1',update_time='now()' WHERE id=1
g.Model("user").Data(g.Map{
    "login_count": "login_count+1",
    "update_time": "now()",
}).Where("id", 1).Update()
// 执行报错：Error Code: 1136. Column count doesn't match value count at row 1
```

使用 `gdb.Raw` 改造后：

```go
// UPDATE `user` SET login_count=login_count+1,update_time=now() WHERE id=1
g.Model("user").Data(g.Map{
    "login_count": gdb.Raw("login_count+1"),
    "update_time": gdb.Raw("now()"),
}).Where("id", 1).Update()
```

## 在 `Select` 中使用 `RawSQL`

时间函数 `now()` 将会被转换为字符串作为 `SQL` 参数执行：

```go
// SELECT * FROM `user` WHERE `created_at`<'now()'
g.Model("user").WhereLT("created_at", "now()").All()
```

使用 `gdb.Raw` 改造后：

```go
// SELECT * FROM `user` WHERE `created_at`<now()
g.Model("user").WhereLT("created_at", gdb.Raw("now()")).All()
```