# Project Configuration

After installing through the scaffold, you can find the project's configuration in the `src/config/index.ts` file. You can configure global project parameters here.

TypeScript type inference can be imported as follows:

```typescript
import { Config } from '@duxweb/dux-refine'
```

## projectId

- Type: `string`

Project ID, used as a unique identifier to distinguish between multiple projects. Currently, it doesn't have a specific purpose.

## apiUrl

- Type: `string`

Backend base API URL, for example: https://example.test/api

## apiPath

- Type: `object`

Configuration for backend API paths. These paths will be merged with `apiUrl` to construct the final request URLs.

### apiPath.login

- Type: `string`

POST path for login requests, for example: `login`, resulting in a request URL like `https://example.test/api/login`

### apiPath.check

- Type: `string`

GET path for login authentication checks.

### apiPath.register

- Type: `string`
- Default: `undefined`

POST path for user registration.

### apiPath.forgotPassword

- Type: `string`
- Default: `undefined`

POST path for user password recovery.

### apiPath.updatePassword

- Type: `string`
- Default: `undefined`

POST path for user password updates.

### apiPath.updateProfile

- Type: `string`
- Default: `undefined`

POST path for updating user profiles, reserved for future use.

### apiPath.upload

- Type: `string`
- Default: `undefined`

POST path for asynchronous file uploads.

## defaultApp

- Type: `string`

Default admin panel identifier. The scaffold default configuration is `admin`.

## resourcesPrefix

- Type: `boolean`

Resource path prefix. When enabled, the admin panel identifier will be automatically added after the `apiUrl` path, like: `https://example.test/api/admin/login`

## moduleApp

- Type: `object`

Configurations for different admin panels.

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

Registration switch status.

### moduleApp.forgotPassword

- Type: `boolean`
- Default: `undefined`

Password recovery switch status.

### moduleApp.updatePassword

- Type: `boolean`
- Default: `undefined`

Password update switch status.


## sideType

- 类型: `app|collapse`

Sidebar menu types, split-column applied and three-level collapsed.