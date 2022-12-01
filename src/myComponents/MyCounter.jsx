import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import MyEvenCounter from './MyEvenCounter';
import './counter.css'

export default class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
        count: 0,
        evenCount: 0,
      }
    }

allClicksCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

evenClicksCounter = () => {
this.setState((state, props) =>{
  if (this.state.evenCount !== this.state.count){
    return { evenCount: this.state.count + 1 }}
  else {return {evenCount: this.state.count}}
})
}

render() {
  return (
    <div className='box'>
      <h1>States and Hooks</h1>
      <h1>Click counter</h1>
      <button onClick={()=> {this.allClicksCounter(); this.evenClicksCounter()} }>Click Here</button>
      
      <CounterDisplayer passedProperty={this.count} />
      <MyEvenCounter passedProp={this.evenCount} />
    <div className='valueHolder'>
      <h1> Clicks counted: {this.state.count}</h1>
      <h1> Even Clicks counted: {this.state.evenCount}</h1>
    </div>
      
    </div>
    )
  }
}
