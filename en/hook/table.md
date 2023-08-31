# Table

`useTable` is a wrapper for [Refine's useTable](https://refine.dev/docs/api-reference/core/hooks/useTable/), mainly used to extend the functionality of TDesign table components.

:::tip
Both table components and table pages in Dux Refine use this hook for extension.
:::

Using this hook will automatically request the list data of the resource corresponding to the current route and return it as parameters.

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
    // Set query parameters here
    params: {},
  },
})
```

----
# Parameter Passing

The parameters for `useTable` inherit those of [Refine's useTable](https://refine.dev/docs/api-reference/core/hooks/useTable/). Please refer to the specific documentation. Here are the additional methods:

## columns

- Type: `PrimaryTableCol[]`
- Default: `undefined`

This parameter is used to configure the column parameters of [TDesign Table](https://tdesign.tencent.com/react/components/table?tab=api).


----
# Returned Data

The returned data is suitable for the TDesign Table component, and you can pass them to the component as needed.

## data

- Type: `Array<TData>`
- Default: `undefined`

Table data obtained from the API request for the list data of the resource.

## filters

- Type: `Record<string, any>`
- Default: `undefined`

Filter data. Use this parameter to obtain filter condition data after performing filtering operations.

## setFilters

- Type: `(values: Record<string, unknown>) => void`
- Default: `undefined`

Set filter conditions. Use this method to set additional filter conditions.

## tableFilters

- Type: `FilterValue`
- Default: `undefined`

Table filter data. Pass this parameter to the `filterValue` parameter of the TDesign Table component.

## setTableFilters

- Type: `(values: FilterValue) => void`
- Default: `undefined`

Set table filter data. Pass this method to the `onFilterChange` parameter of the TDesign Table component.

## sorters

- Type: `TableSort`
- Default: `undefined`

Table sorting conditions. Pass this parameter to the `sort` parameter of the TDesign Table component.

```
import type { TableSort } from 'tdesign-react/esm'
```

## setSorters

- Type: `(sort: TableSort, options: SortOptions<TData>) => void`
- Default: `undefined`

Set table sorting conditions. Pass this method to the `onSortChange` parameter of the TDesign Table component.

```
import type { SortOptions } from 'tdesign-react/esm'
```

## selecteds

- Type: `Array<string | number>`
- Default: `undefined`

Selected table data. Pass this parameter to the `selectedRowKeys` parameter of the TDesign Table component.

## selectOptions

- Type: `SelectOptions<TData>`
- Default: `undefined`

Selected table data. Obtain the selected item data.

```
import type { SelectOptions } from 'tdesign-react/esm'
```

## setSelecteds

- Type: `(selectedRowKeys: Array<string | number>, options: SelectOptions<TData>) => void`
- Default: `undefined`

Set selected table data. Pass this method to the `setSelecteds` parameter of the TDesign Table component.

## pagination

- Type: `PaginationProps`
- Default: `undefined`

Set pagination parameters. Pass this parameter to the `pagination` parameter of the TDesign Table component.

```
import type { PaginationProps } from 'tdesign-react/esm'
```

## loading

- Type: `boolean`
- Default: `undefined`

Loading state of table data. Pass this parameter to the `loading` parameter of the TDesign Table component.

## refetch

- Type: `() => void`
- Default: `undefined`

Method to manually refresh table data. In general, there is no need to manually operate this. Refine provides mechanisms for automatic data updates. For example, under the same resource, when data is added, deleted, or modified, the table automatically fetches new list data.