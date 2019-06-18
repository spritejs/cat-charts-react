import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import qcharts from '@qcharts/core'

export class Chart extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    dataFields: PropTypes.object,
    size: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    forceFit: PropTypes.bool
  }

  static childContextTypes = {
    addChild: PropTypes.func
  }

  static defaultProps = {
    size: ['100%', '100%'],
    pos: [0, 0]
  }

  constructor(props) {
    super(props)
    this.name = 'chart'
    this.children = []
  }

  getChildContext() {
    return {
      addChild: this.addChild
    }
  }

  addChild = ({ instance, props }) => {
    this.children.push({ instance, props })
  }

  getData = () => {
    const { data } = this.props
    return data
  }

  getDataFields = () => {
    const { dataFields } = this.props
    return dataFields
  }

  componentWillReceiveProps(nextProps) {
    const { data, dataFields = {} } = nextProps
    this.chart.attr(nextProps)

    if (data) {
      this.chart.source(data, dataFields)
    }
  }

  componentDidMount() {
    const data = this.getData()
    const dataFields = this.getDataFields()
    const chart = (this.chart = new qcharts.Chart({
      container: this.domElementWrap,
      ...this.props,
      size: ['100%', '100%']
    }))

    if (this.props.theme) {
      try {
        chart.setTheme(this.props.theme)
      } catch (e) {}
    }

    chart.source(data, dataFields)
    this.children.forEach(({ instance, props }) => {
      if (props.rows || props.cols) {
        let source = props.rows
          ? chart.dataset.selectRows(props.rows)
          : chart.dataset.selectCols(props.cols)
        instance.source(source)
      }

      chart.add(instance)
    })
    chart.render()
  }

  getContainer = ref => {
    if (!this.domElementWrap) {
      this.domElementWrap = ref
    }
  }

  render() {
    const { size } = this.props

    return (
      <div ref={this.getContainer} style={{ width: size[0], height: size[1] }}>
        {this.props.children}
      </div>
    )
  }
}
