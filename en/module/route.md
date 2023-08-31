# Routing

You can configure routes for each management interface in the module's entry configuration.

## Configuration Approach

Generally, route configuration should be done within the `register` lifecycle. After obtaining the management methods, you can use the `addRouter` method to add route configurations.

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const app = context.getApp('admin')

  // Add routes for the admin management interface
  app.addRouter([
    {
      path: 'article',
      element: <ArticleList />,
    },
  ])
}
```

For specific route configuration parameters, you can refer to the [React Router v6 documentation](https://reactrouter.com/en/main/route/route).