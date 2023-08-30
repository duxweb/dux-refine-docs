# 项目配置

通过脚手架安装后的项目配置位于 `src/config/index.ts` 中，可以在此处配置全局项目参数。

typescript 类型推断可使用以下类型导入：

```js
import { Config } from '@duxweb/dux-refine'
```

## projectId

- 类型: `string`

项目 ID，区分多个项目直接的 ID，目前暂无具体作用。


## apiUrl

- 类型: `string`

后端基础接口地址，如：https://example.test/api

## apiPath

- 类型: `object`

后端接口基础路径配置，最终会合并 `apiUrl` 作为请求地址。

### apiPath.login

- 类型: `string`

登录请求 POST 路径，如果设置为：`login`，那么最终请求地址为 `https://example.test/api/login`


### apiPath.check

- 类型: `string`

登录认证检查 GET 路径。

### apiPath.register

- 类型: `string`
- 默认值: `undefined`

用户注册 POST 路径。

### apiPath.forgotPassword

- 类型: `string`
- 默认值: `undefined`

用户密码找回 POST 路径。

### apiPath.updatePassword

- 类型: `string`
- 默认值: `undefined`

用户密码修改 POST 路径。

### apiPath.updateProfile

- 类型: `string`
- 默认值: `undefined`

个人资料修改 POST 路径，预留路径。

### apiPath.upload

- 类型: `string`
- 默认值: `undefined`

异步文件上传 POST 路径。

## defaultApp

- 类型: `string`

默认管理端标识，脚手架默认配置为 `admin`。


## resourcesPrefix

- 类型: `boolean`

资源路径前缀，开启后会在 `ApiUrl` 路径后自动加入管理端标识，如：`https://example.test/api/admin/login`

## moduleApp

- 类型: `object`

配置不同管理端的基础设置。

```js
{
  moduleApp: {
    'admin' => {
      ...
    }
  }
}
```

### moduleApp.register

- 类型: `boolean`
- 默认值: `undefined`

注册开关状态


### moduleApp.forgotPassword

- 类型: `boolean`
- 默认值: `undefined`

密码找回开关状态


### moduleApp.updatePassword

- 类型: `boolean`
- 默认值: `undefined`

密码修改开关状态

