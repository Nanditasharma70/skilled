import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import footerLogo from '../../assets/logo.png'
// import { faGlobe, faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import footerbg from '../../assets/support-bg-1.png'


function Abhyas() {
  return (
    <div>
      <div className='flex flex-col-auto pt-32'>
    <div className='p-8 ml-48'>
      <img src="Masterclassimage2.jpg" alt="My Image" height={150} width={600} />
    </div>
    <div className='ml-2'>
    <h1 className="font-bold text-center text-3xl mt-6 text-blue-900">Register for Materclass</h1>
    <div  className="flex flex-col items-center justify-center mt-6">
    <form className='items-center justify-center flex flex-col'> 
            <input
              className="shadow-inner border rounded w-80 py-2 px-3 text-gray-700 "
              type="text"
              placeholder="First Name"
            />
            <input
              className="shadow-inner border rounded w-80 py-2 px-3 text-gray-700 mb-3 mt-3 "
              type="text"
              placeholder="Last Name"
            />
            <input
              className="shadow-inner border rounded w-80 py-2 px-3 text-gray-700 "
              type="number"
              placeholder="Phone Number"
            />
            <input
              className="shadow-inner border rounded w-80 py-2 px-3 text-gray-700 mt-3 mb-1 "
              type="text"
              placeholder="Email Address"
            />
    </form>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white mt-3 font-bold py-3 w-80 text-xl "
              type="button">
              Save My Spot
            </button>
          </div>
    </div>
    </div>
    </div>
    <div className='bg-gray-200 mb-10 mt-6'>
        <h3 className='font-bold text-center text-2xl p-5 text-blue-900'>BENEFITS</h3>
        <h1 className='font-bold text-center text-4xl text-gray-700'>What you'll learn</h1>
        <div className='flex col-auto ml-52 mr-48'>
         <div className='text-center mt-14 mb-20'>
            <h2 className='font-bold text-gray-700 text-xl'>Technical and Soft Skill</h2>
            <h3>Gain insights into the essential technical and soft skills required for cloud and DevOps roles, enhancing your employability</h3>
         </div>
         <div className='text-center mr-24 ml-28 mt-14 mb-20'>
            <h2 className='font-bold text-gray-700 text-xl'>Cloud Strategy Impact</h2>
            <h3>Discover the evolution of cloud computing and how organizations have integrated their cloud strategies to optimize workload distribution and leverage the benefits of a hybrid cloud approach</h3>
         </div>
         <div className='text-center mt-14 mb-20'>
            <h2 className='font-bold text-gray-700 text-xl'>Career Growth Strategies</h2>
            <h3>Learn about entry-level positions, career progression, specializations, and certifications to accelerate your growth in the cloud and DevOps industry</h3>
         </div>
        </div>
    </div>
    <div className='flex flex-col-auto'>
        <div className='ml-52 mr-56 mt-10 mb-10'>
            <h2 className='font-bold text-2xl text-blue-900'>Know Your Speaker</h2> 
            <h1 className='font-bold text-4xl text-gray-700 py-2'>Vijay Sir</h1> 
            <p className='text-lg py-2'>Vijay Narayan Singh is an Infrastructure Modernization Specialist at Google Cloud, with over 12 years of experience in leading roles at renowned companies like Ericsson, Amdocs, Nokia, VVDN, and Microsoft. Her expertise lies in designing and implementing highly scalable, resilient, and secure architectures in both private and public cloud environments, with a focus on zero-trust security. Neelam's technical skills include proficiency in Linux, Python, container platforms, hybrid cloud solutions, and edge computing technologies. She brings a wealth of knowledge in infrastructure and security, making her a valuable asset in the cloud computing domain.</p>  
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white mt-3 font-bold py-3 w-80 text-xl "
              type="button">
              Save My Spot
            </button>
        </div>  
        <div className='mr-60'>
            <img src='Vijaysir.jpg' height={2500} width={2500} className="rounded-full" />
        </div>    
    </div>
    <div className='bg-gray-200'>
    <h3 className='font-bold text-center text-2xl p-5 text-blue-900'>OUTCOMES</h3>
    <h1 className='font-bold text-center text-4xl text-gray-700'>We let our numbers speak for themselves</h1>
    <div className='flex col-auto ml-80'>
         <div className='text-center mt-14'>
            <h2 className=' text-blue-900 text-4xl'>1L + learners benefited</h2>
            <h3 className='mt-4'>from attending webinars over last few months</h3>
         </div>
         <div className='text-center mr-24 ml-28 mt-14'>
            <h2 className=' text-blue-900 text-4xl'>1L + upskilling hours</h2>
            <h3 className='mt-4'>invested by learners</h3>
         </div>
    </div>
    <h2 className=' text-blue-900 text-4xl text-center mt-10'>Webinars conducted by experts</h2> 
    <div className='flex flex-col-auto justify-center mt-7 gap-3 p-5'>
    <img src="amazon-logo.jpg" alt="My Image" height={50} width={100} />
    <img src="visa_logo_7.jpg" alt="My Image" height={50} width={100} />
    <img src="flipkart.jpg" alt="My Image" height={50} width={100} />
    <img src="1634108.webp" alt="My Image" height={50} width={100} />
    </div>
    </div>
    <h2 className='font-bold text-center text-4xl text-black-900 mt-16'>Rise in AI-related jobs</h2>
    <div className="flex space-x-6 flex-col-auto justify-center mt-7">
    <img src="1 (1).png" alt="My Image" height={200} width={450} />
    <img src="1 (2).png" alt="My Image" height={200} width={450} />
    <img src="1 (3).png" alt="My Image" height={200} width={450} />
    </div>
    <h2 className='font-bold text-center text-3xl text-gray-800 mt-7 mb-16'>Jobs are moving towards AI enabled people, become AI enabled today.</h2>
    <h2 className='font-bold text-center text-4xl text-black-900 mt-20'>What industry thinks about AI?</h2>
    <div className="flex space-x-6 flex-col-auto justify-center mt-7 mb-5">
    <img src="2 (1).png" alt="My Image" height={200} width={450} />
    <img src="2 (2).png" alt="My Image" height={200} width={450} />
    <img src="2 (3).png" alt="My Image" height={200} width={450} />
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

export default Abhyas