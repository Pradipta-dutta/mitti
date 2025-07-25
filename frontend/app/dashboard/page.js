'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import ModernCard from '../components/ModernCard';
import ModernButton from '../components/ModernButton';
import { 
  ThermometerIcon,
  CloudIcon,
  EyeIcon,
  BeakerIcon,
  SparklesIcon,
  DocumentChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather(lat, lon) {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
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
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    }
    getCurrentLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-earth-900 dark:via-earth-900 dark:to-earth-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-earth-900 dark:text-earth-100 mb-2">
            Farm Dashboard
          </h1>
          <p className="text-earth-600 dark:text-earth-400 text-lg">
            Real-time insights for your sustainable farming operations
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* Weather Cards */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-earth-900 dark:text-earth-100 mb-6">
            Current Weather Conditions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModernCard
              title="Temperature"
              value={weather?.temperature || '--'}
              unit="°C"
              icon={ThermometerIcon}
              color="warning"
              loading={loading}
              trend="up"
              trendValue="+2°"
            />
            <ModernCard
              title="Rainfall"
              value={weather?.rainfall || '--'}
              unit="mm"
              icon={CloudIcon}
              color="info"
              loading={loading}
            />
            <ModernCard
              title="Wind Speed"
              value={weather?.windSpeed || '--'}
              unit="km/h"
              icon={EyeIcon}
              color="secondary"
              loading={loading}
            />
            <div className="flex items-center justify-center">
              <ModernButton
                href="/weather"
                variant="outline"
                size="lg"
                icon={ArrowRightIcon}
                iconPosition="right"
                className="w-full h-full min-h-[120px] flex-col space-y-2"
              >
                <span className="text-lg font-semibold">View All</span>
                <span className="text-sm opacity-75">Weather Data</span>
              </ModernButton>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div>
          <h2 className="text-xl font-semibold text-earth-900 dark:text-earth-100 mb-6">
            Smart Agriculture Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Soil Health Analysis */}
            <div className="group relative bg-white dark:bg-earth-800 rounded-xl border border-earth-200 dark:border-earth-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10" />
              <div className="relative p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <BeakerIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-earth-900 dark:text-earth-100">
                    Soil Health Analysis
                  </h3>
                </div>
                <p className="text-earth-600 dark:text-earth-400 mb-6 leading-relaxed">
                  Analyze key soil parameters including NPK levels, pH, and moisture content for optimal fertilizer recommendations and sustainable farming practices.
                </p>
                <ModernButton
                  href="/soilHealth"
                  variant="primary"
                  size="md"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  className="w-full"
                >
                  Analyze Soil
                </ModernButton>
              </div>
            </div>

            {/* Fertilizer Recommendations */}
            <div className="group relative bg-white dark:bg-earth-800 rounded-xl border border-earth-200 dark:border-earth-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-primary-500/5 dark:from-secondary-500/10 dark:to-primary-500/10" />
              <div className="relative p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                    <SparklesIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-earth-900 dark:text-earth-100">
                    Fertilizer Engine
                  </h3>
                </div>
                <p className="text-earth-600 dark:text-earth-400 mb-6 leading-relaxed">
                  Get AI-powered fertilizer recommendations based on soil health, crop type, and weather patterns to maximize yield and sustainability.
                </p>
                <ModernButton
                  href="/fertilizerType"
                  variant="secondary"
                  size="md"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  className="w-full"
                >
                  Get Recommendations
                </ModernButton>
              </div>
            </div>

            {/* Crop Type Integration */}
            <div className="group relative bg-white dark:bg-earth-800 rounded-xl border border-earth-200 dark:border-earth-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 dark:from-green-500/10 dark:to-blue-500/10" />
              <div className="relative p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <DocumentChartBarIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-earth-900 dark:text-earth-100">
                    Crop Recommendations
                  </h3>
                </div>
                <p className="text-earth-600 dark:text-earth-400 mb-6 leading-relaxed">
                  Discover the best crop varieties for your soil conditions and climate, integrating weather data for optimal agricultural planning.
                </p>
                <ModernButton
                  href="/cropType"
                  variant="outline"
                  size="md"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  className="w-full"
                >
                  Find Best Crops
                </ModernButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
