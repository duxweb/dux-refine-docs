# 表格组件

表格组件使用 [TDesign Table](https://tdesign.tencent.com/react/components/table) 进行二次封装，支持组件参数的同时使用 hook 对组件进行扩展使其可以支持 Refine 数据请求，使用方法如下：

```js
import { CardTable } from '@duxweb/dux-refine'

<CardTable />
```

# 表格参数

## title 

- 类型: `string`
- 默认值: `undefined`

自定义表格卡片标题

## header

- 类型: `React.ReactNode`
- 默认值: `undefined`

自定义表格卡片头元素

## tabs

- 类型: `Array<CardTableTab>`
- 默认值: `undefined`

表格卡片头部 Tab 切换配置，该选项值会以 `tab` 参数名请求到 Api 接口中。

```js
[
  {
    label: 'all',
    value: '0',
  },
  {
    label: 'published',
    value: '1',
  },
  {
    label: 'unpublished',
    value: '2',
  },
]
```

## banner

- 类型: `React.ReactNode`
- 默认值: `undefined`

表格卡片中顶部加入自定义元素。


## footer

- 类型: `React.ReactNode`
- 默认值: `undefined`

表格卡片中底部加入自定义元素。

## table

- 类型: `EnhancedTableProps`
- 默认值: `undefined`

TDesign 表格组件的[配置参数](https://tdesign.tencent.com/react/components/table?tab=api)。

## columns

- 类型: `PrimaryTableCol[]`
- 默认值: `undefined`

TDesign 表格组件的列配置参数，可参考 TDesign 文档配置列信息如选择、筛选等均可使用。

## filterData

- 类型: `Record<string, any>`
- 默认值: `undefined`

表格筛选扩展数据，通过该参数将外部参数设置到筛选表单中。

## filterRender

- 类型: `() => React.ReactNode`
- 默认值: `undefined`

筛选表单元素回调，通过返回筛选表单组件进行表单元素使用。

```js
import { FilterItem } from '@duxweb/dux-refine'

filterRender={() => {
  return (
    <>
      <FilterItem name='keyword'>
        <Input />
      </FilterItem>
    </>
  )
}}
```

## onFilterChange

- 类型: `(values: Record<string, any>) => void`
- 默认值: `undefined`

筛选数据发生改变时回调该函数。

## batchRender

- 类型: `React.ReactNode`
- 默认值: `undefined`

自定义多选表格行后的多选操作元素，通过表格 Ref 可获取到选择数据。

```tsx

import { CardTable, CardTableRef } from '@duxweb/dux-refine'

const table = useRef<CardTableRef>(null)

return <CardTable
  ref={table}
  batchRender={
    <>
      <Button onClick={() => {
        console.log(table.current.selecteds)
        }}>Delete</Button>
    </>
  }
/>

```

