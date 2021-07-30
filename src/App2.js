import React, { useState, useEffect } from 'react';
import './style.css';

export default function App2() {
  const [count, setCount] = useState(0);
  
  const handleCount = () => {
    setCount(c => c + 1);
  };
    
  useEffect(() => {
    console.log(`COUNT ${new Date().toLocaleTimeString()}`);
    return () => {
      console.log(`CLN CNT ${new Date().toLocaleTimeString()}`);
    };
  }, [count]);


  return (
    <div>
      <button onClick={handleCount}>Click</button>
      <div>Count = {count}</div>
    </div>
  );
}
