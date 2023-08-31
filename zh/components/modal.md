# 模态框

对于简单的页面，你可以使用弹窗的方式来显示内容。Dux Refine 的模态框组件使用了 [TDesign Dialog](https://tdesign.tencent.com/react/components/dialog) 进行了封装，并支持异步加载组件。

## 普通弹窗

你可以通过将一个元素设置为触发器，点击该元素时弹出一个窗口来显示子组件的内容。

```jsx
import { Modal } from '@duxweb/dux-refine'

<Modal
  title='标题'
  trigger={<Button>打开</Button>}
>
  弹窗内容
</Modal>
```

## 异步弹窗

通过使用 `component` 参数，你可以异步加载子组件。当弹窗被打开时，子组件会被渲染。

```jsx
<Modal
  title='标题'
  trigger={<Button>打开</Button>}
  component={() => import('./save')}
></Modal>
```

同时，你可以在子组件中使用 `useModal` 上下文钩子来关闭当前的弹窗等操作。

```jsx
import { useModal } from '@duxweb/dux-refine'

const modal = useModal()
modal.close()
```

在弹窗的内容中，你可以使用 `Footer` 组件来布局底部的组件。

```jsx
<Modal.Footer>
  <Button onClick={() => modal.close()}>关闭<Button>
</Modal.Footer>
```

# 组件参数

## title

- 类型：`string`
- 默认值：`undefined`

弹窗的标题。

## trigger

- 类型：`ReactElement`
- 默认值：`undefined`

触发弹窗的组件或元素，该组件需要支持 `onClick` 事件。

## children

- 类型：`ReactNode | ((close: () => void) => ReactNode)`
- 默认值：`undefined`

弹窗的子组件内容或一个回调组件。

## component

- 类型：`() => Promise<{ default: ComponentType<any> }>`
- 默认值：`undefined`

异步组件的导入回调。

## componentProps

- 类型：`Record<string, any>`
- 默认值：`undefined`

传递给异步组件的参数。

## defaultOpen

- 类型：`boolean`
- 默认值：`undefined`

弹窗的默认打开状态。

## open

- 类型：`boolean`
- 默认值：`undefined`

弹窗的受控模式状态参数。

## onClose

- 类型：`() => void`
- 默认值：`undefined`

弹窗关闭时的回调函数。