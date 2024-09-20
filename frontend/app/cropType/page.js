// components/cropType.js
"use client"
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import fertilizerImage from '/public/assets/fertilizerRC.jpg';

const cropType = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
    soil: ''
  });
  const [crop, setCrop] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5001/predict', formData);
      setCrop(response.data.crop);
    } catch (error) {
      console.error('Error fetching the crop prediction:', error);
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
          <h1 className='text-center text-4xl font-bold text-black pt-6' id='services'>Crop Recommendation Engine</h1>
          <p className='text-center font-semibold text-lg text-black pt-6'>Not sure which is the best crop type for your soil?</p>
          <p className='text-center font-semibold text-lg text-black pb-6'>Check using our crop recommendation engine!</p>
          <div className='pb-8 bg-gray-50 mx-16 px-10 py-5 rounded-2xl'>
            <form onSubmit={handleSubmit}>
              <div className="form">
                <div className="item flex flex-col gap-1 my-5">
                  <label htmlFor="nitrogen" className='text-lg'>Nitrogen</label>
                  <input required className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="nitrogen" placeholder="Nitrogen" onChange={handleChange} />
                </div>
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="phosphorus" className='text-lg'>Phosphorus</label>
                  <input required className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="phosphorus" placeholder="Phosphorus" onChange={handleChange} />
                </div>
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="potassium" className='text-lg'>Potassium</label>
                  <input required className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="potassium" placeholder="Potassium" onChange={handleChange} />
                </div>
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="temperature" className='text-lg'>Temperature</label>
                  <input required className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="temperature" placeholder="Temperature" onChange={handleChange} />
                </div>
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="humidity" className='text-lg'>Humidity</label>
                  <input required className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="humidity" placeholder="Humidity" onChange={handleChange} />
                </div>
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="ph" className='text-lg'>pH</label>
                  <input required className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="ph" placeholder="pH" onChange={handleChange} />
                </div>
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="rainfall" className='text-lg'>Rainfall</label>
                  <input required className='appearance-none bg-transparent py-2 px-4 border-b-[1px] border-gray-500' type="number" name="rainfall" placeholder="Rainfall" onChange={handleChange} />
                </div>
                <div className="item flex flex-col gap-1 my-4">
                  <label htmlFor="soiltype" className='text-lg'>Soil Type</label>
                  <select name="soil" onChange={handleChange} className='py-2 px-4 bg-transparent cursor-pointer'>
                    <option value="">Select Soil Type</option>
                    <option value="Alluvial Soil">Alluvial Soil</option>
                    <option value="Black Soil">Black Soil</option>
                    <option value="Forest">Forest</option>
                    <option value="Laterite">Laterite</option>
                    <option value="Red Soil">Red Soil</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center bg-gray-50'>
                <button type="submit" className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Predict</button>
              </div>
            </form>
          </div>
          <div className='bg-gray-50 text-center mx-16 mt-5 rounded-2xl h-24'>
            <p className='text-2xl'>Recommended Crop</p>
            {crop && <><p className='text-lg'>{crop.charAt(0).toUpperCase() + crop.slice(1)}</p></>}
          </div>
        </div>
        <div className='py-5'></div>
      </div>
    </>
  );
};

export default cropType;
