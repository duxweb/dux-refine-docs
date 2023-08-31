# 选择数据

`useSelect` 是对 [Refine useSelect](https://refine.dev/docs/api-reference/core/hooks/useSelect/) 的二次封装，主要用于简化下拉选择等需要异步选项的情况。

```js
import { useSelect } from '@duxweb/dux-refine'
import { Select } from 'tdesign-react/esm'

const { options, onSearch } = useSelect({
  resource: 'role',
  optionLabel: 'name',
  optionValue: 'id',
})

<Select filterable onSearch={onSearch} options={options} />
```

这个组件主要用于兼容性处理，返回值和参数请参考原始文档。