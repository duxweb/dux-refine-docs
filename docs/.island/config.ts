import { defineConfig } from "islandjs";

export default defineConfig({
  enableSpa: true,
  title: 'Dux Refine',
  themeConfig: {
    locales: {
      '/en/': {
        lang: 'en',
        label: 'English',
        nav: [
          {
            text: "Home",
            link: "/",
          },
        ],
        sidebar: {
          "/": [
            {
              text: "文章列表",
              items: [
                {
                  text: "Fresh",
                  link: "/article/fresh",
                },
                {
                  text: "Astro",
                  link: "/article/astro",
                },
              ],
            },
          ],
        },
      },
      '/zh/': {
        lang: 'zh',
        label: '简体中文',
        nav: [
          {
            text: "主页",
            link: "/",
          },
        ],
        sidebar: {
          "/": [
            {
              text: "文章列表",
              items: [
                {
                  text: "Fresh",
                  link: "/article/fresh",
                },
                {
                  text: "Astro",
                  link: "/article/astro",
                },
              ],
            },
          ],
        },
      },
      
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Duxweb'
    }
  },
});
