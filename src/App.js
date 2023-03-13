import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

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

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Input text: ${text}`);
    setDisplayText(text);
    setText('');
  };

  return (
    <div>
      <button onClick={increment}>いいね</button>
      <button onClick={decrement}>よくないね</button>
      <button onClick={reset}>reset</button>
      <p>Count: {count}</p>

      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInputChange} />
        <button type="submit">hello</button>
      </form>

      <p>Text: {displayText}</p>

    </div>
  );
}

export default App;
