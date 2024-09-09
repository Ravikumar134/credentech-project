import React from 'react';
import Image from 'next/image';

interface CardData {
  id: string;
  icon: string;
  titlecard: string;
  description: string;
  arrowImage: string;
  arrowURL: string;
}

interface ServiceCardProps {
  service: CardData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="rounded-md overflow-hidden p-6 bg-[#0000000A] border-[1px] border-[#1A1A1A] dark:border-white relative px-[20px] py-[40px] group md:gap-[40px] gap-[32px] flex flex-row md:flex-col">
      <Image src={service.icon} alt="icon" width={100} height={100} className="w-12 h-12" />
      <div className='flex flex-col lg:gap-[40px] gap-8 h-full'>
        <div className='flex flex-col lg:gap-[20px] gap-[16px] h-full'>
          <div className="text-xl font-semibold leading-7 tracking-wider text-left text-[#1A1A1A] dark:text-white h-full">{service.titlecard}</div>
          <div className="text-sm font-normal leading-6 tracking-wider text-left text-[#333333] dark:text-[#CCCCCC]">{service.description}</div>
        </div>

        <div className="flex items-center gap-[8px] relative max-sm:gap-4">
          <div className="overflow-hidden">
            <span className="block text-base dark:text-white">
              View More
            </span>
            <div className="absolute bottom-[-8px] left-0 w-[32px] border-[2px] border-[#1A1A1A] dark:border-white transition-all duration-300 group-hover:w-[80px]"></div>
          </div>
          <span className="w-[24px] h-[24px]">
            <a href={service.arrowURL} target="_blank" rel="noopener noreferrer">
              <Image src={service.arrowImage} alt="Right Arrow" width={100} height={100} className="w-6 h-6 bg-[black] border rounded-[24px]" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
