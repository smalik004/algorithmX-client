export default function CaseStudies() {
    return (
        <div className="bg-black py-16 px-4 md:px-8 ">
      <div className="max-w-[1200px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Case Study Cards */}
          <h1 className="text-5xl font-bold mb-12 text-white">More case studies</h1>
  
          <div className="relative">
            {/* Overlay Navigation */}
            <div className="absolute bottom-[150px] left-4 z-10 hidden md:block">
              <a href="/previous-page" target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-black/50 px-3 py-1 rounded hover:bg-black/70 transition">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </a>
            </div>
  
            <div className="absolute bottom-[150px] right-4 z-10 hidden md:block">
              <a href="/next-page" target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-black/50 px-3 py-1 rounded hover:bg-black/70 transition">
                Next
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Domino's Case Study */}
              <a href="/case-studies/dominos" target="_blank" rel="noopener noreferrer" className="group block relative">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/images/case-study-dominos.webp" 
                    alt="Domino's Pizza sliced into pieces" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Dominos</h2>
                 
                </div>
              </a>
  
              {/* Pizza Hut Case Study */}
              <a href="/case-studies/pizza-hut" target="_blank" rel="noopener noreferrer" className="group block relative">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/images/case-study-dominos.webp" 
                    alt="Pizza Hut pepperoni pizza with cheese pull" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Pizza Hut</h2>
                  
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  