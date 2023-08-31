# 表格

`useTable` 是 [Refine useTable](https://refine.dev/docs/api-reference/core/hooks/useTable/) 的封装，主要用于扩展 TDesign 表格组件的功能。

:::tip
Dux Refine 的表格组件与表格页面都使用了这个 hook 进行扩展。
:::

使用这个 hook 将会自动请求当前路由对应资源的列表数据，并将其作为返回参数。

```js
import { useTable } from '@duxweb/dux-refine'

const columns = []

const {
  data,
  pagination,
  selecteds,
  setSelecteds,
  selectOptions,
  sorters,
  setSorters,
  filters,
  setFilters,
  tableFilters,
  setTableFilters,
  refetch,
  loading,
} = useTable({
  pagination: {
    current: 0,
    pageSize: 10,
  },
  columns: columns,
  queryMeta: {
    // 获取查询参数
    params: {},
  },
})
```

----
# 参数传递

`useTable` 的参数继承了 [Refine useTable](https://refine.dev/docs/api-reference/core/hooks/useTable/) 的参数，请参阅具体文档。以下是新增的方法：

## columns

- 类型 `PrimaryTableCol[]`
- 默认值: `undefined`

这个参数用于配置 [TDesign Table](https://tdesign.tencent.com/react/components/table?tab=api) 的列参数。


----
# 返回数据

返回的数据适用于 TDesign Table 组件，你可以根据需要将它们传递给组件。

## data

- 类型 `Array<TData>`
- 默认值: `undefined`

表格数据，从资源的 API 请求后获得的列表数据。

## filters

- 类型 `Record<string, any>`
- 默认值: `undefined`

筛选数据，在进行筛选操作后可以使用这个参数来获取筛选条件数据。


## setFilters

- 类型 `(values: Record<string, unknown>) => void`
- 默认值: `undefined`

设置筛选条件，在使用该方法时可以设置额外的筛选条件。


## tableFilters

- 类型 `FilterValue`
- 默认值: `undefined`

表格筛选数据，需要传递给 TDesign Table 组件的 `filterValue` 参数。



## setTableFilters

- 类型 `(values: FilterValue) => void`
- 默认值: `undefined`

设置表格筛选数据，传递给 TDesign Table 组件的 `onFilterChange` 参数。


## sorters

- 类型 `TableSort`
- 默认值: `undefined`

表格排序条件，传递给 TDesign Table 组件的 `sort` 参数。

```
import type { TableSort } from 'tdesign-react/esm'
```


## setSorters

- 类型 `(sort: TableSort, options: SortOptions<TData>) => void`
- 默认值: `undefined`

设置表格排序条件，传递给 TDesign Table 组件的 `onSortChange` 参数。

```
import type { SortOptions } from 'tdesign-react/esm'
```

## selecteds

- 类型 `Array<string | number>`
- 默认值: `undefined`

表格选中数据，传递给 TDesign Table 组件的 `selectedRowKeys` 参数。


## selectOptions

- 类型 `SelectOptions<TData>`
- 默认值: `undefined`

表格选中数据，获取到选中的条目数据。

```
import type { SelectOptions } from 'tdesign-react/esm'
```

## setSelecteds

- 类型 `(selectedRowKeys: Array<string | number>, options: SelectOptions<TData>) => void`
- 默认值: `undefined`

设置表格选中数据，传递给 TDesign Table 组件的 `setSelecteds` 参数。


## pagination

- 类型 `PaginationProps`
- 默认值: `undefined`

设置分页参数，传递给 TDesign Table 组件的 `pagination` 参数。

```
import type { PaginationProps } from 'tdesign-react/esm'
```

## loading

- 类型 `boolean`
- 默认值: `undefined`

表格数据加载状态，传递给 TDesign Table 组件的 `loading` 参数。

## refetch

- 类型 `() => void`
- 默认值: `undefined`

手动刷新表格数据的方法。默认情况下无需手动操作，Refine 提供了自动更新相关数据的机制。例如，在同一个资源下增加、删除或修改数据后，表格会自动获取新的列表数据。