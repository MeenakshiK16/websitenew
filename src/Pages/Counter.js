import React,{useState} from 'react'
import "../css/Counter.css"
const Counter=()=>{
    const[count,setCount]=useState(0);
    const increamentCount=()=>{
        setCount(count+1);
    };
    const decreamentCount=()=>{
        setCount(count-1);
    };
    const resetCount=()=>{
        setCount(0);
    };


  return (
    <div>
        <div className='container'>
        <div className="counter-box">
            <h1>Counter:{count}</h1>
            <div className='button-container'>
                <button onClick={increamentCount}>Increament</button>
                <button onClick={decreamentCount}>Decreament</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    </div>
    </div>
  );
}
export default Counter