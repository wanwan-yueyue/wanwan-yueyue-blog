import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
    appearance: true,   // 允许用户切换暗色模式

    // Mermaid 配置（可选）
    mermaid: {
        theme: 'default',
    },

    themeConfig: {
        siteTitle: "江晚的博客",
        // 侧边栏配置（文章页生效）
        sidebar: [
            // ========== 技术实践 ==========
        {
            text: '技术实践',
            collapsible: true,
            items: [
            // 需先在 posts/project 目录创建对应 .md 文件
            { text: '第一篇技术笔记', link: '/posts/project/helloworld.md' },
            { text: 'C51 音乐播放器', link: '/posts/project/C51音乐播放器.md'},
            { text: 'C51 俄罗斯方块', link: '/posts/project/C51俄罗斯方块.md'}
            ]
        },

            // ========== 生活随笔 ==========
        {
            text: '生活随笔',      // 分组标题
            collapsible: true,    
            items: [
            // 需先在 posts/essay 目录创建对应 .md 文件
            { text: '猫说', link: '/posts/essay/catSaid.md' },
            { text: '七夕随笔（其一）', link: '/posts/essay/ChineseValentine_Day(first)'},
            { text: 'Leave or wait', link: '/posts/essay/Leave_or_wait.md'},
            { text: '杂篇六则', link: '/posts/essay/miscellaneous_notes.md'},
            { text: '军训随笔', link: '/posts/essay/militaryTraining.md' }
            ]
        },
            // ========== 短篇小说（新增分类） ==========
        {
            text: '短篇小说',      // 分组标题
            collapsible: true,    
            items: [
            // 需先在 posts/novel 目录创建对应 .md 文件
            { text: '余响', link: '/posts/novel/echo.md' },
            { text: '未命名故事', link: '/posts/novel/story.md' }
            ]
        }
        ]
    }
}))
