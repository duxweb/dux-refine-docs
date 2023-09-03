# 项目配置

在通过脚手架安装后，您可以在 `src/config/index.ts` 文件中找到项目的配置，您可以在这里配置全局的项目参数。

TypeScript 类型推断可使用以下方式导入：

```typescript
import { Config } from '@duxweb/dux-refine'
```

## projectId

- 类型: `string`

项目 ID，用于区分多个项目之间的唯一标识，目前暂无具体作用。

## apiUrl

- 类型: `string`

后端基础接口地址，例如：https://example.test/api

## apiPath

- 类型: `object`

后端接口基础路径配置，将会与 `apiUrl` 合并以构建最终的请求地址。

### apiPath.login

- 类型: `string`

登录请求的 POST 路径，例如：`login`，则最终请求地址为 `https://example.test/api/login`

### apiPath.check

- 类型: `string`

登录认证检查的 GET 路径。

### apiPath.register

- 类型: `string`
- 默认值: `undefined`

用户注册的 POST 路径。

### apiPath.forgotPassword

- 类型: `string`
- 默认值: `undefined`

用户密码找回的 POST 路径。

### apiPath.updatePassword

- 类型: `string`
- 默认值: `undefined`

用户密码修改的 POST 路径。

### apiPath.updateProfile

- 类型: `string`
- 默认值: `undefined`

个人资料修改的 POST 路径，此路径预留。

### apiPath.upload

- 类型: `string`
- 默认值: `undefined`

异步文件上传的 POST 路径。

## defaultApp

- 类型: `string`

默认的管理端标识，脚手架默认配置为 `admin`。

## resourcesPrefix

- 类型: `boolean`

资源路径前缀，开启后将在 `apiUrl` 路径后自动添加管理端标识，例如：`https://example.test/api/admin/login`

## moduleApp

- 类型: `object`

配置不同管理端的基础设置。

```typescript
{
  moduleApp: {
    'admin': {
      // ...
    }
  }
}
```

### moduleApp.register

- 类型: `boolean`
- 默认值: `undefined`

注册开关状态。

### moduleApp.forgotPassword

- 类型: `boolean`
- 默认值: `undefined`

密码找回开关状态。

### moduleApp.updatePassword

- 类型: `boolean`
- 默认值: `undefined`

密码修改开关状态。

## sideType

- 类型: `app|collapse`

侧边栏菜单类型，分栏应用式和三级折叠式。