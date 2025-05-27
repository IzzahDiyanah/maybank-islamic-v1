"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ContentCard = ({ title }) => {
  return (
    <div className="bg-opacity-10 backdrop-blur-lg rounded-3xl border border-white border-opacity-20 text-white w-full h-full flex flex-col justify-between overflow-hidden">
      {/* Header with label and button */}
      <div className="flex justify-between items-center p-4 pb-0">
        <p className="text-sm">Centre of Excellence</p>
        <button className="rounded-full bg-white bg-opacity-20 p-2 transition hover:bg-opacity-30">
          <ArrowRight className="h-5 w-5 text-white" />
        </button>
      </div>
        
      {/* Title */}
      <div className="p-4 pt-2 pb-8">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    { 
      title: "Islamic Banking Imitates Conventional: Is It True?" 
    },
    { 
      title: "Tackle Misconceptions on Ethical Investments" 
    },
    { 
      title: "Where to Invest? Traditional vs New Approaches" 
    }
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative pb-10">
      {/* Progress indicator */}
      <div className="flex items-center mb-4 px-6">
        <span className="text-white font-medium mr-2">01</span>
        <div className="w-full h-1 bg-gray-500 rounded-full relative">
          <div 
            className="absolute left-0 top-0 h-full bg-yellow-400 rounded-full transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
        <span className="text-white font-medium ml-2">03</span>
      </div>
      
      {/* Swiper component */}
      <div className="px-6">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={16}
          slidesPerView="auto"
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <SwiperSlide 
              key={index}
              className="!w-[300px] lg:!w-[500px] !h-[150px] lg:!h-[200px]"
            >
              <ContentCard title={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;