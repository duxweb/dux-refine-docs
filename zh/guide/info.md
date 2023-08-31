# 什么是 Dux Refine?

**Dux Refine** 是一个适用于各类规模的中后台管理前端解决方案。它基于 [Refine](https://refine.dev/) 框架构建管理功能，同时利用 [TDesign](https://tdesign.tencent.com/react) UI 组件来构建用户界面。此外，该解决方案还集成了各种必要的预设组件，实现了开箱即用的特性，无需繁琐的设置。

## 特点

- **Refine 整合**

  Dux Refine 完全整合了 [Refine](https://refine.dev/) 的功能，并且对大部分预设参数进行了封装。您可以参考相应文档进行开发。其中涵盖了路由、数据集、权限、菜单、国际化（i18n）等自带功能的封装。

- **TDesign Hook**

  针对部分 [TDesign](https://tdesign.tencent.com/react) 组件，我们做了 Hook 扩展，比如 `useTable`、`useForm`、`useUpload` 等。这些组件使得 TDesign 可以与 Refine 的数据轻松交互。

- **Unocss 预设**

  系统集成了 Unocss 的预设，同时以 TDesign 的基础 Design Token 作为预设扩展。在使用 Unocss 的同时，您还能轻松保持设计的一致性。

- **增强组件**

  Dux Refine 包含了一些常用的页面组件，如表格列表、模态表单、表单页面等，能够高效处理大部分的 `CRUD` 操作。此外，我们还扩展了其他元素组件，以加快您的开发速度。

## 所需基础知识

要有效使用 Dux Refine，您需要掌握以下基础知识：

- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Refine](https://refine.dev/)
- [TDesign](https://tdesign.tencent.com/react)
- [UnoCSS](https://unocss.dev)