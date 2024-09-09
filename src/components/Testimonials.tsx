import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TestimonialsCard from './Common/TestimonialsCard';
import CommonTitleSection from './Common/TitleSection';

interface TestimonialData {
  id: string;
  icon: string;
  description: string;
  name: string;
  role: string;
}

interface TestimonialsProps {
  label: string;
  title: string;
  description: string;
  statistics: TestimonialData[];
  leftcarouselbutton: string;
  rightcarouselbutton: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  label,
  title,
  description,
  statistics,
  leftcarouselbutton,
  rightcarouselbutton,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const visibleCount = isMobile ? 1 : 3; 

  const handleNext = () => {
    if (currentIndex + visibleCount < statistics.length) {
      setCurrentIndex(currentIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - visibleCount);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); 
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleTestimonials = statistics.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className='screen-size'>
      <div className="p-[32px] flex flex-col gap-[56px]">
        <CommonTitleSection 
          label={label} 
          title={title} 
          description={description} 
        />
        {/* Testimonials Cards */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'} gap-[40px] overflow-hidden`}>
          {visibleTestimonials.map((service) => (
            <TestimonialsCard
              key={service.id} 
              service={service} 
            />
          ))}
        </div>

        {/* Carousel Buttons */}
        <div className='flex flex-row mx-auto gap-3 cursor-pointer'>
          <div onClick={handlePrev} className={`${currentIndex === 0 ? 'opacity-50' : ''} cursor-pointer`}>
            <Image src={leftcarouselbutton} alt="Left Arrow" width={40} height={40} />
          </div>
          <div onClick={handleNext} className={`${currentIndex + visibleCount >= statistics.length ? 'opacity-50' : ''} cursor-pointer`}>
            <Image src={rightcarouselbutton} alt="Right Arrow" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
