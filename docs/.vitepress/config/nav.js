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
      text: '爪哇网页',
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
        link: '/tooldoc/zh/Git/git-code'
      },
      {
        text: 'Github520-Github加速',
        link: "/tooldoc/zh/Github/Github520.md"
      },
      {
        text: 'Vitepress搭建',
        link: '/tooldoc/zh/OS/vitepress-install'
      },
      {
        text: 'MySQL的安装和环境配置',
        link: '/tooldoc/zh/MySQL/MySQL-install'
      },
      {
        text: 'Nodejs环境配置',
        link: '/tooldoc/zh/Nodejs/Nodejs环境配置.md'
      },
      {
        text: 'Vue CLI 安装',
        link: 'https://cli.vuejs.org/zh/guide/installation.html'
      }
      ]
    },]
  },

  {
    text: '答案',
    items: [{
      text: '软件工程头歌答案',
      link: "/tooldoc/home/answer/SoftwareEngineeringAnswers.md"
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
  },
  ];