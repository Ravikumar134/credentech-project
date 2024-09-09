import React from 'react';
import CommonTitleSection from './Common/TitleSection';

interface ContactProps{
    label: string;
    title: string;
    description: string;
}

const Contact: React.FC<ContactProps> = ({ label, title, description }) =>{
  return (
    <div className='screen-size'>
        <div className="p-[32px] flex flex-col gap-[56px]">
          <CommonTitleSection 
              label={label} 
              title={title} 
              description={description} 
          />
          <div className='flex flex-col lg:gap-10 gap-8'>
            <div className='flex flex-col lg:flex-row lg:gap-[40px] gap-[32px] justify-between text-black dark:text-white placeholder:text-black dark:placeholder:text-[#CCCCCC]'>
              <div className="w-full">
                <input
                  type="text"
                  className='border-b-[1px] border-[#333333] dark:border-[#CCCCCC] focus:border-b-[1px] focus:border-[#333333] dark:focus:border-[#CCCCCC] focus:outline-none font-semibold text-xl leading-6 text-black dark:text-white w-full placeholder:text-black dark:placeholder:text-[#CCCCCC] dark:bg-[#333333] bg-white placeholder:text-[16px] placeholder:font-normal py-[18px]'
                  placeholder='Name*'
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className='border-b-[1px] border-[#333333] dark:border-[#CCCCCC] focus:border-b-[1px] focus:border-[#333333] dark:focus:border-[#CCCCCC] focus:outline-none font-semibold text-xl leading-6 text-black dark:text-white w-full placeholder:text-black dark:placeholder:text-[#CCCCCC] dark:bg-[#333333] bg-white  placeholder:text-[16px] placeholder:font-normal py-[18px]'
                  placeholder='Email*'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:gap-[40px] gap-[32px] justify-between'>
              <div className="w-full">
                <input
                  type="text"
                  className='border-b-[1px] border-[#333333] dark:border-[#CCCCCC] focus:border-b-[1px] focus:border-[#333333] dark:focus:border-[#CCCCCC] focus:outline-none font-semibold text-xl leading-6 text-black dark:text-white w-full placeholder:text-black dark:placeholder:text-[#CCCCCC] dark:bg-[#333333] bg-white  placeholder:text-[16px] placeholder:font-normal py-[18px]'
                  placeholder='Country*'
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className='border-b-[1px] border-[#333333] dark:border-[#CCCCCC] focus:border-b-[1px] focus:border-[#333333] dark:focus:border-[#CCCCCC] focus:outline-none font-semibold text-xl leading-6 text-black dark:text-white w-full placeholder:text-black dark:placeholder:text-[#CCCCCC] dark:bg-[#333333] bg-white  placeholder:text-[16px] placeholder:font-normal py-[18px]'
                  placeholder='Phone Number*'
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <input
                type="text"
                className='border-b-[1px] border-[#333333] dark:border-[#CCCCCC] focus:border-b-[1px] focus:border-[#333333] dark:focus:border-[#CCCCCC] focus:outline-none font-semibold text-xl leading-6 text-black dark:text-white w-full placeholder:text-black dark:placeholder:text-[#CCCCCC] dark:bg-[#333333] bg-white  placeholder:text-[16px] placeholder:font-normal py-[18px]'
                placeholder="How Can We Help?"
              />
            </div>

            <div className='flex justify-end'>
              <button className='bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full'>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
};

export default Contact
