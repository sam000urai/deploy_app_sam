import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div>
            <h1>Main</h1>
            <Button variant="outlined" onClick={handleClick}>戻る</Button>
        </div>
    );
};
export default Main;