import React, {useState, useEffect} from 'react'
import './counter.css'


export default function UseEffectForTitle() {
    const [count, setCount] = useState(0);
    const clickUpdater = () => setCount(count + 1);

    useEffect(()=>{
        alert('Component is mounted')
    }, []) //executes only once

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })
    
  return (
    <div className='box2'>
    <h1>Click counter app using React Hooks</h1>
    
    <button onClick={clickUpdater}>Click Here</button>
    
    <div className='valueHolder'>
    <h1>You clicked: {count} times</h1>
    </div>
    </div>
  )
}
