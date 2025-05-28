import React from 'react';
import './shooting.css';
import Link from "next/link";

import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});


const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden px-4 py-8 min-h-[400px]">
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4"></div>
        <div className="absolute top-1/3 left-2/3 animation-delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 animation-delay-2000"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Company Info - Left */}
          <div className="flex flex-row items-start gap-10" >
            <div className="flex flex-col items-start">
              <h2 className={`text-[16px] ${monsterfont1.className}  text-white mb-3`}>ALGORITHMX</h2>
              <div className="w-32 h-32 relative mb-1">
                <img 
                  src="images/usa.webp" 
                  alt="NYC Skyline" 
                  className="object-contain mt-10"
                />
              </div>
              <div className="space-y-1 text-[12px] font-helvveticaneue text-semi-white">
                <p>2810 N Church St, PMB 15369,</p>
                <p>Wilmington, DE 19802</p>
                <p>AlgorithmX Inc</p>
                <a href="mailto:connect@thealgorithmx.com" className="hover:text-[#007bff] transition-colors">
                  connect@thealgorithmx.com
                </a>
                <p className="hover:text-[#007bff] transition-colors">+1-425-577-6660</p>
              </div>
            </div>
  
            <div className="flex flex-col items-start ">
              <h2 className="text-xl font-bold text-white mb-2">&nbsp;</h2>
              <div className="w-32 h-32 relative mb-1">
                <img 
                  src="images/india.webp" 
                  alt="Taj Mahal" 
                  className="object-contain mt-10"
                />
              </div>
              <div className="space-y-1 text-[12px] font-helvveticaneue text-semi-white ">
                <p>Operation Control Center</p>
                <p>Cyber City, Sector 24, Gurgaon,</p>
                <p>Haryana, India AlgorithmX Inc</p>
                <a href="mailto:connect@thealgorithmx.com" className="hover:text-[#007bff] transition-colors">
                  connect@thealgorithmx.com
                </a>
                <p className="hover:text-[#007bff] transition-colors">1800 202 2202</p>
              </div>
            </div>
          </div>

          {/* Resources Links - Replacing Social Media Links */}
          <div className='md:ml-[100px]'>
            <h3 className={`text-[16px] ${monsterfont1.className} text-white mb-4 `}>RESOURCES</h3>
            <div className="flex flex-col gap-2">
              <Link href="/blog" className="text-white hover:text-blue-500 transition-colors">
                Blogs
              </Link>
              <Link href="/press-release" className="text-white hover:text-blue-500 transition-colors">
                Knowledge Base
              </Link>
              <Link href="/guides" className="text-white hover:text-blue-500 transition-colors">
                Press Release
              </Link>
              <Link href="/ebooks" className="text-white hover:text-blue-500 transition-colors">
                Brand Audits
              </Link>
              <Link href="/ebooks" className="text-white hover:text-blue-500 transition-colors">
                Product Audits
              </Link>
              <Link href="/ebooks" className="text-white hover:text-blue-500 transition-colors">
                Ebooks & Whitepapers
              </Link>
              <Link href="/ebooks" className="text-white hover:text-blue-500 transition-colors">
                Press Release
              </Link>
              <Link href="/ebooks" className="text-white hover:text-blue-500 transition-colors">
                Our Clients
              </Link>
              <Link href="/ebooks" className="text-white hover:text-blue-500 transition-colors">
                Impact Stories 
              </Link>
            </div>
          </div>

          {/* Reviews section - Replacing Newsletter Subscription */}
<div>
  <h3 className={`text-[16px] ${monsterfont1.className} text-white mb-6`}>REVIEWS:</h3>
  <div className="flex flex-wrap gap-4 items-center justify-start">
    <div className="w-20 h-20 relative">
      <img src="/images/trustpilot.png" alt="Trustpilot" className="object-contain w-full h-full" />
    </div>
    <div className="w-20 h-20 relative">
      <img src="/images/google-reviews.png" alt="Google Reviews" className="object-contain w-full h-full" />
    </div>
    <div className="w-20 h-20 relative">
      <img src="/images/capterra.png" alt="Capterra" className="object-contain w-full h-full" />
    </div>
    <div className="w-20 h-20 relative">
      <img src="/images/capterra.png" alt="Capterra" className="object-contain w-full h-full" />
    </div>
  </div>
</div>

        </div>

        {/* Certificates Section */}
        <div className="mt-12 py-6 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certificates */}
            <div>
              <h3 className={`text-[16px] ${monsterfont1.className} text-white mb-6`}>CERTIFICATES:</h3>
              <div className="flex gap-8 items-start">
                <div className="w-[50px] h-[50px] relative">
                  <img 
                    src="/images/b-corp.png" 
                    alt="B Corp Certificate" 
                    className="object-contain"
                  />
                </div>
                <div className="w-20 h-20 relative">
                  <img 
                    src="/images/nord.png" 
                    alt="ISO Certificate" 
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Partnerships */}
            <div>
              <h3 className={`text-[16px] ${monsterfont1.className} text-white mb-6`}>PARTNERSHIPS:</h3>
              <div className="flex flex-wrap gap-6 items-start">
                <div className="w-24 h-20 relative">
                  <img 
                    src="/images/microsoft.png" 
                    alt="Microsoft" 
                    className="object-contain"
                  />
                </div>
                <div className="w-[50px] h-[50px] relative">
                  <img 
                    src="/images/aws (1).png" 
                    alt="AWS Partner" 
                    className="object-contain"
                  />
                </div>
                <div className="w-24 h-20 relative">
                  <img 
                    src="/images/Mendix.png" 
                    alt="Mendix" 
                    className="object-contain"
                  />
                </div>
                <div className="w-24 h-20 relative">
                  <img 
                    src="/images/gcp.png" 
                    alt="Google Cloud Partner" 
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mt-12 py-6 border-t border-gray-700">
          <h3 className={`text-[16px] ${monsterfont1.className} text-white mb-6`}>RECOGNIZED BY:</h3>
          <div className="flex flex-wrap gap-8 items-center justify-between">
            <div className="w-24 h-20 relative">
              <img 
                src="/images/4 (1).png" 
                alt="Clutch" 
                className="object-contain"
              />
            </div>
            <div className="w-24 h-20 relative">
              <img 
                src="/images/awwwards1.png" 
                alt="Awwwards" 
                className="object-contain"
              />
            </div>
            <div className="w-24 h-20 relative">
              <img 
                src="/images/inc5000.png" 
                alt="Inc 5000" 
                className="object-contain"
              />
            </div>
            <div className="w-24 h-20 relative">
              <img 
                src="/images/entrepreneur.png" 
                alt="Entrepreneur of the Year" 
                className="object-contain"
              />
            </div>
            <div className="w-24 h-20 relative">
              <img 
                src="/images/forbes.png" 
                alt="Forbes" 
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-helvveticaneue text-white">©2024 AlgorithmX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-blue-500 transition-colors text-[12px] font-helvveticaneue text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-500 transition-colors text-[12px] font-helvveticaneue text-white">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors text-[12px] font-helvveticaneue text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;