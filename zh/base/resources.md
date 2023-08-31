# 数据请求

数据请求使用 Refine 的数据资源方法进行处理。在配置好后，一个数据资源即可使用相关的请求方法。详细的配置请参阅 "模块 - 资源配置" 文档。

```js
app.addResources([
  {
    name: 'article'
  }
])
```

:::tip
Dux Refine 已经预设了一套符合 REST API 规范的 [数据提供者](https://refine.dev/docs/api-reference/core/providers/data-provider/)，在请求时会自动构建资源名称与具体操作。
:::

## 列表数据

使用以下钩子函数可以请求列表数据。如果需要分页，分页的 URL 参数为 `Page`。

```js
import { useList } from "@refinedev/core"

const { data, isLoading, isError } = useList({
    resource: "article"
});
```

请求规则

```
GET {apiUrl}/{resource}
```

## 单条数据

使用以下钩子函数可以请求单条数据。

```js
import { useOne } from "@refinedev/core"

const { data, isLoading, isError } = useOne({
    resource: "article",
    id: 1
});
```

请求规则

```
GET {apiUrl}/{resource}/{id}
```

## 创建数据

使用以下钩子函数可以创建一条数据。

```js
import { useCreate } from "@refinedev/core"

const { mutate } = useCreate();

mutate({
    resource: "article",
    values: {
        title: "Title"
    },
});
```

请求规则

```
POST {apiUrl}/{resource}
```

## 更新数据

使用以下钩子函数可以更新一条数据。

```js
import { useUpdate } from "@refinedev/core"

const { mutate } = useUpdate();

mutate({
    resource: "article",
    values: {
        title: "Title"
    },
    id: 1,
});
```

请求规则

```
POST {apiUrl}/{resource}/{id}
```

## 删除数据

使用以下钩子函数可以删除一条数据。

```js
import { useDelete } from "@refinedev/core"

const { mutate } = useDelete();

mutate({
    resource: "article",
    id: 1,
});
```

请求规则

```
DELETE {apiUrl}/{resource}/{id}
```

## 更多方法

以上是 Refine 常用的方法示例，还有更多方法可以[查阅文档](https://refine.dev/docs/api-reference/core/hooks/data/useApiUrl)。