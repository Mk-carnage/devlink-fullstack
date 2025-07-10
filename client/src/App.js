import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
