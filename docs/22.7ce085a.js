(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{63:function(s,t,a){"use strict";a.r(t);var r={components:{}},n=a(0),e=Object(n.a)(r,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("文字")]),s._v(" "),s._m(0),s._v(" "),a("block-demo",{attrs:{tip:"",source:"const data = [\n  {\n    sex: 'male',\n    value: 63\n  },\n\n  {\n    sex: 'middle',\n    value: 16\n  },\n\n  {\n    sex: 'female',\n    value: 21\n  }\n]\n\nconst { Chart, Progress, Tooltip } = qcharts\n\nconst chart = new Chart({ container: '#app'})\n\nchart.source(data, {\n  row: 'sex',\n  text: 'sex',\n  value: 'value'\n})\n\nconst colors = ['#49d088', '#FE5555', '#F4B30E', 'red']\n\nconst progress = new Progress({\n  min: 0,\n  max: 100,\n  label: true,\n  labelPosition: 'top',\n  formatter: d => `${d.value}`\n})\n\nchart.add(progress).add(new Tooltip({ formatter: d => `${d.value}` }))\n\nchart.render()\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'male'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("63")]),s._v("\n  },\n\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'middle'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16")]),s._v("\n  },\n\n  {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sex")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'female'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v("\n  }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Progress, Tooltip } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v("})\n\nchart.source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sex'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colors = ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#49d088'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FE5555'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#F4B30E'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" progress = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Progress({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("labelPosition")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'top'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v("\n})\n\nchart.add(progress).add("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(" =>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${d.value}")]),s._v("`")]),s._v(" }))\n\nchart.render()\n")])])]),a("h3",[s._v("属性")]),s._v(" "),s._m(1)],1)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("目前 "),a("code",{pre:!0},[s._v("labelPosition")]),s._v(" 只支持 "),a("code",{pre:!0},[s._v("top")]),s._v("、"),a("code",{pre:!0},[s._v("right")]),s._v("、"),a("code",{pre:!0},[s._v("bottom")]),s._v(" 和 "),a("code",{pre:!0},[s._v("left")]),s._v(" 之一，如果需要作偏移，可以配合使用 "),a("code",{pre:!0},[s._v("spritejs.Label")]),s._v(" 的 "),a("code",{pre:!0},[s._v("translate")]),s._v(" 属性。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("label")]),s._v(" "),a("td",[s._v("是否显示文字")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("(flag: Boolean)")])])]),s._v(" "),a("tr",[a("td",[s._v("labelPosition")]),s._v(" "),a("td",[s._v("文字位置")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("(pos: 'top' | 'right' | 'bottom' | 'left')")])])])])])}],!1,null,null,null);t.default=e.exports}}]);