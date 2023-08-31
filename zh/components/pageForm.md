# 表单页面

表单页面组件对表单组件进行了封装，适用于在较复杂的表单上使用独立的页面来呈现。

```jsx
import { FormPage } from '@duxweb/dux-refine'

<FormPage title="标题">
  {/* 表单项 */}
</FormPage>
```

表单页面的参数与表单组件的参数相同，并且还增加了一些针对页面配置的方法。

## title

- 类型：`React.ReactNode`
- 默认值：`undefined`

页面的标题。

## desc

- 类型：`React.ReactNode`
- 默认值：`undefined`

页面的描述。

## headerRender

- 类型：`React.ReactNode`
- 默认值：`undefined`

自定义位于页面右上角的附加组件。

## back

- 类型：`boolean`
- 默认值：`undefined`

是否显示返回按钮。开启后，可以通过点击该按钮返回上一页。

## reset

- 类型：`boolean`
- 默认值：`undefined`

是否显示重置按钮。开启后，可以通过点击该按钮将表单数据重置为初始值。