# 表格

`useForm` 是对 [Refine useForm](https://refine.dev/docs/api-reference/core/hooks/useForm/#basic-usage) 的二次封装，主要用于扩展 TDesign 表单组件的功能。在 Dux Refine 中，无论是表单组件还是表单页面，都可以使用该 hook 进行功能扩展。

:::tip
Dux Refine 的表单组件和表单页面都使用了 `useForm` 进行功能的增强。
:::

```js
import { useForm } from '@duxweb/dux-refine'
import { Form } from 'tdesign-react/esm'

const form = Form.useForm()

const { queryResult, formLoading, onFinish } = useForm({
  form: form,
  action: 'create',
  queryMeta: {
    // 在这里设置查询参数
    params: {},
  },
})

```

----
# 参数传递

`useForm` 的参数继承自 [Refine useForm](https://refine.dev/docs/api-reference/core/hooks/useForm/) 的参数，详情请查看具体文档。以下是新增的方法。

## form

- 类型 `FormInstanceFunctions`
- 默认值: `undefined`

这个参数是 [TDesign Form](https://tdesign.tencent.com/react/components/form) 的表单 hook。

## initData

- 类型 `Record<string, any>`
- 默认值: `undefined`

表单初始化数据，这个参数可以用来在表单创建时设置默认数据，它的优先级高于编辑模式下自动获取的数据。

## initFormat

- 类型 `(data: Record<string, any>) => Record<string, any>`
- 默认值: `undefined`

初始数据格式化回调，在获取到表单数据时会调用这个回调函数，用于对数据进行处理。

## saveFormat

- 类型 `(data: Record<string, any>) => Record<string, any>`
- 默认值: `undefined`

数据保存格式化回调，当表单提交时，会使用这个回调函数对数据进行格式化。

----
# 返回数据

返回的数据是 [Refine useForm](https://refine.dev/docs/api-reference/core/hooks/useForm/#basic-usage) 的返回值，以下是新增的方法。

## formData

- 类型 `(data: Record<string, any>) => Record<string, any>`
- 默认值: `{}`

这个方法返回格式化后的表单初始化数据。

## onSubmit 

- 类型 `(e: SubmitContext) => void`

这个方法是表单提交的回调函数，可以传递给 TDesign Form 组件的 `onSubmit` 参数。

----
# 异步验证

表单的异步验证可以通过返回带有 422 状态码的响应，响应数据中写入验证结果来实现。

```json
{
  "code": 422,
  "message": "表单验证失败",
  "data": [
    {
      "title": [
        "标题不能为空"
      ]
    }
  ]
}
```
