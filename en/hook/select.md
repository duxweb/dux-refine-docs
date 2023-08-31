# Select Data

`useSelect` is a secondary encapsulation of [Refine's useSelect](https://refine.dev/docs/api-reference/core/hooks/useSelect/), primarily used to simplify cases where asynchronous options are required, such as dropdown selections.

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

This component is mainly used for compatibility handling. Please refer to the original documentation for return values and parameters.