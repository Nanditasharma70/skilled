
// components/Popup.js
import React from 'react';
import { useState } from 'react';
import otpGenerator from 'otp-generator';
import Image from 'next/image';
import getconnected from '../assets/gettconnected.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';


const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);



  const handleSendOtp = () => {
    const otp = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, specialChars: false });
    setGeneratedOtp(otp);
    setOtpSent(true);
    alert(`Your OTP is: ${otp}`); // Replace this with actual OTP sending logic
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      alert('Form submitted successfully!');
      // Handle successful form submission
    } else {
      alert('Invalid OTP');
    }
  };

  return (

    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white rounded shadow-lg max-w-2xl w-full ">
      
   
        <div className="flex  items-center justify-center  gap-4">
        <div className='w-full p-3' >
          <h1 className='text-xl font-bold text-center bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-900 text-transparent'>Get In Touch</h1>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5 ">

      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="contactNo">
          Contact No
        </label>
        <input
          id="contactNo"
          type="text"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      {otpSent ? (
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="otp">
            OTP
          </label>
          <input
            id="otp"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={handleSendOtp}
          className="bg-orange-500 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send OTP
        </button>
      )}
      {otpSent && (
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      )}
    </form>
    </div>
    <div className='relative'>
    <button 
    className='absolute right-5 top-5'
          onClick={onClose}
        >
         <FontAwesomeIcon className='text-black font-bold text-2xl ' icon={faCircleXmark} /> {' '}
        </button>
      <Image className='w-full'
      src={getconnected}
      alt='getconnected'
      // height={350}
      // width={350}
      />
    </div>
    </div>
    </div>
    </div>
  );
};
export default Popup;

