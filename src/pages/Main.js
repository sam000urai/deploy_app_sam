import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { createDataInFirebase, readData, updateData, deleteData } from '../plugins/firebase';

const Main = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const createFunc = async () => {
        console.log('start')
        const res = await createDataInFirebase()
        console.log('fin', res)
    }
    const read = async () => {
        console.log("read")
        await readData()
    }
    const handleUpdate = async () => {
        await updateData();
    };
    const handleDelete = async (id) => {
        await deleteData(id);
    }

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

            <Button onClick={createFunc}>DBへ保存</Button>
            <Button onClick={read}>DB読み取り</Button>
            <Button variant="outlined" onClick={handleUpdate}>
                Update
            </Button>
            <Button variant="outlined" onClick={() => handleDelete(user.id)}>
                Delete
            </Button>
        </div>
    );
};

export default Main;
