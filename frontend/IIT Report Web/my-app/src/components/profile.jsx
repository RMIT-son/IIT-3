import React from 'react';
import Son from '../assets/sample photo.jpeg'
import Chi from "../assets/chi's profile photo.jpeg"
import Tung from '../assets/sample photo.jpeg'
import Thang from '../assets/sample photo.jpeg'

const Profile = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent' src={Son} alt="/" />
              <h2 className='text-3xl font-bold text-center py-8'>Son Tang</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 '>Project Manager</p>
              </div>
              <button className='bg-black text-[#17fff3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Profile</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent' src={Chi} alt="/" />
              <h2 className='text-3xl font-bold text-center py-8'>Chi Bui</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 '>Web Developer</p>
              </div>
              <button className='bg-black text-[#17fff3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Profile</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent' src={Tung} alt="/" />
              <h2 className='text-3xl font-bold text-center py-8'>Tung Le</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 '>Web Developer</p>
              </div>
              <button className='bg-black text-[#17fff3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Profile</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent' src={Thang} alt="/" />
              <h2 className='text-3xl font-bold text-center py-8'>Thang Dang</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 '>500 GB Storage</p>
              </div>
              <button className='bg-black text-[#17fff3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Profile</button>
          </div>
      </div>
    </div>
  );
};

export default Profile;