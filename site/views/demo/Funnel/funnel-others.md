## 样式调整

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
    { value: 3350, label: '直接访问' },
    { value: 1648, label: '搜索引擎' },
    { value: 2440, label: '联盟广告' },
    { value: 1550, label: '视频广告' },
    { value: 3000, label: '邮件营销' }
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
    polygon: { strokeColor: 'transparent' }
  }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Funnel
        {...{
          size: ['25%', '70%'],
          pos: ['22%', '20%'],
          align: 'right',
          pyramid: true
        }}
        style={style}
      />
      <Funnel
        {...{
          size: ['25%', '70%'],
          pos: ['50%', '20%'],
          align: 'left',
          pyramid: true
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
