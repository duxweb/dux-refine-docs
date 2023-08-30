# 管理端

可根据项目需要创建多个管理端入口进行使用。

## 创建入口

在模块配置的 `init` 方法中使用 `context.createApp()` 方法来创建一个管理端，该方法接收两个参数：

- `name` 字符串
  
  管理端标识，url 将该标识作为入口标识，同时开启资源前缀后会自动在 Api Url 中加入该标识。

- `app` object

  管理端配置，使用 `createApp` 函数来创建一个基础的配置数据。


```js
import { appContext, createApp } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  // Create admin side
  context.createApp('admin', createApp())
}

```

创建后可通过以下 Url 访问该管理端：

```http
http://example.test/#/admin
```

## 配置管理端

在其他生命周期可以通过 `context.getApp()` 函数来获取该管理端的配置方法。

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')
}
```

### 用户菜单

使用 `setUserMenu` 方法来自定义用户菜单，参数配置如下：

- `label` 标签名，按钮展示名称。
- `icon` 图标，仅支持 unocss 的 css 图标。
- `route` 跳转路由，跳转到当前管理端的子路由。

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')

  admin.setUserMenu([
    {
      label: 'setting',
      icon: 'i-tabler:config',
      route: 'index',  // Jump to /admin/index
    },
  ])
  
}

```

### 底部工具栏

使用 `setTabar` 方法来配置移动端的底部工具栏，参数与用户菜单一致：

- `label` 标签名，按钮展示名称。
- `icon` 图标，仅支持 unocss 的 css 图标。
- `route` 跳转路由，跳转到当前管理端的子路由。


```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')

  admin.setTabar([
    {
      label: 'dashboard',
      icon: 'i-tabler:home',
      route: 'index',  // Jump to /admin/index
    }
  ])
}

```