# cat-charts-react

> 基于 QCharts 封装的 React 图表组件库。使用上基本与 <a target="_blank" href="https://www.spritejs.com/q-charts/">QCharts</a> 一致。 <a target="_blank" href="https://www.spritejs.com/cat-charts-react/">→ 详细文档</a>

## 安装

### npm

```shell
npm i spritejs @qcharts/core cat-charts-react
```

### CDN

在 HTML 文件依次引入 `spritejs`、`@qcharts/core` 和 `cat-charts-react`

```html
<script src="https://unpkg.com/spritejs/dist/spritejs.min.js"></script>
<script src="https://unpkg.com/@qcharts/core/lib/index.js"></script>
<script src="https://unpkg.com/cat-charts-react/lib/index.js"></script>
```

## 绘制

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Chart, Bar, Axis } from 'cat-charts-react'

function App() {
  const data = [
    { value: 6100, label: 'TOP1' },
    { value: 5200, label: 'TOP2' },
    { value: 4400, label: 'TOP3' },
    { value: 3700, label: 'TOP4' },
    { value: 2800, label: 'TOP5' },
    { value: 2000, label: 'TOP6' },
    { value: 1300, label: 'TOP7' },
    { value: 400, label: 'TOP8' }
  ]
  const dataFields = {
    row: '*',
    value: 'value',
    text: 'label'
  }

  return (
    <Chart data={data} dataFields={dataFields} forceFit={true}>
      <Bar />
      <Axis />
      <Axis orient={'left'} />
    </Chart>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

Demo：<a target="_blank" href="https://github.com/justemit/cat-charts-react-demo">Quickstart</a>
