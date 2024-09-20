'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import soilHealthImage from '/public/assets/soil-health.jpg'
import dashboardImage from '/public/assets/dashboard.jpg'
import fertilizerImage from '/public/assets/fertilizer.jpg';
import advicingImage from '/public/assets/advicing.jpg';

export default function Dashboard() {
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
    <div className="relative min-h-screen">
      <Image
        src={dashboardImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-white opacity-40 z-10"></div>
      <div className="relative z-20">
        {error && <p>{error}</p>}
        {weather ? (
          <div className="card flex flex-wrap gap-10 justify-center items-center pt-8">
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-yellow-100 to-orange-300">
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
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-sky-200 to-blue-400">
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
            <div className="item w-64 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-[#e5e7eb] to-[#9ca3af]">
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
            <div className="item w-48 flex flex-col gap-3 justify-center py-5 px-10 rounded-3xl h-40 bg-gradient-to-br from-emerald-200 to-teal-400">
              <Link href="/weather"><div className="info flex gap-1 items-center justify-center">
                <div className='text-2xl'>See all</div>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg></span>
              </div></Link>
            </div>
          </div>
        ) : (
          (<div className='flex h-48 justify-center items-center py-10'>
            <div className='w-8 h-8 border-4 border-cyan-500 border-t-transparent border-solid rounded-full animate-spin'></div>
          </div>)
        )}
        <section className="cardFeatures py-8 mx-10 flex flex-wrap justify-center gap-14">
          <Link href="/soilHealth"><div className="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-72 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <Image
                className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                src={soilHealthImage}
                alt="investment-seed-round"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Soil Health Analysis
              </h6>
              <p className="text-slate-600 leading-normal font-light">
              Soil health analysis focuses on key parameters, like nutrient levels such as nitrogen (N), phosphorus (P), and potassium (K), along with pH, and moisture. This ensures optimal fertilizer use, promoting sustainable farming and improving crop yields.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Check Now
              </button>
            </div>
          </div></Link>
          <Link href="/fertilizerType"><div className="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-72 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <Image
                className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                src={fertilizerImage}
                alt="investment-seed-round"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Fertilizer Recommendation Engine
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The fertilizer recommendation engine uses soil data, crop type, and weather patterns to recommend the fertilizer types and amounts. This enhances resource use, supports sustainable farming, and improves crop yields.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Check Now
              </button>
            </div>
          </div></Link>
          <Link href="/cropType"><div className="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-72 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <Image
                className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                src={advicingImage}
                alt="investment-seed-round"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              Crop Type & Weather Integration
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                Crop type and weather integration considers plant species and climate conditions to optimize growth. This approach adjusts farming practices, ensures efficient resource use, and boosts overall crop performance.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Check Now
              </button>
            </div>
          </div></Link>
        </section>
      </div>
    </div>
  );
}
