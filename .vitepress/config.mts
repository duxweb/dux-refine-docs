import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: "Dux refine",
      description: "Frontend Framework for Middle and Back-End using Refine and TDesign",
      themeConfig: {
        nav: getNavbar('en'),
        sidebar: getSidebar('en')
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      title: "Dux refine",
      description: "基于 Refine 与 TDesign 的中后台前端框架",
      themeConfig: {
        nav: getNavbar('zh'),
        sidebar: getSidebar('zh')
      }
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

function getI18nHelper(lang: 'zh' | 'en') {
  const cn = lang === 'zh';
  const prefix = cn ? '/zh' : '/en';
  const getLink = (str: string) => `${prefix}${str}`;
  const getText = (cnText: string, enText: string) => (cn ? cnText : enText);
  return { getText, getLink };
}

function getNavbar(lang: 'zh' | 'en') {
  const { getLink, getText } = getI18nHelper(lang);

  return [
    { 
      text: getText('首页', 'Home'), 
      link: getLink('/') 
    },
    {
      text: getText('指南', 'Guide'),
      link: getLink('/guide/started'),
    },
  ];
}


function getSidebar(lang: 'zh' | 'en') {
  const { getLink, getText } = getI18nHelper(lang)
  return [
    {
      text: getText('指南', 'Guide'),
      items: [
        { text: getText('什么是 Dux Refine？', 'What is dux refine?'), link: getLink('/guide/info') },
        { text: getText('快速开始', 'Quick Start'), link: getLink('/guide/started') },
        { text: getText('目录说明', 'Catalog'), link: getLink('/guide/catalog') },
      ]
    },
    {
      text: getText('基础', 'Base'),
      items: [
        { text: getText('项目配置', 'Config'), link: getLink('/base/config') },
        { text: getText('数据结构', 'Api Data'), link: getLink('/base/data') },
        { text: getText('数据资源', 'Api  Resources'), link: getLink('/base/resources') },
      ]
    },
    {
      text: getText('模块', 'Module'),
      items: [
        { text: getText('模块架构', 'Info'), link: getLink('/module/info') },
        { text: getText('模块入口', 'Entrance'), link: getLink('/module/entrance') },
        { text: getText('管理端配置', 'App'), link: getLink('/module/app') },
        { text: getText('路由配置', 'Route'), link: getLink('/module/route') },
        { text: getText('资源配置', 'Resource'), link: getLink('/module/resource') },
        { text: getText('多语言配置', 'i18n'), link: getLink('/module/i18n') },
      ]
    },
    {
      text: getText('组件', 'Components'),
      items: [
        { text: getText('表格', 'Table'), link: getLink('/components/table') },
        { text: getText('表单', 'Form'), link: getLink('/components/form') },
        { text: getText('上传', 'Upload'), link: getLink('/components/upload') },
      ]
    },
    {
      text: getText('插件', 'Plugin'),
      items: [
        { text: getText('Vite', 'Vite'), link: getLink('/plugin/vite') },
        { text: getText('UnoCSS', 'UnoCSS'), link: getLink('/plugin/unocss') },
      ]
    }
  ]
}