import React from 'react';
import Image from 'next/image';

interface CardData {
  id: string;
  icon: string;
  description: string;
  name: string;
  role: string;
}

interface ServiceCardProps {
  service: CardData;
}

const TestimonialsCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="rounded-md overflow-hidden p-6 bg-[#0000000A] border-[1px] border-[#1A1A1A] dark:border-white relative px-[20px] py-[40px] group  gap-[20px] flex flex-col">
    <Image src={service.icon} alt="icon" width={100} height={100} className="w-12 h-12" />
    <div className='flex flex-col lg:gap-[40px] gap-8 h-full'>
      <div className='flex flex-col '>
        <div className="text-sm font-normal leading-6 tracking-wider text-left text-[#333333] dark:text-[#CCCCCC]">{service.description}</div>
      </div>
    </div>
    <div className="border-l-[1px] border-solid border-black dark:border-white gap-[16px] relative pl-4">
       <div className='font-semibold text-xl leading-8 text-black dark:text-white'>
        {service.name}
       </div>
       <div className='font-normal text-sm leading-5 dark:text-[#CCCCCC]'>
        {service.role}
       </div>
    </div>
  </div>
  )
}

export default TestimonialsCard
