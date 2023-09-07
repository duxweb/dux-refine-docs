# 菜单

To configure resources as sidebar menus, you need to define the `meta` parameter in the resources. The system supports multi-level parent-child relationships, with a maximum of three levels.

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
        sort: 0
      },
    },
    {
      name: 'article',
      list: 'article',
      meta: {
        label: 'Article Management',
        parent: 'content',
        sort: 0
      },
    },
  ])
}
```

## Menu Parameters

A menu item will only be considered a clickable menu if the resource defines a `list` route. Otherwise, it will be considered a parent menu. In the `meta` parameter, you can configure the following properties:

- `label`: The label for the resource, which will be displayed in the menu and breadcrumb navigation.
- `parent`: The parent resource identifier, used to define parent-child relationships. It corresponds to the `name` parameter of the parent resource.
- `icon`: Menu icon, supports UnoCSS icon library.
- `sort`: Menu order, sorting in ascending order from small to large.

## Menu Translation

The system will automatically associate the corresponding translation with the `label` of the resource. By default, the following translation variable is used for display:

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

This way, the menu will be displayed as "Article List".