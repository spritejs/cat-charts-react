(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(s,a,t){"use strict";t.r(a);var n={components:{}},r=t(0),e=Object(r.a)(n,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("样式调整")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} from 'cat-charts-react'\n\nfunction App() {\n  const data = [\n    { value: 3350, label: '直接访问' },\n    { value: 1648, label: '搜索引擎' },\n    { value: 2440, label: '联盟广告' },\n    { value: 1550, label: '视频广告' },\n    { value: 3000, label: '邮件营销' }\n  ]\n  const dataFields = {\n    row: 'label',\n    col: 'value',\n    value: 'value',\n    text: 'label',\n    sort: (a, b) => b.value - a.value\n  }\n  const size = ['100%', '100%']\n  const forceFit = true\n\n  const style = {\n    guideLine: true,\n    guideText: true,\n    polygon: { strokeColor: 'transparent' }\n  }\n\n  return (\n    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Funnel\n        {...{\n          size: ['25%', '70%'],\n          pos: ['22%', '20%'],\n          align: 'right',\n          pyramid: true\n        }}\n        style={style}\n      />\n      <Funnel\n        {...{\n          size: ['25%', '70%'],\n          pos: ['50%', '20%'],\n          align: 'left',\n          pyramid: true\n        }}\n        style={style}\n      />\n      <Legend align={['center', 'bottom']} />\n      <Tooltip\n        {...{\n          formatter: d => `${d.label}: ${d.value}`\n        }}\n      />\n    </Chart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" React "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" ReactDOM "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'react-dom'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" {\n  Chart,\n  Area,\n  Line,\n  Pie,\n  Bar,\n  Radar,\n  Scatter,\n  Gauge,\n  Funnel,\n  Axis,\n  Legend,\n  Tooltip\n} "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cat-charts-react'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("App")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1648")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2440")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1550")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告'")]),s._v(" },\n    { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销'")]),s._v(" }\n  ]\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" dataFields = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("col")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sort")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("a, b")]),s._v(") =>")]),s._v(" b.value - a.value\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" size = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" forceFit = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" style = {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideLine")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideText")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygon")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("strokeColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'transparent'")]),s._v(" }\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n    <Chart data={data} dataFields={dataFields} size={size} forceFit={forceFit}>\n      <Funnel\n        {...{\n          size: ['25%', '70%'],\n          pos: ['22%', '20%'],\n          align: 'right',\n          pyramid: true\n        }}\n        style={style}\n      />\n      <Funnel\n        {...{\n          size: ['25%', '70%'],\n          pos: ['50%', '20%'],\n          align: 'left',\n          pyramid: true\n        }}\n        style={style}\n      />\n      <Legend align={['center', 'bottom']} />\n      <Tooltip\n        {...{\n          formatter: d => `${d.label}: ${d.value}`\n        }}\n      />\n    </Chart>\n  )\n}\n\nReactDOM.render(<App />, document.querySelector('#app'))\n")])])])],1)},[],!1,null,null,null);a.default=e.exports}}]);