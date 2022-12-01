import React, {useState} from 'react'
import './counter.css'

export default function IncreaseDecreaseCount() {
    const [count, setCount] = useState(0);
    const decreament = ()=> setCount(count - 1)
    const reset = ()=> setCount(0)
    const increament = ()=> setCount(count + 1)
  return (
    <div className='box1'>
    <h1>Counter app ~ with Function-based React</h1>
    <div className='valueHolder'>
        <h1>Count: {count}</h1>
    </div>
    <button onClick={decreament}>_</button>
    <button onClick={reset}>Reset</button>
    <button onClick={increament}>+</button>
    </div>
  )
}
