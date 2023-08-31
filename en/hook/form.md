# Form

`useForm` is a secondary encapsulation of [Refine's useForm](https://refine.dev/docs/api-reference/core/hooks/useForm/#basic-usage), primarily used to extend the functionality of TDesign form components. In Dux Refine, both form components and form pages can use this hook for functionality enhancement.

:::tip
Both form components and form pages in Dux Refine utilize `useForm` for enhanced functionality.
:::

```js
import { useForm } from '@duxweb/dux-refine'
import { Form } from 'tdesign-react/esm'

const form = Form.useForm()

const { queryResult, formLoading, onFinish } = useForm({
  form: form,
  action: 'create',
  queryMeta: {
    // Set query parameters here
    params: {},
  },
})

```

----
# Parameter Passing

The parameters for `useForm` are inherited from [Refine's useForm](https://refine.dev/docs/api-reference/core/hooks/useForm/). For details, please refer to the specific documentation. Here are the additional methods.

## form

- Type: `FormInstanceFunctions`
- Default: `undefined`

This parameter is the form hook for [TDesign Form](https://tdesign.tencent.com/react/components/form).

## initData

- Type: `Record<string, any>`
- Default: `undefined`

Form initialization data. This parameter can be used to set default data when the form is created. It takes precedence over data automatically obtained in edit mode.

## initFormat

- Type: `(data: Record<string, any>) => Record<string, any>`
- Default: `undefined`

Initial data formatting callback. This callback function is called when form data is obtained, used to process the data.

## saveFormat

- Type: `(data: Record<string, any>) => Record<string, any>`
- Default: `undefined`

Data save formatting callback. When the form is submitted, this callback function is used to format the data.

----
# Returned Data

The returned data follows the structure of [Refine's useForm](https://refine.dev/docs/api-reference/core/hooks/useForm/#basic-usage). Here are the additional methods.

## formData

- Type: `(data: Record<string, any>) => Record<string, any>`
- Default: `{}`

This method returns the formatted form initialization data.

## onSubmit 

- Type: `(e: SubmitContext) => void`

This method is the callback function for form submission, and it can be passed to the `onSubmit` parameter of the TDesign Form component.

----
# Asynchronous Validation

Asynchronous validation for forms can be achieved by returning a response with a 422 status code and including validation results in the response data.

```json
{
  "code": 422,
  "message": "Form validation failed",
  "data": [
    {
      "title": [
        "Title cannot be empty"
      ]
    }
  ]
}
```