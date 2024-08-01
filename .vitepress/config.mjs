import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'whatsApp系统指南',
  base: '/whatsApp-docs/',
  description: 'A VitePress Site',
  themeConfig: {
    outlineTitle: '文章目录',
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Vue',
        items: [
          { text: 'vue入门', link: '/vue/vue入门' },
          { text: 'vue精通', link: '/vue/vue精通' },
        ],
      },
      {
        text: 'React',
        items: [
          { text: 'react基础', link: '/react/react基础' },
          { text: 'react入门', link: '/react/react入门' },
          { text: 'react精通', link: '/react/react精通' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      copyright: 'Copyright@ 2024 Albert WenZi',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
  },
})
