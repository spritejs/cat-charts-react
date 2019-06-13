## Group Column Chart 分组柱状图

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
      product: '05-08',
      year: '图例一',
      sales: 42
    },
    {
      product: '05-08',
      year: '图例二',
      sales: 78.2
    },
    {
      product: '05-08',
      year: '图例三',
      sales: 62
    },
    {
      product: '05-09',
      year: '图例一',
      sales: 80
    },
    {
      product: '05-09',
      year: '图例二',
      sales: 108
    },
    {
      product: '05-09',
      year: '图例三',
      sales: 64
    },
    {
      product: '05-10',
      year: '图例一',
      sales: 36
    },
    {
      product: '05-10',
      year: '图例二',
      sales: 91
    },
    {
      product: '05-10',
      year: '图例三',
      sales: 56
    }
  ]
  const dataFields = {
    row: 'year',
    value: 'sales',
    text: 'product'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const axisStyle = { axis: false, scale: false }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Bar transpose={false} barWidth={20} />
      <Legend align={['center', 'bottom']} />
      <Axis />
      <Axis orient={'left'} style={axisStyle} />
      <Tooltip formatter={d => `${d.product} - ${d.year} - ${d.sales}`} />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
