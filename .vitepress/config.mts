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
        { text: getText('数据请求', 'Api  Request'), link: getLink('/base/resources') },
      ]
    },
    {
      text: getText('模块', 'Module'),
      items: [
        { text: getText('模块架构', 'Info'), link: getLink('/module/info') },
        { text: getText('配置', 'Entrance'), link: getLink('/module/entrance') },
        { text: getText('管理端', 'App'), link: getLink('/module/app') },
        { text: getText('路由', 'Route'), link: getLink('/module/route') },
        { text: getText('资源', 'Resource'), link: getLink('/module/resource') },
        { text: getText('菜单', 'menu'), link: getLink('/module/menu') },
        { text: getText('多语言', 'i18n'), link: getLink('/module/i18n') },
      ]
    },
    {
      text: getText('组件', 'Components'),
      items: [
        { text: getText('页面布局', 'Layout'), link: getLink('/components/layout') },
        { text: getText('模态框', 'Modal'), link: getLink('/components/modal') },
        { text: getText('表格', 'Table'), link: getLink('/components/table') },
        { text: getText('表格页面', 'Table Page'), link: getLink('/components/pageTable') },
        { text: getText('表单', 'Form'), link: getLink('/components/form') },
        { text: getText('模态表单', 'Form Modal'), link: getLink('/components/modalForm') },
        { text: getText('表单页面', 'Form Page'), link: getLink('/components/pageForm') },
      ]
    },
    {
      text: getText('Hook', 'Hook'),
      items: [
        { text: getText('表格', 'Table'), link: getLink('/hook/table') },
        { text: getText('表单', 'Form'), link: getLink('/hook/form') },
        { text: getText('选择', 'Select'), link: getLink('/hook/select') },
        { text: getText('上传', 'Upload'), link: getLink('/hook/upload') },
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