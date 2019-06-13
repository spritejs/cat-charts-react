## Nested Pie Chart 嵌套饼图

:::demo

```javascript
import React, { useState } from 'react'
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

let pie1Colors = []
let pie2Colors = []
let allSet = false

function App() {
  const data = [
    { value: 204, name: '百度' },
    { value: 451, name: '谷歌' },
    { value: 347, name: '必应' },
    { value: 256, name: '搜狗' },

    { value: 6790, name: '营销广告' },
    { value: 4548, name: '搜索引擎' },
    { value: 3350, name: '直接访问' },
    { value: 3100, name: '邮件营销' },
    { value: 2340, name: '联盟广告' },
    { value: 1350, name: '视频广告' }
  ]

  const dataFields = {
    row: 'name',
    value: 'value'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const pieStyle = {
    text: { color: '#fff' }
  }
  const pie2Style = {
    guideLine: true,
    guideText: { fontSize: '12px' }
  }

  const colors1 = ['#5982F6', '#59CB74', '#DA65CC', '#FC6980']
  const colors2 = [
    '#47A1FF',
    '#6CD3FF',
    '#A2E5FF',
    '#4DCCCB',
    '#3FDDC7',
    '#84E0BE',
    '#59CB74',
    '#ADDF84'
  ]

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Pie
        rows={data.slice(0, 4).map(d => d.name)}
        radius={0.5}
        style={pieStyle}
        color={colors1}
      />
      <Pie
        innerRadius={0.6}
        radius={0.8}
        color={colors2}
        rows={data.slice(4).map(d => d.name)}
        style={pie2Style}
      />
      <Legend
        color={[].concat(colors1, colors2)}
        orient={'vertical'}
        align={['right', 'center']}
      />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
