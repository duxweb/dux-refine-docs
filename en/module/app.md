# Admin Panel

You can create multiple admin panel entry points based on the project's requirements.

## Creating an Entry Point

In the module configuration's `init` method, use the `context.createApp()` method to create an admin panel. This method takes two parameters:

- `name` (string)
  
  The admin panel identifier, which will be used as the entry point's identifier in the URL. Additionally, if resource prefixing is enabled, the admin panel identifier will be automatically added to the API URL.

- `app` (object)

  Admin panel configuration, created using the `createApp` function with basic configuration data.


```js
import { appContext, createApp } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  // Create the 'admin' admin panel
  context.createApp('admin', createApp())
}
```

Once created, you can access this admin panel using the following URL:

```http
http://example.test/#/admin
```

## Configuring the Admin Panel

In other lifecycle stages, you can use the `context.getApp()` function to access the configuration of this admin panel.

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')
}
```

### User Menu

Use the `setUserMenu` method to customize the user menu. The method takes the following parameters:

- `label`: The label, which is the display name of the button.
- `icon`: The icon, which only supports CSS icons from Unocss.
- `route`: The route to navigate to, which is a child route of the current admin panel.

```js
const register = (context: appContext) => {
  const admin = context.getApp('admin')

  admin.setUserMenu([
    {
      label: 'Settings',
      icon: 'i-tabler:config',
      route: 'index',  // Navigates to /admin/index
    },
  ])
}
```