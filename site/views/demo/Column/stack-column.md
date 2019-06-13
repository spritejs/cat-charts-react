## Stack Column Chart 堆叠柱状图

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
      data: '05-01',
      type: '图例一',
      value: 11
    },
    {
      data: '05-01',
      type: '图例二',
      value: 12.2
    },
    {
      data: '05-02',
      type: '图例一',
      value: 28
    },
    {
      data: '05-02',
      type: '图例二',
      value: 31
    },
    {
      data: '05-03',
      type: '图例一',
      value: 36
    },
    {
      data: '05-03',
      type: '图例二',
      value: 18
    },
    {
      data: '05-04',
      type: '图例一',
      value: 58
    },
    {
      data: '05-04',
      type: '图例二',
      value: 30.2
    },
    {
      data: '05-05',
      type: '图例一',
      value: 86.2
    },
    {
      data: '05-05',
      type: '图例二',
      value: 41.2
    },
    {
      data: '05-06',
      type: '图例一',
      value: 71.2
    },
    {
      data: '05-06',
      type: '图例二',
      value: 45.2
    },
    {
      data: '05-07',
      type: '图例一',
      value: 41.2
    },
    {
      data: '05-07',
      type: '图例二',
      value: 22.2
    },
    {
      data: '05-08',
      type: '图例一',
      value: 16.2
    },
    {
      data: '05-08',
      type: '图例二',
      value: 20.2
    }
  ]
  const dataFields = {
    row: 'type',
    value: 'value',
    text: 'data'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const axisStyle = { axis: false, scale: false }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Bar stack={true} />
      <Legend align={['center', 'bottom']} />
      <Axis />
      <Axis orient={'left'} style={axisStyle} />
      <Tooltip formatter={d => `${d.type}: ${d.value}`} />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
