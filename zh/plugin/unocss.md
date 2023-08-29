# Unocss 预设

`presetDux` 预设提供针对 UnoCSS 的预设样式，使其可以保持 TDesign 风格的一致性。

## 安装

脚手架安装已自带该插件依赖，无需重复安装，手动安装执行以下命令：

```sh
yarn add @duxweb/dux-plugin
```

## 使用

修改 Uno 配置文件设置 dark 的获取方式与加入 presetDux 预设配置。

```js
import { presetDux } from '@duxweb/dux-plugin'

export default defineConfig({
  presets: [
    presetUno({
      dark: {
        dark: '[theme-mode="dark"]',
      },
    }),
    presetDux(),
  ],
})

```

## 样式监听

因 Dux Refine 为扩展包，包中使用的样式 UnoCSS 默认无法进行读取，所以需要修改 pipeline 配置加入该扩展包的监听：

```js

export default defineConfig({
  ...
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts,jsx,tsx}',
        // dux refine
        /dux-refine\.(js)(x?)$/,
      ]
    },
  },
})
```