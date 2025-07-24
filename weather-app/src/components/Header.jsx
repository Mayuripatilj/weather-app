import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user data on mount
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    // Listen for storage changes (when user logs in/out)
    const handleStorageChange = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    };

    // Listen for custom auth events
    const handleAuthChange = () => {
      handleStorageChange();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('authChange'));
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <span role="img" aria-label="weather">⛅</span> WeatherApp
          </div>
          <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Project</NavLink>
            {user ? (
              <button onClick={handleLogout} className="nav-logout-btn">Logout</button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 