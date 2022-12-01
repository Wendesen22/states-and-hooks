import React, { Component } from 'react'

export default class MyEvenCounter extends Component {
  render() {
    return (
      <div>
      <p>{ this.props.passedProp }</p>  
      </div>
    )
  }
}
