# Api 数据

Dux Refine 默认配置了 Api 数据规范，请按照文档说明返回对应的接口格式和字段。

:::tip
未来计划加入自定义接口结构转换配置。
:::

## 消息结构

Api 的数据返回需要 `json` 数据格式，接口 Url 需遵循基本的 `RESTful Api` 格式，并且无论是否为 200 状态码返回均以下 `json` 数据格式，且 `code` 参数与 `http 状态码` 保持一致。

- `code` 状态码，与 http 状态码保持一致
- `message` 消息，自定义返回消息内容
- `data` 数据，自定义返回消息数据

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    ...
  }
}
```


前端请求时会带入以下公共 `Header` 头:

- `Accept-Language` 请求语言，Api 可获取该参数返回对应的语言的数据或信息。
- `Authorization` 用户认证，登录后每次请求会带入该参数，Api 需自行验证有效性。

```http
Accept-Language: zh
Authorization: Bearer <token>
```

## 成功消息

Api 返回成功消息。
```json
{
  "code": 200,
  "message": "ok",
  "data": {}
}
```


## 错误消息

Api 返回错误消息。
```json
{
  "code": 500,
  "message": "Error description",
  "data": {}
}
```


## 登录请求

登录时会请求以下 `json` 参数到 `body` 内容。

```json
{
  "username": "admin",
  "password": ""
}
```

登录成功后需要返回至少以下字段信息，多余的字段信息也会一并存储便自定义使用。

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    "userInfo": {
      "username": "admin",
      "nickname": "Dux",
      "avatar": "http://xxx",
    },
    "token": "Bearer <token>",
    "permission": {},
  }
}
```


## 登录失效

登录失效或 Token 验证失败时需要返回 `code` 为 `401` 状态码。

```json
{
  "code": 401,
  "message": "Login failure",
  "data": {}
}
```

## 用户权限

登录时需后端返回 `permission` 字段作为用户权限，如果为空则不限制权限，该权限仅作为前端的验证，Api 端需自行判断接口权限，权限结构如下：

```json
{
  "permission": {
    "user.list": true,
    "user.create": false,
    "user.edit": false,
    "user.delete": false,
    "user.show": false,
  }
}
```

权限 `key` 以 `资源名.动作` 命名，值为是否拥有该权限。


## 列表数据

列表数据为 `GET` 请求，基本 url 如下：
```http
GET http://example.test/article
```

数据返回为分页和非分页数据，Api 需要返回以下基础格式:

- `list` 数组数据
- `total` 数据总数，非分页使用无效

```json
{
  "code": 200,
  "message": "ok",
  "data": {
    "list": [
      ...
    ],
    "total": 100,
  }
}
```

分页请求需要使用参数 `page` 代表页码，如下：

```
http://example.test/article?page=1
```


## 单条数据

单条数据为 `GET` 请求，基本 url 如下：
```http
GET http://example.test/article/{id}
```

Api 需要返回如下数据：

- `info` 详情数据

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

## 创建数据

创建数据使用 `POST` 请求，基本请求 url 与数据如下，成功后返回成功消息。

```http
POST http://example.test/article

BODY 
{
  "title": "...",
  ...
}

```


## 编辑数据

编辑数据使用 `POST` 请求，基本请求 url 与数据如下，成功后返回成功消息。

```http
POST http://example.test/article/{id}

BODY 
{
  "title": "...",
  ...
}

```

## 删除数据

删除数据使用 `DELETE` 请求，基本请求 url 与数据如下，成功后返回成功消息。

```http
DELETE http://example.test/article/{id}
```