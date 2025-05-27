"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ExcellenceCard = ({ title, description, imageSrc, onClick }) => {
  
  return (
    <div 
      className="flex flex-col min-w-[280px] max-w-[320px] cursor-pointer"
      onClick={onClick}
    >
      <div 
        className="relative rounded-3xl overflow-hidden h-full group"
      >
        <Image 
          src={imageSrc} 
          alt={title}
          width={320}
          height={0}
          className="object-cover hover:scale-110"
        />

         
          <div className="opacity-0 group-hover:opacity-100 absolute bottom-2 right-2 transition-all duration-500 ">
            <div className="absolute -bottom-7 -right-6 w-[105px] h-[105px]">
              <Image 
                src="/images/curvedLayer.png" 
                alt="Background curve"
                width={150}
                height={150}
                className="object-contain "
              />
            </div>
            
            {/* Arrow icon on top */}
            <div className="relative z-10 bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-yellow-400" />
            </div>
          </div>
        
      </div>
      
      {/* Title and description below the card */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const CenterOfExcellenceSection = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  
  const excellenceItems = [
    {
      id: 1,
      title: "Halal2u",
      description: "Nurturing trust with every halal-certified product we offer.",
      imageSrc: "/images/Group 11475-1.webp"
    },
    {
      id: 2,
      title: "Daily Financial Insights",
      description: "Empowering your decisions with expert financial analysis and trusted advice.",
      imageSrc: "/images/Group 11475.webp"
    },
    {
      id: 3,
      title: "Learning Centre",
      description: "Unlocking the basics of Islamic finance.",
      imageSrc: "/images/Group 11475-2.webp"
    },
    {
      id: 4,
      title: "Media",
      description: "Stay informed with our easy-to-follow updates and reports on the financial world around you.",
      imageSrc: "/images/Group 11475-3.webp"
    }
  ];

  const handleCardClick = (item) => {
    console.log('Clicked on:', item.title);
  };

  const handleExpandClick = () => {
    console.log('Expand Your Knowledge clicked');
  };

  return (
    <div className="container mx-auto py-16 px-4 md:px-18">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Center of Excellence</h2>
        
        <button 
          onClick={handleExpandClick}
          className="bg-black text-white rounded-full px-6 py-3 flex items-center space-x-2 transition hover:bg-gray-800 w-fit"
        >
          <span>Expand Your Knowledge</span>
          <ArrowUpRight size={18} />
        </button>
      </div>

      
      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={2}
          slidesPerView={1.1}
          loop={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
           breakpoints={{
            // Mobile
            320: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            // Small tablets
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            // Medium tablets
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            // Large tablets and desktop
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            // Extra large screens
            1280: {
              slidesPerView: 4,
              spaceBetween: 32,
            }
          }}
          className="pb-16"
        >
          {excellenceItems.map((item) => (
            <SwiperSlide key={item.id}>
              <ExcellenceCard 
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                onClick={() => handleCardClick(item)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CenterOfExcellenceSection;