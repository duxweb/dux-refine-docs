# 模态表单组件

模态表单在表单组件上进行封装，增加了模态框的布局按钮，用于模态框内的表单。

```js
import { FormModal } from '@duxweb/dux-refine'

<FormModal>
  // Form Items
</FormModal>
```

模态表单参数与表单组件参数一致，并增加了取消回调等方法。

## onClose

- 类型 `() => void`
- 默认值: `undefined`

模态框关闭时执行该回调函数。

