# 目录说明

以下是使用脚手架创建后的目录结构解释：


```sh
.
├── mock               # 演示数据目录
├── public             # 公共静态资源目录
├── src                # 主目录
│   ├── config         # 配置文件
│   │   ├── app.ts     # 由 Vite 插件自动生成的模块索引
│   │   └── index.ts   # 基础项目配置
│   ├── pages          # 页面文件
│   │   └── admin      # 示例的 admin 模块
│   │       ├── article  # 文章页面
│   │       ├── category # 分类页面
│   │       ├── home     # 仪表盘页面
│   │       ├── role     # 角色页面
│   │       ├── user     # 用户页面
│   │       ├── setting  # 设置页面
│   │       ├── locales  # 多语言配置
│   │       ├── config   # 配置数据
│   │       └── index.tsx  # 模块配置
│   ├── static          # 静态资源文件
│   └── index.tsx       # 主入口
├── .eslintrc.cjs       # ESLint 配置
├── vite.config.ts      # Vite 配置文件
└── uno.config.js       # Unocss 配置文件


```