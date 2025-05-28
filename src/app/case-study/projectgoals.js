'use client'
import React from 'react';

export default function ProjectGoals() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Project Goals
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </h1>

        {/* Desktop Layout - hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-5 gap-8 relative">
          {/* Left side content boxes */}
          <div className="col-span-2 space-y-32">
            <div className="bg-black p-6 rounded-lg  ">
              <div className="text-8xl font-bold text-gray-700 ">1</div>
              <h3 className="text-[20px] font-bold mb-4">Conceptualization of the project</h3>
              <p className="text-gray-300">
                We started with the customer journey mapping process, ensuring that we have a complete understanding of the roadblocks IKEA offline customers face when shopping in-store. The understanding then laid the basis for the ERP solution's feature-set and the integration choices.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg  ">
              <div className="text-8xl font-bold text-gray-700">3</div>
              <h3 className="text-[20px] font-bold mb-4">Integrate the facility to gather customers' information</h3>
              <p className="text-gray-300">
                A crucial outcome that the IKEA management team was expecting was in terms of customers' information that they could then use as marketing assets. We brainstormed and implemented solutions to gather this data efficiently.
              </p>
            </div>
          </div>
          
          {/* Center column with phone */}
          <div className="col-span-1 flex justify-center items-center relative">
            <div className="w-64 relative z-10">
              <img 
                src="/images/project-goal-screen.webp" 
                alt="IKEA Mobile App Interface" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Dotted lines */}
            <div className="absolute inset-0 w-full h-full">
              {/* Top-left to center - adjusted to match image */}
              <div className="absolute top-1/2 -left-[250px] w-full h-px border-t-2 border-dashed border-gray-600" style={{ width: '250px' }}></div>
              <div
  className="absolute top-[40%] -left-[250px] h-[50px] w-px border-l-2 border-dashed border-gray-600"
  
></div>

              {/* Bottom-left to center - adjusted to match image */}
              <div className="absolute top-[46%] -left-[250px] w-full h-px border-t-2 border-dashed border-gray-600" style={{ width: '250px' }}></div>
              <div
  className="absolute top-[50%] -left-[250px] h-[50px] w-px border-l-2 border-dashed border-gray-600"
  
></div>
              
              {/* Top-right to center - adjusted to match image */}
              <div className="absolute top-1/2 -right-[250px] w-full h-px border-t-2 border-dashed border-gray-600" style={{ width: '250px' }}></div>
              <div
  className="absolute top-[40%] -right-[250px] h-[50px] w-px border-l-2 border-dashed border-gray-600"
  
></div>
              
              {/* Bottom-right to center - adjusted to match image */}
              <div className="absolute top-[46%] -right-[250px] w-full h-px border-t-2 border-dashed border-gray-600" style={{ width: '250px' }}></div>
              <div
  className="absolute top-[50%] -right-[250px] h-[50px] w-px border-l-2 border-dashed border-gray-600"
  
></div>
            </div>
          </div>
          
          {/* Right side content boxes */}
          <div className="col-span-2 space-y-32">
            <div className="bg-black p-6 rounded-lg  ">
              <div className="text-8xl font-bold text-gray-700 ">2</div>
              <h3 className="text-[20px] font-bold mb-4">Creation of an ERP solution</h3>
              <p className="text-gray-300">
                We worked on the creation of the ERP solution following an agile development approach. Our team of designers, developers, and deployment experts worked together to build a solution that would become the first point of contact for every IKEA walk-in customer.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg  ">
              <div className="text-8xl font-bold text-gray-700 ">4</div>
              <h3 className="text-[20px] font-bold mb-4">Deploy the solution across individual IKEA stores</h3>
              <p className="text-gray-300">
                Our deployment team worked on the launch of the ERP solution across different IKEA stores, each with their individual servers. We worked remotely on the IKEA private networks to ensure a smooth rollout process.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - visible only on mobile */}
        <div className="md:hidden">
          <div className="mx-auto mb-12 w-64">
            <img 
              src="/images/project-goal-screen.webp" 
              alt="IKEA Mobile App Interface" 
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-12">
            <div className="bg-black p-6 rounded-lg  ">
              <div className="text-6xl  font-bold text-gray-700 mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Conceptualization of the project</h3>
              <p className="text-gray-300 text-sm">
                We started with the customer journey mapping process, ensuring that we have a complete understanding of the roadblocks IKEA offline customers face when shopping in-store. The understanding then laid the basis for the ERP solution's feature-set and the integration choices.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg  ">
              <div className="text-6xl  font-bold text-gray-700 mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Creation of an ERP solution</h3>
              <p className="text-gray-300 text-sm">
                We worked on the creation of the ERP solution following an agile development approach. Our team of designers, developers, and deployment experts worked together to build a solution that would become the first point of contact for every IKEA walk-in customer.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg  ">
              <div className="text-6xl  font-bold text-gray-700 mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Integrate the facility to gather customers' information</h3>
              <p className="text-gray-300 text-sm">
                A crucial outcome that the IKEA management team was expecting was in terms of customers' information that they could then use as marketing assets. We brainstormed and implemented solutions to gather this data efficiently.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg  ">
              <div className="text-6xl  font-bold text-gray-700 mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Deploy the solution across individual IKEA stores</h3>
              <p className="text-gray-300 text-sm">
                Our deployment team worked on the launch of the ERP solution across different IKEA stores, each with their individual servers. We worked remotely on the IKEA private networks to ensure a smooth rollout process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}