# 表单

表单组件使用 [TDesign Form](https://tdesign.tencent.com/react/components/form) 进行二次封装，支持 TDesign 组件参数，同时通过钩子对组件进行扩展，以支持 Refine 数据请求。使用方法如下：

```jsx
import { Form } from '@duxweb/dux-refine'

<Form>
  {/* 表单项 */}
</Form>
```

表单提交的资源名会自动根据父页面的路由进行自动识别，当然也可以自行配置。在子组件中，你可以使用 TDesign 的表单元素。

:::tip
表单组件中可以使用 TDesign 表单中的所有子组件，与 `<Form>...</Form>` 组件的使用方式一致。
:::

```jsx
import { Form as DuxForm } from '@duxweb/dux-refine'
import { Form, Input } from 'tdesign-react';

<DuxForm>
  <Form.Item
    initialValue="Dux Refine"
    label="标题"
    name="title"
  >
    <Input />
  </Form.Item>
  {/* 其他表单项 */}
</DuxForm>
```

## children

- 类型：`React.ReactNode`
- 默认值：`undefined`

表单的子元素，如果只需要进行布局，使用 `Form.Item` 就足够了。

## resource

- 类型：`string`
- 默认值：`undefined`

资源的标识符，用于绑定数据资源，默认会根据路由进行识别。

## action

- 类型：`"create" | "edit" | "clone"`
- 默认值：`create`

表单的动作，用于创建、编辑或复制数据。

## id

- 类型：`string | number`
- 默认值：`undefined`

表单的主键 id，编辑或复制数据时需要此 id 来查询表单数据。

## params

- 类型：`[k: string]: any`
- 默认值：`undefined`

查询参数，用于在获取表单数据时传递附加的 GET 参数给 API。

## initData

- 类型：`Record<string, any>`
- 默认值：`undefined`

表单的初始化数据，该参数的优先级高于编辑时自动获取的表单内容。

## initFormat

- 类型：`(data: Record<string, any>) => Record<string, any>`
- 默认值：`undefined`

初始化数据格式化回调，获取到表单数据时，会调用这个回调函数来对组件的数据进行处理。

## saveFormat

- 类型：`(data: Record<string, any>) => Record<string, any>`
- 默认值：`undefined`

数据保存格式化回调，在表单提交时使用这个回调来格式化数据。

## onSubmit

- 类型：`(e: SubmitContext) => void`
- 默认值：`undefined`

提交回调，在表单提交后触发这个回调函数。

## useFormProps

- 类型：`useFormProps`
- 默认值：`undefined`

表单钩子的参数透传，这个参数是 [Refine useForm](https://refine.dev/docs/api-reference/core/hooks/useForm/) 的封装函数，请参考该文档的参数定义。

```
import type { FormProps } from 'tdesign-react/esm'
```

## formProps

- 类型：`FormProps`
- 默认值：`undefined`

TDesign 表单参数，请参考 [TDesign Form](https://tdesign.tencent.com/react/components/form) 的文档。

## onData

- 类型：`(form: UseFormReturnType) => void`
- 默认值：`undefined`

数据回调，当表单数据发生变化时，你可以通过这个回调使用 `useForm` 返回的方法。