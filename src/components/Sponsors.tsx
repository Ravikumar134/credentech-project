import React from 'react';
import Image from 'next/image';

interface Sponsor {
  url: string;
  icon: string;
}

interface SponsorsProps {
  sponsors: Sponsor[];
}

const Sponsors: React.FC<SponsorsProps> = ({ sponsors }) => {
  
  return (
    <section className="pt-[40px] pb-[40px] text-center bg-white dark:bg-[#333333]">
      <span className="text-[#1A1A1A] dark:text-white sark:text-white text-xl font-medium leading-[30px] capitalize text-center pb-[40px]">
        In Partnership With
      </span>
      <div className="sponsors-container justify-center gap-[60px] pt-[40px]">
      <div className="sponsors-wrapper  gap-[60px]">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="w-[234px] h-[52px]">
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={sponsor.icon}
                alt={`Sponsor ${index}`}
                className="w-full h-full filter hover:grayscale md:grayscale md:hover:grayscale-0 transition duration-300 ease-in-out dark:text-[#CCCCCC]"
                width={234}
                height={52}
              />
            </a>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
