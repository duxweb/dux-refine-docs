# 快速开始

## 准备

### 环境要求

- [node.js](https://nodejs.org) 版本18或更高。
- [yarn](https://yarnpkg.com/) 为了方便开发，默认使用 yarn 作为依赖管理。

### 开发工具

开发工具推荐使用 [Vscode](https://code.visualstudio.com/)，同时可以安装以下插件提高体验：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

## 安装

本项目自带脚手架安装方式，推荐采用该方式进行安装.


### 初始化

在项目跟目录执行以下命令进行初始化：

```sh
npx @duxweb/dux-cli
```

### 依赖安装

初始化成后执行以下命令进行依赖安装：
```sh
yarn
```

### 启动调试

执行以下命令后会默认启动本地开发服务，通过访问 http://localhost:5173，则进入默认管理端。

```sh
yarn dev
```

## 说明

默认脚手架项目自带一些演示页面与mock，可直接删除 `src/pages` 目录中的源代码，来进行后续的纯净开发。