import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "江畔晚吟时的博客",  // 浏览器标签页标题
  description: "分享嵌入式开发以及python学习过程",  // SEO 描述
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },  // 链接到文章列表页
      { text: '关于', link: '/about.md' }  // 后续可新建 about.md 作为关于页
    ],
    // 侧边栏配置（文章页生效）
    sidebar: [
      {
        text: '我的文章',
        items: [
          { text: '第一篇技术笔记', link: '/posts/hello-world.md' }
        ]
      }
    ]
  }
})