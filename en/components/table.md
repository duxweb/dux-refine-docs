# Table Component

The table component is wrapped using [TDesign Table](https://tdesign.tencent.com/react/components/table) and supports the extension of the component using hooks to enable Refine data requests. Here's how to use it:

```jsx
import { CardTable } from '@duxweb/dux-refine'

<CardTable />
```

## Table Parameters

### title

- Type: `string`
- Default: `undefined`

Customize the title of the table card.

### tabs

- Type: `Array<CardTableTab>`
- Default: `undefined`

Configuration for tab switches at the top of the table card. The values in this option will be sent as the `tab` parameter to the backend API interface.

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

### headerRender

- Type: `() => React.ReactNode`
- Default: `undefined`

Customize the header elements of the table card.

### footerRender

- Type: `() => React.ReactNode`
- Default: `undefined`

Add custom elements at the bottom of the table card.

### table

- Type: `EnhancedTableProps`
- Default: `undefined`

Configuration parameters for the TDesign table component. For detailed configuration options, refer to [TDesign Table API](https://tdesign.tencent.com/react/components/table?tab=api).

### columns

- Type: `PrimaryTableCol[]`
- Default: `undefined`

Column configuration parameters for the TDesign table component. You can configure features like selection and filtering based on your needs.

### filterRender

- Type: `() => React.ReactNode`
- Default: `undefined`

A callback function for rendering filter form elements. You can return custom filter form components to configure form elements.

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

### onFilterChange

- Type: `(values: Record<string, any>) => void`
- Default: `undefined`

A callback function that is triggered when filter data changes.

### batchRender

- Type: `() => React.ReactNode`
- Default: `undefined`

Customize the batch operation elements after selecting multiple rows in the table. You can access the selected data through the table's Ref.

```jsx
import { CardTable, CardTableRef } from '@duxweb/dux-refine'

const table = useRef<CardTableRef>(null)

return (
  <CardTable
    ref={table}
    batchRender={
      () => <>
        <Button onClick={() => {
          console.log(table.current.selecteds)
        }}>Delete</Button>
      </>
    }
  />
)
```