const About = () => (
  <div className="main-content">
    <div className="container">
      <section className="page" style={{maxWidth: '700px', background: '#fff', borderRadius: '14px', boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)', padding: '2.5rem 2rem 2rem 2rem', margin: '2.5rem auto'}}>
        <h2 style={{fontSize: '2.2rem', marginBottom: '1.2rem', color: '#1976d2', textAlign: 'center'}}>About WeatherApp</h2>
        <p style={{fontSize: '1.15rem', textAlign: 'center', marginBottom: '2rem'}}>
          <b>WeatherApp</b> is a modern, responsive web application that delivers real-time weather updates, forecasts, and weather-related insights in a beautiful, user-friendly interface.<br/><br/>
          Designed for both desktop and mobile, it combines a visually engaging landing page, secure authentication, and a personalized dashboard experience.
        </p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', marginBottom: '2rem'}}>
          <div style={{textAlign: 'center'}}>
            <span style={{fontSize: '2.2rem'}}>⚛️</span>
            <div><b>React</b></div>
            <div style={{fontSize: '0.95rem', color: '#666'}}>Frontend UI</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <span style={{fontSize: '2.2rem'}}>⚡</span>
            <div><b>Vite</b></div>
            <div style={{fontSize: '0.95rem', color: '#666'}}>Fast Build Tool</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <span style={{fontSize: '2.2rem'}}>🎨</span>
            <div><b>HTML5 &amp; CSS3</b></div>
            <div style={{fontSize: '0.95rem', color: '#666'}}>Modern Layout &amp; Styles</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <span style={{fontSize: '2.2rem'}}>🟦</span>
            <div><b>JavaScript</b></div>
            <div style={{fontSize: '0.95rem', color: '#666'}}>Dynamic Interactivity</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <span style={{fontSize: '2.2rem'}}>🗄️</span>
            <div><b>MySQL</b></div>
            <div style={{fontSize: '0.95rem', color: '#666'}}>User Data Storage</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <span style={{fontSize: '2.2rem'}}>🔐</span>
            <div><b>Node.js &amp; Express</b></div>
            <div style={{fontSize: '0.95rem', color: '#666'}}>Backend API &amp; Auth</div>
          </div>
        </div>
        <ul style={{fontSize: '1.1rem', margin: '0 auto', maxWidth: '500px', color: '#1976d2', fontWeight: 500, listStyle: 'none', padding: 0, textAlign: 'center'}}>
          <li style={{marginBottom: '0.7rem'}}>🌦️ Beautiful weather image slider on the landing page</li>
          <li style={{marginBottom: '0.7rem'}}>🔗 Seamless navigation with React Router</li>
          <li style={{marginBottom: '0.7rem'}}>🔒 Secure login &amp; registration with MySQL backend</li>
          <li style={{marginBottom: '0.7rem'}}>📊 Personalized dashboard with weather info</li>
          <li style={{marginBottom: '0.7rem'}}>📱 Fully responsive &amp; mobile-friendly</li>
        </ul>
        <p style={{marginTop: '2.2rem', color: '#444', fontSize: '1.05rem', textAlign: 'center'}}>
          <b>WeatherApp</b> is a showcase of modern web development, blending performance, security, and design.<br/>
          <span style={{color: '#1976d2'}}>Enjoy exploring the weather, beautifully!</span>
        </p>
      </section>
    </div>
  </div>
);

export default About; 