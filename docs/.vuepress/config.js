module.exports = {
  title: 'Innovet_IOT_Inleiding',
  description: 'Inleiding IOT Innovet',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'www.sint-rembert.be' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [['/', 'Home'], ['/maatschappelijk-nut/', 'Maatschappelijk nut']],
    repo: 'https://github.com/KrisWerbrouck1/Innovet_IOT_Inleiding',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
