# Unocss Preset

The `presetDux` preset provides a preset style for UnoCSS to maintain consistency with the TDesign style.

## Installation

If you installed the project using the scaffold, then the dependency for this plugin is already included and there's no need to install it again. If you need to manually install it, run the following command:

```sh
yarn add @duxweb/dux-plugin
```

## Usage

In the UnoCSS configuration file, set the way to get the dark theme and include the `presetDux` preset configuration:

```js
import { presetDux } from '@duxweb/dux-plugin'

export default defineConfig({
  presets: [
    presetUno({
      dark: {
        dark: '[theme-mode="dark"]', // Set the way to get the dark theme
      },
    }),
    presetDux(),
  ],
})

```

## Style Watch

Since Dux Refine is an extension package, the styles used within the package are not recognized by UnoCSS by default. Therefore, you need to modify UnoCSS's configuration to include Dux Refine's style files in the watch scope:

```js

export default defineConfig({
  ...
  content: {
    pipeline: {
      include: [
        // Default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // Include js/ts files
        'src/**/*.{js,ts,jsx,tsx}',
        // dux refine
        /dux-refine\.(js)(x?)$/, // Add Dux Refine's style files to the watch list
      ]
    },
  },
})
```