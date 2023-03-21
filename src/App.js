import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import Main from './pages/Main';

console.log('API Key:', process.env.REACT_APP_API_KEY);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;