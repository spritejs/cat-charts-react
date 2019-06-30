## Curve Line Chart 曲线折线图

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
    { date: '05-01', catgory: '图例一', sales: 15.2 },
    { date: '05-02', catgory: '图例一', sales: 39.2 },
    { date: '05-03', catgory: '图例一', sales: 51.2 },
    { date: '05-04', catgory: '图例一', sales: 65.2 },
    { date: '05-05', catgory: '图例一', sales: 55.2 },
    { date: '05-06', catgory: '图例一', sales: 75.2 },
    { date: '05-07', catgory: '图例一', sales: 95.2 },
    { date: '05-08', catgory: '图例一', sales: 65.2 },
    { date: '05-01', catgory: '图例二', sales: 20.2 },
    { date: '05-02', catgory: '图例二', sales: 49.2 },
    { date: '05-03', catgory: '图例二', sales: 57.2 },
    { date: '05-04', catgory: '图例二', sales: 55.2 },
    { date: '05-05', catgory: '图例二', sales: 75.2 },
    { date: '05-06', catgory: '图例二', sales: 95.2 },
    { date: '05-07', catgory: '图例二', sales: 110.2 },
    { date: '05-08', catgory: '图例二', sales: 85.2 }
  ]

  const dataFields = {
    row: 'catgory',
    value: 'sales',
    text: 'date'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const lineStyle = { point: { strokeColor: '#fff' } }
  const axisStyle = { axis: false, scale: false }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Line smooth={true} style={lineStyle} />
      <Legend align={['center', 'bottom']} />
      <Axis />
      <Axis orient={'left'} style={axisStyle} />
      <Tooltip
        title={d => d[0].date}
        formatter={data => `${data.date} ${data.sales}`}
      />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
