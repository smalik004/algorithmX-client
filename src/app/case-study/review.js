import React from 'react';

export default function TestimonialSection() {
  return (
    <section className="relativ bg-black flex items-center justify-center px-4 py-16  overflow-hidden">
        
      <div className="relative max-w-7xl w-full mx-auto flex flex-col md:flex-row mb-[80px]">
        {/* Left side - Profile (30%) */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center mb-8 md:mb-0">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img 
              src="/billy-lan.jpg" 
              alt="Billy Lan" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-blue-600 mb-1">Billy Lan</h3>
          <p className="text-blue-500">CTO and Co-founder, JobGet</p>
        </div>
        
        {/* Right side - Review (70%) */}
        <div className="relative md:w-2/3 text-white text-lg md:text-xl lg:text-2xl">
          {/* Background Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <img 
              src="images/adidas1.svg" 
              alt="Company Logo" 
              className="w-48 h-auto"
            />
          </div>
          
          <div className="flex items-start relative z-10">
            <img 
              src="/images/quot-icon.webp" 
              alt="Opening quote" 
              className="w-6 h-auto mr-2"
            />

            <div className="flex-1">
              <p className="text-white leading-relaxed inline">
                With little presence on mobile in the Middle Eastern region, we wanted to outsource the app
                development to a company that could understand as well as execute our requirements efficiently. When we
                saw AppInventiv's vast portfolio of clients followed by having a discussion meeting, we knew it was the right
                company that could fulfil all our requirements.
              </p>
              
              <img 
                src="/images/quot-icon.webp" 
                alt="Closing quote" 
                className="w-6 h-auto inline-block ml-2 rotate-180 align-text-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}