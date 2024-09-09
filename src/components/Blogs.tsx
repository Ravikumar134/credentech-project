import React from 'react';
import CommonTitleSection from './Common/TitleSection';


interface BlogsProps {
    label: string;
    title: string;
    description: string;
    heading: string;
    content: string;
    arrowImage: string;
    arrowURL: string;
  }

const Blogs: React.FC<BlogsProps> = ({ label, title, description, heading }) =>{
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

export default Blogs
