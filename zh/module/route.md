# 路由

可在模块入口配置中每个管理端的路由。

## 配置方法

路由配置一般放置在 `register` 生命周期中，获取到管理端方法后再使用 `addRouter` 进行添加路由操作。

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const app = context.getApp('admin')

 // add admin route
  app.addRouter([
    {
      path: 'article',
      element: <ArticleList />,
    },
  ])
}
```

路由的配置具体可以参考 [react router v6](https://reactrouter.com/en/main/route/route) 的配置参数。