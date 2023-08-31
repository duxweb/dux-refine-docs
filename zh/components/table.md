# 表格组件

表格组件使用 [TDesign Table](https://tdesign.tencent.com/react/components/table) 进行了封装，支持组件参数的同时使用 hook 对组件进行扩展，使其可以支持 Refine 数据请求。使用方法如下：

```jsx
import { CardTable } from '@duxweb/dux-refine'

<CardTable />
```

# 表格参数

## title

- 类型：`string`
- 默认值：`undefined`

自定义表格卡片的标题。

## header

- 类型：`React.ReactNode`
- 默认值：`undefined`

自定义表格卡片的头部元素。

## tabs

- 类型：`Array<CardTableTab>`
- 默认值：`undefined`

表格卡片头部的 Tab 切换配置。该选项的值会作为 `tab` 参数发送到后端的 API 接口中。

```jsx
[
  {
    label: '全部',
    value: 'all',
  },
  {
    label: '已发布',
    value: 'published',
  },
  {
    label: '未发布',
    value: 'unpublished',
  },
]
```

## banner

- 类型：`React.ReactNode`
- 默认值：`undefined`

在表格卡片顶部添加自定义元素。

## footer

- 类型：`React.ReactNode`
- 默认值：`undefined`

在表格卡片底部添加自定义元素。

## table

- 类型：`EnhancedTableProps`
- 默认值：`undefined`

TDesign 表格组件的[配置参数](https://tdesign.tencent.com/react/components/table?tab=api)。

## columns

- 类型：`PrimaryTableCol[]`
- 默认值：`undefined`

TDesign 表格组件的列配置参数，你可以根据需要配置选择、筛选等功能。

## filterData

- 类型：`Record<string, any>`
- 默认值：`undefined`

表格筛选扩展数据，通过这个参数，你可以将外部的参数传递到筛选表单中。

## filterRender

- 类型：`() => React.ReactNode`
- 默认值：`undefined`

筛选表单元素的回调函数，你可以返回自定义的筛选表单组件来配置表单元素。

```jsx
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

- 类型：`(values: Record<string, any>) => void`
- 默认值：`undefined`

筛选数据发生变化时的回调函数。

## batchRender

- 类型：`React.ReactNode`
- 默认值：`undefined`

自定义多选表格行后的多选操作元素，通过表格的 Ref 可以获取到所选择的数据。

```jsx
import { CardTable, CardTableRef } from '@duxweb/dux-refine'

const table = useRef<CardTableRef>(null)

return (
  <CardTable
    ref={table}
    batchRender={
      <>
        <Button onClick={() => {
          console.log(table.current.selecteds)
        }}>删除</Button>
      </>
    }
  />
)
```