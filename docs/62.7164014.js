(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{50:function(s,t,a){"use strict";a.r(t);var r={components:{}},l=a(0),n=Object(l.a)(r,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("固定位置")]),s._v(" "),s._m(0),s._v(" "),a("block-demo",{attrs:{tip:"",source:"const data = [\n  { value: 1350, label: '直接访问' },\n  { value: 2548, label: '搜索引擎' },\n  { value: 3340, label: '联盟广告' },\n  { value: 350, label: '视频广告' },\n  { value: 2100, label: '邮件营销' }\n]\n\nconst { Chart, Pie, Legend, Tooltip } = qcharts\n\nconst chart = new Chart({\n  container: '#app',\n  size: ['100%', '100%']\n})\n\nchart.source(data, { row: 'label', value: 'value' })\n\nconst pie = new Pie()\n\nconst tooltip = new Tooltip({ title: '网站流量来源', pos: ['0%', 20] })\ntooltip.style('background', () => ({ bgcolor: 'rgba(0, 0, 0, .5)' }))\ntooltip.style('title', () => ({ color: 'red' }))\ntooltip.style('icon', () => ({ bgcolor: 'red' }))\ntooltip.style('text', () => ({ color: 'blue' }))\n\nchart.add(pie).add(tooltip)\n\nchart.render()\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问'")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2548")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎'")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3340")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告'")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("350")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告'")]),s._v(" },\n  { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2100")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销'")]),s._v(" }\n]\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Pie, Legend, Tooltip } = qcharts\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("]\n})\n\nchart.source(data, { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" })\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" pie = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Pie()\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tooltip = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Tooltip({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'网站流量来源'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0%'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("] })\ntooltip.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'background'")]),s._v(", () => ({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgba(0, 0, 0, .5)'")]),s._v(" }))\ntooltip.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'title'")]),s._v(", () => ({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(" }))\ntooltip.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'icon'")]),s._v(", () => ({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(" }))\ntooltip.style("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(", () => ({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v(" }))\n\nchart.add(pie).add(tooltip)\n\nchart.render()\n")])])])],1)},[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("使用 "),t("code",{pre:!0},[this._v("Tooltip.position")]),this._v(" 可以固定 "),t("code",{pre:!0},[this._v("tooltip")]),this._v(" 的位置。")])}],!1,null,null,null);t.default=n.exports}}]);