# Data Structure

Dux Refine defines API data standards by default. According to the documentation, you need to return corresponding interface formats and fields.

:::tip
There are plans to introduce custom interface structure conversion configurations in the future.
:::

## Basic Data

The data returned by APIs should follow the `json` data format. The interface URLs should adhere to the basic `RESTful API` format. Regardless of whether the status code is 200 or not, the returned `json` data format should contain the following fields:

- `code` Status code, consistent with HTTP status code
- `message` Message, custom message content for the response
- `data` Data, custom message data for the response

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    ...
  }
}
```

When making requests from the frontend, the following common request headers will be sent:

- `Accept-Language` Request language. APIs can use this parameter to return data or information in the corresponding language.
- `Authorization` User authentication. After logging in, this parameter will be included in every request. APIs need to verify its validity.

```http
Accept-Language: en
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

When logging in, the following `json` parameters are sent as the request body content.

```json
{
  "username": "admin",
  "password": ""
}
```

After successful login, the following fields need to be returned at least. Additionally, other additional fields can be stored for custom use.

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

## Login Expiry

When the login expires or token validation fails, a status code of `401` needs to be returned.

```json
{
  "code": 401,
  "message": "Login failure",
  "data": {}
}
```

## User Permissions

During login, the backend needs to return the `permission` field as user permissions. If this field is empty, there are no restrictions on permissions. This permission is only used for frontend validation, and APIs need to independently determine interface permissions. The permission structure is as follows:

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

The `key` of the permission uses the naming convention of `resource.action`, and the `value` indicates whether the permission is granted.

## List Data

List data is fetched using a `GET` request. The basic URL format is as follows:

```http
GET http://example.test/article
```

The returned data can be either paginated or non-paginated. The API should return the following basic format:

- `list` Array of data
- `total` Total count of data (this field is irrelevant for non-paginated data)

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    "list": [
      ...
    ],
    "total": 100
  }
}
```

For paginated requests, the `page` parameter is used to specify the page number, as follows:

```
http://example.test/article?page=1
```

## Single Data Entry

Single data entries are fetched using a `GET` request. The basic URL format is as follows:

```http
GET http://example.test/article/{id}
```

The API should return the following data:

- `info` Detailed data

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    "info": {
      ...
    }
  }
}
```

## Create Data Entry

Data entries are created using a `POST` request. The basic request URL and data format are as follows. Upon success, a success message should be returned.

```http
POST http://example.test/article

BODY 
{
  "title": "...",
  ...
}
```

## Edit Data Entry

Data entries are edited using a `POST` request. The basic request URL and data format are as follows. Upon success, a success message should be returned.

```http
POST http://example.test/article/{id}

BODY 
{
  "title": "...",
  ...
}
```

## Delete Data Entry

Data entries are deleted using a `DELETE` request. The basic request URL is as follows. Upon success, a success message should be returned.

```http
DELETE http://example.test/article/{id}
```
