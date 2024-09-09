import React from 'react';
import Card from './Common/AboutUsCard'; 
import CommonTitleSection from './Common/TitleSection';

// Renaming cardData to CardData for consistency
interface CardData {
  experience: string;
  description: string;
}

interface SectionProps {
  label: string;
  title: string;
  description: string;
  statistics: CardData[];
  contentTitle: string;
  contentDescription: string;
}

const AboutSection: React.FC<SectionProps> = ({
  label,
  title,
  description,
  contentTitle,
  contentDescription,
  statistics
}) => {

  return (
    <div className='screen-size'>
      <div className="p-[32px] flex flex-col gap-[56px]">

        <CommonTitleSection label={label} title={title} description={description} />

        <div className='grid grid-cols-2 gap-[20px] md:grid-cols-4'>
          {statistics.map((card, index) => (
            <Card
              key={index}
              experience={card.experience}
              description={card.description}
            />
          ))}
        </div>
        <div className='flex flex-col gap-[24px]'>
          <h5 className='leading-[48px] text-[32px] font-md text-[#1A1A1A] dark:text-[#F7F7F7]'>{contentTitle}</h5>
          <span className='leading-[24px] text-[16px] font-normal text-[#333333] dark:text-[#CCCCCC]'>{contentDescription}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
