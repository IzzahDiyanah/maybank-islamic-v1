import React, { useContext   } from 'react';
import Image from 'next/image'
import { NavContext } from './Navbar/Navigation';
import ProductCategories from './Navbar/ProductCategories';

const Hero = () => {
  const { hoveredMenu, clickedMenu } = useContext(NavContext);
  const shouldShowPersonalMenu = hoveredMenu === 'Personal' || clickedMenu === 'Personal';

  return (
    <div className="relative h-[1100px] w-full overflow-hidden md:pl-16">
      <Image
        src="/images/Mask group-4.webp"
        alt="Background image"
        fill
        priority
        quality={90}
        className="object-cover"
      />
      
      <div className="relative text-white md:px-4 md:py-24 ml-2 md:ml-12 max-w-3xl flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold p-6 lg:mt-1">
          Your Finances, Guided by Islamic Principles
        </h1>
        <p className="text- md:text-base p-6">
          At Maybank Islamic, our commitment to Shariah-compliant banking is 
          unwavering. Discover a partnership where financial growth aligns with ethical 
          standards, ensuring that your investments and daily transactions contribute 
          to a just and equitable economy.
        </p>
      </div>

       {/* Dropdown appears at the top of the Hero when Personal is hovered or clicked */}
      {shouldShowPersonalMenu && (
        <div className="absolute top-0 left-0 w-full z-999">
          <ProductCategories />
        </div>
      )}
    </div>
  );
};

export default Hero;