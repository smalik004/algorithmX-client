import React from 'react';
function IkeaCaseStudy() {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto ">
          {/* Left side with vertical yellow strip and image */}
          <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-yellow-400 absolute h-24 w-[360px] md:w-[500px] mt-[150px] md:mt-[190px] md:-ml-[24px]"></div>
            <div className="relative z-10 mx-auto p-[20px]">
              <img 
                src="/images/ikea.png" 
                alt="IKEA interior design" 
                className="md:w-[400px] md:h-[400px] w-full h-full shadow-lg"
              />
              {/* No IKEA text overlay as per instruction */}
            </div>
          </div>
          
          {/* Right side with information in 2-row column design */}
          <div className="w-full md:w-1/2 text-white flex flex-col justify-center">

            {/* First row */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-gray-400 font-medium mb-1">Industry</h3>
                <p className="text-white font-semibold text-lg">Retail</p>
              </div>
              <div>
                <h3 className="text-gray-400 font-medium mb-1">Services</h3>
                <p className="text-white font-semibold text-lg">Development and Deployment</p>
              </div>
            </div>
            
            {/* Second row */}
            <div className="grid  grid-cols-2 gap-8">
              <div>
                <h3 className="text-gray-400 font-medium mb-1">Business Type</h3>
                <p className="text-yellow-400 font-semibold text-lg">Enterprise</p>
              </div>
              <div>
                <h3 className="text-gray-400 font-medium mb-1">Build your idea</h3>
                <a href="#" className="text-yellow-400 font-semibold text-lg flex items-center">
                  Consult our experts
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default IkeaCaseStudy;