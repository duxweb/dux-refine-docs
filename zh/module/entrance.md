# 配置

`src/pages` 下每个目录为一个模块，模块内的 `index.{js,ts,jsx,tsx}` 为入口配置文件，入口配置文件需默认导出，并且继承 `appConfig` 的类型配置。

```js
import { appConfig } from '@duxweb/dux-refine'
```

使用入口文件可以轻松的配置多个管理端的入口、路由、资源、多语言等，入口文件的加载分为三个生命周期，分别为 `init`、`register`、`run` 顺序执行。

:::tip
多个模块之间可以通过生命周期互相注册后续方法，例如：先在 init 方法中注册一个名称为 admin 的管理端，其他模块则可以在 register 方法中调用 admin 管理端的路由、资源注册等方法。
:::

## 模块配置

基本配置如下，每个配置均有 `context` 参数可以调用内置的处理方法。

```js
import { appConfig } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  // Initialization Processing
}

const register = (context: appContext) => {
  // Affiliate Registration
}

const run = (context: appContext) => {
  // Project operation
}

const config: appConfig = {
  init: init,
  register: register,
  run: run,
}

export default config
```

## 初始化

初始化阶段一般用于管理端的注册，语言包添加等操作，可以最先完成这些事项以便后面。


```js
import { appContext, createApp } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  context.createApp('admin', createApp())
}
```

## 注册

注册阶段可调用初始化阶段完成后的方法，比如注册管理端的路由、资源等。


```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const admin = context.getApp('admin')

 // add admin route
  app.addRouter([
    {
      path: 'article',
      element: <ArticleList />,
    },
  ])

  app.addResources([
    {
      name: 'article'
    },
  ])
}
```

## 运行

运行前阶段可以处理注册阶段后的事件，供开发者根据需要自行配置。
