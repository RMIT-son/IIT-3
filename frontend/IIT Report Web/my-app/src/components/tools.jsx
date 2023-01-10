import React from 'react';
import {
  FaGithubSquare,
  FaChrome
} from 'react-icons/fa';

const Tools = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#17fff3]'>BEAT.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaGithubSquare size={40} />
            <FaChrome size={40} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between items-center'>
            <div>
                <h6 className='font-medium text-gray-400'>Check out the following link <span className='text-[#17fff3] underline'>Description on Tools</span> to see a brief description of the project and our comments on the audit trail</h6>
            </div>
      </div>
    </div>
  );
};

export default Tools;