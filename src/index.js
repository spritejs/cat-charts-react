
import qcharts from '@qcharts/core'
import { Chart } from './components/Chart'
import { generateComponent } from './components/Base'

const version = require('../package.json').version

const components = [
  "Pie",
  "Line",
  "Area",
  "Bar",
  "Radar",
  "Scatter",
  "Gauge",
  "Funnel",
  "Axis",
  "Legend",
  "Tooltip"
]

const [Pie,Line,Area,Bar,Radar,Scatter,Gauge,Funnel,Axis,Legend,Tooltip ] = components.map(generateComponent)

export {
  version,
  qcharts,
  Chart,
  Pie,
  Line,
  Area,
  Bar,
  Radar,
  Scatter,
  Gauge,
  Funnel,
  Axis,
  Legend,
  Tooltip
}

export default {
  version,
  qcharts,
  Chart,
  Pie,
  Line,
  Area,
  Bar,
  Radar,
  Scatter,
  Gauge,
  Funnel,
  Axis,
  Legend,
  Tooltip
}

