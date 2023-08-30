# 菜单

在资源中定义 `meta` 参数可将资源设置为侧边栏菜单，同时支持最高三级的上下级关系。


## 菜单配置

菜单需要在添加资源时进行配置，以下示例为定义2级菜单。

```js
import { appContext, createApp } from '@duxweb/dux-refine'

const register = (context: appContext) => {
  const app = context.getApp('admin')

 // add admin resources
  app.addResources([
    {
      name: 'content',
      meta: {
        label: 'content', 
        icon: 'i-tabler:book',
      },
    },
    {
      name: 'article',
      list: 'article',
      meta: {
        label: 'article',
        parent: 'article-manage',
      },
    },
  ])
}
```

##  菜单参数

菜单中只有资源定义 `list` 路由后才可进行菜单跳转，否则视为上级菜单，`meta`中具体参数如下：

- `label` 资源标签名，菜单与面包屑导航中会使用该名称。
- `parent` 上级资源标识，定义上下级关系，对应上级资源的 `name` 参数
- `icon` 菜单图标，仅1、2级菜单使用，支持 UnoCSS 图标库。



## 菜单翻译

路径导航、菜单中会自动使用 `label` 关联对应的多语言翻译，默认使用如下翻译变量的内容作为显示：

```
{label}.name
```

语言包中需要的配置如下：

```json
// en
{
  "article": {
    "name": "Article List",
  }
}
```