import React from 'react';

interface CardProps {
  experience: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ experience, description }) => (
  <div className="bg-white border border-gray-200 dark:bg-[#333333] dark:border-[#333333] rounded-lg shadow-md max-w-[250px] h-[143px] flex flex-col justify-center gap-[20px] px-[8px] py-[20px] md:px-[16px] md:py-[40px] lg:px-[16px] lg:py-[40px]">
    <span className="text-[40px] lg:text-[56px] font-semibold text-[#1A1A1A] dark:text-white text-center">{experience}</span>
    <span className="text-[10px] lg:text-[12px] font-normal text-[#1A1A1A] dark:text-[#CCCCCC] text-center ">{description}</span>
  </div>
);

export default Card;
