import React from 'react';


interface HeadingProps {
  label: string;
  title:string;
  description:string;
}

const CommonTitleSection: React.FC<HeadingProps> =({ label,title,description } )=> (
  <div className='flex flex-col gap-5'>
  <div className="inline-flex ">
    <span className='lg:text-[16px] text-[12px] font-normal border border-gray-900  lg:px-[16px]  md:px-[16px] px-[12px] dark:text-white dark:border-white  rounded-full whitespace-nowrap'>{label}</span>
  </div>
  <div className="lg:text-[56px] text-[40px] text-[#0078D4] font-bold lg:leading-[84px] leading-[45px]">{title}</div>
  <div className='lg:text-[16px] leading-[24px] text-[12px] text-[#333333] dark:text-white font-normal'>{description}</div>
</div>

);

export default CommonTitleSection;
