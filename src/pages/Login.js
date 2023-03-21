import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error] = useState('');
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main');
    };

    return (
        <div>
            <h1>Login</h1>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e =>
                setPassword(e.target.value)} /><br />
            {error}
            <Button variant="outlined" onClick={handleClick}>Login</Button><br />
            {error}

            <Link to='/createUser'>アカウント作成</Link>
        </div>
    );
};

export default Login;