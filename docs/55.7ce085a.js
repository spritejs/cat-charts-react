(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{97:function(s,t,a){"use strict";a.r(t);var n={components:{}},r=a(0),v=Object(r.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("基础坐标轴")]),s._v(" "),a("block-demo",{attrs:{tip:"基础坐标",source:"const data = [\n  { month: 'Jan', city: 'London', value: 3.9 },\n  { month: 'Feb', city: 'London', value: 4.2 },\n  { month: 'Mar', city: 'London', value: 5.7 },\n  { month: 'Apr', city: 'London', value: 8.5 },\n  { month: 'May', city: 'London', value: 11.9 },\n  { month: 'Jun', city: 'London', value: 15.2 }\n]\n\nconst { Chart, Axis ,Line } = qcharts\n\nconst chart = new Chart({\n  container: '#app',\n  size: ['100%', '100%']\n}).source(data, {\n  row: 'city',\n  value: 'value',\n  text: 'month'\n})\n\nconst line = new Line()\n\nlet xAxis = new Axis({ })\nlet yAxis = new Axis({ orient: 'left' })\n\nchart.add([line,xAxis,yAxis])\nchart.render()\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jan'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3.9")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Feb'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.2")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Mar'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5.7")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Apr'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8.5")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'May'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11.9")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jun'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Axis ,Line } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n}).source(data, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'city'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'month'")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" line = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Line()\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" xAxis = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" yAxis = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(" })\n\nchart.add([line,xAxis,yAxis])\nchart.render()\n")])])]),a("h4",[s._v("方法：")]),s._v(" "),s._m(0),s._v(" "),a("h4",[s._v("style 属性：")]),s._v(" "),s._m(1)],1)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("orient")]),s._v(" "),a("td",[s._v("坐标轴的方向")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("['top','right','bottom','left']")]),s._v(" "),a("td",[s._v("'bottom'")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("axis")]),s._v(" "),a("td",[s._v("轴体的样式")]),s._v(" "),a("td",[s._v("轴体对应 Rect 类")])]),s._v(" "),a("tr",[a("td",[s._v("scale")]),s._v(" "),a("td",[s._v("刻度的样式")]),s._v(" "),a("td",[s._v("scale 对应 Rect 类")])]),s._v(" "),a("tr",[a("td",[s._v("label")]),s._v(" "),a("td",[s._v("轴上文本样式")]),s._v(" "),a("td",[s._v("label 对应的 label 类")])])])])}],!1,null,null,null);t.default=v.exports}}]);