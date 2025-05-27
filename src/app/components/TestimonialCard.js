"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialCard = ({ quote, author, role, company, isActive }) => {
  return (
    <div className={`rounded-3xl p-8 transition-all duration-500 w-full flex flex-col h-full border-2 ${
      isActive 
        ? 'bg-yellow-400 border-yellow-400 text-gray-800' 
        : 'bg-transparent border-yellow-400 text-yellow-600'
    }`}>
      <p className={`mb-6 text-lg leading-relaxed flex-grow ${
        isActive ? 'text-gray-800' : 'text-yellow-600'
      }`}>{quote}</p>
      
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
          <Image 
            src={`/images/User.jpg`} 
            alt={author}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className={`font-bold ${isActive ? 'text-gray-800' : 'text-yellow-600'}`}>{author}</p>
          <p className={`text-sm ${isActive ? 'text-gray-600' : 'text-yellow-500'}`}>{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);
  
  const testimonials = [
    {
      quote: "Islamic banking has truly changed my financial life. Their ethical practices and commitment to providing financial benefits have made a significant impact on my financial well-being.",
      author: "John Doe",
      role: "CEO",
      company: "XYZ Company",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      author: "Jane Smith",
      role: "CFO",
      company: "ABC Corporation",
    },
    {
      quote: "The Shariah-compliant investment options have helped me align my finances with my values. I highly recommend their services to anyone looking for ethical banking solutions.",
      author: "Ahmed Hassan",
      role: "Director",
      company: "Global Ventures",
    },
    {
      quote: "Outstanding service and professional approach to Islamic finance. They have helped me understand the principles while achieving my financial goals.",
      author: "Sarah Williams",
      role: "Manager",
      company: "Tech Solutions",
    },
    {
      quote: "Their commitment to Shariah compliance and customer satisfaction is exemplary. I trust them completely with my financial planning.",
      author: "Omar Al-Rashid",
      role: "Entrepreneur",
      company: "Innovation Hub",
    }
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Swiper Container */}
        <div className="testimonial-swiper-container">
          <Swiper
            onSwiper={setSwiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={handleSlideChange}
            watchOverflow={true}
            breakpoints={{
              // Mobile
              320: {
                slidesPerView: 1.5,
                spaceBetween: 16,
                centeredSlides: true,
              },
              // Small tablet
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              // Tablet
              768: {
                slidesPerView: 2.1  ,
                spaceBetween: 24,
                centeredSlides: true,
              },
              // Desktop
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: true,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard 
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  isActive={index === activeIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Custom Progress Indicator */}
        <div className="flex items-center justify-center mt-10">
          <span className="text-gray-800 font-medium mr-4 text-sm">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>

          <div className="w-150 h-1 bg-gray-300 rounded-full relative overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-yellow-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
          
          <span className="text-gray-800 font-medium ml-4 text-sm">
            {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>    
    </div>
  );
};

export default TestimonialsCarousel;