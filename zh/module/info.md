# 模块架构

Dux Refine 采用应用式开发架构，即一个目录为一个独立模块，通过模块内的 `index.js` 做入口配置，框架根据入口的配置来初始化加载对应的路由、资源、多语言、配置等信息，只要 `pages` 中的子目录内存在 `index.{js,ts,jsx,tsx}` 即可视为一个独立模块。

该架构的优点在于模块化、低耦合，多个模块之间可方便分享或者删除模块，同时模块没有特定的目录结构。

以下提供两种目录结构方式，可根据喜好任选一种：

## 管理结式构

将不同的管理端划分为一个模块，每个模块内含有该管理端的功能，以管理端划分为主。

```sh
.
├── pages # 页面文件
│   └── admin # admin 管理端
│       ├── category # 分类页面
│       ├── article # 文章页面
│       ├── role # 角色页面
│       ├── user # 用户页面
│       └── index.tsx # 模块配置
│   └── store # store 管理端
│       ├── category # 分类页面
│       ├── article # 文章页面
│       ├── role # 角色页面
│       ├── user # 用户页面
│       └── index.tsx # 模块配置

```



## 应用式结构

将相关联的功能划分为一个模块，每个模块内分为多个管理端，以功能为主划分规则。

```sh
.
├── pages # 页面文件
│   └── manage # 管理模块
│       ├── admin # admin 管理端
│       │   ├── role # 角色
│       │   └── user # 用户
│       ├── store # store 管理端
│       │   ├── role # 角色
│       │   └── user # 用户
│       └── index.tsx # 模块配置
│   └── content # 内容模块
│       ├── admin # admin 管理端
│       │   ├── category # 分类页面
│       │   └── article # 文章页面
│       ├── store # store 管理端
│       │   ├── category # 分类页面
│       │   └── article # 文章页面
│       └── index.tsx # 模块配置
```