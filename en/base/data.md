# Data Structure

Dux Refine defines default API data specifications, and you need to return the corresponding interface format and fields according to the documentation.

:::tip
Future plans include adding custom API structure transformation configurations.
:::

## Basic Data

API data returned should be in JSON format, and the interface URL should follow the basic RESTful API format. Regardless of whether it is a 200 status code or not, the returned JSON data format should include the following fields:

- `code`: Status code, consistent with HTTP status code.
- `message`: Message, custom message content returned.
- `data`: Data, the message data returned.
- `meta`: Additional data, optionally custom additional data.

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    ...
  },
  "meta": {
    ...
  }
}
```

When making requests from the frontend, the following common request headers will be included:

- `Accept-Language`: Request language. The API can use this parameter to return data or information in the corresponding language.
- `Authorization`: User authentication. After logging in, this parameter will be included with every request, and the API needs to validate its validity.

```http
Accept-Language: zh
Authorization: Bearer <token>
```

## Success Message

API returns a success message.

```json
{
  "code": 200,
  "message": "ok",
  "data": {}
}
```

## Error Message

API returns an error message.

```json
{
  "code": 500,
  "message": "Error description",
  "data": {}
}
```

## Login Request

During login, the following JSON parameters are sent as the request body content.

```json
{
  "username": "admin",
  "password": ""
}
```

After a successful login, at least the following fields need to be returned. Additionally, other additional fields can be stored for custom use.

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    "userInfo": {
      "username": "admin",
      "nickname": "Dux",
      "avatar": "http://xxx"
    },
    "token": "Bearer <token>",
    "permission": {}
  }
}
```

## Login Expiration

When a login expires or token validation fails, a status code of `401` should be returned.

```json
{
  "code": 401,
  "message": "Login failure",
  "data": {}
}
```

## User Permissions

During login, the backend needs to return a `permission` field as user permissions. If this field is empty, there are no permission restrictions. This permission is only used for frontend validation, and the API needs to determine interface permissions itself. The permission structure is as follows:

```json
{
  "permission": {
    "user.list": true,
    "user.create": false,
    "user.edit": false,
    "user.delete": false,
    "user.show": false
  }
}
```

Permission `keys` are named in the format `resource.action`, and the `value` indicates whether the permission is held.

## List Data

List data is requested using a `GET` request, and the basic URL is as follows:

```http
GET http://example.test/article
```

Data return is divided into paginated and non-paginated data. The API should return the following basic format:

- `list`: Array data
- `total`: Total data count. For non-paginated data, this field is invalid.

```json
{
  "code": 200,
  "message": "ok",
  "data": [
    ...
  ],
  "meta": {
    "total": 100
  }
}
```

For paginated requests, you should use the `page` parameter to specify the page number, as follows:

```
http://example.test/article?page=1
```

## Single Data

Single data is requested using a `GET` request, and the basic URL is as follows:

```http
GET http://example.test/article/{id}
```

The API needs to return the following data:

- `info`: Detail data

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    ...
  },
  "meta": {
    ...
  }
}
```

## Create Data

Create data is requested using a `POST` request, and the basic request URL and data are as follows. Upon success, return a success message.

```http
POST http://example.test/article

BODY 
{
  "title": "...",
  ...
}
```

## Edit Data

Edit data is requested using a `POST` request, and the basic request URL and data are as follows. Upon success, return a success message.

```http
POST http://example.test/article/{id}

BODY 
{
  "title": "...",
  ...
}
```

## Delete Data

Delete data is requested using a `DELETE` request, and the basic request URL is as follows. Upon success, return a success message.

```http
DELETE http://example.test/article/{id}
```
