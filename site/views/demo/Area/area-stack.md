## Stacked Area Chart 堆叠面积图

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
    { date: '05-01', category: '图例一', sales: 15.2 },
    { date: '05-02', category: '图例一', sales: 39.2 },
    { date: '05-03', category: '图例一', sales: 31.2 },
    { date: '05-04', category: '图例一', sales: 65.2 },
    { date: '05-05', category: '图例一', sales: 55.2 },
    { date: '05-06', category: '图例一', sales: 75.2 },
    { date: '05-07', category: '图例一', sales: 95.2 },
    { date: '05-08', category: '图例一', sales: 65.2 },
    { date: '05-01', category: '图例二', sales: 10.2 },
    { date: '05-02', category: '图例二', sales: 30.2 },
    { date: '05-03', category: '图例二', sales: 25.2 },
    { date: '05-04', category: '图例二', sales: 70.2 },
    { date: '05-05', category: '图例二', sales: 45.2 },
    { date: '05-06', category: '图例二', sales: 56.2 },
    { date: '05-07', category: '图例二', sales: 70.2 },
    { date: '05-08', category: '图例二', sales: 45.2 }
  ]
  const dataFields = {
    row: 'category',
    value: 'sales',
    text: 'date'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const areaStyle = {
    point: { fillColor: 'transparent', strokeColor: '#fff' },
    'point:hover': { strokeColor: '#fff' }
  }
  const axisStyle = { axis: false, scale: false }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Area style={areaStyle} />
      <Legend align={['center', 'bottom']} />
      <Axis />
      <Axis orient={'left'} style={axisStyle} />
      <Tooltip formatter={data => `${data.date} ${data.sales}`} />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
