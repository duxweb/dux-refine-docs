# 快速开始

## 准备

### 环境要求

- [Node.js](https://nodejs.org) 版本18或更高。
- [Yarn](https://yarnpkg.com/) 用于方便的依赖管理。

### 开发工具

我们推荐使用 [VS Code](https://code.visualstudio.com/) 作为开发工具，并可以安装以下插件来提升开发体验：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

## 安装

此项目提供了内置的脚手架安装方法，强烈推荐使用这种方式来初始化项目。

### 初始化

在项目根目录运行以下命令，以进行初始化：

```sh
npx @duxweb/dux-cli
```

### 安装依赖

初始化完成后，运行以下命令来安装项目所需依赖：

```sh
yarn
```

### 启动调试

运行以下命令会启动本地开发服务器，并通过访问 http://localhost:5173 进入默认的管理端。

```sh
yarn dev
```

## 说明

默认的脚手架项目内置了一些示例页面和模拟数据。如果您想要进行纯净的开发，可以删除 `src/pages` 目录中的示例代码。