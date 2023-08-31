# 表单

表单组件使用 [TDesign Form](https://tdesign.tencent.com/react/components/form) 做二次封装，支持 TDesign 组件参数的同时使用 hook 对组件进行扩展使其可以支持 Refine 数据请求，使用方法如下：


```js
import { Form } from '@duxweb/dux-refine'

<Form>
  // Form Items
</Form>
```

表单提交的资源名会自动根据父页面的路由进行自动识别，当然也可以自行配置，可在子组件中使用 TDesign 的表单元素。

:::tip
表单组件中可以使用 TDesign 表单中的所有子组件，与 `<Form>...<Form>` 组件保持一致。
:::


```js
import { Form as DuxForm, FormModal } from '@duxweb/dux-refine'
import { Form, Input, Radio, Checkbox, Button, Switch, MessagePlugin, DatePicker, Tooltip, Space } from 'tdesign-react/esm';

<DuxForm>
  <Form.FormItem
    initialData="Dux Refine"
    label="Title"
    name="title"
  >
    <Input />
  </Form.FormItem>
  ...
</DuxForm>
```

## children

- 类型 `React.ReactNode`
- 默认值: `undefined`

表单子元素，需要使用 `Form.FormItem` 仅需布局。

## resource

- 类型 `string`
- 默认值: `undefined`

资源标识，用来绑定数据资源，默认会自动根据路由识别。

## action

- 类型 `"create" | "edit" | "clone"`
- 默认值: `create`

表单动作，用于创建、编辑或复制数据。

## id

- 类型 `string | number`
- 默认值: `undefined`

表单主键 id，编辑或复制时需要此 id 查询表单数据。

## params

- 类型 `[k: string]: any`
- 默认值: `undefined`

查询参数，获取表单数据时候可传递附加参数 GET 给 Api。

## initFormat

- 类型 `(data: Record<string, any>) => Record<string, any>`
- 默认值: `undefined`

初始数据格式化回调，获取到表单数据时调用此回调函数来针对组件处理数据。

## saveFormat

- 类型 `(data: Record<string, any>) => Record<string, any>`
- 默认值: `undefined`

数据保存回调，表单在提交时使用该回调将数据进行格式化。

## onSubmit

- 类型 `(e: SubmitContext) => void`
- 默认值: `undefined`

提交回调，表单在提交后触发该回调函数。


## useFormProps

- 类型 `useFormProps`
- 默认值: `undefined`

表单 Hook 参数透传，该参数为 [Refine useForm](https://refine.dev/docs/api-reference/core/hooks/useForm/) 的封装函数，请参考该文档参数。

```
import type { FormProps } from 'tdesign-react/esm'
```

## formProps

- 类型 `FormProps`
- 默认值: `undefined`

TDesign 表单参数，请参考 [TDesign Form](https://tdesign.tencent.com/react/components/form)  的文档。

## onData

- 类型 `(form: UseFormReturnType) => void`
- 默认值: `undefined`

数据回调，当表单数据发生变化时，可以通过该回调使用 `useForm` 返回的方法。

## initData
- 类型 `Record<string, any>`
- 默认值: `undefined`

表单初始化数据，该参数优先与编辑时自动获取表单内容。