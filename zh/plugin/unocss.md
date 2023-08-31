# Unocss 预设

`presetDux` 预设提供针对 UnoCSS 的预设样式，使其可以保持 TDesign 风格的一致性。

## 安装

如果你使用了脚手架安装，那么已经自带了该插件的依赖，无需重复安装。如果需要手动安装，请执行以下命令：

```sh
yarn add @duxweb/dux-plugin
```

## 使用

在 UnoCSS 配置文件中，设置 dark 主题的获取方式，并加入 `presetDux` 预设配置：

```js
import { presetDux } from '@duxweb/dux-plugin'

export default defineConfig({
  presets: [
    presetUno({
      dark: {
        dark: '[theme-mode="dark"]', // 设置 dark 主题的获取方式
      },
    }),
    presetDux(),
  ],
})

```

## 样式监听

由于 Dux Refine 是一个扩展包，包中使用的样式默认情况下 UnoCSS 无法自动识别。因此，你需要修改 UnoCSS 的配置，将 Dux Refine 的样式文件纳入监听范围：

```js

export default defineConfig({
  ...
  content: {
    pipeline: {
      include: [
        // 默认
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // 包含 js/ts 文件
        'src/**/*.{js,ts,jsx,tsx}',
        // dux refine
        /dux-refine\.(js)(x?)$/, // 将 Dux Refine 的样式文件添加到监听中
      ]
    },
  },
})
```