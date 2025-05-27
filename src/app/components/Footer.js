"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, ChevronDown, ChevronUp } from 'lucide-react';

const FooterColumn = ({ title, links, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="mb-6 md:mb-0">
      {/* Title with dropdown toggle for mobile */}
      <div 
        className={`font-bold text-white uppercase mb-4 text-sm flex justify-between items-center ${isMobile ? 'cursor-pointer' : ''}`}
        onClick={isMobile ? toggleDropdown : undefined}
      >
        <h3>{title}</h3>
        {isMobile && (
          <span className="text-white">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        )}
      </div>
      
      {/* Links - always visible on desktop, toggleable on mobile */}
      <ul className={`space-y-2 ${isMobile && !isOpen ? 'hidden' : 'block'}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="text-[#B5B5B5] hover:text-white transition text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const footerLinks = [
    {
      title: "ABOUT US",
      links: [
        "About Maybank Islamic",
        "Corporate Profile & Corporate Governance",
        "News & Highlights"
      ]
    },
    {
      title: "PERSONAL BANKING",
      links: [
        "Banking",
        "Deposits / IA",
        "Terms",
        "Foreign",
        "Mudarabah",
        "Cards",
        "Financing",
        "Insurance & Takaful",
        "Investment",
        "Islamic Wealth Management"
      ]
    },
    {
      title: "BUSINESS BANKING",
      links: [
        "Financing",
        "Deposits / IA",
        "Trade",
        "Islamic Social Finance",
        "ITSAD"
      ]
    },
    {
      title: "GLOBAL BANKING",
      links: [
        "Global Markets",
        "Corporate Banking",
        "Regional Presence",
        "Premier Mudharabah Account-i (PMA)"
      ]
    },
    {
      title: "COE",
      links: [
        "Halal2u",
        "Resolution",
        "Media",
        "Learning Centre",
        "Finance Of The Day"
      ]
    }
  ];

  const secondaryLinks = [
    "Contact Us",
    "Rates",
    "Corporate Governance",
    "PRM Brochure",
    "Security & Privacy",
    "Terms & Conditions"
  ];

//    const partnerLogos = [
//     "/images/partners/logo1.png",
//     "/images/partners/logo2.png",
//     "/images/partners/logo3.png",
//     "/images/partners/logo4.png",
//     "/images/partners/logo5.png",
//     "/images/partners/logo6.png",
//     "/images/partners/logo7.png",
//     "/images/partners/logo8.png",
//     "/images/partners/logo9.png",
//     "/images/partners/logo10.png",
//     "/images/partners/logo11.png",
//     "/images/partners/logo12.png",
//   ];

  return (
    <footer className="bg-[#373737]">
      {/* Main Footer */}
      <div className="container mx-auto py-12 px-4">
        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerLinks.map((column, index) => (
            <FooterColumn 
              key={index} 
              title={column.title} 
              links={column.links}
              isMobile={isMobile}
            />
          ))}
        </div>
        
        {/* Divider */}
        <div className="border-t border-yellow-300 my-10"></div>
        
        {/* Secondary Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Links */}
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap gap-4">
              {secondaryLinks.map((link, index) => (
                <li key={index}>
                  {index > 0 && <span className="text-[#B5B5B5] mr-4 hidden md:inline">|</span>}
                  <a href="#" className="text-gray-100 hover:text-white transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Logo and Company Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8">
          <div>
            <div className="text-white text-2xl font-bold mb-4">
              Maybank <span className="font-light">Islamic</span>
            </div>
            <div className="text-gray-200 text-xs mb-1">
              © 2022 Malayan Banking BERHAD (Co. Reg. No.: 196301000142)
            </div>
            <div className="text-gray-200 text-xs mb-4">
              Maybank Islamic Berhad (Co. Reg. No.: 200701029411)
            </div>
            <div className="text-gray-200">
              Best viewed on the latest versions of Chrome, Firefox, Edge, Safari.
            </div>
          </div>
          
          {/* Social Media */}
          <div className="mt-6 md:mt-0">
            <div className="text-white mb-3 text-sm">CONNECT WITH US</div>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                <Youtube size={18} className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                <span className="text-white text-xs font-bold">WC</span>
              </a>
            </div>
            
            {/* Ethics Charter */}
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-xs border border-gray-700 px-3 py-1 rounded">
                Business Ethics Charter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xs border border-gray-700 px-3 py-1 rounded">
                Business Ethics Charter
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partner Logos */}
       <div className="w-full">
            <Image 
                src="/images/footer-logo.png"
                alt="Partner logos"
                width={1200}
                height={80}
                className="w-full h-auto object-contain"
            />
            </div>

      {/* Partner Logos if image provided */}
      {/* <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="w-16 h-8 md:w-20 md:h-10 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/80x40?text=Logo";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;