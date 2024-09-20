// route.js
import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  if (!lat || !lon) {
    return new Response('Latitude and Longitude are required', { status: 400 });
  }

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: apiKey,
        units: 'metric' // Use 'imperial' for Fahrenheit
      }
    });

    const weatherData = {
      temperature: response.data.main.temp,
      windSpeed: (response.data.wind.speed * 3.6).toFixed(1), // Convert m/s to km/h
      precipitation: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      rainfall: response.data.rain ? response.data.rain['1h'] || 0 : 0, // Rainfall in the last hour
      snow: response.data.snow ? response.data.snow['1h'] || 0 : 0, // Snowfall in the last hour
      sunrise: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString(), // Sunrise time
      sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString(), // Sunset time
      cloudiness: response.data.clouds.all, // Cloudiness percentage
      visibility: response.data.visibility / 1000, // Visibility in kilometers
      pressure: response.data.main.pressure, // Atmospheric pressure in hPa
      weatherIcon: response.data.weather[0].icon // Weather icon code
    };

    return new Response(JSON.stringify(weatherData), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch weather data', { status: 500 });
  }
}
