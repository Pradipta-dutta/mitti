import React from 'react'
import Image from 'next/image';
import cropImage from '/public/assets/crop1.jpg';
import Link from 'next/link';

const Introduction = () => {
    return (
        <div className="relative h-screen">
            <Image
                src={cropImage}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
            />

            <div className="absolute inset-0 bg-white opacity-40 z-10"></div>
            <div className="content relative z-20 flex flex-col justify-center gap-5 h-[100%] mx-4">
                <h1 className='text-7xl font-bold text-pink-900'>Boost Your Yield</h1>
                <p className='text-2xl text-slate-900 font-sans'>Increase your crop productivity with sustainable fertilizer usage</p>
                <span>
                    <Link href="/dashboard"><button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button></Link>
                </span>
            </div>
        </div>
    )
}

export default Introduction