import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#17fff3]'>BEAT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-7 hover:scale-100 duration-500'>Home</li>
        <li className='p-7 hover:scale-100 duration-500'>Profile</li>
        <li className='p-7 hover:scale-100 duration-500'>Tools</li>
        <li className='p-7 hover:scale-100 duration-500'>About</li>
        <li className='p-7 hover:scale-100 duration-500'>Skills&Jobs</li>
        <li className='p-7 hover:scale-100 duration-500'>Outcome</li>
        <li className='p-7 hover:scale-100 duration-500'>Reflection</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#17fff3] m-4'>BEAT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Team Profile</li>
          <li className='p-4 border-b border-gray-600'>Tools</li>
          <li className='p-4 border-b border-gray-600'>About Project</li>
          <li className='p-4 border-b border-gray-600'>Skills & Jobs</li>
          <li className='p-4 border-b border-gray-600'>Project Outcome</li>
          <li className='p-4'>Reflection</li>
      </ul>
    </div>
  );
};

export default Navbar;