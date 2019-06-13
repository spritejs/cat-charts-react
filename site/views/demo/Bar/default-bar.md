## Basic Bar Chart 基础条形图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Chart,
  Area,
  Line,
  Pie,
  Bar,
  Radar,
  Scatter,
  Gauge,
  Funnel,
  Axis,
  Legend,
  Tooltip
} from 'cat-charts-react'

function App() {
  const data = [
    { value: 6100, label: 'TOP1' },
    { value: 5200, label: 'TOP2' },
    { value: 4400, label: 'TOP3' },
    { value: 3700, label: 'TOP4' },
    { value: 2800, label: 'TOP5' },
    { value: 2000, label: 'TOP6' },
    { value: 1300, label: 'TOP7' },
    { value: 400, label: 'TOP8' }
  ]
  const dataFields = {
    row: '*',
    value: 'value',
    text: 'label'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const barStyle = { pillar: { fillColor: '#47A1FF' } }
  const xAxisStyle = { grid: true }
  const yAxisStyle = { grid: false }
  const legendStyle = {
    text: { text: '图例一' }
  }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Bar transpose={true} barWidth={18} style={barStyle} />
      <Legend align={['center', 'bottom']} style={legendStyle} />
      <Axis style={xAxisStyle} />
      <Axis orient={'left'} style={yAxisStyle} />
      <Tooltip formatter={d => `${d.label}: ${d.value}`} />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
