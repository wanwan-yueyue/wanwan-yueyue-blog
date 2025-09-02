import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import mathjax3 from 'markdown-it-mathjax3'

// 声明 MathJax 生成的自定义标签（避免 Vue 因未知标签报错）
const mathCustomElements = [
	'mjx-container',
    'mjx-assistive-mml',
	'math',
	'maction',
	'maligngroup',
	'malignmark',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mi',
	'mlongdiv',
	'mmultiscripts',
	'mn',
	'mo',
	'mover',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'ms',
	'mscarries',
	'mscarry',
	'mscarries',
	'msgroup',
	'mstack',
	'mlongdiv',
	'msline',
	'mstack',
	'mspace',
	'msqrt',
	'msrow',
	'mstack',
	'mstack',
	'mstyle',
	'msub',
	'msup',
	'msubsup',
	'mtable',
	'mtd',
	'mtext',
	'mtr',
	'munder',
	'munderover',
	'semantics',
	'math',
	'mi',
	'mn',
	'mo',
	'ms',
	'mspace',
	'mtext',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'msqrt',
	'mstyle',
	'mmultiscripts',
	'mover',
	'mprescripts',
	'msub',
	'msubsup',
	'msup',
	'munder',
	'munderover',
	'none',
	'maligngroup',
	'malignmark',
	'mtable',
	'mtd',
	'mtr',
	'mlongdiv',
	'mscarries',
	'mscarry',
	'msgroup',
	'msline',
	'msrow',
	'mstack',
	'maction',
	'semantics',
	'annotation',
	'annotation-xml',
];

export default withMermaid(defineConfig({
  appearance: true, // 允许用户切换暗色模式

  // Mermaid 配置（可选）
  mermaid: {
    theme: 'default',
  },

  // Markdown 配置：启用 LaTeX 解析（通过 markdown-it-mathjax3）
  markdown: {
    config: (md) => {
      md.use(mathjax3); // 注册 MathJax 插件，解析 $...$ / $$...$$ 包裹的 LaTeX
    }
  },

  // Vue 配置：声明 MathJax 标签为「自定义元素」
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => mathCustomElements.includes(tag)
      }
    }
  },

  themeConfig: {
    siteTitle: "江晚的博客",
    sidebar: [
      // ========== 技术实践 ==========
      {
        text: '技术实践',
        collapsible: true,
        items: [
          { text: '第一篇技术笔记', link: '/posts/project/helloworld.md' },
          { text: 'C51 音乐播放器', link: '/posts/project/C51音乐播放器.md'},
          { text: 'C51 俄罗斯方块', link: '/posts/project/C51俄罗斯方块.md'}
        ]
      },
      // ========== 学科论文 ==========
      {
        text: '学科论文',
        collapsible: true,    
        items: [
          { text: '拉格朗日方程在机械臂中的数学建模', link: '/posts/thesis/Derivations of Lagrange Equation.md' }
        ]
      },
      // ========== 生活随笔 ==========
      {
        text: '生活随笔',
        collapsible: true,    
        items: [
          { text: '猫说', link: '/posts/essay/catSaid.md' },
          { text: '七夕随笔（其一）', link: '/posts/essay/ChineseValentine_Day(first)'},
          { text: 'Leave or wait', link: '/posts/essay/Leave_or_wait.md'},
          { text: '杂篇六则', link: '/posts/essay/miscellaneous_notes.md'},
          { text: '军训随笔', link: '/posts/essay/militaryTraining.md' }
        ]
      },
      // ========== 短篇小说 ==========
      {
        text: '短篇小说',
        collapsible: true,    
        items: [
          { text: '余响', link: '/posts/novel/echo.md' },
          { text: '未命名故事', link: '/posts/novel/story.md' }
        ]
      }
    ]
  }
}))