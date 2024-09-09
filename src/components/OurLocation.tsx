import React from 'react';
import CommonTitleSection from './Common/TitleSection';

interface OurLocationProps{
    label: string;
    title: string;
    description: string;
}

const OurLocation: React.FC<OurLocationProps> = ({ label, title, description}) =>{
  return (
    <div className='screen-size'>
        <div className="p-[32px] flex flex-col gap-[56px]">
        <CommonTitleSection 
            label={label} 
            title={title} 
            description={description} 
        />
        </div>
    </div>
  )
}

export default OurLocation
