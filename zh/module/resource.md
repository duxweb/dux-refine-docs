# 资源

在这里，资源表示数据和路由的结合体，通过资源可以将路由、数据和菜单进行关联。

## 配置方法

一般来说，资源的配置应放在 `register` 生命周期中。在获取到管理端方法之后，你可以使用 `addResources` 来添加资源配置。

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const app = context.getApp('admin')

  // 添加 admin 资源
  app.addResources([
    {
      name: 'article',
      list: 'article',
      create: 'article/create',
      edit: 'article/create/{id}',
      meta: {
        label: '文章管理',
      },
    },
  ])
}
```

基本的配置参数如下：

- `name`：资源的标识符，每个单一管理端需要有唯一的标识符。API 请求会自动将此标识符拼接到 URL 的一部分。
- `list`：列表页面的路由，对应前端的路由路径。
- `create`：创建页面的路由，对应前端的路由路径。
- `edit`：编辑页面的路由，对应前端的路由路径，可以通过 `{id}` 进行参数替换。
- `show`：展示页面的路由，对应前端的路由路径，可以通过 `{id}` 进行参数替换。
- `meta`：资源的元数据参数，默认需要配置 `label` 作为资源的标签名。在使用多语言时，该名称通常用作多语言翻译的变量。

## 使用资源

在对应路由的页面中，你可以使用 `useResource` 方法来获取资源的使用方法。它会获取当前的路由信息，并在使用数据请求方法时默认将资源设置为当前路由对应的资源。

```jsx
import { useResource } from "@refinedev/core";

const { resource, action, id } = useResource();
```

有关具体的参数和方法，请参考 [useResource](https://refine.dev/docs/api-reference/core/hooks/resource/useResource/#basic-usage) 部分。