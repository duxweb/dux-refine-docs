# Upload

This component is mainly designed for the [TDesign Upload](https://tdesign.tencent.com/react/components/upload) component and provides an adapted hook. The returned parameters can be directly used as parameters for this component.

:::tip
The API path for uploading is specified in the project configuration and is submitted through a POST request.
:::

```js
import { useUpload } from '@duxweb/dux-refine'
import { Upload } from 'tdesign-react/esm'

const uploadParams = useUpload()
<Upload {...uploadParams} theme='image' accept='image/*' />
```

## Data Transformation

You can use the `formatUploadSingle` method to convert a string URL into the `files` parameter of the upload component.

```js
import { formatUploadSingle } from '@duxweb/dux-refine'

const files = formatUploadSingle("http://....jpg")
```

You can also use the `getUploadSingle` method to convert the `files` parameter back to a string URL.

```js
import { getUploadSingle } from '@duxweb/dux-refine'

const url = getUploadSingle(files)
```

## Returned Data

The API for uploading results needs to return file information in the `data` field, as shown below:

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    "list": [
      {
        "url": "http://...",
        "name": "Image",
        "ext": "jpg",
        "size": 1024,
        "mime": "image/jpeg"
      }
    ]
  }
}
```