"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { CountUp } from 'countup.js';

const PersonalFinanceSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Business');
  const countRefs = useRef([]);
  const countInstancesRef = useRef([]);
  
  // Content for different tabs
  const tabContent = {
    Personal: {
      title: "Achieve Your Financial Goals, Guided by Islamic Principles",
      description: "Explore a diverse range of Shariah-compliant accounts, cards, financing options, and investment solutions to manage your finances and pursue your personal aspirations, all while adhering to your values.",
      image: "/images/image.webp"
    },
    Business: {
      title: "Advancing Your Business with Islamic Financial Expertise",
      description: "Grow your business with our range of Shariah-compliant financial services, tailored to your company's needs. From business accounts and financing to investment opportunities, we provide solutions that align with Islamic principles.",
      image: "/images/image.webp"
    },
    Global: {
      title: "Global Financial Expertise, Rooted in Ethical Islamic Values",
      description: "Explore banking options that fit your principles, with fair and transparent accounts, cards, and investment choices with global Islamic standards. Wherever your path leads, we're here to support your financial journey with integrity.",
      image: "/images/image.webp",
      stats: [
        { value: 400, suffix: "+", label: "Branches", id: "stat-branches" },
        { value: 7, suffix: "", label: "Regional Presence", id: "stat-regions" },
        { value: 40, suffix: "M", label: "Zakat Contributor", id: "stat-zakat" }
      ]
    }
  };

  // Get current tab content
  const currentTab = tabContent[activeTab];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when section comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start count animation when Global tab and component is visible
          if (activeTab === 'Global') {
            startCountAnimation();
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeTab]);
  
  // Setup count animation when tab changes to Global
  useEffect(() => {
    if (activeTab === 'Global' && isVisible) {
      // Need to use setTimeout to ensure DOM elements are ready
      setTimeout(() => {
        startCountAnimation();
      }, 100);
    }
  }, [activeTab, isVisible]);
  
  // Start the count animation
  const startCountAnimation = () => {
    if (activeTab === 'Global') {
      // Clear previous instances
      countInstancesRef.current.forEach(instance => {
        if (instance && typeof instance.reset === 'function') {
          instance.reset();
        }
      });
      
      // Create new instances
      countInstancesRef.current = tabContent.Global.stats.map((stat, index) => {
        const element = document.getElementById(stat.id);
        if (!element) return null;
        
        const options = {
          startVal: 0,
          duration: 2.5,
          useEasing: true,
          useGrouping: true,
          suffix: stat.suffix,
        };
        
        const countUp = new CountUp(stat.id, stat.value, options);
        if (countUp.error) {
          console.error(countUp.error);
          return null;
        }
        
        countUp.start();
        return countUp;
      });
    }
  };
  
  return (
    <div 
      ref={sectionRef}
      className={`bg-yellow-400 rounded-3xl mx-auto my-8 p-8 md:p-12 overflow-hidden transition-transform duration-1500 ease-out hover:scale-105 container-responsive ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}
    >
      {/* Tabs at the top */}
      <div className="flex justify-center mb-10">
        <div className="bg-yellow-100 bg-opacity-50 rounded-full p-1 inline-flex">
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'Personal' ? 'bg-yellow-400 shadow-sm' : 'hover:bg-yellow-200 hover:bg-opacity-30'}`}
            onClick={() => setActiveTab('Personal')}
          >
            Personal
          </button>
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'Business' ? 'bg-yellow-400 shadow-sm' : 'hover:bg-yellow-200 hover:bg-opacity-30'}`}
            onClick={() => setActiveTab('Business')}
          >
            Business
          </button>
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'Global' ? 'bg-yellow-400 shadow-sm' : 'hover:bg-yellow-200 hover:bg-opacity-30'}`}
            onClick={() => setActiveTab('Global')}
          >
            Global
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Left column - Title */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-[2.75rem] font-semibold text-gray-800 mb-6 px-6">
            {currentTab.title}
          </h2>
        </div> 
        {/* Right column - Description */}
        <div className="flex-1">
          <p className="text-gray-800 mb-6">
            {currentTab.description}
          </p>

           {/* Stats for Global tab with CountUp.js */}
          {activeTab === 'Global' && (
            <div className="flex justify-between mb-8">
              {currentTab.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gray-800">
                    <span id={stat.id}>0</span>
                  </div>
                  <div className="text-sm text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          )}       

           {/* Button */}
          <div className="mt-18">
            <button className="bg-black text-white rounded-full px-6 py-3 flex space-x-2 transition hover:bg-gray-800">
              <span>Learn More</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Image section - Full width */}
      <div className="rounded-2xl overflow-hidden mt-4 w-full">
        <div className="overflow-hidden w-full">
          <Image 
            src={currentTab.image}
            alt={currentTab.title}
            width={1200}
            height={400}
            priority
            quality={90}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalFinanceSection;