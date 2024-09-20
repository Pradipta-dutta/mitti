'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import weatherImage from '/public/assets/weather.jpg';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather(lat, lon) {
      try {
        const res = await axios.get('/api/weather', {
          params: {
            lat,
            lon
          }
        });
        if (res.status === 200) {
          setWeather(res.data);
        } else {
          setError('Error fetching weather data: ' + res.statusText);
        }
      } catch (error) {
        setError('Error fetching weather data: ' + (error.response ? error.response.data : error.message));
        console.error('Error fetching weather data:', error);
      }
    }

    function getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          error => {
            setError('Error getting location: ' + error.message);
            console.error('Error getting location:', error);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    }
    getCurrentLocation();
  }, []);

  return (
    <div className="relative h-screen">
      <Image
        src={weatherImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-white opacity-40 z-10"></div>
      <div className="relative z-20">
        <h1 className='text-center text-5xl font-bold py-6'>Weather updates of your area</h1>
        {error && <p>{error}</p>}
        {weather ? (
          <div className="card flex flex-wrap gap-10 justify-center items-center">
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-sky-200 to-sky-300">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
                  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
                  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
                </svg>
              </span>
              <div className="info">
                <div className='text-2xl'>{weather.temperature !== undefined ? weather.temperature + ' °C' : (<div className='flex justify-center items-center'>
                  <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
                </div>)}</div>
                <div className='text-slate-500 font-semibold'>Temperature</div>
              </div>
            </div>
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-green-200 to-green-300">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z" />
                </svg>
              </span>
              <div className="info">
                <div className='text-2xl'>{weather.humidity !== undefined ? weather.humidity + ' %' : (<div className='flex justify-center items-center'>
                  <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
                </div>)}</div>
                <div className='text-slate-500 font-semibold'>Humidity</div>
              </div>
            </div>
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-yellow-100 to-yellow-200">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-drizzle-fill" viewBox="0 0 16 16">
                  <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973" />
                </svg>
              </span>
              <div className="info">
                <div className='text-2xl'>{weather.rainfall !== undefined ? weather.rainfall + ' mm' : (<div className='flex justify-center items-center'>
                  <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
                </div>)}</div>
                <div className='text-slate-500 font-semibold'>Rainfall</div>
              </div>
            </div>
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-cyan-100 to-cyan-300">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-fill" viewBox="0 0 16 16">
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
                </svg>
              </span>
              <div className="info">
                <div className='text-2xl'>{weather.cloudiness !== undefined ? weather.cloudiness + ' %' : (<div className='flex justify-center items-center'>
                  <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
                </div>)}</div>
                <div className='text-slate-500 font-semibold'>Cloudiness</div>
              </div>
            </div>
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-teal-200 to-teal-300">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>
              </span>
              <div className="info">
                <div className='text-2xl'>{weather.visibility !== undefined ? weather.visibility + ' m' : (<div className='flex justify-center items-center'>
                  <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
                </div>)}</div>
                <div className='text-slate-500 font-semibold'>Visibility</div>
              </div>
            </div>
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-rose-200 to-rose-300">
              <span>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 18C21 18 19.8096 17.5305 19 17.3021C13.8797 15.8574 10.1203 20.1426 5 18.6979C4.19041 18.4695 3 18 3 18M21 12C21 12 19.8096 11.5305 19 11.3021C13.8797 9.85739 10.1203 14.1426 5 12.6979C4.19041 12.4695 3 12 3 12M21 6C21 6 19.8096 5.53048 19 5.30206C13.8797 3.85739 10.1203 8.14261 5 6.69794C4.19041 6.46952 3 6 3 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <div className="info">
                <div className='text-2xl'>{weather.pressure !== undefined ? weather.pressure + ' hPa' : (<div className='flex justify-center items-center'>
                  <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
                </div>)}</div>
                <div className='text-slate-500 font-semibold'>Pressure</div>
              </div>
            </div>
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-stone-200 to-stone-300">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                </svg>
              </span>
              <div className="info">
                <div className='text-2xl'>{weather.windSpeed !== undefined ? weather.windSpeed + ' km/h' : (<div className='flex justify-center items-center'>
                  <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
                </div>)}</div>
                <div className='text-slate-500 font-semibold'>Windspeed</div>
              </div>
            </div>
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-lime-200 to-lime-300">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-snow-fill" viewBox="0 0 16 16">
                  <path d="M2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m2.75 2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m-2.75-2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m-.22-7.223a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973" />
                </svg>
              </span>
              <div className="info">
                <div className='text-2xl'>{weather.snow !== undefined ? weather.snow + ' mm' : (<div className='flex justify-center items-center'>
                  <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
                </div>)}</div>
                <div className='text-slate-500 font-semibold'>Snowfall</div>
              </div>
            </div>
          </div>
        ) : (
          (<div className='flex justify-center items-center'>
            <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
          </div>)
        )}
      </div>
    </div>
  );
}
