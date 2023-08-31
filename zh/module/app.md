# 管理端

您可以根据项目需求创建多个管理端入口来使用。

## 创建入口

在模块配置的 `init` 方法中，使用 `context.createApp()` 方法来创建一个管理端。该方法接收两个参数：

- `name` 字符串
  
  管理端标识，URL 将使用该标识作为入口标识。同时，如果开启了资源前缀，管理端标识会自动添加到 API URL 中。

- `app` 对象

  管理端配置，使用 `createApp` 函数创建一个基础的配置数据。


```js
import { appContext, createApp } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  // 创建 admin 管理端
  context.createApp('admin', createApp())
}
```

创建完成后，可以通过以下 URL 访问该管理端：

```http
http://example.test/#/admin
```

## 配置管理端

在其他生命周期中，可以使用 `context.getApp()` 函数来获取该管理端的配置方法。

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')
}
```

### 用户菜单

使用 `setUserMenu` 方法来自定义用户菜单，方法参数如下：

- `label` 标签名，按钮显示名称。
- `icon` 图标，仅支持 Unocss 的 CSS 图标。
- `route` 跳转路由，跳转到当前管理端的子路由。

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')

  admin.setUserMenu([
    {
      label: '设置',
      icon: 'i-tabler:config',
      route: 'index',  // 跳转到 /admin/index
    },
  ])
}
```

### 底部工具栏

使用 `setTabbar` 方法来配置移动端的底部工具栏，方法参数与用户菜单一致：

- `label` 标签名，按钮显示名称。
- `icon` 图标，仅支持 Unocss 的 CSS 图标。
- `route` 跳转路由，跳转到当前管理端的子路由。

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')

  admin.setTabbar([
    {
      label: '仪表盘',
      icon: 'i-tabler:home',
      route: 'index',  // 跳转到 /admin/index
    }
  ])
}
```
