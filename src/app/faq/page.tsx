import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import footerLogo from '../../assets/logo.png';
import { faGlobe, faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footerbg from '../../assets/support-bg-1.png'

function FaQs() {
  return (
    <div>
      <div className=" bg-gradient-to-r from-blue-400 to-blue-900 text-white text-center p-24 pt-40 text-5xl underline decoration-2 underline-offset-8">
      F.A.Q s
        </div>
        <div className="w-2/3 ml-80">
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl mt-20">
            Why choose skilledUp?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ skilledUp institution work together with multiple experienced professionals and they provide the best professional training share their experience to empower candidate for skills and ready for new JOB opportunities
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            Basic qualification/requirement to join a skilledUp program ?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ Excited to learn new skills, A Computer with Net connectivity, Basic Knowledge of computer.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            What If I am from a non IT background ?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ No problem at all, Only need basic knowledge of computers.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            Is there any pre-programming knowledge required to join?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ No, We will train from scratch.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            I’m a Fresher. Do I eligible for job opportunities once I complete the course?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ Just go through trainer guidelines and update yourself every single day and you’ll be ready for the Job openings, attend and test yourself, be perfect.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            What is the duration of the bootcamp program?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ It depends on you as soon you finish and become eligible to clear the test, Once you clear the test you will get certified.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            Can I interact with a trainer during a Live session?
            </summary>
            <p className="text-xl mt-2 mb-8">
             ~ Yes
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            If I missed a live session?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ The course is also recorded post the live sessions so you can view the session in the recorded format post which in case of any doubts the skilledUp support team will be there to assist you.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            How long can I access the Bootcamp in which I have applied?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ Lifetime.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            Which language is preferred for training / Language options in training?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ Live sessions are preferred in English because our candidates belong from different countries, but you can also discuss with hindi.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            How quick I’ll get the response on a query?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ Our team will respond as soon as possible.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            I’m from another country, so how can I manage the Live session Timing?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ The course is also recorded post the live sessions so you can view the session in the recorded format post which in case of any doubts the skilledUp support team will be there to assist you.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer text-2xl">
            Do I get job referrals once I have completed the course?
            </summary>
            <p className="text-xl mt-2 mb-8">
            ~ Yes, We do provide referrals.
            </p>
          </details>
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

export default FaQs
