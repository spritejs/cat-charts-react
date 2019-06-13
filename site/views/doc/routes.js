import generateCommonPage from '../../utils/generateCommonPage'
import apiRoutes from './api'
import pluginsRoutes from './plugins'

export default [
  {
    title: '',
    path: '',
    redirect: 'install'
  },
  {
    title: '快速上手',
    path: 'install',
    component: () => import('./install.md')
  },

  {
    title: '图表介绍',
    path: 'intro',
    component: () => import('./intro.md')
  }

  // {
  //   title: 'Chart 图表主体',
  //   path: 'chart',
  //   component: () => import('./chart.md')
  // },
  // {
  //   title: 'Dataset 数据集',
  //   path: 'dataset',
  //   component: () => import('./dataset.md')
  // },
  // {
  //   title: 'API',
  //   path: 'api',
  //   component: generateCommonPage('/doc/api/', apiRoutes),
  //   children: apiRoutes
  // },

  // {
  //   title: 'Plugin',
  //   path: 'plugin',
  //   component: generateCommonPage('/doc/plugin/', pluginsRoutes),
  //   children: pluginsRoutes
  // }

  // {
  //   title: '自定义样式',
  //   path: 'style',
  //   component: () => import('./style.md')
  // },
]
