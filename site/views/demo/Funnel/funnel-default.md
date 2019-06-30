## Basic Funnel Chart 基础漏斗图

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
    { value: 3721, label: '浏览网站' },
    { value: 3006, label: '放入购入车' },
    { value: 2505, label: '生成订单' },
    { value: 2151, label: '支付订金' },
    { value: 1782, label: '完成订单' },
    { value: 1503, label: '完成交易' },
    { value: 1204, label: '未完成交易' }
  ]
  const dataFields = {
    row: 'label',
    col: 'value',
    value: 'value',
    text: 'label',
    sort: (a, b) => b.value - a.value
  }
  const size = ['100%', '100%']
  const forceFit = true

  const style = {
    guideLine: true,
    guideText: true,
    polygon: { strokeColor: 'transparent' },
    'polygon:hover': (polygon, dataOrigin, index) => {
      return { opacity: 0.5 }
    }
  }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Funnel
        {...{
          size: ['50%', '70%'],
          pos: ['20%', '20%'],
          align: 'center',
          formatter: d => `${d.value}`
        }}
        style={style}
      />
      <Legend align={['center', 'bottom']} />
      <Tooltip
        {...{
          formatter: d => `${d.label}: ${d.value}`
        }}
      />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
