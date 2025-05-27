import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContentCard = ({ title }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl border border-white border-opacity-20 text-white h-full w-full flex flex-col justify-between overflow-hidden">
      {/* Header with Centre of Excellence label and arrow button */}
      <div className="flex justify-between items-center p-4 pb-0">
        <p className="text-sm text-white text-opacity-90">Centre of Excellence</p>
        <button className="rounded-full bg-white bg-opacity-20 p-2 transition hover:bg-opacity-30">
          <ArrowRight className="h-5 w-5 text-white" />
        </button>
      </div>
      
      {/* Title section with larger padding at bottom */}
      <div className="p-4 pt-2 pb-8">
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default ContentCard;