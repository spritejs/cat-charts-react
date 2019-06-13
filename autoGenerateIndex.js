const components = [
  'Pie',
  'Line',
  'Area',
  'Bar',
  'Radar',
  'Scatter',
  'Gauge',
  'Funnel',
  'Axis',
  'Legend',
  'Tooltip'
]

module.exports = function generateIndex() {
  return `
import qcharts from '@qcharts/core'
import { Chart } from './components/Chart'
import { generateComponent } from './components/Base'

const version = require('../package.json').version

const components = ${JSON.stringify(components, null, 2)}

const [${components.join(',')} ] = components.map(generateComponent)

export {
  version,
  qcharts,
  Chart,
  ${components.join(',\r\n  ').trim()}
}

export default {
  version,
  qcharts,
  Chart,
  ${components.join(',\r\n  ').trim()}
}

`
}
