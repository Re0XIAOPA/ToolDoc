import {
  defineConfig
} from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
import nav from './config/nav';
import sidebar from './config/sidebar';
import footer from './config/footer';
import search from './config/search';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "科技工具X - Tools文档",
  description: "科技工具X - Tools文档",
  base: '/',
  lang: 'zh-CN',
  head: [
    ['link', {
      rel: 'icon',
      href: '/tool.png'
    }],
    // 图片预览
    [
      "link",
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
  ],

  // 图片预览
  markdown: {
    config: (md) => {
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  },
  // 最后更新时间
  lastUpdated: true,

  //主题配置
  themeConfig: {
    // 其他主题配置...
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "页面导航",
    outline: [2, 6],
    logo: "/tool.png",

    // 导航配置调用
    nav,
    sidebar,

    //搜索配置
    // 设置搜索框的样式
    search,

    // sidebar,
    markdown: {
      config: (md) => {
        // 使用更多 markdown-it 插件!
        md.use(mdItCustomAttrs, 'image', {
          'data-fancybox': "gallery"
        })
      },
      setup(md) {
        // 使用 shiki 的代码高亮功能
        md.use(require('shiki'), {
          // 你的 shiki 配置项
          // 例如选择主题和语言
          theme: 'nord',
          langs: ['html', 'js', 'ts', 'css', 'json', 'md', 'bash']
        })
      },
      image: {
        // 默认禁用图片懒加载
        lazyLoading: true
      },
    },

    //图标配置
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Re0XIAOPA'
      },
      {
        icon: {
          svg: '<svg t="1723368162546" class="icon" viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2744" width="256" height="256"><path d="M896.43834 165.698h-62.34l54.57-54.57c23.43-23.37 23.43-70.17 0-93.54-23.37-23.37-70.17-23.37-93.54 0l-155.88 148.17H452.17034l-155.94-148.23c-23.43-23.37-70.17-23.37-93.54 0-23.37 23.43-23.43 70.17 0 93.54l54.57 54.57h-62.34A192.983 192.983 0 0 0 0.00934 360.607v420.899c0 116.97 85.71 202.68 194.91 202.68h693.75a192.983 192.983 0 0 0 194.85-194.85v-428.73c7.83-109.14-77.94-194.91-187.08-194.91z m54.63 615.809a69.869 69.869 0 0 1-70.17 70.17h-678.27a69.869 69.869 0 0 1-70.109-70.17v-413.13a69.869 69.869 0 0 1 70.17-70.17h678.21a69.869 69.869 0 0 1 70.17 70.17v413.19z m-608.039-342.96a69.869 69.869 0 0 0-70.23 70.17v70.17a69.869 69.869 0 0 0 70.17 70.17 69.869 69.869 0 0 0 70.23-70.17v-70.17a69.869 69.869 0 0 0-70.23-70.17z m405.36 0a69.869 69.869 0 0 0-70.23 70.17v70.17a69.869 69.869 0 0 0 70.17 70.17 69.869 69.869 0 0 0 70.23-70.17v-70.17a69.869 69.869 0 0 0-70.17-70.17z" p-id="2745"></path></svg>',
        },
        link: 'https://space.bilibili.com/438125945'
      },
      {
        icon: {
          svg: '<svg t="1725584777960" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7394" width="20" height="20"><path d="M170.666667 85.333333h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333334 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333334-85.333334m85.333333 170.666667v170.666667h170.666667v85.333333H341.333333v256h85.333334v-85.333333h170.666666v85.333333h85.333334v-256h-85.333334v-85.333333h170.666667V256h-170.666667v170.666667h-170.666666V256H256z" fill="" p-id="7395"></path></svg>',
        },
        link: 'https://tavernce.awafuns.cn/'
      },
    ],


    //footer
    footer,

  },

})