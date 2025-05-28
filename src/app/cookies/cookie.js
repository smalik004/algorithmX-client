'use client'
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [servicesHidden, setServicesHidden] = useState(false);
  const [cookieSelections, setCookieSelections] = useState({
    intercom: false,
    googleTagManager: false,
    facebookPixel: false,
    googleAdProducts: false,
    googleAnalytics: false
  });

  // Toggle cookie popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setCurrentStep(1);
    }
  };

  // Close popup
  const handleClose = () => {
    setIsOpen(false);
  };

  // Accept all cookies
  const handleAcceptAll = () => {
    const allAccepted = Object.keys(cookieSelections).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setCookieSelections(allAccepted);
    setIsOpen(false);
  };

  // Toggle individual cookie
  const toggleCookie = (cookie) => {
    setCookieSelections({
      ...cookieSelections,
      [cookie]: !cookieSelections[cookie]
    });
  };

  // Toggle all cookies
  const toggleAllCookies = () => {
    const currentValue = !Object.values(cookieSelections).every(value => value);
    const newSelections = Object.keys(cookieSelections).reduce((acc, key) => {
      acc[key] = currentValue;
      return acc;
    }, {});
    setCookieSelections(newSelections);
  };

  // Toggle services visibility
  const toggleServices = () => {
    setServicesHidden(!servicesHidden);
  };

  return (
    <>
      {/* Sticky Cookie Button */}
      <button 
        onClick={togglePopup}
        className="fixed bottom-4 left-4 bg-white rounded-full px-[10px] py-[5px] shadow-lg flex items-center space-x-2 hover:bg-gray-50 transition-colors z-50"
      >
        <img src="/images/Cookie-seul-normal300.avif" alt="Cookie" className="w-6 h-6" />
        <span className="font-sm text-black">Cookies</span>
      </button>

      {/* Cookie Consent Popup */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 z-50 md:ml-4 ml-[2px] mb-20">
          <div 
            className="bg-white rounded-lg shadow-xl overflow-hidden w-96 max-w-full transform transition-transform duration-300 translate-x-0 animate-slide-in"
            style={{animation: "slideIn 0.3s ease-out"}}
          >
            {/* Step 1 - Initial Popup - Updated with wider layout */}
            {currentStep === 1 && (
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-black">Hi there!</h2>
                    <h1 className="text-xl font-bold mb-2 text-black">We're the cookies</h1>
                    <p className="text-xs text-black mb-3">
                      We waited to make sure that you were interested in the content of this website before bothering you, but we would love to be your companions during your visit...
                    </p>
                  </div>
                  <div className="ml-3 flex-shrink-0">
                    <div className="flex">
                      <img src="/images/persos site-44.avif" alt="Cookie Face" className="w-[100px] h-[70px] object-contain" />
                      
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-600 mb-3 flex items-center">
                  <span>Consents certified by</span>
                  <span className="ml-1">✓</span>
                  <span className="ml-1">axeptio</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={handleClose}
                    className="py-1.5 px-2 border border-gray-300 text-black rounded hover:bg-gray-50 transition-colors text-xs"
                  >
                    No, thanks
                  </button>
                  <button 
                    onClick={() => setCurrentStep(2)}
                    className="py-1.5 px-2 border border-gray-300 text-black rounded hover:bg-gray-50 transition-colors text-xs"
                  >
                    I want to choose
                  </button>
                  <button 
                    onClick={handleAcceptAll}
                    className="py-1.5 px-2 border border-gray-300 rounded bg-yellow-400 text-black font-medium transition-colors text-xs"
                  >
                    OK!
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 - Service Selection */}
            {currentStep === 2 && (
              <div className="p-4">
                <div className="flex items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-black">We are required to tell you</h2>
                    <h2 className="text-lg font-bold mb-2 text-black">That we use cookies</h2>
                    <p className="text-xs text-black mb-2">
                      Purely technical and functional, just know that we do not use or collect or store any personal data.
                    </p>
                  </div>
                  <div className="ml-3">
                    <img src="/images/persos site -module.avif" alt="Cookie Face" className="w-[100px] h-[70px] object-contain" />
                  </div>
                </div>

                {!servicesHidden && (
                  <div className="mb-4 space-y-3">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <span className="font-bold mr-2 w-5 h-5 flex items-center justify-center text-xs">ⓘ</span>
                        <div>
                          <div className="font-medium text-black text-xs">Intercom</div>
                          <div className="text-xs text-gray-500">Chat with us</div>
                        </div>
                      </div>
                      <button className="text-gray-400 w-5 h-5 flex items-center justify-center rounded-full border border-gray-200 text-xs">?</button>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <span className="font-bold mr-2 w-5 h-5 flex items-center justify-center text-xs">G</span>
                        <div>
                          <div className="font-medium text-black text-xs">Google Tag Manager</div>
                          <div className="text-xs text-gray-500">Tag Management System</div>
                        </div>
                      </div>
                      <button className="text-gray-400 w-5 h-5 flex items-center justify-center rounded-full border border-gray-200 text-xs">?</button>
                    </div>
                  </div>
                )}

                <div className="text-xs text-gray-500 mb-3 flex items-center">
                  <span>Consents certified by</span>
                  <span className="ml-1">✓</span>
                  <span className="ml-1">axeptio</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setCurrentStep(1)}
                    className="py-1.5 px-2 border border-gray-300 text-black rounded hover:bg-gray-50 transition-colors text-xs"
                  >
                    Back
                  </button>
                  <button 
                    onClick={toggleServices}
                    className="py-1.5 px-2 border border-gray-300 text-black rounded hover:bg-gray-50 transition-colors text-xs"
                  >
                    {servicesHidden ? 'Show services' : 'Hide services'}
                  </button>
                  <button 
                    onClick={() => setCurrentStep(3)}
                    className="py-1.5 px-2 border border-gray-300 rounded bg-yellow-400 text-black font-medium transition-colors text-xs"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 - Cookie Detail Selection */}
            {currentStep === 3 && (
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h2 className="text-lg font-bold text-black">Here are our cookies!</h2>
                    <p className="text-xs text-black">Light and completely harmless</p>
                  </div>
                  <div className="flex">
                    <img src="/images/persos site -module.avif" alt="Chocolate Cookie" className="w-[100px] h-[70px] object-contain -mr-1" />
                    
                  </div>
                </div>

                <p className="text-xs text-black mb-2">
                  On this website, we use cookies to measure our audience, nurture our relationship with you and send you quality content and advertisement. Select those you allow.
                </p>

                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-black text-xs">Toggle all cookies</div>
                  <button 
                    onClick={toggleAllCookies}
                    className={`w-8 h-4 rounded-full p-0.5 transition-colors ${Object.values(cookieSelections).every(value => value) ? 'bg-green-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${Object.values(cookieSelections).every(value => value) ? 'translate-x-4' : 'translate-x-0'}`}></div>
                  </button>
                </div>
                
                <div className="border rounded-md p-2 mb-2 max-h-36 overflow-y-auto">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-blue-600 font-bold mr-2 w-4 h-4 flex items-center justify-center text-xs">f</span>
                        <div>
                          <div className="font-medium text-black text-xs">Facebook Pixel</div>
                          <div className="text-xs text-gray-500">Identifies visitors from Facebook</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleCookie('facebookPixel')}
                        className={`w-8 h-4 rounded-full p-0.5 transition-colors ${cookieSelections.facebookPixel ? 'bg-green-500' : 'bg-gray-300'}`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${cookieSelections.facebookPixel ? 'translate-x-4' : 'translate-x-0'}`}></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-gray-600 font-bold mr-2 w-4 h-4 flex items-center justify-center text-xs">G</span>
                        <div>
                          <div className="font-medium text-black text-xs">Google Advertising Products</div>
                          <div className="text-xs text-gray-500">Measures campaign performance</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleCookie('googleAdProducts')}
                        className={`w-8 h-4 rounded-full p-0.5 transition-colors ${cookieSelections.googleAdProducts ? 'bg-green-500' : 'bg-gray-300'}`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${cookieSelections.googleAdProducts ? 'translate-x-4' : 'translate-x-0'}`}></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-orange-500 font-bold mr-2 w-4 h-4 flex items-center justify-center text-xs">G</span>
                        <div>
                          <div className="font-medium text-black text-xs">Google Analytics 4</div>
                          <div className="text-xs text-gray-500">Helps us measure our audience</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleCookie('googleAnalytics')}
                        className={`w-8 h-4 rounded-full p-0.5 transition-colors ${cookieSelections.googleAnalytics ? 'bg-green-500' : 'bg-gray-300'}`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${cookieSelections.googleAnalytics ? 'translate-x-4' : 'translate-x-0'}`}></div>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="font-bold mr-2 w-4 h-4 flex items-center justify-center text-xs">ⓘ</span>
                        <div>
                          <div className="font-medium text-black text-xs">Intercom</div>
                          <div className="text-xs text-gray-500">Chat with us</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleCookie('intercom')}
                        className={`w-8 h-4 rounded-full p-0.5 transition-colors ${cookieSelections.intercom ? 'bg-green-500' : 'bg-gray-300'}`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${cookieSelections.intercom ? 'translate-x-4' : 'translate-x-0'}`}></div>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="font-bold mr-2 w-4 h-4 flex items-center justify-center text-xs">G</span>
                        <div>
                          <div className="font-medium text-black text-xs">Google Tag Manager</div>
                          <div className="text-xs text-gray-500">Tag Management System</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleCookie('googleTagManager')}
                        className={`w-8 h-4 rounded-full p-0.5 transition-colors ${cookieSelections.googleTagManager ? 'bg-green-500' : 'bg-gray-300'}`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${cookieSelections.googleTagManager ? 'translate-x-4' : 'translate-x-0'}`}></div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 mb-2 flex items-center">
                  <span>Consents certified by</span>
                  <span className="ml-1">✓</span>
                  <span className="ml-1">axeptio</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setCurrentStep(2)}
                    className="py-1.5 px-2 border border-gray-300 text-black rounded hover:bg-gray-50 transition-colors text-xs"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleAcceptAll}
                    className="py-1.5 px-2 border border-gray-300 rounded bg-yellow-400 text-black font-medium transition-colors text-xs"
                  >
                    Accept all
                  </button>
                  <button 
                    onClick={handleClose}
                    className="py-1.5 px-2 border border-gray-300 rounded text-black font-medium hover:bg-gray-50 transition-colors text-xs"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Add required styles for the slide-in animation */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}