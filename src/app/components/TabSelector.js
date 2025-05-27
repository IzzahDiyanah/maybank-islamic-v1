"use client"
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const TabSelector = () => {
  const [activeTab, setActiveTab] = useState('Personal');
  
  return (
    <div className="bg-yellow-400 py-4 px-6 flex justify-center relative">
      <div className="bg-white bg-opacity-50 rounded-full p-1 inline-flex">
        <button 
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'Personal' ? 'bg-white shadow-sm' : 'hover:bg-white hover:bg-opacity-30'}`}
          onClick={() => setActiveTab('Personal')}
        >
          Personal
        </button>
        <button 
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'Business' ? 'bg-white shadow-sm' : 'hover:bg-white hover:bg-opacity-30'}`}
          onClick={() => setActiveTab('Business')}
        >
          Business
        </button>
        <button 
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'Global' ? 'bg-white shadow-sm' : 'hover:bg-white hover:bg-opacity-30'}`}
          onClick={() => setActiveTab('Global')}
        >
          Global
        </button>
      </div>
      
      <div className="absolute right-6 bottom-6 md:right-10 md:bottom-10">
        <button className="bg-yellow-300 rounded-full p-3 shadow-lg hover:bg-yellow-200 transition">
          <MessageSquare className="h-6 w-6 text-yellow-900" />
        </button>
      </div>
    </div>
  );
};

export default TabSelector;