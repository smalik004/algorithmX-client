import React from 'react';
import './shooting.css';


const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden px-4 py-8 min-h-[400px]">
     <div className='span1 '></div>
     <div className='span1 '></div>
     <div className='span1 '></div>
     <div className='span1 '></div>
     <div className='span1 '></div>
     <div className='span1 '></div>
     <div className='span1 '></div>
     <div className='span1 '></div>
     <div className='span1 '></div>
     <div className='span1 '></div>
     <div className='span1 '></div>
      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4">
        
        </div>
        <div className="absolute top-1/3 left-2/3 animation-delay-1000">
          
        </div>
        <div className="absolute top-2/3 left-1/2 animation-delay-2000">
          
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info - Left */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
            <h2 className="font-size-16 font-bold text-white mb-4">ALGORITHMX</h2>
              <div className="w-32 h-32 relative mb-4">
                <img 
                 src="images/new.png"
                  alt="NYC Skyline" 
                  className="object-contain opacity-70"
                />
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <p>2810 N Church St, PMB 15369,</p>
                <p>Wilmington, DE 19802</p>
                <p>AlgorithmX Inc</p>
                <a href="mailto:connect@thealgorithmx.com" className="hover:text-white transition-colors">
                  connect@thealgorithmx.com
                </a>
                <p>+1-425-577-6660</p>
              </div>
            </div>
          </div>

          {/* India Office */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold text-white mb-4">&nbsp;</h2>

              <div className="w-32 h-32 relative mb-4">
                <img 
                  src="images/new.png" 
                  alt="Taj Mahal" 
                  className="object-contain opacity-70"
                />
              </div>
              <h3 className="text-lg font-semibold text-white "></h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Operation Control Center</p>
                <p>Cyber City, Sector 24, Gurgaon,</p>
                <p>Haryana, India AlgorithmX Inc</p>
                <a href="mailto:connect@thealgorithmx.com" className="hover:text-white transition-colors">
                  connect@thealgorithmx.com
                </a>
                <p>1800 202 2202</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="font-semibold font-size-16 text-white mb-6">FOLLOW US</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/api/placeholder/24/24" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/api/placeholder/24/24" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/api/placeholder/24/24" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/api/placeholder/24/24" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="font-size-16 font-semibold text-white mb-2">ALGORITHMX NEWSLETTER</h3>
            <p className="text-sm text-gray-400">From Concept To Market Dominance</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="enter-your@mail.com"
                className="w-full px-6 py-3 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
             {/*} <button className="w-full px-6 py-3 rounded-full bg-gray-500  relative overflow-hidden group">
                <span className="relative  z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button> */}
              <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
             <span>
             <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-slate-800" />
            <span className="text z-10 text-[#cbd5e1]">Subscribe</span>
            </button>
            
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-6 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">©2024 AlgorithmX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors text-sm text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors text-sm text-gray-400">Terms of use</a>
            <a href="#" className="hover:text-white transition-colors text-sm text-gray-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;