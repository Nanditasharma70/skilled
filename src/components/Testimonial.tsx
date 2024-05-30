import React from 'react'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLinkedin} from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonial = () => {

    return (

        <div>


            <section className="text-gray-600 body-font">
            <div className="flex flex-col justify-center items-center p-5">
      <span className='text-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-800'>OUR TESTIOMONIALS</span>
    <h1 className="text-4xl font-bold bg-clip-text bg-black text-transparent ">Voices Of Success: 
 <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>Our Community's Testimonials </span></h1>
  </div>
                <div className="container px-10 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 lg:mb-0 p-5 h-full text-start ">
                            <div className="relative card rounded-r-2xl  rounded-bl-2xl border shadow-lg shadow-gray-300/50 p-10 m-2">
                            <FaQuoteLeft className='text-orange-500 my-3'/>
                                <h2 className='text-black font-bold'>Happy with program content and career support</h2>

                                <p className="leading-relaxed text-gray-800 ">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                                    taxidermy 90's cronut +1 kinfolk. Lorem ipsum dolor sit amet.....<button  className='text-blue-900 font-medium underline cursor-pointer'><a href="/">Read More </a></button>
                                     </p>
                               <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-4 mb-2" />

                               <a href="https://www.linkedin.com/in/nandita-sharma70/" rel="nofollow" target="_blank" className="flex xs:gap-spacing10 md:gap-spacing8 items-center md:text-title3 xs:text-underlineNormal cursor-pointer font-medium text-left md:-tracking-0.18 xs:-tracking-0.14 w-fit text-linkedin"><span className="text-sky-800 xs:text-underlineNormal underline">LinkedIn</span>  <FaLinkedin className='text-sky-700 text-2xl' /></a>

                                <div className="absolute bg-white border-b border-r h-7 w-7  xs:left-14 md:left-72px  -bottom-3 left-24 rotate-45"></div>
                            </div>
                            <div className='flex gap-4  items-center justify-start p-5  '>
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20  object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://skilledup.s3.ap-south-1.amazonaws.com/images/review_profiles/vaibhav-rawat.jpg"
                                />
                                <div className='text-start'>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        HENRY LETHAM
                                    </h2>
                                    <p className="text-gray-500">CTO at Accenture</p>

                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-5 h-full text-start ">
                            <div className="relative card rounded-r-2xl  rounded-bl-2xl border shadow-lg shadow-gray-300/50 p-10 m-2">
                            <FaQuoteLeft className='text-orange-500 my-3'/>
                                <h2 className='text-black font-bold'>Happy with program content and career support</h2>

                                <p className="leading-relaxed text-gray-800 ">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                                    taxidermy 90's cronut +1 kinfolk. Lorem ipsum dolor sit amet.....<button  className='text-blue-900 hover:text-orange-500 font-medium underline cursor-pointer'><a href="/">Read More </a></button>
                                     </p>
                               <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-4 mb-2" />

                               <a href="https://www.linkedin.com/in/nandita-sharma70/" rel="nofollow" target="_blank" className="flex xs:gap-spacing10 md:gap-spacing8 items-center md:text-title3 xs:text-underlineNormal cursor-pointer font-medium text-left md:-tracking-0.18 xs:-tracking-0.14 w-fit text-linkedin"><span className="text-sky-800 xs:text-underlineNormal underline">LinkedIn</span>  <FaLinkedin className='text-sky-700 text-2xl' /></a>

                                <div className="absolute bg-white border-b border-r h-7 w-7  xs:left-14 md:left-72px  -bottom-3 left-24 rotate-45"></div>
                            </div>
                            <div className='flex gap-4  items-center justify-start p-5  '>
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20  object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://skilledup.s3.ap-south-1.amazonaws.com/images/review_profiles/puneet-mishra.jpg"
                                />
                                <div className='text-start'>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        HENRY LETHAM
                                    </h2>
                                    <p className="text-gray-500">CTO at Accenture</p>

                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-5 h-full text-start ">
                            <div className="relative card rounded-r-2xl  rounded-bl-2xl border shadow-lg shadow-gray-300/50 p-10 m-2">
                            <FaQuoteLeft className='text-orange-500 my-3'/>
                                <h2 className='text-black font-bold'>Happy with program content and career support</h2>

                                <p className="leading-relaxed text-gray-800 ">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                                    taxidermy 90's cronut +1 kinfolk. Lorem ipsum dolor sit amet.....<button  className='text-blue-900 font-medium underline cursor-pointer'><a href="/">Read More </a></button>
                                     </p>
                               <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-4 mb-2" />

                               <a href="https://www.linkedin.com/in/nandita-sharma70/" rel="nofollow" target="_blank" className="flex xs:gap-spacing10 md:gap-spacing8 items-center md:text-title3 xs:text-underlineNormal cursor-pointer font-medium text-left md:-tracking-0.18 xs:-tracking-0.14 w-fit text-linkedin"><span className="text-sky-800 xs:text-underlineNormal underline">LinkedIn</span>  <FaLinkedin className='text-sky-700 text-2xl' /></a>

                                <div className="absolute bg-white border-b border-r h-7 w-7  xs:left-14 md:left-72px  -bottom-3 left-24 rotate-45"></div>
                            </div>
                            <div className='flex gap-4  items-center justify-start p-5  '>
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20  object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://skilledup.s3.ap-south-1.amazonaws.com/images/review_profiles/sharukh-ali.jpg"
                                />
                                <div className='text-start'>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        HENRY LETHAM
                                    </h2>
                                    <p className="text-gray-500">CTO at Accenture</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

        </div>
    
    )
}

