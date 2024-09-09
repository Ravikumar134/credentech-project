// src/components/Service.tsx
import React from 'react';
import CommonTitleSection from './Common/TitleSection';
import ServiceCard from './Common/ServiceCard';

interface CardData {
  id: string;
  icon: string;
  titlecard: string;
  description: string;
  arrowImage: string;
  arrowURL: string;
}

interface ServiceProps {
  label: string;
  title: string;
  description: string;
  statistics: CardData[];
}

const Service: React.FC<ServiceProps> = ({ label, title, description, statistics }) => {
  return (
    <div className='screen-size'>
      <div className="p-[32px] flex flex-col gap-[56px]">
        <CommonTitleSection 
          label={label} 
          title={title} 
          description={description} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          {statistics.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
