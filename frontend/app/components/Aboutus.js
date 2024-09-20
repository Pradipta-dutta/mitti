import React from 'react'
import Image from 'next/image'
import aboutImage from '/public/assets/about.jpg';
import ministryImage from '/public/assets/ministryGov.svg';

const Aboutus = () => {
    return (
        <>
            <div className='min-h-screen relative'>
                <Image
                    src={aboutImage}
                    alt="About Background"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
                <div class="absolute inset-0 bg-white opacity-40 z-10"></div>
                <section className='relative z-20'>
                    <h1 className='text-center text-6xl font-bold mb-5 text-blue-900 pt-8'>About Us</h1>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mx-5 sm:mx-10 justify-center items-center">
                        <section className="left text-lg font-semibold">
                            <p>Our mission is to revolutionize agricultural practices with data-driven solutions. <b>The Sustainable Fertilizer Usage Optimizer for Higher Yield</b> addresses soil degradation and reduced productivity caused by improper fertilizer use, which affects both soil health and farmers' incomes.</p> <p>Excessive fertilizer use degrades soil and hampers crop yield, negatively impacting farmers’ financial stability. Our application aims to optimize fertilizer usage by analyzing soil data, crop types, and weather patterns to provide tailored recommendations for effective fertilizer application.</p> <p>Supported by the <b>Ministry of Agriculture and Farmers Welfare</b> and in collaboration with the <b>University of Agricultural Sciences, Dharwad (UASD)</b> and the <b>Indian Council of Agricultural Research</b>, our project is focused on enhancing agricultural productivity while promoting sustainability.</p> <p>Falling under the Software category and aligning with Agriculture, FoodTech, & Rural Development themes, we are dedicated to advancing agriculture through innovation and sustainable practices.</p>
                        </section>
                        <section className="right flex flex-col gap-5 justify-center items-center">
                            <a href="https://agriwelfare.gov.in/" target='_blank'><Image src={ministryImage} alt="" width={1000} /></a>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Aboutus