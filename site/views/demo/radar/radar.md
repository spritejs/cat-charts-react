## 基本雷达图

:::demo 基本雷达图

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
    { label: '分类一', category: '类别一', value: 19 },
    { label: '分类二', category: '类别一', value: 74 },
    { label: '分类三', category: '类别一', value: 40 },
    { label: '分类四', category: '类别一', value: 46 },
    { label: '分类五', category: '类别一', value: 30 },
    { label: '分类六', category: '类别一', value: 62 }
  ]
  const dataFields = {
    row: 'category',
    value: 'value',
    text: 'label'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const radarStyle = {
    point: false
  }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Radar style={radarStyle} />
      <Legend align={['center', 'bottom']} />
      <Tooltip
        {...{
          title: d => d[0].data[0].category,
          formatter: d => {
            const content = d.data.map(d => `${d.label}:${d.value}`)
            return content.join('\n')
          }
        }}
      />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
