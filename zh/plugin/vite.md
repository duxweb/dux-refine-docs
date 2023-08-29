# Vite 插件

`DuxUI` 插件主要用于自动化采集模块入口，并生成 `config/app.ts` 模块索引文件。

## 安装

脚手架安装已自带该插件依赖，无需重复安装，手动安装执行以下命令：

```sh
yarn add @duxweb/dux-plugin
```

## 使用

修改 vite 配置文件加入如下插件：

```js
import { DuxUI, DuxTheme } from '@duxweb/dux-plugin'


export default defineConfig({
  plugins: [
    ...
    DuxUI()
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: DuxTheme(),
      },
    },
  }
  ...
})


```

## 说明

### DuxUI

本插件会在每次启动服务时获取含有 `src/pages/*/index.{js,ts,jsx,tsx}` 入口文件的目录作为默认导入项，并生成如下内容的文件，该文件用于 `DuxApp` 组件的模块索引。

```ts
import { appConfig } from '@duxweb/dux-refine'
import Admin from '../pages/admin'

const app: appConfig[] = [Admin]

export default app
```

### DuxTheme

该配置用于 Dux 的定制 TDesign 样式配置，使 UI 风格统一定制化。

