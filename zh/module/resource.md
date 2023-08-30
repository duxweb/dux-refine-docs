# 资源

在这里资源代表数据与路由的集合，通过资源可以将路由、数据与菜单做一系列关联。


## 配置方法

资源配置一般放置在 `register` 生命周期中，获取到管理端方法后再使用 `addRouter` 进行添加资源操作。

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const app = context.getApp('admin')

 // add admin resources
  app.addResources([
    {
      name: 'article',
      list: 'article',
      create: 'article/create',
      edit: 'article/create/{id}',
      meta: {
        label: 'article',
      },
    },
  ])
}
```

基本配置参数如下：

- `name` 资源标识，单个管理端唯一标识，Api 请求会自动拼接该标识为 Url 的一部分。
- `list` 列表页面路由，前端路由对应路径
- `create` 创建页面路由，前端路由对应路径
- `edit` 编辑页路由，前端路由对应路径
- `show` 展示页路由，前端路由对应路径
- `meta` 资源参数，默认需配置 `label` 为资源标签名，使用多语言时该名称一般用于多语言的调用变量。

## 资源使用

在对应路由的页面中使用 `useResource` 方法可获取资源的使用方法，获取到当前的路由信息，同时使用`数据请求`方法时默认资源为当前路由对应的资源。

```jsx
import { useResource } from "@refinedev/core";
const { resource, action, id} = useResource()
```

具体参数方法请参考 [useResource](https://refine.dev/docs/api-reference/core/hooks/resource/useResource/#basic-usage)