import { useState, useEffect } from 'react';

const images = [
  // 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  // 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
   'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80'
  ];

  


const Home = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-content">
      <div className="container">
        <div className="slider-container">
          <div className="slider">
            {images.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt="Weather slide"
                className={`slider-img${idx === current ? ' active' : ''}`}
              />
            ))}
          </div>
        </div>
        <section className="page" style={{maxWidth: '700px', background: '#fff', borderRadius: '14px', boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)', padding: '2.5rem 2rem 2rem 2rem', margin: '2.5rem auto'}}>
          <h2 style={{fontSize: '2.2rem', marginBottom: '1.2rem', color: '#1976d2', textAlign: 'center'}}>Welcome to WeatherApp</h2>
          <p style={{fontSize: '1.15rem', textAlign: 'center', marginBottom: '2rem'}}>
            <b>Plan your day with confidence!</b> Get real-time weather updates, beautiful forecasts, and smart weather insights—all in one place.
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', marginBottom: '2rem'}}>
            <div style={{textAlign: 'center'}}>
              <span style={{fontSize: '2.2rem'}}>🌡️</span>
              <div style={{fontWeight: 600, fontSize: '1.1rem'}}>Current Temp</div>
              <div style={{fontSize: '1.3rem', color: '#1976d2'}}>25°C</div>
              <div style={{fontSize: '0.95rem', color: '#666'}}>Sunny</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <span style={{fontSize: '2.2rem'}}>💧</span>
              <div style={{fontWeight: 600, fontSize: '1.1rem'}}>Humidity</div>
              <div style={{fontSize: '1.3rem', color: '#1976d2'}}>60%</div>
              <div style={{fontSize: '0.95rem', color: '#666'}}>Comfortable</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <span style={{fontSize: '2.2rem'}}>🌬️</span>
              <div style={{fontWeight: 600, fontSize: '1.1rem'}}>Wind</div>
              <div style={{fontSize: '1.3rem', color: '#1976d2'}}>12 km/h</div>
              <div style={{fontSize: '0.95rem', color: '#666'}}>Gentle Breeze</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <span style={{fontSize: '2.2rem'}}>📅</span>
              <div style={{fontWeight: 600, fontSize: '1.1rem'}}>7-Day Forecast</div>
              <div style={{fontSize: '1.3rem', color: '#1976d2'}}>Sunny, Rain, Cloudy</div>
              <div style={{fontSize: '0.95rem', color: '#666'}}>See Dashboard</div>
            </div>
          </div>
          <ul style={{fontSize: '1.1rem', margin: '0 auto', maxWidth: '500px', color: '#1976d2', fontWeight: 500, listStyle: 'none', padding: 0, textAlign: 'center'}}>
            <li style={{marginBottom: '0.7rem'}}>🌦️ Stunning weather image slider</li>
            <li style={{marginBottom: '0.7rem'}}>🔔 Real-time weather alerts</li>
            <li style={{marginBottom: '0.7rem'}}>📱 User-friendly &amp; fast</li>
            <li style={{marginBottom: '0.7rem'}}>🔒 Secure login for your personalized dashboard</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home; 