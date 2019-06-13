## 刻度

可以通过 `tickStep` 和 `tickLength` 分别控制 tick 的生成数和长度。当 `tickLength` 为负值时，将在外圈绘制刻度。

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
      value: 7.3
    }
  ]
  const dataFields = {
    value: 'value'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const style = {
    title: { fontSize: 36 }
  }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Gauge
        {...{
          min: 0,
          max: 10,
          tickStep: 1,
          tickLength: -10,
          title: d => `${d.value}`,
          subTitle: 'Hello'
        }}
        style={style}
      />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::

### 刻度上文字

可以通过 `labelOffset` 设置文字和刻度之间的距离。

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
      value: 7.3
    }
  ]
  const dataFields = {
    value: 'value'
  }
  const size = ['100%', '100%']
  const forceFit = true

  const style = {
    title: { fontSize: 36 }
  }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Gauge
        {...{
          min: 0,
          max: 10,
          tickStep: 1,
          tickLength: 10,
          labelOffset: 20,
          title: d => `${d.value}`,
          subTitle: 'Hello'
        }}
        style={style}
      />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
