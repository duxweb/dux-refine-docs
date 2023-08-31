# 页面表单组件

页面表单在表单组件上进行封装，针对较复杂的表单使用的独立页面表单。

```js
import { FormPage } from '@duxweb/dux-refine'

<FormPage title="Title">
  // Form Items
</FormPage>
```

页面表单参数与表单组件参数一致，并增加了一些针对页面配置的方法。

## title

- 类型 `React.ReactNode`
- 默认值: `undefined`

页面标题。


## desc

- 类型 `React.ReactNode`
- 默认值: `undefined`

页面描述。


## headerRender

- 类型 `React.ReactNode`
- 默认值: `undefined`

自定义右上角的附加组件。

## back

- 类型 `boolean`
- 默认值: `undefined`

返回按钮，开启后可通过该按钮返回上一页。

## rest

- 类型 `boolean`
- 默认值: `undefined`

重置按钮，开启后可通过该按钮重置表单数据为初始值。