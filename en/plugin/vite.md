# Vite Plugin

The `DuxUI` plugin is mainly used to automatically collect module entry points and generate the `config/app.ts` module index file.

## Installation

If you installed the project using the scaffold, then the dependency for this plugin is already included and there's no need to install it again. If you need to manually install it, run the following command:

```sh
yarn add @duxweb/dux-plugin
```

## Usage

Add the following plugin configuration to your Vite configuration file:

```js
import { DuxUI, DuxTheme } from '@duxweb/dux-plugin'

export default defineConfig({
  plugins: [
    // ... other plugins
    DuxUI()
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: DuxTheme(),
      },
    },
  }
  // ... other configurations
})
```

## Explanation

### DuxUI

This plugin will automatically retrieve all directories that have the `src/pages/*/index.{js,ts,jsx,tsx}` entry files each time the server is started. It will then use them as default import items to generate a file with contents like the following. This file will be used as the module index for the `DuxApp` component.

```ts
import { appConfig } from '@duxweb/dux-refine'
import Admin from '../pages/admin'

const app: appConfig[] = [Admin]

export default app
```

### DuxTheme

This configuration is used for customizing the TDesign style settings of Dux in order to maintain a consistent overall UI style.