"use client"
import React,{ useState } from 'react';
import { NavigationProvider } from './components/Navbar/Navigation';
import Navigation from './components/Navbar/Navigation';
import SearchPage from './components/Navbar/Search';
import Hero from './components/Header';
import Slider from './components/Slider';
import FinanceSection from './components/FinanceSection';
import CenterOfExcellence from './components/ExcellenceCard';
import TestimonialCard from './components/TestimonialCard';
import NewsCard from './components/NewsCard';
import QuickLinkCard from './components/QuickLinkCard';
import Footer from './components/Footer';

export default function Page() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };
  return (
    <NavigationProvider>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navigation */}
        <Navigation onSearchClick={handleSearchClick}/>
        {/* Main Content */}
        <main className="flex-1 relative">
          <SearchPage isOpen={searchOpen} onClose={handleSearchClose} />
          {/* Hero Section with Slider */}
          <div className="relative h-[620px]">
            <Hero />
            <div className="absolute bottom-0 right-0 w-full lg:w-1/2 z-10">
              <Slider />
            </div> 
          </div>

          {/* Personal Finance Section - will zoom in on scroll */}
          <FinanceSection />

          <CenterOfExcellence />

          <TestimonialCard />

          <NewsCard />

          <QuickLinkCard />

          <Footer />
   
        </main>

        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </NavigationProvider>
  );
}