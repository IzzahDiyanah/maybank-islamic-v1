import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navbar/Navigation';
import Hero from '../components/Header';
import Slider from '../components/Slider';
import TabSelector from '../components/TabSelector';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Maybank Islamic - Your Finances, Guided by Islamic Principles</title>
        <meta name="description" content="Discover Shariah-compliant banking with Maybank Islamic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Hero Section with Slider */}
        <div className="relative">
          <Hero />
          <Slider />
        </div>
        
        {/* Tab Selector */}
        <TabSelector />
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
  );
};

export default Home;