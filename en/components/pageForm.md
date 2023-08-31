# Form Page

The form page component wraps the form component and is suitable for presenting complex forms on separate pages.

```jsx
import { FormPage } from '@duxweb/dux-refine'

<FormPage title="Title">
  {/* Form items */}
</FormPage>
```

The parameters of the form page are the same as those of the form component, with additional methods for page configuration.

## title

- Type: `React.ReactNode`
- Default: `undefined`

The title of the page.

## desc

- Type: `React.ReactNode`
- Default: `undefined`

The description of the page.

## headerRender

- Type: `React.ReactNode`
- Default: `undefined`

Custom additional components located in the upper right corner of the page.

## back

- Type: `boolean`
- Default: `undefined`

Whether to display the back button. When enabled, clicking this button returns to the previous page.

## reset

- Type: `boolean`
- Default: `undefined`

Whether to display the reset button. When enabled, clicking this button resets the form data to its initial values.