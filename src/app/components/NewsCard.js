"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewsCard = ({ image, title, date, category, index, onHover, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(index);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div 
      className={`flex flex-col rounded-3xl h-full transition-all duration-300 ${
        isHovered ? 'bg-yellow-400 scale-105' : 'bg-white shadow-sm'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image container with fixed height */}
      <div className={`relative ${isHovered ? 'h-0 opacity-0' : 'h-48 md:h-64 opacity-100'} transition-all duration-300 overflow-hidden`}>
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover w-full"
        />
      </div>
      
      {/* Content */}
      <div className={`p-6 flex flex-col flex-grow ${isHovered ? 'pt-8 pb-16' : ''}`}>
        <h3 className={`text-lg font-semibold mb-2 transition-all duration-300 ${isHovered ? 'text-xl' : ''}`}>{title}</h3>
        <div className="mt-auto flex items-center text-sm text-gray-600 pt-4">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>
        
        {/* Arrow Icon shown on hover */}
        {isHovered && (
          <div className="absolute bottom-6 right-6 bg-black rounded-full p-2 transition-all duration-300">
            <ArrowUpRight className="h-5 w-5 text-yellow-400" />
          </div>
        )}
      </div>
    </div>
  );
};

const NewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);
  
  const newsItems = [
    {
      image: "/images/Mask group-1.webp",
      title: "Maybank Islamic funds urban farming initiative to help reduce income inequality and poverty.",
      date: "February 16, 2023",
      category: "Investment"
    },
    {
      image: "/images/Mask group-2.webp",
      title: "Maybank Islamic Launches EzyWasiat - A Comprehensive Digitised Wasiat for Islamic Estate Planning.",
      date: "June 14, 2023",
      category: "Investment"
    },
    {
      image: "/images/Mask group-1.webp",
      title: "Maybank Islamic Named Best Islamic Bank in Asia by Euromoney.",
      date: "August 16, 2023",
      category: "Investment"
    },
    {
      image: "/images/Mask group-2.webp",
      title: "Maybank Islamic funds urban farming initiative to help reduce income inequality and poverty.",
      date: "February 16, 2023",
      category: "Investment"
    }
  ];
  
  const totalSlides = newsItems.length;
  
  // Handle card hover events
  const handleCardHover = (index) => {
    setHoverIndex(index);
  };
  
  // Clear hover state when mouse leaves the card
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleExpandClick = () => {
    console.log('Expand Your Knowledge clicked');
  };
  
  // Determine which index to use for the progress bar
  const displayIndex = hoverIndex !== null ? hoverIndex : activeIndex;
  
  return (
    <div className="w-full px-4 md:px-32">
      <div className="mx-auto py-16 px-4 lg:px-7">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest News<br />and Press Release
          </h2>
          
          <button 
            onClick={handleExpandClick}
            className="bg-black text-yellow-400 rounded-full px-6 py-3 flex items-center space-x-2 transition hover:bg-gray-800 w-fit hover:scale-105"
          >
            <span className="mr-2">Expand Your Knowledge</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
        
        <div className="relative py-8 -my-8" onMouseLeave={handleMouseLeave}>
          <Swiper
            onSwiper={setSwiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.3}
            loop={true}
            onSlideChange={handleSlideChange}
            breakpoints={{
              // Mobile
              320: {
                slidesPerView: 1.3,
                spaceBetween: 16,
              },
              // Medium tablets
              768: {
                slidesPerView: 2,
                spaceBetween: 44,
              },
              // Large tablets
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 3.2,
                spaceBetween: 4,
              }
            }}
            className="news-swiper pb-4"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="w-full mx-auto py-4">
                  <NewsCard 
                    image={item.image}
                    title={item.title}
                    date={item.date}
                    category={item.category}
                    index={index}
                    onHover={handleCardHover}
                    isActive={index === activeIndex}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Custom Progress Bar */}
        <div className="flex items-center mt-6">
          <span className="text-gray-800 font-medium mr-3">01</span>
          <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
            <div 
              className="absolute left-0 top-0 h-full bg-yellow-400 rounded-full transition-all duration-300"
              style={{ width: `${((displayIndex + 1) / totalSlides) * 100}%` }}
            ></div>
          </div>
          <span className="text-gray-800 font-medium ml-3">0{totalSlides}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;