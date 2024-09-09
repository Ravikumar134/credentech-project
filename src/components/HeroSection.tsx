// src/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  heading: string;
  contentURL: string;
  arrowURL: string;
  content: string;
  heroBannerImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, heading, contentURL, arrowURL, content, heroBannerImage }) => {
  return (
    <>
      <div className='screen-size'>
        <div className='lg:p-[32px]'>
        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-[69px] px-4 sm:px-6 md:px-0 relative min-h-[530px] md:min-h-0">
          <div className="flex flex-col text-left pb-[32px] md:text-left gap-4 md:gap-[56px] absolute md:static bottom-0 left-0 z-[2]">
            <span className="text-xl font-medium text-[#1A1A1A] dark:text-white capitalize ">
              {title}
            </span>
            <span className="text-[#0078D4] text-[54px] lg:text-[80px] font-bold capitalize leading-[88px]">
              {heading}
            </span>
            <div className="relative group inline-block mt-4 md:mt-0">
              <div className="flex flex-row items-center gap-2 md:gap-[8px]">
                <span className="font-normal text-sm sm:text-base leading-[24px] text-[#1A1A1A] dark:text-[#F7F7F7] capitalize ">
                  {content}
                </span>
                <a href={contentURL} target='_blank' className="bg-black rounded-full w-[24px] h-[24px] flex justify-center items-center">
                  <Image src={arrowURL} alt="Arrow Icon" width={24} height={24} />
                </a>
              </div>
              <div className="absolute bottom-[-4px] md:bottom-[-8px] left-0 w-[20px] md:w-[32px] border-[2px] border-[#1A1A1A] dark:border-[#F7F7F7] transition-all duration-300 group-hover:w-[110px] md:group-hover:w-[155px]"></div>
            </div>
          </div>
          <div className="md:text-left pb-[20px] sm:pb-[38px] pt-[20px] sm:pt-[39px] absolute right-0 md:static w-[176px] md:min-w-[308px] top-[6px] z-[2]">
            <Image src={heroBannerImage} alt="Digital Experience" width={308} height={522} className='' />
          </div>
          <div className='hero-bg-left'></div>
          <div className='hero-bg-right'></div>
        </section>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
