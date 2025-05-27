"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { 
  CurrencyDollarIcon, BriefcaseIcon, DocumentTextIcon, DocumentIcon, 
  GlobeAltIcon, ArrowPathIcon, CreditCardIcon, HomeIcon, TruckIcon, 
  UserIcon, ChartBarIcon, AcademicCapIcon, ShieldCheckIcon, 
  HomeModernIcon, PresentationChartLineIcon, BanknotesIcon, 
  SparklesIcon, StarIcon, ChartPieIcon 
} from '@heroicons/react/24/outline';

// Product Categories Component (can be used in Hero or mobile menu)
const ProductCategories = ({ mobile = false, onClose = null, isMobileNavigation = false }) => {
  const [currentView, setCurrentView] = useState('main');
  const [navigationStack, setNavigationStack] = useState(['main']);

  // Navigation functions for mobile menu
  const navigateTo = (view) => {
    setCurrentView(view);
    setNavigationStack(prev => [...prev, view]);
  };

  const goBack = () => {
    if (navigationStack.length > 1) {
      const newStack = navigationStack.slice(0, -1);
      setNavigationStack(newStack);
      setCurrentView(newStack[newStack.length - 1]);
    }
  };

  // Product categories from the image
  const productCategories = [
    {
      id: 'banking',
      title: "BANKING",
      icon: "CurrencyDollarIcon",
      products: [
        { icon: "CurrencyDollarIcon", name: "Saving Account" },
        { icon: "BriefcaseIcon", name: "Current Account" },
        { icon: "DocumentTextIcon", name: "Deposits/IA" },
        { icon: "DocumentIcon", name: "Terms" },
        { icon: "GlobeAltIcon", name: "Foreign" },
        { icon: "ArrowPathIcon", name: "Mudarabah" },
        { icon: "CreditCardIcon", name: "Cards" }
      ]
    },
    {
      id: 'financing',
      title: "FINANCING",
      icon: "HomeIcon",
      products: [
        { icon: "HomeIcon", name: "Property" },
        { icon: "TruckIcon", name: "Vehicle" },
        { icon: "UserIcon", name: "Personal" },
        { icon: "ChartBarIcon", name: "Unit Trust" },
        { icon: "AcademicCapIcon", name: "Education" }
      ]
    },
    {
      id: 'insurance',
      title: "INSURANCE & TAKAFUL",
      icon: "ShieldCheckIcon",
      products: [
        { icon: "ShieldCheckIcon", name: "Personal Accident" },
        { icon: "TruckIcon", name: "Motor" },
        { icon: "HomeModernIcon", name: "Home" }
      ]
    },
    {
      id: 'investment',
      title: "INVESTMENT",
      icon: "ChartBarIcon",
      products: [
        { icon: "ChartBarIcon", name: "Share Trading" },
        { icon: "DocumentTextIcon", name: "Wasiat" },
        { icon: "CurrencyDollarIcon", name: "Foreign Currency" },
        { icon: "PresentationChartLineIcon", name: "Multi-Asset Investment Account-i" },
        { icon: "BanknotesIcon", name: "Maybank Islamic Gold Account-i" },
        { icon: "DocumentIcon", name: "ESOS/IPO Financing-i" }
      ]
    },
    {
      id: 'wealth',
      title: "ISLAMIC WEALTH MANAGEMENT",
      icon: "SparklesIcon",
      products: [
        { icon: "SparklesIcon", name: "Wealth Creation" },
        { icon: "BanknotesIcon", name: "Wealth Accumulation" },
        { icon: "ShieldCheckIcon", name: "Wealth Preservation" },
        { icon: "StarIcon", name: "Wealth Purification" },
        { icon: "ChartPieIcon", name: "Wealth Distribution" }
      ]
    }
  ];

  // Main menu items for mobile navigation
  const mainMenuItems = [
    { 
      title: 'Personal', 
      icon: 'UserIcon',
      view: 'personal'
    },
    { 
      title: 'Business', 
      icon: 'BriefcaseIcon',
      view: 'business'
    },
    { 
      title: 'Global', 
      icon: 'GlobeAltIcon',
      view: 'global'
    },
    { 
      title: 'COE', 
      icon: 'DocumentTextIcon',
      view: 'coe'
    },
    { 
      title: 'About Us', 
      icon: 'SparklesIcon',
      view: 'about'
    }
  ];

  // Function to get the correct icon component
  const getIconComponent = (iconName) => {
    const iconMap = {
      'CurrencyDollarIcon': CurrencyDollarIcon,
      'BriefcaseIcon': BriefcaseIcon,
      'DocumentTextIcon': DocumentTextIcon,
      'DocumentIcon': DocumentIcon,
      'GlobeAltIcon': GlobeAltIcon,
      'ArrowPathIcon': ArrowPathIcon,
      'CreditCardIcon': CreditCardIcon,
      'HomeIcon': HomeIcon,
      'TruckIcon': TruckIcon,
      'UserIcon': UserIcon,
      'ChartBarIcon': ChartBarIcon,
      'AcademicCapIcon': AcademicCapIcon,
      'ShieldCheckIcon': ShieldCheckIcon,
      'HomeModernIcon': HomeModernIcon,
      'PresentationChartLineIcon': PresentationChartLineIcon,
      'BanknotesIcon': BanknotesIcon,
      'SparklesIcon': SparklesIcon,
      'StarIcon': StarIcon,
      'ChartPieIcon': ChartPieIcon
    };
    
    return iconMap[iconName] || DocumentIcon; // Default fallback
  };

  // Render main menu for mobile navigation
  const renderMainMenu = () => (
    <>
      {/* Main content area - pushes menu items to bottom */}
      <div className="flex-1"></div>
      
      {/* Main menu items at the bottom */}
      <div className="px-6 pb-6">
        <div className="text-sm text-gray-500 font-medium mb-6">PERSONAL</div>
        <div className="space-y-1">
          {mainMenuItems.map((item, index) => {
            const IconComponent = getIconComponent(item.icon);
            return (
              <button
                key={index}
                onClick={() => navigateTo(item.view)}
                className="flex items-center w-full py-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
              >
                <IconComponent className="h-6 w-6 text-yellow-500 mr-4" />
                <span className="text-gray-800 font-medium">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );

  // Render personal sub-menu with all product categories
  const renderPersonalMenu = () => (
    <>
      <div className="text-sm text-gray-500 font-medium mb-6 px-6">PERSONAL</div>
      <div className="space-y-1">
        {/* Banking items */}
        {productCategories[0].products.map((product, index) => {
          const IconComponent = getIconComponent(product.icon);
          return (
            <div
              key={index}
              className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <IconComponent className="h-5 w-5 text-yellow-500 mr-4" />
              <span className="text-gray-800">{product.name}</span>
            </div>
          );
        })}
        
        {/* Sub-sections with arrows */}
        {productCategories.slice(1).map((category, index) => {
          const IconComponent = getIconComponent(category.icon);
          return (
            <button
              key={`category-${index}`}
              onClick={() => navigateTo(category.id)}
              className="flex items-center justify-between w-full px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <IconComponent className="h-5 w-5 text-yellow-500 mr-4" />
                <span className="text-gray-800 font-medium">{category.title}</span>
              </div>
              <span className="text-gray-400">›</span>
            </button>
          );
        })}
      </div>

      <div className="px-6 py-6">
        <button
          onClick={goBack}
          className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
      </div>
    </>
  );

  // Render specific category sub-menu
  const renderCategoryMenu = (categoryId) => {
    const category = productCategories.find(cat => cat.id === categoryId);
    if (!category) return null;

    return (
      <>
        <div className="text-sm text-gray-500 font-medium mb-6 px-6">{category.title}</div>
        <div className="space-y-1">
          {category.products.map((product, index) => {
            const IconComponent = getIconComponent(product.icon);
            return (
              <div
                key={index}
                className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <IconComponent className="h-5 w-5 text-yellow-500 mr-4" />
                <span className="text-gray-800">{product.name}</span>
              </div>
            );
          })}
        </div>

        <div className="px-6 py-6">
          <button
            onClick={goBack}
            className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
        </div>
      </>
    );
  };

  // Mobile Navigation Mode
  if (isMobileNavigation) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mr-2">
              <span className="text-xs">🌐</span>
            </div>
            <span className="text-sm font-medium">EN</span>
          </div>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto py-8 flex flex-col">
          {currentView === 'main' && renderMainMenu()}
          {currentView === 'personal' && renderPersonalMenu()}
          {currentView !== 'main' && currentView !== 'personal' && renderCategoryMenu(currentView)}
        </div>
      </div>
    );
  }

  // Original mobile menu mode (for backward compatibility)
  if (mobile) {
    return (
      <div className="bg-gray-50 pb-4">
        {productCategories.map((category, catIndex) => (
          <div key={catIndex} className="px-6 py-3">
            <h3 className="text-xs font-medium text-gray-500 py-2">{category.title}</h3>
            <ul className="pt-2">
              {category.products.map((product, prodIndex) => {
                const IconComponent = getIconComponent(product.icon);
                
                return (
                  <li key={prodIndex} className="py-2">
                    <a href="#" className="flex items-center text-gray-700 hover:text-yellow-600">
                      <IconComponent className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>{product.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // Desktop dropdown mode
  return (
    <div className="bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-5 gap-0">
          {productCategories.map((category, catIndex) => (
            <div key={catIndex} className="px-3">
              <h3 className="text-xs font-medium text-gray-500 mb-5">{category.title}</h3>
              <div className="space-y-3">
                {category.products.map((product, prodIndex) => {
                  const IconComponent = getIconComponent(product.icon);
                  
                  return (
                    <a 
                      key={prodIndex} 
                      href="#" 
                      className={`flex items-center space-x-2 hover:bg-yellow-50 p-2 rounded ${prodIndex === 0 && catIndex === 1 ? 'bg-yellow-50' : ''}`}
                    >
                      <IconComponent className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-gray-700">{product.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;