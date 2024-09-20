"use client"
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import fertilizerImage from '/public/assets/fertilizerRC.jpg';

export default function FertilizerForm() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: ''
  });
  
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5002/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setResult(null);
      } else {
        setResult(data.fertilizer);
        setError(null);
      }
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  return (
    <>
      <div className="relative min-h-screen">
        <Image
          src={fertilizerImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        <div className="absolute inset-0 bg-white opacity-10 z-10"></div>
        <div className="z-20 relative">
          <h1 className='text-center text-4xl font-bold text-black pt-6' id='services'>Fertilizer Recommendation</h1>
          <p className='text-center font-semibold text-lg text-black pt-6'>Enter soil nutrient values to get fertilizer recommendations.</p>
          <div className='pb-8 bg-gray-50 mx-16 px-10 py-5 rounded-2xl'>
            <form onSubmit={handleSubmit}>
              <div className="form">
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="nitrogen" className='text-lg'>Nitrogen</label>
                  <input className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="nitrogen" value={formData.nitrogen} onChange={handleChange} required />
                </div>
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="phosphorus" className='text-lg'>Phosphorus</label>
                  <input className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="phosphorus" value={formData.phosphorus} onChange={handleChange} required />
                </div>
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="potassium" className='text-lg'>Potassium</label>
                  <input className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="potassium" value={formData.potassium} onChange={handleChange} required />
                </div>
              </div>
              <div className='flex flex-col items-center justify-center bg-gray-50'>
                <button type="submit" className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Predict</button>
              </div>
            </form>
          </div>
          <div className='bg-gray-50 text-center mx-16 mt-5 rounded-2xl h-24'>
            <p className='text-2xl'>Recommended Fertilizer</p>
            {result && <><p className='text-lg'>{result.charAt(0).toUpperCase() + result.slice(1)}</p></>}
            {error && <p className='text-red-500'>{error}</p>}
          </div>
        </div>
        <div className='py-5'></div>
      </div>
    </>
  );
}
