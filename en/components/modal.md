# Modal

For simple interactions, you can use modal dialogs to display content. Dux Refine's modal component is built on top of [TDesign Dialog](https://tdesign.tencent.com/react/components/dialog) and supports asynchronous loading of components.

## Regular Modal

You can trigger a modal dialog by setting an element as a trigger. When this element is clicked, a modal dialog will pop up to display the content of the child component.

```jsx
import { Modal } from '@duxweb/dux-refine'

<Modal
  title='Title'
  trigger={<Button>Open</Button>}
>
  Modal content
</Modal>
```

## Asynchronous Modal

You can use the `component` parameter to asynchronously load child components. When the modal is opened, the child component will be rendered.

```jsx
<Modal
  title='Title'
  trigger={<Button>Open</Button>}
  component={() => import('./save')}
></Modal>
```

In the child component, you can use the `useModal` context hook for operations like closing the current modal.

```jsx
import { useModal } from '@duxweb/dux-refine'

const modal = useModal()
modal.close()
```

Within the modal content, you can use the `Footer` component to layout components at the bottom.

```jsx
<Modal.Footer>
  <Button onClick={() => modal.close()}>Close<Button>
</Modal.Footer>
```

# Component Props

## title

- Type: `string`
- Default: `undefined`

The title of the modal.

## trigger

- Type: `ReactElement`
- Default: `undefined`

The component or element that triggers the modal. This component needs to support the `onClick` event.

## children

- Type: `ReactNode | ((close: () => void) => ReactNode)`
- Default: `undefined`

The content of the modal or a callback component.

## component

- Type: `() => Promise<{ default: ComponentType<any> }>`
- Default: `undefined`

The import callback for an asynchronous component.

## componentProps

- Type: `Record<string, any>`
- Default: `undefined`

Props to pass to the asynchronous component.

## defaultOpen

- Type: `boolean`
- Default: `undefined`

The default open status of the modal.

## open

- Type: `boolean`
- Default: `undefined`

The controlled mode status parameter of the modal.

## onClose

- Type: `() => void`
- Default: `undefined`

Callback function triggered when the modal is closed.