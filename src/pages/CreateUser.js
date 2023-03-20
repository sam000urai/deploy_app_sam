import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../plugins/firebase';

const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleClick = async () => {
        console.log("Email:", email);
        console.log("Password:", password);
        const result = await createUser(email, password);
        console.log("🚀 ~ file: CreateUser.js ~ line 13 ~ handleClick ~ result", result);
        if (result === "success") {
            navigate('/main');
        } else {
            setError("User作成に失敗しました。");
        }
    };


    return (
        <div>
            <h1>CreateUser</h1>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <Button variant="outlined" onClick={handleClick}>Create</Button><br />
            <Link to='/' >戻る</Link>
            {error && <p>{error}</p>}
        </div>
    );
};

export default CreateUser;
