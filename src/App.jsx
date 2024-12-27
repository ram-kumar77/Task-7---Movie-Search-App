import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  );
};

export default App;
