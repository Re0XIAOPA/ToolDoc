export default [{
  text: '首页',
  link: '/'
},
// {
//   text: '简介',
//   link: '/doc/Start-Document',
//   activeMatch: '^/Start-Document|^/Presentation-notes|^/git-code|^/zh/Example/markdown-examples|^/zh/Example/api-examples'
// },

{
  text: '学习',
  items: [{
    // 也可以省略标题
    text: 'JavaWeb',
    items: [
      // { text: '软件工程', link: '#' },
      // { text: 'C语言', link: "#" },
      {
        text: 'Tomcat安装配置',
        link: "/tooldoc/zh/JavaWeb/Tomcat安装配置.md"
      }, {
        text: 'Eclipse + Tomcat',
        link: "/tooldoc/zh/JavaWeb/eclipse-apache.md"
      },
      {
        text: 'idea + Tomcat',
        link: "/tooldoc/zh/JavaWeb/idea-Tomcat.md"
      }
      // { text: 'Jquery&Ajax异步交互', link: '#' },
      // { text: 'BootStrap前端开发', link: '#' },
    ]
  },]
},

{
  text: '教程',
  items: [{
    // 也可以省略标题
    // text: '使用教程',
    // 该部分的标题

    items: [{
      text: 'Git的使用',
      link: '/tooldoc/zh/tutorial/Git/git-code'
    },
    {
      text: 'Github520-Github加速',
      link: "/tooldoc/zh/tutorial/Github/Github520.md"
    },
    {
      text: 'MySQL的安装和环境配置',
      link: '/tooldoc/zh/tutorial/MySQL/MySQL-install'
    },
    {
      text: 'Nodejs环境配置',
      link: '/tooldoc/zh/tutorial/Nodejs/Nodejs环境配置.md'
    },
    ]
  },]
},
{
  text: 'Vitepress',
  items: [{
    text: 'Vitepress 教程',
    items: [
      {
        text: 'Vitepress 搭建',
        link: "https://vitepress.dev/zh/guide/getting-started#installation"
      },
      {
        text: 'Vitepress 图片缩放预览',
        link: "/tooldoc/zh/tutorial/Vitepress/Vitepress图片缩放预览.md"
      },
    ]
  },]
},
{
  text: 'Vue',
  items: [
    {
      text: '版本',
      items: [
        {
          text: 'Vue3',
          link: "https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application"
        },
        {
          text: 'Vue2',
          link: "https://v2.cn.vuejs.org/v2/guide/installation.html#NPM"
        },
      ]
    },
    {
      text: '工具',
      items: [
        {
          text: 'Vue CLI',
          link: "https://cli.vuejs.org/zh/guide/installation.html"
        },
      ]
    },
    {
      text: '插件',
      items: [
        {
          text: 'Vue Router',
          link: "https://router.vuejs.org/zh/installation.html"
        },
        {
          text: 'Vuex v4',
          link: "https://vuex.vuejs.org/zh/installation.html"
        },
        {
          text: 'Vuex v3',
          link: "https://v3.vuex.vuejs.org/zh/installation.html"
        },
      ]
    },
    {
      text: '库',
      items: [
        {
          text: 'Axios',
          link: "https://axios-http.com/zh/docs/intro"
        },
      ]
    }
  ]
},

{
  text: '答案',
  items: [{
    text: '软件工程头歌答案',
    link: "/tooldoc/zh/answer/SoftwareEngineeringAnswers.md"
  },]
},

{
  text: '看电视',
  items: [
    {
      // 也可以省略标题
      text: '动漫',
      items: [{
        text: '次元城动漫发布页',
        link: 'https://www.cycity.pro/'
      },
      {
        text: '囧次元(日漫&弹幕)',
        link: 'https://jcypc.net/'
      },
      {
        text: 'omofun(官网复活啦)',
        link: 'https://lanerc.app/'
      },
      {
        text: 'MX动漫(国漫&日漫)',
        link: 'http://www.mxdm.tv/'
      },
      {
        text: 'FreeOK(动漫&追剧)',
        link: 'https://freeok.lol/'
      }
      ]
    },
    {
      // 也可以省略标题
      text: '影视',
      items: [{
        text: '可可影视(可百度搜)',
        link: 'https://www.keke13.com/'
      },
      {
        text: '韩剧TV(韩小圈&动漫&韩剧)',
        link: 'https://www.hjtv2.cc/'
      }, {
        text: 'FreeOK(动漫&追剧)',
        link: 'https://freeok.lol/'
      }, {
        text: '追剧影视(动漫&追剧)',
        link: 'http://zjuys.com/'
      }
      ]
    },
  ]
},

{
  text: '更多',
  items: [{
    text: '联系',
    items: [{
      text: 'Telegram群',
      link: 'https://t.me/+V6VofRqHk_k0ZDE9'
    },]
  }, {
    text: '工具',
    items: [{
      text: '代理工具&&推荐机场',
      link: 'https://re0xiaopa.github.io/ToolStore/'
    },]
  },
  {
    // 也可以省略标题
    text: '网站',
    items: [{
      text: '自仿AcFun(已私密)',
      link: 'https://re0xiaopa.github.io/acfun-Website-templates/'
    },
    {
      text: 'Steam(防小白迷路)',
      link: 'https://store.steampowered.com/join'
    }
    ]
  },
  ]
}]