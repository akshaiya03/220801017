import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShortenForm from './components/shorternerForm';
import StatsPage from './components/statistics';


const navStyle = {
  backgroundColor: '#4a90e2',
  padding: '15px',
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '18px',
};

function App() {
  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>🔗 URL Shortener</Link>
        <Link to="/stats" style={linkStyle}>📊 URL Stats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ShortenForm />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
