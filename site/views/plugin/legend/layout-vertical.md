:::demo

```javascript
const data = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026,
  2027,
  2028,
  2029,
  2030
]
const { Chart, Legend } = qcharts

const chart = new Chart({ container: '#app' })

chart.source(data, {
  text: 'value'
})

const l2 = new Legend({ orient: 'vertical', align: ['left', 'top'] })
const l3 = new Legend({ orient: 'vertical', align: ['center', 'top'] })
const l4 = new Legend({ orient: 'vertical', align: ['right', 'top'] })

chart.add([l2, l3, l4])

chart.render()
```

:::
