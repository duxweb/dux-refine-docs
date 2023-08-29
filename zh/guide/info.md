# 什么是 Dux Refine？

Dux Refine 是一个中后台管理的前端解决方案，适用于各类大中小型管理端项目，项目使用 [Refine](https://refine.dev/) 作为基础的管理框架，并且使用 [TDesign](https://tdesign.tencent.com/react) 作为基础的UI组件，同时使用整合了各类必要的预设组件，使其可以达到开箱即用的目的，无需繁琐的设置。

## 特点

- Refine 整合

  Dux Refine 集成了 [Refine](https://refine.dev/) 的全部功能，并且封装了大部分的预设参数，您可以参考对应文档进行开发使用，主要有路由、数据集、权限、菜单、i18n等自带功能的封装。

- TDesign Hook

  同时针对 [TDesign](https://tdesign.tencent.com/react) 的部分组件做了 Hook 的扩展，如 `useTable`、`useForm`、`useUpload` 等这些组件可以轻松的将 TDesign 使用 Refine 的数据做交互。

- Unocss 预设

  系统集成了 Unocss 的预设，同时将 TDesign 的基础 Design Token 作为预设扩展，使用 Unocss 的同时轻松保持设计的一致性。

- 增强组件

  Dux Refine 内置了一部分常用的页面组件，如表格列表、模态表单、表单页面等，可处理大部分的 `CURD` 操作，同时扩展的部分的元素组件，尽可能帮助您快速上线。


## 知识

使用 Dux Refine 您需要掌握以下基础知识：

- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Refine](https://refine.dev/)
- [TDesign](https://tdesign.tencent.com/react)
- [UnoCSS](https://unocss.dev)