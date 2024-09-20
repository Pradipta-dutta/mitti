import React from 'react'
import Image from 'next/image';
import farmersImage from '/public/assets/farmers.jpg';
const Contactus = () => {
    return (
        <div className="relative min-h-screen">
            <Image
                src={farmersImage}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-white opacity-40 z-10"></div>
            <div className='z-20 relative mx-16 pb-10 h-[100%]' id="contactus">
                <h1 className='text-center text-6xl font-bold mb-5 text-blue-800 pt-8'>Contact Us</h1>
                <h2 className='text-center font-semibold text-2xl text-blue-600 pb-6'>We would love to hear from you!</h2>
                <div className="bg-gray-50 px-10 flex justify-around items-center rounded-2xl py-4">
                    <div className="info w-1/2">
                        <div>For inquiries, support, or feedback, please reach out to us through the following channels:</div>
                        <div className="items flex items-center gap-3 my-4">
                            <div className="icons">
                                <div>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/ebjjjrhp.json"
                                        trigger="hover"
                                        colors="primary:#000000,secondary:#000000"
                                        style={{ width: 50, height: 50 }}>
                                    </lord-icon>
                                </div>
                            </div>
                            <div className="content flex flex-col justify-center">
                                <h1 className='font-semibold text-2xl text-blue-500'>Email</h1>
                                <div className='text-[#36454F]'>support@mitti.com</div>
                            </div>
                        </div>
                        <div className="items flex items-center gap-3 my-4">
                            <div className="icons">
                                <div className=''>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/fbijksqq.json"
                                        trigger="hover"
                                        colors="primary:#000000,secondary:#000000"
                                        style={{ width: 50, height: 50 }}>
                                    </lord-icon>
                                </div>
                            </div>
                            <div className="content flex flex-col justify-center">
                                <h1 className='font-semibold text-2xl text-blue-500'>Phone</h1>
                                <div className='text-[#36454F]'>+123-456-7890</div>
                            </div>
                        </div>
                        <div className="items flex items-center gap-3 my-4">
                            <div className="icons">
                                <div className=''>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/surcxhka.json"
                                        trigger="hover"
                                        colors="primary:#000000,secondary:#000000"
                                        style={{ width: 50, height: 50 }}>
                                    </lord-icon>
                                </div>
                            </div>
                            <div className="content flex flex-col justify-center">
                                <h1 className='font-semibold text-2xl text-blue-500'>Address</h1>
                                <div className='text-[#36454F]'>Krishi Bhawan, New Delhi, India</div>
                            </div>
                        </div>
                        <div className="items flex items-center gap-3 my-4">
                            <div className="icons">
                                <div className=''>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/qvyppzqz.json"
                                        trigger="hover"
                                        colors="primary:#000000,secondary:#000000"
                                        style={{ width: 50, height: 50 }}>
                                    </lord-icon>
                                </div>
                            </div>
                            <div className="content flex flex-col justify-center">
                                <h1 className='font-semibold text-2xl text-blue-500'>Business Hours</h1>
                                <div className='text-[#36454F]'><div>Monday - Friday: 9:00 AM - 6:00 PM</div><div>Saturday: 10:00 AM - 2:00 PM</div><div>Sunday: Closed</div></div>
                            </div>
                        </div>
                    </div>
                    <div className="forms w-1/2 flex flex-col px-10">
                        <h1 className='font-semibold text-2xl text-blue-500 text-center'>Send Message</h1>
                        <form action="/submit" method="get">
                            <div className="name my-5">
                                <input type="text" id="name" name="name" required placeholder='Name' className='border-gray-600 border-t-0 border-r-0 border-l-0 bg-transparent border-b-[1px] w-full py-4 outline-none' />
                            </div>
                            <div className="email my-5">
                                <input type="text" id="email" name="email" required placeholder='Email' className='border-gray-600 border-t-0 border-r-0 border-l-0 bg-transparent border-b-[1px] w-full py-4 outline-none' />
                            </div>
                            <div className="email my-5">
                                <textarea id="message" name="message" required placeholder='Enter your message' className='border-gray-600 border-t-0 border-r-0 border-l-0 bg-transparent border-b-[1px] w-full pt-4 outline-none min-h-28'></textarea>
                            </div>
                            <div className="button flex items-center justify-center">
                                <button className='rounded-full bg-blue-500 text-white px-6 py-3'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus