import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInUser, signInWithGoogle } from '../plugins/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleClick = async () => {
        const result = await signInUser(email, password);
        if (result === "success") {
            navigate('/main');
        } else {
            setError("ログインに失敗しました。");
        }
    };

    const handleGoogleSignIn = async () => {
        const result = await signInWithGoogle();
        if (result === "success") {
            navigate('/main');
        } else {
            setError("Googleログインに失敗しました。");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <Button variant="outlined" onClick={handleClick}>Login</Button><br />
            <Button variant="outlined" onClick={handleGoogleSignIn}>Google Login</Button><br />
            {error && <p>{error}</p>}
            <Link to='/createUser'>アカウント作成</Link>
        </div>
    );
};

export default Login;
