import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import qcharts from '@qcharts/core'

class BaseComponent extends PureComponent {
  static contextTypes = {
    addChild: PropTypes.func
  }

  constructor(props, name) {
    super(props)
    this.name = name
  }

  applyStyle = instance => {
    const style = this.props.style

    if (!style || typeof style !== 'object') {
      return
    }

    Object.keys(style).forEach(type => {
      instance.style(type, style[type])
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.instance) {
      this.instance.attr(nextProps)
      this.applyStyle(this.instance)
    }
  }

  render() {
    const Component = qcharts[this.name]
    const color = this.props.color
    const instance = new Component(this.props || {})
    this.applyStyle(instance)
    this.instance = instance
    this.context.addChild({ instance, props: this.props, color })
    instance.color(color)
    return null
  }
}

export function generateComponent(name) {
  class ChartComponent extends BaseComponent {
    constructor(props) {
      super(props, name)
    }
  }

  return ChartComponent
}
