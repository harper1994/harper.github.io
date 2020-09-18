module.exports = {
    base: '',
    title: 'harper',
    description: 'Record the problem ',
    head: [
      ['link', { rel: 'icon', href: `/favicon.ico` }],
      //增加manifest.json
      [
        "meta", // 移动端禁止用户缩放
        {
          name: "viewport",
          content:
            "width=device-width,width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        }
      ],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/images/timg2.jpg' }],
      ['link', { rel: 'mask-icon', href: '/images/timg2.jpg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/images/timg2.jpg.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
      ["script", { charset: "utf-8", src: "/js/disable-user-zoom.js" }]
    ],
    themeConfig: {
      sidebarDepth: 2,
      displayAllHeaders: true,
      logo: '/images/timg2.jpg',
      nav: [
        { text: '主页', link: '/' },
        {
          text: "前端",
          items: [
            {
               text: "Javascript",
               items: [
                { text: "ceshi", link: "/web/javascript/test" },
               ]
            },
            {
              text: "html",
              items: [
                { text: "ceshi", link: "/web/html/test" },
               ]
            },
            {
              text: "css",
              items: [
                { text: "ceshi", link: "/web/css/test" },
               ]
            },
            {
              text: "vue",
              items: [{ text: "ceshi", link: "/web/vue/test" },]
            },
            {
              text: "插件",
              items: [
                { text: "ceshi", link: "/web/plugins/test" },
               ]
            }
          ]
        },
        { text: '后端', link: '/admin/' },
        { text: '小程序', link: '/miniprogram/' },      
        { text: '其他', link: '/other/' }
      ],
      sidebar: [
        {
          title: "前端",
          children: [
            {
              title: 'html',
              children: ['/web/html/test','/web/html/']
            },
            {
              title: 'css',
              children: ['/web/css/test','/web/css/']
            },
            {
              title: 'Javascript',
              children: ['/web/Javascript/test','/web/Javascript/']
            },
            {
              title: 'plugins',
              children: ['/web/plugins/test','/web/plugins/']
            },
            {
              title: 'vue',
              children: ['/web/vue/test','/web/vue/']
            }
          ]
         },
         {
          title: "后端",
          children: ['/admin/']
         },
         {
          title: "小程序",
          children: ['/miniprogram/']
         },
         {
          title: "其他",
          sidebarDepth: 2,
          children: ['/other/']
         },
      ]
    },
    preferPathResolver: 'webpack',
    plugins: ['@vuepress/back-to-top'],
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
  }