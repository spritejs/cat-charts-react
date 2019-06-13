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
    { value: 1548, label: '搜索引擎' },
    { value: 2340, label: '联盟广告' },
    { value: 1350, label: '视频广告' },
    { value: 3100, label: '邮件营销' }
  ]
  const dataFields = {
    row: '*',
    value: 'value',
    text: 'label'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const columnStyle = {
    pillar: (attrs, d, i) => {
      if (i % 2 === 0) {
        return {
          border: { width: 1 },
          borderRadius: 20,
          fillColor: {
            vector: [0, 0, 0, 100],
            colors: [
              { color: '#9861E5', offset: 0 },
              { color: '#ADDF84', offset: 1 }
            ]
          }
        }
      }
      return {
        border: { width: 1 },
        opacity: 1.0,
        fillColor: {
          vector: [0, 0, 0, 100],
          colors: [
            { color: '#84E0BE', offset: 0 },
            { color: '#FBD54A', offset: 1 }
          ]
        },
        borderRadius: 20
      }
    },
    'pillar:hover': (attrs, data, i) => {
      if (i % 2 === 0) {
        return {
          borderRadius: 10
        }
      }
      return { opacity: 0.5, fillColor: '#FC6980' }
    },
    text: (attrs, data, i) => {
      let anchor = attrs.anchor || [0, 0]
      let size = attrs.size
      let pos = attrs.pos
      return {
        rotate: 0,
        text: data.value,
        anchor: [0.5, 1],
        pos: [pos[0] + size[0] / 2, pos[1] - size[1]]
      }
    },
    'text:hover': (attrs, data, i) => {
      let anchor = attrs.anchor || [0, 0]
      let size = attrs.size
      let pos = attrs.pos
      return {
        font: '22px "宋体"',
        rotate: 0,
        text: data.value,
        anchor: [0.5, 1],
        pos: [pos[0] + size[0] / 2, pos[1] - size[1]]
      }
    },
    backgroundpillar: { borderRadius: 10 },
    'backgroundpillar:hover': { borderRadius: 20 }
  }
  const axisStyle = { axis: false, scale: false }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Bar style={columnStyle} />
      <Axis />
      <Axis orient={'left'} style={axisStyle} />
      <Tooltip formatter={d => `${d.label}: ${d.value}`} />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::

## 负值柱状图

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
      product: '茶叶',
      year: '2016',
      sales: -81.2
    },
    {
      product: '茶叶',
      year: '2017',
      sales: 121.2
    },
    {
      product: '茶叶',
      year: '2018',
      sales: -41.2
    },
    {
      product: '牛奶',
      year: '2016',
      sales: 85.2
    },
    {
      product: '牛奶',
      year: '2017',
      sales: 79.6
    },
    {
      product: '牛奶',
      year: '2018',
      sales: 81.2
    },
    {
      product: '咖啡',
      year: '2016',
      sales: -65.2
    },
    {
      product: '咖啡',
      year: '2017',
      sales: -59.6
    },
    {
      product: '咖啡',
      year: '2018',
      sales: -61.2
    },
    {
      product: '椰汁',
      year: '2016',
      sales: 35.2
    },
    {
      product: '椰汁',
      year: '2017',
      sales: 79.6
    },
    {
      product: '椰汁',
      year: '2018',
      sales: 21.2
    }
  ]
  const dataFields = {
    row: 'year',
    col: 'product',
    value: 'sales',
    text: 'product'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const axisStyle = { axis: false, scale: false }

  return (
    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>
      <Bar />
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

## Data Update 数据更新

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

const data = [
  {
    product: '茶叶',
    year: '2016',
    sales: 81.2
  },
  {
    product: '茶叶',
    year: '2017',
    sales: 121.2
  },
  {
    product: '茶叶',
    year: '2018',
    sales: 41.2
  },
  {
    product: '牛奶',
    year: '2016',
    sales: 85.2
  },
  {
    product: '牛奶',
    year: '2017',
    sales: 79.6
  },
  {
    product: '牛奶',
    year: '2018',
    sales: 81.2
  },
  {
    product: '咖啡',
    year: '2016',
    sales: 65.2
  },
  {
    product: '咖啡',
    year: '2017',
    sales: 59.6
  },
  {
    product: '咖啡',
    year: '2018',
    sales: 61.2
  },
  {
    product: '椰汁',
    year: '2016',
    sales: 35.2
  },
  {
    product: '椰汁',
    year: '2017',
    sales: 79.6
  },
  {
    product: '椰汁',
    year: '2018',
    sales: 21.2
  }
]
const dataNew = [
  {
    product: '茶叶',
    year: '2016',
    sales: 81.2
  },
  {
    product: '茶叶',
    year: '2017',
    sales: 121.2
  },
  {
    product: '茶叶',
    year: '2018',
    sales: 41.2
  },
  {
    product: '茶叶',
    year: '2019',
    sales: 61.2
  },
  {
    product: '牛奶',
    year: '2016',
    sales: 85.2
  },
  {
    product: '牛奶',
    year: '2017',
    sales: 79.6
  },
  {
    product: '牛奶',
    year: '2018',
    sales: 81.2
  },
  {
    product: '牛奶',
    year: '2019',
    sales: 111.2
  },
  {
    product: '咖啡',
    year: '2016',
    sales: 65.2
  },
  {
    product: '咖啡',
    year: '2017',
    sales: 59.6
  },
  {
    product: '咖啡',
    year: '2018',
    sales: 61.2
  },
  {
    product: '咖啡',
    year: '2019',
    sales: 161.2
  }
]

function App() {
  const [currentData, setData] = useState(data)
  const dataFields = {
    row: 'year',
    col: 'product',
    value: 'sales',
    text: 'product'
  }
  const size = ['100%', '100%']
  const forceFit = true
  const axisStyle = { axis: false, scale: false }

  setTimeout(() => {
    setData(dataNew)
  }, 2000)

  return (
    <Chart
      data={currentData}
      dataFields={dataFields}
      size={size}
      forceFit={forceFit}
    >
      <Bar />
      <Legend align={['center', 'bottom']} />
      <Axis />
      <Axis orient={'left'} style={axisStyle} />
      <Tooltip formatter={d => `${d.year}: ${d.product}: ${d.sales}`} />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

:::
