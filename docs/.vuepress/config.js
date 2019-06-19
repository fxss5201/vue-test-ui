module.exports = {
  base: '/vue-test-ui/',
  title: '测试ui库',
  description: '测试ui库',
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1] }
  },
  plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top'],
  themeConfig: {
    sidebarDepth: 0,
    repo: 'fxss5201/vue-test-ui',
    docsDir: 'docs',
    editLinks: true, 
    editLinkText: '帮助我们改进页面内容！',
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/component/' }
    ],
    sidebar: {
      '/component/': [
        {
          title: '组件',
          collapsable: false,
          children: [
            'buttonHtml'
          ]
        },
      ]
    },
    searchMaxSuggestions: 10,
    serviceWorker: {
      updatePopup: { 
        message: "有新内容", 
        buttonText: "更新" 
      }
    }
  }
}