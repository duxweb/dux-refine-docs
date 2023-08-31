# Configuration

Each subdirectory located under the `src/pages` directory represents a module. The `index.{js,ts,jsx,tsx}` file within a module is treated as the entry configuration file, and this file must export its content and inherit the configuration type `appConfig`.

```js
import { appConfig } from '@duxweb/dux-refine'
```

Using these entry files, you can easily configure multiple admin portals' entry points, routes, resources, and multilingual settings. The loading of entry files is divided into three lifecycle stages executed in order: `init`, `register`, and `run`.

:::tip
Different modules can register subsequent operations with each other using lifecycle methods. For example, you can register an admin portal named "admin" in the `init` method, and other modules can call the "admin" portal's methods for registering routes, resources, etc. in their `register` methods.
:::

## Module Configuration

Basic configuration is as follows, with each configuration having a `context` parameter that can call built-in handling methods.

```js
import { appConfig } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  // Initialization processing
}

const register = (context: appContext) => {
  // Register related content
}

const run = (context: appContext) => {
  // Project runtime phase processing
}

const config: appConfig = {
  init: init,
  register: register,
  run: run,
}

export default config
```

## Initialization

The initialization stage is typically used for tasks such as registering admin portals and adding language packs. You can complete these tasks first for subsequent processing.

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const init = (context: appContext) => {
  context.createApp('admin', createApp())
}
```

## Registration

The registration stage can call methods completed in the initialization stage. For example, you can register admin portal routes and resources.

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const admin = context.getApp('admin')

  // Add admin portal routes
  admin.addRouter([
    {
      path: 'article',
      element: <ArticleList />,
    },
  ])

  // Add resources
  admin.addResources([
    {
      name: 'article'
    },
  ])
}
```

## Runtime

The runtime stage can handle events that come after the registration stage. You can configure this according to your needs.