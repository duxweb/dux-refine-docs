# 模态框

对于不是复杂的页面，可以将页面组件使用弹窗的形式进行操作，该组件使用 [TDesign Dialog](https://tdesign.tencent.com/react/components/dialog) 进行二次封装，并支持异步加载组件。


## 普通弹窗

将元素设置为触发器，点击元素弹出窗口显示子组件内容。

```js
import { Modal } from '@duxweb/dux-refine'

<Modal
  title='Title'
  trigger={<Button>Open</Button>}
>
  Modal Content
</Modal>
```

## 异步弹窗

使用 `component` 参数通过 `import` 异步传递子组件，当弹窗打开时进行渲染。

```js
<Modal
  title='Title'
  trigger={<Button>Open</Button>}
  component={() => import('./save')}
></Modal>
```

同时可以在子组件中使用 `useModal` 上下文 Hook 进行关闭当前弹窗等操作。

```js
import { useModal } from '@duxweb/dux-refine'

const modal = useModal()
modal.close()
```

弹窗内容中可以使用 `Footer` 用来布局底部组件。

```js
<Modal.Footer>
  <Button onClick={() => modal.close()}><Button>
</Modal.Footer>
```

# 组件参数

## title

- 类型: `string`
- 默认值: `undefined`

弹窗标题。

## trigger

- 类型: `ReactElement`
- 默认值: `undefined`

触发组件或元素，需要支持 `onClick` 事件。


## children

- 类型: `ReactNode | ((close: () => void) => ReactNode)`
- 默认值: `undefined`

弹窗子组件内容或回调组件。


## component

- 类型: `() => Promise<{ default: ComponentType<any> }>`
- 默认值: `undefined`

异步组件导入回调。


## componentProps

- 类型: `Record<string, any>`
- 默认值: `undefined`

传递给异步组件的参数。


## componentProps

- 类型: `Record<string, any>`
- 默认值: `undefined`

传递给异步组件的参数。

## defaultOpen


- 类型: `boolean`
- 默认值: `undefined`

默认弹出状态。


## open


- 类型: `boolean`
- 默认值: `undefined`

受控模式弹窗状态参数。


## onClose


- 类型: `() => void`
- 默认值: `undefined`

弹窗在关闭时的回调。


