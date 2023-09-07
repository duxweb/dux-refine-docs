# Quick Start

## Prerequisites

### Environment Requirements

- [Node.js](https://nodejs.org) version 18 or higher.
- [Yarn](https://yarnpkg.com/) for convenient dependency management.

### Development Tools

We recommend using [VS Code](https://code.visualstudio.com/) as the development tool and installing the following extensions to enhance the development experience:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

## Installation

This project provides a built-in scaffold installation method, and we strongly recommend using this approach to initialize your project.

### Initialization

Run the following command in the project root directory to initialize:

```sh
npx @duxweb/dux-cli
```

If you choose to install manually, dependencies are required:
```
yarn add tdesign-react @duxweb/dux-plugin @duxweb/dux-refine @refinedev/cli @refinedev/core @refinedev/react-router-v6 @iconify-json/tabler 
```

### Install Dependencies

After initialization, run the following command to install the required project dependencies:

```sh
yarn
```

### Start Debugging

Running the following command will start the local development server, and you can access the default admin panel by visiting http://localhost:5173.

```sh
yarn dev
```

## Explanation

The default scaffolded project comes with some example pages and mock data. If you want to start with a clean slate, you can delete the sample code in the `src/pages` directory.
