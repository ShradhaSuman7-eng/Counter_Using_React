import React from 'react';
import { useState } from 'react';
import style from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0);
  const [inputVal,setInputVal]=useState(1);


  const handleInputChange=(e)=>{
    const value = parseInt(e.target.value);
    setInputVal( value);
   }
   const reset = () => {
    setCount(0);
  };

  const increment = () => setCount(count + inputVal);
  const decrement = () => setCount(count - inputVal);

  return (
    <div className={style.container}>
      <h1>Counter: {count}</h1>
      <div className={style.btnContainer}>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <div className={style.InputField}>
        <p>Increment/Decrement by</p>
         <input type="number" id="step" value={inputVal}   onChange={handleInputChange}  defaultValue={1} />
      </div>

      <button onClick={reset}>Reset</button>
    </div>
  );
}
