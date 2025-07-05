import React from 'react';
import { Log } from '../LoggingMiddleware/Logger';

export default function StatsPage() {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#fffaf0',
    minHeight: '90vh',
  };

  const cardStyle = {
    margin: '20px auto',
    padding: '20px',
    width: '80%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    textAlign: 'left',
  };

  // Log when page loads
  React.useEffect(() => {
    Log('frontend', 'info', 'page', 'StatsPage loaded');
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '30px', marginBottom: '30px' }}>📊 URL Shortening Stats</h2>
      <div style={cardStyle}>
        <h3>Total URLs shortened: 24</h3>
        <p>Last shortened: <a href="https://shrtco.de/example">https://shrtco.de/example</a></p>
        <p>Most popular domain: `youtube.com`</p>
        <p>Average shortening time: 430ms</p>
      </div>
    </div>
  );
}
