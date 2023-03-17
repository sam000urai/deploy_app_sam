import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
    axios.get('https://qiita.com/api/v2/items').then(res => {
      console.log(res, 'res check');
      setArticles(res.data.map(article => article.title));
    })
  }, []);

  const choices = ['グー', 'チョキ', 'パー'];

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

  const playRockPaperScissors = (selectedChoice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(selectedChoice);
    setComputerChoice(compChoice);

    if (selectedChoice === compChoice) {
      setResult('引き分け！');
    } else if (
      (selectedChoice === 'グー' && compChoice === 'チョキ') ||
      (selectedChoice === 'チョキ' && compChoice === 'パー') ||
      (selectedChoice === 'パー' && compChoice === 'グー')
    ) {
      setResult('あなたの勝ち！');
    } else {
      setResult('あなたの負け...');
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


      <h2>じゃんけんゲーム</h2>
      {choices.map((choice) => (
        <button key={choice} onClick={() => playRockPaperScissors(choice)}>
          {choice}
        </button>
      ))}
      <p>あなたの手：{playerChoice}</p>
      <p>システムの選んだ手：{computerChoice}</p>
      <p>勝敗：{result}</p>

      <h2>Qiita 記事のタイトル一覧</h2>
      <ul>
        {articles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
