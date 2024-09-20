import React from 'react'
import Image from 'next/image';
import cropFeatures from '/public/assets/crop_features.jpg';
import aiImage from '/public/assets/ai.jpg';
import updateImage from '/public/assets/update.jpg';
import dataImage from '/public/assets/data.jpg';

const Features = () => {
    return (
        <>
            <div className='min-h-screen relative'>
                <Image
                    src={cropFeatures}
                    alt="Crop Features"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="absolute inset-0"
                />
                <div class="absolute inset-0 bg-white opacity-40 z-10"></div>
                <section className='relative z-20'>
                    <h1 className='text-5xl font-bold text-[#0e2330] text-center pt-10 mb-4'>Why Mitti?</h1>
                    <h2 className='text-center font-semibold text-2xl text-[#1a3347] pb-6'>Discover what sets us apart and why we’re your ideal choice</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center pb-4">
                        <div className="item w-72 flex flex-col justify-center items-center px-3 rounded-3xl hover: cursor-pointer hover:scale-105 transition-all self-start backdrop-blur-sm py-4">
                            <div className="image">
                                <Image
                                    src={aiImage}
                                    alt="AI Image"
                                    width={300}
                                    layout='responsive'
                                    height={300}
                                    className='rounded-xl'
                                />
                            </div>
                            <div className="content flex flex-col justify-center items-center">
                                <h3 className='text-center text-3xl mt-3 font-bold text-[#1e425a]'>AI-Powered Recommendations</h3>
                                <p className='text-center text-lg'>Optimize choices with smart data-driven recommendations</p>
                            </div>
                        </div>
                        <div className="item w-72 flex flex-col justify-center items-center px-3 rounded-3xl hover: cursor-pointer hover:scale-105 transition-all self-start backdrop-blur-sm py-4">
                            <div className="image">
                                <Image
                                    src={updateImage}
                                    alt="Update Image"
                                    width={250}
                                    layout='responsive'
                                    height={300}
                                    className='rounded-xl'
                                />
                            </div>
                            <div className="content flex flex-col">
                                <h3 className='text-center text-3xl mt-3 font-bold text-[#1e425a]'>Real-Time Updates</h3>
                                <p className='text-center text-lg'>Stay informed with the latest updates in real-time</p>
                            </div>
                        </div>
                        <div className="item w-72 flex flex-col justify-center items-center px-3 rounded-3xl hover: cursor-pointer hover:scale-105 transition-all self-start backdrop-blur-sm py-4">
                            <div className="image">
                                <Image
                                    src={dataImage}
                                    alt="Data Image"
                                    width={450}
                                    layout='responsive'
                                    height={300}
                                    className='rounded-xl'
                                />
                            </div>
                            <div className="content flex flex-col">
                                <h3 className='text-center text-3xl mt-3 font-bold text-[#1e425a]'>Data-Driven Insights</h3>
                                <p className='text-center text-lg'>Leverage insights derived from comprehensive data analysis</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Features