"use client"
import React, { useState, createContext } from 'react';
import { Search, Menu, ChevronDown } from 'lucide-react';
import ProductCategories from './ProductCategories';

export const NavContext = createContext();

const Navigation = ({ onSearchClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(null); // Track clicked menu
  const { hoveredMenu, setHoveredMenu } = React.useContext(NavContext);
  
  const menuItems = [
    {
      title: 'About Us',
      submenu: ['Our Story', 'Leadership', 'Careers', 'Media Centre'],
      href: "#"
    },
    {
      title: 'Personal',
      submenu: ['Accounts', 'Financing', 'Investment', 'Cards', 'Insurance'],
      href: "#"
    },
    {
      title: 'Business',
      submenu: ['SME Banking', 'Corporate Banking', 'Trade Finance', 'Cash Management'],
      href: "#"
    },
    {
      title: 'Global',
      submenu: ['International Banking', 'Foreign Exchange', 'Remittance'],
      href: "#"
    },
    {
      title: 'COE',
      submenu: ['Centre of Excellence', 'Research & Publications', 'Events'],
      href: "#"
    }
  ];
  
  // Handle mouse enter on menu item
  const handleMouseEnter = (menu) => {
    // Only set hovered menu if no menu is currently clicked/pinned
    if (clickedMenu === null) {
      setHoveredMenu(menu);
    }
  };
  
  // Handle mouse leave on menu item
  const handleMouseLeave = () => {
    // Only clear hover if no menu is clicked/pinned
    if (clickedMenu === null) {
      setHoveredMenu(null);
    }
  };

  // Handle click on menu item
  const handleMenuClick = (menu, event) => {
    event.preventDefault();
    
    if (clickedMenu === menu) {
      // If same menu is clicked, close it
      setClickedMenu(null);
      setHoveredMenu(null);
    } else {
      // If different menu is clicked, set it as clicked/pinned
      setClickedMenu(menu);
      setHoveredMenu(menu);
    }
  };

  // Check if a menu should be shown (either hovered or clicked)
  const shouldShowMenu = (menu) => {
    return hoveredMenu === menu || clickedMenu === menu;
  };

  const handleSearchClick = () => {
    setMobileMenuOpen(false);
    if (onSearchClick) {
      onSearchClick();
    }
  };
  
  return (
    <>
      <nav className="bg-[#FFCA28] py-5 px-8 md:px-10 lg:px-36 flex justify-between items-center">
        <div className="flex items-center px-2">
          <h1 className="text-2xl lg:text-4xl font-bold mr-1">Maybank</h1>
          <span className="text-base lg:text-2xl pt-2">Islamic</span>
        </div>
        
        {/* Right side container with menu items and other elements */}
        <div className="flex items-center space-x-2 md:space-x-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href={item.href} 
                  className={`text-sm font-medium flex items-center justify-center left-0 transition-colors whitespace-nowrap px-2 ${
                    shouldShowMenu(item.title) ? 'text-white' : 'text-black font-extralight hover:text-white'
                  }`}
                  onClick={(e) => handleMenuClick(item.title, e)}
                >
                  {item.title} +
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center text-sm font-medium">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              EN
            </span>
          </div>
          
          <button 
            onClick={handleSearchClick}
            className="flex items-center p-2 text-left font-medium"
          >
            <Search className="h-5 w-5" />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-1 bottom-0"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      
      {/* Desktop Dropdown - Show ProductCategories for Personal menu */}
      {/* {shouldShowMenu('Personal') && (
        <div className="absolute left-0 right-0 z-50 bg-white shadow-lg">
          <ProductCategories />
        </div>
      )} */}
      
      {/* Mobile Menu using ProductCategories */}
      {mobileMenuOpen && (
        <ProductCategories 
          isMobileNavigation={true}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// Provider component to wrap the app
export const NavigationProvider = ({ children }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  
  return (
    <NavContext.Provider value={{ hoveredMenu, setHoveredMenu }}>
      {children}
    </NavContext.Provider>
  );
};

export default Navigation;