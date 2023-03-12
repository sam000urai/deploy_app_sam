import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={increment}>いいね</button>
      <button onClick={decrement}>よくないね</button>
      <button onClick={reset}>reset</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
