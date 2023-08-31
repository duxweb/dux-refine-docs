# Vite 插件

`DuxUI` 插件主要用于自动收集模块入口，并生成 `config/app.ts` 模块索引文件。

## 安装

如果你使用脚手架进行安装，那么该插件的依赖已经被自动添加，无需重复安装。如果需要手动安装，请执行以下命令：

```sh
yarn add @duxweb/dux-plugin
```

## 使用

在你的 Vite 配置文件中加入以下插件配置：

```js
import { DuxUI, DuxTheme } from '@duxweb/dux-plugin'

export default defineConfig({
  plugins: [
    // ...其他插件
    DuxUI()
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: DuxTheme(),
      },
    },
  }
  // ...其他配置
})
```

## 说明

### DuxUI

该插件会在每次启动服务时，自动获取所有具有 `src/pages/*/index.{js,ts,jsx,tsx}` 入口文件的目录，并将其作为默认导入项，生成如下内容的文件。这个文件将用于 `DuxApp` 组件的模块索引。

```ts
import { appConfig } from '@duxweb/dux-refine'
import Admin from '../pages/admin'

const app: appConfig[] = [Admin]

export default app
```

### DuxTheme

这个配置用于对 Dux 进行自定义的 TDesign 样式配置，以保持整个 UI 风格的一致性。