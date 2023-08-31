# Modal Form Component

The modal form component wraps the form component and adds a modal layout and buttons inside the form. It's suitable for displaying forms within a modal dialog.

```jsx
import { FormModal } from '@duxweb/dux-refine'

<FormModal>
  {/* Form items */}
</FormModal>
```

The parameters of the modal form are the same as those of the form component, with additional methods like cancel callbacks.

## onClose

- Type: `() => void`
- Default: `undefined`

Callback function executed when the modal is closed.