# 模态表单组件

模态表单组件对表单组件进行了封装，在表单内部增加了模态框的布局和按钮，适用于在模态框内显示的表单。

```jsx
import { FormModal } from '@duxweb/dux-refine'

<FormModal>
  {/* 表单项 */}
</FormModal>
```

模态表单的参数与表单组件的参数相同，并且还增加了一些取消回调等方法。

## onClose

- 类型：`() => void`
- 默认值：`undefined`

在模态框关闭时执行的回调函数。