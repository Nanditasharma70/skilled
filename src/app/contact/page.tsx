import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import footerLogo from '../../assets/logo.png';
import footerbg from '../../assets/support-bg-1.png'

function page() {
  return (
<div>
    <div className="flex flex-row items-center justify-center gap-10">
      <div className="p-24 pt-40 bg-gradient-to-r from-blue-400 to-blue-900 text-white py-11 w-full text-4xl font-bold text-center absolute top-0 underline decoration-2 underline-offset-8">
        Contact Us
      </div>
    <div className=' pt-96'>
    <form className="rounded-lg shadow-xl flex flex-col px-8   mb-4 bg-white dark:bg-blue-500">
      <h1 className="text-2xl font-bold dark:text-gray-50 ml-16"> Send us a Message !</h1>

      <label htmlFor="fullname" className="text-gray-500 font-bold mt-8 dark:text-gray-50">Full name<span className="text-red-500 dark:text-gray-50">*</span></label>
      <input type="text" name="fullname" className=" bg-transparent border-b w-96 py-2 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" placeholder='Enter your Full Name...'/>

      <label htmlFor="email" className="text-gray-500 font-bold mt-8 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" className="bg-transparent border-b w-96 py-2  focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" placeholder='Enter your E-mail Address...'/>

      <label htmlFor="subject" className="text-gray-500 font-bold mt-8 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
      <input type="text" name="subject" className="bg-transparent border-b w-96 py-2  focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" placeholder='Enter your Subject...'/> 

      <label htmlFor="message" className="text-gray-500 font-bold mt-8 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
      <textarea name="message" className="bg-transparent border-b w-96 py-2 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" placeholder='Message Us...'></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-5 mb-5 py-2 bg-gradient-to-r from-blue-700 to-blue-900  text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Send Message
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </form>
    </div>
    <div>
    <h1 className="text-4xl font-bold dark:text-gray-50 ml-52 mb-10 pt-20"> Reach Us !</h1>
    <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-md shadow-xl p-2 ml-10 mb-5 flex justify-between" >
    <FontAwesomeIcon className='h-12 w-12 float-left mr-10' icon={ faLocationDot} />{''}
    <div>
      <h2 className='text-2xl'>Head Office</h2>
      <h3>Office No - 111 & 112, NB Plaza, Greater Noida West, Uttar Pradesh-201306</h3>
    </div>
    </div>
    <div className=" bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-md shadow-xl p-2 ml-10 mb-5">
    <FontAwesomeIcon className='h-12 w-12 float-left mr-10' icon={ faLocationDot} />{''}
    <h2 className='text-2xl'>Lucknow Office</h2>
    <h3 className='ml-15 mr-15'>Kamlabad, Jankipuram Extension, Engineering College Lucknow-227202</h3>
    </div>
    <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-md shadow-xl p-2 ml-10 mb-5">
    <FontAwesomeIcon className='h-12 w-12 float-left mr-10' icon={faEnvelope} />{''}
    <h2 className='text-2xl'>Support Mail</h2>
    <h3>info@skilledup.tech / skilledup.lucknow@skilledup.tech</h3>
    </div>
    <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-md shadow-xl p-2 ml-10 mb-5">
    <FontAwesomeIcon className='h-12 w-12 float-left mr-10' icon={faPhone} />{''}
    <h2 className='text-2xl'>Support Phone</h2>
    <h3>+91 1206053422 / +91 9818890050 / +91 7068441097</h3>
    </div>
    </div>
    </div>
    <footer className="bg-blue-950 text-white  pt-10" >
          {/* <Image class
          src={footerbg}
          alt='footerbg'
          height={800}
          width={1400}
          /> */}
          <div className="container mx-auto flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 lg:w-1/4 px-4">
            <div className='flex-shrink-0'>
                            <a href="/">
                           <Image 
                           src={footerLogo}
                           alt="footer logo"
                           width={250}
                           height={250}
                           />
                            </a>
                        </div>
                        <p className='m-5 text-lg text-violet-300 hover:text-white'> 
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <div className='flex p-5 gap-4  flex-wrap'>
                            <FaLinkedin className='text-white hover:bg-indigo-900 bg-blue-900 p-2 rounded-full text-4xl' />
                            <FaTwitter className='text-white hover:bg-indigo-900 bg-blue-900 p-2 rounded-full text-4xl' />
                            <FaInstagram className='text-white hover:bg-indigo-900 bg-blue-900 p-2  rounded-full  text-4xl' />
                            <FaFacebook className='text-white hover:bg-indigo-900 bg-blue-900 p-2  rounded-full  text-4xl' />
                          </div>
                          </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-white text-3xl font-semibold mb-4  p-2 ">Quick Links</h2>
              <ul className="text-xl grid grid-rows-3 gap-2">
                <li><a href="/about-us" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Latest Course</a></li>
                <li><a href="/contact-us" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Job Portal</a></li>
                <li><a href="/faq" className='m-5 text-lg text-violet-300  hover:text-orange-500 transition transform hover:-translate-x-1'>Job Assistance</a></li>
                <li><a href="/terms" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Live Classes</a></li>
                <li><a href="/career" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-2'>Career</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-white text-3xl font-semibold mb-4  p-2 ">Explore</h2>
              <ul className="text-xl grid grid-rows-3 gap-2">
                <li><a href="/about-us" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>About Us</a></li>
                <li><a href="/contact-us" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Contact Us</a></li>
                <li><a href="/faq" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>FAQ</a></li>
                <li><a href="/terms" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>T & C</a></li>
                <li><a href="/privacy" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Privacy Policy</a></li>
               
              </ul>
            </div>
    
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-white text-3xl font-semibold mb-4 p-2 ">Contact Us</h2>
                <p className='m-5 text-lg text-violet-300 hover:text-white transition transform hover:-translate-x-1'> Office No - 111 & 112, NB Plaza, Greater Noida West, Uttar Pradesh, India - 201306</p>
                <p className='m-5 text-lg text-violet-300 hover:text-white transition transform hover:-translate-x-1'> 0120 6053422</p>
              <div className='m-5 text-lg text-violet-300 hover:text-white transition transform hover:-translate-x-1'>
                <Link href="/"> www.skilledUp.com</Link>
                <br />
                <Link href="/"> info@skilledup.tech</Link>
              </div>
    
                <form action="submit" className='flex gap-2'>
                  <input type="email" placeholder="Enter your email" className="bg-transparent text-violet-300 font-bold border solid border-indigo-600 rounded-md w-60" />
                  <input type="submit" value="Subscribe" 
                  className="bg-gradient-to-r p-3 from-orange-300 via-orange-500  to-orange-600 text-white font-bold rounded-md   cursor-pointer" />
                </form>
              </div>
    
            <div className="w-full md:w-1/3 lg:w-1/4 px-4">
              {/* Add your content here */}
            </div>
          </div>
             <div className='bg-indigo-950'>  
          <p className="text-center text-lg mt-5">© Copyright skilledUp. All Rights Reserved </p>
         <span className='flex justify-center text-lg  mb-[-3rem] '>Designed by skilledUp</span>
             </div>
        </footer>
       
        </div>
  )
}

export default page