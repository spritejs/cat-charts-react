(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{85:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),e=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Group Bar Chart 分组条形图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} from 'cat-charts-react'\n\nfunction App() {\n  const data = [\n    {\n      product: '05-12',\n      year: '图例一',\n      sales: 3000\n    },\n    {\n      product: '05-12',\n      year: '图例二',\n      sales: 3500\n    },\n    {\n      product: '05-12',\n      year: '图例三',\n      sales: 2000\n    },\n    {\n      product: '05-13',\n      year: '图例一',\n      sales: 5800\n    },\n    {\n      product: '05-13',\n      year: '图例二',\n      sales: 4200\n    },\n    {\n      product: '05-13',\n      year: '图例三',\n      sales: 2700\n    },\n    {\n      product: '05-14',\n      year: '图例一',\n      sales: 2600\n    },\n    {\n      product: '05-14',\n      year: '图例二',\n      sales: 1800\n    },\n    {\n      product: '05-14',\n      year: '图例三',\n      sales: 3800\n    },\n    {\n      product: '05-15',\n      year: '图例一',\n      sales: 3400\n    },\n    {\n      product: '05-15',\n      year: '图例二',\n      sales: 5100\n    },\n    {\n      product: '05-15',\n      year: '图例三',\n      sales: 4300\n    },\n    {\n      product: '05-16',\n      year: '图例一',\n      sales: 3100\n    },\n    {\n      product: '05-16',\n      year: '图例二',\n      sales: 3400\n    },\n    {\n      product: '05-16',\n      year: '图例三',\n      sales: 2100\n    }\n  ]\n  const dataFields = {\n    row: 'year',\n    value: 'sales',\n    text: 'product'\n  }\n  const size = ['100%', '100%']\n  const forceFit = true\n\n  const xAxisStyle = { grid: true }\n  const yAxisStyle = { grid: false }\n\n  return (\n    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Bar transpose={true} barWidth={12} />\n      <Legend align={['center', 'bottom']} />\n      <Axis style={xAxisStyle} />\n      <Axis orient={'left'} style={yAxisStyle} />\n      <Tooltip formatter={d => `${d.product} - ${d.year} - ${d.sales}`} />\n    </Chart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" React "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" ReactDOM "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react-dom'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cat-charts-react'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("App")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-12'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-12'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3500")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-12'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2000")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-13'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5800")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-13'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4200")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-13'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2700")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-14'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2600")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-14'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1800")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-14'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3800")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-15'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3400")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-15'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5100")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-15'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4300")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-16'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例一'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3100")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-16'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例二'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3400")]),s._v("\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("product")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'05-16'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'图例三'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sales")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2100")]),s._v("\n    }\n  ]\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" dataFields = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sales'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'product'")]),s._v("\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" size = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" forceFit = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" xAxisStyle = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("grid")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" }\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" yAxisStyle = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("grid")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Bar transpose={true} barWidth={12} />\n      <Legend align={['center', 'bottom']} />\n      <Axis style={xAxisStyle} />\n      <Axis orient={'left'} style={yAxisStyle} />\n      <Tooltip formatter={d => `${d.product} - ${d.year} - ${d.sales}`} />\n    </Chart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n")])])])],1)},[],!1,null,null,null);a.default=e.exports}}]);