import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';

const PageB = () => {
    const navigate = useNavigate();
    const { message } = useParams();

    const [birthDate, setBirthDate] = useState({ year: '', month: '', day: '' });

    const months = [...Array(12).keys()].map((i) => i + 1);
    const days = [...Array(31).keys()].map((i) => i + 1);

    const handleMonthChange = (e) => {
        setBirthDate({ ...birthDate, month: e.target.value });
    };

    const handleDayChange = (e) => {
        setBirthDate({ ...birthDate, day: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const month = birthDate.month.toString().padStart(2, '0');
        const day = birthDate.day.toString().padStart(2, '0');
        const url = `http://birthday-color.cafein.jp/html/${month}${day}.html`;
        window.open(url, '_blank');
    };

    const backPage = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>PageB</h1>
            <p>Message from PageA: {message}</p>
            <button onClick={backPage}>ホームへ戻る</button>

            <form onSubmit={handleSubmit}>
                <label>
                    <select value={birthDate.month} onChange={handleMonthChange}>
                        <option value="">----</option>
                        {months.map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                    :月
                </label>
                <label>
                    <select value={birthDate.day} onChange={handleDayChange}>
                        <option value="">----</option>
                        {days.map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                    :日
                </label>
                <button type="submit">色診断をする</button>
            </form>
        </div >
    );
};

export default PageB;