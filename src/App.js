import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [error, setError] = useState('');


  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  };

  const reset = () => {
    if (window.confirm('本当の本当にリセットしますか？')) {
      setCount(0);
    }
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === '') {
      setError('入力してください');
    } else {
      setDisplayText(text);
      setText('');
      setError('');
    }
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
        {error && <p>{error}</p>}
      </form>
      <p>Text: {displayText}</p>

    </div>
  );
}

export default App;
