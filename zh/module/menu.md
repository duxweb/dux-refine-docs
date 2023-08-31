# 菜单

要将资源配置为侧边栏菜单，需要在资源中定义 `meta` 参数。同时，系统支持多级的上下级关系，最多支持三级关系。

## 菜单配置

菜单的配置需要在添加资源时进行。下面是一个定义了二级菜单的示例：

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const app = context.getApp('admin')

  // 添加 admin 资源
  app.addResources([
    {
      name: 'content',
      meta: {
        label: '内容管理', 
        icon: 'i-tabler:book',
      },
    },
    {
      name: 'article',
      list: 'article',
      meta: {
        label: '文章管理',
        parent: 'content',
      },
    },
  ])
}
``}

## 菜单参数

只有在资源定义了 `list` 路由后，菜单项才会被视为可点击的菜单，否则会被视为上级菜单。在 `meta` 参数中，可以配置以下属性：

- `label`：资源的标签名，会在菜单和面包屑导航中显示。
- `parent`：上级资源标识，用于定义上下级关系，对应上级资源的 `name` 参数。
- `icon`：菜单图标，只会在一级和二级菜单中显示，支持 UnoCSS 图标库。

## 菜单翻译

系统会根据资源的 `label` 自动关联对应的多语言翻译。默认情况下，会使用以下的翻译变量作为显示：

```
{label}.name
```

因此，在语言包中需要进行如下配置：

```json
// en
{
  "article": {
    "name": "文章列表"
  }
}
```

这样，菜单就会显示为 "文章列表"。