import { useState } from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  const cities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
    'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte',
    'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington'
  ];

  const handleSubmit = () => {
    if (!selectedCity) {
      alert('Please select a city');
      return;
    }
    
    setLoading(true);
    setShowWeather(false); // Hide weather info when submitting new city
    setSelectedDate(''); // Reset date selection
    
    // Simulate API call - replace with real weather API later
    setTimeout(() => {
      const mockWeatherData = {
        city: selectedCity,
        temperature: Math.floor(Math.random() * 40) + 20, // Random temp between 20-60°F
        condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Clear'][Math.floor(Math.random() * 5)],
        windSpeed: Math.floor(Math.random() * 20) + 5 + ' mph'
      };
      
      setWeatherData(mockWeatherData);
      setLoading(false);
    }, 1000);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowWeather(true); // Show weather info when date is selected
  };

  // Get background class based on weather condition
  const getBackgroundClass = () => {
    if (weatherData && showWeather) {
      const condition = weatherData.condition.toLowerCase();
      if (condition.includes('sunny')) return 'dashboard-sunny';
      if (condition.includes('cloudy')) return 'dashboard-cloudy';
      if (condition.includes('rainy')) return 'dashboard-rainy';
      if (condition.includes('clear')) return 'dashboard-clear';
    }
    return '';
  };

  return (
    <div className={`main-content ${getBackgroundClass()}`}>
      <div className="container">
        <section className="page">
          <p>Welcome{user ? `, ${user.email}` : ''}! Here is your personalized weather dashboard.</p>
          
          {/* Weather Prediction Box */}
          <div className="weather-prediction-box">
            <h3>Weather Prediction</h3>
            
            {/* City Selection */}
            <div className="form-group">
              <label htmlFor="city-select">Select City:</label>
              <select 
                id="city-select"
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="city-select"
              >
                <option value="">Choose a city...</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit} 
              disabled={!selectedCity || loading}
              className="submit-btn"
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>

            {/* Date Selection */}
            <div className="date-selection">
              <label>Select Date:</label>
              <div className="date-options">
                <button 
                  className={`date-btn ${selectedDate === 'yesterday' ? 'active' : ''}`}
                  onClick={() => handleDateSelect('yesterday')}
                  disabled={!weatherData}
                >
                  Yesterday
                </button>
                <button 
                  className={`date-btn ${selectedDate === 'today' ? 'active' : ''}`}
                  onClick={() => handleDateSelect('today')}
                  disabled={!weatherData}
                >
                  Today
                </button>
                <button 
                  className={`date-btn ${selectedDate === 'tomorrow' ? 'active' : ''}`}
                  onClick={() => handleDateSelect('tomorrow')}
                  disabled={!weatherData}
                >
                  Tomorrow
                </button>
              </div>
            </div>

            {/* Weather Information Display */}
            {showWeather && weatherData && (
              <div className="weather-info">
                <h4>{weatherData.city}</h4>
                <div className="temperature">{weatherData.temperature}°F</div>
                <div className="condition">{weatherData.condition}</div>
                <div className="wind-speed">Wind Speed: {weatherData.windSpeed}</div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard; 