# Table Component

The table component is wrapped using [TDesign Table](https://tdesign.tencent.com/react/components/table) and supports component parameters along with hooks to extend the component for Refine's data requests. Here's how to use it:

```jsx
import { CardTable } from '@duxweb/dux-refine'

<CardTable />
```

# Table Parameters

## title

- Type: `string`
- Default: `undefined`

Custom title for the table card.

## header

- Type: `React.ReactNode`
- Default: `undefined`

Custom header element for the table card.

## tabs

- Type: `Array<CardTableTab>`
- Default: `undefined`

Tab configuration for the table card's header. The value of this option will be sent as the `tab` parameter to the backend API.

```jsx
[
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Published',
    value: 'published',
  },
  {
    label: 'Unpublished',
    value: 'unpublished',
  },
]
```

## banner

- Type: `React.ReactNode`
- Default: `undefined`

Custom element added at the top of the table card.

## footer

- Type: `React.ReactNode`
- Default: `undefined`

Custom element added at the bottom of the table card.

## table

- Type: `EnhancedTableProps`
- Default: `undefined`

Configuration parameters for the TDesign table component. Check the [API documentation](https://tdesign.tencent.com/react/components/table?tab=api) for TDesign table.

## columns

- Type: `PrimaryTableCol[]`
- Default: `undefined`

Column configuration parameters for the TDesign table component. You can configure selection, filtering, and other functionalities.

## filterData

- Type: `Record<string, any>`
- Default: `undefined`

Additional data for table filtering. With this parameter, you can pass external parameters to the filtering form.

## filterRender

- Type: `() => React.ReactNode`
- Default: `undefined`

Callback function for rendering filtering form elements. You can return custom filtering form components to configure form elements.

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

- Type: `(values: Record<string, any>) => void`
- Default: `undefined`

Callback function triggered when filter data changes.

## batchRender

- Type: `React.ReactNode`
- Default: `undefined`

Custom elements for multiple selection operations after selecting rows in the table. You can access the selected data using the table's Ref.

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
        }}>Delete</Button>
      </>
    }
  />
)
```