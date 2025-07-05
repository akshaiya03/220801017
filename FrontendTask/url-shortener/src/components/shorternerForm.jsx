import React, { useEffect } from 'react';
import { Log } from '../../LoggingMiddleware/Logger';
export default function StatsPage() {
  useEffect(() => {
    Log("frontend", "info", "page", "StatsPage loaded");
  }, []);

  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#fffaf0', minHeight: '90vh' }}>
      <h2 style={{ fontSize: '30px', marginBottom: '30px' }}>📊 URL Shortening Stats</h2>
      <div style={{
        margin: '0 auto',
        padding: '20px',
        width: '80%',
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        textAlign: 'left',
      }}>
        <h3>Total URLs shortened: 24</h3>
        <p>Last shortened: <a href="https://shrtco.de/example">https://shrtco.de/example</a></p>
        <p>Most popular domain: youtube.com</p>
        <p>Average shortening time: 430ms</p>
      </div>
    </div>
  );
}
