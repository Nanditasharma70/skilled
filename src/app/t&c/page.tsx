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
        <div className=" bg-gradient-to-r from-blue-400 to-blue-900 text-white text-center p-24 pt-40 text-5xl underline decoration-2 underline-offset-8">
        Terms & Conditions
        </div>
       <h1 className='mt-20 ml-16 mb-4 text-3xl'>Welcome to skilledUp!</h1>
      <p className='ml-16 mr-10 mb-2 text-lg'>
        These terms and conditions outline the rules and regulations for the use of skilledup intelligence private limiteds website, located at www.skilledup.tech.
      </p>
      <p className='ml-16 mr-10 mb-2 text-lg'>
        By accessing this website, you agree to be bound by these website Terms and Conditions of Use, applicable laws and regulations and their compliance.
      </p>
      <p className='ml-16 mr-10 mb-2 text-lg'>
        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Companys terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our training and assistance to the Student/Client in the most appropriate manner. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to the same.
      </p>
      <h1 className='mt-20 ml-16 mb-4 text-3xl'>Cookies</h1>
      <p className='ml-16 mr-10 mb-2 text-lg'>
        We need to use cookies sometime. By accessing skilledUp, you agreed to use cookies in agreement with the skilledup intelligence private limited's Privacy Policy.
      </p>
      <p className='ml-16 mr-10 mb-2 text-lg'>
        Most interactive websites use cookies to let us retrieve the users details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
      </p>
      <h1 className='mt-20 ml-16 mb-4 text-3xl'>License</h1>
      <p className='ml-16 mr-10 mb-2 text-lg'>
        Unless otherwise stated, skilledup intelligence private limited and/or its licensors own the intellectual property rights for all Training and Certifications on skilledUp. All intellectual property rights are reserved. You may access this from skilledUp for your own personal use subjected to restrictions set in these terms and conditions.
      </p>
      <h1 className='mt-20 ml-16 mb-4 text-3xl'>Signup and Enrollment</h1>
      <p className='ml-16 mr-10 mb-2 text-lg'>
        As part of the Signup process, you need to share your basic details like Name, Email, Contact No and Address you will need to accept our term and condition, we assure that the shared details will use for skilledUp use only.
      </p>
      <h1 className='mt-20 ml-16 mb-4 text-3xl'>Reservation of Rights</h1>
      <p className='ml-16 mr-10 mb-2 text-lg'>
        We reserve the right to request that you remove all links or any particular link to our website. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our website, you agree to be bound to and follow these linking terms and conditions.
      </p>
      <h1 className='mt-20 ml-16 mb-4 text-3xl'>Job Oriented & Job Assurance Courses</h1>
      <p className='ml-16 mr-10 mb-2 text-lg'>
        We are offering all the programs &courses are completely Job Oriented, Here Job Oriented means The courses, we've prepared make you skilled for the job market. Here Job Assurance means, We're imparting quality education and after getting expertise in all these skills, anyone can get very attractive job offer in job market, so we assure our students that they will get a job if prepared well.
      </p>
      <h1 className='mt-20 ml-16 mb-4 text-3xl'>Terms & Conditions for Job guarantee from skilledUp (India Only)</h1>      
        <li className='ml-16 mr-10 mb-2 text-lg'>
          This program offers a Job Guarantee to the participants subjected to specific terms and conditions mentioned below. If you disagree with any of our terms & conditions, you will not be applicable for the Job Guarantee.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
          Candidates must be eligible to work in India as per the guidelines of the Government of India.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
          Remote Internship, provided by skilledUp, is mandatory for every candidate who is part of the Job Guarantee program. Without the completion of the projects/Internship, the Job Guarantee won't be applicable to the candidate.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
          Candidates must complete at least 40% of the given assignments/projects/etc. Issued in the course their grades in assignments/projects/etc. Should be =40% to avail of the Job Guarantee.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
          We provide a Job Guarantee given that the candidate ensures that all of the required course assignments and submissions are completed within the stipulated time period (9 months from the start date).
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
          Grades will be calculated based on: Assignments submission, Projects submission, Exam, Internship completion.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
        Kindly ensure that there is no plagiarism in any assignments/blogs/submissions/quizzes. It will make the submissions invalid, after which the candidate will be subjected to resubmitting their assignment.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
        Candidates will be able to avail themselves of facilities such as interview preparation & resume preparation only if they follow the instructions provided above.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
        Candidates are supposed to complete their internship projects in order to apply for the opportunities provided to them as part of the Job Guarantee Program. Failure to complete the internship/projects will result in the candidate will be eligible for Job Assistance only.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
        There should not be more than two years of career gap in the candidate's profile.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
        skilledUp will refer the candidates to companies for interviews only with the candidate's prior consent, in any case, if the candidate is unwilling or fails to attend the interview. They will not be applicable to claim the refund, and skilledUp will have all the rights to deny any other interview opportunity.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
        skilledUp will refer you to various product-based, service-based, or startup companies.
        </li>
        <li className='ml-16 mr-10 mb-2 text-lg'>
        After ensuring the job, you are supposed to pass all the background verification as prescribed by the employer; in case of any lapse in verification, skilledUp holds no responsibility.
        </li>
        <h1 className='mt-20 ml-16 mb-4 text-3xl'>Refund Policy</h1>
        <p className='ml-16 mr-10 mb-10 text-lg'>
        Under our Refund Policy, once enrolled in any of our technical skills programs, we strictly adhere to a No Refund policy for all courses or programs, regardless of attendance in any sessions.
        </p> 
    
 
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
        
      );
    };
    
export default page