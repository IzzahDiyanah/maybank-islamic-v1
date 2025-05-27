"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Calculator, Calendar, HelpCircle } from 'lucide-react';

const QuickLinkCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative rounded-3xl overflow-hidden h-full transition-all duration-300 bg-yellow-50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 flex flex-col h-full">
        {/* Icon */}
        <div className={`${isHovered ? 'text-gray-800' : 'text-yellow-600'} mb-6 transition-colors duration-300`}>
          <Icon size={24} />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-medium text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        
        {/* Hover effect with curved layer and arrow */}
        {isHovered && (
          <div className="absolute bottom-2 right-2">
            {/* Curved layer behind the arrow */}
            <div className="absolute -bottom-7 -right-6 w-[105px] h-[105px]">
              <Image
                src="/images/curvedYellowLayer.png"
                alt="Background curve"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            
            {/* Arrow icon on top */}
            <div className="relative z-10 bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-yellow-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const QuickLinksSection = () => {
  const quickLinks = [
    {
      icon: Calendar,
      title: "Maybank EzyQ",
      description: "Skip the queue and make your branch appointment online."
    },
    {
      icon: Calculator,
      title: "Rate Calculator",
      description: "Calculate your loan or savings interest rates instantly with our user-friendly Rates Calculator."
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Find quick answers in our comprehensive FAQ section."
    }
  ];
  
  return (
    <div className="bg-yellow-400 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Quick Links
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <QuickLinkCard 
              key={index}
              icon={link.icon}
              title={link.title}
              description={link.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinksSection;