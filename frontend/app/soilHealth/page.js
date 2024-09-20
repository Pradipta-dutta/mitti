"use client"
import { useState } from 'react';
import Image from 'next/image';
import soilHealthImage from '/public/assets/soilHealth.jpg'; // Adjust the path if necessary

export default function SoilHealthChecker() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: ''
  });

  const [healthStatus, setHealthStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nitrogen = parseFloat(formData.nitrogen);
    const phosphorus = parseFloat(formData.phosphorus);
    const potassium = parseFloat(formData.potassium);

    let status = '';

    if (nitrogen > 200 && phosphorus > 150 && potassium > 150) {
      status = 'Soil is too rich in nutrients, it might not be suitable for all crops!';
    } else if (nitrogen < 50 || phosphorus < 30 || potassium < 30) {
      status = 'Soil is lacking nutrients, consider using fertilizers!';
    } else {
      status = 'Soil is healthy and good for growing crops!';
    }

    setHealthStatus(status);
  };

  return (
    <div className="relative min-h-screen">
      <Image
        src={soilHealthImage}
        alt="Soil Health Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      <div className="absolute inset-0 bg-white opacity-10 z-10"></div>
      <div className="z-20 relative">
        <h1 className='text-center text-4xl font-bold text-black pt-6'>Soil Health Checker</h1>
        <div className='pb-8 bg-gray-50 mx-16 px-10 py-5 rounded-2xl'>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="item flex flex-col gap-1 my-4">
                <label htmlFor="nitrogen" className='text-lg'>Nitrogen (N)</label>
                <input
                  className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500'
                  type="number"
                  name="nitrogen"
                  value={formData.nitrogen}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="item flex flex-col gap-1 my-4">
                <label htmlFor="phosphorus" className='text-lg'>Phosphorus (P)</label>
                <input
                  className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500'
                  type="number"
                  name="phosphorus"
                  value={formData.phosphorus}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="item flex flex-col gap-1 my-4">
                <label htmlFor="potassium" className='text-lg'>Potassium (K)</label>
                <input
                  className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500'
                  type="number"
                  name="potassium"
                  value={formData.potassium}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='flex flex-col items-center justify-center bg-gray-50'>
                <button
                  type="submit"
                  className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Check Soil Health
                </button>
              </div>
              </div>
            </form>
          </div>
          <div className='bg-gray-50 text-center mx-16 mt-5 rounded-2xl h-24'>
            <p className='text-2xl'>Soil Health Status</p>
            {healthStatus && <p className='text-lg'>{healthStatus}</p>}
          </div>
        </div>
        <div className='py-5'></div>
      </div>
  );
}
