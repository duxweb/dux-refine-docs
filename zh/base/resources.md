# 数据请求

数据请求使用 refine 的数据资源方法做处理，配置好后一个数据资源即可使用相关的请求方法，具体配置请查看模块 - 资源配置文档。

```js
app.addResources([
  {
    name: 'article'
  }
])
```

:::tip
Dux Refine 已预设一套 Rest Api 规则的 [Data Provider](https://refine.dev/docs/api-reference/core/providers/data-provider/)，请求时会自动拼接资源名与具体操作。
:::


## 列表数据

使用以下 hook 可请求列表数据，如需分页则分页的 Url 参数为 Page。

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

使用以下 hook 可请求列表数据，如需分页则分页的 Url 参数为 Page。

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

使用以下 hook 可创建一条数据。

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

以上为 Refine 的常用方法展示，更多方法请[查看文档](https://refine.dev/docs/api-reference/core/hooks/data/useApiUrl)。