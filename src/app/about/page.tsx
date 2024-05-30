
import aboutimg from '../../assets/certificate_b.jpeg'
import aboutone from '../../assets/About-one.png'
import abouttwo from '../../assets/about-two.png'
import aboutthree from '../../assets/about3.png'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import footerLogo from '../../assets/logo.png';
import { faGlobe, faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footerbg from '../../assets/support-bg-1.png'


function page() {
  return (
    <div>
      <div className="bg-gray-100">
        <Image src={aboutimg}
          alt="About"
          className="h-80 w-full object-cover" />
        <div className="text-white text-4xl font-bold absolute top-28 left-24 underline decoration-2 underline-offset-8">
          About Us
        </div>
        <h2 className="text-white text-xl font-semibold absolute top-44 left-10 right-1/2">
          Skilledup started as an educational company, It provides technical training and certifications to students/professionals and prepares them for job opportunities.
        </h2>
        <div>
          <div className="bg-gray-200 rounded-full p-96  mx-80 my-10 shadow-xl">
            <div className="flex items-center justify-center absolute top-96 mt-7 left-1/3 ml-16 h-96 w-96 rounded-full bg-gradient-to-b from-blue-300 to-blue-500">
              <h1 className="underline decoration-2 underline-offset-8 text-white text-4xl font-bold absolute left-18 bottom-60">OUR MISSION</h1>
              <Image src={aboutthree}
                alt="ourmission"
                className="h-24 w-24 absolute bottom-24 right-34" />
            </div>
            <div className="text-lg font-medium p-4 absolute top-96 mt-20 left-3 right-2/3 mr-10 border-t-4 border-b-2 border-blue-500">
              Our goal is to make affordable education and experiential skills accessible to everyone regardless of their disparate economic and educational backgrounds. We empower students to make a bright career for their own future.
            </div>
            <div className="absolute right-1/2 top-96 mt-80 h-96 w-96 rounded-full bg-gradient-to-b from-green-300 to-green-500">
              <h1 className="underline decoration-2 underline-offset-8 text-white text-4xl font-bold absolute left-36 bottom-60">TEAM</h1>
              <Image
                src={abouttwo}
                alt="team"
                className="h-28 w-64 absolute bottom-24 right-16" />
            </div>
            <div className="text-lg font-medium p-4 mt-52 absolute left-3 right-2/3 mr-16 border-t-4 border-b-2 border-green-300">
              We consist of very passionate, smart and hardworking team members. They research on new technology innovate new ides and explore them. Every team member is very supportive and create a good team work.
            </div>
            <div className="flex items-center justify-center absolute left-1/2 top-96 mt-80 h-96 w-96 rounded-full bg-gradient-to-b from-orange-300 to-orange-500">
              <h1 className="underline decoration-2 underline-offset-8 text-white text-4xl font-bold absolute left-18 bottom-60">OUR VISION</h1>
              <Image
                src={aboutone}
                alt="ourvision"
                className="h-28 w-28 absolute bottom-24 right-32" />
            </div>
            <div className="text-lg font-medium p-4  absolute right-3 left-2/3 ml-16 border-t-4 border-b-2 border-orange-500">
              To create a network enabling digital inclusion of Bharat driven by continuous innovation and integrating new services in platform.
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      <footer className="bg-blue-950 text-white  pt-10 mt-10" >
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