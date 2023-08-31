# Data Requests

Data requests are handled using Refine's data resource methods. Once configured, you can use relevant request methods for a data resource. For detailed configurations, refer to the "Modules - Resource Configuration" documentation.

```js
app.addResources([
  {
    name: 'article'
  }
])
```

:::tip
Dux Refine comes with a set of predefined [data providers](https://refine.dev/docs/api-reference/core/providers/data-provider/) that adhere to the REST API conventions. When making requests, it automatically constructs resource names and specific actions.
:::

## List Data

You can use the following hook functions to request list data. If pagination is needed, the page parameter in the URL should be `Page`.

```js
import { useList } from "@refinedev/core"

const { data, isLoading, isError } = useList({
    resource: "article"
});
```

Request format

```
GET {apiUrl}/{resource}
```

## Single Data Entry

You can use the following hook function to request a single data entry.

```js
import { useOne } from "@refinedev/core"

const { data, isLoading, isError } = useOne({
    resource: "article",
    id: 1
});
```

Request format

```
GET {apiUrl}/{resource}/{id}
```

## Create Data Entry

You can use the following hook function to create a data entry.

```js
import { useCreate } from "@refinedev/core"

const { mutate } = useCreate();

mutate({
    resource: "article",
    values: {
        title: "Title"
    },
});
```

Request format

```
POST {apiUrl}/{resource}
```

## Update Data Entry

You can use the following hook function to update a data entry.

```js
import { useUpdate } from "@refinedev/core"

const { mutate } = useUpdate();

mutate({
    resource: "article",
    values: {
        title: "Title"
    },
    id: 1,
});
```

Request format

```
POST {apiUrl}/{resource}/{id}
```

## Delete Data Entry

You can use the following hook function to delete a data entry.

```js
import { useDelete } from "@refinedev/core"

const { mutate } = useDelete();

mutate({
    resource: "article",
    id: 1,
});
```

Request format

```
DELETE {apiUrl}/{resource}/{id}
```

## More Methods

The above examples cover common Refine methods. There are more methods available that you can [refer to in the documentation](https://refine.dev/docs/api-reference/core/hooks/data/useApiUrl).