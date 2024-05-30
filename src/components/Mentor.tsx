"use client"
import React from 'react'
import  { useEffect, useState } from 'react'
// import mentors from '../data/mentor.json'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircleCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { relative } from 'path';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkedinIcon } from 'lucide-react';



const dummyMentors = [
  {
    id: 1,
    image: "url_to_mentor_image_1",
    name: "John Doe",
    company: "Company A",
    experience: "10+ years",
  },
  {
    id: 2,
    image: "url_to_mentor_image_2",
    name: "Jane Smith",
    company: "Company B",
    experience: "8 years",
  },
  {
    id: 3,
    image: "url_to_mentor_image_3",
    name: "Alex Johnson",
    company: "Company C",
    experience: "5 years",
  },
  {
    id: 4,
    image: "url_to_mentor_image_4",
    name: "Emily Brown",
    company: "Company D",
    experience: "7 years",
  },
  {
    id: 5,
    image: "url_to_mentor_image_5",
    name: "Michael Davis",
    company: "Company E",
    experience: "12+ years",
  },
  // Add more dummy data as needed
];


function Mentor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let displayedJobs = dummyMentors.slice(currentIndex, currentIndex + 3);

  const handleArrowClick = (direction: string) => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev === 0 ? dummyMentors.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === dummyMentors.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    
<div>
    <div className="flex flex-col justify-center items-center p-5">
      <span className='text-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-800'>Team Members</span>
    <h1 className="text-4xl font-bold bg-clip-text bg-black text-transparent ">Meet Our Professional <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>Team Members </span></h1>
  </div>
  <div className="flex items-center justify-center gap-5 pb-4">
                <FontAwesomeIcon icon={faArrowLeft} onClick={() => handleArrowClick("left")} className="text-white p-3 text-lg hover:text-white rounded-full bg-orange-500" />
                <FontAwesomeIcon icon={faArrowRight} onClick={() => handleArrowClick("right")} className="text-white p-3 text-lg hover:text-white rounded-full bg-orange-500" />
              </div>
              <div className="swiper-container">
                <div className="swiper-wrapper flex justify-center items-center gap-4">
                  {/* <div className='flex flex-row'> */}
                  {displayedJobs.map((mentor)=> (
                    <SwiperSlide key={mentor.id} className="swiper-slide">
                      <div className="border  border-gray-300 p-4 rounded-md bg-white flex flex-col justify-center items-center">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdvESU1dghCfTr2vPBLxudX-UhHT1vW4htQ&s' alt='/' />
                        <h2 className="text-2xl font-bold">{mentor.name}</h2>
                        <p className="text-xl text-blue-900 font-semibold">{mentor.company}</p>
                        <p className="text-xl text-blue-900 font-semibold">{mentor.experience}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                  {/* </div> */}
                </div>
              </div>
</div>
  )
}

export default Mentor