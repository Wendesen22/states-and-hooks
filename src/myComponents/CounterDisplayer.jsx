import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>{this.props.passedProperty}</p> 
      </div>
    )
  }
}
