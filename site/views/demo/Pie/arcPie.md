## ArcPie Chart 弧饼图

:::demo

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Chart,
  Area,
  Line,
  Pie,
  ArcPie,
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
      type: '污染源',
      count: 4454
    },

    {
      type: '消防场所',
      count: 1239
    },

    {
      type: '安全生产',
      count: 3758
    },

    {
      type: '治安场所',
      count: 4353
    }
  ]
  const dataFields = {
    row: 'type',
    value: 'count'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const style = {
    arc: { lineCap: 'round' }
  }

  const legendStyle = {
    icon: (attrs, d, i) => ({
      marginTop: i > 0 ? 10 : 0
    }),
    text: (attrs, d, i) => ({
      marginTop: i > 0 ? 10 : 0
    })
  }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <ArcPie
        style={style}
        radius={0.7}
        pos={[0, 0]}
        size={['80%', '100%']}
        lineWidth={20}
        padAngle={0.3}
      />
      <Legend
        orient={'vertical'}
        align={['right', 'center']}
        style={legendStyle}
      />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
