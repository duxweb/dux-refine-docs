# Project Configuration

After installing through the scaffolding, you can find the project's configuration in the `src/config/index.ts` file. Here, you can configure global project parameters.

You can import TypeScript type inference as follows:

```typescript
import { Config } from '@duxweb/dux-refine'
```

## projectId

- Type: `string`

Project ID used as a unique identifier to distinguish between multiple projects. Currently, it doesn't have a specific function.

## apiUrl

- Type: `string`

The base backend API address, for example: https://example.test/api

## apiPath

- Type: `object`

Configuration for the base paths of backend APIs. It will be merged with `apiUrl` to build the final request address.

### apiPath.login

- Type: `string`

The POST path for login requests, for example, if it's `login`, the final request address will be `https://example.test/api/login`.

### apiPath.check

- Type: `string`

The GET path for login authentication checks.

### apiPath.register

- Type: `string`
- Default: `undefined`

The POST path for user registration.

### apiPath.forgotPassword

- Type: `string`
- Default: `undefined`

The POST path for user password retrieval.

### apiPath.updatePassword

- Type: `string`
- Default: `undefined`

The POST path for user password modification.

### apiPath.updateProfile

- Type: `string`
- Default: `undefined`

The POST path for modifying personal profile information. This path is reserved.

### apiPath.upload

- Type: `string`
- Default: `undefined`

The POST path for asynchronous file uploads.

## defaultApp

- Type: `string`

The default identifier for the admin panel. The scaffolding default configuration is `admin`.

## resourcesPrefix

- Type: `boolean`

Resource path prefix. When enabled, it will automatically add the admin panel identifier after the `apiUrl` path, for example: `https://example.test/api/admin/login`.

## moduleApp

- Type: `object`

Configure basic settings for different admin panels.

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

- Type: `boolean`
- Default: `undefined`

Registration toggle state.

### moduleApp.forgotPassword

- Type: `boolean`
- Default: `undefined`

Password retrieval toggle state.

### moduleApp.updatePassword

- Type: `boolean`
- Default: `undefined`

Password modification toggle state.

## sideType

- Type: `app|collapse`
- Default: `collapse`

Sidebar menu type, with options for application style and three-level collapse style. The application style is currently under optimization and cannot be specified at the moment.