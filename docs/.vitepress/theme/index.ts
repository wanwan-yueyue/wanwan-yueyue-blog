import DefaultTheme from 'vitepress/theme'
import './style.css' 
import NovelTooltip from '../components/NovelTooltip.vue' 

export default {
  ...DefaultTheme,
  // 用 enhanceApp 注册全局组件
  enhanceApp({ app }) {
    app.component('NovelTooltip', NovelTooltip)
  }
}