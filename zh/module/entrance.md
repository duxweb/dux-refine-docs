# 配置

每个位于 `src/pages` 目录下的子目录都代表一个模块。模块内的 `index.{js,ts,jsx,tsx}` 文件被视为入口配置文件，该文件必须默认导出内容，并继承 `appConfig` 类型的配置。

```js
import { appConfig } from '@duxweb/dux-refine'
```

使用这些入口文件，你可以轻松地配置多个管理端的入口、路由、资源和多语言等。入口文件的加载分为三个生命周期，按顺序执行：`init`、`register`、`run`。

:::tip
不同模块之间可以通过生命周期方法相互注册后续操作。例如，在 `init` 方法中注册一个名为 "admin" 的管理端，其他模块可以在 `register` 方法中调用 "admin" 管理端的路由、资源注册等方法。
:::

## 模块配置

基本配置如下，每个配置均有一个 `context` 参数，可调用内置的处理方法。

```js
import { appConfig } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  // 初始化处理
}

const register = (context: appContext) => {
  // 注册相关内容
}

const run = (context: appContext) => {
  // 项目运行阶段处理
}

const config: appConfig = {
  init: init,
  register: register,
  run: run,
}

export default config
```

## 初始化

初始化阶段通常用于注册管理端、添加语言包等操作，可以首先完成这些任务以便后续处理。

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  context.createApp('admin', createApp())
}
```

## 注册

注册阶段可以调用初始化阶段完成后的方法，例如注册管理端的路由、资源等。

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const admin = context.getApp('admin')

  // 添加管理端路由
  admin.addRouter([
    {
      path: 'article',
      element: <ArticleList />,
    },
  ])

  // 添加资源
  admin.addResources([
    {
      name: 'article'
    },
  ])
}
```

## 运行

运行阶段可以处理注册阶段后的事件，供开发者根据需要自行配置。