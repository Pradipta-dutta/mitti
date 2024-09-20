"use client"
import { useEffect, useState } from 'react';

const Next10days = () => {
  const [forecastData, setForecastData] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    // Fetch the user's current location
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            // Fetch weather data for current location
            try {
              const response = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
              const data = await response.json();
              setForecastData(data.forecast); // Set forecast data
            } catch (error) {
              console.error('Failed to fetch weather data', error);
              setLocationError('Unable to fetch weather data');
            }
          },
          (error) => {
            console.error('Error getting location', error);
            setLocationError('Unable to retrieve your location');
          }
        );
      } else {
        setLocationError('Geolocation is not supported by your browser');
      }
    };

    fetchLocation();
  }, []);

  // Render the weather forecast or error message
  return (
    <div>
      <h1>10-Day Weather Forecast</h1>
      {locationError && <p>{locationError}</p>}
      {!forecastData ? (
        <p>Loading weather data...</p>
      ) : (
        <div>
          {forecastData.map((day, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h3>Day {index + 1}: {day.date}</h3>
              <p>Max Temp: {day.temperatureMax}°C</p>
              <p>Min Temp: {day.temperatureMin}°C</p>
              <p>Precipitation: {day.precipitation} mm</p>
              <p>Max Wind Speed: {day.windSpeedMax} km/h</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Next10days;
