# 路由

你可以在模块的入口配置中为每个管理端配置路由。

## 配置方法

一般情况下，路由的配置应该放在 `register` 生命周期中。在获取到管理端方法之后，你可以使用 `addRouter` 方法来添加路由配置。

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const app = context.getApp('admin')

  // 添加 admin 管理端的路由
  app.addRouter([
    {
      path: 'article',
      element: <ArticleList />,
    },
  ])
}
```

具体的路由配置参数可以参考 [React Router v6](https://reactrouter.com/en/main/route/route) 的文档。