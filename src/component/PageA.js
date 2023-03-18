import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const PageA = () => {
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
            setArticles(res.data.map(article => ({ title: article.title, url: article.url })));
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

    const navigate = useNavigate();

    const goToPageB = () => {
        const message = 'helloworld';
        navigate(`/PageB/${message}`);
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

            <h1>PageA</h1>
            <button onClick={goToPageB}>PageB へ移動</button>

            <h2>Qiita 記事のタイトル一覧</h2>
            <Container>
                <Row>
                    {articles.map((article, index) => (
                        <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>
                                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                                            {article.url}
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
}

export default PageA;