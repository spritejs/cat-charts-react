## Group Bar Chart 分组条形图

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
    {
      product: '05-12',
      year: '图例一',
      sales: 3000
    },
    {
      product: '05-12',
      year: '图例二',
      sales: 3500
    },
    {
      product: '05-12',
      year: '图例三',
      sales: 2000
    },
    {
      product: '05-13',
      year: '图例一',
      sales: 5800
    },
    {
      product: '05-13',
      year: '图例二',
      sales: 4200
    },
    {
      product: '05-13',
      year: '图例三',
      sales: 2700
    },
    {
      product: '05-14',
      year: '图例一',
      sales: 2600
    },
    {
      product: '05-14',
      year: '图例二',
      sales: 1800
    },
    {
      product: '05-14',
      year: '图例三',
      sales: 3800
    },
    {
      product: '05-15',
      year: '图例一',
      sales: 3400
    },
    {
      product: '05-15',
      year: '图例二',
      sales: 5100
    },
    {
      product: '05-15',
      year: '图例三',
      sales: 4300
    },
    {
      product: '05-16',
      year: '图例一',
      sales: 3100
    },
    {
      product: '05-16',
      year: '图例二',
      sales: 3400
    },
    {
      product: '05-16',
      year: '图例三',
      sales: 2100
    }
  ]
  const dataFields = {
    row: 'year',
    value: 'sales',
    text: 'product'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const xAxisStyle = { grid: true }
  const yAxisStyle = { grid: false }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Bar transpose={true} barWidth={12} />
      <Legend align={['center', 'bottom']} />
      <Axis style={xAxisStyle} />
      <Axis orient={'left'} style={yAxisStyle} />
      <Tooltip formatter={d => `${d.product} - ${d.year} - ${d.sales}`} />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```
