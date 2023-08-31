# Resources

Here, a "resource" represents a combination of data and routes, allowing you to associate routes, data, and menus.

## Configuration Approach

Generally, resource configuration should be done within the `register` lifecycle. After obtaining the management methods, you can use `addResources` to add resource configurations.

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const app = context.getApp('admin')

  // Add admin resource
  app.addResources([
    {
      name: 'article',
      list: 'article',
      create: 'article/create',
      edit: 'article/create/{id}',
      meta: {
        label: 'Article Management',
      },
    },
  ])
}
```

The basic configuration parameters are as follows:

- `name`: The identifier of the resource. Each individual management interface should have a unique identifier. This identifier will be automatically appended to the URL in API requests.
- `list`: The route of the list page, corresponding to the frontend route path.
- `create`: The route of the create page, corresponding to the frontend route path.
- `edit`: The route of the edit page, corresponding to the frontend route path. Parameters can be replaced using `{id}`.
- `show`: The route of the show page, corresponding to the frontend route path. Parameters can be replaced using `{id}`.
- `meta`: Metadata parameters for the resource. By default, you should configure the `label` as the label name for the resource. When using multiple languages, this name is often used as a variable for translation.

## Using Resources

In the corresponding route pages, you can use the `useResource` method to access the resource's usage methods. It will obtain the current route information and automatically set the resource as the resource corresponding to the current route when using data request methods.

```jsx
import { useResource } from "@refinedev/core";

const { resource, action, id } = useResource();
```

For specific parameters and methods, please refer to the [useResource](https://refine.dev/docs/api-reference/core/hooks/resource/useResource/#basic-usage) section.