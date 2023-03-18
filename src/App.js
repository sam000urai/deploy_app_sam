import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageA from './component/PageA';
import PageB from './component/PageB';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/PageB/:message" element={<PageB />} />
      </Routes>
    </Router>
  );
};

export default App