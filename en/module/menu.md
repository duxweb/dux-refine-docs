# Menu Configuration

To set up resources as sidebar menu items, you need to define the `meta` parameter within the resource configuration. The system supports multi-level hierarchical relationships, with a maximum depth of three levels.

## Menu Configuration

Menu configuration should be done when adding resources. Here's an example that defines a second-level menu:

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const app = context.getApp('admin')

  // Add admin resources
  app.addResources([
    {
      name: 'content',
      meta: {
        label: 'Content Management', 
        icon: 'i-tabler:book',
      },
    },
    {
      name: 'article',
      list: 'article',
      meta: {
        label: 'Article Management',
        parent: 'content',
      },
    },
  ])
}
```

## Menu Parameters

Only when the resource has a `list` route defined, the menu item will be considered as a clickable menu item; otherwise, it will be treated as a parent menu. Within the `meta` parameter, you can configure the following attributes:

- `label`: The label for the resource, which will be displayed in the menu and breadcrumb navigation.
- `parent`: The identifier of the parent resource, used to define the parent-child relationship. It corresponds to the `name` parameter of the parent resource.
- `icon`: The menu icon, which will be displayed in the first and second-level menus. Supports UnoCSS icon library.

## Menu Translation

The system automatically associates the corresponding multilingual translation with the `label` of the resource. By default, it uses the following translation variable for display:

```
{label}.name
```

Therefore, you need to configure it in the language pack as follows:

```json
// en
{
  "article": {
    "name": "Article List"
  }
}
```

This way, the menu item will be displayed as "Article List".