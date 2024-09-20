import React from 'react'
import Image from 'next/image'
import cropImage from '/public/assets/croptry.jpg';
import soilHealthImage from '/public/assets/soil-health.jpg'
import fertilizerImage from '/public/assets/fertilizer.jpg';
import advicingImage from '/public/assets/advicing.jpg';

const Services = () => {
    return (
        <div className="relative min-h-screen">
            <Image
                src={cropImage}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
                priority
            />
            <div class="absolute inset-0 bg-white opacity-40 z-10"></div>
            <section className='relative z-20'>
                <h1 className='text-center text-6xl font-bold mb-4 text-amber-950 pt-8' id='services'>Our Services</h1>
                <h2 className='text-center font-semibold text-2xl text-amber-900 pb-6'>Explore our comprehensive solutions tailored to your needs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center pb-7">
                    <div className="item w-72 flex flex-col justify-center items-center px-3 rounded-3xl hover: cursor-pointer hover:scale-105 transition-all self-start backdrop-blur-sm py-4">
                        <div className="image">
                            <Image
                                src={soilHealthImage}
                                alt="Soil Health"
                                width={300}
                                height={200}
                                className='rounded-xl'
                            />
                        </div>
                        <div className="content flex flex-col justify-center items-center">
                            <h3 className='text-center text-3xl mt-3 font-bold text-amber-800'>Soil Health Analysis</h3>
                            <p className='text-center text-lg'>Analyzes soil samples to determine nutrient levels, optimizing fertilizer usage for healthier and more productive crops.</p>
                        </div>
                    </div>
                    <div className="item w-72 flex flex-col justify-center items-center px-3 rounded-3xl hover: cursor-pointer hover:scale-105 transition-all self-start backdrop-blur-sm py-4">
                        <div className="image">
                            <Image
                                src={fertilizerImage}
                                alt="Fertilizer"
                                width={300}
                                height={200}
                                className='rounded-xl'
                            />
                        </div>
                        <div className="content flex flex-col">
                            <h3 className='text-center text-3xl mt-3 font-bold text-amber-800'>Fertilizer Recommendation Engine</h3>
                            <p className='text-center text-lg'>Provides tailored fertilizer recommendations based on soil health, crop type, and weather to boost yield and sustainability</p>
                        </div>
                    </div>
                    <div className="item w-72 flex flex-col justify-center items-center px-3 rounded-3xl hover: cursor-pointer hover:scale-105 transition-all self-start backdrop-blur-sm py-4">
                        <div className="image">
                            <Image
                                src={advicingImage}
                                alt="Advicing"
                                width={300}
                                height={200}
                                className='rounded-xl'
                            />
                        </div>
                        <div className="content flex flex-col">
                            <h3 className='text-center text-3xl mt-3 font-bold text-amber-800'>Crop Type & Weather Integration</h3>
                            <p className='text-center text-lg'>Integrates crop type and weather data to deliver precise fertilizer recommendations, enhancing growth and efficiency</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services