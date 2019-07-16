import qcharts from '@qcharts/core'
import { Chart } from './components/Chart'
import { generateComponent } from './components/Base'

const version = require('../package.json').version

const BlackList = [
  'h',
  'version',
  'BaseVisual',
  'BasePlugin',
  'Chart',
  'Dataset',
  'Global'
]

const components = Object.keys(qcharts).filter(t => BlackList.indexOf(t) < 0)

const Components = components.reduce((a, c) => {
  a[c] = generateComponent(c)
  return a
}, Object.create(null))

export const QchartsReact = {
  version,
  qcharts,
  Chart,
  ...Components
}

export default QchartsReact
