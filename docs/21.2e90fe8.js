(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{64:function(s,t,a){"use strict";a.r(t);var r={components:{}},n=a(0),e=Object(n.a)(r,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("基本使用")]),s._v(" "),a("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    sex: 'male',\n\n    value: 63\n  },\n\n  {\n    sex: 'middle',\n    value: 16\n  },\n\n  {\n    sex: 'female',\n    value: 21\n  }\n]\n\nconst data2 = [\n  {\n    sex: 'male',\n\n    value: 87\n  },\n\n  {\n    sex: 'middle',\n    value: 45\n  }\n]\n\nconst { Chart, Progress, Tooltip } = qcharts\n\nconst chart = new Chart({ container: '#app' })\n\nchart.source(data, {\n  row: 'sex',\n  value: 'value',\n  text: 'sex'\n})\n\nconst colors = ['#49d088', '#FE5555', '#F4B30E', '#473C8B']\n\nconst progress = new Progress({\n  min: 0,\n  max: 100,\n  formatter: d => `${d.value}%`,\n  labelPosition: 'top',\n  startAngle: Math.PI * 0.8,\n  endAngle: Math.PI * 2.2\n})\n\nchart\n  .add(progress)\n  .add(new qcharts.Legend())\n  .add(new Tooltip({ formatter: d => `${d.value}` }))\n\nchart.render()\n// ;(function step() {\n//   setTimeout(() => {\n//     chart.source(data2)\n\n//     setTimeout(() => {\n//       chart.source(data)\n//       requestAnimationFrame(step)\n//     }, 3000)\n//   }, 3000)\n// })()\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("63")]),s._v("\n  },\n\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'middle'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16")]),s._v("\n  },\n\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v("\n  }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data2 = [\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("87")]),s._v("\n  },\n\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'middle'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v("\n  }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Progress, Tooltip } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\n\nchart.source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors = ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#49d088'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FE5555'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#F4B30E'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#473C8B'")]),s._v("]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" progress = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Progress({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("%`")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("labelPosition")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("startAngle")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("endAngle")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.2")]),s._v("\n})\n\nchart\n  .add(progress)\n  .add("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qcharts.Legend())\n  .add("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v(" }))\n\nchart.render()\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ;(function step() {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   setTimeout(() => {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     chart.source(data2)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     setTimeout(() => {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//       chart.source(data)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//       requestAnimationFrame(step)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     }, 3000)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   }, 3000)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// })()")]),s._v("\n")])])]),a("h3",[s._v("切换可视类型")]),s._v(" "),s._m(0),s._v(" "),a("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    sex: 'male',\n\n    value: 63\n  },\n\n  {\n    sex: 'middle',\n    value: 16\n  },\n\n  {\n    sex: 'female',\n    value: 21\n  }\n]\n\nconst data2 = [\n  {\n    sex: 'male',\n\n    value: 87\n  },\n\n  {\n    sex: 'middle',\n    value: 45\n  }\n]\n\nconst { Chart, Progress, Tooltip } = qcharts\n\nconst chart = new Chart({ container: '#app' })\n\nchart.source(data, {\n  row: 'sex',\n  value: 'value',\n  text: 'sex'\n})\n\nconst colors = ['#49d088', '#FE5555', '#F4B30E', '#473C8B']\n\nconst progress = new Progress({\n  min: 0,\n  max: 100,\n  type: 'wave',\n  formatter: d => `${d.value}%`,\n  labelPosition: 'top'\n})\n\nchart\n  .add(progress)\n  .add(new qcharts.Legend())\n  .add(new Tooltip({ formatter: d => `${d.value}` }))\n\nchart.render()\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("63")]),s._v("\n  },\n\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'middle'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16")]),s._v("\n  },\n\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v("\n  }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data2 = [\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("87")]),s._v("\n  },\n\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'middle'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v("\n  }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Progress, Tooltip } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(" })\n\nchart.source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors = ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#49d088'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FE5555'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#F4B30E'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#473C8B'")]),s._v("]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" progress = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Progress({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'wave'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("%`")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("labelPosition")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v("\n})\n\nchart\n  .add(progress)\n  .add("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qcharts.Legend())\n  .add("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v(" }))\n\nchart.render()\n")])])]),a("h3",[s._v("属性")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),a("h3",[s._v("方法")]),s._v(" "),s._m(4)],1)},[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("目前支持 2 种类型进度图："),t("code",{pre:!0},[this._v("pie | wave")]),this._v("。通过 "),t("code",{pre:!0},[this._v("type")]),this._v(" 属性控制。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("min")]),s._v(" "),a("td",[s._v("最小值")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])])]),s._v(" "),a("tr",[a("td",[s._v("max")]),s._v(" "),a("td",[s._v("最大值")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])])]),s._v(" "),a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",[s._v("可视类型")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("pie")])])]),s._v(" "),a("tr",[a("td",[s._v("hoverBg")]),s._v(" "),a("td",[s._v("鼠标经过时背景色")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("#f8f8f8")])])]),s._v(" "),a("tr",[a("td",[s._v("label")]),s._v(" "),a("td",[s._v("是否显示文字")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])])]),s._v(" "),a("tr",[a("td",[s._v("labelPosition")]),s._v(" "),a("td",[s._v("文字位置")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("bottom")])])]),s._v(" "),a("tr",[a("td",[s._v("lineWidth")]),s._v(" "),a("td",[s._v("可视组件边框大小")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])])]),s._v(" "),a("tr",[a("td",[s._v("padding")]),s._v(" "),a("td",[s._v("可视组件边框与父容器边距")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("5")])])]),s._v(" "),a("tr",[a("td",[s._v("offset")]),s._v(" "),a("td",[s._v("可视组件边框内外半径差")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("10")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("当 "),t("code",{pre:!0},[this._v("type")]),this._v(" 为 "),t("code",{pre:!0},[this._v("pie")]),this._v(" 时，额外支持：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("startAngle")]),s._v(" "),a("td",[s._v("起始角度")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("Math.PI * 0")])])]),s._v(" "),a("tr",[a("td",[s._v("endAngle")]),s._v(" "),a("td",[s._v("结束角度")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("Math.PI * 2")])])]),s._v(" "),a("tr",[a("td",[s._v("strokeBgcolor")]),s._v(" "),a("td",[s._v("背景圆环颜色")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("#ccc")])])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("formatter")]),s._v(" "),a("td",[s._v("文本格式化")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("(fn: Function)")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("d => d")])])])])])}],!1,null,null,null);t.default=e.exports}}]);