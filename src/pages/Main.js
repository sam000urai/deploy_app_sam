import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                navigate('/');
            }
        });
    }, [navigate]);

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Main</h1>
            <p>{user?.email}でログイン中</p>
            <Button variant="outlined" onClick={handleClick}>ログアウト</Button>
        </div>
    );
};

export default Main;
