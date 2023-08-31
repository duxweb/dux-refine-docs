# Admin Portal

You can create multiple admin portals based on your project's needs.

## Creating a Portal

In the `init` method of module configuration, use the `context.createApp()` method to create an admin portal. This method takes two parameters:

- A string `name`
  
  This serves as an identifier for the admin portal. The URL will use this identifier as the entry point. Additionally, if you have enabled resource prefixes, the admin portal identifier will automatically be added to the API URL.

- An `app` object

  This contains the configuration for the admin portal. You can create a basic configuration using the `createApp` function.

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  // Create the 'admin' portal
  context.createApp('admin', createApp())
}
```

Once created, you can access the admin portal using the following URL:

```http
http://example.test/#/admin
```

## Configuring the Portal

In other lifecycle methods, you can use the `context.getApp()` function to retrieve the configuration methods for that admin portal.

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')
}
```

### User Menu

Use the `setUserMenu` method to customize the user menu. The method takes the following parameters:

- `label`: The display name for the button.
- `icon`: The icon, supporting only Unocss CSS icons.
- `route`: The route to navigate to, within the current admin portal.

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')

  admin.setUserMenu([
    {
      label: 'Settings',
      icon: 'i-tabler:config',
      route: 'index',  // Navigate to /admin/index
    },
  ])
}
```

### Bottom Tab Bar

Use the `setTabbar` method to configure the bottom tab bar for mobile. The parameters are the same as for the user menu:

- `label`: The display name for the button.
- `icon`: The icon, supporting only Unocss CSS icons.
- `route`: The route to navigate to, within the current admin portal.

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')

  admin.setTabbar([
    {
      label: 'Dashboard',
      icon: 'i-tabler:home',
      route: 'index',  // Navigate to /admin/index
    }
  ])
}
```