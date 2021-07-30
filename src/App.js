import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const handleCount = () => {
    setCount(c => c + 1);
  };
  const handleX = () => {
    setX(x + 1);
  };

  useEffect(() => {
    console.log(`Nothing ${new Date().toLocaleTimeString()}`);
    return () => {
      console.log(`CLN NOT ${new Date().toLocaleTimeString()}`);
    };
  });

  useEffect(() => {
    console.log(`EMPTY ${new Date().toLocaleTimeString()}`);
    return () => {
      console.log(`CLN EMP ${new Date().toLocaleTimeString()}`);
    };
  }, []);

  useEffect(() => {
    console.log(`COUNT ${new Date().toLocaleTimeString()}`);
    return () => {
      console.log(`CLN CNT ${new Date().toLocaleTimeString()}`);
    };
  }, [count]);
  useEffect(() => {
    console.log(`X ${new Date().toLocaleTimeString()}`);
    return () => {
      console.log(`CLN XX ${new Date().toLocaleTimeString()}`);
    };
  }, [x]);

  return (
    <div>
      <h1>Omsairam</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handleCount}>Click</button>
      <button onClick={handleX}>Click</button>
      <div>Count = {count}</div>
      {count % 2 && <div>X:{x}</div>}
    </div>
  );
}
